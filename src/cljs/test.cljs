(ns itest
  (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(defn ^:export test-fn [] "The answer is 42")

(def xhr (goog.net.XhrIo.))
(defn ^:export call-increment []
  (.send xhr "/inc"))
