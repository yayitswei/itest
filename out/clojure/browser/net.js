goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11359){
var vec__11360__11361 = p__11359;
var k__11362 = cljs.core.nth.call(null,vec__11360__11361,0,null);
var v__11363 = cljs.core.nth.call(null,vec__11360__11361,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11362.toLowerCase()),v__11363], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____11380 = this$;
if(and__3822__auto____11380)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____11380;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__3510__auto____11381 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11382 = (clojure.browser.net.connect[goog.typeOf(x__3510__auto____11381)]);
if(or__3824__auto____11382)
{return or__3824__auto____11382;
} else
{var or__3824__auto____11383 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____11383)
{return or__3824__auto____11383;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____11384 = this$;
if(and__3822__auto____11384)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____11384;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__3510__auto____11385 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11386 = (clojure.browser.net.connect[goog.typeOf(x__3510__auto____11385)]);
if(or__3824__auto____11386)
{return or__3824__auto____11386;
} else
{var or__3824__auto____11387 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____11387)
{return or__3824__auto____11387;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____11388 = this$;
if(and__3822__auto____11388)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____11388;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__3510__auto____11389 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11390 = (clojure.browser.net.connect[goog.typeOf(x__3510__auto____11389)]);
if(or__3824__auto____11390)
{return or__3824__auto____11390;
} else
{var or__3824__auto____11391 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____11391)
{return or__3824__auto____11391;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____11392 = this$;
if(and__3822__auto____11392)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____11392;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__3510__auto____11393 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11394 = (clojure.browser.net.connect[goog.typeOf(x__3510__auto____11393)]);
if(or__3824__auto____11394)
{return or__3824__auto____11394;
} else
{var or__3824__auto____11395 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____11395)
{return or__3824__auto____11395;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____11416 = this$;
if(and__3822__auto____11416)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____11416;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__3510__auto____11417 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11418 = (clojure.browser.net.transmit[goog.typeOf(x__3510__auto____11417)]);
if(or__3824__auto____11418)
{return or__3824__auto____11418;
} else
{var or__3824__auto____11419 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____11419)
{return or__3824__auto____11419;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____11420 = this$;
if(and__3822__auto____11420)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____11420;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__3510__auto____11421 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11422 = (clojure.browser.net.transmit[goog.typeOf(x__3510__auto____11421)]);
if(or__3824__auto____11422)
{return or__3824__auto____11422;
} else
{var or__3824__auto____11423 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____11423)
{return or__3824__auto____11423;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____11424 = this$;
if(and__3822__auto____11424)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____11424;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__3510__auto____11425 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11426 = (clojure.browser.net.transmit[goog.typeOf(x__3510__auto____11425)]);
if(or__3824__auto____11426)
{return or__3824__auto____11426;
} else
{var or__3824__auto____11427 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____11427)
{return or__3824__auto____11427;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____11428 = this$;
if(and__3822__auto____11428)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____11428;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__3510__auto____11429 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11430 = (clojure.browser.net.transmit[goog.typeOf(x__3510__auto____11429)]);
if(or__3824__auto____11430)
{return or__3824__auto____11430;
} else
{var or__3824__auto____11431 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____11431)
{return or__3824__auto____11431;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____11432 = this$;
if(and__3822__auto____11432)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____11432;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__3510__auto____11433 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11434 = (clojure.browser.net.transmit[goog.typeOf(x__3510__auto____11433)]);
if(or__3824__auto____11434)
{return or__3824__auto____11434;
} else
{var or__3824__auto____11435 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____11435)
{return or__3824__auto____11435;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____11440 = this$;
if(and__3822__auto____11440)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____11440;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__3510__auto____11441 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11442 = (clojure.browser.net.close[goog.typeOf(x__3510__auto____11441)]);
if(or__3824__auto____11442)
{return or__3824__auto____11442;
} else
{var or__3824__auto____11443 = (clojure.browser.net.close["_"]);
if(or__3824__auto____11443)
{return or__3824__auto____11443;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11444){
var vec__11445__11446 = p__11444;
var k__11447 = cljs.core.nth.call(null,vec__11445__11446,0,null);
var v__11448 = cljs.core.nth.call(null,vec__11445__11446,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11447.toLowerCase()),v__11448], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__11449){
var vec__11450__11451 = p__11449;
var k__11452 = cljs.core.nth.call(null,vec__11450__11451,0,null);
var v__11453 = cljs.core.nth.call(null,vec__11450__11451,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__11452.toLowerCase()),v__11453], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____11462 = this$;
if(and__3822__auto____11462)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____11462;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__3510__auto____11463 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11464 = (clojure.browser.net.register_service[goog.typeOf(x__3510__auto____11463)]);
if(or__3824__auto____11464)
{return or__3824__auto____11464;
} else
{var or__3824__auto____11465 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____11465)
{return or__3824__auto____11465;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____11466 = this$;
if(and__3822__auto____11466)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____11466;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__3510__auto____11467 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____11468 = (clojure.browser.net.register_service[goog.typeOf(x__3510__auto____11467)]);
if(or__3824__auto____11468)
{return or__3824__auto____11468;
} else
{var or__3824__auto____11469 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____11469)
{return or__3824__auto____11469;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____11481 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____11481))
{var config__11482 = temp__3974__auto____11481;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__11482)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__11483){
var vec__11484__11485 = p__11483;
var k__11486 = cljs.core.nth.call(null,vec__11484__11485,0,null);
var v__11487 = cljs.core.nth.call(null,vec__11484__11485,1,null);
var temp__3971__auto____11488 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__11486,null);
if(cljs.core.truth_(temp__3971__auto____11488))
{var field__11489 = temp__3971__auto____11488;
var G__11490__11491 = sum;
(G__11490__11491[field__11489] = v__11487);
return G__11490__11491;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
