goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__7420 = (((x == null))?null:x);
if((p[goog.typeOf(x__7420)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7421__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7421 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7421__delegate.call(this, array, i, idxs);
};
G__7421.cljs$lang$maxFixedArity = 2;
G__7421.cljs$lang$applyTo = (function (arglist__7422){
var array = cljs.core.first(arglist__7422);
var i = cljs.core.first(cljs.core.next(arglist__7422));
var idxs = cljs.core.rest(cljs.core.next(arglist__7422));
return G__7421__delegate(array, i, idxs);
});
G__7421.cljs$lang$arity$variadic = G__7421__delegate;
return G__7421;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____7507 = this$;
if(and__3822__auto____7507)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7507;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3510__auto____7508 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7509 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7508)]);
if(or__3824__auto____7509)
{return or__3824__auto____7509;
} else
{var or__3824__auto____7510 = (cljs.core._invoke["_"]);
if(or__3824__auto____7510)
{return or__3824__auto____7510;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7511 = this$;
if(and__3822__auto____7511)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7511;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3510__auto____7512 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7513 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7512)]);
if(or__3824__auto____7513)
{return or__3824__auto____7513;
} else
{var or__3824__auto____7514 = (cljs.core._invoke["_"]);
if(or__3824__auto____7514)
{return or__3824__auto____7514;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7515 = this$;
if(and__3822__auto____7515)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7515;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3510__auto____7516 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7517 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7516)]);
if(or__3824__auto____7517)
{return or__3824__auto____7517;
} else
{var or__3824__auto____7518 = (cljs.core._invoke["_"]);
if(or__3824__auto____7518)
{return or__3824__auto____7518;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7519 = this$;
if(and__3822__auto____7519)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7519;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3510__auto____7520 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7521 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7520)]);
if(or__3824__auto____7521)
{return or__3824__auto____7521;
} else
{var or__3824__auto____7522 = (cljs.core._invoke["_"]);
if(or__3824__auto____7522)
{return or__3824__auto____7522;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7523 = this$;
if(and__3822__auto____7523)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7523;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3510__auto____7524 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7525 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7524)]);
if(or__3824__auto____7525)
{return or__3824__auto____7525;
} else
{var or__3824__auto____7526 = (cljs.core._invoke["_"]);
if(or__3824__auto____7526)
{return or__3824__auto____7526;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7527 = this$;
if(and__3822__auto____7527)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7527;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3510__auto____7528 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7529 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7528)]);
if(or__3824__auto____7529)
{return or__3824__auto____7529;
} else
{var or__3824__auto____7530 = (cljs.core._invoke["_"]);
if(or__3824__auto____7530)
{return or__3824__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7531 = this$;
if(and__3822__auto____7531)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7531;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3510__auto____7532 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7533 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7532)]);
if(or__3824__auto____7533)
{return or__3824__auto____7533;
} else
{var or__3824__auto____7534 = (cljs.core._invoke["_"]);
if(or__3824__auto____7534)
{return or__3824__auto____7534;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7535 = this$;
if(and__3822__auto____7535)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7535;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3510__auto____7536 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7537 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7536)]);
if(or__3824__auto____7537)
{return or__3824__auto____7537;
} else
{var or__3824__auto____7538 = (cljs.core._invoke["_"]);
if(or__3824__auto____7538)
{return or__3824__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7539 = this$;
if(and__3822__auto____7539)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7539;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3510__auto____7540 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7541 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7540)]);
if(or__3824__auto____7541)
{return or__3824__auto____7541;
} else
{var or__3824__auto____7542 = (cljs.core._invoke["_"]);
if(or__3824__auto____7542)
{return or__3824__auto____7542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7543 = this$;
if(and__3822__auto____7543)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7543;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3510__auto____7544 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7545 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7544)]);
if(or__3824__auto____7545)
{return or__3824__auto____7545;
} else
{var or__3824__auto____7546 = (cljs.core._invoke["_"]);
if(or__3824__auto____7546)
{return or__3824__auto____7546;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7547 = this$;
if(and__3822__auto____7547)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7547;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3510__auto____7548 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7549 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7548)]);
if(or__3824__auto____7549)
{return or__3824__auto____7549;
} else
{var or__3824__auto____7550 = (cljs.core._invoke["_"]);
if(or__3824__auto____7550)
{return or__3824__auto____7550;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7551 = this$;
if(and__3822__auto____7551)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7551;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3510__auto____7552 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7553 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7552)]);
if(or__3824__auto____7553)
{return or__3824__auto____7553;
} else
{var or__3824__auto____7554 = (cljs.core._invoke["_"]);
if(or__3824__auto____7554)
{return or__3824__auto____7554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7555 = this$;
if(and__3822__auto____7555)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7555;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3510__auto____7556 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7557 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7556)]);
if(or__3824__auto____7557)
{return or__3824__auto____7557;
} else
{var or__3824__auto____7558 = (cljs.core._invoke["_"]);
if(or__3824__auto____7558)
{return or__3824__auto____7558;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7559 = this$;
if(and__3822__auto____7559)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7559;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3510__auto____7560 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7561 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7560)]);
if(or__3824__auto____7561)
{return or__3824__auto____7561;
} else
{var or__3824__auto____7562 = (cljs.core._invoke["_"]);
if(or__3824__auto____7562)
{return or__3824__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7563 = this$;
if(and__3822__auto____7563)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7563;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3510__auto____7564 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7565 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7564)]);
if(or__3824__auto____7565)
{return or__3824__auto____7565;
} else
{var or__3824__auto____7566 = (cljs.core._invoke["_"]);
if(or__3824__auto____7566)
{return or__3824__auto____7566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7567 = this$;
if(and__3822__auto____7567)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7567;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3510__auto____7568 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7569 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7568)]);
if(or__3824__auto____7569)
{return or__3824__auto____7569;
} else
{var or__3824__auto____7570 = (cljs.core._invoke["_"]);
if(or__3824__auto____7570)
{return or__3824__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7571 = this$;
if(and__3822__auto____7571)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7571;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3510__auto____7572 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7573 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7572)]);
if(or__3824__auto____7573)
{return or__3824__auto____7573;
} else
{var or__3824__auto____7574 = (cljs.core._invoke["_"]);
if(or__3824__auto____7574)
{return or__3824__auto____7574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7575 = this$;
if(and__3822__auto____7575)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3510__auto____7576 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7577 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7576)]);
if(or__3824__auto____7577)
{return or__3824__auto____7577;
} else
{var or__3824__auto____7578 = (cljs.core._invoke["_"]);
if(or__3824__auto____7578)
{return or__3824__auto____7578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7579 = this$;
if(and__3822__auto____7579)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7579;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3510__auto____7580 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7581 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7580)]);
if(or__3824__auto____7581)
{return or__3824__auto____7581;
} else
{var or__3824__auto____7582 = (cljs.core._invoke["_"]);
if(or__3824__auto____7582)
{return or__3824__auto____7582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7583 = this$;
if(and__3822__auto____7583)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7583;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3510__auto____7584 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7585 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7584)]);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{var or__3824__auto____7586 = (cljs.core._invoke["_"]);
if(or__3824__auto____7586)
{return or__3824__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7587 = this$;
if(and__3822__auto____7587)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3510__auto____7588 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7589 = (cljs.core._invoke[goog.typeOf(x__3510__auto____7588)]);
if(or__3824__auto____7589)
{return or__3824__auto____7589;
} else
{var or__3824__auto____7590 = (cljs.core._invoke["_"]);
if(or__3824__auto____7590)
{return or__3824__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____7595 = coll;
if(and__3822__auto____7595)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7595;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3510__auto____7596 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7597 = (cljs.core._count[goog.typeOf(x__3510__auto____7596)]);
if(or__3824__auto____7597)
{return or__3824__auto____7597;
} else
{var or__3824__auto____7598 = (cljs.core._count["_"]);
if(or__3824__auto____7598)
{return or__3824__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7603 = coll;
if(and__3822__auto____7603)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7603;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3510__auto____7604 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7605 = (cljs.core._empty[goog.typeOf(x__3510__auto____7604)]);
if(or__3824__auto____7605)
{return or__3824__auto____7605;
} else
{var or__3824__auto____7606 = (cljs.core._empty["_"]);
if(or__3824__auto____7606)
{return or__3824__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7611 = coll;
if(and__3822__auto____7611)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7611;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3510__auto____7612 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7613 = (cljs.core._conj[goog.typeOf(x__3510__auto____7612)]);
if(or__3824__auto____7613)
{return or__3824__auto____7613;
} else
{var or__3824__auto____7614 = (cljs.core._conj["_"]);
if(or__3824__auto____7614)
{return or__3824__auto____7614;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____7623 = coll;
if(and__3822__auto____7623)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7623;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3510__auto____7624 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7625 = (cljs.core._nth[goog.typeOf(x__3510__auto____7624)]);
if(or__3824__auto____7625)
{return or__3824__auto____7625;
} else
{var or__3824__auto____7626 = (cljs.core._nth["_"]);
if(or__3824__auto____7626)
{return or__3824__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7627 = coll;
if(and__3822__auto____7627)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7627;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3510__auto____7628 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7629 = (cljs.core._nth[goog.typeOf(x__3510__auto____7628)]);
if(or__3824__auto____7629)
{return or__3824__auto____7629;
} else
{var or__3824__auto____7630 = (cljs.core._nth["_"]);
if(or__3824__auto____7630)
{return or__3824__auto____7630;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____7635 = coll;
if(and__3822__auto____7635)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7635;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3510__auto____7636 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7637 = (cljs.core._first[goog.typeOf(x__3510__auto____7636)]);
if(or__3824__auto____7637)
{return or__3824__auto____7637;
} else
{var or__3824__auto____7638 = (cljs.core._first["_"]);
if(or__3824__auto____7638)
{return or__3824__auto____7638;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7643 = coll;
if(and__3822__auto____7643)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7643;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3510__auto____7644 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7645 = (cljs.core._rest[goog.typeOf(x__3510__auto____7644)]);
if(or__3824__auto____7645)
{return or__3824__auto____7645;
} else
{var or__3824__auto____7646 = (cljs.core._rest["_"]);
if(or__3824__auto____7646)
{return or__3824__auto____7646;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7651 = coll;
if(and__3822__auto____7651)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7651;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3510__auto____7652 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7653 = (cljs.core._next[goog.typeOf(x__3510__auto____7652)]);
if(or__3824__auto____7653)
{return or__3824__auto____7653;
} else
{var or__3824__auto____7654 = (cljs.core._next["_"]);
if(or__3824__auto____7654)
{return or__3824__auto____7654;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____7663 = o;
if(and__3822__auto____7663)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7663;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3510__auto____7664 = (((o == null))?null:o);
return (function (){var or__3824__auto____7665 = (cljs.core._lookup[goog.typeOf(x__3510__auto____7664)]);
if(or__3824__auto____7665)
{return or__3824__auto____7665;
} else
{var or__3824__auto____7666 = (cljs.core._lookup["_"]);
if(or__3824__auto____7666)
{return or__3824__auto____7666;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7667 = o;
if(and__3822__auto____7667)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7667;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3510__auto____7668 = (((o == null))?null:o);
return (function (){var or__3824__auto____7669 = (cljs.core._lookup[goog.typeOf(x__3510__auto____7668)]);
if(or__3824__auto____7669)
{return or__3824__auto____7669;
} else
{var or__3824__auto____7670 = (cljs.core._lookup["_"]);
if(or__3824__auto____7670)
{return or__3824__auto____7670;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____7675 = coll;
if(and__3822__auto____7675)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7675;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3510__auto____7676 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7677 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3510__auto____7676)]);
if(or__3824__auto____7677)
{return or__3824__auto____7677;
} else
{var or__3824__auto____7678 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7678)
{return or__3824__auto____7678;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7683 = coll;
if(and__3822__auto____7683)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7683;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3510__auto____7684 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7685 = (cljs.core._assoc[goog.typeOf(x__3510__auto____7684)]);
if(or__3824__auto____7685)
{return or__3824__auto____7685;
} else
{var or__3824__auto____7686 = (cljs.core._assoc["_"]);
if(or__3824__auto____7686)
{return or__3824__auto____7686;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7691 = coll;
if(and__3822__auto____7691)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7691;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3510__auto____7692 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7693 = (cljs.core._dissoc[goog.typeOf(x__3510__auto____7692)]);
if(or__3824__auto____7693)
{return or__3824__auto____7693;
} else
{var or__3824__auto____7694 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7694)
{return or__3824__auto____7694;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7699 = coll;
if(and__3822__auto____7699)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7699;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3510__auto____7700 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7701 = (cljs.core._key[goog.typeOf(x__3510__auto____7700)]);
if(or__3824__auto____7701)
{return or__3824__auto____7701;
} else
{var or__3824__auto____7702 = (cljs.core._key["_"]);
if(or__3824__auto____7702)
{return or__3824__auto____7702;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7707 = coll;
if(and__3822__auto____7707)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7707;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3510__auto____7708 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7709 = (cljs.core._val[goog.typeOf(x__3510__auto____7708)]);
if(or__3824__auto____7709)
{return or__3824__auto____7709;
} else
{var or__3824__auto____7710 = (cljs.core._val["_"]);
if(or__3824__auto____7710)
{return or__3824__auto____7710;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7715 = coll;
if(and__3822__auto____7715)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7715;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3510__auto____7716 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7717 = (cljs.core._disjoin[goog.typeOf(x__3510__auto____7716)]);
if(or__3824__auto____7717)
{return or__3824__auto____7717;
} else
{var or__3824__auto____7718 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7718)
{return or__3824__auto____7718;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7723 = coll;
if(and__3822__auto____7723)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7723;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3510__auto____7724 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7725 = (cljs.core._peek[goog.typeOf(x__3510__auto____7724)]);
if(or__3824__auto____7725)
{return or__3824__auto____7725;
} else
{var or__3824__auto____7726 = (cljs.core._peek["_"]);
if(or__3824__auto____7726)
{return or__3824__auto____7726;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7731 = coll;
if(and__3822__auto____7731)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7731;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3510__auto____7732 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7733 = (cljs.core._pop[goog.typeOf(x__3510__auto____7732)]);
if(or__3824__auto____7733)
{return or__3824__auto____7733;
} else
{var or__3824__auto____7734 = (cljs.core._pop["_"]);
if(or__3824__auto____7734)
{return or__3824__auto____7734;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7739 = coll;
if(and__3822__auto____7739)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7739;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3510__auto____7740 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7741 = (cljs.core._assoc_n[goog.typeOf(x__3510__auto____7740)]);
if(or__3824__auto____7741)
{return or__3824__auto____7741;
} else
{var or__3824__auto____7742 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7742)
{return or__3824__auto____7742;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7747 = o;
if(and__3822__auto____7747)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7747;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3510__auto____7748 = (((o == null))?null:o);
return (function (){var or__3824__auto____7749 = (cljs.core._deref[goog.typeOf(x__3510__auto____7748)]);
if(or__3824__auto____7749)
{return or__3824__auto____7749;
} else
{var or__3824__auto____7750 = (cljs.core._deref["_"]);
if(or__3824__auto____7750)
{return or__3824__auto____7750;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7755 = o;
if(and__3822__auto____7755)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7755;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3510__auto____7756 = (((o == null))?null:o);
return (function (){var or__3824__auto____7757 = (cljs.core._deref_with_timeout[goog.typeOf(x__3510__auto____7756)]);
if(or__3824__auto____7757)
{return or__3824__auto____7757;
} else
{var or__3824__auto____7758 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7758)
{return or__3824__auto____7758;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7763 = o;
if(and__3822__auto____7763)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7763;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3510__auto____7764 = (((o == null))?null:o);
return (function (){var or__3824__auto____7765 = (cljs.core._meta[goog.typeOf(x__3510__auto____7764)]);
if(or__3824__auto____7765)
{return or__3824__auto____7765;
} else
{var or__3824__auto____7766 = (cljs.core._meta["_"]);
if(or__3824__auto____7766)
{return or__3824__auto____7766;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7771 = o;
if(and__3822__auto____7771)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7771;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3510__auto____7772 = (((o == null))?null:o);
return (function (){var or__3824__auto____7773 = (cljs.core._with_meta[goog.typeOf(x__3510__auto____7772)]);
if(or__3824__auto____7773)
{return or__3824__auto____7773;
} else
{var or__3824__auto____7774 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7774)
{return or__3824__auto____7774;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____7783 = coll;
if(and__3822__auto____7783)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7783;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3510__auto____7784 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7785 = (cljs.core._reduce[goog.typeOf(x__3510__auto____7784)]);
if(or__3824__auto____7785)
{return or__3824__auto____7785;
} else
{var or__3824__auto____7786 = (cljs.core._reduce["_"]);
if(or__3824__auto____7786)
{return or__3824__auto____7786;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7787 = coll;
if(and__3822__auto____7787)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7787;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3510__auto____7788 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7789 = (cljs.core._reduce[goog.typeOf(x__3510__auto____7788)]);
if(or__3824__auto____7789)
{return or__3824__auto____7789;
} else
{var or__3824__auto____7790 = (cljs.core._reduce["_"]);
if(or__3824__auto____7790)
{return or__3824__auto____7790;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____7795 = coll;
if(and__3822__auto____7795)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7795;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3510__auto____7796 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7797 = (cljs.core._kv_reduce[goog.typeOf(x__3510__auto____7796)]);
if(or__3824__auto____7797)
{return or__3824__auto____7797;
} else
{var or__3824__auto____7798 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7798)
{return or__3824__auto____7798;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7803 = o;
if(and__3822__auto____7803)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7803;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3510__auto____7804 = (((o == null))?null:o);
return (function (){var or__3824__auto____7805 = (cljs.core._equiv[goog.typeOf(x__3510__auto____7804)]);
if(or__3824__auto____7805)
{return or__3824__auto____7805;
} else
{var or__3824__auto____7806 = (cljs.core._equiv["_"]);
if(or__3824__auto____7806)
{return or__3824__auto____7806;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7811 = o;
if(and__3822__auto____7811)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7811;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3510__auto____7812 = (((o == null))?null:o);
return (function (){var or__3824__auto____7813 = (cljs.core._hash[goog.typeOf(x__3510__auto____7812)]);
if(or__3824__auto____7813)
{return or__3824__auto____7813;
} else
{var or__3824__auto____7814 = (cljs.core._hash["_"]);
if(or__3824__auto____7814)
{return or__3824__auto____7814;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7819 = o;
if(and__3822__auto____7819)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7819;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3510__auto____7820 = (((o == null))?null:o);
return (function (){var or__3824__auto____7821 = (cljs.core._seq[goog.typeOf(x__3510__auto____7820)]);
if(or__3824__auto____7821)
{return or__3824__auto____7821;
} else
{var or__3824__auto____7822 = (cljs.core._seq["_"]);
if(or__3824__auto____7822)
{return or__3824__auto____7822;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____7827 = coll;
if(and__3822__auto____7827)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7827;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3510__auto____7828 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7829 = (cljs.core._rseq[goog.typeOf(x__3510__auto____7828)]);
if(or__3824__auto____7829)
{return or__3824__auto____7829;
} else
{var or__3824__auto____7830 = (cljs.core._rseq["_"]);
if(or__3824__auto____7830)
{return or__3824__auto____7830;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7835 = coll;
if(and__3822__auto____7835)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7835;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3510__auto____7836 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7837 = (cljs.core._sorted_seq[goog.typeOf(x__3510__auto____7836)]);
if(or__3824__auto____7837)
{return or__3824__auto____7837;
} else
{var or__3824__auto____7838 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7838)
{return or__3824__auto____7838;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7843 = coll;
if(and__3822__auto____7843)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7843;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3510__auto____7844 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7845 = (cljs.core._sorted_seq_from[goog.typeOf(x__3510__auto____7844)]);
if(or__3824__auto____7845)
{return or__3824__auto____7845;
} else
{var or__3824__auto____7846 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7846)
{return or__3824__auto____7846;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7851 = coll;
if(and__3822__auto____7851)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7851;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3510__auto____7852 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7853 = (cljs.core._entry_key[goog.typeOf(x__3510__auto____7852)]);
if(or__3824__auto____7853)
{return or__3824__auto____7853;
} else
{var or__3824__auto____7854 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7854)
{return or__3824__auto____7854;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7859 = coll;
if(and__3822__auto____7859)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7859;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3510__auto____7860 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7861 = (cljs.core._comparator[goog.typeOf(x__3510__auto____7860)]);
if(or__3824__auto____7861)
{return or__3824__auto____7861;
} else
{var or__3824__auto____7862 = (cljs.core._comparator["_"]);
if(or__3824__auto____7862)
{return or__3824__auto____7862;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7867 = o;
if(and__3822__auto____7867)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7867;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__3510__auto____7868 = (((o == null))?null:o);
return (function (){var or__3824__auto____7869 = (cljs.core._pr_seq[goog.typeOf(x__3510__auto____7868)]);
if(or__3824__auto____7869)
{return or__3824__auto____7869;
} else
{var or__3824__auto____7870 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7870)
{return or__3824__auto____7870;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7875 = d;
if(and__3822__auto____7875)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7875;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3510__auto____7876 = (((d == null))?null:d);
return (function (){var or__3824__auto____7877 = (cljs.core._realized_QMARK_[goog.typeOf(x__3510__auto____7876)]);
if(or__3824__auto____7877)
{return or__3824__auto____7877;
} else
{var or__3824__auto____7878 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7878)
{return or__3824__auto____7878;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7883 = this$;
if(and__3822__auto____7883)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7883;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3510__auto____7884 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7885 = (cljs.core._notify_watches[goog.typeOf(x__3510__auto____7884)]);
if(or__3824__auto____7885)
{return or__3824__auto____7885;
} else
{var or__3824__auto____7886 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7886)
{return or__3824__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7891 = this$;
if(and__3822__auto____7891)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7891;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3510__auto____7892 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7893 = (cljs.core._add_watch[goog.typeOf(x__3510__auto____7892)]);
if(or__3824__auto____7893)
{return or__3824__auto____7893;
} else
{var or__3824__auto____7894 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7894)
{return or__3824__auto____7894;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7899 = this$;
if(and__3822__auto____7899)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7899;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3510__auto____7900 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7901 = (cljs.core._remove_watch[goog.typeOf(x__3510__auto____7900)]);
if(or__3824__auto____7901)
{return or__3824__auto____7901;
} else
{var or__3824__auto____7902 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7902)
{return or__3824__auto____7902;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7907 = coll;
if(and__3822__auto____7907)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7907;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3510__auto____7908 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7909 = (cljs.core._as_transient[goog.typeOf(x__3510__auto____7908)]);
if(or__3824__auto____7909)
{return or__3824__auto____7909;
} else
{var or__3824__auto____7910 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7910)
{return or__3824__auto____7910;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7915 = tcoll;
if(and__3822__auto____7915)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7915;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3510__auto____7916 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7917 = (cljs.core._conj_BANG_[goog.typeOf(x__3510__auto____7916)]);
if(or__3824__auto____7917)
{return or__3824__auto____7917;
} else
{var or__3824__auto____7918 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7918)
{return or__3824__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7923 = tcoll;
if(and__3822__auto____7923)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7923;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3510__auto____7924 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7925 = (cljs.core._persistent_BANG_[goog.typeOf(x__3510__auto____7924)]);
if(or__3824__auto____7925)
{return or__3824__auto____7925;
} else
{var or__3824__auto____7926 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7926)
{return or__3824__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7931 = tcoll;
if(and__3822__auto____7931)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7931;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3510__auto____7932 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7933 = (cljs.core._assoc_BANG_[goog.typeOf(x__3510__auto____7932)]);
if(or__3824__auto____7933)
{return or__3824__auto____7933;
} else
{var or__3824__auto____7934 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7934)
{return or__3824__auto____7934;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7939 = tcoll;
if(and__3822__auto____7939)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7939;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3510__auto____7940 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7941 = (cljs.core._dissoc_BANG_[goog.typeOf(x__3510__auto____7940)]);
if(or__3824__auto____7941)
{return or__3824__auto____7941;
} else
{var or__3824__auto____7942 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7942)
{return or__3824__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7947 = tcoll;
if(and__3822__auto____7947)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7947;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3510__auto____7948 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7949 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3510__auto____7948)]);
if(or__3824__auto____7949)
{return or__3824__auto____7949;
} else
{var or__3824__auto____7950 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7950)
{return or__3824__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7955 = tcoll;
if(and__3822__auto____7955)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7955;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3510__auto____7956 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7957 = (cljs.core._pop_BANG_[goog.typeOf(x__3510__auto____7956)]);
if(or__3824__auto____7957)
{return or__3824__auto____7957;
} else
{var or__3824__auto____7958 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7958)
{return or__3824__auto____7958;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7963 = tcoll;
if(and__3822__auto____7963)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7963;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3510__auto____7964 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7965 = (cljs.core._disjoin_BANG_[goog.typeOf(x__3510__auto____7964)]);
if(or__3824__auto____7965)
{return or__3824__auto____7965;
} else
{var or__3824__auto____7966 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7966)
{return or__3824__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7971 = x;
if(and__3822__auto____7971)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7971;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3510__auto____7972 = (((x == null))?null:x);
return (function (){var or__3824__auto____7973 = (cljs.core._compare[goog.typeOf(x__3510__auto____7972)]);
if(or__3824__auto____7973)
{return or__3824__auto____7973;
} else
{var or__3824__auto____7974 = (cljs.core._compare["_"]);
if(or__3824__auto____7974)
{return or__3824__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7979 = coll;
if(and__3822__auto____7979)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7979;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3510__auto____7980 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7981 = (cljs.core._drop_first[goog.typeOf(x__3510__auto____7980)]);
if(or__3824__auto____7981)
{return or__3824__auto____7981;
} else
{var or__3824__auto____7982 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7982)
{return or__3824__auto____7982;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7987 = coll;
if(and__3822__auto____7987)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7987;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3510__auto____7988 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7989 = (cljs.core._chunked_first[goog.typeOf(x__3510__auto____7988)]);
if(or__3824__auto____7989)
{return or__3824__auto____7989;
} else
{var or__3824__auto____7990 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7990)
{return or__3824__auto____7990;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7995 = coll;
if(and__3822__auto____7995)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7995;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3510__auto____7996 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7997 = (cljs.core._chunked_rest[goog.typeOf(x__3510__auto____7996)]);
if(or__3824__auto____7997)
{return or__3824__auto____7997;
} else
{var or__3824__auto____7998 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7998)
{return or__3824__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____8003 = coll;
if(and__3822__auto____8003)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____8003;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3510__auto____8004 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8005 = (cljs.core._chunked_next[goog.typeOf(x__3510__auto____8004)]);
if(or__3824__auto____8005)
{return or__3824__auto____8005;
} else
{var or__3824__auto____8006 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____8006)
{return or__3824__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____8008 = (x === y);
if(or__3824__auto____8008)
{return or__3824__auto____8008;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__8009__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8010 = y;
var G__8011 = cljs.core.first.call(null,more);
var G__8012 = cljs.core.next.call(null,more);
x = G__8010;
y = G__8011;
more = G__8012;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8009 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8009__delegate.call(this, x, y, more);
};
G__8009.cljs$lang$maxFixedArity = 2;
G__8009.cljs$lang$applyTo = (function (arglist__8013){
var x = cljs.core.first(arglist__8013);
var y = cljs.core.first(cljs.core.next(arglist__8013));
var more = cljs.core.rest(cljs.core.next(arglist__8013));
return G__8009__delegate(x, y, more);
});
G__8009.cljs$lang$arity$variadic = G__8009__delegate;
return G__8009;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8014 = null;
var G__8014__2 = (function (o,k){
return null;
});
var G__8014__3 = (function (o,k,not_found){
return not_found;
});
G__8014 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__8014__2.call(this,o,k);
case 3:
return G__8014__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8014;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8015 = null;
var G__8015__2 = (function (_,f){
return f.call(null);
});
var G__8015__3 = (function (_,f,start){
return start;
});
G__8015 = function(_,f,start){
switch(arguments.length){
case 2:
return G__8015__2.call(this,_,f);
case 3:
return G__8015__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8015;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8016 = null;
var G__8016__2 = (function (_,n){
return null;
});
var G__8016__3 = (function (_,n,not_found){
return not_found;
});
G__8016 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__8016__2.call(this,_,n);
case 3:
return G__8016__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8016;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____8017 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____8017)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____8017;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__8030 = cljs.core._count.call(null,cicoll);
if((cnt__8030 === 0))
{return f.call(null);
} else
{var val__8031 = cljs.core._nth.call(null,cicoll,0);
var n__8032 = 1;
while(true){
if((n__8032 < cnt__8030))
{var nval__8033 = f.call(null,val__8031,cljs.core._nth.call(null,cicoll,n__8032));
if(cljs.core.reduced_QMARK_.call(null,nval__8033))
{return cljs.core.deref.call(null,nval__8033);
} else
{{
var G__8042 = nval__8033;
var G__8043 = (n__8032 + 1);
val__8031 = G__8042;
n__8032 = G__8043;
continue;
}
}
} else
{return val__8031;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__8034 = cljs.core._count.call(null,cicoll);
var val__8035 = val;
var n__8036 = 0;
while(true){
if((n__8036 < cnt__8034))
{var nval__8037 = f.call(null,val__8035,cljs.core._nth.call(null,cicoll,n__8036));
if(cljs.core.reduced_QMARK_.call(null,nval__8037))
{return cljs.core.deref.call(null,nval__8037);
} else
{{
var G__8044 = nval__8037;
var G__8045 = (n__8036 + 1);
val__8035 = G__8044;
n__8036 = G__8045;
continue;
}
}
} else
{return val__8035;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__8038 = cljs.core._count.call(null,cicoll);
var val__8039 = val;
var n__8040 = idx;
while(true){
if((n__8040 < cnt__8038))
{var nval__8041 = f.call(null,val__8039,cljs.core._nth.call(null,cicoll,n__8040));
if(cljs.core.reduced_QMARK_.call(null,nval__8041))
{return cljs.core.deref.call(null,nval__8041);
} else
{{
var G__8046 = nval__8041;
var G__8047 = (n__8040 + 1);
val__8039 = G__8046;
n__8040 = G__8047;
continue;
}
}
} else
{return val__8039;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__8060 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__8061 = (arr[0]);
var n__8062 = 1;
while(true){
if((n__8062 < cnt__8060))
{var nval__8063 = f.call(null,val__8061,(arr[n__8062]));
if(cljs.core.reduced_QMARK_.call(null,nval__8063))
{return cljs.core.deref.call(null,nval__8063);
} else
{{
var G__8072 = nval__8063;
var G__8073 = (n__8062 + 1);
val__8061 = G__8072;
n__8062 = G__8073;
continue;
}
}
} else
{return val__8061;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__8064 = arr.length;
var val__8065 = val;
var n__8066 = 0;
while(true){
if((n__8066 < cnt__8064))
{var nval__8067 = f.call(null,val__8065,(arr[n__8066]));
if(cljs.core.reduced_QMARK_.call(null,nval__8067))
{return cljs.core.deref.call(null,nval__8067);
} else
{{
var G__8074 = nval__8067;
var G__8075 = (n__8066 + 1);
val__8065 = G__8074;
n__8066 = G__8075;
continue;
}
}
} else
{return val__8065;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__8068 = arr.length;
var val__8069 = val;
var n__8070 = idx;
while(true){
if((n__8070 < cnt__8068))
{var nval__8071 = f.call(null,val__8069,(arr[n__8070]));
if(cljs.core.reduced_QMARK_.call(null,nval__8071))
{return cljs.core.deref.call(null,nval__8071);
} else
{{
var G__8076 = nval__8071;
var G__8077 = (n__8070 + 1);
val__8069 = G__8076;
n__8070 = G__8077;
continue;
}
}
} else
{return val__8069;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__8079 = this;
if(((this__8079.i + 1) < this__8079.a.length))
{return (new cljs.core.IndexedSeq(this__8079.a,(this__8079.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8080 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8081 = this;
var c__8082 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__8082 > 0))
{return (new cljs.core.RSeq(coll,(c__8082 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__8083 = this;
var this__8084 = this;
return cljs.core.pr_str.call(null,this__8084);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8085 = this;
if(cljs.core.counted_QMARK_.call(null,this__8085.a))
{return cljs.core.ci_reduce.call(null,this__8085.a,f,(this__8085.a[this__8085.i]),(this__8085.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__8085.a[this__8085.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8086 = this;
if(cljs.core.counted_QMARK_.call(null,this__8086.a))
{return cljs.core.ci_reduce.call(null,this__8086.a,f,start,this__8086.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8087 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8088 = this;
return (this__8088.a.length - this__8088.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__8089 = this;
return (this__8089.a[this__8089.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__8090 = this;
if(((this__8090.i + 1) < this__8090.a.length))
{return (new cljs.core.IndexedSeq(this__8090.a,(this__8090.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8091 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8092 = this;
var i__8093 = (n + this__8092.i);
if((i__8093 < this__8092.a.length))
{return (this__8092.a[i__8093]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8094 = this;
var i__8095 = (n + this__8094.i);
if((i__8095 < this__8094.a.length))
{return (this__8094.a[i__8095]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8096 = null;
var G__8096__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8096__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8096 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8096__2.call(this,array,f);
case 3:
return G__8096__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8096;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8097 = null;
var G__8097__2 = (function (array,k){
return (array[k]);
});
var G__8097__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8097 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8097__2.call(this,array,k);
case 3:
return G__8097__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8097;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8098 = null;
var G__8098__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8098__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8098 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8098__2.call(this,array,n);
case 3:
return G__8098__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8098;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8100 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8101 = this;
var this__8102 = this;
return cljs.core.pr_str.call(null,this__8102);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8103 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8104 = this;
return (this__8104.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8105 = this;
return cljs.core._nth.call(null,this__8105.ci,this__8105.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8106 = this;
if((this__8106.i > 0))
{return (new cljs.core.RSeq(this__8106.ci,(this__8106.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8108 = this;
return (new cljs.core.RSeq(this__8108.ci,this__8108.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8109 = this;
return this__8109.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8113__8114 = coll;
if(G__8113__8114)
{if((function (){var or__3824__auto____8115 = (G__8113__8114.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____8115)
{return or__3824__auto____8115;
} else
{return G__8113__8114.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8113__8114.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8113__8114);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8113__8114);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8120__8121 = coll;
if(G__8120__8121)
{if((function (){var or__3824__auto____8122 = (G__8120__8121.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8122)
{return or__3824__auto____8122;
} else
{return G__8120__8121.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8120__8121.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8120__8121);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8120__8121);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8123 = cljs.core.seq.call(null,coll);
if((s__8123 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8123);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8128__8129 = coll;
if(G__8128__8129)
{if((function (){var or__3824__auto____8130 = (G__8128__8129.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8130)
{return or__3824__auto____8130;
} else
{return G__8128__8129.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8128__8129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8128__8129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8128__8129);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8131 = cljs.core.seq.call(null,coll);
if(!((s__8131 == null)))
{return cljs.core._rest.call(null,s__8131);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8135__8136 = coll;
if(G__8135__8136)
{if((function (){var or__3824__auto____8137 = (G__8135__8136.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____8137)
{return or__3824__auto____8137;
} else
{return G__8135__8136.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8135__8136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8135__8136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8135__8136);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8139 = cljs.core.next.call(null,s);
if(!((sn__8139 == null)))
{{
var G__8140 = sn__8139;
s = G__8140;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8141__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8142 = conj.call(null,coll,x);
var G__8143 = cljs.core.first.call(null,xs);
var G__8144 = cljs.core.next.call(null,xs);
coll = G__8142;
x = G__8143;
xs = G__8144;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8141 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8141__delegate.call(this, coll, x, xs);
};
G__8141.cljs$lang$maxFixedArity = 2;
G__8141.cljs$lang$applyTo = (function (arglist__8145){
var coll = cljs.core.first(arglist__8145);
var x = cljs.core.first(cljs.core.next(arglist__8145));
var xs = cljs.core.rest(cljs.core.next(arglist__8145));
return G__8141__delegate(coll, x, xs);
});
G__8141.cljs$lang$arity$variadic = G__8141__delegate;
return G__8141;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8148 = cljs.core.seq.call(null,coll);
var acc__8149 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8148))
{return (acc__8149 + cljs.core._count.call(null,s__8148));
} else
{{
var G__8150 = cljs.core.next.call(null,s__8148);
var G__8151 = (acc__8149 + 1);
s__8148 = G__8150;
acc__8149 = G__8151;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8158__8159 = coll;
if(G__8158__8159)
{if((function (){var or__3824__auto____8160 = (G__8158__8159.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8160)
{return or__3824__auto____8160;
} else
{return G__8158__8159.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8158__8159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8158__8159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8158__8159);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8161__8162 = coll;
if(G__8161__8162)
{if((function (){var or__3824__auto____8163 = (G__8161__8162.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8163)
{return or__3824__auto____8163;
} else
{return G__8161__8162.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8161__8162.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8161__8162);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8161__8162);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8166__delegate = function (coll,k,v,kvs){
while(true){
var ret__8165 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8167 = ret__8165;
var G__8168 = cljs.core.first.call(null,kvs);
var G__8169 = cljs.core.second.call(null,kvs);
var G__8170 = cljs.core.nnext.call(null,kvs);
coll = G__8167;
k = G__8168;
v = G__8169;
kvs = G__8170;
continue;
}
} else
{return ret__8165;
}
break;
}
};
var G__8166 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8166__delegate.call(this, coll, k, v, kvs);
};
G__8166.cljs$lang$maxFixedArity = 3;
G__8166.cljs$lang$applyTo = (function (arglist__8171){
var coll = cljs.core.first(arglist__8171);
var k = cljs.core.first(cljs.core.next(arglist__8171));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8171)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8171)));
return G__8166__delegate(coll, k, v, kvs);
});
G__8166.cljs$lang$arity$variadic = G__8166__delegate;
return G__8166;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8174__delegate = function (coll,k,ks){
while(true){
var ret__8173 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8175 = ret__8173;
var G__8176 = cljs.core.first.call(null,ks);
var G__8177 = cljs.core.next.call(null,ks);
coll = G__8175;
k = G__8176;
ks = G__8177;
continue;
}
} else
{return ret__8173;
}
break;
}
};
var G__8174 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8174__delegate.call(this, coll, k, ks);
};
G__8174.cljs$lang$maxFixedArity = 2;
G__8174.cljs$lang$applyTo = (function (arglist__8178){
var coll = cljs.core.first(arglist__8178);
var k = cljs.core.first(cljs.core.next(arglist__8178));
var ks = cljs.core.rest(cljs.core.next(arglist__8178));
return G__8174__delegate(coll, k, ks);
});
G__8174.cljs$lang$arity$variadic = G__8174__delegate;
return G__8174;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8182__8183 = o;
if(G__8182__8183)
{if((function (){var or__3824__auto____8184 = (G__8182__8183.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____8184)
{return or__3824__auto____8184;
} else
{return G__8182__8183.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8182__8183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8182__8183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8182__8183);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8187__delegate = function (coll,k,ks){
while(true){
var ret__8186 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8188 = ret__8186;
var G__8189 = cljs.core.first.call(null,ks);
var G__8190 = cljs.core.next.call(null,ks);
coll = G__8188;
k = G__8189;
ks = G__8190;
continue;
}
} else
{return ret__8186;
}
break;
}
};
var G__8187 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8187__delegate.call(this, coll, k, ks);
};
G__8187.cljs$lang$maxFixedArity = 2;
G__8187.cljs$lang$applyTo = (function (arglist__8191){
var coll = cljs.core.first(arglist__8191);
var k = cljs.core.first(cljs.core.next(arglist__8191));
var ks = cljs.core.rest(cljs.core.next(arglist__8191));
return G__8187__delegate(coll, k, ks);
});
G__8187.cljs$lang$arity$variadic = G__8187__delegate;
return G__8187;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8193 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8193);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8193;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8195 = (cljs.core.string_hash_cache[k]);
if(!((h__8195 == null)))
{return h__8195;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____8197 = goog.isString(o);
if(and__3822__auto____8197)
{return check_cache;
} else
{return and__3822__auto____8197;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8201__8202 = x;
if(G__8201__8202)
{if((function (){var or__3824__auto____8203 = (G__8201__8202.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____8203)
{return or__3824__auto____8203;
} else
{return G__8201__8202.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8201__8202.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8201__8202);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8201__8202);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8207__8208 = x;
if(G__8207__8208)
{if((function (){var or__3824__auto____8209 = (G__8207__8208.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____8209)
{return or__3824__auto____8209;
} else
{return G__8207__8208.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8207__8208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8207__8208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8207__8208);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8213__8214 = x;
if(G__8213__8214)
{if((function (){var or__3824__auto____8215 = (G__8213__8214.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____8215)
{return or__3824__auto____8215;
} else
{return G__8213__8214.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8213__8214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8213__8214);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8213__8214);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8219__8220 = x;
if(G__8219__8220)
{if((function (){var or__3824__auto____8221 = (G__8219__8220.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____8221)
{return or__3824__auto____8221;
} else
{return G__8219__8220.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8219__8220.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8219__8220);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8219__8220);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8225__8226 = x;
if(G__8225__8226)
{if((function (){var or__3824__auto____8227 = (G__8225__8226.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____8227)
{return or__3824__auto____8227;
} else
{return G__8225__8226.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8225__8226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8225__8226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8225__8226);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8231__8232 = x;
if(G__8231__8232)
{if((function (){var or__3824__auto____8233 = (G__8231__8232.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____8233)
{return or__3824__auto____8233;
} else
{return G__8231__8232.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8231__8232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8231__8232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8231__8232);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8237__8238 = x;
if(G__8237__8238)
{if((function (){var or__3824__auto____8239 = (G__8237__8238.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8239)
{return or__3824__auto____8239;
} else
{return G__8237__8238.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8237__8238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8237__8238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8237__8238);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8243__8244 = x;
if(G__8243__8244)
{if((function (){var or__3824__auto____8245 = (G__8243__8244.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____8245)
{return or__3824__auto____8245;
} else
{return G__8243__8244.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8243__8244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8243__8244);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8243__8244);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8249__8250 = x;
if(G__8249__8250)
{if((function (){var or__3824__auto____8251 = (G__8249__8250.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____8251)
{return or__3824__auto____8251;
} else
{return G__8249__8250.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8249__8250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8249__8250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8249__8250);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8255__8256 = x;
if(G__8255__8256)
{if(cljs.core.truth_((function (){var or__3824__auto____8257 = null;
if(cljs.core.truth_(or__3824__auto____8257))
{return or__3824__auto____8257;
} else
{return G__8255__8256.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8255__8256.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8255__8256);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8255__8256);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8258__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8258 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8258__delegate.call(this, keyvals);
};
G__8258.cljs$lang$maxFixedArity = 0;
G__8258.cljs$lang$applyTo = (function (arglist__8259){
var keyvals = cljs.core.seq(arglist__8259);;
return G__8258__delegate(keyvals);
});
G__8258.cljs$lang$arity$variadic = G__8258__delegate;
return G__8258;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8261 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8261.push(key);
}));
return keys__8261;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8265 = i;
var j__8266 = j;
var len__8267 = len;
while(true){
if((len__8267 === 0))
{return to;
} else
{(to[j__8266] = (from[i__8265]));
{
var G__8268 = (i__8265 + 1);
var G__8269 = (j__8266 + 1);
var G__8270 = (len__8267 - 1);
i__8265 = G__8268;
j__8266 = G__8269;
len__8267 = G__8270;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8274 = (i + (len - 1));
var j__8275 = (j + (len - 1));
var len__8276 = len;
while(true){
if((len__8276 === 0))
{return to;
} else
{(to[j__8275] = (from[i__8274]));
{
var G__8277 = (i__8274 - 1);
var G__8278 = (j__8275 - 1);
var G__8279 = (len__8276 - 1);
i__8274 = G__8277;
j__8275 = G__8278;
len__8276 = G__8279;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8283__8284 = s;
if(G__8283__8284)
{if((function (){var or__3824__auto____8285 = (G__8283__8284.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8285)
{return or__3824__auto____8285;
} else
{return G__8283__8284.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8283__8284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8283__8284);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8283__8284);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8289__8290 = s;
if(G__8289__8290)
{if((function (){var or__3824__auto____8291 = (G__8289__8290.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____8291)
{return or__3824__auto____8291;
} else
{return G__8289__8290.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8289__8290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8289__8290);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8289__8290);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____8294 = goog.isString(x);
if(and__3822__auto____8294)
{return !((function (){var or__3824__auto____8295 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____8295)
{return or__3824__auto____8295;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____8294;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8297 = goog.isString(x);
if(and__3822__auto____8297)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____8297;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8299 = goog.isString(x);
if(and__3822__auto____8299)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____8299;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____8304 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____8304)
{return or__3824__auto____8304;
} else
{var G__8305__8306 = f;
if(G__8305__8306)
{if((function (){var or__3824__auto____8307 = (G__8305__8306.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____8307)
{return or__3824__auto____8307;
} else
{return G__8305__8306.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8305__8306.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8305__8306);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8305__8306);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8309 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____8309)
{return (n == n.toFixed());
} else
{return and__3822__auto____8309;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8312 = coll;
if(cljs.core.truth_(and__3822__auto____8312))
{var and__3822__auto____8313 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____8313)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8313;
}
} else
{return and__3822__auto____8312;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8322__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8318 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__8319 = more;
while(true){
var x__8320 = cljs.core.first.call(null,xs__8319);
var etc__8321 = cljs.core.next.call(null,xs__8319);
if(cljs.core.truth_(xs__8319))
{if(cljs.core.contains_QMARK_.call(null,s__8318,x__8320))
{return false;
} else
{{
var G__8323 = cljs.core.conj.call(null,s__8318,x__8320);
var G__8324 = etc__8321;
s__8318 = G__8323;
xs__8319 = G__8324;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8322__delegate.call(this, x, y, more);
};
G__8322.cljs$lang$maxFixedArity = 2;
G__8322.cljs$lang$applyTo = (function (arglist__8325){
var x = cljs.core.first(arglist__8325);
var y = cljs.core.first(cljs.core.next(arglist__8325));
var more = cljs.core.rest(cljs.core.next(arglist__8325));
return G__8322__delegate(x, y, more);
});
G__8322.cljs$lang$arity$variadic = G__8322__delegate;
return G__8322;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8329__8330 = x;
if(G__8329__8330)
{if(cljs.core.truth_((function (){var or__3824__auto____8331 = null;
if(cljs.core.truth_(or__3824__auto____8331))
{return or__3824__auto____8331;
} else
{return G__8329__8330.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8329__8330.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8329__8330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8329__8330);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8336 = cljs.core.count.call(null,xs);
var yl__8337 = cljs.core.count.call(null,ys);
if((xl__8336 < yl__8337))
{return -1;
} else
{if((xl__8336 > yl__8337))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8336,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8338 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____8339 = (d__8338 === 0);
if(and__3822__auto____8339)
{return ((n + 1) < len);
} else
{return and__3822__auto____8339;
}
})())
{{
var G__8340 = xs;
var G__8341 = ys;
var G__8342 = len;
var G__8343 = (n + 1);
xs = G__8340;
ys = G__8341;
len = G__8342;
n = G__8343;
continue;
}
} else
{return d__8338;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8345 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8345))
{return r__8345;
} else
{if(cljs.core.truth_(r__8345))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8347 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8347,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8347);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____8353 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8353)
{var s__8354 = temp__3971__auto____8353;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8354),cljs.core.next.call(null,s__8354));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8355 = val;
var coll__8356 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8356)
{var nval__8357 = f.call(null,val__8355,cljs.core.first.call(null,coll__8356));
if(cljs.core.reduced_QMARK_.call(null,nval__8357))
{return cljs.core.deref.call(null,nval__8357);
} else
{{
var G__8358 = nval__8357;
var G__8359 = cljs.core.next.call(null,coll__8356);
val__8355 = G__8358;
coll__8356 = G__8359;
continue;
}
}
} else
{return val__8355;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8361 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8361);
return cljs.core.vec.call(null,a__8361);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8368__8369 = coll;
if(G__8368__8369)
{if((function (){var or__3824__auto____8370 = (G__8368__8369.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8370)
{return or__3824__auto____8370;
} else
{return G__8368__8369.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8368__8369.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8368__8369);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8368__8369);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8371__8372 = coll;
if(G__8371__8372)
{if((function (){var or__3824__auto____8373 = (G__8371__8372.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____8373)
{return or__3824__auto____8373;
} else
{return G__8371__8372.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8371__8372.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8371__8372);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8371__8372);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8374 = this;
return this__8374.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8375__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8375 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8375__delegate.call(this, x, y, more);
};
G__8375.cljs$lang$maxFixedArity = 2;
G__8375.cljs$lang$applyTo = (function (arglist__8376){
var x = cljs.core.first(arglist__8376);
var y = cljs.core.first(cljs.core.next(arglist__8376));
var more = cljs.core.rest(cljs.core.next(arglist__8376));
return G__8375__delegate(x, y, more);
});
G__8375.cljs$lang$arity$variadic = G__8375__delegate;
return G__8375;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8377__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8377__delegate.call(this, x, y, more);
};
G__8377.cljs$lang$maxFixedArity = 2;
G__8377.cljs$lang$applyTo = (function (arglist__8378){
var x = cljs.core.first(arglist__8378);
var y = cljs.core.first(cljs.core.next(arglist__8378));
var more = cljs.core.rest(cljs.core.next(arglist__8378));
return G__8377__delegate(x, y, more);
});
G__8377.cljs$lang$arity$variadic = G__8377__delegate;
return G__8377;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8379__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8379__delegate.call(this, x, y, more);
};
G__8379.cljs$lang$maxFixedArity = 2;
G__8379.cljs$lang$applyTo = (function (arglist__8380){
var x = cljs.core.first(arglist__8380);
var y = cljs.core.first(cljs.core.next(arglist__8380));
var more = cljs.core.rest(cljs.core.next(arglist__8380));
return G__8379__delegate(x, y, more);
});
G__8379.cljs$lang$arity$variadic = G__8379__delegate;
return G__8379;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8381__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8381__delegate.call(this, x, y, more);
};
G__8381.cljs$lang$maxFixedArity = 2;
G__8381.cljs$lang$applyTo = (function (arglist__8382){
var x = cljs.core.first(arglist__8382);
var y = cljs.core.first(cljs.core.next(arglist__8382));
var more = cljs.core.rest(cljs.core.next(arglist__8382));
return G__8381__delegate(x, y, more);
});
G__8381.cljs$lang$arity$variadic = G__8381__delegate;
return G__8381;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8383__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8384 = y;
var G__8385 = cljs.core.first.call(null,more);
var G__8386 = cljs.core.next.call(null,more);
x = G__8384;
y = G__8385;
more = G__8386;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8383__delegate.call(this, x, y, more);
};
G__8383.cljs$lang$maxFixedArity = 2;
G__8383.cljs$lang$applyTo = (function (arglist__8387){
var x = cljs.core.first(arglist__8387);
var y = cljs.core.first(cljs.core.next(arglist__8387));
var more = cljs.core.rest(cljs.core.next(arglist__8387));
return G__8383__delegate(x, y, more);
});
G__8383.cljs$lang$arity$variadic = G__8383__delegate;
return G__8383;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8388__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8389 = y;
var G__8390 = cljs.core.first.call(null,more);
var G__8391 = cljs.core.next.call(null,more);
x = G__8389;
y = G__8390;
more = G__8391;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8388__delegate.call(this, x, y, more);
};
G__8388.cljs$lang$maxFixedArity = 2;
G__8388.cljs$lang$applyTo = (function (arglist__8392){
var x = cljs.core.first(arglist__8392);
var y = cljs.core.first(cljs.core.next(arglist__8392));
var more = cljs.core.rest(cljs.core.next(arglist__8392));
return G__8388__delegate(x, y, more);
});
G__8388.cljs$lang$arity$variadic = G__8388__delegate;
return G__8388;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8393__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8394 = y;
var G__8395 = cljs.core.first.call(null,more);
var G__8396 = cljs.core.next.call(null,more);
x = G__8394;
y = G__8395;
more = G__8396;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8393__delegate.call(this, x, y, more);
};
G__8393.cljs$lang$maxFixedArity = 2;
G__8393.cljs$lang$applyTo = (function (arglist__8397){
var x = cljs.core.first(arglist__8397);
var y = cljs.core.first(cljs.core.next(arglist__8397));
var more = cljs.core.rest(cljs.core.next(arglist__8397));
return G__8393__delegate(x, y, more);
});
G__8393.cljs$lang$arity$variadic = G__8393__delegate;
return G__8393;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8398__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8399 = y;
var G__8400 = cljs.core.first.call(null,more);
var G__8401 = cljs.core.next.call(null,more);
x = G__8399;
y = G__8400;
more = G__8401;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8398__delegate.call(this, x, y, more);
};
G__8398.cljs$lang$maxFixedArity = 2;
G__8398.cljs$lang$applyTo = (function (arglist__8402){
var x = cljs.core.first(arglist__8402);
var y = cljs.core.first(cljs.core.next(arglist__8402));
var more = cljs.core.rest(cljs.core.next(arglist__8402));
return G__8398__delegate(x, y, more);
});
G__8398.cljs$lang$arity$variadic = G__8398__delegate;
return G__8398;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8403__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8403__delegate.call(this, x, y, more);
};
G__8403.cljs$lang$maxFixedArity = 2;
G__8403.cljs$lang$applyTo = (function (arglist__8404){
var x = cljs.core.first(arglist__8404);
var y = cljs.core.first(cljs.core.next(arglist__8404));
var more = cljs.core.rest(cljs.core.next(arglist__8404));
return G__8403__delegate(x, y, more);
});
G__8403.cljs$lang$arity$variadic = G__8403__delegate;
return G__8403;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8405__delegate.call(this, x, y, more);
};
G__8405.cljs$lang$maxFixedArity = 2;
G__8405.cljs$lang$applyTo = (function (arglist__8406){
var x = cljs.core.first(arglist__8406);
var y = cljs.core.first(cljs.core.next(arglist__8406));
var more = cljs.core.rest(cljs.core.next(arglist__8406));
return G__8405__delegate(x, y, more);
});
G__8405.cljs$lang$arity$variadic = G__8405__delegate;
return G__8405;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8408 = (n % d);
return cljs.core.fix.call(null,((n - rem__8408) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8410 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8410));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8413 = (v - ((v >> 1) & 1431655765));
var v__8414 = ((v__8413 & 858993459) + ((v__8413 >> 2) & 858993459));
return ((((v__8414 + (v__8414 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8415__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8416 = y;
var G__8417 = cljs.core.first.call(null,more);
var G__8418 = cljs.core.next.call(null,more);
x = G__8416;
y = G__8417;
more = G__8418;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8415__delegate.call(this, x, y, more);
};
G__8415.cljs$lang$maxFixedArity = 2;
G__8415.cljs$lang$applyTo = (function (arglist__8419){
var x = cljs.core.first(arglist__8419);
var y = cljs.core.first(cljs.core.next(arglist__8419));
var more = cljs.core.rest(cljs.core.next(arglist__8419));
return G__8415__delegate(x, y, more);
});
G__8415.cljs$lang$arity$variadic = G__8415__delegate;
return G__8415;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8423 = n;
var xs__8424 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8425 = xs__8424;
if(and__3822__auto____8425)
{return (n__8423 > 0);
} else
{return and__3822__auto____8425;
}
})()))
{{
var G__8426 = (n__8423 - 1);
var G__8427 = cljs.core.next.call(null,xs__8424);
n__8423 = G__8426;
xs__8424 = G__8427;
continue;
}
} else
{return xs__8424;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8428__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8429 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8430 = cljs.core.next.call(null,more);
sb = G__8429;
more = G__8430;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8428 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8428__delegate.call(this, x, ys);
};
G__8428.cljs$lang$maxFixedArity = 1;
G__8428.cljs$lang$applyTo = (function (arglist__8431){
var x = cljs.core.first(arglist__8431);
var ys = cljs.core.rest(arglist__8431);
return G__8428__delegate(x, ys);
});
G__8428.cljs$lang$arity$variadic = G__8428__delegate;
return G__8428;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8432__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8433 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8434 = cljs.core.next.call(null,more);
sb = G__8433;
more = G__8434;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8432 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8432__delegate.call(this, x, ys);
};
G__8432.cljs$lang$maxFixedArity = 1;
G__8432.cljs$lang$applyTo = (function (arglist__8435){
var x = cljs.core.first(arglist__8435);
var ys = cljs.core.rest(arglist__8435);
return G__8432__delegate(x, ys);
});
G__8432.cljs$lang$arity$variadic = G__8432__delegate;
return G__8432;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8436){
var fmt = cljs.core.first(arglist__8436);
var args = cljs.core.rest(arglist__8436);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8439 = cljs.core.seq.call(null,x);
var ys__8440 = cljs.core.seq.call(null,y);
while(true){
if((xs__8439 == null))
{return (ys__8440 == null);
} else
{if((ys__8440 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8439),cljs.core.first.call(null,ys__8440)))
{{
var G__8441 = cljs.core.next.call(null,xs__8439);
var G__8442 = cljs.core.next.call(null,ys__8440);
xs__8439 = G__8441;
ys__8440 = G__8442;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8443_SHARP_,p2__8444_SHARP_){
return cljs.core.hash_combine.call(null,p1__8443_SHARP_,cljs.core.hash.call(null,p2__8444_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8448 = 0;
var s__8449 = cljs.core.seq.call(null,m);
while(true){
if(s__8449)
{var e__8450 = cljs.core.first.call(null,s__8449);
{
var G__8451 = ((h__8448 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8450)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8450)))) % 4503599627370496);
var G__8452 = cljs.core.next.call(null,s__8449);
h__8448 = G__8451;
s__8449 = G__8452;
continue;
}
} else
{return h__8448;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8456 = 0;
var s__8457 = cljs.core.seq.call(null,s);
while(true){
if(s__8457)
{var e__8458 = cljs.core.first.call(null,s__8457);
{
var G__8459 = ((h__8456 + cljs.core.hash.call(null,e__8458)) % 4503599627370496);
var G__8460 = cljs.core.next.call(null,s__8457);
h__8456 = G__8459;
s__8457 = G__8460;
continue;
}
} else
{return h__8456;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8481__8482 = cljs.core.seq.call(null,fn_map);
if(G__8481__8482)
{var G__8484__8486 = cljs.core.first.call(null,G__8481__8482);
var vec__8485__8487 = G__8484__8486;
var key_name__8488 = cljs.core.nth.call(null,vec__8485__8487,0,null);
var f__8489 = cljs.core.nth.call(null,vec__8485__8487,1,null);
var G__8481__8490 = G__8481__8482;
var G__8484__8491 = G__8484__8486;
var G__8481__8492 = G__8481__8490;
while(true){
var vec__8493__8494 = G__8484__8491;
var key_name__8495 = cljs.core.nth.call(null,vec__8493__8494,0,null);
var f__8496 = cljs.core.nth.call(null,vec__8493__8494,1,null);
var G__8481__8497 = G__8481__8492;
var str_name__8498 = cljs.core.name.call(null,key_name__8495);
(obj[str_name__8498] = f__8496);
var temp__3974__auto____8499 = cljs.core.next.call(null,G__8481__8497);
if(temp__3974__auto____8499)
{var G__8481__8500 = temp__3974__auto____8499;
{
var G__8501 = cljs.core.first.call(null,G__8481__8500);
var G__8502 = G__8481__8500;
G__8484__8491 = G__8501;
G__8481__8492 = G__8502;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8503 = this;
var h__3339__auto____8504 = this__8503.__hash;
if(!((h__3339__auto____8504 == null)))
{return h__3339__auto____8504;
} else
{var h__3339__auto____8505 = cljs.core.hash_coll.call(null,coll);
this__8503.__hash = h__3339__auto____8505;
return h__3339__auto____8505;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8506 = this;
if((this__8506.count === 1))
{return null;
} else
{return this__8506.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8507 = this;
return (new cljs.core.List(this__8507.meta,o,coll,(this__8507.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8508 = this;
var this__8509 = this;
return cljs.core.pr_str.call(null,this__8509);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8510 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8511 = this;
return this__8511.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8512 = this;
return this__8512.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8513 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8514 = this;
return this__8514.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8515 = this;
if((this__8515.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8515.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8517 = this;
return (new cljs.core.List(meta,this__8517.first,this__8517.rest,this__8517.count,this__8517.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8518 = this;
return this__8518.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8519 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8520 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8521 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8522 = this;
return (new cljs.core.List(this__8522.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8523 = this;
var this__8524 = this;
return cljs.core.pr_str.call(null,this__8524);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8525 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8526 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8527 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8528 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8529 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8530 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8532 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8533 = this;
return this__8533.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8534 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8538__8539 = coll;
if(G__8538__8539)
{if((function (){var or__3824__auto____8540 = (G__8538__8539.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8540)
{return or__3824__auto____8540;
} else
{return G__8538__8539.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8538__8539.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8538__8539);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8538__8539);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__8541__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8541 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8541__delegate.call(this, x, y, z, items);
};
G__8541.cljs$lang$maxFixedArity = 3;
G__8541.cljs$lang$applyTo = (function (arglist__8542){
var x = cljs.core.first(arglist__8542);
var y = cljs.core.first(cljs.core.next(arglist__8542));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8542)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8542)));
return G__8541__delegate(x, y, z, items);
});
G__8541.cljs$lang$arity$variadic = G__8541__delegate;
return G__8541;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8543 = this;
var h__3339__auto____8544 = this__8543.__hash;
if(!((h__3339__auto____8544 == null)))
{return h__3339__auto____8544;
} else
{var h__3339__auto____8545 = cljs.core.hash_coll.call(null,coll);
this__8543.__hash = h__3339__auto____8545;
return h__3339__auto____8545;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8546 = this;
if((this__8546.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8546.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8547 = this;
return (new cljs.core.Cons(null,o,coll,this__8547.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8548 = this;
var this__8549 = this;
return cljs.core.pr_str.call(null,this__8549);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8550 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8551 = this;
return this__8551.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8552 = this;
if((this__8552.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8552.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8553 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8554 = this;
return (new cljs.core.Cons(meta,this__8554.first,this__8554.rest,this__8554.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8555 = this;
return this__8555.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8556 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8556.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8561 = (coll == null);
if(or__3824__auto____8561)
{return or__3824__auto____8561;
} else
{var G__8562__8563 = coll;
if(G__8562__8563)
{if((function (){var or__3824__auto____8564 = (G__8562__8563.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8564)
{return or__3824__auto____8564;
} else
{return G__8562__8563.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8562__8563.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8562__8563);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8562__8563);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8568__8569 = x;
if(G__8568__8569)
{if((function (){var or__3824__auto____8570 = (G__8568__8569.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8570)
{return or__3824__auto____8570;
} else
{return G__8568__8569.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8568__8569.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8568__8569);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8568__8569);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8571 = null;
var G__8571__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8571__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8571 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8571__2.call(this,string,f);
case 3:
return G__8571__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8571;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8572 = null;
var G__8572__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8572__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8572 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8572__2.call(this,string,k);
case 3:
return G__8572__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8572;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8573 = null;
var G__8573__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8573__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8573 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8573__2.call(this,string,n);
case 3:
return G__8573__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8573;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8585 = null;
var G__8585__2 = (function (this_sym8576,coll){
var this__8578 = this;
var this_sym8576__8579 = this;
var ___8580 = this_sym8576__8579;
if((coll == null))
{return null;
} else
{var strobj__8581 = coll.strobj;
if((strobj__8581 == null))
{return cljs.core._lookup.call(null,coll,this__8578.k,null);
} else
{return (strobj__8581[this__8578.k]);
}
}
});
var G__8585__3 = (function (this_sym8577,coll,not_found){
var this__8578 = this;
var this_sym8577__8582 = this;
var ___8583 = this_sym8577__8582;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8578.k,not_found);
}
});
G__8585 = function(this_sym8577,coll,not_found){
switch(arguments.length){
case 2:
return G__8585__2.call(this,this_sym8577,coll);
case 3:
return G__8585__3.call(this,this_sym8577,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8585;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8574,args8575){
var this__8584 = this;
return this_sym8574.call.apply(this_sym8574,[this_sym8574].concat(args8575.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8594 = null;
var G__8594__2 = (function (this_sym8588,coll){
var this_sym8588__8590 = this;
var this__8591 = this_sym8588__8590;
return cljs.core._lookup.call(null,coll,this__8591.toString(),null);
});
var G__8594__3 = (function (this_sym8589,coll,not_found){
var this_sym8589__8592 = this;
var this__8593 = this_sym8589__8592;
return cljs.core._lookup.call(null,coll,this__8593.toString(),not_found);
});
G__8594 = function(this_sym8589,coll,not_found){
switch(arguments.length){
case 2:
return G__8594__2.call(this,this_sym8589,coll);
case 3:
return G__8594__3.call(this,this_sym8589,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8594;
})()
;
String.prototype.apply = (function (this_sym8586,args8587){
return this_sym8586.call.apply(this_sym8586,[this_sym8586].concat(args8587.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8596 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8596;
} else
{lazy_seq.x = x__8596.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8597 = this;
var h__3339__auto____8598 = this__8597.__hash;
if(!((h__3339__auto____8598 == null)))
{return h__3339__auto____8598;
} else
{var h__3339__auto____8599 = cljs.core.hash_coll.call(null,coll);
this__8597.__hash = h__3339__auto____8599;
return h__3339__auto____8599;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8600 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8601 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8602 = this;
var this__8603 = this;
return cljs.core.pr_str.call(null,this__8603);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8604 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8605 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8606 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8608 = this;
return (new cljs.core.LazySeq(meta,this__8608.realized,this__8608.x,this__8608.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8609 = this;
return this__8609.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8610 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8610.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8611 = this;
return this__8611.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8612 = this;
var ___8613 = this;
(this__8612.buf[this__8612.end] = o);
return this__8612.end = (this__8612.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8614 = this;
var ___8615 = this;
var ret__8616 = (new cljs.core.ArrayChunk(this__8614.buf,0,this__8614.end));
this__8614.buf = null;
return ret__8616;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8617 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8617.arr[this__8617.off]),(this__8617.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8618 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8618.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8619 = this;
if((this__8619.off === this__8619.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8619.arr,(this__8619.off + 1),this__8619.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8620 = this;
return (this__8620.arr[(this__8620.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8621 = this;
if((function (){var and__3822__auto____8622 = (i >= 0);
if(and__3822__auto____8622)
{return (i < (this__8621.end - this__8621.off));
} else
{return and__3822__auto____8622;
}
})())
{return (this__8621.arr[(this__8621.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8623 = this;
return (this__8623.end - this__8623.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8624 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8625 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8626 = this;
return cljs.core._nth.call(null,this__8626.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8627 = this;
if((cljs.core._count.call(null,this__8627.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8627.chunk),this__8627.more,this__8627.meta));
} else
{if((this__8627.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8627.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8628 = this;
if((this__8628.more == null))
{return null;
} else
{return this__8628.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8629 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8630 = this;
return (new cljs.core.ChunkedCons(this__8630.chunk,this__8630.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8631 = this;
return this__8631.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8632 = this;
return this__8632.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8633 = this;
if((this__8633.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8633.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8637__8638 = s;
if(G__8637__8638)
{if(cljs.core.truth_((function (){var or__3824__auto____8639 = null;
if(cljs.core.truth_(or__3824__auto____8639))
{return or__3824__auto____8639;
} else
{return G__8637__8638.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8637__8638.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8637__8638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8637__8638);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8642 = [];
var s__8643 = s;
while(true){
if(cljs.core.seq.call(null,s__8643))
{ary__8642.push(cljs.core.first.call(null,s__8643));
{
var G__8644 = cljs.core.next.call(null,s__8643);
s__8643 = G__8644;
continue;
}
} else
{return ary__8642;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8648 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8649 = 0;
var xs__8650 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8650)
{(ret__8648[i__8649] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8650)));
{
var G__8651 = (i__8649 + 1);
var G__8652 = cljs.core.next.call(null,xs__8650);
i__8649 = G__8651;
xs__8650 = G__8652;
continue;
}
} else
{}
break;
}
return ret__8648;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8660 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8661 = cljs.core.seq.call(null,init_val_or_seq);
var i__8662 = 0;
var s__8663 = s__8661;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8664 = s__8663;
if(and__3822__auto____8664)
{return (i__8662 < size);
} else
{return and__3822__auto____8664;
}
})()))
{(a__8660[i__8662] = cljs.core.first.call(null,s__8663));
{
var G__8667 = (i__8662 + 1);
var G__8668 = cljs.core.next.call(null,s__8663);
i__8662 = G__8667;
s__8663 = G__8668;
continue;
}
} else
{return a__8660;
}
break;
}
} else
{var n__3674__auto____8665 = size;
var i__8666 = 0;
while(true){
if((i__8666 < n__3674__auto____8665))
{(a__8660[i__8666] = init_val_or_seq);
{
var G__8669 = (i__8666 + 1);
i__8666 = G__8669;
continue;
}
} else
{}
break;
}
return a__8660;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8677 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8678 = cljs.core.seq.call(null,init_val_or_seq);
var i__8679 = 0;
var s__8680 = s__8678;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8681 = s__8680;
if(and__3822__auto____8681)
{return (i__8679 < size);
} else
{return and__3822__auto____8681;
}
})()))
{(a__8677[i__8679] = cljs.core.first.call(null,s__8680));
{
var G__8684 = (i__8679 + 1);
var G__8685 = cljs.core.next.call(null,s__8680);
i__8679 = G__8684;
s__8680 = G__8685;
continue;
}
} else
{return a__8677;
}
break;
}
} else
{var n__3674__auto____8682 = size;
var i__8683 = 0;
while(true){
if((i__8683 < n__3674__auto____8682))
{(a__8677[i__8683] = init_val_or_seq);
{
var G__8686 = (i__8683 + 1);
i__8683 = G__8686;
continue;
}
} else
{}
break;
}
return a__8677;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8694 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8695 = cljs.core.seq.call(null,init_val_or_seq);
var i__8696 = 0;
var s__8697 = s__8695;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8698 = s__8697;
if(and__3822__auto____8698)
{return (i__8696 < size);
} else
{return and__3822__auto____8698;
}
})()))
{(a__8694[i__8696] = cljs.core.first.call(null,s__8697));
{
var G__8701 = (i__8696 + 1);
var G__8702 = cljs.core.next.call(null,s__8697);
i__8696 = G__8701;
s__8697 = G__8702;
continue;
}
} else
{return a__8694;
}
break;
}
} else
{var n__3674__auto____8699 = size;
var i__8700 = 0;
while(true){
if((i__8700 < n__3674__auto____8699))
{(a__8694[i__8700] = init_val_or_seq);
{
var G__8703 = (i__8700 + 1);
i__8700 = G__8703;
continue;
}
} else
{}
break;
}
return a__8694;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__8708 = s;
var i__8709 = n;
var sum__8710 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8711 = (i__8709 > 0);
if(and__3822__auto____8711)
{return cljs.core.seq.call(null,s__8708);
} else
{return and__3822__auto____8711;
}
})()))
{{
var G__8712 = cljs.core.next.call(null,s__8708);
var G__8713 = (i__8709 - 1);
var G__8714 = (sum__8710 + 1);
s__8708 = G__8712;
i__8709 = G__8713;
sum__8710 = G__8714;
continue;
}
} else
{return sum__8710;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8719 = cljs.core.seq.call(null,x);
if(s__8719)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8719))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8719),concat.call(null,cljs.core.chunk_rest.call(null,s__8719),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8719),concat.call(null,cljs.core.rest.call(null,s__8719),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8723__delegate = function (x,y,zs){
var cat__8722 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8721 = cljs.core.seq.call(null,xys);
if(xys__8721)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8721))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8721),cat.call(null,cljs.core.chunk_rest.call(null,xys__8721),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8721),cat.call(null,cljs.core.rest.call(null,xys__8721),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__8722.call(null,concat.call(null,x,y),zs);
};
var G__8723 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8723__delegate.call(this, x, y, zs);
};
G__8723.cljs$lang$maxFixedArity = 2;
G__8723.cljs$lang$applyTo = (function (arglist__8724){
var x = cljs.core.first(arglist__8724);
var y = cljs.core.first(cljs.core.next(arglist__8724));
var zs = cljs.core.rest(cljs.core.next(arglist__8724));
return G__8723__delegate(x, y, zs);
});
G__8723.cljs$lang$arity$variadic = G__8723__delegate;
return G__8723;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__8725__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8725 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8725__delegate.call(this, a, b, c, d, more);
};
G__8725.cljs$lang$maxFixedArity = 4;
G__8725.cljs$lang$applyTo = (function (arglist__8726){
var a = cljs.core.first(arglist__8726);
var b = cljs.core.first(cljs.core.next(arglist__8726));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8726)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8726))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8726))));
return G__8725__delegate(a, b, c, d, more);
});
G__8725.cljs$lang$arity$variadic = G__8725__delegate;
return G__8725;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8768 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8769 = cljs.core._first.call(null,args__8768);
var args__8770 = cljs.core._rest.call(null,args__8768);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8769);
} else
{return f.call(null,a__8769);
}
} else
{var b__8771 = cljs.core._first.call(null,args__8770);
var args__8772 = cljs.core._rest.call(null,args__8770);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8769,b__8771);
} else
{return f.call(null,a__8769,b__8771);
}
} else
{var c__8773 = cljs.core._first.call(null,args__8772);
var args__8774 = cljs.core._rest.call(null,args__8772);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8769,b__8771,c__8773);
} else
{return f.call(null,a__8769,b__8771,c__8773);
}
} else
{var d__8775 = cljs.core._first.call(null,args__8774);
var args__8776 = cljs.core._rest.call(null,args__8774);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8769,b__8771,c__8773,d__8775);
} else
{return f.call(null,a__8769,b__8771,c__8773,d__8775);
}
} else
{var e__8777 = cljs.core._first.call(null,args__8776);
var args__8778 = cljs.core._rest.call(null,args__8776);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8769,b__8771,c__8773,d__8775,e__8777);
} else
{return f.call(null,a__8769,b__8771,c__8773,d__8775,e__8777);
}
} else
{var f__8779 = cljs.core._first.call(null,args__8778);
var args__8780 = cljs.core._rest.call(null,args__8778);
if((argc === 6))
{if(f__8779.cljs$lang$arity$6)
{return f__8779.cljs$lang$arity$6(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779);
}
} else
{var g__8781 = cljs.core._first.call(null,args__8780);
var args__8782 = cljs.core._rest.call(null,args__8780);
if((argc === 7))
{if(f__8779.cljs$lang$arity$7)
{return f__8779.cljs$lang$arity$7(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781);
}
} else
{var h__8783 = cljs.core._first.call(null,args__8782);
var args__8784 = cljs.core._rest.call(null,args__8782);
if((argc === 8))
{if(f__8779.cljs$lang$arity$8)
{return f__8779.cljs$lang$arity$8(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783);
}
} else
{var i__8785 = cljs.core._first.call(null,args__8784);
var args__8786 = cljs.core._rest.call(null,args__8784);
if((argc === 9))
{if(f__8779.cljs$lang$arity$9)
{return f__8779.cljs$lang$arity$9(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785);
}
} else
{var j__8787 = cljs.core._first.call(null,args__8786);
var args__8788 = cljs.core._rest.call(null,args__8786);
if((argc === 10))
{if(f__8779.cljs$lang$arity$10)
{return f__8779.cljs$lang$arity$10(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787);
}
} else
{var k__8789 = cljs.core._first.call(null,args__8788);
var args__8790 = cljs.core._rest.call(null,args__8788);
if((argc === 11))
{if(f__8779.cljs$lang$arity$11)
{return f__8779.cljs$lang$arity$11(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789);
}
} else
{var l__8791 = cljs.core._first.call(null,args__8790);
var args__8792 = cljs.core._rest.call(null,args__8790);
if((argc === 12))
{if(f__8779.cljs$lang$arity$12)
{return f__8779.cljs$lang$arity$12(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791);
}
} else
{var m__8793 = cljs.core._first.call(null,args__8792);
var args__8794 = cljs.core._rest.call(null,args__8792);
if((argc === 13))
{if(f__8779.cljs$lang$arity$13)
{return f__8779.cljs$lang$arity$13(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793);
}
} else
{var n__8795 = cljs.core._first.call(null,args__8794);
var args__8796 = cljs.core._rest.call(null,args__8794);
if((argc === 14))
{if(f__8779.cljs$lang$arity$14)
{return f__8779.cljs$lang$arity$14(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795);
}
} else
{var o__8797 = cljs.core._first.call(null,args__8796);
var args__8798 = cljs.core._rest.call(null,args__8796);
if((argc === 15))
{if(f__8779.cljs$lang$arity$15)
{return f__8779.cljs$lang$arity$15(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797);
}
} else
{var p__8799 = cljs.core._first.call(null,args__8798);
var args__8800 = cljs.core._rest.call(null,args__8798);
if((argc === 16))
{if(f__8779.cljs$lang$arity$16)
{return f__8779.cljs$lang$arity$16(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799);
}
} else
{var q__8801 = cljs.core._first.call(null,args__8800);
var args__8802 = cljs.core._rest.call(null,args__8800);
if((argc === 17))
{if(f__8779.cljs$lang$arity$17)
{return f__8779.cljs$lang$arity$17(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801);
}
} else
{var r__8803 = cljs.core._first.call(null,args__8802);
var args__8804 = cljs.core._rest.call(null,args__8802);
if((argc === 18))
{if(f__8779.cljs$lang$arity$18)
{return f__8779.cljs$lang$arity$18(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803);
}
} else
{var s__8805 = cljs.core._first.call(null,args__8804);
var args__8806 = cljs.core._rest.call(null,args__8804);
if((argc === 19))
{if(f__8779.cljs$lang$arity$19)
{return f__8779.cljs$lang$arity$19(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803,s__8805);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803,s__8805);
}
} else
{var t__8807 = cljs.core._first.call(null,args__8806);
var args__8808 = cljs.core._rest.call(null,args__8806);
if((argc === 20))
{if(f__8779.cljs$lang$arity$20)
{return f__8779.cljs$lang$arity$20(a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803,s__8805,t__8807);
} else
{return f__8779.call(null,a__8769,b__8771,c__8773,d__8775,e__8777,f__8779,g__8781,h__8783,i__8785,j__8787,k__8789,l__8791,m__8793,n__8795,o__8797,p__8799,q__8801,r__8803,s__8805,t__8807);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8823 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8824 = cljs.core.bounded_count.call(null,args,(fixed_arity__8823 + 1));
if((bc__8824 <= fixed_arity__8823))
{return cljs.core.apply_to.call(null,f,bc__8824,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8825 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8826 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8827 = cljs.core.bounded_count.call(null,arglist__8825,(fixed_arity__8826 + 1));
if((bc__8827 <= fixed_arity__8826))
{return cljs.core.apply_to.call(null,f,bc__8827,arglist__8825);
} else
{return f.cljs$lang$applyTo(arglist__8825);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8825));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8828 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8829 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8830 = cljs.core.bounded_count.call(null,arglist__8828,(fixed_arity__8829 + 1));
if((bc__8830 <= fixed_arity__8829))
{return cljs.core.apply_to.call(null,f,bc__8830,arglist__8828);
} else
{return f.cljs$lang$applyTo(arglist__8828);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8828));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8831 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8832 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8833 = cljs.core.bounded_count.call(null,arglist__8831,(fixed_arity__8832 + 1));
if((bc__8833 <= fixed_arity__8832))
{return cljs.core.apply_to.call(null,f,bc__8833,arglist__8831);
} else
{return f.cljs$lang$applyTo(arglist__8831);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8831));
}
});
var apply__6 = (function() { 
var G__8837__delegate = function (f,a,b,c,d,args){
var arglist__8834 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8835 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8836 = cljs.core.bounded_count.call(null,arglist__8834,(fixed_arity__8835 + 1));
if((bc__8836 <= fixed_arity__8835))
{return cljs.core.apply_to.call(null,f,bc__8836,arglist__8834);
} else
{return f.cljs$lang$applyTo(arglist__8834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8834));
}
};
var G__8837 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8837__delegate.call(this, f, a, b, c, d, args);
};
G__8837.cljs$lang$maxFixedArity = 5;
G__8837.cljs$lang$applyTo = (function (arglist__8838){
var f = cljs.core.first(arglist__8838);
var a = cljs.core.first(cljs.core.next(arglist__8838));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8838)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8838))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8838)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8838)))));
return G__8837__delegate(f, a, b, c, d, args);
});
G__8837.cljs$lang$arity$variadic = G__8837__delegate;
return G__8837;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8839){
var obj = cljs.core.first(arglist__8839);
var f = cljs.core.first(cljs.core.next(arglist__8839));
var args = cljs.core.rest(cljs.core.next(arglist__8839));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__8840__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8840 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8840__delegate.call(this, x, y, more);
};
G__8840.cljs$lang$maxFixedArity = 2;
G__8840.cljs$lang$applyTo = (function (arglist__8841){
var x = cljs.core.first(arglist__8841);
var y = cljs.core.first(cljs.core.next(arglist__8841));
var more = cljs.core.rest(cljs.core.next(arglist__8841));
return G__8840__delegate(x, y, more);
});
G__8840.cljs$lang$arity$variadic = G__8840__delegate;
return G__8840;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8842 = pred;
var G__8843 = cljs.core.next.call(null,coll);
pred = G__8842;
coll = G__8843;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____8845 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____8845))
{return or__3824__auto____8845;
} else
{{
var G__8846 = pred;
var G__8847 = cljs.core.next.call(null,coll);
pred = G__8846;
coll = G__8847;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8848 = null;
var G__8848__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8848__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8848__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8848__3 = (function() { 
var G__8849__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8849 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8849__delegate.call(this, x, y, zs);
};
G__8849.cljs$lang$maxFixedArity = 2;
G__8849.cljs$lang$applyTo = (function (arglist__8850){
var x = cljs.core.first(arglist__8850);
var y = cljs.core.first(cljs.core.next(arglist__8850));
var zs = cljs.core.rest(cljs.core.next(arglist__8850));
return G__8849__delegate(x, y, zs);
});
G__8849.cljs$lang$arity$variadic = G__8849__delegate;
return G__8849;
})()
;
G__8848 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8848__0.call(this);
case 1:
return G__8848__1.call(this,x);
case 2:
return G__8848__2.call(this,x,y);
default:
return G__8848__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8848.cljs$lang$maxFixedArity = 2;
G__8848.cljs$lang$applyTo = G__8848__3.cljs$lang$applyTo;
return G__8848;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8851__delegate = function (args){
return x;
};
var G__8851 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8851__delegate.call(this, args);
};
G__8851.cljs$lang$maxFixedArity = 0;
G__8851.cljs$lang$applyTo = (function (arglist__8852){
var args = cljs.core.seq(arglist__8852);;
return G__8851__delegate(args);
});
G__8851.cljs$lang$arity$variadic = G__8851__delegate;
return G__8851;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8859 = null;
var G__8859__0 = (function (){
return f.call(null,g.call(null));
});
var G__8859__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8859__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8859__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8859__4 = (function() { 
var G__8860__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8860__delegate.call(this, x, y, z, args);
};
G__8860.cljs$lang$maxFixedArity = 3;
G__8860.cljs$lang$applyTo = (function (arglist__8861){
var x = cljs.core.first(arglist__8861);
var y = cljs.core.first(cljs.core.next(arglist__8861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8861)));
return G__8860__delegate(x, y, z, args);
});
G__8860.cljs$lang$arity$variadic = G__8860__delegate;
return G__8860;
})()
;
G__8859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8859__0.call(this);
case 1:
return G__8859__1.call(this,x);
case 2:
return G__8859__2.call(this,x,y);
case 3:
return G__8859__3.call(this,x,y,z);
default:
return G__8859__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8859.cljs$lang$maxFixedArity = 3;
G__8859.cljs$lang$applyTo = G__8859__4.cljs$lang$applyTo;
return G__8859;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8862 = null;
var G__8862__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8862__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8862__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8862__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8862__4 = (function() { 
var G__8863__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8863 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8863__delegate.call(this, x, y, z, args);
};
G__8863.cljs$lang$maxFixedArity = 3;
G__8863.cljs$lang$applyTo = (function (arglist__8864){
var x = cljs.core.first(arglist__8864);
var y = cljs.core.first(cljs.core.next(arglist__8864));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8864)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8864)));
return G__8863__delegate(x, y, z, args);
});
G__8863.cljs$lang$arity$variadic = G__8863__delegate;
return G__8863;
})()
;
G__8862 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8862__0.call(this);
case 1:
return G__8862__1.call(this,x);
case 2:
return G__8862__2.call(this,x,y);
case 3:
return G__8862__3.call(this,x,y,z);
default:
return G__8862__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8862.cljs$lang$maxFixedArity = 3;
G__8862.cljs$lang$applyTo = G__8862__4.cljs$lang$applyTo;
return G__8862;
})()
});
var comp__4 = (function() { 
var G__8865__delegate = function (f1,f2,f3,fs){
var fs__8856 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8866__delegate = function (args){
var ret__8857 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8856),args);
var fs__8858 = cljs.core.next.call(null,fs__8856);
while(true){
if(fs__8858)
{{
var G__8867 = cljs.core.first.call(null,fs__8858).call(null,ret__8857);
var G__8868 = cljs.core.next.call(null,fs__8858);
ret__8857 = G__8867;
fs__8858 = G__8868;
continue;
}
} else
{return ret__8857;
}
break;
}
};
var G__8866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8866__delegate.call(this, args);
};
G__8866.cljs$lang$maxFixedArity = 0;
G__8866.cljs$lang$applyTo = (function (arglist__8869){
var args = cljs.core.seq(arglist__8869);;
return G__8866__delegate(args);
});
G__8866.cljs$lang$arity$variadic = G__8866__delegate;
return G__8866;
})()
;
};
var G__8865 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8865__delegate.call(this, f1, f2, f3, fs);
};
G__8865.cljs$lang$maxFixedArity = 3;
G__8865.cljs$lang$applyTo = (function (arglist__8870){
var f1 = cljs.core.first(arglist__8870);
var f2 = cljs.core.first(cljs.core.next(arglist__8870));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8870)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8870)));
return G__8865__delegate(f1, f2, f3, fs);
});
G__8865.cljs$lang$arity$variadic = G__8865__delegate;
return G__8865;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8871__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8871 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8871__delegate.call(this, args);
};
G__8871.cljs$lang$maxFixedArity = 0;
G__8871.cljs$lang$applyTo = (function (arglist__8872){
var args = cljs.core.seq(arglist__8872);;
return G__8871__delegate(args);
});
G__8871.cljs$lang$arity$variadic = G__8871__delegate;
return G__8871;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8873__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8873__delegate.call(this, args);
};
G__8873.cljs$lang$maxFixedArity = 0;
G__8873.cljs$lang$applyTo = (function (arglist__8874){
var args = cljs.core.seq(arglist__8874);;
return G__8873__delegate(args);
});
G__8873.cljs$lang$arity$variadic = G__8873__delegate;
return G__8873;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8875__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8875__delegate.call(this, args);
};
G__8875.cljs$lang$maxFixedArity = 0;
G__8875.cljs$lang$applyTo = (function (arglist__8876){
var args = cljs.core.seq(arglist__8876);;
return G__8875__delegate(args);
});
G__8875.cljs$lang$arity$variadic = G__8875__delegate;
return G__8875;
})()
;
});
var partial__5 = (function() { 
var G__8877__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8878__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8878 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8878__delegate.call(this, args);
};
G__8878.cljs$lang$maxFixedArity = 0;
G__8878.cljs$lang$applyTo = (function (arglist__8879){
var args = cljs.core.seq(arglist__8879);;
return G__8878__delegate(args);
});
G__8878.cljs$lang$arity$variadic = G__8878__delegate;
return G__8878;
})()
;
};
var G__8877 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8877__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8877.cljs$lang$maxFixedArity = 4;
G__8877.cljs$lang$applyTo = (function (arglist__8880){
var f = cljs.core.first(arglist__8880);
var arg1 = cljs.core.first(cljs.core.next(arglist__8880));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8880)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8880))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8880))));
return G__8877__delegate(f, arg1, arg2, arg3, more);
});
G__8877.cljs$lang$arity$variadic = G__8877__delegate;
return G__8877;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8881 = null;
var G__8881__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8881__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8881__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8881__4 = (function() { 
var G__8882__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8882 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8882__delegate.call(this, a, b, c, ds);
};
G__8882.cljs$lang$maxFixedArity = 3;
G__8882.cljs$lang$applyTo = (function (arglist__8883){
var a = cljs.core.first(arglist__8883);
var b = cljs.core.first(cljs.core.next(arglist__8883));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8883)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8883)));
return G__8882__delegate(a, b, c, ds);
});
G__8882.cljs$lang$arity$variadic = G__8882__delegate;
return G__8882;
})()
;
G__8881 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8881__1.call(this,a);
case 2:
return G__8881__2.call(this,a,b);
case 3:
return G__8881__3.call(this,a,b,c);
default:
return G__8881__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8881.cljs$lang$maxFixedArity = 3;
G__8881.cljs$lang$applyTo = G__8881__4.cljs$lang$applyTo;
return G__8881;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8884 = null;
var G__8884__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8884__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8884__4 = (function() { 
var G__8885__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8885 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8885__delegate.call(this, a, b, c, ds);
};
G__8885.cljs$lang$maxFixedArity = 3;
G__8885.cljs$lang$applyTo = (function (arglist__8886){
var a = cljs.core.first(arglist__8886);
var b = cljs.core.first(cljs.core.next(arglist__8886));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8886)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8886)));
return G__8885__delegate(a, b, c, ds);
});
G__8885.cljs$lang$arity$variadic = G__8885__delegate;
return G__8885;
})()
;
G__8884 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8884__2.call(this,a,b);
case 3:
return G__8884__3.call(this,a,b,c);
default:
return G__8884__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8884.cljs$lang$maxFixedArity = 3;
G__8884.cljs$lang$applyTo = G__8884__4.cljs$lang$applyTo;
return G__8884;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8887 = null;
var G__8887__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8887__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8887__4 = (function() { 
var G__8888__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8888 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8888__delegate.call(this, a, b, c, ds);
};
G__8888.cljs$lang$maxFixedArity = 3;
G__8888.cljs$lang$applyTo = (function (arglist__8889){
var a = cljs.core.first(arglist__8889);
var b = cljs.core.first(cljs.core.next(arglist__8889));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8889)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8889)));
return G__8888__delegate(a, b, c, ds);
});
G__8888.cljs$lang$arity$variadic = G__8888__delegate;
return G__8888;
})()
;
G__8887 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8887__2.call(this,a,b);
case 3:
return G__8887__3.call(this,a,b,c);
default:
return G__8887__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8887.cljs$lang$maxFixedArity = 3;
G__8887.cljs$lang$applyTo = G__8887__4.cljs$lang$applyTo;
return G__8887;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8905 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8913 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8913)
{var s__8914 = temp__3974__auto____8913;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8914))
{var c__8915 = cljs.core.chunk_first.call(null,s__8914);
var size__8916 = cljs.core.count.call(null,c__8915);
var b__8917 = cljs.core.chunk_buffer.call(null,size__8916);
var n__3674__auto____8918 = size__8916;
var i__8919 = 0;
while(true){
if((i__8919 < n__3674__auto____8918))
{cljs.core.chunk_append.call(null,b__8917,f.call(null,(idx + i__8919),cljs.core._nth.call(null,c__8915,i__8919)));
{
var G__8920 = (i__8919 + 1);
i__8919 = G__8920;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8917),mapi.call(null,(idx + size__8916),cljs.core.chunk_rest.call(null,s__8914)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8914)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8914)));
}
} else
{return null;
}
}),null));
});
return mapi__8905.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8930 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8930)
{var s__8931 = temp__3974__auto____8930;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8931))
{var c__8932 = cljs.core.chunk_first.call(null,s__8931);
var size__8933 = cljs.core.count.call(null,c__8932);
var b__8934 = cljs.core.chunk_buffer.call(null,size__8933);
var n__3674__auto____8935 = size__8933;
var i__8936 = 0;
while(true){
if((i__8936 < n__3674__auto____8935))
{var x__8937 = f.call(null,cljs.core._nth.call(null,c__8932,i__8936));
if((x__8937 == null))
{} else
{cljs.core.chunk_append.call(null,b__8934,x__8937);
}
{
var G__8939 = (i__8936 + 1);
i__8936 = G__8939;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8934),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8931)));
} else
{var x__8938 = f.call(null,cljs.core.first.call(null,s__8931));
if((x__8938 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8931));
} else
{return cljs.core.cons.call(null,x__8938,keep.call(null,f,cljs.core.rest.call(null,s__8931)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8965 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8975 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8975)
{var s__8976 = temp__3974__auto____8975;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8976))
{var c__8977 = cljs.core.chunk_first.call(null,s__8976);
var size__8978 = cljs.core.count.call(null,c__8977);
var b__8979 = cljs.core.chunk_buffer.call(null,size__8978);
var n__3674__auto____8980 = size__8978;
var i__8981 = 0;
while(true){
if((i__8981 < n__3674__auto____8980))
{var x__8982 = f.call(null,(idx + i__8981),cljs.core._nth.call(null,c__8977,i__8981));
if((x__8982 == null))
{} else
{cljs.core.chunk_append.call(null,b__8979,x__8982);
}
{
var G__8984 = (i__8981 + 1);
i__8981 = G__8984;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8979),keepi.call(null,(idx + size__8978),cljs.core.chunk_rest.call(null,s__8976)));
} else
{var x__8983 = f.call(null,idx,cljs.core.first.call(null,s__8976));
if((x__8983 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8976));
} else
{return cljs.core.cons.call(null,x__8983,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8976)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8965.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9070 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9070))
{return p.call(null,y);
} else
{return and__3822__auto____9070;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9071 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____9071))
{var and__3822__auto____9072 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____9072))
{return p.call(null,z);
} else
{return and__3822__auto____9072;
}
} else
{return and__3822__auto____9071;
}
})());
});
var ep1__4 = (function() { 
var G__9141__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9073 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9073))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____9073;
}
})());
};
var G__9141 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9141__delegate.call(this, x, y, z, args);
};
G__9141.cljs$lang$maxFixedArity = 3;
G__9141.cljs$lang$applyTo = (function (arglist__9142){
var x = cljs.core.first(arglist__9142);
var y = cljs.core.first(cljs.core.next(arglist__9142));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9142)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9142)));
return G__9141__delegate(x, y, z, args);
});
G__9141.cljs$lang$arity$variadic = G__9141__delegate;
return G__9141;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9085 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9085))
{return p2.call(null,x);
} else
{return and__3822__auto____9085;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9086 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9086))
{var and__3822__auto____9087 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9087))
{var and__3822__auto____9088 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9088))
{return p2.call(null,y);
} else
{return and__3822__auto____9088;
}
} else
{return and__3822__auto____9087;
}
} else
{return and__3822__auto____9086;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9089 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9089))
{var and__3822__auto____9090 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9090))
{var and__3822__auto____9091 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9091))
{var and__3822__auto____9092 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9092))
{var and__3822__auto____9093 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9093))
{return p2.call(null,z);
} else
{return and__3822__auto____9093;
}
} else
{return and__3822__auto____9092;
}
} else
{return and__3822__auto____9091;
}
} else
{return and__3822__auto____9090;
}
} else
{return and__3822__auto____9089;
}
})());
});
var ep2__4 = (function() { 
var G__9143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9094 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9094))
{return cljs.core.every_QMARK_.call(null,(function (p1__8940_SHARP_){
var and__3822__auto____9095 = p1.call(null,p1__8940_SHARP_);
if(cljs.core.truth_(and__3822__auto____9095))
{return p2.call(null,p1__8940_SHARP_);
} else
{return and__3822__auto____9095;
}
}),args);
} else
{return and__3822__auto____9094;
}
})());
};
var G__9143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9143__delegate.call(this, x, y, z, args);
};
G__9143.cljs$lang$maxFixedArity = 3;
G__9143.cljs$lang$applyTo = (function (arglist__9144){
var x = cljs.core.first(arglist__9144);
var y = cljs.core.first(cljs.core.next(arglist__9144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9144)));
return G__9143__delegate(x, y, z, args);
});
G__9143.cljs$lang$arity$variadic = G__9143__delegate;
return G__9143;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9114 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9114))
{var and__3822__auto____9115 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9115))
{return p3.call(null,x);
} else
{return and__3822__auto____9115;
}
} else
{return and__3822__auto____9114;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9116 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9116))
{var and__3822__auto____9117 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9117))
{var and__3822__auto____9118 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9118))
{var and__3822__auto____9119 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9119))
{var and__3822__auto____9120 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9120))
{return p3.call(null,y);
} else
{return and__3822__auto____9120;
}
} else
{return and__3822__auto____9119;
}
} else
{return and__3822__auto____9118;
}
} else
{return and__3822__auto____9117;
}
} else
{return and__3822__auto____9116;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9121 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____9121))
{var and__3822__auto____9122 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____9122))
{var and__3822__auto____9123 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____9123))
{var and__3822__auto____9124 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____9124))
{var and__3822__auto____9125 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____9125))
{var and__3822__auto____9126 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____9126))
{var and__3822__auto____9127 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____9127))
{var and__3822__auto____9128 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____9128))
{return p3.call(null,z);
} else
{return and__3822__auto____9128;
}
} else
{return and__3822__auto____9127;
}
} else
{return and__3822__auto____9126;
}
} else
{return and__3822__auto____9125;
}
} else
{return and__3822__auto____9124;
}
} else
{return and__3822__auto____9123;
}
} else
{return and__3822__auto____9122;
}
} else
{return and__3822__auto____9121;
}
})());
});
var ep3__4 = (function() { 
var G__9145__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9129 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9129))
{return cljs.core.every_QMARK_.call(null,(function (p1__8941_SHARP_){
var and__3822__auto____9130 = p1.call(null,p1__8941_SHARP_);
if(cljs.core.truth_(and__3822__auto____9130))
{var and__3822__auto____9131 = p2.call(null,p1__8941_SHARP_);
if(cljs.core.truth_(and__3822__auto____9131))
{return p3.call(null,p1__8941_SHARP_);
} else
{return and__3822__auto____9131;
}
} else
{return and__3822__auto____9130;
}
}),args);
} else
{return and__3822__auto____9129;
}
})());
};
var G__9145 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9145__delegate.call(this, x, y, z, args);
};
G__9145.cljs$lang$maxFixedArity = 3;
G__9145.cljs$lang$applyTo = (function (arglist__9146){
var x = cljs.core.first(arglist__9146);
var y = cljs.core.first(cljs.core.next(arglist__9146));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9146)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9146)));
return G__9145__delegate(x, y, z, args);
});
G__9145.cljs$lang$arity$variadic = G__9145__delegate;
return G__9145;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9147__delegate = function (p1,p2,p3,ps){
var ps__9132 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8942_SHARP_){
return p1__8942_SHARP_.call(null,x);
}),ps__9132);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8943_SHARP_){
var and__3822__auto____9137 = p1__8943_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9137))
{return p1__8943_SHARP_.call(null,y);
} else
{return and__3822__auto____9137;
}
}),ps__9132);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8944_SHARP_){
var and__3822__auto____9138 = p1__8944_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____9138))
{var and__3822__auto____9139 = p1__8944_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____9139))
{return p1__8944_SHARP_.call(null,z);
} else
{return and__3822__auto____9139;
}
} else
{return and__3822__auto____9138;
}
}),ps__9132);
});
var epn__4 = (function() { 
var G__9148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____9140 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____9140))
{return cljs.core.every_QMARK_.call(null,(function (p1__8945_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8945_SHARP_,args);
}),ps__9132);
} else
{return and__3822__auto____9140;
}
})());
};
var G__9148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9148__delegate.call(this, x, y, z, args);
};
G__9148.cljs$lang$maxFixedArity = 3;
G__9148.cljs$lang$applyTo = (function (arglist__9149){
var x = cljs.core.first(arglist__9149);
var y = cljs.core.first(cljs.core.next(arglist__9149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9149)));
return G__9148__delegate(x, y, z, args);
});
G__9148.cljs$lang$arity$variadic = G__9148__delegate;
return G__9148;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9147 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9147__delegate.call(this, p1, p2, p3, ps);
};
G__9147.cljs$lang$maxFixedArity = 3;
G__9147.cljs$lang$applyTo = (function (arglist__9150){
var p1 = cljs.core.first(arglist__9150);
var p2 = cljs.core.first(cljs.core.next(arglist__9150));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9150)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9150)));
return G__9147__delegate(p1, p2, p3, ps);
});
G__9147.cljs$lang$arity$variadic = G__9147__delegate;
return G__9147;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____9231 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9231))
{return or__3824__auto____9231;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____9232 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____9232))
{return or__3824__auto____9232;
} else
{var or__3824__auto____9233 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____9233))
{return or__3824__auto____9233;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9302__delegate = function (x,y,z,args){
var or__3824__auto____9234 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9234))
{return or__3824__auto____9234;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9302 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9302__delegate.call(this, x, y, z, args);
};
G__9302.cljs$lang$maxFixedArity = 3;
G__9302.cljs$lang$applyTo = (function (arglist__9303){
var x = cljs.core.first(arglist__9303);
var y = cljs.core.first(cljs.core.next(arglist__9303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9303)));
return G__9302__delegate(x, y, z, args);
});
G__9302.cljs$lang$arity$variadic = G__9302__delegate;
return G__9302;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____9246 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9246))
{return or__3824__auto____9246;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____9247 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9247))
{return or__3824__auto____9247;
} else
{var or__3824__auto____9248 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9248))
{return or__3824__auto____9248;
} else
{var or__3824__auto____9249 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9249))
{return or__3824__auto____9249;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____9250 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9250))
{return or__3824__auto____9250;
} else
{var or__3824__auto____9251 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9251))
{return or__3824__auto____9251;
} else
{var or__3824__auto____9252 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9252))
{return or__3824__auto____9252;
} else
{var or__3824__auto____9253 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9253))
{return or__3824__auto____9253;
} else
{var or__3824__auto____9254 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9254))
{return or__3824__auto____9254;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9304__delegate = function (x,y,z,args){
var or__3824__auto____9255 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9255))
{return or__3824__auto____9255;
} else
{return cljs.core.some.call(null,(function (p1__8985_SHARP_){
var or__3824__auto____9256 = p1.call(null,p1__8985_SHARP_);
if(cljs.core.truth_(or__3824__auto____9256))
{return or__3824__auto____9256;
} else
{return p2.call(null,p1__8985_SHARP_);
}
}),args);
}
};
var G__9304 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9304__delegate.call(this, x, y, z, args);
};
G__9304.cljs$lang$maxFixedArity = 3;
G__9304.cljs$lang$applyTo = (function (arglist__9305){
var x = cljs.core.first(arglist__9305);
var y = cljs.core.first(cljs.core.next(arglist__9305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9305)));
return G__9304__delegate(x, y, z, args);
});
G__9304.cljs$lang$arity$variadic = G__9304__delegate;
return G__9304;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____9275 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9275))
{return or__3824__auto____9275;
} else
{var or__3824__auto____9276 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9276))
{return or__3824__auto____9276;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____9277 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9277))
{return or__3824__auto____9277;
} else
{var or__3824__auto____9278 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9278))
{return or__3824__auto____9278;
} else
{var or__3824__auto____9279 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9279))
{return or__3824__auto____9279;
} else
{var or__3824__auto____9280 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9280))
{return or__3824__auto____9280;
} else
{var or__3824__auto____9281 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9281))
{return or__3824__auto____9281;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____9282 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____9282))
{return or__3824__auto____9282;
} else
{var or__3824__auto____9283 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____9283))
{return or__3824__auto____9283;
} else
{var or__3824__auto____9284 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____9284))
{return or__3824__auto____9284;
} else
{var or__3824__auto____9285 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____9285))
{return or__3824__auto____9285;
} else
{var or__3824__auto____9286 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____9286))
{return or__3824__auto____9286;
} else
{var or__3824__auto____9287 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____9287))
{return or__3824__auto____9287;
} else
{var or__3824__auto____9288 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____9288))
{return or__3824__auto____9288;
} else
{var or__3824__auto____9289 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____9289))
{return or__3824__auto____9289;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9306__delegate = function (x,y,z,args){
var or__3824__auto____9290 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9290))
{return or__3824__auto____9290;
} else
{return cljs.core.some.call(null,(function (p1__8986_SHARP_){
var or__3824__auto____9291 = p1.call(null,p1__8986_SHARP_);
if(cljs.core.truth_(or__3824__auto____9291))
{return or__3824__auto____9291;
} else
{var or__3824__auto____9292 = p2.call(null,p1__8986_SHARP_);
if(cljs.core.truth_(or__3824__auto____9292))
{return or__3824__auto____9292;
} else
{return p3.call(null,p1__8986_SHARP_);
}
}
}),args);
}
};
var G__9306 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9306__delegate.call(this, x, y, z, args);
};
G__9306.cljs$lang$maxFixedArity = 3;
G__9306.cljs$lang$applyTo = (function (arglist__9307){
var x = cljs.core.first(arglist__9307);
var y = cljs.core.first(cljs.core.next(arglist__9307));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9307)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9307)));
return G__9306__delegate(x, y, z, args);
});
G__9306.cljs$lang$arity$variadic = G__9306__delegate;
return G__9306;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9308__delegate = function (p1,p2,p3,ps){
var ps__9293 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8987_SHARP_){
return p1__8987_SHARP_.call(null,x);
}),ps__9293);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8988_SHARP_){
var or__3824__auto____9298 = p1__8988_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9298))
{return or__3824__auto____9298;
} else
{return p1__8988_SHARP_.call(null,y);
}
}),ps__9293);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8989_SHARP_){
var or__3824__auto____9299 = p1__8989_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____9299))
{return or__3824__auto____9299;
} else
{var or__3824__auto____9300 = p1__8989_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____9300))
{return or__3824__auto____9300;
} else
{return p1__8989_SHARP_.call(null,z);
}
}
}),ps__9293);
});
var spn__4 = (function() { 
var G__9309__delegate = function (x,y,z,args){
var or__3824__auto____9301 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____9301))
{return or__3824__auto____9301;
} else
{return cljs.core.some.call(null,(function (p1__8990_SHARP_){
return cljs.core.some.call(null,p1__8990_SHARP_,args);
}),ps__9293);
}
};
var G__9309 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9309__delegate.call(this, x, y, z, args);
};
G__9309.cljs$lang$maxFixedArity = 3;
G__9309.cljs$lang$applyTo = (function (arglist__9310){
var x = cljs.core.first(arglist__9310);
var y = cljs.core.first(cljs.core.next(arglist__9310));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9310)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9310)));
return G__9309__delegate(x, y, z, args);
});
G__9309.cljs$lang$arity$variadic = G__9309__delegate;
return G__9309;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9308 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9308__delegate.call(this, p1, p2, p3, ps);
};
G__9308.cljs$lang$maxFixedArity = 3;
G__9308.cljs$lang$applyTo = (function (arglist__9311){
var p1 = cljs.core.first(arglist__9311);
var p2 = cljs.core.first(cljs.core.next(arglist__9311));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9311)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9311)));
return G__9308__delegate(p1, p2, p3, ps);
});
G__9308.cljs$lang$arity$variadic = G__9308__delegate;
return G__9308;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9330 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9330)
{var s__9331 = temp__3974__auto____9330;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9331))
{var c__9332 = cljs.core.chunk_first.call(null,s__9331);
var size__9333 = cljs.core.count.call(null,c__9332);
var b__9334 = cljs.core.chunk_buffer.call(null,size__9333);
var n__3674__auto____9335 = size__9333;
var i__9336 = 0;
while(true){
if((i__9336 < n__3674__auto____9335))
{cljs.core.chunk_append.call(null,b__9334,f.call(null,cljs.core._nth.call(null,c__9332,i__9336)));
{
var G__9348 = (i__9336 + 1);
i__9336 = G__9348;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9334),map.call(null,f,cljs.core.chunk_rest.call(null,s__9331)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9331)),map.call(null,f,cljs.core.rest.call(null,s__9331)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9337 = cljs.core.seq.call(null,c1);
var s2__9338 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9339 = s1__9337;
if(and__3822__auto____9339)
{return s2__9338;
} else
{return and__3822__auto____9339;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9337),cljs.core.first.call(null,s2__9338)),map.call(null,f,cljs.core.rest.call(null,s1__9337),cljs.core.rest.call(null,s2__9338)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9340 = cljs.core.seq.call(null,c1);
var s2__9341 = cljs.core.seq.call(null,c2);
var s3__9342 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____9343 = s1__9340;
if(and__3822__auto____9343)
{var and__3822__auto____9344 = s2__9341;
if(and__3822__auto____9344)
{return s3__9342;
} else
{return and__3822__auto____9344;
}
} else
{return and__3822__auto____9343;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9340),cljs.core.first.call(null,s2__9341),cljs.core.first.call(null,s3__9342)),map.call(null,f,cljs.core.rest.call(null,s1__9340),cljs.core.rest.call(null,s2__9341),cljs.core.rest.call(null,s3__9342)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9349__delegate = function (f,c1,c2,c3,colls){
var step__9347 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9346 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9346))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9346),step.call(null,map.call(null,cljs.core.rest,ss__9346)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9151_SHARP_){
return cljs.core.apply.call(null,f,p1__9151_SHARP_);
}),step__9347.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9349 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9349__delegate.call(this, f, c1, c2, c3, colls);
};
G__9349.cljs$lang$maxFixedArity = 4;
G__9349.cljs$lang$applyTo = (function (arglist__9350){
var f = cljs.core.first(arglist__9350);
var c1 = cljs.core.first(cljs.core.next(arglist__9350));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9350)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9350))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9350))));
return G__9349__delegate(f, c1, c2, c3, colls);
});
G__9349.cljs$lang$arity$variadic = G__9349__delegate;
return G__9349;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____9353 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9353)
{var s__9354 = temp__3974__auto____9353;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9354),take.call(null,(n - 1),cljs.core.rest.call(null,s__9354)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9360 = (function (n,coll){
while(true){
var s__9358 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9359 = (n > 0);
if(and__3822__auto____9359)
{return s__9358;
} else
{return and__3822__auto____9359;
}
})()))
{{
var G__9361 = (n - 1);
var G__9362 = cljs.core.rest.call(null,s__9358);
n = G__9361;
coll = G__9362;
continue;
}
} else
{return s__9358;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9360.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9365 = cljs.core.seq.call(null,coll);
var lead__9366 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9366)
{{
var G__9367 = cljs.core.next.call(null,s__9365);
var G__9368 = cljs.core.next.call(null,lead__9366);
s__9365 = G__9367;
lead__9366 = G__9368;
continue;
}
} else
{return s__9365;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9374 = (function (pred,coll){
while(true){
var s__9372 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____9373 = s__9372;
if(and__3822__auto____9373)
{return pred.call(null,cljs.core.first.call(null,s__9372));
} else
{return and__3822__auto____9373;
}
})()))
{{
var G__9375 = pred;
var G__9376 = cljs.core.rest.call(null,s__9372);
pred = G__9375;
coll = G__9376;
continue;
}
} else
{return s__9372;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9374.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9379 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9379)
{var s__9380 = temp__3974__auto____9379;
return cljs.core.concat.call(null,s__9380,cycle.call(null,s__9380));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9385 = cljs.core.seq.call(null,c1);
var s2__9386 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9387 = s1__9385;
if(and__3822__auto____9387)
{return s2__9386;
} else
{return and__3822__auto____9387;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9385),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9386),interleave.call(null,cljs.core.rest.call(null,s1__9385),cljs.core.rest.call(null,s2__9386))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9389__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9388 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9388))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9388),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9388)));
} else
{return null;
}
}),null));
};
var G__9389 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9389__delegate.call(this, c1, c2, colls);
};
G__9389.cljs$lang$maxFixedArity = 2;
G__9389.cljs$lang$applyTo = (function (arglist__9390){
var c1 = cljs.core.first(arglist__9390);
var c2 = cljs.core.first(cljs.core.next(arglist__9390));
var colls = cljs.core.rest(cljs.core.next(arglist__9390));
return G__9389__delegate(c1, c2, colls);
});
G__9389.cljs$lang$arity$variadic = G__9389__delegate;
return G__9389;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9400 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9398 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9398)
{var coll__9399 = temp__3971__auto____9398;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9399),cat.call(null,cljs.core.rest.call(null,coll__9399),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9400.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9401__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9401 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9401__delegate.call(this, f, coll, colls);
};
G__9401.cljs$lang$maxFixedArity = 2;
G__9401.cljs$lang$applyTo = (function (arglist__9402){
var f = cljs.core.first(arglist__9402);
var coll = cljs.core.first(cljs.core.next(arglist__9402));
var colls = cljs.core.rest(cljs.core.next(arglist__9402));
return G__9401__delegate(f, coll, colls);
});
G__9401.cljs$lang$arity$variadic = G__9401__delegate;
return G__9401;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9412 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9412)
{var s__9413 = temp__3974__auto____9412;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9413))
{var c__9414 = cljs.core.chunk_first.call(null,s__9413);
var size__9415 = cljs.core.count.call(null,c__9414);
var b__9416 = cljs.core.chunk_buffer.call(null,size__9415);
var n__3674__auto____9417 = size__9415;
var i__9418 = 0;
while(true){
if((i__9418 < n__3674__auto____9417))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9414,i__9418))))
{cljs.core.chunk_append.call(null,b__9416,cljs.core._nth.call(null,c__9414,i__9418));
} else
{}
{
var G__9421 = (i__9418 + 1);
i__9418 = G__9421;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9416),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9413)));
} else
{var f__9419 = cljs.core.first.call(null,s__9413);
var r__9420 = cljs.core.rest.call(null,s__9413);
if(cljs.core.truth_(pred.call(null,f__9419)))
{return cljs.core.cons.call(null,f__9419,filter.call(null,pred,r__9420));
} else
{return filter.call(null,pred,r__9420);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9424 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9424.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9422_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9422_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9428__9429 = to;
if(G__9428__9429)
{if((function (){var or__3824__auto____9430 = (G__9428__9429.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9430)
{return or__3824__auto____9430;
} else
{return G__9428__9429.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9428__9429.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9428__9429);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9428__9429);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9431__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9431 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9431__delegate.call(this, f, c1, c2, c3, colls);
};
G__9431.cljs$lang$maxFixedArity = 4;
G__9431.cljs$lang$applyTo = (function (arglist__9432){
var f = cljs.core.first(arglist__9432);
var c1 = cljs.core.first(cljs.core.next(arglist__9432));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9432)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9432))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9432))));
return G__9431__delegate(f, c1, c2, c3, colls);
});
G__9431.cljs$lang$arity$variadic = G__9431__delegate;
return G__9431;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9439 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9439)
{var s__9440 = temp__3974__auto____9439;
var p__9441 = cljs.core.take.call(null,n,s__9440);
if((n === cljs.core.count.call(null,p__9441)))
{return cljs.core.cons.call(null,p__9441,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9440)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9442 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9442)
{var s__9443 = temp__3974__auto____9442;
var p__9444 = cljs.core.take.call(null,n,s__9443);
if((n === cljs.core.count.call(null,p__9444)))
{return cljs.core.cons.call(null,p__9444,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9443)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9444,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9449 = cljs.core.lookup_sentinel;
var m__9450 = m;
var ks__9451 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9451)
{var m__9452 = cljs.core._lookup.call(null,m__9450,cljs.core.first.call(null,ks__9451),sentinel__9449);
if((sentinel__9449 === m__9452))
{return not_found;
} else
{{
var G__9453 = sentinel__9449;
var G__9454 = m__9452;
var G__9455 = cljs.core.next.call(null,ks__9451);
sentinel__9449 = G__9453;
m__9450 = G__9454;
ks__9451 = G__9455;
continue;
}
}
} else
{return m__9450;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9456,v){
var vec__9461__9462 = p__9456;
var k__9463 = cljs.core.nth.call(null,vec__9461__9462,0,null);
var ks__9464 = cljs.core.nthnext.call(null,vec__9461__9462,1);
if(cljs.core.truth_(ks__9464))
{return cljs.core.assoc.call(null,m,k__9463,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9463,null),ks__9464,v));
} else
{return cljs.core.assoc.call(null,m,k__9463,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9465,f,args){
var vec__9470__9471 = p__9465;
var k__9472 = cljs.core.nth.call(null,vec__9470__9471,0,null);
var ks__9473 = cljs.core.nthnext.call(null,vec__9470__9471,1);
if(cljs.core.truth_(ks__9473))
{return cljs.core.assoc.call(null,m,k__9472,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9472,null),ks__9473,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9472,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9472,null),args));
}
};
var update_in = function (m,p__9465,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9465, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9474){
var m = cljs.core.first(arglist__9474);
var p__9465 = cljs.core.first(cljs.core.next(arglist__9474));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9474)));
return update_in__delegate(m, p__9465, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9477 = this;
var h__3339__auto____9478 = this__9477.__hash;
if(!((h__3339__auto____9478 == null)))
{return h__3339__auto____9478;
} else
{var h__3339__auto____9479 = cljs.core.hash_coll.call(null,coll);
this__9477.__hash = h__3339__auto____9479;
return h__3339__auto____9479;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9480 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9481 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9482 = this;
var new_array__9483 = this__9482.array.slice();
(new_array__9483[k] = v);
return (new cljs.core.Vector(this__9482.meta,new_array__9483,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9514 = null;
var G__9514__2 = (function (this_sym9484,k){
var this__9486 = this;
var this_sym9484__9487 = this;
var coll__9488 = this_sym9484__9487;
return coll__9488.cljs$core$ILookup$_lookup$arity$2(coll__9488,k);
});
var G__9514__3 = (function (this_sym9485,k,not_found){
var this__9486 = this;
var this_sym9485__9489 = this;
var coll__9490 = this_sym9485__9489;
return coll__9490.cljs$core$ILookup$_lookup$arity$3(coll__9490,k,not_found);
});
G__9514 = function(this_sym9485,k,not_found){
switch(arguments.length){
case 2:
return G__9514__2.call(this,this_sym9485,k);
case 3:
return G__9514__3.call(this,this_sym9485,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9514;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9475,args9476){
var this__9491 = this;
return this_sym9475.call.apply(this_sym9475,[this_sym9475].concat(args9476.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9492 = this;
var new_array__9493 = this__9492.array.slice();
new_array__9493.push(o);
return (new cljs.core.Vector(this__9492.meta,new_array__9493,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9494 = this;
var this__9495 = this;
return cljs.core.pr_str.call(null,this__9495);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9496 = this;
return cljs.core.ci_reduce.call(null,this__9496.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9497 = this;
return cljs.core.ci_reduce.call(null,this__9497.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9498 = this;
if((this__9498.array.length > 0))
{var vector_seq__9499 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9498.array.length))
{return cljs.core.cons.call(null,(this__9498.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9499.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9500 = this;
return this__9500.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9501 = this;
var count__9502 = this__9501.array.length;
if((count__9502 > 0))
{return (this__9501.array[(count__9502 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9503 = this;
if((this__9503.array.length > 0))
{var new_array__9504 = this__9503.array.slice();
new_array__9504.pop();
return (new cljs.core.Vector(this__9503.meta,new_array__9504,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9505 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9507 = this;
return (new cljs.core.Vector(meta,this__9507.array,this__9507.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9508 = this;
return this__9508.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9509 = this;
if((function (){var and__3822__auto____9510 = (0 <= n);
if(and__3822__auto____9510)
{return (n < this__9509.array.length);
} else
{return and__3822__auto____9510;
}
})())
{return (this__9509.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9511 = this;
if((function (){var and__3822__auto____9512 = (0 <= n);
if(and__3822__auto____9512)
{return (n < this__9511.array.length);
} else
{return and__3822__auto____9512;
}
})())
{return (this__9511.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9513 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9513.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__3457__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9516 = pv.cnt;
if((cnt__9516 < 32))
{return 0;
} else
{return (((cnt__9516 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9522 = level;
var ret__9523 = node;
while(true){
if((ll__9522 === 0))
{return ret__9523;
} else
{var embed__9524 = ret__9523;
var r__9525 = cljs.core.pv_fresh_node.call(null,edit);
var ___9526 = cljs.core.pv_aset.call(null,r__9525,0,embed__9524);
{
var G__9527 = (ll__9522 - 5);
var G__9528 = r__9525;
ll__9522 = G__9527;
ret__9523 = G__9528;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9534 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9535 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9534,subidx__9535,tailnode);
return ret__9534;
} else
{var child__9536 = cljs.core.pv_aget.call(null,parent,subidx__9535);
if(!((child__9536 == null)))
{var node_to_insert__9537 = push_tail.call(null,pv,(level - 5),child__9536,tailnode);
cljs.core.pv_aset.call(null,ret__9534,subidx__9535,node_to_insert__9537);
return ret__9534;
} else
{var node_to_insert__9538 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9534,subidx__9535,node_to_insert__9538);
return ret__9534;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9542 = (0 <= i);
if(and__3822__auto____9542)
{return (i < pv.cnt);
} else
{return and__3822__auto____9542;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9543 = pv.root;
var level__9544 = pv.shift;
while(true){
if((level__9544 > 0))
{{
var G__9545 = cljs.core.pv_aget.call(null,node__9543,((i >>> level__9544) & 31));
var G__9546 = (level__9544 - 5);
node__9543 = G__9545;
level__9544 = G__9546;
continue;
}
} else
{return node__9543.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9549 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9549,(i & 31),val);
return ret__9549;
} else
{var subidx__9550 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9549,subidx__9550,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9550),i,val));
return ret__9549;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9556 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9557 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9556));
if((function (){var and__3822__auto____9558 = (new_child__9557 == null);
if(and__3822__auto____9558)
{return (subidx__9556 === 0);
} else
{return and__3822__auto____9558;
}
})())
{return null;
} else
{var ret__9559 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9559,subidx__9556,new_child__9557);
return ret__9559;
}
} else
{if((subidx__9556 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9560 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9560,subidx__9556,null);
return ret__9560;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9563 = this;
return (new cljs.core.TransientVector(this__9563.cnt,this__9563.shift,cljs.core.tv_editable_root.call(null,this__9563.root),cljs.core.tv_editable_tail.call(null,this__9563.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9564 = this;
var h__3339__auto____9565 = this__9564.__hash;
if(!((h__3339__auto____9565 == null)))
{return h__3339__auto____9565;
} else
{var h__3339__auto____9566 = cljs.core.hash_coll.call(null,coll);
this__9564.__hash = h__3339__auto____9566;
return h__3339__auto____9566;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9567 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9568 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9569 = this;
if((function (){var and__3822__auto____9570 = (0 <= k);
if(and__3822__auto____9570)
{return (k < this__9569.cnt);
} else
{return and__3822__auto____9570;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9571 = this__9569.tail.slice();
(new_tail__9571[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9569.meta,this__9569.cnt,this__9569.shift,this__9569.root,new_tail__9571,null));
} else
{return (new cljs.core.PersistentVector(this__9569.meta,this__9569.cnt,this__9569.shift,cljs.core.do_assoc.call(null,coll,this__9569.shift,this__9569.root,k,v),this__9569.tail,null));
}
} else
{if((k === this__9569.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9569.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9619 = null;
var G__9619__2 = (function (this_sym9572,k){
var this__9574 = this;
var this_sym9572__9575 = this;
var coll__9576 = this_sym9572__9575;
return coll__9576.cljs$core$ILookup$_lookup$arity$2(coll__9576,k);
});
var G__9619__3 = (function (this_sym9573,k,not_found){
var this__9574 = this;
var this_sym9573__9577 = this;
var coll__9578 = this_sym9573__9577;
return coll__9578.cljs$core$ILookup$_lookup$arity$3(coll__9578,k,not_found);
});
G__9619 = function(this_sym9573,k,not_found){
switch(arguments.length){
case 2:
return G__9619__2.call(this,this_sym9573,k);
case 3:
return G__9619__3.call(this,this_sym9573,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9619;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9561,args9562){
var this__9579 = this;
return this_sym9561.call.apply(this_sym9561,[this_sym9561].concat(args9562.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9580 = this;
var step_init__9581 = [0,init];
var i__9582 = 0;
while(true){
if((i__9582 < this__9580.cnt))
{var arr__9583 = cljs.core.array_for.call(null,v,i__9582);
var len__9584 = arr__9583.length;
var init__9588 = (function (){var j__9585 = 0;
var init__9586 = (step_init__9581[1]);
while(true){
if((j__9585 < len__9584))
{var init__9587 = f.call(null,init__9586,(j__9585 + i__9582),(arr__9583[j__9585]));
if(cljs.core.reduced_QMARK_.call(null,init__9587))
{return init__9587;
} else
{{
var G__9620 = (j__9585 + 1);
var G__9621 = init__9587;
j__9585 = G__9620;
init__9586 = G__9621;
continue;
}
}
} else
{(step_init__9581[0] = len__9584);
(step_init__9581[1] = init__9586);
return init__9586;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9588))
{return cljs.core.deref.call(null,init__9588);
} else
{{
var G__9622 = (i__9582 + (step_init__9581[0]));
i__9582 = G__9622;
continue;
}
}
} else
{return (step_init__9581[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9589 = this;
if(((this__9589.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9590 = this__9589.tail.slice();
new_tail__9590.push(o);
return (new cljs.core.PersistentVector(this__9589.meta,(this__9589.cnt + 1),this__9589.shift,this__9589.root,new_tail__9590,null));
} else
{var root_overflow_QMARK___9591 = ((this__9589.cnt >>> 5) > (1 << this__9589.shift));
var new_shift__9592 = ((root_overflow_QMARK___9591)?(this__9589.shift + 5):this__9589.shift);
var new_root__9594 = ((root_overflow_QMARK___9591)?(function (){var n_r__9593 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9593,0,this__9589.root);
cljs.core.pv_aset.call(null,n_r__9593,1,cljs.core.new_path.call(null,null,this__9589.shift,(new cljs.core.VectorNode(null,this__9589.tail))));
return n_r__9593;
})():cljs.core.push_tail.call(null,coll,this__9589.shift,this__9589.root,(new cljs.core.VectorNode(null,this__9589.tail))));
return (new cljs.core.PersistentVector(this__9589.meta,(this__9589.cnt + 1),new_shift__9592,new_root__9594,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9595 = this;
if((this__9595.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9595.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9596 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9597 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9598 = this;
var this__9599 = this;
return cljs.core.pr_str.call(null,this__9599);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9600 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9601 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9602 = this;
if((this__9602.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9603 = this;
return this__9603.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9604 = this;
if((this__9604.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9604.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9605 = this;
if((this__9605.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9605.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9605.meta);
} else
{if((1 < (this__9605.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9605.meta,(this__9605.cnt - 1),this__9605.shift,this__9605.root,this__9605.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9606 = cljs.core.array_for.call(null,coll,(this__9605.cnt - 2));
var nr__9607 = cljs.core.pop_tail.call(null,coll,this__9605.shift,this__9605.root);
var new_root__9608 = (((nr__9607 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9607);
var cnt_1__9609 = (this__9605.cnt - 1);
if((function (){var and__3822__auto____9610 = (5 < this__9605.shift);
if(and__3822__auto____9610)
{return (cljs.core.pv_aget.call(null,new_root__9608,1) == null);
} else
{return and__3822__auto____9610;
}
})())
{return (new cljs.core.PersistentVector(this__9605.meta,cnt_1__9609,(this__9605.shift - 5),cljs.core.pv_aget.call(null,new_root__9608,0),new_tail__9606,null));
} else
{return (new cljs.core.PersistentVector(this__9605.meta,cnt_1__9609,this__9605.shift,new_root__9608,new_tail__9606,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9611 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9612 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9613 = this;
return (new cljs.core.PersistentVector(meta,this__9613.cnt,this__9613.shift,this__9613.root,this__9613.tail,this__9613.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9614 = this;
return this__9614.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9615 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9616 = this;
if((function (){var and__3822__auto____9617 = (0 <= n);
if(and__3822__auto____9617)
{return (n < this__9616.cnt);
} else
{return and__3822__auto____9617;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9618 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9618.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9623 = xs.length;
var xs__9624 = (((no_clone === true))?xs:xs.slice());
if((l__9623 < 32))
{return (new cljs.core.PersistentVector(null,l__9623,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9624,null));
} else
{var node__9625 = xs__9624.slice(0,32);
var v__9626 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9625,null));
var i__9627 = 32;
var out__9628 = cljs.core._as_transient.call(null,v__9626);
while(true){
if((i__9627 < l__9623))
{{
var G__9629 = (i__9627 + 1);
var G__9630 = cljs.core.conj_BANG_.call(null,out__9628,(xs__9624[i__9627]));
i__9627 = G__9629;
out__9628 = G__9630;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9628);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9631){
var args = cljs.core.seq(arglist__9631);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9632 = this;
if(((this__9632.off + 1) < this__9632.node.length))
{var s__9633 = cljs.core.chunked_seq.call(null,this__9632.vec,this__9632.node,this__9632.i,(this__9632.off + 1));
if((s__9633 == null))
{return null;
} else
{return s__9633;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9634 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9635 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9636 = this;
return (this__9636.node[this__9636.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9637 = this;
if(((this__9637.off + 1) < this__9637.node.length))
{var s__9638 = cljs.core.chunked_seq.call(null,this__9637.vec,this__9637.node,this__9637.i,(this__9637.off + 1));
if((s__9638 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9638;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9639 = this;
var l__9640 = this__9639.node.length;
var s__9641 = ((((this__9639.i + l__9640) < cljs.core._count.call(null,this__9639.vec)))?cljs.core.chunked_seq.call(null,this__9639.vec,(this__9639.i + l__9640),0):null);
if((s__9641 == null))
{return null;
} else
{return s__9641;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9643 = this;
return cljs.core.chunked_seq.call(null,this__9643.vec,this__9643.node,this__9643.i,this__9643.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9644 = this;
return this__9644.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9645 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9645.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9646 = this;
return cljs.core.array_chunk.call(null,this__9646.node,this__9646.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9647 = this;
var l__9648 = this__9647.node.length;
var s__9649 = ((((this__9647.i + l__9648) < cljs.core._count.call(null,this__9647.vec)))?cljs.core.chunked_seq.call(null,this__9647.vec,(this__9647.i + l__9648),0):null);
if((s__9649 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9649;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9652 = this;
var h__3339__auto____9653 = this__9652.__hash;
if(!((h__3339__auto____9653 == null)))
{return h__3339__auto____9653;
} else
{var h__3339__auto____9654 = cljs.core.hash_coll.call(null,coll);
this__9652.__hash = h__3339__auto____9654;
return h__3339__auto____9654;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9655 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9656 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9657 = this;
var v_pos__9658 = (this__9657.start + key);
return (new cljs.core.Subvec(this__9657.meta,cljs.core._assoc.call(null,this__9657.v,v_pos__9658,val),this__9657.start,((this__9657.end > (v_pos__9658 + 1)) ? this__9657.end : (v_pos__9658 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9684 = null;
var G__9684__2 = (function (this_sym9659,k){
var this__9661 = this;
var this_sym9659__9662 = this;
var coll__9663 = this_sym9659__9662;
return coll__9663.cljs$core$ILookup$_lookup$arity$2(coll__9663,k);
});
var G__9684__3 = (function (this_sym9660,k,not_found){
var this__9661 = this;
var this_sym9660__9664 = this;
var coll__9665 = this_sym9660__9664;
return coll__9665.cljs$core$ILookup$_lookup$arity$3(coll__9665,k,not_found);
});
G__9684 = function(this_sym9660,k,not_found){
switch(arguments.length){
case 2:
return G__9684__2.call(this,this_sym9660,k);
case 3:
return G__9684__3.call(this,this_sym9660,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9684;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9650,args9651){
var this__9666 = this;
return this_sym9650.call.apply(this_sym9650,[this_sym9650].concat(args9651.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9667 = this;
return (new cljs.core.Subvec(this__9667.meta,cljs.core._assoc_n.call(null,this__9667.v,this__9667.end,o),this__9667.start,(this__9667.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9668 = this;
var this__9669 = this;
return cljs.core.pr_str.call(null,this__9669);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9670 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9671 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9672 = this;
var subvec_seq__9673 = (function subvec_seq(i){
if((i === this__9672.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9672.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9673.call(null,this__9672.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9674 = this;
return (this__9674.end - this__9674.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9675 = this;
return cljs.core._nth.call(null,this__9675.v,(this__9675.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9676 = this;
if((this__9676.start === this__9676.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9676.meta,this__9676.v,this__9676.start,(this__9676.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9677 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9679 = this;
return (new cljs.core.Subvec(meta,this__9679.v,this__9679.start,this__9679.end,this__9679.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9680 = this;
return this__9680.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9681 = this;
return cljs.core._nth.call(null,this__9681.v,(this__9681.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9682 = this;
return cljs.core._nth.call(null,this__9682.v,(this__9682.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9683 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9683.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9686 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9686,0,tl.length);
return ret__9686;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9690 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9691 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9690,subidx__9691,(((level === 5))?tail_node:(function (){var child__9692 = cljs.core.pv_aget.call(null,ret__9690,subidx__9691);
if(!((child__9692 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9692,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9690;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9697 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9698 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9699 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9697,subidx__9698));
if((function (){var and__3822__auto____9700 = (new_child__9699 == null);
if(and__3822__auto____9700)
{return (subidx__9698 === 0);
} else
{return and__3822__auto____9700;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9697,subidx__9698,new_child__9699);
return node__9697;
}
} else
{if((subidx__9698 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9697,subidx__9698,null);
return node__9697;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9705 = (0 <= i);
if(and__3822__auto____9705)
{return (i < tv.cnt);
} else
{return and__3822__auto____9705;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9706 = tv.root;
var node__9707 = root__9706;
var level__9708 = tv.shift;
while(true){
if((level__9708 > 0))
{{
var G__9709 = cljs.core.tv_ensure_editable.call(null,root__9706.edit,cljs.core.pv_aget.call(null,node__9707,((i >>> level__9708) & 31)));
var G__9710 = (level__9708 - 5);
node__9707 = G__9709;
level__9708 = G__9710;
continue;
}
} else
{return node__9707.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9750 = null;
var G__9750__2 = (function (this_sym9713,k){
var this__9715 = this;
var this_sym9713__9716 = this;
var coll__9717 = this_sym9713__9716;
return coll__9717.cljs$core$ILookup$_lookup$arity$2(coll__9717,k);
});
var G__9750__3 = (function (this_sym9714,k,not_found){
var this__9715 = this;
var this_sym9714__9718 = this;
var coll__9719 = this_sym9714__9718;
return coll__9719.cljs$core$ILookup$_lookup$arity$3(coll__9719,k,not_found);
});
G__9750 = function(this_sym9714,k,not_found){
switch(arguments.length){
case 2:
return G__9750__2.call(this,this_sym9714,k);
case 3:
return G__9750__3.call(this,this_sym9714,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9750;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9711,args9712){
var this__9720 = this;
return this_sym9711.call.apply(this_sym9711,[this_sym9711].concat(args9712.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9721 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9722 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9723 = this;
if(this__9723.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9724 = this;
if((function (){var and__3822__auto____9725 = (0 <= n);
if(and__3822__auto____9725)
{return (n < this__9724.cnt);
} else
{return and__3822__auto____9725;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9726 = this;
if(this__9726.root.edit)
{return this__9726.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9727 = this;
if(this__9727.root.edit)
{if((function (){var and__3822__auto____9728 = (0 <= n);
if(and__3822__auto____9728)
{return (n < this__9727.cnt);
} else
{return and__3822__auto____9728;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9727.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9733 = (function go(level,node){
var node__9731 = cljs.core.tv_ensure_editable.call(null,this__9727.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9731,(n & 31),val);
return node__9731;
} else
{var subidx__9732 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9731,subidx__9732,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9731,subidx__9732)));
return node__9731;
}
}).call(null,this__9727.shift,this__9727.root);
this__9727.root = new_root__9733;
return tcoll;
}
} else
{if((n === this__9727.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9727.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9734 = this;
if(this__9734.root.edit)
{if((this__9734.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9734.cnt))
{this__9734.cnt = 0;
return tcoll;
} else
{if((((this__9734.cnt - 1) & 31) > 0))
{this__9734.cnt = (this__9734.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9735 = cljs.core.editable_array_for.call(null,tcoll,(this__9734.cnt - 2));
var new_root__9737 = (function (){var nr__9736 = cljs.core.tv_pop_tail.call(null,tcoll,this__9734.shift,this__9734.root);
if(!((nr__9736 == null)))
{return nr__9736;
} else
{return (new cljs.core.VectorNode(this__9734.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____9738 = (5 < this__9734.shift);
if(and__3822__auto____9738)
{return (cljs.core.pv_aget.call(null,new_root__9737,1) == null);
} else
{return and__3822__auto____9738;
}
})())
{var new_root__9739 = cljs.core.tv_ensure_editable.call(null,this__9734.root.edit,cljs.core.pv_aget.call(null,new_root__9737,0));
this__9734.root = new_root__9739;
this__9734.shift = (this__9734.shift - 5);
this__9734.cnt = (this__9734.cnt - 1);
this__9734.tail = new_tail__9735;
return tcoll;
} else
{this__9734.root = new_root__9737;
this__9734.cnt = (this__9734.cnt - 1);
this__9734.tail = new_tail__9735;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9740 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9741 = this;
if(this__9741.root.edit)
{if(((this__9741.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9741.tail[(this__9741.cnt & 31)] = o);
this__9741.cnt = (this__9741.cnt + 1);
return tcoll;
} else
{var tail_node__9742 = (new cljs.core.VectorNode(this__9741.root.edit,this__9741.tail));
var new_tail__9743 = cljs.core.make_array.call(null,32);
(new_tail__9743[0] = o);
this__9741.tail = new_tail__9743;
if(((this__9741.cnt >>> 5) > (1 << this__9741.shift)))
{var new_root_array__9744 = cljs.core.make_array.call(null,32);
var new_shift__9745 = (this__9741.shift + 5);
(new_root_array__9744[0] = this__9741.root);
(new_root_array__9744[1] = cljs.core.new_path.call(null,this__9741.root.edit,this__9741.shift,tail_node__9742));
this__9741.root = (new cljs.core.VectorNode(this__9741.root.edit,new_root_array__9744));
this__9741.shift = new_shift__9745;
this__9741.cnt = (this__9741.cnt + 1);
return tcoll;
} else
{var new_root__9746 = cljs.core.tv_push_tail.call(null,tcoll,this__9741.shift,this__9741.root,tail_node__9742);
this__9741.root = new_root__9746;
this__9741.cnt = (this__9741.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9747 = this;
if(this__9747.root.edit)
{this__9747.root.edit = null;
var len__9748 = (this__9747.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9749 = cljs.core.make_array.call(null,len__9748);
cljs.core.array_copy.call(null,this__9747.tail,0,trimmed_tail__9749,0,len__9748);
return (new cljs.core.PersistentVector(null,this__9747.cnt,this__9747.shift,this__9747.root,trimmed_tail__9749,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9751 = this;
var h__3339__auto____9752 = this__9751.__hash;
if(!((h__3339__auto____9752 == null)))
{return h__3339__auto____9752;
} else
{var h__3339__auto____9753 = cljs.core.hash_coll.call(null,coll);
this__9751.__hash = h__3339__auto____9753;
return h__3339__auto____9753;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9754 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9755 = this;
var this__9756 = this;
return cljs.core.pr_str.call(null,this__9756);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9757 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9758 = this;
return cljs.core._first.call(null,this__9758.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9759 = this;
var temp__3971__auto____9760 = cljs.core.next.call(null,this__9759.front);
if(temp__3971__auto____9760)
{var f1__9761 = temp__3971__auto____9760;
return (new cljs.core.PersistentQueueSeq(this__9759.meta,f1__9761,this__9759.rear,null));
} else
{if((this__9759.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9759.meta,this__9759.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9763 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9763.front,this__9763.rear,this__9763.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9764 = this;
return this__9764.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9765 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9765.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9766 = this;
var h__3339__auto____9767 = this__9766.__hash;
if(!((h__3339__auto____9767 == null)))
{return h__3339__auto____9767;
} else
{var h__3339__auto____9768 = cljs.core.hash_coll.call(null,coll);
this__9766.__hash = h__3339__auto____9768;
return h__3339__auto____9768;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9769 = this;
if(cljs.core.truth_(this__9769.front))
{return (new cljs.core.PersistentQueue(this__9769.meta,(this__9769.count + 1),this__9769.front,cljs.core.conj.call(null,(function (){var or__3824__auto____9770 = this__9769.rear;
if(cljs.core.truth_(or__3824__auto____9770))
{return or__3824__auto____9770;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9769.meta,(this__9769.count + 1),cljs.core.conj.call(null,this__9769.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9771 = this;
var this__9772 = this;
return cljs.core.pr_str.call(null,this__9772);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9773 = this;
var rear__9774 = cljs.core.seq.call(null,this__9773.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9775 = this__9773.front;
if(cljs.core.truth_(or__3824__auto____9775))
{return or__3824__auto____9775;
} else
{return rear__9774;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9773.front,cljs.core.seq.call(null,rear__9774),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9776 = this;
return this__9776.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9777 = this;
return cljs.core._first.call(null,this__9777.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9778 = this;
if(cljs.core.truth_(this__9778.front))
{var temp__3971__auto____9779 = cljs.core.next.call(null,this__9778.front);
if(temp__3971__auto____9779)
{var f1__9780 = temp__3971__auto____9779;
return (new cljs.core.PersistentQueue(this__9778.meta,(this__9778.count - 1),f1__9780,this__9778.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9778.meta,(this__9778.count - 1),cljs.core.seq.call(null,this__9778.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9781 = this;
return cljs.core.first.call(null,this__9781.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9782 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9784 = this;
return (new cljs.core.PersistentQueue(meta,this__9784.count,this__9784.front,this__9784.rear,this__9784.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9785 = this;
return this__9785.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9786 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9787 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9790 = array.length;
var i__9791 = 0;
while(true){
if((i__9791 < len__9790))
{if((k === (array[i__9791])))
{return i__9791;
} else
{{
var G__9792 = (i__9791 + incr);
i__9791 = G__9792;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9795 = cljs.core.hash.call(null,a);
var b__9796 = cljs.core.hash.call(null,b);
if((a__9795 < b__9796))
{return -1;
} else
{if((a__9795 > b__9796))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9804 = m.keys;
var len__9805 = ks__9804.length;
var so__9806 = m.strobj;
var out__9807 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9808 = 0;
var out__9809 = cljs.core.transient$.call(null,out__9807);
while(true){
if((i__9808 < len__9805))
{var k__9810 = (ks__9804[i__9808]);
{
var G__9811 = (i__9808 + 1);
var G__9812 = cljs.core.assoc_BANG_.call(null,out__9809,k__9810,(so__9806[k__9810]));
i__9808 = G__9811;
out__9809 = G__9812;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9809,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9818 = {};
var l__9819 = ks.length;
var i__9820 = 0;
while(true){
if((i__9820 < l__9819))
{var k__9821 = (ks[i__9820]);
(new_obj__9818[k__9821] = (obj[k__9821]));
{
var G__9822 = (i__9820 + 1);
i__9820 = G__9822;
continue;
}
} else
{}
break;
}
return new_obj__9818;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9825 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9826 = this;
var h__3339__auto____9827 = this__9826.__hash;
if(!((h__3339__auto____9827 == null)))
{return h__3339__auto____9827;
} else
{var h__3339__auto____9828 = cljs.core.hash_imap.call(null,coll);
this__9826.__hash = h__3339__auto____9828;
return h__3339__auto____9828;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9829 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9830 = this;
if((function (){var and__3822__auto____9831 = goog.isString(k);
if(and__3822__auto____9831)
{return !((cljs.core.scan_array.call(null,1,k,this__9830.keys) == null));
} else
{return and__3822__auto____9831;
}
})())
{return (this__9830.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9832 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9833 = (this__9832.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9833)
{return or__3824__auto____9833;
} else
{return (this__9832.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9832.keys) == null)))
{var new_strobj__9834 = cljs.core.obj_clone.call(null,this__9832.strobj,this__9832.keys);
(new_strobj__9834[k] = v);
return (new cljs.core.ObjMap(this__9832.meta,this__9832.keys,new_strobj__9834,(this__9832.update_count + 1),null));
} else
{var new_strobj__9835 = cljs.core.obj_clone.call(null,this__9832.strobj,this__9832.keys);
var new_keys__9836 = this__9832.keys.slice();
(new_strobj__9835[k] = v);
new_keys__9836.push(k);
return (new cljs.core.ObjMap(this__9832.meta,new_keys__9836,new_strobj__9835,(this__9832.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9837 = this;
if((function (){var and__3822__auto____9838 = goog.isString(k);
if(and__3822__auto____9838)
{return !((cljs.core.scan_array.call(null,1,k,this__9837.keys) == null));
} else
{return and__3822__auto____9838;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9860 = null;
var G__9860__2 = (function (this_sym9839,k){
var this__9841 = this;
var this_sym9839__9842 = this;
var coll__9843 = this_sym9839__9842;
return coll__9843.cljs$core$ILookup$_lookup$arity$2(coll__9843,k);
});
var G__9860__3 = (function (this_sym9840,k,not_found){
var this__9841 = this;
var this_sym9840__9844 = this;
var coll__9845 = this_sym9840__9844;
return coll__9845.cljs$core$ILookup$_lookup$arity$3(coll__9845,k,not_found);
});
G__9860 = function(this_sym9840,k,not_found){
switch(arguments.length){
case 2:
return G__9860__2.call(this,this_sym9840,k);
case 3:
return G__9860__3.call(this,this_sym9840,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9860;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9823,args9824){
var this__9846 = this;
return this_sym9823.call.apply(this_sym9823,[this_sym9823].concat(args9824.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9847 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9848 = this;
var this__9849 = this;
return cljs.core.pr_str.call(null,this__9849);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9850 = this;
if((this__9850.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9813_SHARP_){
return cljs.core.vector.call(null,p1__9813_SHARP_,(this__9850.strobj[p1__9813_SHARP_]));
}),this__9850.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9851 = this;
return this__9851.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9853 = this;
return (new cljs.core.ObjMap(meta,this__9853.keys,this__9853.strobj,this__9853.update_count,this__9853.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9854 = this;
return this__9854.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9855 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9855.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9856 = this;
if((function (){var and__3822__auto____9857 = goog.isString(k);
if(and__3822__auto____9857)
{return !((cljs.core.scan_array.call(null,1,k,this__9856.keys) == null));
} else
{return and__3822__auto____9857;
}
})())
{var new_keys__9858 = this__9856.keys.slice();
var new_strobj__9859 = cljs.core.obj_clone.call(null,this__9856.strobj,this__9856.keys);
new_keys__9858.splice(cljs.core.scan_array.call(null,1,k,new_keys__9858),1);
cljs.core.js_delete.call(null,new_strobj__9859,k);
return (new cljs.core.ObjMap(this__9856.meta,new_keys__9858,new_strobj__9859,(this__9856.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9864 = this;
var h__3339__auto____9865 = this__9864.__hash;
if(!((h__3339__auto____9865 == null)))
{return h__3339__auto____9865;
} else
{var h__3339__auto____9866 = cljs.core.hash_imap.call(null,coll);
this__9864.__hash = h__3339__auto____9866;
return h__3339__auto____9866;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9867 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9868 = this;
var bucket__9869 = (this__9868.hashobj[cljs.core.hash.call(null,k)]);
var i__9870 = (cljs.core.truth_(bucket__9869)?cljs.core.scan_array.call(null,2,k,bucket__9869):null);
if(cljs.core.truth_(i__9870))
{return (bucket__9869[(i__9870 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9871 = this;
var h__9872 = cljs.core.hash.call(null,k);
var bucket__9873 = (this__9871.hashobj[h__9872]);
if(cljs.core.truth_(bucket__9873))
{var new_bucket__9874 = bucket__9873.slice();
var new_hashobj__9875 = goog.object.clone(this__9871.hashobj);
(new_hashobj__9875[h__9872] = new_bucket__9874);
var temp__3971__auto____9876 = cljs.core.scan_array.call(null,2,k,new_bucket__9874);
if(cljs.core.truth_(temp__3971__auto____9876))
{var i__9877 = temp__3971__auto____9876;
(new_bucket__9874[(i__9877 + 1)] = v);
return (new cljs.core.HashMap(this__9871.meta,this__9871.count,new_hashobj__9875,null));
} else
{new_bucket__9874.push(k,v);
return (new cljs.core.HashMap(this__9871.meta,(this__9871.count + 1),new_hashobj__9875,null));
}
} else
{var new_hashobj__9878 = goog.object.clone(this__9871.hashobj);
(new_hashobj__9878[h__9872] = [k,v]);
return (new cljs.core.HashMap(this__9871.meta,(this__9871.count + 1),new_hashobj__9878,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9879 = this;
var bucket__9880 = (this__9879.hashobj[cljs.core.hash.call(null,k)]);
var i__9881 = (cljs.core.truth_(bucket__9880)?cljs.core.scan_array.call(null,2,k,bucket__9880):null);
if(cljs.core.truth_(i__9881))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9906 = null;
var G__9906__2 = (function (this_sym9882,k){
var this__9884 = this;
var this_sym9882__9885 = this;
var coll__9886 = this_sym9882__9885;
return coll__9886.cljs$core$ILookup$_lookup$arity$2(coll__9886,k);
});
var G__9906__3 = (function (this_sym9883,k,not_found){
var this__9884 = this;
var this_sym9883__9887 = this;
var coll__9888 = this_sym9883__9887;
return coll__9888.cljs$core$ILookup$_lookup$arity$3(coll__9888,k,not_found);
});
G__9906 = function(this_sym9883,k,not_found){
switch(arguments.length){
case 2:
return G__9906__2.call(this,this_sym9883,k);
case 3:
return G__9906__3.call(this,this_sym9883,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9906;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9862,args9863){
var this__9889 = this;
return this_sym9862.call.apply(this_sym9862,[this_sym9862].concat(args9863.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9890 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9891 = this;
var this__9892 = this;
return cljs.core.pr_str.call(null,this__9892);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9893 = this;
if((this__9893.count > 0))
{var hashes__9894 = cljs.core.js_keys.call(null,this__9893.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9861_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9893.hashobj[p1__9861_SHARP_])));
}),hashes__9894);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9895 = this;
return this__9895.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9896 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9897 = this;
return (new cljs.core.HashMap(meta,this__9897.count,this__9897.hashobj,this__9897.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9898 = this;
return this__9898.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9899 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9899.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9900 = this;
var h__9901 = cljs.core.hash.call(null,k);
var bucket__9902 = (this__9900.hashobj[h__9901]);
var i__9903 = (cljs.core.truth_(bucket__9902)?cljs.core.scan_array.call(null,2,k,bucket__9902):null);
if(cljs.core.not.call(null,i__9903))
{return coll;
} else
{var new_hashobj__9904 = goog.object.clone(this__9900.hashobj);
if((3 > bucket__9902.length))
{cljs.core.js_delete.call(null,new_hashobj__9904,h__9901);
} else
{var new_bucket__9905 = bucket__9902.slice();
new_bucket__9905.splice(i__9903,2);
(new_hashobj__9904[h__9901] = new_bucket__9905);
}
return (new cljs.core.HashMap(this__9900.meta,(this__9900.count - 1),new_hashobj__9904,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9907 = ks.length;
var i__9908 = 0;
var out__9909 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9908 < len__9907))
{{
var G__9910 = (i__9908 + 1);
var G__9911 = cljs.core.assoc.call(null,out__9909,(ks[i__9908]),(vs[i__9908]));
i__9908 = G__9910;
out__9909 = G__9911;
continue;
}
} else
{return out__9909;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9915 = m.arr;
var len__9916 = arr__9915.length;
var i__9917 = 0;
while(true){
if((len__9916 <= i__9917))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9915[i__9917]),k))
{return i__9917;
} else
{if("\uFDD0'else")
{{
var G__9918 = (i__9917 + 2);
i__9917 = G__9918;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9921 = this;
return (new cljs.core.TransientArrayMap({},this__9921.arr.length,this__9921.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9922 = this;
var h__3339__auto____9923 = this__9922.__hash;
if(!((h__3339__auto____9923 == null)))
{return h__3339__auto____9923;
} else
{var h__3339__auto____9924 = cljs.core.hash_imap.call(null,coll);
this__9922.__hash = h__3339__auto____9924;
return h__3339__auto____9924;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9925 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9926 = this;
var idx__9927 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9927 === -1))
{return not_found;
} else
{return (this__9926.arr[(idx__9927 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9928 = this;
var idx__9929 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9929 === -1))
{if((this__9928.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9928.meta,(this__9928.cnt + 1),(function (){var G__9930__9931 = this__9928.arr.slice();
G__9930__9931.push(k);
G__9930__9931.push(v);
return G__9930__9931;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9928.arr[(idx__9929 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9928.meta,this__9928.cnt,(function (){var G__9932__9933 = this__9928.arr.slice();
(G__9932__9933[(idx__9929 + 1)] = v);
return G__9932__9933;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9934 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9966 = null;
var G__9966__2 = (function (this_sym9935,k){
var this__9937 = this;
var this_sym9935__9938 = this;
var coll__9939 = this_sym9935__9938;
return coll__9939.cljs$core$ILookup$_lookup$arity$2(coll__9939,k);
});
var G__9966__3 = (function (this_sym9936,k,not_found){
var this__9937 = this;
var this_sym9936__9940 = this;
var coll__9941 = this_sym9936__9940;
return coll__9941.cljs$core$ILookup$_lookup$arity$3(coll__9941,k,not_found);
});
G__9966 = function(this_sym9936,k,not_found){
switch(arguments.length){
case 2:
return G__9966__2.call(this,this_sym9936,k);
case 3:
return G__9966__3.call(this,this_sym9936,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9966;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9919,args9920){
var this__9942 = this;
return this_sym9919.call.apply(this_sym9919,[this_sym9919].concat(args9920.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9943 = this;
var len__9944 = this__9943.arr.length;
var i__9945 = 0;
var init__9946 = init;
while(true){
if((i__9945 < len__9944))
{var init__9947 = f.call(null,init__9946,(this__9943.arr[i__9945]),(this__9943.arr[(i__9945 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9947))
{return cljs.core.deref.call(null,init__9947);
} else
{{
var G__9967 = (i__9945 + 2);
var G__9968 = init__9947;
i__9945 = G__9967;
init__9946 = G__9968;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9948 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9949 = this;
var this__9950 = this;
return cljs.core.pr_str.call(null,this__9950);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9951 = this;
if((this__9951.cnt > 0))
{var len__9952 = this__9951.arr.length;
var array_map_seq__9953 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9952))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9951.arr[i]),(this__9951.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9953.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9954 = this;
return this__9954.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9955 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9956 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9956.cnt,this__9956.arr,this__9956.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9957 = this;
return this__9957.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9958 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9958.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9959 = this;
var idx__9960 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9960 >= 0))
{var len__9961 = this__9959.arr.length;
var new_len__9962 = (len__9961 - 2);
if((new_len__9962 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9963 = cljs.core.make_array.call(null,new_len__9962);
var s__9964 = 0;
var d__9965 = 0;
while(true){
if((s__9964 >= len__9961))
{return (new cljs.core.PersistentArrayMap(this__9959.meta,(this__9959.cnt - 1),new_arr__9963,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9959.arr[s__9964])))
{{
var G__9969 = (s__9964 + 2);
var G__9970 = d__9965;
s__9964 = G__9969;
d__9965 = G__9970;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9963[d__9965] = (this__9959.arr[s__9964]));
(new_arr__9963[(d__9965 + 1)] = (this__9959.arr[(s__9964 + 1)]));
{
var G__9971 = (s__9964 + 2);
var G__9972 = (d__9965 + 2);
s__9964 = G__9971;
d__9965 = G__9972;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9973 = cljs.core.count.call(null,ks);
var i__9974 = 0;
var out__9975 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9974 < len__9973))
{{
var G__9976 = (i__9974 + 1);
var G__9977 = cljs.core.assoc_BANG_.call(null,out__9975,(ks[i__9974]),(vs[i__9974]));
i__9974 = G__9976;
out__9975 = G__9977;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9975);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9978 = this;
if(cljs.core.truth_(this__9978.editable_QMARK_))
{var idx__9979 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9979 >= 0))
{(this__9978.arr[idx__9979] = (this__9978.arr[(this__9978.len - 2)]));
(this__9978.arr[(idx__9979 + 1)] = (this__9978.arr[(this__9978.len - 1)]));
var G__9980__9981 = this__9978.arr;
G__9980__9981.pop();
G__9980__9981.pop();
G__9980__9981;
this__9978.len = (this__9978.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9982 = this;
if(cljs.core.truth_(this__9982.editable_QMARK_))
{var idx__9983 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9983 === -1))
{if(((this__9982.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9982.len = (this__9982.len + 2);
this__9982.arr.push(key);
this__9982.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9982.len,this__9982.arr),key,val);
}
} else
{if((val === (this__9982.arr[(idx__9983 + 1)])))
{return tcoll;
} else
{(this__9982.arr[(idx__9983 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9984 = this;
if(cljs.core.truth_(this__9984.editable_QMARK_))
{if((function (){var G__9985__9986 = o;
if(G__9985__9986)
{if((function (){var or__3824__auto____9987 = (G__9985__9986.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9987)
{return or__3824__auto____9987;
} else
{return G__9985__9986.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9985__9986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9985__9986);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9985__9986);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9988 = cljs.core.seq.call(null,o);
var tcoll__9989 = tcoll;
while(true){
var temp__3971__auto____9990 = cljs.core.first.call(null,es__9988);
if(cljs.core.truth_(temp__3971__auto____9990))
{var e__9991 = temp__3971__auto____9990;
{
var G__9997 = cljs.core.next.call(null,es__9988);
var G__9998 = tcoll__9989.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9989,cljs.core.key.call(null,e__9991),cljs.core.val.call(null,e__9991));
es__9988 = G__9997;
tcoll__9989 = G__9998;
continue;
}
} else
{return tcoll__9989;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9992 = this;
if(cljs.core.truth_(this__9992.editable_QMARK_))
{this__9992.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9992.len,2),this__9992.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9993 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9994 = this;
if(cljs.core.truth_(this__9994.editable_QMARK_))
{var idx__9995 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9995 === -1))
{return not_found;
} else
{return (this__9994.arr[(idx__9995 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9996 = this;
if(cljs.core.truth_(this__9996.editable_QMARK_))
{return cljs.core.quot.call(null,this__9996.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__10001 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__10002 = 0;
while(true){
if((i__10002 < len))
{{
var G__10003 = cljs.core.assoc_BANG_.call(null,out__10001,(arr[i__10002]),(arr[(i__10002 + 1)]));
var G__10004 = (i__10002 + 2);
out__10001 = G__10003;
i__10002 = G__10004;
continue;
}
} else
{return out__10001;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__3457__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__10009__10010 = arr.slice();
(G__10009__10010[i] = a);
return G__10009__10010;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__10011__10012 = arr.slice();
(G__10011__10012[i] = a);
(G__10011__10012[j] = b);
return G__10011__10012;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__10014 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__10014,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__10014,(2 * i),(new_arr__10014.length - (2 * i)));
return new_arr__10014;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__10017 = inode.ensure_editable(edit);
(editable__10017.arr[i] = a);
return editable__10017;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__10018 = inode.ensure_editable(edit);
(editable__10018.arr[i] = a);
(editable__10018.arr[j] = b);
return editable__10018;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__10025 = arr.length;
var i__10026 = 0;
var init__10027 = init;
while(true){
if((i__10026 < len__10025))
{var init__10030 = (function (){var k__10028 = (arr[i__10026]);
if(!((k__10028 == null)))
{return f.call(null,init__10027,k__10028,(arr[(i__10026 + 1)]));
} else
{var node__10029 = (arr[(i__10026 + 1)]);
if(!((node__10029 == null)))
{return node__10029.kv_reduce(f,init__10027);
} else
{return init__10027;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10030))
{return cljs.core.deref.call(null,init__10030);
} else
{{
var G__10031 = (i__10026 + 2);
var G__10032 = init__10030;
i__10026 = G__10031;
init__10027 = G__10032;
continue;
}
}
} else
{return init__10027;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__10033 = this;
var inode__10034 = this;
if((this__10033.bitmap === bit))
{return null;
} else
{var editable__10035 = inode__10034.ensure_editable(e);
var earr__10036 = editable__10035.arr;
var len__10037 = earr__10036.length;
editable__10035.bitmap = (bit ^ editable__10035.bitmap);
cljs.core.array_copy.call(null,earr__10036,(2 * (i + 1)),earr__10036,(2 * i),(len__10037 - (2 * (i + 1))));
(earr__10036[(len__10037 - 2)] = null);
(earr__10036[(len__10037 - 1)] = null);
return editable__10035;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10038 = this;
var inode__10039 = this;
var bit__10040 = (1 << ((hash >>> shift) & 0x01f));
var idx__10041 = cljs.core.bitmap_indexed_node_index.call(null,this__10038.bitmap,bit__10040);
if(((this__10038.bitmap & bit__10040) === 0))
{var n__10042 = cljs.core.bit_count.call(null,this__10038.bitmap);
if(((2 * n__10042) < this__10038.arr.length))
{var editable__10043 = inode__10039.ensure_editable(edit);
var earr__10044 = editable__10043.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__10044,(2 * idx__10041),earr__10044,(2 * (idx__10041 + 1)),(2 * (n__10042 - idx__10041)));
(earr__10044[(2 * idx__10041)] = key);
(earr__10044[((2 * idx__10041) + 1)] = val);
editable__10043.bitmap = (editable__10043.bitmap | bit__10040);
return editable__10043;
} else
{if((n__10042 >= 16))
{var nodes__10045 = cljs.core.make_array.call(null,32);
var jdx__10046 = ((hash >>> shift) & 0x01f);
(nodes__10045[jdx__10046] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10047 = 0;
var j__10048 = 0;
while(true){
if((i__10047 < 32))
{if((((this__10038.bitmap >>> i__10047) & 1) === 0))
{{
var G__10101 = (i__10047 + 1);
var G__10102 = j__10048;
i__10047 = G__10101;
j__10048 = G__10102;
continue;
}
} else
{(nodes__10045[i__10047] = ((!(((this__10038.arr[j__10048]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__10038.arr[j__10048])),(this__10038.arr[j__10048]),(this__10038.arr[(j__10048 + 1)]),added_leaf_QMARK_):(this__10038.arr[(j__10048 + 1)])));
{
var G__10103 = (i__10047 + 1);
var G__10104 = (j__10048 + 2);
i__10047 = G__10103;
j__10048 = G__10104;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__10042 + 1),nodes__10045));
} else
{if("\uFDD0'else")
{var new_arr__10049 = cljs.core.make_array.call(null,(2 * (n__10042 + 4)));
cljs.core.array_copy.call(null,this__10038.arr,0,new_arr__10049,0,(2 * idx__10041));
(new_arr__10049[(2 * idx__10041)] = key);
(new_arr__10049[((2 * idx__10041) + 1)] = val);
cljs.core.array_copy.call(null,this__10038.arr,(2 * idx__10041),new_arr__10049,(2 * (idx__10041 + 1)),(2 * (n__10042 - idx__10041)));
added_leaf_QMARK_.val = true;
var editable__10050 = inode__10039.ensure_editable(edit);
editable__10050.arr = new_arr__10049;
editable__10050.bitmap = (editable__10050.bitmap | bit__10040);
return editable__10050;
} else
{return null;
}
}
}
} else
{var key_or_nil__10051 = (this__10038.arr[(2 * idx__10041)]);
var val_or_node__10052 = (this__10038.arr[((2 * idx__10041) + 1)]);
if((key_or_nil__10051 == null))
{var n__10053 = val_or_node__10052.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10053 === val_or_node__10052))
{return inode__10039;
} else
{return cljs.core.edit_and_set.call(null,inode__10039,edit,((2 * idx__10041) + 1),n__10053);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10051))
{if((val === val_or_node__10052))
{return inode__10039;
} else
{return cljs.core.edit_and_set.call(null,inode__10039,edit,((2 * idx__10041) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__10039,edit,(2 * idx__10041),null,((2 * idx__10041) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__10051,val_or_node__10052,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__10054 = this;
var inode__10055 = this;
return cljs.core.create_inode_seq.call(null,this__10054.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10056 = this;
var inode__10057 = this;
var bit__10058 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10056.bitmap & bit__10058) === 0))
{return inode__10057;
} else
{var idx__10059 = cljs.core.bitmap_indexed_node_index.call(null,this__10056.bitmap,bit__10058);
var key_or_nil__10060 = (this__10056.arr[(2 * idx__10059)]);
var val_or_node__10061 = (this__10056.arr[((2 * idx__10059) + 1)]);
if((key_or_nil__10060 == null))
{var n__10062 = val_or_node__10061.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10062 === val_or_node__10061))
{return inode__10057;
} else
{if(!((n__10062 == null)))
{return cljs.core.edit_and_set.call(null,inode__10057,edit,((2 * idx__10059) + 1),n__10062);
} else
{if((this__10056.bitmap === bit__10058))
{return null;
} else
{if("\uFDD0'else")
{return inode__10057.edit_and_remove_pair(edit,bit__10058,idx__10059);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10060))
{(removed_leaf_QMARK_[0] = true);
return inode__10057.edit_and_remove_pair(edit,bit__10058,idx__10059);
} else
{if("\uFDD0'else")
{return inode__10057;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__10063 = this;
var inode__10064 = this;
if((e === this__10063.edit))
{return inode__10064;
} else
{var n__10065 = cljs.core.bit_count.call(null,this__10063.bitmap);
var new_arr__10066 = cljs.core.make_array.call(null,(((n__10065 < 0))?4:(2 * (n__10065 + 1))));
cljs.core.array_copy.call(null,this__10063.arr,0,new_arr__10066,0,(2 * n__10065));
return (new cljs.core.BitmapIndexedNode(e,this__10063.bitmap,new_arr__10066));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__10067 = this;
var inode__10068 = this;
return cljs.core.inode_kv_reduce.call(null,this__10067.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10069 = this;
var inode__10070 = this;
var bit__10071 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10069.bitmap & bit__10071) === 0))
{return not_found;
} else
{var idx__10072 = cljs.core.bitmap_indexed_node_index.call(null,this__10069.bitmap,bit__10071);
var key_or_nil__10073 = (this__10069.arr[(2 * idx__10072)]);
var val_or_node__10074 = (this__10069.arr[((2 * idx__10072) + 1)]);
if((key_or_nil__10073 == null))
{return val_or_node__10074.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10073))
{return cljs.core.PersistentVector.fromArray([key_or_nil__10073,val_or_node__10074], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__10075 = this;
var inode__10076 = this;
var bit__10077 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10075.bitmap & bit__10077) === 0))
{return inode__10076;
} else
{var idx__10078 = cljs.core.bitmap_indexed_node_index.call(null,this__10075.bitmap,bit__10077);
var key_or_nil__10079 = (this__10075.arr[(2 * idx__10078)]);
var val_or_node__10080 = (this__10075.arr[((2 * idx__10078) + 1)]);
if((key_or_nil__10079 == null))
{var n__10081 = val_or_node__10080.inode_without((shift + 5),hash,key);
if((n__10081 === val_or_node__10080))
{return inode__10076;
} else
{if(!((n__10081 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__10075.bitmap,cljs.core.clone_and_set.call(null,this__10075.arr,((2 * idx__10078) + 1),n__10081)));
} else
{if((this__10075.bitmap === bit__10077))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__10075.bitmap ^ bit__10077),cljs.core.remove_pair.call(null,this__10075.arr,idx__10078)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10079))
{return (new cljs.core.BitmapIndexedNode(null,(this__10075.bitmap ^ bit__10077),cljs.core.remove_pair.call(null,this__10075.arr,idx__10078)));
} else
{if("\uFDD0'else")
{return inode__10076;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10082 = this;
var inode__10083 = this;
var bit__10084 = (1 << ((hash >>> shift) & 0x01f));
var idx__10085 = cljs.core.bitmap_indexed_node_index.call(null,this__10082.bitmap,bit__10084);
if(((this__10082.bitmap & bit__10084) === 0))
{var n__10086 = cljs.core.bit_count.call(null,this__10082.bitmap);
if((n__10086 >= 16))
{var nodes__10087 = cljs.core.make_array.call(null,32);
var jdx__10088 = ((hash >>> shift) & 0x01f);
(nodes__10087[jdx__10088] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__10089 = 0;
var j__10090 = 0;
while(true){
if((i__10089 < 32))
{if((((this__10082.bitmap >>> i__10089) & 1) === 0))
{{
var G__10105 = (i__10089 + 1);
var G__10106 = j__10090;
i__10089 = G__10105;
j__10090 = G__10106;
continue;
}
} else
{(nodes__10087[i__10089] = ((!(((this__10082.arr[j__10090]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__10082.arr[j__10090])),(this__10082.arr[j__10090]),(this__10082.arr[(j__10090 + 1)]),added_leaf_QMARK_):(this__10082.arr[(j__10090 + 1)])));
{
var G__10107 = (i__10089 + 1);
var G__10108 = (j__10090 + 2);
i__10089 = G__10107;
j__10090 = G__10108;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__10086 + 1),nodes__10087));
} else
{var new_arr__10091 = cljs.core.make_array.call(null,(2 * (n__10086 + 1)));
cljs.core.array_copy.call(null,this__10082.arr,0,new_arr__10091,0,(2 * idx__10085));
(new_arr__10091[(2 * idx__10085)] = key);
(new_arr__10091[((2 * idx__10085) + 1)] = val);
cljs.core.array_copy.call(null,this__10082.arr,(2 * idx__10085),new_arr__10091,(2 * (idx__10085 + 1)),(2 * (n__10086 - idx__10085)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__10082.bitmap | bit__10084),new_arr__10091));
}
} else
{var key_or_nil__10092 = (this__10082.arr[(2 * idx__10085)]);
var val_or_node__10093 = (this__10082.arr[((2 * idx__10085) + 1)]);
if((key_or_nil__10092 == null))
{var n__10094 = val_or_node__10093.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10094 === val_or_node__10093))
{return inode__10083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10082.bitmap,cljs.core.clone_and_set.call(null,this__10082.arr,((2 * idx__10085) + 1),n__10094)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10092))
{if((val === val_or_node__10093))
{return inode__10083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__10082.bitmap,cljs.core.clone_and_set.call(null,this__10082.arr,((2 * idx__10085) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__10082.bitmap,cljs.core.clone_and_set.call(null,this__10082.arr,(2 * idx__10085),null,((2 * idx__10085) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__10092,val_or_node__10093,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10095 = this;
var inode__10096 = this;
var bit__10097 = (1 << ((hash >>> shift) & 0x01f));
if(((this__10095.bitmap & bit__10097) === 0))
{return not_found;
} else
{var idx__10098 = cljs.core.bitmap_indexed_node_index.call(null,this__10095.bitmap,bit__10097);
var key_or_nil__10099 = (this__10095.arr[(2 * idx__10098)]);
var val_or_node__10100 = (this__10095.arr[((2 * idx__10098) + 1)]);
if((key_or_nil__10099 == null))
{return val_or_node__10100.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__10099))
{return val_or_node__10100;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10116 = array_node.arr;
var len__10117 = (2 * (array_node.cnt - 1));
var new_arr__10118 = cljs.core.make_array.call(null,len__10117);
var i__10119 = 0;
var j__10120 = 1;
var bitmap__10121 = 0;
while(true){
if((i__10119 < len__10117))
{if((function (){var and__3822__auto____10122 = !((i__10119 === idx));
if(and__3822__auto____10122)
{return !(((arr__10116[i__10119]) == null));
} else
{return and__3822__auto____10122;
}
})())
{(new_arr__10118[j__10120] = (arr__10116[i__10119]));
{
var G__10123 = (i__10119 + 1);
var G__10124 = (j__10120 + 2);
var G__10125 = (bitmap__10121 | (1 << i__10119));
i__10119 = G__10123;
j__10120 = G__10124;
bitmap__10121 = G__10125;
continue;
}
} else
{{
var G__10126 = (i__10119 + 1);
var G__10127 = j__10120;
var G__10128 = bitmap__10121;
i__10119 = G__10126;
j__10120 = G__10127;
bitmap__10121 = G__10128;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10121,new_arr__10118));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10129 = this;
var inode__10130 = this;
var idx__10131 = ((hash >>> shift) & 0x01f);
var node__10132 = (this__10129.arr[idx__10131]);
if((node__10132 == null))
{var editable__10133 = cljs.core.edit_and_set.call(null,inode__10130,edit,idx__10131,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10133.cnt = (editable__10133.cnt + 1);
return editable__10133;
} else
{var n__10134 = node__10132.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10134 === node__10132))
{return inode__10130;
} else
{return cljs.core.edit_and_set.call(null,inode__10130,edit,idx__10131,n__10134);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10135 = this;
var inode__10136 = this;
return cljs.core.create_array_node_seq.call(null,this__10135.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10137 = this;
var inode__10138 = this;
var idx__10139 = ((hash >>> shift) & 0x01f);
var node__10140 = (this__10137.arr[idx__10139]);
if((node__10140 == null))
{return inode__10138;
} else
{var n__10141 = node__10140.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10141 === node__10140))
{return inode__10138;
} else
{if((n__10141 == null))
{if((this__10137.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10138,edit,idx__10139);
} else
{var editable__10142 = cljs.core.edit_and_set.call(null,inode__10138,edit,idx__10139,n__10141);
editable__10142.cnt = (editable__10142.cnt - 1);
return editable__10142;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10138,edit,idx__10139,n__10141);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10143 = this;
var inode__10144 = this;
if((e === this__10143.edit))
{return inode__10144;
} else
{return (new cljs.core.ArrayNode(e,this__10143.cnt,this__10143.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10145 = this;
var inode__10146 = this;
var len__10147 = this__10145.arr.length;
var i__10148 = 0;
var init__10149 = init;
while(true){
if((i__10148 < len__10147))
{var node__10150 = (this__10145.arr[i__10148]);
if(!((node__10150 == null)))
{var init__10151 = node__10150.kv_reduce(f,init__10149);
if(cljs.core.reduced_QMARK_.call(null,init__10151))
{return cljs.core.deref.call(null,init__10151);
} else
{{
var G__10170 = (i__10148 + 1);
var G__10171 = init__10151;
i__10148 = G__10170;
init__10149 = G__10171;
continue;
}
}
} else
{return null;
}
} else
{return init__10149;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10152 = this;
var inode__10153 = this;
var idx__10154 = ((hash >>> shift) & 0x01f);
var node__10155 = (this__10152.arr[idx__10154]);
if(!((node__10155 == null)))
{return node__10155.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10156 = this;
var inode__10157 = this;
var idx__10158 = ((hash >>> shift) & 0x01f);
var node__10159 = (this__10156.arr[idx__10158]);
if(!((node__10159 == null)))
{var n__10160 = node__10159.inode_without((shift + 5),hash,key);
if((n__10160 === node__10159))
{return inode__10157;
} else
{if((n__10160 == null))
{if((this__10156.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10157,null,idx__10158);
} else
{return (new cljs.core.ArrayNode(null,(this__10156.cnt - 1),cljs.core.clone_and_set.call(null,this__10156.arr,idx__10158,n__10160)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10156.cnt,cljs.core.clone_and_set.call(null,this__10156.arr,idx__10158,n__10160)));
} else
{return null;
}
}
}
} else
{return inode__10157;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10161 = this;
var inode__10162 = this;
var idx__10163 = ((hash >>> shift) & 0x01f);
var node__10164 = (this__10161.arr[idx__10163]);
if((node__10164 == null))
{return (new cljs.core.ArrayNode(null,(this__10161.cnt + 1),cljs.core.clone_and_set.call(null,this__10161.arr,idx__10163,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10165 = node__10164.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10165 === node__10164))
{return inode__10162;
} else
{return (new cljs.core.ArrayNode(null,this__10161.cnt,cljs.core.clone_and_set.call(null,this__10161.arr,idx__10163,n__10165)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10166 = this;
var inode__10167 = this;
var idx__10168 = ((hash >>> shift) & 0x01f);
var node__10169 = (this__10166.arr[idx__10168]);
if(!((node__10169 == null)))
{return node__10169.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10174 = (2 * cnt);
var i__10175 = 0;
while(true){
if((i__10175 < lim__10174))
{if(cljs.core.key_test.call(null,key,(arr[i__10175])))
{return i__10175;
} else
{{
var G__10176 = (i__10175 + 2);
i__10175 = G__10176;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10177 = this;
var inode__10178 = this;
if((hash === this__10177.collision_hash))
{var idx__10179 = cljs.core.hash_collision_node_find_index.call(null,this__10177.arr,this__10177.cnt,key);
if((idx__10179 === -1))
{if((this__10177.arr.length > (2 * this__10177.cnt)))
{var editable__10180 = cljs.core.edit_and_set.call(null,inode__10178,edit,(2 * this__10177.cnt),key,((2 * this__10177.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10180.cnt = (editable__10180.cnt + 1);
return editable__10180;
} else
{var len__10181 = this__10177.arr.length;
var new_arr__10182 = cljs.core.make_array.call(null,(len__10181 + 2));
cljs.core.array_copy.call(null,this__10177.arr,0,new_arr__10182,0,len__10181);
(new_arr__10182[len__10181] = key);
(new_arr__10182[(len__10181 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10178.ensure_editable_array(edit,(this__10177.cnt + 1),new_arr__10182);
}
} else
{if(((this__10177.arr[(idx__10179 + 1)]) === val))
{return inode__10178;
} else
{return cljs.core.edit_and_set.call(null,inode__10178,edit,(idx__10179 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10177.collision_hash >>> shift) & 0x01f)),[null,inode__10178,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10183 = this;
var inode__10184 = this;
return cljs.core.create_inode_seq.call(null,this__10183.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10185 = this;
var inode__10186 = this;
var idx__10187 = cljs.core.hash_collision_node_find_index.call(null,this__10185.arr,this__10185.cnt,key);
if((idx__10187 === -1))
{return inode__10186;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10185.cnt === 1))
{return null;
} else
{var editable__10188 = inode__10186.ensure_editable(edit);
var earr__10189 = editable__10188.arr;
(earr__10189[idx__10187] = (earr__10189[((2 * this__10185.cnt) - 2)]));
(earr__10189[(idx__10187 + 1)] = (earr__10189[((2 * this__10185.cnt) - 1)]));
(earr__10189[((2 * this__10185.cnt) - 1)] = null);
(earr__10189[((2 * this__10185.cnt) - 2)] = null);
editable__10188.cnt = (editable__10188.cnt - 1);
return editable__10188;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10190 = this;
var inode__10191 = this;
if((e === this__10190.edit))
{return inode__10191;
} else
{var new_arr__10192 = cljs.core.make_array.call(null,(2 * (this__10190.cnt + 1)));
cljs.core.array_copy.call(null,this__10190.arr,0,new_arr__10192,0,(2 * this__10190.cnt));
return (new cljs.core.HashCollisionNode(e,this__10190.collision_hash,this__10190.cnt,new_arr__10192));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10193 = this;
var inode__10194 = this;
return cljs.core.inode_kv_reduce.call(null,this__10193.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10195 = this;
var inode__10196 = this;
var idx__10197 = cljs.core.hash_collision_node_find_index.call(null,this__10195.arr,this__10195.cnt,key);
if((idx__10197 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10195.arr[idx__10197])))
{return cljs.core.PersistentVector.fromArray([(this__10195.arr[idx__10197]),(this__10195.arr[(idx__10197 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10198 = this;
var inode__10199 = this;
var idx__10200 = cljs.core.hash_collision_node_find_index.call(null,this__10198.arr,this__10198.cnt,key);
if((idx__10200 === -1))
{return inode__10199;
} else
{if((this__10198.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10198.collision_hash,(this__10198.cnt - 1),cljs.core.remove_pair.call(null,this__10198.arr,cljs.core.quot.call(null,idx__10200,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10201 = this;
var inode__10202 = this;
if((hash === this__10201.collision_hash))
{var idx__10203 = cljs.core.hash_collision_node_find_index.call(null,this__10201.arr,this__10201.cnt,key);
if((idx__10203 === -1))
{var len__10204 = this__10201.arr.length;
var new_arr__10205 = cljs.core.make_array.call(null,(len__10204 + 2));
cljs.core.array_copy.call(null,this__10201.arr,0,new_arr__10205,0,len__10204);
(new_arr__10205[len__10204] = key);
(new_arr__10205[(len__10204 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10201.collision_hash,(this__10201.cnt + 1),new_arr__10205));
} else
{if(cljs.core._EQ_.call(null,(this__10201.arr[idx__10203]),val))
{return inode__10202;
} else
{return (new cljs.core.HashCollisionNode(null,this__10201.collision_hash,this__10201.cnt,cljs.core.clone_and_set.call(null,this__10201.arr,(idx__10203 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10201.collision_hash >>> shift) & 0x01f)),[null,inode__10202])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10206 = this;
var inode__10207 = this;
var idx__10208 = cljs.core.hash_collision_node_find_index.call(null,this__10206.arr,this__10206.cnt,key);
if((idx__10208 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10206.arr[idx__10208])))
{return (this__10206.arr[(idx__10208 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10209 = this;
var inode__10210 = this;
if((e === this__10209.edit))
{this__10209.arr = array;
this__10209.cnt = count;
return inode__10210;
} else
{return (new cljs.core.HashCollisionNode(this__10209.edit,this__10209.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10215 = cljs.core.hash.call(null,key1);
if((key1hash__10215 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10215,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10216 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10215,key1,val1,added_leaf_QMARK___10216).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10216);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10217 = cljs.core.hash.call(null,key1);
if((key1hash__10217 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10217,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10218 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10217,key1,val1,added_leaf_QMARK___10218).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10218);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10219 = this;
var h__3339__auto____10220 = this__10219.__hash;
if(!((h__3339__auto____10220 == null)))
{return h__3339__auto____10220;
} else
{var h__3339__auto____10221 = cljs.core.hash_coll.call(null,coll);
this__10219.__hash = h__3339__auto____10221;
return h__3339__auto____10221;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10222 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10223 = this;
var this__10224 = this;
return cljs.core.pr_str.call(null,this__10224);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10225 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10226 = this;
if((this__10226.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10226.nodes[this__10226.i]),(this__10226.nodes[(this__10226.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10226.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10227 = this;
if((this__10227.s == null))
{return cljs.core.create_inode_seq.call(null,this__10227.nodes,(this__10227.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10227.nodes,this__10227.i,cljs.core.next.call(null,this__10227.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10228 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10229 = this;
return (new cljs.core.NodeSeq(meta,this__10229.nodes,this__10229.i,this__10229.s,this__10229.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10230 = this;
return this__10230.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10231 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10231.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10238 = nodes.length;
var j__10239 = i;
while(true){
if((j__10239 < len__10238))
{if(!(((nodes[j__10239]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10239,null,null));
} else
{var temp__3971__auto____10240 = (nodes[(j__10239 + 1)]);
if(cljs.core.truth_(temp__3971__auto____10240))
{var node__10241 = temp__3971__auto____10240;
var temp__3971__auto____10242 = node__10241.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10242))
{var node_seq__10243 = temp__3971__auto____10242;
return (new cljs.core.NodeSeq(null,nodes,(j__10239 + 2),node_seq__10243,null));
} else
{{
var G__10244 = (j__10239 + 2);
j__10239 = G__10244;
continue;
}
}
} else
{{
var G__10245 = (j__10239 + 2);
j__10239 = G__10245;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10246 = this;
var h__3339__auto____10247 = this__10246.__hash;
if(!((h__3339__auto____10247 == null)))
{return h__3339__auto____10247;
} else
{var h__3339__auto____10248 = cljs.core.hash_coll.call(null,coll);
this__10246.__hash = h__3339__auto____10248;
return h__3339__auto____10248;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10249 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10250 = this;
var this__10251 = this;
return cljs.core.pr_str.call(null,this__10251);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10252 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10253 = this;
return cljs.core.first.call(null,this__10253.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10254 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10254.nodes,this__10254.i,cljs.core.next.call(null,this__10254.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10256 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10256.nodes,this__10256.i,this__10256.s,this__10256.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10257 = this;
return this__10257.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10258.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10265 = nodes.length;
var j__10266 = i;
while(true){
if((j__10266 < len__10265))
{var temp__3971__auto____10267 = (nodes[j__10266]);
if(cljs.core.truth_(temp__3971__auto____10267))
{var nj__10268 = temp__3971__auto____10267;
var temp__3971__auto____10269 = nj__10268.inode_seq();
if(cljs.core.truth_(temp__3971__auto____10269))
{var ns__10270 = temp__3971__auto____10269;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10266 + 1),ns__10270,null));
} else
{{
var G__10271 = (j__10266 + 1);
j__10266 = G__10271;
continue;
}
}
} else
{{
var G__10272 = (j__10266 + 1);
j__10266 = G__10272;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10275 = this;
return (new cljs.core.TransientHashMap({},this__10275.root,this__10275.cnt,this__10275.has_nil_QMARK_,this__10275.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10276 = this;
var h__3339__auto____10277 = this__10276.__hash;
if(!((h__3339__auto____10277 == null)))
{return h__3339__auto____10277;
} else
{var h__3339__auto____10278 = cljs.core.hash_imap.call(null,coll);
this__10276.__hash = h__3339__auto____10278;
return h__3339__auto____10278;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10279 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10280 = this;
if((k == null))
{if(this__10280.has_nil_QMARK_)
{return this__10280.nil_val;
} else
{return not_found;
}
} else
{if((this__10280.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10280.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10281 = this;
if((k == null))
{if((function (){var and__3822__auto____10282 = this__10281.has_nil_QMARK_;
if(and__3822__auto____10282)
{return (v === this__10281.nil_val);
} else
{return and__3822__auto____10282;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10281.meta,((this__10281.has_nil_QMARK_)?this__10281.cnt:(this__10281.cnt + 1)),this__10281.root,true,v,null));
}
} else
{var added_leaf_QMARK___10283 = (new cljs.core.Box(false));
var new_root__10284 = (((this__10281.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10281.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10283);
if((new_root__10284 === this__10281.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10281.meta,((added_leaf_QMARK___10283.val)?(this__10281.cnt + 1):this__10281.cnt),new_root__10284,this__10281.has_nil_QMARK_,this__10281.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10285 = this;
if((k == null))
{return this__10285.has_nil_QMARK_;
} else
{if((this__10285.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10285.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10308 = null;
var G__10308__2 = (function (this_sym10286,k){
var this__10288 = this;
var this_sym10286__10289 = this;
var coll__10290 = this_sym10286__10289;
return coll__10290.cljs$core$ILookup$_lookup$arity$2(coll__10290,k);
});
var G__10308__3 = (function (this_sym10287,k,not_found){
var this__10288 = this;
var this_sym10287__10291 = this;
var coll__10292 = this_sym10287__10291;
return coll__10292.cljs$core$ILookup$_lookup$arity$3(coll__10292,k,not_found);
});
G__10308 = function(this_sym10287,k,not_found){
switch(arguments.length){
case 2:
return G__10308__2.call(this,this_sym10287,k);
case 3:
return G__10308__3.call(this,this_sym10287,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10308;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10273,args10274){
var this__10293 = this;
return this_sym10273.call.apply(this_sym10273,[this_sym10273].concat(args10274.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10294 = this;
var init__10295 = ((this__10294.has_nil_QMARK_)?f.call(null,init,null,this__10294.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10295))
{return cljs.core.deref.call(null,init__10295);
} else
{if(!((this__10294.root == null)))
{return this__10294.root.kv_reduce(f,init__10295);
} else
{if("\uFDD0'else")
{return init__10295;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10296 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10297 = this;
var this__10298 = this;
return cljs.core.pr_str.call(null,this__10298);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10299 = this;
if((this__10299.cnt > 0))
{var s__10300 = ((!((this__10299.root == null)))?this__10299.root.inode_seq():null);
if(this__10299.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10299.nil_val], true),s__10300);
} else
{return s__10300;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10301 = this;
return this__10301.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10302 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10303 = this;
return (new cljs.core.PersistentHashMap(meta,this__10303.cnt,this__10303.root,this__10303.has_nil_QMARK_,this__10303.nil_val,this__10303.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10304 = this;
return this__10304.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10305 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10305.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10306 = this;
if((k == null))
{if(this__10306.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10306.meta,(this__10306.cnt - 1),this__10306.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10306.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10307 = this__10306.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10307 === this__10306.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10306.meta,(this__10306.cnt - 1),new_root__10307,this__10306.has_nil_QMARK_,this__10306.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10309 = ks.length;
var i__10310 = 0;
var out__10311 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10310 < len__10309))
{{
var G__10312 = (i__10310 + 1);
var G__10313 = cljs.core.assoc_BANG_.call(null,out__10311,(ks[i__10310]),(vs[i__10310]));
i__10310 = G__10312;
out__10311 = G__10313;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10311);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10314 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10315 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10316 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10317 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10318 = this;
if((k == null))
{if(this__10318.has_nil_QMARK_)
{return this__10318.nil_val;
} else
{return null;
}
} else
{if((this__10318.root == null))
{return null;
} else
{return this__10318.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10319 = this;
if((k == null))
{if(this__10319.has_nil_QMARK_)
{return this__10319.nil_val;
} else
{return not_found;
}
} else
{if((this__10319.root == null))
{return not_found;
} else
{return this__10319.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10320 = this;
if(this__10320.edit)
{return this__10320.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10321 = this;
var tcoll__10322 = this;
if(this__10321.edit)
{if((function (){var G__10323__10324 = o;
if(G__10323__10324)
{if((function (){var or__3824__auto____10325 = (G__10323__10324.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____10325)
{return or__3824__auto____10325;
} else
{return G__10323__10324.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10323__10324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10323__10324);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10323__10324);
}
})())
{return tcoll__10322.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10326 = cljs.core.seq.call(null,o);
var tcoll__10327 = tcoll__10322;
while(true){
var temp__3971__auto____10328 = cljs.core.first.call(null,es__10326);
if(cljs.core.truth_(temp__3971__auto____10328))
{var e__10329 = temp__3971__auto____10328;
{
var G__10340 = cljs.core.next.call(null,es__10326);
var G__10341 = tcoll__10327.assoc_BANG_(cljs.core.key.call(null,e__10329),cljs.core.val.call(null,e__10329));
es__10326 = G__10340;
tcoll__10327 = G__10341;
continue;
}
} else
{return tcoll__10327;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10330 = this;
var tcoll__10331 = this;
if(this__10330.edit)
{if((k == null))
{if((this__10330.nil_val === v))
{} else
{this__10330.nil_val = v;
}
if(this__10330.has_nil_QMARK_)
{} else
{this__10330.count = (this__10330.count + 1);
this__10330.has_nil_QMARK_ = true;
}
return tcoll__10331;
} else
{var added_leaf_QMARK___10332 = (new cljs.core.Box(false));
var node__10333 = (((this__10330.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10330.root).inode_assoc_BANG_(this__10330.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10332);
if((node__10333 === this__10330.root))
{} else
{this__10330.root = node__10333;
}
if(added_leaf_QMARK___10332.val)
{this__10330.count = (this__10330.count + 1);
} else
{}
return tcoll__10331;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10334 = this;
var tcoll__10335 = this;
if(this__10334.edit)
{if((k == null))
{if(this__10334.has_nil_QMARK_)
{this__10334.has_nil_QMARK_ = false;
this__10334.nil_val = null;
this__10334.count = (this__10334.count - 1);
return tcoll__10335;
} else
{return tcoll__10335;
}
} else
{if((this__10334.root == null))
{return tcoll__10335;
} else
{var removed_leaf_QMARK___10336 = (new cljs.core.Box(false));
var node__10337 = this__10334.root.inode_without_BANG_(this__10334.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10336);
if((node__10337 === this__10334.root))
{} else
{this__10334.root = node__10337;
}
if(cljs.core.truth_((removed_leaf_QMARK___10336[0])))
{this__10334.count = (this__10334.count - 1);
} else
{}
return tcoll__10335;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10338 = this;
var tcoll__10339 = this;
if(this__10338.edit)
{this__10338.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10338.count,this__10338.root,this__10338.has_nil_QMARK_,this__10338.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10344 = node;
var stack__10345 = stack;
while(true){
if(!((t__10344 == null)))
{{
var G__10346 = ((ascending_QMARK_)?t__10344.left:t__10344.right);
var G__10347 = cljs.core.conj.call(null,stack__10345,t__10344);
t__10344 = G__10346;
stack__10345 = G__10347;
continue;
}
} else
{return stack__10345;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10348 = this;
var h__3339__auto____10349 = this__10348.__hash;
if(!((h__3339__auto____10349 == null)))
{return h__3339__auto____10349;
} else
{var h__3339__auto____10350 = cljs.core.hash_coll.call(null,coll);
this__10348.__hash = h__3339__auto____10350;
return h__3339__auto____10350;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10351 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10352 = this;
var this__10353 = this;
return cljs.core.pr_str.call(null,this__10353);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10354 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10355 = this;
if((this__10355.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10355.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10356 = this;
return cljs.core.peek.call(null,this__10356.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10357 = this;
var t__10358 = cljs.core.first.call(null,this__10357.stack);
var next_stack__10359 = cljs.core.tree_map_seq_push.call(null,((this__10357.ascending_QMARK_)?t__10358.right:t__10358.left),cljs.core.next.call(null,this__10357.stack),this__10357.ascending_QMARK_);
if(!((next_stack__10359 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10359,this__10357.ascending_QMARK_,(this__10357.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10361 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10361.stack,this__10361.ascending_QMARK_,this__10361.cnt,this__10361.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10362 = this;
return this__10362.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____10364 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____10364)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____10364;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____10366 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____10366)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____10366;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10370 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10370))
{return cljs.core.deref.call(null,init__10370);
} else
{var init__10371 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10370):init__10370);
if(cljs.core.reduced_QMARK_.call(null,init__10371))
{return cljs.core.deref.call(null,init__10371);
} else
{var init__10372 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10371):init__10371);
if(cljs.core.reduced_QMARK_.call(null,init__10372))
{return cljs.core.deref.call(null,init__10372);
} else
{return init__10372;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10375 = this;
var h__3339__auto____10376 = this__10375.__hash;
if(!((h__3339__auto____10376 == null)))
{return h__3339__auto____10376;
} else
{var h__3339__auto____10377 = cljs.core.hash_coll.call(null,coll);
this__10375.__hash = h__3339__auto____10377;
return h__3339__auto____10377;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10378 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10379 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10380 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10380.key,this__10380.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10428 = null;
var G__10428__2 = (function (this_sym10381,k){
var this__10383 = this;
var this_sym10381__10384 = this;
var node__10385 = this_sym10381__10384;
return node__10385.cljs$core$ILookup$_lookup$arity$2(node__10385,k);
});
var G__10428__3 = (function (this_sym10382,k,not_found){
var this__10383 = this;
var this_sym10382__10386 = this;
var node__10387 = this_sym10382__10386;
return node__10387.cljs$core$ILookup$_lookup$arity$3(node__10387,k,not_found);
});
G__10428 = function(this_sym10382,k,not_found){
switch(arguments.length){
case 2:
return G__10428__2.call(this,this_sym10382,k);
case 3:
return G__10428__3.call(this,this_sym10382,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10428;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10373,args10374){
var this__10388 = this;
return this_sym10373.call.apply(this_sym10373,[this_sym10373].concat(args10374.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10389 = this;
return cljs.core.PersistentVector.fromArray([this__10389.key,this__10389.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10390 = this;
return this__10390.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10391 = this;
return this__10391.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10392 = this;
var node__10393 = this;
return ins.balance_right(node__10393);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10394 = this;
var node__10395 = this;
return (new cljs.core.RedNode(this__10394.key,this__10394.val,this__10394.left,this__10394.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10396 = this;
var node__10397 = this;
return cljs.core.balance_right_del.call(null,this__10396.key,this__10396.val,this__10396.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10398 = this;
var node__10399 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10400 = this;
var node__10401 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10401,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10402 = this;
var node__10403 = this;
return cljs.core.balance_left_del.call(null,this__10402.key,this__10402.val,del,this__10402.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10404 = this;
var node__10405 = this;
return ins.balance_left(node__10405);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10406 = this;
var node__10407 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10407,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10429 = null;
var G__10429__0 = (function (){
var this__10408 = this;
var this__10410 = this;
return cljs.core.pr_str.call(null,this__10410);
});
G__10429 = function(){
switch(arguments.length){
case 0:
return G__10429__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10429;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10411 = this;
var node__10412 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10412,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10413 = this;
var node__10414 = this;
return node__10414;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10415 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10416 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10417 = this;
return cljs.core.list.call(null,this__10417.key,this__10417.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10418 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10419 = this;
return this__10419.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10420 = this;
return cljs.core.PersistentVector.fromArray([this__10420.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10421 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10421.key,this__10421.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10422 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10423 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10423.key,this__10423.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10424 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10425 = this;
if((n === 0))
{return this__10425.key;
} else
{if((n === 1))
{return this__10425.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10426 = this;
if((n === 0))
{return this__10426.key;
} else
{if((n === 1))
{return this__10426.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10427 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10432 = this;
var h__3339__auto____10433 = this__10432.__hash;
if(!((h__3339__auto____10433 == null)))
{return h__3339__auto____10433;
} else
{var h__3339__auto____10434 = cljs.core.hash_coll.call(null,coll);
this__10432.__hash = h__3339__auto____10434;
return h__3339__auto____10434;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10435 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10436 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10437 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10437.key,this__10437.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10485 = null;
var G__10485__2 = (function (this_sym10438,k){
var this__10440 = this;
var this_sym10438__10441 = this;
var node__10442 = this_sym10438__10441;
return node__10442.cljs$core$ILookup$_lookup$arity$2(node__10442,k);
});
var G__10485__3 = (function (this_sym10439,k,not_found){
var this__10440 = this;
var this_sym10439__10443 = this;
var node__10444 = this_sym10439__10443;
return node__10444.cljs$core$ILookup$_lookup$arity$3(node__10444,k,not_found);
});
G__10485 = function(this_sym10439,k,not_found){
switch(arguments.length){
case 2:
return G__10485__2.call(this,this_sym10439,k);
case 3:
return G__10485__3.call(this,this_sym10439,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10485;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10430,args10431){
var this__10445 = this;
return this_sym10430.call.apply(this_sym10430,[this_sym10430].concat(args10431.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10446 = this;
return cljs.core.PersistentVector.fromArray([this__10446.key,this__10446.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10447 = this;
return this__10447.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10448 = this;
return this__10448.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10449 = this;
var node__10450 = this;
return (new cljs.core.RedNode(this__10449.key,this__10449.val,this__10449.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10451 = this;
var node__10452 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10453 = this;
var node__10454 = this;
return (new cljs.core.RedNode(this__10453.key,this__10453.val,this__10453.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10455 = this;
var node__10456 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10457 = this;
var node__10458 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10458,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10459 = this;
var node__10460 = this;
return (new cljs.core.RedNode(this__10459.key,this__10459.val,del,this__10459.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10461 = this;
var node__10462 = this;
return (new cljs.core.RedNode(this__10461.key,this__10461.val,ins,this__10461.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10463 = this;
var node__10464 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10463.left))
{return (new cljs.core.RedNode(this__10463.key,this__10463.val,this__10463.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10463.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10463.right))
{return (new cljs.core.RedNode(this__10463.right.key,this__10463.right.val,(new cljs.core.BlackNode(this__10463.key,this__10463.val,this__10463.left,this__10463.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10463.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10464,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10486 = null;
var G__10486__0 = (function (){
var this__10465 = this;
var this__10467 = this;
return cljs.core.pr_str.call(null,this__10467);
});
G__10486 = function(){
switch(arguments.length){
case 0:
return G__10486__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10486;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10468 = this;
var node__10469 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10468.right))
{return (new cljs.core.RedNode(this__10468.key,this__10468.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10468.left,null)),this__10468.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10468.left))
{return (new cljs.core.RedNode(this__10468.left.key,this__10468.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10468.left.left,null)),(new cljs.core.BlackNode(this__10468.key,this__10468.val,this__10468.left.right,this__10468.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10469,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10470 = this;
var node__10471 = this;
return (new cljs.core.BlackNode(this__10470.key,this__10470.val,this__10470.left,this__10470.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10472 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10473 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10474 = this;
return cljs.core.list.call(null,this__10474.key,this__10474.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10475 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10476 = this;
return this__10476.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10477 = this;
return cljs.core.PersistentVector.fromArray([this__10477.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10478 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10478.key,this__10478.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10479 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10480 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10480.key,this__10480.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10481 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10482 = this;
if((n === 0))
{return this__10482.key;
} else
{if((n === 1))
{return this__10482.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10483 = this;
if((n === 0))
{return this__10483.key;
} else
{if((n === 1))
{return this__10483.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10484 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10490 = comp.call(null,k,tree.key);
if((c__10490 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10490 < 0))
{var ins__10491 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10491 == null)))
{return tree.add_left(ins__10491);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10492 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10492 == null)))
{return tree.add_right(ins__10492);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10495 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10495))
{return (new cljs.core.RedNode(app__10495.key,app__10495.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10495.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10495.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10495,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10496 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10496))
{return (new cljs.core.RedNode(app__10496.key,app__10496.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10496.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10496.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10496,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10502 = comp.call(null,k,tree.key);
if((c__10502 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10502 < 0))
{var del__10503 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10504 = !((del__10503 == null));
if(or__3824__auto____10504)
{return or__3824__auto____10504;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10503,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10503,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10505 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10506 = !((del__10505 == null));
if(or__3824__auto____10506)
{return or__3824__auto____10506;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10505);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10505,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10509 = tree.key;
var c__10510 = comp.call(null,k,tk__10509);
if((c__10510 === 0))
{return tree.replace(tk__10509,v,tree.left,tree.right);
} else
{if((c__10510 < 0))
{return tree.replace(tk__10509,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10509,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10513 = this;
var h__3339__auto____10514 = this__10513.__hash;
if(!((h__3339__auto____10514 == null)))
{return h__3339__auto____10514;
} else
{var h__3339__auto____10515 = cljs.core.hash_imap.call(null,coll);
this__10513.__hash = h__3339__auto____10515;
return h__3339__auto____10515;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10516 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10517 = this;
var n__10518 = coll.entry_at(k);
if(!((n__10518 == null)))
{return n__10518.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10519 = this;
var found__10520 = [null];
var t__10521 = cljs.core.tree_map_add.call(null,this__10519.comp,this__10519.tree,k,v,found__10520);
if((t__10521 == null))
{var found_node__10522 = cljs.core.nth.call(null,found__10520,0);
if(cljs.core._EQ_.call(null,v,found_node__10522.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10519.comp,cljs.core.tree_map_replace.call(null,this__10519.comp,this__10519.tree,k,v),this__10519.cnt,this__10519.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10519.comp,t__10521.blacken(),(this__10519.cnt + 1),this__10519.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10523 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10557 = null;
var G__10557__2 = (function (this_sym10524,k){
var this__10526 = this;
var this_sym10524__10527 = this;
var coll__10528 = this_sym10524__10527;
return coll__10528.cljs$core$ILookup$_lookup$arity$2(coll__10528,k);
});
var G__10557__3 = (function (this_sym10525,k,not_found){
var this__10526 = this;
var this_sym10525__10529 = this;
var coll__10530 = this_sym10525__10529;
return coll__10530.cljs$core$ILookup$_lookup$arity$3(coll__10530,k,not_found);
});
G__10557 = function(this_sym10525,k,not_found){
switch(arguments.length){
case 2:
return G__10557__2.call(this,this_sym10525,k);
case 3:
return G__10557__3.call(this,this_sym10525,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10557;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10511,args10512){
var this__10531 = this;
return this_sym10511.call.apply(this_sym10511,[this_sym10511].concat(args10512.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10532 = this;
if(!((this__10532.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10532.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10533 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10534 = this;
if((this__10534.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10534.tree,false,this__10534.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10535 = this;
var this__10536 = this;
return cljs.core.pr_str.call(null,this__10536);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10537 = this;
var coll__10538 = this;
var t__10539 = this__10537.tree;
while(true){
if(!((t__10539 == null)))
{var c__10540 = this__10537.comp.call(null,k,t__10539.key);
if((c__10540 === 0))
{return t__10539;
} else
{if((c__10540 < 0))
{{
var G__10558 = t__10539.left;
t__10539 = G__10558;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10559 = t__10539.right;
t__10539 = G__10559;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10541 = this;
if((this__10541.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10541.tree,ascending_QMARK_,this__10541.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10542 = this;
if((this__10542.cnt > 0))
{var stack__10543 = null;
var t__10544 = this__10542.tree;
while(true){
if(!((t__10544 == null)))
{var c__10545 = this__10542.comp.call(null,k,t__10544.key);
if((c__10545 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10543,t__10544),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10545 < 0))
{{
var G__10560 = cljs.core.conj.call(null,stack__10543,t__10544);
var G__10561 = t__10544.left;
stack__10543 = G__10560;
t__10544 = G__10561;
continue;
}
} else
{{
var G__10562 = stack__10543;
var G__10563 = t__10544.right;
stack__10543 = G__10562;
t__10544 = G__10563;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10545 > 0))
{{
var G__10564 = cljs.core.conj.call(null,stack__10543,t__10544);
var G__10565 = t__10544.right;
stack__10543 = G__10564;
t__10544 = G__10565;
continue;
}
} else
{{
var G__10566 = stack__10543;
var G__10567 = t__10544.left;
stack__10543 = G__10566;
t__10544 = G__10567;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10543 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10543,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10546 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10547 = this;
return this__10547.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10548 = this;
if((this__10548.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10548.tree,true,this__10548.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10549 = this;
return this__10549.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10550 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10551 = this;
return (new cljs.core.PersistentTreeMap(this__10551.comp,this__10551.tree,this__10551.cnt,meta,this__10551.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10552 = this;
return this__10552.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10553 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10553.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10554 = this;
var found__10555 = [null];
var t__10556 = cljs.core.tree_map_remove.call(null,this__10554.comp,this__10554.tree,k,found__10555);
if((t__10556 == null))
{if((cljs.core.nth.call(null,found__10555,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10554.comp,null,0,this__10554.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10554.comp,t__10556.blacken(),(this__10554.cnt - 1),this__10554.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10570 = cljs.core.seq.call(null,keyvals);
var out__10571 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10570)
{{
var G__10572 = cljs.core.nnext.call(null,in__10570);
var G__10573 = cljs.core.assoc_BANG_.call(null,out__10571,cljs.core.first.call(null,in__10570),cljs.core.second.call(null,in__10570));
in__10570 = G__10572;
out__10571 = G__10573;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10571);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10574){
var keyvals = cljs.core.seq(arglist__10574);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10575){
var keyvals = cljs.core.seq(arglist__10575);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10579 = [];
var obj__10580 = {};
var kvs__10581 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10581)
{ks__10579.push(cljs.core.first.call(null,kvs__10581));
(obj__10580[cljs.core.first.call(null,kvs__10581)] = cljs.core.second.call(null,kvs__10581));
{
var G__10582 = cljs.core.nnext.call(null,kvs__10581);
kvs__10581 = G__10582;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10579,obj__10580);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10583){
var keyvals = cljs.core.seq(arglist__10583);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10586 = cljs.core.seq.call(null,keyvals);
var out__10587 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10586)
{{
var G__10588 = cljs.core.nnext.call(null,in__10586);
var G__10589 = cljs.core.assoc.call(null,out__10587,cljs.core.first.call(null,in__10586),cljs.core.second.call(null,in__10586));
in__10586 = G__10588;
out__10587 = G__10589;
continue;
}
} else
{return out__10587;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10590){
var keyvals = cljs.core.seq(arglist__10590);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10593 = cljs.core.seq.call(null,keyvals);
var out__10594 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10593)
{{
var G__10595 = cljs.core.nnext.call(null,in__10593);
var G__10596 = cljs.core.assoc.call(null,out__10594,cljs.core.first.call(null,in__10593),cljs.core.second.call(null,in__10593));
in__10593 = G__10595;
out__10594 = G__10596;
continue;
}
} else
{return out__10594;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10597){
var comparator = cljs.core.first(arglist__10597);
var keyvals = cljs.core.rest(arglist__10597);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__10598_SHARP_,p2__10599_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10601 = p1__10598_SHARP_;
if(cljs.core.truth_(or__3824__auto____10601))
{return or__3824__auto____10601;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10599_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10602){
var maps = cljs.core.seq(arglist__10602);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__10610 = (function (m,e){
var k__10608 = cljs.core.first.call(null,e);
var v__10609 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10608))
{return cljs.core.assoc.call(null,m,k__10608,f.call(null,cljs.core._lookup.call(null,m,k__10608,null),v__10609));
} else
{return cljs.core.assoc.call(null,m,k__10608,v__10609);
}
});
var merge2__10612 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10610,(function (){var or__3824__auto____10611 = m1;
if(cljs.core.truth_(or__3824__auto____10611))
{return or__3824__auto____10611;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10612,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10613){
var f = cljs.core.first(arglist__10613);
var maps = cljs.core.rest(arglist__10613);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10618 = cljs.core.ObjMap.EMPTY;
var keys__10619 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10619)
{var key__10620 = cljs.core.first.call(null,keys__10619);
var entry__10621 = cljs.core._lookup.call(null,map,key__10620,"\uFDD0'cljs.core/not-found");
{
var G__10622 = ((cljs.core.not_EQ_.call(null,entry__10621,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__10618,key__10620,entry__10621):ret__10618);
var G__10623 = cljs.core.next.call(null,keys__10619);
ret__10618 = G__10622;
keys__10619 = G__10623;
continue;
}
} else
{return ret__10618;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10627 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10627.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10628 = this;
var h__3339__auto____10629 = this__10628.__hash;
if(!((h__3339__auto____10629 == null)))
{return h__3339__auto____10629;
} else
{var h__3339__auto____10630 = cljs.core.hash_iset.call(null,coll);
this__10628.__hash = h__3339__auto____10630;
return h__3339__auto____10630;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10631 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10632 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10632.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10653 = null;
var G__10653__2 = (function (this_sym10633,k){
var this__10635 = this;
var this_sym10633__10636 = this;
var coll__10637 = this_sym10633__10636;
return coll__10637.cljs$core$ILookup$_lookup$arity$2(coll__10637,k);
});
var G__10653__3 = (function (this_sym10634,k,not_found){
var this__10635 = this;
var this_sym10634__10638 = this;
var coll__10639 = this_sym10634__10638;
return coll__10639.cljs$core$ILookup$_lookup$arity$3(coll__10639,k,not_found);
});
G__10653 = function(this_sym10634,k,not_found){
switch(arguments.length){
case 2:
return G__10653__2.call(this,this_sym10634,k);
case 3:
return G__10653__3.call(this,this_sym10634,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10653;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10625,args10626){
var this__10640 = this;
return this_sym10625.call.apply(this_sym10625,[this_sym10625].concat(args10626.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10641 = this;
return (new cljs.core.PersistentHashSet(this__10641.meta,cljs.core.assoc.call(null,this__10641.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10642 = this;
var this__10643 = this;
return cljs.core.pr_str.call(null,this__10643);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10644 = this;
return cljs.core.keys.call(null,this__10644.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10645 = this;
return (new cljs.core.PersistentHashSet(this__10645.meta,cljs.core.dissoc.call(null,this__10645.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10646 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10647 = this;
var and__3822__auto____10648 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10648)
{var and__3822__auto____10649 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10649)
{return cljs.core.every_QMARK_.call(null,(function (p1__10624_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10624_SHARP_);
}),other);
} else
{return and__3822__auto____10649;
}
} else
{return and__3822__auto____10648;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10650 = this;
return (new cljs.core.PersistentHashSet(meta,this__10650.hash_map,this__10650.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10651 = this;
return this__10651.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10652 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10652.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10654 = cljs.core.count.call(null,items);
var i__10655 = 0;
var out__10656 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10655 < len__10654))
{{
var G__10657 = (i__10655 + 1);
var G__10658 = cljs.core.conj_BANG_.call(null,out__10656,(items[i__10655]));
i__10655 = G__10657;
out__10656 = G__10658;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10656);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10676 = null;
var G__10676__2 = (function (this_sym10662,k){
var this__10664 = this;
var this_sym10662__10665 = this;
var tcoll__10666 = this_sym10662__10665;
if((cljs.core._lookup.call(null,this__10664.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10676__3 = (function (this_sym10663,k,not_found){
var this__10664 = this;
var this_sym10663__10667 = this;
var tcoll__10668 = this_sym10663__10667;
if((cljs.core._lookup.call(null,this__10664.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10676 = function(this_sym10663,k,not_found){
switch(arguments.length){
case 2:
return G__10676__2.call(this,this_sym10663,k);
case 3:
return G__10676__3.call(this,this_sym10663,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10676;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10660,args10661){
var this__10669 = this;
return this_sym10660.call.apply(this_sym10660,[this_sym10660].concat(args10661.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10670 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10671 = this;
if((cljs.core._lookup.call(null,this__10671.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10672 = this;
return cljs.core.count.call(null,this__10672.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10673 = this;
this__10673.transient_map = cljs.core.dissoc_BANG_.call(null,this__10673.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10674 = this;
this__10674.transient_map = cljs.core.assoc_BANG_.call(null,this__10674.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10675 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10675.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10679 = this;
var h__3339__auto____10680 = this__10679.__hash;
if(!((h__3339__auto____10680 == null)))
{return h__3339__auto____10680;
} else
{var h__3339__auto____10681 = cljs.core.hash_iset.call(null,coll);
this__10679.__hash = h__3339__auto____10681;
return h__3339__auto____10681;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10682 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10683 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10683.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10709 = null;
var G__10709__2 = (function (this_sym10684,k){
var this__10686 = this;
var this_sym10684__10687 = this;
var coll__10688 = this_sym10684__10687;
return coll__10688.cljs$core$ILookup$_lookup$arity$2(coll__10688,k);
});
var G__10709__3 = (function (this_sym10685,k,not_found){
var this__10686 = this;
var this_sym10685__10689 = this;
var coll__10690 = this_sym10685__10689;
return coll__10690.cljs$core$ILookup$_lookup$arity$3(coll__10690,k,not_found);
});
G__10709 = function(this_sym10685,k,not_found){
switch(arguments.length){
case 2:
return G__10709__2.call(this,this_sym10685,k);
case 3:
return G__10709__3.call(this,this_sym10685,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10709;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10677,args10678){
var this__10691 = this;
return this_sym10677.call.apply(this_sym10677,[this_sym10677].concat(args10678.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10692 = this;
return (new cljs.core.PersistentTreeSet(this__10692.meta,cljs.core.assoc.call(null,this__10692.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10693 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10693.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10694 = this;
var this__10695 = this;
return cljs.core.pr_str.call(null,this__10695);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10696 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10696.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10697 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10697.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10698 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10699 = this;
return cljs.core._comparator.call(null,this__10699.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10700 = this;
return cljs.core.keys.call(null,this__10700.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10701 = this;
return (new cljs.core.PersistentTreeSet(this__10701.meta,cljs.core.dissoc.call(null,this__10701.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10702 = this;
return cljs.core.count.call(null,this__10702.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10703 = this;
var and__3822__auto____10704 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10704)
{var and__3822__auto____10705 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10705)
{return cljs.core.every_QMARK_.call(null,(function (p1__10659_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10659_SHARP_);
}),other);
} else
{return and__3822__auto____10705;
}
} else
{return and__3822__auto____10704;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10706 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10706.tree_map,this__10706.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10707 = this;
return this__10707.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10708 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10708.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10714__delegate = function (keys){
var in__10712 = cljs.core.seq.call(null,keys);
var out__10713 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10712))
{{
var G__10715 = cljs.core.next.call(null,in__10712);
var G__10716 = cljs.core.conj_BANG_.call(null,out__10713,cljs.core.first.call(null,in__10712));
in__10712 = G__10715;
out__10713 = G__10716;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10713);
}
break;
}
};
var G__10714 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10714__delegate.call(this, keys);
};
G__10714.cljs$lang$maxFixedArity = 0;
G__10714.cljs$lang$applyTo = (function (arglist__10717){
var keys = cljs.core.seq(arglist__10717);;
return G__10714__delegate(keys);
});
G__10714.cljs$lang$arity$variadic = G__10714__delegate;
return G__10714;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10718){
var keys = cljs.core.seq(arglist__10718);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10720){
var comparator = cljs.core.first(arglist__10720);
var keys = cljs.core.rest(arglist__10720);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__10726 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____10727 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____10727))
{var e__10728 = temp__3971__auto____10727;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10728));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10726,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10719_SHARP_){
var temp__3971__auto____10729 = cljs.core.find.call(null,smap,p1__10719_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10729))
{var e__10730 = temp__3971__auto____10729;
return cljs.core.second.call(null,e__10730);
} else
{return p1__10719_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10760 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10753,seen){
while(true){
var vec__10754__10755 = p__10753;
var f__10756 = cljs.core.nth.call(null,vec__10754__10755,0,null);
var xs__10757 = vec__10754__10755;
var temp__3974__auto____10758 = cljs.core.seq.call(null,xs__10757);
if(temp__3974__auto____10758)
{var s__10759 = temp__3974__auto____10758;
if(cljs.core.contains_QMARK_.call(null,seen,f__10756))
{{
var G__10761 = cljs.core.rest.call(null,s__10759);
var G__10762 = seen;
p__10753 = G__10761;
seen = G__10762;
continue;
}
} else
{return cljs.core.cons.call(null,f__10756,step.call(null,cljs.core.rest.call(null,s__10759),cljs.core.conj.call(null,seen,f__10756)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10760.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__10765 = cljs.core.PersistentVector.EMPTY;
var s__10766 = s;
while(true){
if(cljs.core.next.call(null,s__10766))
{{
var G__10767 = cljs.core.conj.call(null,ret__10765,cljs.core.first.call(null,s__10766));
var G__10768 = cljs.core.next.call(null,s__10766);
ret__10765 = G__10767;
s__10766 = G__10768;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10765);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____10771 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10771)
{return or__3824__auto____10771;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10772 = x.lastIndexOf("/");
if((i__10772 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10772 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____10775 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10775)
{return or__3824__auto____10775;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10776 = x.lastIndexOf("/");
if((i__10776 > -1))
{return cljs.core.subs.call(null,x,2,i__10776);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10783 = cljs.core.ObjMap.EMPTY;
var ks__10784 = cljs.core.seq.call(null,keys);
var vs__10785 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____10786 = ks__10784;
if(and__3822__auto____10786)
{return vs__10785;
} else
{return and__3822__auto____10786;
}
})())
{{
var G__10787 = cljs.core.assoc.call(null,map__10783,cljs.core.first.call(null,ks__10784),cljs.core.first.call(null,vs__10785));
var G__10788 = cljs.core.next.call(null,ks__10784);
var G__10789 = cljs.core.next.call(null,vs__10785);
map__10783 = G__10787;
ks__10784 = G__10788;
vs__10785 = G__10789;
continue;
}
} else
{return map__10783;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10792__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10777_SHARP_,p2__10778_SHARP_){
return max_key.call(null,k,p1__10777_SHARP_,p2__10778_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10792 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10792__delegate.call(this, k, x, y, more);
};
G__10792.cljs$lang$maxFixedArity = 3;
G__10792.cljs$lang$applyTo = (function (arglist__10793){
var k = cljs.core.first(arglist__10793);
var x = cljs.core.first(cljs.core.next(arglist__10793));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10793)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10793)));
return G__10792__delegate(k, x, y, more);
});
G__10792.cljs$lang$arity$variadic = G__10792__delegate;
return G__10792;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10794__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10790_SHARP_,p2__10791_SHARP_){
return min_key.call(null,k,p1__10790_SHARP_,p2__10791_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10794 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10794__delegate.call(this, k, x, y, more);
};
G__10794.cljs$lang$maxFixedArity = 3;
G__10794.cljs$lang$applyTo = (function (arglist__10795){
var k = cljs.core.first(arglist__10795);
var x = cljs.core.first(cljs.core.next(arglist__10795));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10795)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10795)));
return G__10794__delegate(k, x, y, more);
});
G__10794.cljs$lang$arity$variadic = G__10794__delegate;
return G__10794;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10798 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10798)
{var s__10799 = temp__3974__auto____10798;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10799),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10799)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10802 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10802)
{var s__10803 = temp__3974__auto____10802;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10803))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10803),take_while.call(null,pred,cljs.core.rest.call(null,s__10803)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10805 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10805.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10817 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10818 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10818))
{var vec__10819__10820 = temp__3974__auto____10818;
var e__10821 = cljs.core.nth.call(null,vec__10819__10820,0,null);
var s__10822 = vec__10819__10820;
if(cljs.core.truth_(include__10817.call(null,e__10821)))
{return s__10822;
} else
{return cljs.core.next.call(null,s__10822);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10817,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10823 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10823))
{var vec__10824__10825 = temp__3974__auto____10823;
var e__10826 = cljs.core.nth.call(null,vec__10824__10825,0,null);
var s__10827 = vec__10824__10825;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10826))?s__10827:cljs.core.next.call(null,s__10827)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10839 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10840 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10840))
{var vec__10841__10842 = temp__3974__auto____10840;
var e__10843 = cljs.core.nth.call(null,vec__10841__10842,0,null);
var s__10844 = vec__10841__10842;
if(cljs.core.truth_(include__10839.call(null,e__10843)))
{return s__10844;
} else
{return cljs.core.next.call(null,s__10844);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10839,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10845 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10845))
{var vec__10846__10847 = temp__3974__auto____10845;
var e__10848 = cljs.core.nth.call(null,vec__10846__10847,0,null);
var s__10849 = vec__10846__10847;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10848))?s__10849:cljs.core.next.call(null,s__10849)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10850 = this;
var h__3339__auto____10851 = this__10850.__hash;
if(!((h__3339__auto____10851 == null)))
{return h__3339__auto____10851;
} else
{var h__3339__auto____10852 = cljs.core.hash_coll.call(null,rng);
this__10850.__hash = h__3339__auto____10852;
return h__3339__auto____10852;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10853 = this;
if((this__10853.step > 0))
{if(((this__10853.start + this__10853.step) < this__10853.end))
{return (new cljs.core.Range(this__10853.meta,(this__10853.start + this__10853.step),this__10853.end,this__10853.step,null));
} else
{return null;
}
} else
{if(((this__10853.start + this__10853.step) > this__10853.end))
{return (new cljs.core.Range(this__10853.meta,(this__10853.start + this__10853.step),this__10853.end,this__10853.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10854 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10855 = this;
var this__10856 = this;
return cljs.core.pr_str.call(null,this__10856);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10857 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10858 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10859 = this;
if((this__10859.step > 0))
{if((this__10859.start < this__10859.end))
{return rng;
} else
{return null;
}
} else
{if((this__10859.start > this__10859.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10860 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10860.end - this__10860.start) / this__10860.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10861 = this;
return this__10861.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10862 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10862.meta,(this__10862.start + this__10862.step),this__10862.end,this__10862.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10863 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10864 = this;
return (new cljs.core.Range(meta,this__10864.start,this__10864.end,this__10864.step,this__10864.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10865 = this;
return this__10865.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10866 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10866.start + (n * this__10866.step));
} else
{if((function (){var and__3822__auto____10867 = (this__10866.start > this__10866.end);
if(and__3822__auto____10867)
{return (this__10866.step === 0);
} else
{return and__3822__auto____10867;
}
})())
{return this__10866.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10868 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10868.start + (n * this__10868.step));
} else
{if((function (){var and__3822__auto____10869 = (this__10868.start > this__10868.end);
if(and__3822__auto____10869)
{return (this__10868.step === 0);
} else
{return and__3822__auto____10869;
}
})())
{return this__10868.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10870 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10870.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10873 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10873)
{var s__10874 = temp__3974__auto____10873;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10874),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10874)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10881 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10881)
{var s__10882 = temp__3974__auto____10881;
var fst__10883 = cljs.core.first.call(null,s__10882);
var fv__10884 = f.call(null,fst__10883);
var run__10885 = cljs.core.cons.call(null,fst__10883,cljs.core.take_while.call(null,(function (p1__10875_SHARP_){
return cljs.core._EQ_.call(null,fv__10884,f.call(null,p1__10875_SHARP_));
}),cljs.core.next.call(null,s__10882)));
return cljs.core.cons.call(null,run__10885,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10885),s__10882))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10900 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10900)
{var s__10901 = temp__3971__auto____10900;
return reductions.call(null,f,cljs.core.first.call(null,s__10901),cljs.core.rest.call(null,s__10901));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10902 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10902)
{var s__10903 = temp__3974__auto____10902;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10903)),cljs.core.rest.call(null,s__10903));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10906 = null;
var G__10906__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10906__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10906__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10906__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10906__4 = (function() { 
var G__10907__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10907__delegate.call(this, x, y, z, args);
};
G__10907.cljs$lang$maxFixedArity = 3;
G__10907.cljs$lang$applyTo = (function (arglist__10908){
var x = cljs.core.first(arglist__10908);
var y = cljs.core.first(cljs.core.next(arglist__10908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10908)));
return G__10907__delegate(x, y, z, args);
});
G__10907.cljs$lang$arity$variadic = G__10907__delegate;
return G__10907;
})()
;
G__10906 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10906__0.call(this);
case 1:
return G__10906__1.call(this,x);
case 2:
return G__10906__2.call(this,x,y);
case 3:
return G__10906__3.call(this,x,y,z);
default:
return G__10906__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10906.cljs$lang$maxFixedArity = 3;
G__10906.cljs$lang$applyTo = G__10906__4.cljs$lang$applyTo;
return G__10906;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10909 = null;
var G__10909__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10909__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10909__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10909__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10909__4 = (function() { 
var G__10910__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10910__delegate.call(this, x, y, z, args);
};
G__10910.cljs$lang$maxFixedArity = 3;
G__10910.cljs$lang$applyTo = (function (arglist__10911){
var x = cljs.core.first(arglist__10911);
var y = cljs.core.first(cljs.core.next(arglist__10911));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10911)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10911)));
return G__10910__delegate(x, y, z, args);
});
G__10910.cljs$lang$arity$variadic = G__10910__delegate;
return G__10910;
})()
;
G__10909 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10909__0.call(this);
case 1:
return G__10909__1.call(this,x);
case 2:
return G__10909__2.call(this,x,y);
case 3:
return G__10909__3.call(this,x,y,z);
default:
return G__10909__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10909.cljs$lang$maxFixedArity = 3;
G__10909.cljs$lang$applyTo = G__10909__4.cljs$lang$applyTo;
return G__10909;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10912 = null;
var G__10912__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10912__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10912__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10912__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10912__4 = (function() { 
var G__10913__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10913 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10913__delegate.call(this, x, y, z, args);
};
G__10913.cljs$lang$maxFixedArity = 3;
G__10913.cljs$lang$applyTo = (function (arglist__10914){
var x = cljs.core.first(arglist__10914);
var y = cljs.core.first(cljs.core.next(arglist__10914));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10914)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10914)));
return G__10913__delegate(x, y, z, args);
});
G__10913.cljs$lang$arity$variadic = G__10913__delegate;
return G__10913;
})()
;
G__10912 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10912__0.call(this);
case 1:
return G__10912__1.call(this,x);
case 2:
return G__10912__2.call(this,x,y);
case 3:
return G__10912__3.call(this,x,y,z);
default:
return G__10912__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10912.cljs$lang$maxFixedArity = 3;
G__10912.cljs$lang$applyTo = G__10912__4.cljs$lang$applyTo;
return G__10912;
})()
});
var juxt__4 = (function() { 
var G__10915__delegate = function (f,g,h,fs){
var fs__10905 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10916 = null;
var G__10916__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10886_SHARP_,p2__10887_SHARP_){
return cljs.core.conj.call(null,p1__10886_SHARP_,p2__10887_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10905);
});
var G__10916__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10888_SHARP_,p2__10889_SHARP_){
return cljs.core.conj.call(null,p1__10888_SHARP_,p2__10889_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10905);
});
var G__10916__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10890_SHARP_,p2__10891_SHARP_){
return cljs.core.conj.call(null,p1__10890_SHARP_,p2__10891_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10905);
});
var G__10916__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10892_SHARP_,p2__10893_SHARP_){
return cljs.core.conj.call(null,p1__10892_SHARP_,p2__10893_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10905);
});
var G__10916__4 = (function() { 
var G__10917__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10894_SHARP_,p2__10895_SHARP_){
return cljs.core.conj.call(null,p1__10894_SHARP_,cljs.core.apply.call(null,p2__10895_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10905);
};
var G__10917 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10917__delegate.call(this, x, y, z, args);
};
G__10917.cljs$lang$maxFixedArity = 3;
G__10917.cljs$lang$applyTo = (function (arglist__10918){
var x = cljs.core.first(arglist__10918);
var y = cljs.core.first(cljs.core.next(arglist__10918));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10918)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10918)));
return G__10917__delegate(x, y, z, args);
});
G__10917.cljs$lang$arity$variadic = G__10917__delegate;
return G__10917;
})()
;
G__10916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10916__0.call(this);
case 1:
return G__10916__1.call(this,x);
case 2:
return G__10916__2.call(this,x,y);
case 3:
return G__10916__3.call(this,x,y,z);
default:
return G__10916__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10916.cljs$lang$maxFixedArity = 3;
G__10916.cljs$lang$applyTo = G__10916__4.cljs$lang$applyTo;
return G__10916;
})()
};
var G__10915 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10915__delegate.call(this, f, g, h, fs);
};
G__10915.cljs$lang$maxFixedArity = 3;
G__10915.cljs$lang$applyTo = (function (arglist__10919){
var f = cljs.core.first(arglist__10919);
var g = cljs.core.first(cljs.core.next(arglist__10919));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10919)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10919)));
return G__10915__delegate(f, g, h, fs);
});
G__10915.cljs$lang$arity$variadic = G__10915__delegate;
return G__10915;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__10922 = cljs.core.next.call(null,coll);
coll = G__10922;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10921 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10921)
{return (n > 0);
} else
{return and__3822__auto____10921;
}
})()))
{{
var G__10923 = (n - 1);
var G__10924 = cljs.core.next.call(null,coll);
n = G__10923;
coll = G__10924;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10926 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10926),s))
{if((cljs.core.count.call(null,matches__10926) === 1))
{return cljs.core.first.call(null,matches__10926);
} else
{return cljs.core.vec.call(null,matches__10926);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10928 = re.exec(s);
if((matches__10928 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10928) === 1))
{return cljs.core.first.call(null,matches__10928);
} else
{return cljs.core.vec.call(null,matches__10928);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10933 = cljs.core.re_find.call(null,re,s);
var match_idx__10934 = s.search(re);
var match_str__10935 = ((cljs.core.coll_QMARK_.call(null,match_data__10933))?cljs.core.first.call(null,match_data__10933):match_data__10933);
var post_match__10936 = cljs.core.subs.call(null,s,(match_idx__10934 + cljs.core.count.call(null,match_str__10935)));
if(cljs.core.truth_(match_data__10933))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10933,re_seq.call(null,re,post_match__10936));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10943__10944 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10945 = cljs.core.nth.call(null,vec__10943__10944,0,null);
var flags__10946 = cljs.core.nth.call(null,vec__10943__10944,1,null);
var pattern__10947 = cljs.core.nth.call(null,vec__10943__10944,2,null);
return (new RegExp(pattern__10947,flags__10946));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10937_SHARP_){
return print_one.call(null,p1__10937_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10957 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10957))
{var and__3822__auto____10961 = (function (){var G__10958__10959 = obj;
if(G__10958__10959)
{if((function (){var or__3824__auto____10960 = (G__10958__10959.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10960)
{return or__3824__auto____10960;
} else
{return G__10958__10959.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10958__10959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10958__10959);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10958__10959);
}
})();
if(cljs.core.truth_(and__3822__auto____10961))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10961;
}
} else
{return and__3822__auto____10957;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10962 = !((obj == null));
if(and__3822__auto____10962)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10962;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10963__10964 = obj;
if(G__10963__10964)
{if((function (){var or__3824__auto____10965 = (G__10963__10964.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10965)
{return or__3824__auto____10965;
} else
{return G__10963__10964.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10963__10964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10963__10964);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10963__10964);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10985 = (new goog.string.StringBuffer());
var G__10986__10987 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10986__10987)
{var string__10988 = cljs.core.first.call(null,G__10986__10987);
var G__10986__10989 = G__10986__10987;
while(true){
sb__10985.append(string__10988);
var temp__3974__auto____10990 = cljs.core.next.call(null,G__10986__10989);
if(temp__3974__auto____10990)
{var G__10986__10991 = temp__3974__auto____10990;
{
var G__11004 = cljs.core.first.call(null,G__10986__10991);
var G__11005 = G__10986__10991;
string__10988 = G__11004;
G__10986__10989 = G__11005;
continue;
}
} else
{}
break;
}
} else
{}
var G__10992__10993 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10992__10993)
{var obj__10994 = cljs.core.first.call(null,G__10992__10993);
var G__10992__10995 = G__10992__10993;
while(true){
sb__10985.append(" ");
var G__10996__10997 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10994,opts));
if(G__10996__10997)
{var string__10998 = cljs.core.first.call(null,G__10996__10997);
var G__10996__10999 = G__10996__10997;
while(true){
sb__10985.append(string__10998);
var temp__3974__auto____11000 = cljs.core.next.call(null,G__10996__10999);
if(temp__3974__auto____11000)
{var G__10996__11001 = temp__3974__auto____11000;
{
var G__11006 = cljs.core.first.call(null,G__10996__11001);
var G__11007 = G__10996__11001;
string__10998 = G__11006;
G__10996__10999 = G__11007;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11002 = cljs.core.next.call(null,G__10992__10995);
if(temp__3974__auto____11002)
{var G__10992__11003 = temp__3974__auto____11002;
{
var G__11008 = cljs.core.first.call(null,G__10992__11003);
var G__11009 = G__10992__11003;
obj__10994 = G__11008;
G__10992__10995 = G__11009;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10985;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__11011 = cljs.core.pr_sb.call(null,objs,opts);
sb__11011.append("\n");
return [cljs.core.str(sb__11011)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__11030__11031 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__11030__11031)
{var string__11032 = cljs.core.first.call(null,G__11030__11031);
var G__11030__11033 = G__11030__11031;
while(true){
cljs.core.string_print.call(null,string__11032);
var temp__3974__auto____11034 = cljs.core.next.call(null,G__11030__11033);
if(temp__3974__auto____11034)
{var G__11030__11035 = temp__3974__auto____11034;
{
var G__11048 = cljs.core.first.call(null,G__11030__11035);
var G__11049 = G__11030__11035;
string__11032 = G__11048;
G__11030__11033 = G__11049;
continue;
}
} else
{}
break;
}
} else
{}
var G__11036__11037 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__11036__11037)
{var obj__11038 = cljs.core.first.call(null,G__11036__11037);
var G__11036__11039 = G__11036__11037;
while(true){
cljs.core.string_print.call(null," ");
var G__11040__11041 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__11038,opts));
if(G__11040__11041)
{var string__11042 = cljs.core.first.call(null,G__11040__11041);
var G__11040__11043 = G__11040__11041;
while(true){
cljs.core.string_print.call(null,string__11042);
var temp__3974__auto____11044 = cljs.core.next.call(null,G__11040__11043);
if(temp__3974__auto____11044)
{var G__11040__11045 = temp__3974__auto____11044;
{
var G__11050 = cljs.core.first.call(null,G__11040__11045);
var G__11051 = G__11040__11045;
string__11042 = G__11050;
G__11040__11043 = G__11051;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____11046 = cljs.core.next.call(null,G__11036__11039);
if(temp__3974__auto____11046)
{var G__11036__11047 = temp__3974__auto____11046;
{
var G__11052 = cljs.core.first.call(null,G__11036__11047);
var G__11053 = G__11036__11047;
obj__11038 = G__11052;
G__11036__11039 = G__11053;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__11054){
var objs = cljs.core.seq(arglist__11054);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__11055){
var objs = cljs.core.seq(arglist__11055);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__11056){
var objs = cljs.core.seq(arglist__11056);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__11057){
var objs = cljs.core.seq(arglist__11057);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__11058){
var objs = cljs.core.seq(arglist__11058);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__11059){
var objs = cljs.core.seq(arglist__11059);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__11060){
var objs = cljs.core.seq(arglist__11060);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__11061){
var objs = cljs.core.seq(arglist__11061);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__11062){
var fmt = cljs.core.first(arglist__11062);
var args = cljs.core.rest(arglist__11062);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11063 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11063,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11064 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11064,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11065 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11065,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____11066 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11066))
{var nspc__11067 = temp__3974__auto____11066;
return [cljs.core.str(nspc__11067),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____11068 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____11068))
{var nspc__11069 = temp__3974__auto____11068;
return [cljs.core.str(nspc__11069),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11070 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11070,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__11072 = (function (n,len){
var ns__11071 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__11071) < len))
{{
var G__11074 = [cljs.core.str("0"),cljs.core.str(ns__11071)].join('');
ns__11071 = G__11074;
continue;
}
} else
{return ns__11071;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__11072.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__11072.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__11072.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__11072.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__11072.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__11072.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__11073 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__11073,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11075 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__11076 = this;
var G__11077__11078 = cljs.core.seq.call(null,this__11076.watches);
if(G__11077__11078)
{var G__11080__11082 = cljs.core.first.call(null,G__11077__11078);
var vec__11081__11083 = G__11080__11082;
var key__11084 = cljs.core.nth.call(null,vec__11081__11083,0,null);
var f__11085 = cljs.core.nth.call(null,vec__11081__11083,1,null);
var G__11077__11086 = G__11077__11078;
var G__11080__11087 = G__11080__11082;
var G__11077__11088 = G__11077__11086;
while(true){
var vec__11089__11090 = G__11080__11087;
var key__11091 = cljs.core.nth.call(null,vec__11089__11090,0,null);
var f__11092 = cljs.core.nth.call(null,vec__11089__11090,1,null);
var G__11077__11093 = G__11077__11088;
f__11092.call(null,key__11091,this$,oldval,newval);
var temp__3974__auto____11094 = cljs.core.next.call(null,G__11077__11093);
if(temp__3974__auto____11094)
{var G__11077__11095 = temp__3974__auto____11094;
{
var G__11102 = cljs.core.first.call(null,G__11077__11095);
var G__11103 = G__11077__11095;
G__11080__11087 = G__11102;
G__11077__11088 = G__11103;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__11096 = this;
return this$.watches = cljs.core.assoc.call(null,this__11096.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11097 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11097.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__11098 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__11098.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__11099 = this;
return this__11099.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11100 = this;
return this__11100.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11101 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11115__delegate = function (x,p__11104){
var map__11110__11111 = p__11104;
var map__11110__11112 = ((cljs.core.seq_QMARK_.call(null,map__11110__11111))?cljs.core.apply.call(null,cljs.core.hash_map,map__11110__11111):map__11110__11111);
var validator__11113 = cljs.core._lookup.call(null,map__11110__11112,"\uFDD0'validator",null);
var meta__11114 = cljs.core._lookup.call(null,map__11110__11112,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__11114,validator__11113,null));
};
var G__11115 = function (x,var_args){
var p__11104 = null;
if (goog.isDef(var_args)) {
  p__11104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11115__delegate.call(this, x, p__11104);
};
G__11115.cljs$lang$maxFixedArity = 1;
G__11115.cljs$lang$applyTo = (function (arglist__11116){
var x = cljs.core.first(arglist__11116);
var p__11104 = cljs.core.rest(arglist__11116);
return G__11115__delegate(x, p__11104);
});
G__11115.cljs$lang$arity$variadic = G__11115__delegate;
return G__11115;
})()
;
atom = function(x,var_args){
var p__11104 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____11120 = a.validator;
if(cljs.core.truth_(temp__3974__auto____11120))
{var validate__11121 = temp__3974__auto____11120;
if(cljs.core.truth_(validate__11121.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__11122 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__11122,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__11123__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__11123 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__11123__delegate.call(this, a, f, x, y, z, more);
};
G__11123.cljs$lang$maxFixedArity = 5;
G__11123.cljs$lang$applyTo = (function (arglist__11124){
var a = cljs.core.first(arglist__11124);
var f = cljs.core.first(cljs.core.next(arglist__11124));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11124)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11124))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11124)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11124)))));
return G__11123__delegate(a, f, x, y, z, more);
});
G__11123.cljs$lang$arity$variadic = G__11123__delegate;
return G__11123;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__11125){
var iref = cljs.core.first(arglist__11125);
var f = cljs.core.first(cljs.core.next(arglist__11125));
var args = cljs.core.rest(cljs.core.next(arglist__11125));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__11126 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__11126.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__11127 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__11127.state,(function (p__11128){
var map__11129__11130 = p__11128;
var map__11129__11131 = ((cljs.core.seq_QMARK_.call(null,map__11129__11130))?cljs.core.apply.call(null,cljs.core.hash_map,map__11129__11130):map__11129__11130);
var curr_state__11132 = map__11129__11131;
var done__11133 = cljs.core._lookup.call(null,map__11129__11131,"\uFDD0'done",null);
if(cljs.core.truth_(done__11133))
{return curr_state__11132;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__11127.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11154__11155 = options;
var map__11154__11156 = ((cljs.core.seq_QMARK_.call(null,map__11154__11155))?cljs.core.apply.call(null,cljs.core.hash_map,map__11154__11155):map__11154__11155);
var keywordize_keys__11157 = cljs.core._lookup.call(null,map__11154__11156,"\uFDD0'keywordize-keys",null);
var keyfn__11158 = (cljs.core.truth_(keywordize_keys__11157)?cljs.core.keyword:cljs.core.str);
var f__11173 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__3609__auto____11172 = (function iter__11166(s__11167){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11167__11170 = s__11167;
while(true){
if(cljs.core.seq.call(null,s__11167__11170))
{var k__11171 = cljs.core.first.call(null,s__11167__11170);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11158.call(null,k__11171),thisfn.call(null,(x[k__11171]))], true),iter__11166.call(null,cljs.core.rest.call(null,s__11167__11170)));
} else
{return null;
}
break;
}
}),null));
});
return iter__3609__auto____11172.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__11173.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11174){
var x = cljs.core.first(arglist__11174);
var options = cljs.core.rest(arglist__11174);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11179 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11183__delegate = function (args){
var temp__3971__auto____11180 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11179),args,null);
if(cljs.core.truth_(temp__3971__auto____11180))
{var v__11181 = temp__3971__auto____11180;
return v__11181;
} else
{var ret__11182 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11179,cljs.core.assoc,args,ret__11182);
return ret__11182;
}
};
var G__11183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11183__delegate.call(this, args);
};
G__11183.cljs$lang$maxFixedArity = 0;
G__11183.cljs$lang$applyTo = (function (arglist__11184){
var args = cljs.core.seq(arglist__11184);;
return G__11183__delegate(args);
});
G__11183.cljs$lang$arity$variadic = G__11183__delegate;
return G__11183;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11186 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11186))
{{
var G__11187 = ret__11186;
f = G__11187;
continue;
}
} else
{return ret__11186;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11188__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11188 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11188__delegate.call(this, f, args);
};
G__11188.cljs$lang$maxFixedArity = 1;
G__11188.cljs$lang$applyTo = (function (arglist__11189){
var f = cljs.core.first(arglist__11189);
var args = cljs.core.rest(arglist__11189);
return G__11188__delegate(f, args);
});
G__11188.cljs$lang$arity$variadic = G__11188__delegate;
return G__11188;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11191 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11191,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11191,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____11200 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____11200)
{return or__3824__auto____11200;
} else
{var or__3824__auto____11201 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____11201)
{return or__3824__auto____11201;
} else
{var and__3822__auto____11202 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____11202)
{var and__3822__auto____11203 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____11203)
{var and__3822__auto____11204 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____11204)
{var ret__11205 = true;
var i__11206 = 0;
while(true){
if((function (){var or__3824__auto____11207 = cljs.core.not.call(null,ret__11205);
if(or__3824__auto____11207)
{return or__3824__auto____11207;
} else
{return (i__11206 === cljs.core.count.call(null,parent));
}
})())
{return ret__11205;
} else
{{
var G__11208 = isa_QMARK_.call(null,h,child.call(null,i__11206),parent.call(null,i__11206));
var G__11209 = (i__11206 + 1);
ret__11205 = G__11208;
i__11206 = G__11209;
continue;
}
}
break;
}
} else
{return and__3822__auto____11204;
}
} else
{return and__3822__auto____11203;
}
} else
{return and__3822__auto____11202;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__11218 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11219 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11220 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11221 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____11222 = ((cljs.core.contains_QMARK_.call(null,tp__11218.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11220.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11220.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11218,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__11221.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11219,parent,ta__11220),"\uFDD0'descendants":tf__11221.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11220,tag,td__11219)});
})());
if(cljs.core.truth_(or__3824__auto____11222))
{return or__3824__auto____11222;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11227 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11228 = (cljs.core.truth_(parentMap__11227.call(null,tag))?cljs.core.disj.call(null,parentMap__11227.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__11229 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11228))?cljs.core.assoc.call(null,parentMap__11227,tag,childsParents__11228):cljs.core.dissoc.call(null,parentMap__11227,tag));
var deriv_seq__11230 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11210_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11210_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11210_SHARP_),cljs.core.second.call(null,p1__11210_SHARP_)));
}),cljs.core.seq.call(null,newParents__11229)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11227.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11211_SHARP_,p2__11212_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11211_SHARP_,p2__11212_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11230));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11238 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____11240 = (cljs.core.truth_((function (){var and__3822__auto____11239 = xprefs__11238;
if(cljs.core.truth_(and__3822__auto____11239))
{return xprefs__11238.call(null,y);
} else
{return and__3822__auto____11239;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____11240))
{return or__3824__auto____11240;
} else
{var or__3824__auto____11242 = (function (){var ps__11241 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11241) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11241),prefer_table)))
{} else
{}
{
var G__11245 = cljs.core.rest.call(null,ps__11241);
ps__11241 = G__11245;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11242))
{return or__3824__auto____11242;
} else
{var or__3824__auto____11244 = (function (){var ps__11243 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11243) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11243),y,prefer_table)))
{} else
{}
{
var G__11246 = cljs.core.rest.call(null,ps__11243);
ps__11243 = G__11246;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____11244))
{return or__3824__auto____11244;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____11248 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____11248))
{return or__3824__auto____11248;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11266 = cljs.core.reduce.call(null,(function (be,p__11258){
var vec__11259__11260 = p__11258;
var k__11261 = cljs.core.nth.call(null,vec__11259__11260,0,null);
var ___11262 = cljs.core.nth.call(null,vec__11259__11260,1,null);
var e__11263 = vec__11259__11260;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11261))
{var be2__11265 = (cljs.core.truth_((function (){var or__3824__auto____11264 = (be == null);
if(or__3824__auto____11264)
{return or__3824__auto____11264;
} else
{return cljs.core.dominates.call(null,k__11261,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11263:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11265),k__11261,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11261),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11265)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11265;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11266))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11266));
return cljs.core.second.call(null,best_entry__11266);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____11271 = mf;
if(and__3822__auto____11271)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____11271;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3510__auto____11272 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11273 = (cljs.core._reset[goog.typeOf(x__3510__auto____11272)]);
if(or__3824__auto____11273)
{return or__3824__auto____11273;
} else
{var or__3824__auto____11274 = (cljs.core._reset["_"]);
if(or__3824__auto____11274)
{return or__3824__auto____11274;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____11279 = mf;
if(and__3822__auto____11279)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____11279;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3510__auto____11280 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11281 = (cljs.core._add_method[goog.typeOf(x__3510__auto____11280)]);
if(or__3824__auto____11281)
{return or__3824__auto____11281;
} else
{var or__3824__auto____11282 = (cljs.core._add_method["_"]);
if(or__3824__auto____11282)
{return or__3824__auto____11282;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____11287 = mf;
if(and__3822__auto____11287)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____11287;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3510__auto____11288 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11289 = (cljs.core._remove_method[goog.typeOf(x__3510__auto____11288)]);
if(or__3824__auto____11289)
{return or__3824__auto____11289;
} else
{var or__3824__auto____11290 = (cljs.core._remove_method["_"]);
if(or__3824__auto____11290)
{return or__3824__auto____11290;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____11295 = mf;
if(and__3822__auto____11295)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____11295;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3510__auto____11296 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11297 = (cljs.core._prefer_method[goog.typeOf(x__3510__auto____11296)]);
if(or__3824__auto____11297)
{return or__3824__auto____11297;
} else
{var or__3824__auto____11298 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____11298)
{return or__3824__auto____11298;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____11303 = mf;
if(and__3822__auto____11303)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____11303;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3510__auto____11304 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11305 = (cljs.core._get_method[goog.typeOf(x__3510__auto____11304)]);
if(or__3824__auto____11305)
{return or__3824__auto____11305;
} else
{var or__3824__auto____11306 = (cljs.core._get_method["_"]);
if(or__3824__auto____11306)
{return or__3824__auto____11306;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____11311 = mf;
if(and__3822__auto____11311)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____11311;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3510__auto____11312 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11313 = (cljs.core._methods[goog.typeOf(x__3510__auto____11312)]);
if(or__3824__auto____11313)
{return or__3824__auto____11313;
} else
{var or__3824__auto____11314 = (cljs.core._methods["_"]);
if(or__3824__auto____11314)
{return or__3824__auto____11314;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____11319 = mf;
if(and__3822__auto____11319)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____11319;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3510__auto____11320 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11321 = (cljs.core._prefers[goog.typeOf(x__3510__auto____11320)]);
if(or__3824__auto____11321)
{return or__3824__auto____11321;
} else
{var or__3824__auto____11322 = (cljs.core._prefers["_"]);
if(or__3824__auto____11322)
{return or__3824__auto____11322;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____11327 = mf;
if(and__3822__auto____11327)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____11327;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3510__auto____11328 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____11329 = (cljs.core._dispatch[goog.typeOf(x__3510__auto____11328)]);
if(or__3824__auto____11329)
{return or__3824__auto____11329;
} else
{var or__3824__auto____11330 = (cljs.core._dispatch["_"]);
if(or__3824__auto____11330)
{return or__3824__auto____11330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11333 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11334 = cljs.core._get_method.call(null,mf,dispatch_val__11333);
if(cljs.core.truth_(target_fn__11334))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11333)].join('')));
}
return cljs.core.apply.call(null,target_fn__11334,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11335 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11336 = this;
cljs.core.swap_BANG_.call(null,this__11336.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11336.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11336.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11336.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11337 = this;
cljs.core.swap_BANG_.call(null,this__11337.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11337.method_cache,this__11337.method_table,this__11337.cached_hierarchy,this__11337.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11338 = this;
cljs.core.swap_BANG_.call(null,this__11338.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11338.method_cache,this__11338.method_table,this__11338.cached_hierarchy,this__11338.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11339 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11339.cached_hierarchy),cljs.core.deref.call(null,this__11339.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11339.method_cache,this__11339.method_table,this__11339.cached_hierarchy,this__11339.hierarchy);
}
var temp__3971__auto____11340 = cljs.core.deref.call(null,this__11339.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____11340))
{var target_fn__11341 = temp__3971__auto____11340;
return target_fn__11341;
} else
{var temp__3971__auto____11342 = cljs.core.find_and_cache_best_method.call(null,this__11339.name,dispatch_val,this__11339.hierarchy,this__11339.method_table,this__11339.prefer_table,this__11339.method_cache,this__11339.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____11342))
{var target_fn__11343 = temp__3971__auto____11342;
return target_fn__11343;
} else
{return cljs.core.deref.call(null,this__11339.method_table).call(null,this__11339.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11344 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11344.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11344.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11344.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11344.method_cache,this__11344.method_table,this__11344.cached_hierarchy,this__11344.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11345 = this;
return cljs.core.deref.call(null,this__11345.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11346 = this;
return cljs.core.deref.call(null,this__11346.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11347 = this;
return cljs.core.do_dispatch.call(null,mf,this__11347.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11349__delegate = function (_,args){
var self__11348 = this;
return cljs.core._dispatch.call(null,self__11348,args);
};
var G__11349 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11349__delegate.call(this, _, args);
};
G__11349.cljs$lang$maxFixedArity = 1;
G__11349.cljs$lang$applyTo = (function (arglist__11350){
var _ = cljs.core.first(arglist__11350);
var args = cljs.core.rest(arglist__11350);
return G__11349__delegate(_, args);
});
G__11349.cljs$lang$arity$variadic = G__11349__delegate;
return G__11349;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11351 = this;
return cljs.core._dispatch.call(null,self__11351,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__3456__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11352 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11354,_){
var this__11353 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11353.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11355 = this;
var and__3822__auto____11356 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____11356)
{return (this__11355.uuid === other.uuid);
} else
{return and__3822__auto____11356;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__11357 = this;
var this__11358 = this;
return cljs.core.pr_str.call(null,this__11358);
});
cljs.core.UUID;
