# Integration Testing with Clojure and Clojurescript

When it comes to integration testing for web apps, the traditional recommendation is Selenium, which launches a browser and controls it to run the tests. Selenium tests can be [slow, brittle and non-deterministic](http://jdrew33.blogspot.com/2012/02/pros-and-cons-of-selenium.html), which motivated us to look for an alternative.

The goal is to be able to write tests that can make frontend calls and verify state changes on the backend. For this, Clojure, a modern dialect of Lisp that runs on the JVM, and its Javascript variant ClojureScript were good candidates since it allows us to use the same language on both the frontend and backend. But we need a way to connect the two..

Enter [cemerick/yonder](http://github.com/cemerick/yonder). It does the dirty work of setting up a REPL, upgrading it to a Clojurescript REPL, and exposing a session to send Clojurescript commands for evaluation.

This tells yonder to open up a page to http://localhost:3000/index.html and connect to the clojurescript repl on port 9000.

```Clojure
(yonder/prep-session
          {:prepare (partial yonder/prepare-cljs-browser
                             "http://localhost:3000/index.html" 9000)
           :new-server
           {:handler (clojure.tools.nrepl.server/default-handler
                       #'cemerick.piggieback/wrap-cljs-repl)}})
```

yonder's default prepare function looks like this. If you need to run some custom setup, for example, use PhantomJS for headless testing, you can write your own prepare function.

```Clojure
(defn prepare-cljs-browser
 ([session] (prepare-cljs-browser "http://localhost:8080" 9000 session))
 ([browser-url browser-repl-port session]
  (eval session (cemerick.piggieback/cljs-repl
                 :repl-env (doto (cljs.repl.browser/repl-env :port 9000 #_browser-repl-port)
                   cljs.repl/-setup)))
  (browse-url browser-url)
  session))
```

To put it all together, we can write a test suite that utilizes yonder.

Let's make a mock route `/inc` that increments a counter, and a Javascript test that makes a request to `/inc`. We used [mocha](http://visionmedia.github.com/mocha/) as our test framework, but you can use any Javascript you like.

```Clojure
(def counter (atom 0))
(defroutes app-routes
           (POST "/inc" [] (swap! counter inc)))
```

We can write a test that starts the mock server, preps a session, then runs some ClojureScript and verifies the outcome.

```Clojure
(deftest browser-test
         (let [http (ring.adapter.jetty/run-jetty site
                                                  {:port 8080 :join? false})
               session (yonder/prep-session
                         {:prepare (partial yonder/prepare-cljs-browser
                                     "http://localhost:8080/test.html" 9000)
                          :new-server
                          {:handler (clojure.tools.nrepl.server/default-handler
                                      #'cemerick.piggieback/wrap-cljs-repl)}})]
           (yonder/eval session (.run js/mocha))
           (Thread/sleep 2000)
           (is (= 1 (@counter)))))
```

```bash
wei:clojure wei$ lein test

lein test shuttle.core-test
2013-02-05 05:35:58.117:INFO:oejs.Server:jetty-7.6.1.v20120215

Testing shuttle.core-test
2013-02-05 05:35:58.208:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:8080

Ran 1 tests containing 1 assertions.
0 failures, 0 errors.
```

Please check out the project at http://www.github.com/___!
