# itest

It's supposed to start a browser REPL programmatically, but currently it results in some exceptions: https://gist.github.com/4630437

Related: https://github.com/cemerick/piggieback/issues/7

```
wei:itest wei$ lein run
**************** Started webserver. ****************
2013-01-24 16:42:18.773:INFO::Logging to STDERR via org.mortbay.log.StdErrLog
Started web server on port 3000
**************** Starting JVM REPL. ****************
2013-01-24 16:42:18.774:INFO::jetty-6.1.25
2013-01-24 16:42:18.812:INFO::Started SocketConnector@0.0.0.0:3000
**************** Upgrading the REPL to a browser-REPL. ****************
java.lang.IllegalStateException: Can't change/establish root binding of: *cljs-ns* with set
  at clojure.lang.Var.set(Var.java:233)
  at cljs.analyzer$eval1388$fn__1390.invoke(analyzer.clj:652)
	at clojure.lang.MultiFn.invoke(MultiFn.java:177)
	at cljs.analyzer$analyze_seq.invoke(analyzer.clj:875)
	at cljs.analyzer$analyze.invoke(analyzer.clj:930)
	at cljs.analyzer$analyze.invoke(analyzer.clj:922)
	at cljs.repl$evaluate_form.invoke(repl.clj:66)
	at cljs.repl$evaluate_form.invoke(repl.clj:63)
	at cljs.repl.rhino$rhino_setup.invoke(rhino.clj:101)
	at cljs.repl.rhino$eval4718$fn__4725.invoke(rhino.clj:116)
	at cljs.repl$eval2664$fn__2665$G__2655__2670.invoke(repl.clj:20)
	at user$eval5665.invoke(NO_SOURCE_FILE:1)
	at clojure.lang.Compiler.eval(Compiler.java:6511)
	at clojure.lang.Compiler.eval(Compiler.java:6500)
  ...
```

## Usage

```Clojure
lein run
```
