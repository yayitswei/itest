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
            [cemerick.yonder :as yonder]
            [itest.util :as util]))

(defroutes app-routes
           (route/resources "/"))

(defn start-web []
  (ring-serve/serve-headless (handler/site app-routes)))

(def say-hi
  '(println "HELLO WORLD"))

(defn -main [& m]
  (println "**************** Started webserver. ****************")
  (start-web)
  (Thread/sleep 1000)

  (println "**************** Starting JVM REPL. ****************")
  (let [session (yonder/prep-session
                  {:prepare (partial yonder/prepare-cljs-browser
                                     "http://localhost:3000/index.html" 9000)
                   :new-server
                   {:handler (clojure.tools.nrepl.server/default-handler
                               #'cemerick.piggieback/wrap-cljs-repl)}})]
    (prn (yonder/eval session (into [] (js/Array :hello "from" 'ClojureScript)))))
  (System/exit 0))
