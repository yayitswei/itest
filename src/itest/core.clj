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
            [cemerick.yonder :as yonder]
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

  (let [session (yonder/prep-session
                  {:prepare yonder/prepare-cljs-browser
                   :new-server
                   {:handler (clojure.tools.nrepl.server/default-handler
                               #'cemerick.piggieback/wrap-cljs-repl)}})]
    (println (yonder/eval session (+ 1 2 3))))

  (browse-url "http://localhost:3000/index.html")
  (System/exit 0))
