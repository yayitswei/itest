(ns itest
  (:require [clojure.browser.repl :as repl]))

(defn ^:export test-fn []
  11)

(repl/connect "http://localhost:9000/repl")
