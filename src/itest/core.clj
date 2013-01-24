(ns itest.core
  (:use compojure.core)
  (:require [clojure.tools.nrepl.server :as nrepl-server]
            [clojure.tools.nrepl :as repl]
            [cljs.repl.browser]
            [clj-http.client :as http]
            [clojure.pprint]
            [ring.util.serve :as ring-serve]
            [cemerick.piggieback :as pback]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [itest.util :as util]
            ))

(comment
  (defn start-server []
    (server/start-server
      :handler (server/default-handler #'pback/wrap-cljs-repl))))

(def counter (atom 0))

(defroutes app-routes
           (GET "/inc" [] (str (swap! counter inc)))
           (route/resources "/")
           (route/not-found "Not Found"))

(def app
  (handler/site app-routes))

(defn start-web []
  (ring-serve/serve app))

(def test-cmds
  '(do
     (ns itest.core)
     (load "core")
     (http/get "http://0.0.0.0:3000/inc")
     (http/get "http://0.0.0.0:3000/inc")
     (http/get "http://0.0.0.0:3000/inc")
     (http/get "http://0.0.0.0:3000/inc")
     @counter
     ))

(defn -main [& m]
  (start-web)
  (println "started web.")
  ;(http/get "http://0.0.0.0:3000/index.html")
  (let [server (nrepl-server/start-server
                 :handler (nrepl-server/default-handler #'pback/wrap-cljs-repl))]
    (println "started server repl.waiting 5 sec for connection...")
    (Thread/sleep 5000)
    (println "connecting to our js repl")
    (with-open [conn (repl/connect :port 9000)]
      (println
        (->
          (repl/client conn 1000)
          (repl/message {:op :eval :code "(js/alert \"yay\")"})
          doall
          clojure.pprint/pprint)))
    (nrepl-server/stop-server server))
  (System/exit 0))
