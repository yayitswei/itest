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

(def counter (atom 0))

(defroutes app-routes
           (route/resources "/")
           (GET "/inc" [] (str (swap! counter inc))))

(defn start-web []
  (ring-serve/serve-headless (handler/site app-routes)))

(defn -main [& m]
  (start-web)

  (let [session (yonder/prep-session
                  {:prepare (partial yonder/prepare-cljs-browser
                                     "http://localhost:3000/index.html" 9000)
                   :new-server
                   {:handler (clojure.tools.nrepl.server/default-handler
                               #'cemerick.piggieback/wrap-cljs-repl)}})]
    (prn (yonder/eval session (into [] (js/Array :hello "from" 'ClojureScript))))
    (prn (yonder/eval session (+ 1 2 3)))
    (prn (yonder/eval session (itest/test-fn)))
    (prn @counter)
    (prn (yonder/eval session (itest/call-increment)))
    (prn @counter)
    (prn (yonder/eval session (itest/call-increment)))
    (prn @counter))
  (System/exit 0))
