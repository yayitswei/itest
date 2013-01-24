(ns itest.core
  (:use [compojure.core]
        [clojure.java.browse :only [browse-url]])
  (:require [clojure.tools.nrepl.server :as nrepl-server]
            [clojure.tools.nrepl :as repl]
            [cljs.repl.browser]
            [clojure.pprint]
            [ring.util.serve :as ring-serve]
            [cemerick.piggieback :as pback]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [itest.util :as util]))

(defroutes app-routes
           (route/resources "/"))

(defn start-web []
  (ring-serve/serve-headless (handler/site app-routes)))

(def upgrade-to-cljs-repl
 '(cemerick.piggieback/cljs-repl
       :repl-env (doto (cljs.repl.browser/repl-env :port 9000) cljs.repl/-setup)))

(defn -main [& m]
  (println "**************** Started webserver. ****************")
  (start-web)

  (println "**************** Starting JVM REPL. ****************")
  (nrepl-server/start-server
    :handler (nrepl-server/default-handler #'pback/wrap-cljs-repl)
    :port 7888)

  (println "**************** Upgrading the REPL to a browser-REPL. ****************")
  ;; produces this error:
  ;; java.lang.IllegalStateException: Can't change/establish root binding of: *cljs-ns* with set
  (with-open [conn (repl/connect :port 7888)]
    (println
      (->
        (repl/client conn 1000)
        (repl/message {:op :eval :code (str upgrade-to-cljs-repl)})
        clojure.pprint/pprint)))
  (browse-url "http://localhost:3000/index.html")
  (System/exit 0))
