(defproject itest "0.1.0-SNAPSHOT"
            :description "FIXME: write description"
            :url "http://example.com/FIXME"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [com.cemerick/piggieback "0.0.2"]
                           [ring-serve "0.1.2"]
                           [yayitswei/yonder "0.0.1-SNAPSHOT"]
                           [lein-cljsbuild "0.2.10"]
                           [org.clojure/tools.nrepl "0.2.2-SNAPSHOT"]
                           [clj-http "0.6.3"]
                           [compojure "1.1.5"]]
            :plugins [[lein-cljsbuild "0.2.10"]
                      [lein-ring "0.8.2"]]
            :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
            :ring {:handler itest.core/app}
            :repositories {"snapshots" {:url "https://oss.sonatype.org/content/repositories/snapshots/"}}
            :cljsbuild {:builds
                        {:test
                         {:source-path "src/cljs"
                          :compiler
                          {:output-to "resources/public/test.js"
                           :optimizations :whitespace
                           :pretty-print true
                           :externs ["externs/jquery-1.8.3.js"]
                           }}
                         }
                        :test-commands
                        {"unit" ["phantomjs"
                                 "phantom/unit-test.js"
                                 "resources/private/html/test.html"]}
                        }
            :main itest.core)
