var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'u-f-ajc data-v-adc4525a'])
Z([[6],[[7],[3,'item']],[3,'titlepic']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[6],[[7],[3,'item']],[3,'share']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'u-f-jsb home-list-item data-v-7a08d61b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openEvent']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'item']]]]]]]]]]])
Z([3,'home-list-hover'])
Z([[6],[[7],[3,'item']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'u-f-ajc p-2 border-bottom data-v-6bd63aa5'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navChat']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([3,'data-v-6bd63aa5'])
Z([3,'small'])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'noread']],[1,'']])
Z([3,'error'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([1,false])
Z([3,'u-f-ajc data-v-f0cafcd2'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'navAdd']]]]]]]],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([1,true])
Z(z[6])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'default']],[1,'left']],[1,'right']]])
Z([3,'index'])
Z([3,'tab'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[1])
Z([[4],[[5],[[5],[1,'u-f-ajc data-v-f0cafcd2']],[[2,'?:'],[[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-badge']],[[2,'?:'],[[7],[3,'inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]],[1,' uni-badge-inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge-'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar__header uni-navbar__content_view'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__content_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[8])
Z([[4],[[5],[[5],[1,'uni-navbar__header-btns uni-navbar__content_view']],[[2,'?:'],[[6],[[7],[3,'title']],[3,'length']],[1,'uni-navbar__header-btns-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper data-v-e16e36a8']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box data-v-e16e36a8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-2eebdd3f'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'u-f-ajc data-v-2eebdd3f'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'arrowleft'])
Z([3,'发布'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^uploud']],[[4],[[5],[[4],[[5],[1,'uploud']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-1515b7db'])
Z([[2,'!'],[[7],[3,'isLogin']]])
Z([3,'__l'])
Z(z[0])
Z([3,'1'])
Z(z[2])
Z(z[0])
Z([[7],[3,'homeInfo']])
Z([3,'2'])
Z(z[2])
Z(z[0])
Z([[7],[3,'homeData']])
Z([3,'3'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[13])
Z(z[2])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[2])
Z([3,'swiper-box'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'newsList']])
Z(z[12])
Z(z[2])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'idx'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[20])
Z(z[1])
Z([[7],[3,'idx']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'idx']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,10]])
Z(z[1])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[1])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-9273f4d4'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[0])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeTab']],[[4],[[5],[[4],[[5],[1,'changeTab']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[2])
Z([3,'swiper-box data-v-9273f4d4'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'id'])
Z(z[1])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'list data-v-9273f4d4'])
Z(z[1])
Z(z[0])
Z([[7],[3,'hotCate']])
Z([3,'3'])
Z(z[13])
Z(z[14])
Z([[7],[3,'topicList']])
Z(z[13])
Z(z[1])
Z(z[0])
Z(z[19])
Z(z[20])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'list']],[3,'length']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[5])
Z([3,'2'])
Z(z[5])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([[7],[3,'type']])
Z([3,'3'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-20b3e2f2'])
Z([3,'__l'])
Z([3,'data-v-20b3e2f2'])
Z([[7],[3,'item']])
Z([3,'1'])
Z([[2,'>'],[[6],[[7],[3,'listData']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listData']])
Z(z[6])
Z(z[1])
Z(z[2])
Z([[7],[3,'index']])
Z(z[3])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[1])
Z(z[2])
Z([[7],[3,'loadText']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[2])
Z([3,'swiper-box'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'items'])
Z(z[4])
Z(z[12])
Z(z[2])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'idx'])
Z([3,'item'])
Z([[7],[3,'topicList']])
Z(z[19])
Z(z[1])
Z([[7],[3,'idx']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'idx']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([3,'data-v-d9992c16'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-6ab93733'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabBars']])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'flex-1 u-f-ajc data-v-6ab93733']],[[2,'?:'],[[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'num']],[1,0]])
Z(z[5])
Z([3,'swiper-box data-v-6ab93733'])
Z([[7],[3,'tabIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z(z[1])
Z([3,'items'])
Z([[7],[3,'newsList']])
Z(z[1])
Z(z[5])
Z([3,'list data-v-6ab93733'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'idx'])
Z(z[2])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[22])
Z([3,'__l'])
Z(z[0])
Z([3,'small'])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'age']],[1,'']])
Z([3,'error'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'idx']]])
Z([[4],[[5],[1,'default']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,8]])
Z(z[26])
Z(z[0])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[26])
Z(z[0])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([3,'data-v-5d24bca2'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-d5f1bb46 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/common/commonList.wxml','./components/common/loadmore.wxml','./components/common/noThing.wxml','./components/common/uploadImgs.wxml','./components/home/homeData.wxml','./components/home/homeInfo.wxml','./components/home/homeListItem.wxml','./components/home/otherLogin.wxml','./components/index/indexList/index-list.wxml','./components/index/swiperTab/swiper-tab.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/msg/msgList.wxml','./components/news/hotCate.wxml','./components/news/newsNavBar.wxml','./components/news/topicList.wxml','./components/topicDetail/topicInfo.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-nav-bar/uni-nav-bar.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-status-bar/uni-status-bar.wxml','./components/userChat/userChatList.wxml','./pages/addInput/addInput.wxml','./pages/demo/demo.wxml','./pages/detail/detail.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/news/news.wxml','./pages/paper/paper.wxml','./pages/search/search.wxml','./pages/topicDetail/topicDetail.wxml','./pages/topicNav/topicNav.wxml','./pages/userChat/userChat.wxml','./pages/userList/userList.wxml','./pages/userSet/userSet.wxml','./pages/userSetEmail/userSetEmail.wxml','./pages/userSetRepassword/userSetRepassword.wxml','./pages/userSetUserinfo/userSetUserinfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var aL=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,4,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(r,aL)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oP=_v()
_(r,oP)
if(_oz(z,0,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cT=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var hU=_mz(z,'uni-badge',['bind:__l',3,'class',1,'size',2,'text',3,'type',4,'vueId',5],[],e,s,gg)
_(cT,hU)
_(r,cT)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oX=_mz(z,'uni-nav-bar',['bind:__l',0,'bind:clickLeft',1,'bind:clickRight',1,'border',2,'class',3,'data-event-opts',4,'fixed',5,'statusBar',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e2,t1,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,17,e2,t1,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,12,aZ,e,s,gg,lY,'tab','index','id')
_(r,oX)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var o0=_v()
_(r,o0)
if(_oz(z,0,e,s,gg)){o0.wxVkey=1
var cAB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oBB=_n('slot')
_(cAB,oBB)
_(o0,cAB)
}
o0.wxXCkey=1
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var tEB=_n('view')
_rz(z,tEB,'class',0,e,s,gg)
var bGB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,3,e,s,gg)){oHB.wxVkey=1
var xIB=_mz(z,'uni-status-bar',['bind:__l',4,'vueId',1],[],e,s,gg)
_(oHB,xIB)
}
var oJB=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var fKB=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,11,e,s,gg)){cLB.wxVkey=1
var oNB=_mz(z,'uni-icons',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(cLB,oNB)
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,17,e,s,gg)){hMB.wxVkey=1
}
var cOB=_n('slot')
_rz(z,cOB,'name',18,e,s,gg)
_(fKB,cOB)
cLB.wxXCkey=1
cLB.wxXCkey=3
hMB.wxXCkey=1
_(oJB,fKB)
var oPB=_n('view')
_rz(z,oPB,'class',19,e,s,gg)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,20,e,s,gg)){lQB.wxVkey=1
}
var aRB=_n('slot')
_(oPB,aRB)
lQB.wxXCkey=1
_(oJB,oPB)
var tSB=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,24,e,s,gg)){eTB.wxVkey=1
var oVB=_mz(z,'uni-icons',['bind:__l',25,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(eTB,oVB)
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,30,e,s,gg)){bUB.wxVkey=1
}
var xWB=_n('slot')
_rz(z,xWB,'name',31,e,s,gg)
_(tSB,xWB)
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
_(oJB,tSB)
_(bGB,oJB)
oHB.wxXCkey=1
oHB.wxXCkey=3
_(tEB,bGB)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,32,e,s,gg)){eFB.wxVkey=1
var oXB=_v()
_(eFB,oXB)
if(_oz(z,33,e,s,gg)){oXB.wxVkey=1
var fYB=_mz(z,'uni-status-bar',['bind:__l',34,'vueId',1],[],e,s,gg)
_(oXB,fYB)
}
oXB.wxXCkey=1
oXB.wxXCkey=3
}
eFB.wxXCkey=1
eFB.wxXCkey=3
_(r,tEB)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var h1B=_v()
_(r,h1B)
if(_oz(z,0,e,s,gg)){h1B.wxVkey=1
var o2B=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var c3B=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var o4B=_n('slot')
_(c3B,o4B)
_(o2B,c3B)
_(h1B,o2B)
}
h1B.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var a6B=_n('slot')
_(r,a6B)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var b9B=_n('view')
_rz(z,b9B,'class',0,e,s,gg)
var o0B=_mz(z,'uni-nav-bar',['bind:__l',1,'bind:clickLeft',1,'bind:clickRight',2,'class',3,'data-event-opts',4,'leftIcon',5,'rightText',6,'statusBar',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(b9B,o0B)
var xAC=_mz(z,'up-load-imgs',['bind:__l',11,'bind:uploud',1,'class',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(b9B,xAC)
_(r,b9B)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var hEC=_n('view')
_rz(z,hEC,'class',0,e,s,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,1,e,s,gg)){oFC.wxVkey=1
var cGC=_mz(z,'other-login',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(oFC,cGC)
}
var oHC=_mz(z,'home-info',['bind:__l',5,'class',1,'homeInfo',2,'vueId',3],[],e,s,gg)
_(hEC,oHC)
var lIC=_mz(z,'home-data',['bind:__l',9,'class',1,'homeData',2,'vueId',3],[],e,s,gg)
_(hEC,lIC)
var aJC=_v()
_(hEC,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_mz(z,'home-list-item',['bind:__l',17,'class',1,'index',2,'item',3,'vueId',4],[],bMC,eLC,gg)
_(oNC,oPC)
return oNC
}
aJC.wxXCkey=4
_2z(z,15,tKC,e,s,gg,aJC,'item','index','index')
oFC.wxXCkey=1
oFC.wxXCkey=3
_(r,hEC)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
var hSC=_mz(z,'swiper-tab',['bind:__l',1,'bind:tabtap',1,'data-event-opts',2,'tabBars',3,'tabIndex',4,'vueId',5],[],e,s,gg)
_(cRC,hSC)
var oTC=_mz(z,'swiper',['bindchange',7,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var cUC=_v()
_(oTC,cUC)
var oVC=function(aXC,lWC,tYC,gg){
var b1C=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',16,'class',1,'data-event-opts',2],[],aXC,lWC,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,19,aXC,lWC,gg)){o2C.wxVkey=1
var o4C=_v()
_(o2C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'index-list',['bind:__l',24,'index',1,'item',2,'vueId',3],[],h7C,c6C,gg)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=4
_2z(z,22,f5C,aXC,lWC,gg,o4C,'item','idx','idx')
var x3C=_v()
_(o2C,x3C)
if(_oz(z,28,aXC,lWC,gg)){x3C.wxVkey=1
var lAD=_mz(z,'load-more',['bind:__l',29,'loadtext',1,'vueId',2],[],aXC,lWC,gg)
_(x3C,lAD)
}
x3C.wxXCkey=1
x3C.wxXCkey=3
}
else{o2C.wxVkey=2
var aBD=_mz(z,'no-thing',['bind:__l',32,'vueId',1],[],aXC,lWC,gg)
_(o2C,aBD)
}
o2C.wxXCkey=1
o2C.wxXCkey=3
o2C.wxXCkey=3
_(tYC,b1C)
return tYC
}
cUC.wxXCkey=4
_2z(z,14,oVC,e,s,gg,cUC,'items','index','index')
_(cRC,oTC)
_(r,cRC)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var bED=_mz(z,'news-nav-bar',['bind:__l',1,'bind:changeTab',1,'class',2,'data-event-opts',3,'tabBars',4,'tabIndex',5,'vueId',6],[],e,s,gg)
_(eDD,bED)
var oFD=_mz(z,'swiper',['bindchange',8,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var xGD=_v()
_(oFD,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'common-list',['bind:__l',17,'class',1,'index',2,'item',3,'vueId',4],[],cJD,fID,gg)
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=4
_2z(z,15,oHD,e,s,gg,xGD,'item','index','id')
var oND=_mz(z,'scroll-view',['scrollY',-1,'class',22],[],e,s,gg)
var lOD=_mz(z,'hot-cate',['bind:__l',23,'class',1,'hotCate',2,'vueId',3],[],e,s,gg)
_(oND,lOD)
var aPD=_v()
_(oND,aPD)
var tQD=function(bSD,eRD,oTD,gg){
var oVD=_mz(z,'topic-list',['bind:__l',31,'class',1,'index',2,'item',3,'vueId',4],[],bSD,eRD,gg)
_(oTD,oVD)
return oTD
}
aPD.wxXCkey=4
_2z(z,29,tQD,e,s,gg,aPD,'item','index','index')
_(oFD,oND)
_(eDD,oFD)
_(r,eDD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var cXD=_n('view')
var hYD=_v()
_(cXD,hYD)
if(_oz(z,0,e,s,gg)){hYD.wxVkey=1
var oZD=_v()
_(hYD,oZD)
var c1D=function(l3D,o2D,a4D,gg){
var e6D=_mz(z,'msg-list',['bind:__l',5,'index',1,'item',2,'vueId',3],[],l3D,o2D,gg)
_(a4D,e6D)
return a4D
}
oZD.wxXCkey=4
_2z(z,3,c1D,e,s,gg,oZD,'item','index','index')
}
else{hYD.wxVkey=2
var b7D=_mz(z,'no-thing',['bind:__l',9,'vueId',1],[],e,s,gg)
_(hYD,b7D)
}
var o8D=_mz(z,'uni-popup',['bind:__l',11,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(cXD,o8D)
hYD.wxXCkey=1
hYD.wxXCkey=3
hYD.wxXCkey=3
_(r,cXD)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var fAE=_n('view')
_rz(z,fAE,'class',0,e,s,gg)
var hCE=_mz(z,'topic-info',['bind:__l',1,'class',1,'item',2,'vueId',3],[],e,s,gg)
_(fAE,hCE)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,5,e,s,gg)){cBE.wxVkey=1
var oDE=_v()
_(cBE,oDE)
var cEE=function(lGE,oFE,aHE,gg){
var eJE=_mz(z,'common-list',['bind:__l',10,'class',1,'index',2,'item',3,'vueId',4],[],lGE,oFE,gg)
_(aHE,eJE)
return aHE
}
oDE.wxXCkey=4
_2z(z,8,cEE,e,s,gg,oDE,'item','index','index')
}
else{cBE.wxVkey=2
}
var bKE=_mz(z,'load-more',['bind:__l',15,'class',1,'loadtext',2,'vueId',3],[],e,s,gg)
_(fAE,bKE)
cBE.wxXCkey=1
cBE.wxXCkey=3
_(r,fAE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var xME=_n('view')
_rz(z,xME,'class',0,e,s,gg)
var oNE=_mz(z,'swiper-tab',['bind:__l',1,'bind:tabtap',1,'data-event-opts',2,'tabBars',3,'tabIndex',4,'vueId',5],[],e,s,gg)
_(xME,oNE)
var fOE=_mz(z,'swiper',['bindchange',7,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var cPE=_v()
_(fOE,cPE)
var hQE=function(cSE,oRE,oTE,gg){
var aVE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',16,'class',1,'data-event-opts',2],[],cSE,oRE,gg)
var tWE=_v()
_(aVE,tWE)
var eXE=function(oZE,bYE,x1E,gg){
var f3E=_mz(z,'topic-list',['bind:__l',23,'index',1,'item',2,'vueId',3],[],oZE,bYE,gg)
_(x1E,f3E)
return x1E
}
tWE.wxXCkey=4
_2z(z,21,eXE,cSE,oRE,gg,tWE,'item','idx','idx')
_(oTE,aVE)
return oTE
}
cPE.wxXCkey=4
_2z(z,14,hQE,e,s,gg,cPE,'items','index','index')
_(xME,fOE)
_(r,xME)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var h5E=_v()
_(r,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_mz(z,'user-chat-list',['bind:__l',4,'class',1,'index',2,'item',3,'vueId',4],[],o8E,c7E,gg)
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=4
_2z(z,2,o6E,e,s,gg,h5E,'item','index','index')
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var bCF=_n('view')
_rz(z,bCF,'class',0,e,s,gg)
var oDF=_v()
_(bCF,oDF)
var xEF=function(fGF,oFF,cHF,gg){
var oJF=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],fGF,oFF,gg)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,8,fGF,oFF,gg)){cKF.wxVkey=1
}
cKF.wxXCkey=1
_(cHF,oJF)
return cHF
}
oDF.wxXCkey=2
_2z(z,3,xEF,e,s,gg,oDF,'item','index','index')
var oLF=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var lMF=_v()
_(oLF,lMF)
var aNF=function(ePF,tOF,bQF,gg){
var xSF=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',18,'class',1,'data-event-opts',2],[],ePF,tOF,gg)
var oTF=_v()
_(xSF,oTF)
if(_oz(z,21,ePF,tOF,gg)){oTF.wxVkey=1
var cVF=_v()
_(oTF,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_mz(z,'uni-badge',['bind:__l',26,'class',1,'size',2,'text',3,'type',4,'vueId',5,'vueSlots',6],[],cYF,oXF,gg)
_(oZF,a2F)
return oZF
}
cVF.wxXCkey=4
_2z(z,24,hWF,ePF,tOF,gg,cVF,'item','idx','idx')
var fUF=_v()
_(oTF,fUF)
if(_oz(z,33,ePF,tOF,gg)){fUF.wxVkey=1
var t3F=_mz(z,'load-more',['bind:__l',34,'class',1,'loadtext',2,'vueId',3],[],ePF,tOF,gg)
_(fUF,t3F)
}
fUF.wxXCkey=1
fUF.wxXCkey=3
}
else{oTF.wxVkey=2
var e4F=_mz(z,'no-thing',['bind:__l',38,'class',1,'vueId',2],[],ePF,tOF,gg)
_(oTF,e4F)
}
oTF.wxXCkey=1
oTF.wxXCkey=3
oTF.wxXCkey=3
_(bQF,xSF)
return bQF
}
lMF.wxXCkey=4
_2z(z,16,aNF,e,s,gg,lMF,'items','index','index')
_(bCF,oLF)
_(r,bCF)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var o6F=_v()
_(r,o6F)
var x7F=function(f9F,o8F,c0F,gg){
var oBG=_mz(z,'home-list-item',['bind:__l',4,'class',1,'index',2,'item',3,'vueId',4],[],f9F,o8F,gg)
_(c0F,oBG)
return c0F
}
o6F.wxXCkey=4
_2z(z,2,x7F,e,s,gg,o6F,'item','index','index')
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var aFG=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onConfirm',1,'class',1,'data-event-opts',2,'data-ref',3,'pickerValueDefault',4,'themeColor',5,'vueId',6],[],e,s,gg)
_(r,aFG)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/demo/demo","pages/search/search","pages/addInput/addInput","pages/topicNav/topicNav","pages/topicDetail/topicDetail","pages/userList/userList","pages/userChat/userChat","pages/detail/detail","pages/userSet/userSet","pages/userSetRepassword/userSetRepassword","pages/userSetEmail/userSetEmail","pages/userSetUserinfo/userSetUserinfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#B5B5B5","selectedColor":"#fee428","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","text":"糗事","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/paper/paper","text":"小纸条","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿糗事百科","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/common/commonList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/commonList.wxml']=$gwx('./components/common/commonList.wxml');

__wxAppCode__['components/common/loadmore.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/loadmore.wxml']=$gwx('./components/common/loadmore.wxml');

__wxAppCode__['components/common/noThing.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/noThing.wxml']=$gwx('./components/common/noThing.wxml');

__wxAppCode__['components/common/uploadImgs.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/common/uploadImgs.wxml']=$gwx('./components/common/uploadImgs.wxml');

__wxAppCode__['components/home/homeData.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/home/homeData.wxml']=$gwx('./components/home/homeData.wxml');

__wxAppCode__['components/home/homeInfo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/home/homeInfo.wxml']=$gwx('./components/home/homeInfo.wxml');

__wxAppCode__['components/home/homeListItem.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/home/homeListItem.wxml']=$gwx('./components/home/homeListItem.wxml');

__wxAppCode__['components/home/otherLogin.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/home/otherLogin.wxml']=$gwx('./components/home/otherLogin.wxml');

__wxAppCode__['components/index/indexList/index-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/index/indexList/index-list.wxml']=$gwx('./components/index/indexList/index-list.wxml');

__wxAppCode__['components/index/swiperTab/swiper-tab.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/index/swiperTab/swiper-tab.wxml']=$gwx('./components/index/swiperTab/swiper-tab.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/msg/msgList.json']={"usingComponents":{"uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/msg/msgList.wxml']=$gwx('./components/msg/msgList.wxml');

__wxAppCode__['components/news/hotCate.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/news/hotCate.wxml']=$gwx('./components/news/hotCate.wxml');

__wxAppCode__['components/news/newsNavBar.json']={"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"},"component":true};
__wxAppCode__['components/news/newsNavBar.wxml']=$gwx('./components/news/newsNavBar.wxml');

__wxAppCode__['components/news/topicList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/news/topicList.wxml']=$gwx('./components/news/topicList.wxml');

__wxAppCode__['components/topicDetail/topicInfo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/topicDetail/topicInfo.wxml']=$gwx('./components/topicDetail/topicInfo.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-nav-bar/uni-nav-bar.json']={"usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/userChat/userChatList.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/userChat/userChatList.wxml']=$gwx('./components/userChat/userChatList.wxml');

__wxAppCode__['pages/addInput/addInput.json']={"titleNView":false,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","up-load-imgs":"/components/common/uploadImgs","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/addInput/addInput.wxml']=$gwx('./pages/addInput/addInput.wxml');

__wxAppCode__['pages/demo/demo.json']={"navigationBarTitleText":"demo","usingComponents":{}};
__wxAppCode__['pages/demo/demo.wxml']=$gwx('./pages/demo/demo.wxml');

__wxAppCode__['pages/detail/detail.json']={"navigationBarTitleText":"内容详情页","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/home/home.json']={"navigationBarTitleText":"我的","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{"home-list-item":"/components/home/homeListItem","home-info":"/components/home/homeInfo","home-data":"/components/home/homeData","other-login":"/components/home/otherLogin"}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"color":"#ff9619","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}],"searchInput":{"align":"center","autoFocus":false,"borderRadius":"4upx","backgroundColor":"#f7f7f7","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":true}},"usingComponents":{"index-list":"/components/index/indexList/index-list","swiper-tab":"/components/index/swiperTab/swiper-tab","load-more":"/components/common/loadmore","no-thing":"/components/common/noThing"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/news/news.json']={"titleNView":false,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","common-list":"/components/common/commonList","news-nav-bar":"/components/news/newsNavBar","no-thing":"/components/common/noThing","hot-cate":"/components/news/hotCate","topic-list":"/components/news/topicList"}};
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/paper/paper.json']={"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"left","fontSize":"20px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"20px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"msg-list":"/components/msg/msgList","no-thing":"/components/common/noThing","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/paper/paper.wxml']=$gwx('./pages/paper/paper.wxml');

__wxAppCode__['pages/search/search.json']={"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}],"searchInput":{"align":"left","autoFocus":false,"borderRadius":"4upx","backgroundColor":"#f7f7f7","placeholder":"搜索糗事","placeholderColor":"#ccc","disabled":false}},"usingComponents":{}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/topicDetail/topicDetail.json']={"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]},"usingComponents":{"topic-info":"/components/topicDetail/topicInfo","common-list":"/components/common/commonList","load-more":"/components/common/loadmore"}};
__wxAppCode__['pages/topicDetail/topicDetail.wxml']=$gwx('./pages/topicDetail/topicDetail.wxml');

__wxAppCode__['pages/topicNav/topicNav.json']={"navigationBarTitleText":"热门分类","usingComponents":{"topic-list":"/components/news/topicList","swiper-tab":"/components/index/swiperTab/swiper-tab","load-more":"/components/common/loadmore","no-thing":"/components/common/noThing"}};
__wxAppCode__['pages/topicNav/topicNav.wxml']=$gwx('./pages/topicNav/topicNav.wxml');

__wxAppCode__['pages/userChat/userChat.json']={"bounce":"none","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"user-chat-list":"/components/userChat/userChatList"}};
__wxAppCode__['pages/userChat/userChat.wxml']=$gwx('./pages/userChat/userChat.wxml');

__wxAppCode__['pages/userList/userList.json']={"animationType":"slide-in-left","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#f5f4f2","borderRadius":"4px","placeholder":"搜索好友","placeholderColor":"#666666","disabled":true},"buttons":[{"float":"right","fontSize":"15px","color":"#333333","text":"取消","colorPressed":"#007AFF"}]},"usingComponents":{"load-more":"/components/common/loadmore","no-thing":"/components/common/noThing","uni-badge":"/components/uni-badge/uni-badge"}};
__wxAppCode__['pages/userList/userList.wxml']=$gwx('./pages/userList/userList.wxml');

__wxAppCode__['pages/userSet/userSet.json']={"navigationBarTitleText":"设置","usingComponents":{"home-list-item":"/components/home/homeListItem"}};
__wxAppCode__['pages/userSet/userSet.wxml']=$gwx('./pages/userSet/userSet.wxml');

__wxAppCode__['pages/userSetEmail/userSetEmail.json']={"navigationBarTitleText":"修改邮箱","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/userSetEmail/userSetEmail.wxml']=$gwx('./pages/userSetEmail/userSetEmail.wxml');

__wxAppCode__['pages/userSetRepassword/userSetRepassword.json']={"navigationBarTitleText":"修改密码","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/userSetRepassword/userSetRepassword.wxml']=$gwx('./pages/userSetRepassword/userSetRepassword.wxml');

__wxAppCode__['pages/userSetUserinfo/userSetUserinfo.json']={"navigationBarTitleText":"编辑资料","scrollIndicator":"none","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/userSetUserinfo/userSetUserinfo.wxml']=$gwx('./pages/userSetUserinfo/userSetUserinfo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0c1b":function(n,e,t){"use strict";t.r(e);var o=t("6373"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a},"0f34":function(n,e,t){},"30a8":function(n,e,t){"use strict";(function(n){t("b59d"),t("921b");var e=u(t("66fd")),o=u(t("7358"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var a=new e.default(r({},o.default));n(a).$mount()}).call(this,t("6e42")["createApp"])},"436b":function(n,e,t){"use strict";var o=t("0f34"),u=t.n(o);u.a},6373:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:8"))},onHide:function(){console.log(n("App Hide"," at App.vue:12"))}};e.default=t}).call(this,t("0de9")["default"])},7358:function(n,e,t){"use strict";t.r(e);var o=t("0c1b");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("436b");var r,c,a=t("2877"),f=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=f.exports}},[["30a8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var t, r, m = e[0], c = e[1], p = e[2], a = 0, u = []; a < m.length; a++) {
      r = m[a], s[r] && u.push(s[r][0]), s[r] = 0;
    }

    for (t in c) {
      Object.prototype.hasOwnProperty.call(c, t) && (n[t] = c[t]);
    }

    l && l(e);

    while (u.length) {
      u.shift()();
    }

    return i.push.apply(i, p || []), o();
  }

  function o() {
    for (var n, e = 0; e < i.length; e++) {
      for (var o = i[e], t = !0, r = 1; r < o.length; r++) {
        var m = o[r];
        0 !== s[m] && (t = !1);
      }

      t && (i.splice(e--, 1), n = c(c.s = o[0]));
    }

    return n;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      i = [];

  function m(n) {
    return c.p + "" + n + ".js";
  }

  function c(e) {
    if (t[e]) return t[e].exports;
    var o = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(o.exports, o, o.exports, c), o.l = !0, o.exports;
  }

  c.e = function (n) {
    var e = [],
        o = {
      "components/common/loadmore": 1,
      "components/common/noThing": 1,
      "components/index/indexList/index-list": 1,
      "components/index/swiperTab/swiper-tab": 1,
      "components/common/commonList": 1,
      "components/news/newsNavBar": 1,
      "components/uni-nav-bar/uni-nav-bar": 1,
      "components/uni-popup/uni-popup": 1,
      "components/home/homeListItem": 1,
      "components/home/homeData": 1,
      "components/home/homeInfo": 1,
      "components/home/otherLogin": 1,
      "components/common/uploadImgs": 1,
      "components/topicDetail/topicInfo": 1,
      "components/uni-badge/uni-badge": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/uni-icons/uni-icons": 1,
      "components/uni-status-bar/uni-status-bar": 1
    };
    r[n] ? e.push(r[n]) : 0 !== r[n] && o[n] && e.push(r[n] = new Promise(function (e, o) {
      for (var t = ({
        "components/common/loadmore": "components/common/loadmore",
        "components/common/noThing": "components/common/noThing",
        "components/index/indexList/index-list": "components/index/indexList/index-list",
        "components/index/swiperTab/swiper-tab": "components/index/swiperTab/swiper-tab",
        "components/common/commonList": "components/common/commonList",
        "components/news/hotCate": "components/news/hotCate",
        "components/news/newsNavBar": "components/news/newsNavBar",
        "components/news/topicList": "components/news/topicList",
        "components/uni-nav-bar/uni-nav-bar": "components/uni-nav-bar/uni-nav-bar",
        "components/msg/msgList": "components/msg/msgList",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/home/homeListItem": "components/home/homeListItem",
        "components/home/homeData": "components/home/homeData",
        "components/home/homeInfo": "components/home/homeInfo",
        "components/home/otherLogin": "components/home/otherLogin",
        "components/common/uploadImgs": "components/common/uploadImgs",
        "components/topicDetail/topicInfo": "components/topicDetail/topicInfo",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge",
        "components/userChat/userChatList": "components/userChat/userChatList",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/uni-status-bar/uni-status-bar": "components/uni-status-bar/uni-status-bar"
      }[n] || n) + ".wxss", s = c.p + t, i = document.getElementsByTagName("link"), m = 0; m < i.length; m++) {
        var p = i[m],
            a = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (a === t || a === s)) return e();
      }

      var u = document.getElementsByTagName("style");

      for (m = 0; m < u.length; m++) {
        p = u[m], a = p.getAttribute("data-href");
        if (a === t || a === s) return e();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = e, l.onerror = function (e) {
        var t = e && e.target && e.target.src || s,
            i = new Error("Loading CSS chunk " + n + " failed.\n(" + t + ")");
        i.request = t, delete r[n], l.parentNode.removeChild(l), o(i);
      }, l.href = s;
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(l);
    }).then(function () {
      r[n] = 0;
    }));
    var t = s[n];
    if (0 !== t) if (t) e.push(t[2]);else {
      var i = new Promise(function (e, o) {
        t = s[n] = [e, o];
      });
      e.push(t[2] = i);
      var p,
          a = document.createElement("script");
      a.charset = "utf-8", a.timeout = 120, c.nc && a.setAttribute("nonce", c.nc), a.src = m(n), p = function p(e) {
        a.onerror = a.onload = null, clearTimeout(u);
        var o = s[n];

        if (0 !== o) {
          if (o) {
            var t = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src,
                i = new Error("Loading chunk " + n + " failed.\n(" + t + ": " + r + ")");
            i.type = t, i.request = r, o[1](i);
          }

          s[n] = void 0;
        }
      };
      var u = setTimeout(function () {
        p({
          type: "timeout",
          target: a
        });
      }, 12e4);
      a.onerror = a.onload = p, document.head.appendChild(a);
    }
    return Promise.all(e);
  }, c.m = n, c.c = t, c.d = function (n, e, o) {
    c.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    });
  }, c.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, c.t = function (n, e) {
    if (1 & e && (n = c(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (c.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var t in n) {
      c.d(o, t, function (e) {
        return n[e];
      }.bind(null, t));
    }
    return o;
  }, c.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return c.d(e, "a", e), e;
  }, c.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, c.p = "/", c.oe = function (n) {
    throw console.error(n), n;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = p.push.bind(p);
  p.push = e, p = p.slice();

  for (var u = 0; u < p.length; u++) {
    e(p[u]);
  }

  var l = a;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"05cf":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={getHoroscope:function(l){var e=["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","摩羯"];l=new Date(l);var a=l.getMonth()+1,u=l.getDate(),t=a-(u-14<"865778999988".charAt(a));return e[t]+"座"},sumAge:function(l){var e=new Date(l.replace(/-/g,"/")),a=new Date,u=a.getTime()-e.getTime(),t=Math.floor(u/864e5),v=u%864e5,n=Math.floor(v/36e5),r=v%36e5,b=(Math.floor(r/6e4),r%6e4);Math.round(b/1e3);return t+"天 "+n+"小时 "},getChatTime:function(l,e){if(l=l.toString().length<13?1e3*l:l,e=e.toString().length<13?1e3*e:e,(parseInt(l)-parseInt(e))/1e3>300)return this.gettime(l)},gettime:function(l){l=l.toString().length<13?1e3*l:l;var e=(new Date).getTime(),a=(e-parseInt(l))/1e3;return a<43200?this.dateFormat(new Date(l),"{A} {t}:{ii}"):a<518400?this.dateFormat(new Date(l),"{Mon}月{DD}日 {A} {t}:{ii}"):this.dateFormat(new Date(l),"{Y}-{MM}-{DD} {A} {t}:{ii}")},parseNumber:function(l){return l<10?"0"+l:l},dateFormat:function(l,e){var a={},u=/\{([^}]+)\}/,t=["一","二","三","四","五","六","七","八","九","十","十一","十二"];a["Y"]=l.getFullYear(),a["M"]=l.getMonth()+1,a["MM"]=this.parseNumber(a["M"]),a["Mon"]=t[a["M"]-1],a["D"]=l.getDate(),a["DD"]=this.parseNumber(a["D"]),a["h"]=l.getHours(),a["hh"]=this.parseNumber(a["h"]),a["t"]=a["h"]>12?a["h"]-12:a["h"],a["tt"]=this.parseNumber(a["t"]),a["A"]=a["h"]>12?"下午":"上午",a["i"]=l.getMinutes(),a["ii"]=this.parseNumber(a["i"]),a["s"]=l.getSeconds(),a["ss"]=this.parseNumber(a["s"]);while(u.test(e))e=e.replace(u,a[RegExp.$1]);return e}},t={gettime:u};e.default=t},"0de9":function(l,e,a){"use strict";function u(l){var e=Object.prototype.toString.call(l);return e.substring(8,e.length-1)}function t(){for(var l=arguments.length,e=new Array(l),a=0;a<l;a++)e[a]=arguments[a];var t=e.map(function(l){var e=Object.prototype.toString.call(l);if("[object object]"===e.toLowerCase())try{l="---BEGIN:JSON---"+JSON.stringify(l)+"---END:JSON---"}catch(t){l="[object object]"}else if(null===l)l="---NULL---";else if(void 0===l)l="---UNDEFINED---";else{var a=u(l).toUpperCase();l="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+l+"---END:"+a+"---":String(l)}return l}),v="";if(t.length>1){var n=t.pop();v=t.join("---COMMA---"),0===n.indexOf(" at ")?v+=n:v+="---COMMA---"+n}else v=t[0];return v}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t},"17ec":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],t=u;e.default=t},"24b1":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],t=u;e.default=t},"26f5":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={pages:{"pages/index/index":{scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{color:"#ff9619",colorPressed:"#BBBBBB",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""},{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}],searchInput:{align:"center",autoFocus:!1,borderRadius:"4upx",backgroundColor:"#f7f7f7",placeholder:"搜索糗事",placeholderColor:"#ccc",disabled:!0}}},"pages/news/news":{titleNView:!1},"pages/paper/paper":{navigationBarTitleText:"消息列表",enablePullDownRefresh:!0,titleNView:{buttons:[{color:"#333333",colorPressed:"#FD597C",float:"left",fontSize:"20px",fontSrc:"/static/font/icon.ttf",text:""},{color:"#333333",colorPressed:"#FD597C",float:"right",fontSize:"20px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/home/home":{navigationBarTitleText:"我的",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}},"pages/demo/demo":{navigationBarTitleText:"demo"},"pages/search/search":{scrollIndicator:"none",bounce:"none",titleNView:{autoBackButton:!1,buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"16px",text:"取消"}],searchInput:{align:"left",autoFocus:!1,borderRadius:"4upx",backgroundColor:"#f7f7f7",placeholder:"搜索糗事",placeholderColor:"#ccc",disabled:!1}}},"pages/addInput/addInput":{titleNView:!1},"pages/topicNav/topicNav":{navigationBarTitleText:"热门分类"},"pages/topicDetail/topicDetail":{titleNView:{type:"transparent",buttons:[{type:"menu"}]}},"pages/userList/userList":{animationType:"slide-in-left",titleNView:{autoBackButton:!1,searchInput:{align:"left",backgroundColor:"#f5f4f2",borderRadius:"4px",placeholder:"搜索好友",placeholderColor:"#666666",disabled:!0},buttons:[{float:"right",fontSize:"15px",color:"#333333",text:"取消",colorPressed:"#007AFF"}]}},"pages/userChat/userChat":{bounce:"none",titleNView:{buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/detail/detail":{navigationBarTitleText:"内容详情页",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}},"pages/userSet/userSet":{navigationBarTitleText:"设置"},"pages/userSetRepassword/userSetRepassword":{navigationBarTitleText:"修改密码",scrollIndicator:"none"},"pages/userSetEmail/userSetEmail":{navigationBarTitleText:"修改邮箱",scrollIndicator:"none"},"pages/userSetUserinfo/userSetUserinfo":{navigationBarTitleText:"编辑资料",scrollIndicator:"none"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"仿糗事百科",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"}};e.default=u},2877:function(l,e,a){"use strict";function u(l,e,a,u,t,v,n,r){var b,o="function"===typeof l?l.options:l;if(e&&(o.render=e,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),v&&(o._scopeId="data-v-"+v),n?(b=function(l){l=l||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,l||"undefined"===typeof __VUE_SSR_CONTEXT__||(l=__VUE_SSR_CONTEXT__),t&&t.call(this,l),l&&l._registeredComponents&&l._registeredComponents.add(n)},o._ssrRegister=b):t&&(b=r?function(){t.call(this,this.$root.$options.shadowRoot)}:t),b)if(o.functional){o._injectStyles=b;var i=o.render;o.render=function(l,e){return b.call(e),i(l,e)}}else{var s=o.beforeCreate;o.beforeCreate=s?[].concat(s,b):[b]}return{exports:l,options:o}}a.d(e,"a",function(){return u})},"5e0e":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={appid:"__UNI__6ED32D2"};e.default=u},"66fd":function(l,e,a){"use strict";a.r(e),function(l){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(l){return void 0===l||null===l}function t(l){return void 0!==l&&null!==l}function v(l){return!0===l}function n(l){return!1===l}function r(l){return"string"===typeof l||"number"===typeof l||"symbol"===typeof l||"boolean"===typeof l}function b(l){return null!==l&&"object"===typeof l}var o=Object.prototype.toString;function i(l){return"[object Object]"===o.call(l)}function s(l){return"[object RegExp]"===o.call(l)}function c(l){var e=parseFloat(String(l));return e>=0&&Math.floor(e)===e&&isFinite(l)}function f(l){return t(l)&&"function"===typeof l.then&&"function"===typeof l.catch}function p(l){return null==l?"":Array.isArray(l)||i(l)&&l.toString===o?JSON.stringify(l,null,2):String(l)}function h(l){var e=parseFloat(l);return isNaN(e)?l:e}function d(l,e){for(var a=Object.create(null),u=l.split(","),t=0;t<u.length;t++)a[u[t]]=!0;return e?function(l){return a[l.toLowerCase()]}:function(l){return a[l]}}d("slot,component",!0);var y=d("key,ref,slot,slot-scope,is");function g(l,e){if(l.length){var a=l.indexOf(e);if(a>-1)return l.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(l,e){return _.call(l,e)}function w(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var $=/-(\w)/g,O=w(function(l){return l.replace($,function(l,e){return e?e.toUpperCase():""})}),S=w(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}),A=/\B([A-Z])/g,x=w(function(l){return l.replace(A,"-$1").toLowerCase()});function k(l,e){function a(a){var u=arguments.length;return u?u>1?l.apply(e,arguments):l.call(e,a):l.call(e)}return a._length=l.length,a}function j(l,e){return l.bind(e)}var D=Function.prototype.bind?j:k;function E(l,e){e=e||0;var a=l.length-e,u=new Array(a);while(a--)u[a]=l[a+e];return u}function P(l,e){for(var a in e)l[a]=e[a];return l}function T(l){for(var e={},a=0;a<l.length;a++)l[a]&&P(e,l[a]);return e}function I(l,e,a){}var C=function(l,e,a){return!1},N=function(l){return l};function R(l,e){if(l===e)return!0;var a=b(l),u=b(e);if(!a||!u)return!a&&!u&&String(l)===String(e);try{var t=Array.isArray(l),v=Array.isArray(e);if(t&&v)return l.length===e.length&&l.every(function(l,a){return R(l,e[a])});if(l instanceof Date&&e instanceof Date)return l.getTime()===e.getTime();if(t||v)return!1;var n=Object.keys(l),r=Object.keys(e);return n.length===r.length&&n.every(function(a){return R(l[a],e[a])})}catch(o){return!1}}function B(l,e){for(var a=0;a<l.length;a++)if(R(l[a],e))return a;return-1}function M(l){var e=!1;return function(){e||(e=!0,l.apply(this,arguments))}}var F=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:N,mustUseProp:C,async:!0,_lifecycleHooks:L},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(l){var e=(l+"").charCodeAt(0);return 36===e||95===e}function H(l,e,a,u){Object.defineProperty(l,e,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var z=new RegExp("[^"+U.source+".$_\\d]");function J(l){if(!z.test(l)){var e=l.split(".");return function(l){for(var a=0;a<e.length;a++){if(!l)return;l=l[e[a]]}return l}}}var G,W="__proto__"in{},K="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ll=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),el=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),al=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ul)}catch(lt){}var tl=function(){return void 0===G&&(G=!K&&!Y&&"undefined"!==typeof l&&(l["process"]&&"server"===l["process"].env.VUE_ENV)),G},vl=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function nl(l){return"function"===typeof l&&/native code/.test(l.toString())}var rl,bl="undefined"!==typeof Symbol&&nl(Symbol)&&"undefined"!==typeof Reflect&&nl(Reflect.ownKeys);rl="undefined"!==typeof Set&&nl(Set)?Set:function(){function l(){this.set=Object.create(null)}return l.prototype.has=function(l){return!0===this.set[l]},l.prototype.add=function(l){this.set[l]=!0},l.prototype.clear=function(){this.set=Object.create(null)},l}();var ol=I,il=0,sl=function(){this.id=il++,this.subs=[]};function cl(l){sl.SharedObject.targetStack.push(l),sl.SharedObject.target=l}function fl(){sl.SharedObject.targetStack.pop(),sl.SharedObject.target=sl.SharedObject.targetStack[sl.SharedObject.targetStack.length-1]}sl.prototype.addSub=function(l){this.subs.push(l)},sl.prototype.removeSub=function(l){g(this.subs,l)},sl.prototype.depend=function(){sl.SharedObject.target&&sl.SharedObject.target.addDep(this)},sl.prototype.notify=function(){var l=this.subs.slice();for(var e=0,a=l.length;e<a;e++)l[e].update()},sl.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},sl.SharedObject.target=null,sl.SharedObject.targetStack=[];var pl=function(l,e,a,u,t,v,n,r){this.tag=l,this.data=e,this.children=a,this.text=u,this.elm=t,this.ns=void 0,this.context=v,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=n,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},hl={child:{configurable:!0}};hl.child.get=function(){return this.componentInstance},Object.defineProperties(pl.prototype,hl);var dl=function(l){void 0===l&&(l="");var e=new pl;return e.text=l,e.isComment=!0,e};function yl(l){return new pl(void 0,void 0,void 0,String(l))}function gl(l){var e=new pl(l.tag,l.data,l.children&&l.children.slice(),l.text,l.elm,l.context,l.componentOptions,l.asyncFactory);return e.ns=l.ns,e.isStatic=l.isStatic,e.key=l.key,e.isComment=l.isComment,e.fnContext=l.fnContext,e.fnOptions=l.fnOptions,e.fnScopeId=l.fnScopeId,e.asyncMeta=l.asyncMeta,e.isCloned=!0,e}var _l=Array.prototype,ml=Object.create(_l),wl=["push","pop","shift","unshift","splice","sort","reverse"];wl.forEach(function(l){var e=_l[l];H(ml,l,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var t,v=e.apply(this,a),n=this.__ob__;switch(l){case"push":case"unshift":t=a;break;case"splice":t=a.slice(2);break}return t&&n.observeArray(t),n.dep.notify(),v})});var $l=Object.getOwnPropertyNames(ml),Ol=!0;function Sl(l){Ol=l}var Al=function(l){this.value=l,this.dep=new sl,this.vmCount=0,H(l,"__ob__",this),Array.isArray(l)?(W?l.push!==l.__proto__.push?kl(l,ml,$l):xl(l,ml):kl(l,ml,$l),this.observeArray(l)):this.walk(l)};function xl(l,e){l.__proto__=e}function kl(l,e,a){for(var u=0,t=a.length;u<t;u++){var v=a[u];H(l,v,e[v])}}function jl(l,e){var a;if(b(l)&&!(l instanceof pl))return m(l,"__ob__")&&l.__ob__ instanceof Al?a=l.__ob__:Ol&&!tl()&&(Array.isArray(l)||i(l))&&Object.isExtensible(l)&&!l._isVue&&(a=new Al(l)),e&&a&&a.vmCount++,a}function Dl(l,e,a,u,t){var v=new sl,n=Object.getOwnPropertyDescriptor(l,e);if(!n||!1!==n.configurable){var r=n&&n.get,b=n&&n.set;r&&!b||2!==arguments.length||(a=l[e]);var o=!t&&jl(a);Object.defineProperty(l,e,{enumerable:!0,configurable:!0,get:function(){var e=r?r.call(l):a;return sl.SharedObject.target&&(v.depend(),o&&(o.dep.depend(),Array.isArray(e)&&Tl(e))),e},set:function(e){var u=r?r.call(l):a;e===u||e!==e&&u!==u||r&&!b||(b?b.call(l,e):a=e,o=!t&&jl(e),v.notify())}})}}function El(l,e,a){if(Array.isArray(l)&&c(e))return l.length=Math.max(l.length,e),l.splice(e,1,a),a;if(e in l&&!(e in Object.prototype))return l[e]=a,a;var u=l.__ob__;return l._isVue||u&&u.vmCount?a:u?(Dl(u.value,e,a),u.dep.notify(),a):(l[e]=a,a)}function Pl(l,e){if(Array.isArray(l)&&c(e))l.splice(e,1);else{var a=l.__ob__;l._isVue||a&&a.vmCount||m(l,e)&&(delete l[e],a&&a.dep.notify())}}function Tl(l){for(var e=void 0,a=0,u=l.length;a<u;a++)e=l[a],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tl(e)}Al.prototype.walk=function(l){for(var e=Object.keys(l),a=0;a<e.length;a++)Dl(l,e[a])},Al.prototype.observeArray=function(l){for(var e=0,a=l.length;e<a;e++)jl(l[e])};var Il=V.optionMergeStrategies;function Cl(l,e){if(!e)return l;for(var a,u,t,v=bl?Reflect.ownKeys(e):Object.keys(e),n=0;n<v.length;n++)a=v[n],"__ob__"!==a&&(u=l[a],t=e[a],m(l,a)?u!==t&&i(u)&&i(t)&&Cl(u,t):El(l,a,t));return l}function Nl(l,e,a){return a?function(){var u="function"===typeof e?e.call(a,a):e,t="function"===typeof l?l.call(a,a):l;return u?Cl(u,t):t}:e?l?function(){return Cl("function"===typeof e?e.call(this,this):e,"function"===typeof l?l.call(this,this):l)}:e:l}function Rl(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?Bl(a):a}function Bl(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function Ml(l,e,a,u){var t=Object.create(l||null);return e?P(t,e):t}Il.data=function(l,e,a){return a?Nl(l,e,a):e&&"function"!==typeof e?l:Nl(l,e)},L.forEach(function(l){Il[l]=Rl}),F.forEach(function(l){Il[l+"s"]=Ml}),Il.watch=function(l,e,a,u){if(l===al&&(l=void 0),e===al&&(e=void 0),!e)return Object.create(l||null);if(!l)return e;var t={};for(var v in P(t,l),e){var n=t[v],r=e[v];n&&!Array.isArray(n)&&(n=[n]),t[v]=n?n.concat(r):Array.isArray(r)?r:[r]}return t},Il.props=Il.methods=Il.inject=Il.computed=function(l,e,a,u){if(!l)return e;var t=Object.create(null);return P(t,l),e&&P(t,e),t},Il.provide=Nl;var Fl=function(l,e){return void 0===e?l:e};function Ll(l,e){var a=l.props;if(a){var u,t,v,n={};if(Array.isArray(a)){u=a.length;while(u--)t=a[u],"string"===typeof t&&(v=O(t),n[v]={type:null})}else if(i(a))for(var r in a)t=a[r],v=O(r),n[v]=i(t)?t:{type:t};else 0;l.props=n}}function Vl(l,e){var a=l.inject;if(a){var u=l.inject={};if(Array.isArray(a))for(var t=0;t<a.length;t++)u[a[t]]={from:a[t]};else if(i(a))for(var v in a){var n=a[v];u[v]=i(n)?P({from:v},n):{from:n}}else 0}}function Ul(l){var e=l.directives;if(e)for(var a in e){var u=e[a];"function"===typeof u&&(e[a]={bind:u,update:u})}}function ql(l,e,a){if("function"===typeof e&&(e=e.options),Ll(e,a),Vl(e,a),Ul(e),!e._base&&(e.extends&&(l=ql(l,e.extends,a)),e.mixins))for(var u=0,t=e.mixins.length;u<t;u++)l=ql(l,e.mixins[u],a);var v,n={};for(v in l)r(v);for(v in e)m(l,v)||r(v);function r(u){var t=Il[u]||Fl;n[u]=t(l[u],e[u],a,u)}return n}function Hl(l,e,a,u){if("string"===typeof a){var t=l[e];if(m(t,a))return t[a];var v=O(a);if(m(t,v))return t[v];var n=S(v);if(m(t,n))return t[n];var r=t[a]||t[v]||t[n];return r}}function zl(l,e,a,u){var t=e[l],v=!m(a,l),n=a[l],r=Kl(Boolean,t.type);if(r>-1)if(v&&!m(t,"default"))n=!1;else if(""===n||n===x(l)){var b=Kl(String,t.type);(b<0||r<b)&&(n=!0)}if(void 0===n){n=Jl(u,t,l);var o=Ol;Sl(!0),jl(n),Sl(o)}return n}function Jl(l,e,a){if(m(e,"default")){var u=e.default;return l&&l.$options.propsData&&void 0===l.$options.propsData[a]&&void 0!==l._props[a]?l._props[a]:"function"===typeof u&&"Function"!==Gl(e.type)?u.call(l):u}}function Gl(l){var e=l&&l.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wl(l,e){return Gl(l)===Gl(e)}function Kl(l,e){if(!Array.isArray(e))return Wl(e,l)?0:-1;for(var a=0,u=e.length;a<u;a++)if(Wl(e[a],l))return a;return-1}function Yl(l,e,a){cl();try{if(e){var u=e;while(u=u.$parent){var t=u.$options.errorCaptured;if(t)for(var v=0;v<t.length;v++)try{var n=!1===t[v].call(u,l,e,a);if(n)return}catch(lt){Zl(lt,u,"errorCaptured hook")}}}Zl(l,e,a)}finally{fl()}}function Xl(l,e,a,u,t){var v;try{v=a?l.apply(e,a):l.call(e),v&&!v._isVue&&f(v)&&!v._handled&&(v.catch(function(l){return Yl(l,u,t+" (Promise/async)")}),v._handled=!0)}catch(lt){Yl(lt,u,t)}return v}function Zl(l,e,a){if(V.errorHandler)try{return V.errorHandler.call(null,l,e,a)}catch(lt){lt!==l&&Ql(lt,null,"config.errorHandler")}Ql(l,e,a)}function Ql(l,e,a){if(!K&&!Y||"undefined"===typeof console)throw l;console.error(l)}var le,ee=[],ae=!1;function ue(){ae=!1;var l=ee.slice(0);ee.length=0;for(var e=0;e<l.length;e++)l[e]()}if("undefined"!==typeof Promise&&nl(Promise)){var te=Promise.resolve();le=function(){te.then(ue),el&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!nl(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())le="undefined"!==typeof setImmediate&&nl(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var ve=1,ne=new MutationObserver(ue),re=document.createTextNode(String(ve));ne.observe(re,{characterData:!0}),le=function(){ve=(ve+1)%2,re.data=String(ve)}}function be(l,e){var a;if(ee.push(function(){if(l)try{l.call(e)}catch(lt){Yl(lt,e,"nextTick")}else a&&a(e)}),ae||(ae=!0,le()),!l&&"undefined"!==typeof Promise)return new Promise(function(l){a=l})}var oe=new rl;function ie(l){se(l,oe),oe.clear()}function se(l,e){var a,u,t=Array.isArray(l);if(!(!t&&!b(l)||Object.isFrozen(l)||l instanceof pl)){if(l.__ob__){var v=l.__ob__.dep.id;if(e.has(v))return;e.add(v)}if(t){a=l.length;while(a--)se(l[a],e)}else{u=Object.keys(l),a=u.length;while(a--)se(l[u[a]],e)}}}var ce=w(function(l){var e="&"===l.charAt(0);l=e?l.slice(1):l;var a="~"===l.charAt(0);l=a?l.slice(1):l;var u="!"===l.charAt(0);return l=u?l.slice(1):l,{name:l,once:a,capture:u,passive:e}});function fe(l,e){function a(){var l=arguments,u=a.fns;if(!Array.isArray(u))return Xl(u,null,arguments,e,"v-on handler");for(var t=u.slice(),v=0;v<t.length;v++)Xl(t[v],null,l,e,"v-on handler")}return a.fns=l,a}function pe(l,e,a,t,n,r){var b,o,i,s;for(b in l)o=l[b],i=e[b],s=ce(b),u(o)||(u(i)?(u(o.fns)&&(o=l[b]=fe(o,r)),v(s.once)&&(o=l[b]=n(s.name,o,s.capture)),a(s.name,o,s.capture,s.passive,s.params)):o!==i&&(i.fns=o,l[b]=i));for(b in e)u(l[b])&&(s=ce(b),t(s.name,e[b],s.capture))}function he(l,e,a){var v=e.options.props;if(!u(v)){var n={},r=l.attrs,b=l.props;if(t(r)||t(b))for(var o in v){var i=x(o);de(n,b,o,i,!0)||de(n,r,o,i,!1)}return n}}function de(l,e,a,u,v){if(t(e)){if(m(e,a))return l[a]=e[a],v||delete e[a],!0;if(m(e,u))return l[a]=e[u],v||delete e[u],!0}return!1}function ye(l){for(var e=0;e<l.length;e++)if(Array.isArray(l[e]))return Array.prototype.concat.apply([],l);return l}function ge(l){return r(l)?[yl(l)]:Array.isArray(l)?me(l):void 0}function _e(l){return t(l)&&t(l.text)&&n(l.isComment)}function me(l,e){var a,n,b,o,i=[];for(a=0;a<l.length;a++)n=l[a],u(n)||"boolean"===typeof n||(b=i.length-1,o=i[b],Array.isArray(n)?n.length>0&&(n=me(n,(e||"")+"_"+a),_e(n[0])&&_e(o)&&(i[b]=yl(o.text+n[0].text),n.shift()),i.push.apply(i,n)):r(n)?_e(o)?i[b]=yl(o.text+n):""!==n&&i.push(yl(n)):_e(n)&&_e(o)?i[b]=yl(o.text+n.text):(v(l._isVList)&&t(n.tag)&&u(n.key)&&t(e)&&(n.key="__vlist"+e+"_"+a+"__"),i.push(n)));return i}function we(l){var e=l.$options.provide;e&&(l._provided="function"===typeof e?e.call(l):e)}function $e(l){var e=Oe(l.$options.inject,l);e&&(Sl(!1),Object.keys(e).forEach(function(a){Dl(l,a,e[a])}),Sl(!0))}function Oe(l,e){if(l){for(var a=Object.create(null),u=bl?Reflect.ownKeys(l):Object.keys(l),t=0;t<u.length;t++){var v=u[t];if("__ob__"!==v){var n=l[v].from,r=e;while(r){if(r._provided&&m(r._provided,n)){a[v]=r._provided[n];break}r=r.$parent}if(!r)if("default"in l[v]){var b=l[v].default;a[v]="function"===typeof b?b.call(e):b}else 0}}return a}}function Se(l,e){if(!l||!l.length)return{};for(var a={},u=0,t=l.length;u<t;u++){var v=l[u],n=v.data;if(n&&n.attrs&&n.attrs.slot&&delete n.attrs.slot,v.context!==e&&v.fnContext!==e||!n||null==n.slot)v.asyncMeta&&v.asyncMeta.data&&"page"===v.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(v):(a.default||(a.default=[])).push(v);else{var r=n.slot,b=a[r]||(a[r]=[]);"template"===v.tag?b.push.apply(b,v.children||[]):b.push(v)}}for(var o in a)a[o].every(Ae)&&delete a[o];return a}function Ae(l){return l.isComment&&!l.asyncFactory||" "===l.text}function xe(l,e,u){var t,v=Object.keys(e).length>0,n=l?!!l.$stable:!v,r=l&&l.$key;if(l){if(l._normalized)return l._normalized;if(n&&u&&u!==a&&r===u.$key&&!v&&!u.$hasNormal)return u;for(var b in t={},l)l[b]&&"$"!==b[0]&&(t[b]=ke(e,b,l[b]))}else t={};for(var o in e)o in t||(t[o]=je(e,o));return l&&Object.isExtensible(l)&&(l._normalized=t),H(t,"$stable",n),H(t,"$key",r),H(t,"$hasNormal",v),t}function ke(l,e,a){var u=function(){var l=arguments.length?a.apply(null,arguments):a({});return l=l&&"object"===typeof l&&!Array.isArray(l)?[l]:ge(l),l&&(0===l.length||1===l.length&&l[0].isComment)?void 0:l};return a.proxy&&Object.defineProperty(l,e,{get:u,enumerable:!0,configurable:!0}),u}function je(l,e){return function(){return l[e]}}function De(l,e){var a,u,v,n,r;if(Array.isArray(l)||"string"===typeof l)for(a=new Array(l.length),u=0,v=l.length;u<v;u++)a[u]=e(l[u],u);else if("number"===typeof l)for(a=new Array(l),u=0;u<l;u++)a[u]=e(u+1,u);else if(b(l))if(bl&&l[Symbol.iterator]){a=[];var o=l[Symbol.iterator](),i=o.next();while(!i.done)a.push(e(i.value,a.length)),i=o.next()}else for(n=Object.keys(l),a=new Array(n.length),u=0,v=n.length;u<v;u++)r=n[u],a[u]=e(l[r],r,u);return t(a)||(a=[]),a._isVList=!0,a}function Ee(l,e,a,u){var t,v=this.$scopedSlots[l];v?(a=a||{},u&&(a=P(P({},u),a)),t=v(a)||e):t=this.$slots[l]||e;var n=a&&a.slot;return n?this.$createElement("template",{slot:n},t):t}function Pe(l){return Hl(this.$options,"filters",l,!0)||N}function Te(l,e){return Array.isArray(l)?-1===l.indexOf(e):l!==e}function Ie(l,e,a,u,t){var v=V.keyCodes[e]||a;return t&&u&&!V.keyCodes[e]?Te(t,u):v?Te(v,l):u?x(u)!==e:void 0}function Ce(l,e,a,u,t){if(a)if(b(a)){var v;Array.isArray(a)&&(a=T(a));var n=function(n){if("class"===n||"style"===n||y(n))v=l;else{var r=l.attrs&&l.attrs.type;v=u||V.mustUseProp(e,r,n)?l.domProps||(l.domProps={}):l.attrs||(l.attrs={})}var b=O(n),o=x(n);if(!(b in v)&&!(o in v)&&(v[n]=a[n],t)){var i=l.on||(l.on={});i["update:"+n]=function(l){a[n]=l}}};for(var r in a)n(r)}else;return l}function Ne(l,e){var a=this._staticTrees||(this._staticTrees=[]),u=a[l];return u&&!e?u:(u=a[l]=this.$options.staticRenderFns[l].call(this._renderProxy,null,this),Be(u,"__static__"+l,!1),u)}function Re(l,e,a){return Be(l,"__once__"+e+(a?"_"+a:""),!0),l}function Be(l,e,a){if(Array.isArray(l))for(var u=0;u<l.length;u++)l[u]&&"string"!==typeof l[u]&&Me(l[u],e+"_"+u,a);else Me(l,e,a)}function Me(l,e,a){l.isStatic=!0,l.key=e,l.isOnce=a}function Fe(l,e){if(e)if(i(e)){var a=l.on=l.on?P({},l.on):{};for(var u in e){var t=a[u],v=e[u];a[u]=t?[].concat(t,v):v}}else;return l}function Le(l,e,a,u){e=e||{$stable:!a};for(var t=0;t<l.length;t++){var v=l[t];Array.isArray(v)?Le(v,e,a):v&&(v.proxy&&(v.fn.proxy=!0),e[v.key]=v.fn)}return u&&(e.$key=u),e}function Ve(l,e){for(var a=0;a<e.length;a+=2){var u=e[a];"string"===typeof u&&u&&(l[e[a]]=e[a+1])}return l}function Ue(l,e){return"string"===typeof l?e+l:l}function qe(l){l._o=Re,l._n=h,l._s=p,l._l=De,l._t=Ee,l._q=R,l._i=B,l._m=Ne,l._f=Pe,l._k=Ie,l._b=Ce,l._v=yl,l._e=dl,l._u=Le,l._g=Fe,l._d=Ve,l._p=Ue}function He(l,e,u,t,n){var r,b=this,o=n.options;m(t,"_uid")?(r=Object.create(t),r._original=t):(r=t,t=t._original);var i=v(o._compiled),s=!i;this.data=l,this.props=e,this.children=u,this.parent=t,this.listeners=l.on||a,this.injections=Oe(o.inject,t),this.slots=function(){return b.$slots||xe(l.scopedSlots,b.$slots=Se(u,t)),b.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return xe(l.scopedSlots,this.slots())}}),i&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=xe(l.scopedSlots,this.$slots)),o._scopeId?this._c=function(l,e,a,u){var v=ua(r,l,e,a,u,s);return v&&!Array.isArray(v)&&(v.fnScopeId=o._scopeId,v.fnContext=t),v}:this._c=function(l,e,a,u){return ua(r,l,e,a,u,s)}}function ze(l,e,u,v,n){var r=l.options,b={},o=r.props;if(t(o))for(var i in o)b[i]=zl(i,o,e||a);else t(u.attrs)&&Ge(b,u.attrs),t(u.props)&&Ge(b,u.props);var s=new He(u,b,n,v,l),c=r.render.call(null,s._c,s);if(c instanceof pl)return Je(c,u,s.parent,r,s);if(Array.isArray(c)){for(var f=ge(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Je(f[h],u,s.parent,r,s);return p}}function Je(l,e,a,u,t){var v=gl(l);return v.fnContext=a,v.fnOptions=u,e.slot&&((v.data||(v.data={})).slot=e.slot),v}function Ge(l,e){for(var a in e)l[O(a)]=e[a]}qe(He.prototype);var We={init:function(l,e){if(l.componentInstance&&!l.componentInstance._isDestroyed&&l.data.keepAlive){var a=l;We.prepatch(a,a)}else{var u=l.componentInstance=Xe(l,$a);u.$mount(e?l.elm:void 0,e)}},prepatch:function(l,e){var a=e.componentOptions,u=e.componentInstance=l.componentInstance;xa(u,a.propsData,a.listeners,e,a.children)},insert:function(l){var e=l.context,a=l.componentInstance;a._isMounted||(a._isMounted=!0,Ea(a,"mounted")),l.data.keepAlive&&(e._isMounted?Ua(a):ja(a,!0))},destroy:function(l){var e=l.componentInstance;e._isDestroyed||(l.data.keepAlive?Da(e,!0):e.$destroy())}},Ke=Object.keys(We);function Ye(l,e,a,n,r){if(!u(l)){var o=a.$options._base;if(b(l)&&(l=o.extend(l)),"function"===typeof l){var i;if(u(l.cid)&&(i=l,l=fa(i,o),void 0===l))return ca(i,e,a,n,r);e=e||{},su(l),t(e.model)&&la(l.options,e);var s=he(e,l,r);if(v(l.options.functional))return ze(l,s,e,a,n);var c=e.on;if(e.on=e.nativeOn,v(l.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var p=l.options.name||r,h=new pl("vue-component-"+l.cid+(p?"-"+p:""),e,void 0,void 0,void 0,a,{Ctor:l,propsData:s,listeners:c,tag:r,children:n},i);return h}}}function Xe(l,e){var a={_isComponent:!0,_parentVnode:l,parent:e},u=l.data.inlineTemplate;return t(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new l.componentOptions.Ctor(a)}function Ze(l){for(var e=l.hook||(l.hook={}),a=0;a<Ke.length;a++){var u=Ke[a],t=e[u],v=We[u];t===v||t&&t._merged||(e[u]=t?Qe(v,t):v)}}function Qe(l,e){var a=function(a,u){l(a,u),e(a,u)};return a._merged=!0,a}function la(l,e){var a=l.model&&l.model.prop||"value",u=l.model&&l.model.event||"input";(e.attrs||(e.attrs={}))[a]=e.model.value;var v=e.on||(e.on={}),n=v[u],r=e.model.callback;t(n)?(Array.isArray(n)?-1===n.indexOf(r):n!==r)&&(v[u]=[r].concat(n)):v[u]=r}var ea=1,aa=2;function ua(l,e,a,u,t,n){return(Array.isArray(a)||r(a))&&(t=u,u=a,a=void 0),v(n)&&(t=aa),ta(l,e,a,u,t)}function ta(l,e,a,u,v){if(t(a)&&t(a.__ob__))return dl();if(t(a)&&t(a.is)&&(e=a.is),!e)return dl();var n,r,b;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),v===aa?u=ge(u):v===ea&&(u=ye(u)),"string"===typeof e)?(r=l.$vnode&&l.$vnode.ns||V.getTagNamespace(e),n=V.isReservedTag(e)?new pl(V.parsePlatformTagName(e),a,u,void 0,void 0,l):a&&a.pre||!t(b=Hl(l.$options,"components",e))?new pl(e,a,u,void 0,void 0,l):Ye(b,a,l,u,e)):n=Ye(e,a,l,u);return Array.isArray(n)?n:t(n)?(t(r)&&va(n,r),t(a)&&na(a),n):dl()}function va(l,e,a){if(l.ns=e,"foreignObject"===l.tag&&(e=void 0,a=!0),t(l.children))for(var n=0,r=l.children.length;n<r;n++){var b=l.children[n];t(b.tag)&&(u(b.ns)||v(a)&&"svg"!==b.tag)&&va(b,e,a)}}function na(l){b(l.style)&&ie(l.style),b(l.class)&&ie(l.class)}function ra(l){l._vnode=null,l._staticTrees=null;var e=l.$options,u=l.$vnode=e._parentVnode,t=u&&u.context;l.$slots=Se(e._renderChildren,t),l.$scopedSlots=a,l._c=function(e,a,u,t){return ua(l,e,a,u,t,!1)},l.$createElement=function(e,a,u,t){return ua(l,e,a,u,t,!0)};var v=u&&u.data;Dl(l,"$attrs",v&&v.attrs||a,null,!0),Dl(l,"$listeners",e._parentListeners||a,null,!0)}var ba,oa=null;function ia(l){qe(l.prototype),l.prototype.$nextTick=function(l){return be(l,this)},l.prototype._render=function(){var l,e=this,a=e.$options,u=a.render,t=a._parentVnode;t&&(e.$scopedSlots=xe(t.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=t;try{oa=e,l=u.call(e._renderProxy,e.$createElement)}catch(lt){Yl(lt,e,"render"),l=e._vnode}finally{oa=null}return Array.isArray(l)&&1===l.length&&(l=l[0]),l instanceof pl||(l=dl()),l.parent=t,l}}function sa(l,e){return(l.__esModule||bl&&"Module"===l[Symbol.toStringTag])&&(l=l.default),b(l)?e.extend(l):l}function ca(l,e,a,u,t){var v=dl();return v.asyncFactory=l,v.asyncMeta={data:e,context:a,children:u,tag:t},v}function fa(l,e){if(v(l.error)&&t(l.errorComp))return l.errorComp;if(t(l.resolved))return l.resolved;var a=oa;if(a&&t(l.owners)&&-1===l.owners.indexOf(a)&&l.owners.push(a),v(l.loading)&&t(l.loadingComp))return l.loadingComp;if(a&&!t(l.owners)){var n=l.owners=[a],r=!0,o=null,i=null;a.$on("hook:destroyed",function(){return g(n,a)});var s=function(l){for(var e=0,a=n.length;e<a;e++)n[e].$forceUpdate();l&&(n.length=0,null!==o&&(clearTimeout(o),o=null),null!==i&&(clearTimeout(i),i=null))},c=M(function(a){l.resolved=sa(a,e),r?n.length=0:s(!0)}),p=M(function(e){t(l.errorComp)&&(l.error=!0,s(!0))}),h=l(c,p);return b(h)&&(f(h)?u(l.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),t(h.error)&&(l.errorComp=sa(h.error,e)),t(h.loading)&&(l.loadingComp=sa(h.loading,e),0===h.delay?l.loading=!0:o=setTimeout(function(){o=null,u(l.resolved)&&u(l.error)&&(l.loading=!0,s(!1))},h.delay||200)),t(h.timeout)&&(i=setTimeout(function(){i=null,u(l.resolved)&&p(null)},h.timeout)))),r=!1,l.loading?l.loadingComp:l.resolved}}function pa(l){return l.isComment&&l.asyncFactory}function ha(l){if(Array.isArray(l))for(var e=0;e<l.length;e++){var a=l[e];if(t(a)&&(t(a.componentOptions)||pa(a)))return a}}function da(l){l._events=Object.create(null),l._hasHookEvent=!1;var e=l.$options._parentListeners;e&&ma(l,e)}function ya(l,e){ba.$on(l,e)}function ga(l,e){ba.$off(l,e)}function _a(l,e){var a=ba;return function u(){var t=e.apply(null,arguments);null!==t&&a.$off(l,u)}}function ma(l,e,a){ba=l,pe(e,a||{},ya,ga,_a,l),ba=void 0}function wa(l){var e=/^hook:/;l.prototype.$on=function(l,a){var u=this;if(Array.isArray(l))for(var t=0,v=l.length;t<v;t++)u.$on(l[t],a);else(u._events[l]||(u._events[l]=[])).push(a),e.test(l)&&(u._hasHookEvent=!0);return u},l.prototype.$once=function(l,e){var a=this;function u(){a.$off(l,u),e.apply(a,arguments)}return u.fn=e,a.$on(l,u),a},l.prototype.$off=function(l,e){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(l)){for(var u=0,t=l.length;u<t;u++)a.$off(l[u],e);return a}var v,n=a._events[l];if(!n)return a;if(!e)return a._events[l]=null,a;var r=n.length;while(r--)if(v=n[r],v===e||v.fn===e){n.splice(r,1);break}return a},l.prototype.$emit=function(l){var e=this,a=e._events[l];if(a){a=a.length>1?E(a):a;for(var u=E(arguments,1),t='event handler for "'+l+'"',v=0,n=a.length;v<n;v++)Xl(a[v],e,u,e,t)}return e}}var $a=null;function Oa(l){var e=$a;return $a=l,function(){$a=e}}function Sa(l){var e=l.$options,a=e.parent;if(a&&!e.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(l)}l.$parent=a,l.$root=a?a.$root:l,l.$children=[],l.$refs={},l._watcher=null,l._inactive=null,l._directInactive=!1,l._isMounted=!1,l._isDestroyed=!1,l._isBeingDestroyed=!1}function Aa(l){l.prototype._update=function(l,e){var a=this,u=a.$el,t=a._vnode,v=Oa(a);a._vnode=l,a.$el=t?a.__patch__(t,l):a.__patch__(a.$el,l,e,!1),v(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},l.prototype.$forceUpdate=function(){var l=this;l._watcher&&l._watcher.update()},l.prototype.$destroy=function(){var l=this;if(!l._isBeingDestroyed){Ea(l,"beforeDestroy"),l._isBeingDestroyed=!0;var e=l.$parent;!e||e._isBeingDestroyed||l.$options.abstract||g(e.$children,l),l._watcher&&l._watcher.teardown();var a=l._watchers.length;while(a--)l._watchers[a].teardown();l._data.__ob__&&l._data.__ob__.vmCount--,l._isDestroyed=!0,l.__patch__(l._vnode,null),Ea(l,"destroyed"),l.$off(),l.$el&&(l.$el.__vue__=null),l.$vnode&&(l.$vnode.parent=null)}}}function xa(l,e,u,t,v){var n=t.data.scopedSlots,r=l.$scopedSlots,b=!!(n&&!n.$stable||r!==a&&!r.$stable||n&&l.$scopedSlots.$key!==n.$key),o=!!(v||l.$options._renderChildren||b);if(l.$options._parentVnode=t,l.$vnode=t,l._vnode&&(l._vnode.parent=t),l.$options._renderChildren=v,l.$attrs=t.data.attrs||a,l.$listeners=u||a,e&&l.$options.props){Sl(!1);for(var i=l._props,s=l.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=l.$options.props;i[f]=zl(f,p,e,l)}Sl(!0),l.$options.propsData=e}u=u||a;var h=l.$options._parentListeners;l.$options._parentListeners=u,ma(l,u,h),o&&(l.$slots=Se(v,t.context),l.$forceUpdate())}function ka(l){while(l&&(l=l.$parent))if(l._inactive)return!0;return!1}function ja(l,e){if(e){if(l._directInactive=!1,ka(l))return}else if(l._directInactive)return;if(l._inactive||null===l._inactive){l._inactive=!1;for(var a=0;a<l.$children.length;a++)ja(l.$children[a]);Ea(l,"activated")}}function Da(l,e){if((!e||(l._directInactive=!0,!ka(l)))&&!l._inactive){l._inactive=!0;for(var a=0;a<l.$children.length;a++)Da(l.$children[a]);Ea(l,"deactivated")}}function Ea(l,e){cl();var a=l.$options[e],u=e+" hook";if(a)for(var t=0,v=a.length;t<v;t++)Xl(a[t],l,null,l,u);l._hasHookEvent&&l.$emit("hook:"+e),fl()}var Pa=[],Ta=[],Ia={},Ca=!1,Na=!1,Ra=0;function Ba(){Ra=Pa.length=Ta.length=0,Ia={},Ca=Na=!1}var Ma=Date.now;if(K&&!Q){var Fa=window.performance;Fa&&"function"===typeof Fa.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return Fa.now()})}function La(){var l,e;for(Ma(),Na=!0,Pa.sort(function(l,e){return l.id-e.id}),Ra=0;Ra<Pa.length;Ra++)l=Pa[Ra],l.before&&l.before(),e=l.id,Ia[e]=null,l.run();var a=Ta.slice(),u=Pa.slice();Ba(),qa(a),Va(u),vl&&V.devtools&&vl.emit("flush")}function Va(l){var e=l.length;while(e--){var a=l[e],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&Ea(u,"updated")}}function Ua(l){l._inactive=!1,Ta.push(l)}function qa(l){for(var e=0;e<l.length;e++)l[e]._inactive=!0,ja(l[e],!0)}function Ha(l){var e=l.id;if(null==Ia[e]){if(Ia[e]=!0,Na){var a=Pa.length-1;while(a>Ra&&Pa[a].id>l.id)a--;Pa.splice(a+1,0,l)}else Pa.push(l);Ca||(Ca=!0,be(La))}}var za=0,Ja=function(l,e,a,u,t){this.vm=l,t&&(l._watcher=this),l._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new rl,this.newDepIds=new rl,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Ja.prototype.get=function(){var l;cl(this);var e=this.vm;try{l=this.getter.call(e,e)}catch(lt){if(!this.user)throw lt;Yl(lt,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ie(l),fl(),this.cleanupDeps()}return l},Ja.prototype.addDep=function(l){var e=l.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(l),this.depIds.has(e)||l.addSub(this))},Ja.prototype.cleanupDeps=function(){var l=this.deps.length;while(l--){var e=this.deps[l];this.newDepIds.has(e.id)||e.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ja.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ha(this)},Ja.prototype.run=function(){if(this.active){var l=this.get();if(l!==this.value||b(l)||this.deep){var e=this.value;if(this.value=l,this.user)try{this.cb.call(this.vm,l,e)}catch(lt){Yl(lt,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,l,e)}}},Ja.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ja.prototype.depend=function(){var l=this.deps.length;while(l--)this.deps[l].depend()},Ja.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var l=this.deps.length;while(l--)this.deps[l].removeSub(this);this.active=!1}};var Ga={enumerable:!0,configurable:!0,get:I,set:I};function Wa(l,e,a){Ga.get=function(){return this[e][a]},Ga.set=function(l){this[e][a]=l},Object.defineProperty(l,a,Ga)}function Ka(l){l._watchers=[];var e=l.$options;e.props&&Ya(l,e.props),e.methods&&tu(l,e.methods),e.data?Xa(l):jl(l._data={},!0),e.computed&&lu(l,e.computed),e.watch&&e.watch!==al&&vu(l,e.watch)}function Ya(l,e){var a=l.$options.propsData||{},u=l._props={},t=l.$options._propKeys=[],v=!l.$parent;v||Sl(!1);var n=function(v){t.push(v);var n=zl(v,e,a,l);Dl(u,v,n),v in l||Wa(l,"_props",v)};for(var r in e)n(r);Sl(!0)}function Xa(l){var e=l.$options.data;e=l._data="function"===typeof e?Za(e,l):e||{},i(e)||(e={});var a=Object.keys(e),u=l.$options.props,t=(l.$options.methods,a.length);while(t--){var v=a[t];0,u&&m(u,v)||q(v)||Wa(l,"_data",v)}jl(e,!0)}function Za(l,e){cl();try{return l.call(e,e)}catch(lt){return Yl(lt,e,"data()"),{}}finally{fl()}}var Qa={lazy:!0};function lu(l,e){var a=l._computedWatchers=Object.create(null),u=tl();for(var t in e){var v=e[t],n="function"===typeof v?v:v.get;0,u||(a[t]=new Ja(l,n||I,I,Qa)),t in l||eu(l,t,v)}}function eu(l,e,a){var u=!tl();"function"===typeof a?(Ga.get=u?au(e):uu(a),Ga.set=I):(Ga.get=a.get?u&&!1!==a.cache?au(e):uu(a.get):I,Ga.set=a.set||I),Object.defineProperty(l,e,Ga)}function au(l){return function(){var e=this._computedWatchers&&this._computedWatchers[l];if(e)return e.dirty&&e.evaluate(),sl.SharedObject.target&&e.depend(),e.value}}function uu(l){return function(){return l.call(this,this)}}function tu(l,e){l.$options.props;for(var a in e)l[a]="function"!==typeof e[a]?I:D(e[a],l)}function vu(l,e){for(var a in e){var u=e[a];if(Array.isArray(u))for(var t=0;t<u.length;t++)nu(l,a,u[t]);else nu(l,a,u)}}function nu(l,e,a,u){return i(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=l[a]),l.$watch(e,a,u)}function ru(l){var e={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(l.prototype,"$data",e),Object.defineProperty(l.prototype,"$props",a),l.prototype.$set=El,l.prototype.$delete=Pl,l.prototype.$watch=function(l,e,a){var u=this;if(i(e))return nu(u,l,e,a);a=a||{},a.user=!0;var t=new Ja(u,l,e,a);if(a.immediate)try{e.call(u,t.value)}catch(v){Yl(v,u,'callback for immediate watcher "'+t.expression+'"')}return function(){t.teardown()}}}var bu=0;function ou(l){l.prototype._init=function(l){var e=this;e._uid=bu++,e._isVue=!0,l&&l._isComponent?iu(e,l):e.$options=ql(su(e.constructor),l||{},e),e._renderProxy=e,e._self=e,Sa(e),da(e),ra(e),Ea(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Ka(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&Ea(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function iu(l,e){var a=l.$options=Object.create(l.constructor.options),u=e._parentVnode;a.parent=e.parent,a._parentVnode=u;var t=u.componentOptions;a.propsData=t.propsData,a._parentListeners=t.listeners,a._renderChildren=t.children,a._componentTag=t.tag,e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns)}function su(l){var e=l.options;if(l.super){var a=su(l.super),u=l.superOptions;if(a!==u){l.superOptions=a;var t=cu(l);t&&P(l.extendOptions,t),e=l.options=ql(a,l.extendOptions),e.name&&(e.components[e.name]=l)}}return e}function cu(l){var e,a=l.options,u=l.sealedOptions;for(var t in a)a[t]!==u[t]&&(e||(e={}),e[t]=a[t]);return e}function fu(l){this._init(l)}function pu(l){l.use=function(l){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(l)>-1)return this;var a=E(arguments,1);return a.unshift(this),"function"===typeof l.install?l.install.apply(l,a):"function"===typeof l&&l.apply(null,a),e.push(l),this}}function hu(l){l.mixin=function(l){return this.options=ql(this.options,l),this}}function du(l){l.cid=0;var e=1;l.extend=function(l){l=l||{};var a=this,u=a.cid,t=l._Ctor||(l._Ctor={});if(t[u])return t[u];var v=l.name||a.options.name;var n=function(l){this._init(l)};return n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.cid=e++,n.options=ql(a.options,l),n["super"]=a,n.options.props&&yu(n),n.options.computed&&gu(n),n.extend=a.extend,n.mixin=a.mixin,n.use=a.use,F.forEach(function(l){n[l]=a[l]}),v&&(n.options.components[v]=n),n.superOptions=a.options,n.extendOptions=l,n.sealedOptions=P({},n.options),t[u]=n,n}}function yu(l){var e=l.options.props;for(var a in e)Wa(l.prototype,"_props",a)}function gu(l){var e=l.options.computed;for(var a in e)eu(l.prototype,a,e[a])}function _u(l){F.forEach(function(e){l[e]=function(l,a){return a?("component"===e&&i(a)&&(a.name=a.name||l,a=this.options._base.extend(a)),"directive"===e&&"function"===typeof a&&(a={bind:a,update:a}),this.options[e+"s"][l]=a,a):this.options[e+"s"][l]}})}function mu(l){return l&&(l.Ctor.options.name||l.tag)}function wu(l,e){return Array.isArray(l)?l.indexOf(e)>-1:"string"===typeof l?l.split(",").indexOf(e)>-1:!!s(l)&&l.test(e)}function $u(l,e){var a=l.cache,u=l.keys,t=l._vnode;for(var v in a){var n=a[v];if(n){var r=mu(n.componentOptions);r&&!e(r)&&Ou(a,v,u,t)}}}function Ou(l,e,a,u){var t=l[e];!t||u&&t.tag===u.tag||t.componentInstance.$destroy(),l[e]=null,g(a,e)}ou(fu),ru(fu),wa(fu),Aa(fu),ia(fu);var Su=[String,RegExp,Array],Au={name:"keep-alive",abstract:!0,props:{include:Su,exclude:Su,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var l in this.cache)Ou(this.cache,l,this.keys)},mounted:function(){var l=this;this.$watch("include",function(e){$u(l,function(l){return wu(e,l)})}),this.$watch("exclude",function(e){$u(l,function(l){return!wu(e,l)})})},render:function(){var l=this.$slots.default,e=ha(l),a=e&&e.componentOptions;if(a){var u=mu(a),t=this,v=t.include,n=t.exclude;if(v&&(!u||!wu(v,u))||n&&u&&wu(n,u))return e;var r=this,b=r.cache,o=r.keys,i=null==e.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):e.key;b[i]?(e.componentInstance=b[i].componentInstance,g(o,i),o.push(i)):(b[i]=e,o.push(i),this.max&&o.length>parseInt(this.max)&&Ou(b,o[0],o,this._vnode)),e.data.keepAlive=!0}return e||l&&l[0]}},xu={KeepAlive:Au};function ku(l){var e={get:function(){return V}};Object.defineProperty(l,"config",e),l.util={warn:ol,extend:P,mergeOptions:ql,defineReactive:Dl},l.set=El,l.delete=Pl,l.nextTick=be,l.observable=function(l){return jl(l),l},l.options=Object.create(null),F.forEach(function(e){l.options[e+"s"]=Object.create(null)}),l.options._base=l,P(l.options.components,xu),pu(l),hu(l),du(l),_u(l)}ku(fu),Object.defineProperty(fu.prototype,"$isServer",{get:tl}),Object.defineProperty(fu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(fu,"FunctionalRenderContext",{value:He}),fu.version="2.6.10";var ju="[object Array]",Du="[object Object]";function Eu(l,e){var a={};return Pu(l,e),Tu(l,e,"",a),a}function Pu(l,e){if(l!==e){var a=Cu(l),u=Cu(e);if(a==Du&&u==Du){if(Object.keys(l).length>=Object.keys(e).length)for(var t in e){var v=l[t];void 0===v?l[t]=null:Pu(v,e[t])}}else a==ju&&u==ju&&l.length>=e.length&&e.forEach(function(e,a){Pu(l[a],e)})}}function Tu(l,e,a,u){if(l!==e){var t=Cu(l),v=Cu(e);if(t==Du)if(v!=Du||Object.keys(l).length<Object.keys(e).length)Iu(u,a,l);else{var n=function(t){var v=l[t],n=e[t],r=Cu(v),b=Cu(n);if(r!=ju&&r!=Du)v!=e[t]&&Iu(u,(""==a?"":a+".")+t,v);else if(r==ju)b!=ju?Iu(u,(""==a?"":a+".")+t,v):v.length<n.length?Iu(u,(""==a?"":a+".")+t,v):v.forEach(function(l,e){Tu(l,n[e],(""==a?"":a+".")+t+"["+e+"]",u)});else if(r==Du)if(b!=Du||Object.keys(v).length<Object.keys(n).length)Iu(u,(""==a?"":a+".")+t,v);else for(var o in v)Tu(v[o],n[o],(""==a?"":a+".")+t+"."+o,u)};for(var r in l)n(r)}else t==ju?v!=ju?Iu(u,a,l):l.length<e.length?Iu(u,a,l):l.forEach(function(l,t){Tu(l,e[t],a+"["+t+"]",u)}):Iu(u,a,l)}}function Iu(l,e,a){l[e]=a}function Cu(l){return Object.prototype.toString.call(l)}function Nu(l){if(l.__next_tick_callbacks&&l.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=l.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+l._uid+"]:flushCallbacks["+l.__next_tick_callbacks.length+"]")}var a=l.__next_tick_callbacks.slice(0);l.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Ru(l){return Pa.find(function(e){return l._watcher===e})}function Bu(l,e){if(!l.__next_tick_pending&&!Ru(l)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=l.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+l._uid+"]:nextVueTick")}return be(e,l)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var u=l.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+l._uid+"]:nextMPTick")}var t;if(l.__next_tick_callbacks||(l.__next_tick_callbacks=[]),l.__next_tick_callbacks.push(function(){if(e)try{e.call(l)}catch(lt){Yl(lt,l,"nextTick")}else t&&t(l)}),!e&&"undefined"!==typeof Promise)return new Promise(function(l){t=l})}function Mu(l){var e=Object.create(null),a=[].concat(Object.keys(l._data||{}),Object.keys(l._computedWatchers||{}));return a.reduce(function(e,a){return e[a]=l[a],e},e),Object.assign(e,l.$mp.data||{}),Array.isArray(l.$options.behaviors)&&-1!==l.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=l.name,e["value"]=l.value),JSON.parse(JSON.stringify(e))}var Fu=function(l,e){var a=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,t=Object.create(null);try{t=Mu(this)}catch(r){console.error(r)}t.__webviewId__=u.data.__webviewId__;var v=Object.create(null);Object.keys(t).forEach(function(l){v[l]=u.data[l]});var n=Eu(t,v);Object.keys(n).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(n)),this.__next_tick_pending=!0,u.setData(n,function(){a.__next_tick_pending=!1,Nu(a)})):Nu(this)}};function Lu(){}function Vu(l,e,a){if(!l.mpType)return l;"app"===l.mpType&&(l.$options.render=Lu),l.$options.render||(l.$options.render=Lu),"mp-toutiao"!==l.mpHost&&Ea(l,"beforeMount");var u=function(){l._update(l._render(),a)};return new Ja(l,u,I,{before:function(){l._isMounted&&!l._isDestroyed&&Ea(l,"beforeUpdate")}},!0),a=!1,l}function Uu(l,e){return t(l)||t(e)?qu(l,Hu(e)):""}function qu(l,e){return l?e?l+" "+e:l:e||""}function Hu(l){return Array.isArray(l)?zu(l):b(l)?Ju(l):"string"===typeof l?l:""}function zu(l){for(var e,a="",u=0,v=l.length;u<v;u++)t(e=Hu(l[u]))&&""!==e&&(a&&(a+=" "),a+=e);return a}function Ju(l){var e="";for(var a in l)l[a]&&(e&&(e+=" "),e+=a);return e}var Gu=w(function(l){var e={},a=/;(?![^(]*\))/g,u=/:(.+)/;return l.split(a).forEach(function(l){if(l){var a=l.split(u);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e});function Wu(l){return Array.isArray(l)?T(l):"string"===typeof l?Gu(l):l}var Ku=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yu(l,e){var a=e.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?l[u]:Yu(l[u],a.slice(1).join("."))}function Xu(l){l.config.errorHandler=function(l){console.error(l)};var e=l.prototype.$emit;l.prototype.$emit=function(l){return this.$scope&&l&&this.$scope["triggerEvent"](l,{__args__:E(arguments,1)}),e.apply(this,arguments)},l.prototype.$nextTick=function(l){return Bu(this,l)},Ku.forEach(function(e){l.prototype[e]=function(l){if(this.$scope)return this.$scope[e](l)}}),l.prototype.__init_provide=we,l.prototype.__init_injections=$e,l.prototype.__call_hook=function(l,e){var a=this;cl();var u,t=a.$options[l],v=l+" hook";if(t)for(var n=0,r=t.length;n<r;n++)u=Xl(t[n],a,e?[e]:null,a,v);return a._hasHookEvent&&a.$emit("hook:"+l),fl(),u},l.prototype.__set_model=function(l,e,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),l||(l=this),l[e]=a},l.prototype.__set_sync=function(l,e,a){l||(l=this),l[e]=a},l.prototype.__get_orig=function(l){return i(l)&&l["$orig"]||l},l.prototype.__get_value=function(l,e){return Yu(e||this,l)},l.prototype.__get_class=function(l,e){return Uu(e,l)},l.prototype.__get_style=function(l,e){if(!l&&!e)return"";var a=Wu(l),u=e?P(e,a):a;return Object.keys(u).map(function(l){return x(l)+":"+u[l]}).join(";")},l.prototype.__map=function(l,e){var a,u,t,v,n;if(Array.isArray(l)){for(a=new Array(l.length),u=0,t=l.length;u<t;u++)a[u]=e(l[u],u);return a}if(b(l)){for(v=Object.keys(l),a=Object.create(null),u=0,t=v.length;u<t;u++)n=v[u],a[n]=e(l[n],n,u);return a}return[]}}var Zu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qu(l){var e=l.extend;l.extend=function(l){l=l||{};var a=l.methods;return a&&Object.keys(a).forEach(function(e){-1!==Zu.indexOf(e)&&(l[e]=a[e],delete a[e])}),e.call(this,l)};var a=l.config.optionMergeStrategies,u=a.created;Zu.forEach(function(l){a[l]=u}),l.prototype.__lifecycle_hooks__=Zu}fu.prototype.__patch__=Fu,fu.prototype.$mount=function(l,e){return Vu(this,l,e)},Qu(fu),Xu(fu),e["default"]=fu}.call(this,a("c8ba"))},"6d1d":function(l,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],t=u;e.default=t},"6e42":function(l,e,a){"use strict";(function(l){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=Se,e.createPage=Oe,e.default=void 0;var u=t(a("66fd"));function t(l){return l&&l.__esModule?l:{default:l}}function v(l,e){return b(l)||r(l,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(l,e){var a=[],u=!0,t=!1,v=void 0;try{for(var n,r=l[Symbol.iterator]();!(u=(n=r.next()).done);u=!0)if(a.push(n.value),e&&a.length===e)break}catch(b){t=!0,v=b}finally{try{u||null==r["return"]||r["return"]()}finally{if(t)throw v}}return a}function b(l){if(Array.isArray(l))return l}function o(l,e,a){return e in l?Object.defineProperty(l,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[e]=a,l}function i(l){return f(l)||c(l)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(l){if(Symbol.iterator in Object(l)||"[object Arguments]"===Object.prototype.toString.call(l))return Array.from(l)}function f(l){if(Array.isArray(l)){for(var e=0,a=new Array(l.length);e<l.length;e++)a[e]=l[e];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(l){return"function"===typeof l}function y(l){return"string"===typeof l}function g(l){return"[object Object]"===p.call(l)}function _(l,e){return h.call(l,e)}function m(){}function w(l){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=l(a))}}var $=/-(\w)/g,O=w(function(l){return l.replace($,function(l,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],A={},x={};function k(l,e){var a=e?l?l.concat(e):Array.isArray(e)?e:[e]:l;return a?j(a):a}function j(l){for(var e=[],a=0;a<l.length;a++)-1===e.indexOf(l[a])&&e.push(l[a]);return e}function D(l,e){var a=l.indexOf(e);-1!==a&&l.splice(a,1)}function E(l,e){Object.keys(e).forEach(function(a){-1!==S.indexOf(a)&&d(e[a])&&(l[a]=k(l[a],e[a]))})}function P(l,e){l&&e&&Object.keys(e).forEach(function(a){-1!==S.indexOf(a)&&d(e[a])&&D(l[a],e[a])})}function T(l,e){"string"===typeof l&&g(e)?E(x[l]||(x[l]={}),e):g(l)&&E(A,l)}function I(l,e){"string"===typeof l?g(e)?P(x[l],e):delete x[l]:g(l)&&P(A,l)}function C(l){return function(e){return l(e)||e}}function N(l){return!!l&&("object"===typeof l||"function"===typeof l)&&"function"===typeof l.then}function R(l,e){for(var a=!1,u=0;u<l.length;u++){var t=l[u];if(a)a=Promise.then(C(t));else{var v=t(e);if(N(v)&&(a=Promise.resolve(v)),!1===v)return{then:function(){}}}}return a||{then:function(l){return l(e)}}}function B(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(l[a])){var u=e[a];e[a]=function(e){R(l[a],e).then(function(l){return d(u)&&u(l)||l})}}}),e}function M(l,e){var a=[];Array.isArray(A.returnValue)&&a.push.apply(a,i(A.returnValue));var u=x[l];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,i(u.returnValue)),a.forEach(function(l){e=l(e)||e}),e}function F(l){var e=Object.create(null);Object.keys(A).forEach(function(l){"returnValue"!==l&&(e[l]=A[l].slice())});var a=x[l];return a&&Object.keys(a).forEach(function(l){"returnValue"!==l&&(e[l]=(e[l]||[]).concat(a[l]))}),e}function L(l,e,a){for(var u=arguments.length,t=new Array(u>3?u-3:0),v=3;v<u;v++)t[v-3]=arguments[v];var n=F(l);if(n&&Object.keys(n).length){if(Array.isArray(n.invoke)){var r=R(n.invoke,a);return r.then(function(l){return e.apply(void 0,[B(n,l)].concat(t))})}return e.apply(void 0,[B(n,a)].concat(t))}return e.apply(void 0,[a].concat(t))}var V={returnValue:function(l){return N(l)?l.then(function(l){return l[1]}).catch(function(l){return l[0]}):l}},U=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,H=/^on/;function z(l){return q.test(l)}function J(l){return U.test(l)}function G(l){return H.test(l)}function W(l){return l.then(function(l){return[null,l]}).catch(function(l){return[l]})}function K(l){return!(z(l)||J(l)||G(l))}function Y(l,e){return K(l)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return d(a.success)||d(a.fail)||d(a.complete)?M(l,L.apply(void 0,[l,e,a].concat(t))):M(l,W(new Promise(function(u,v){L.apply(void 0,[l,e,Object.assign({},a,{success:u,fail:v})].concat(t)),Promise.prototype.finally||(Promise.prototype.finally=function(l){var e=this.constructor;return this.then(function(a){return e.resolve(l()).then(function(){return a})},function(a){return e.resolve(l()).then(function(){throw a})})})})))}:e}var X=1e-4,Z=750,Q=!1,ll=0,el=0;function al(){var l=wx.getSystemInfoSync(),e=l.platform,a=l.pixelRatio,u=l.windowWidth;ll=u,el=a,Q="ios"===e}function ul(l,e){if(0===ll&&al(),l=Number(l),0===l)return 0;var a=l/Z*(e||ll);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==el&&Q?.5:1:l<0?-a:a}var tl={promiseInterceptor:V},vl=Object.freeze({upx2px:ul,interceptors:tl,addInterceptor:T,removeInterceptor:I}),nl={},rl=[],bl=[],ol=["success","fail","cancel","complete"];function il(l,e,a){return function(u){return e(cl(l,u,a))}}function sl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var v=!0===t?e:{};for(var n in d(a)&&(a=a(e,v)||{}),e)if(_(a,n)){var r=a[n];d(r)&&(r=r(e[n],e,v)),r?y(r)?v[r]=e[n]:g(r)&&(v[r.name?r.name:n]=r.value):console.warn("app-plus ".concat(l,"暂不支持").concat(n))}else-1!==ol.indexOf(n)?v[n]=il(l,e[n],u):t||(v[n]=e[n]);return v}return d(e)&&(e=il(l,e,u)),e}function cl(l,e,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(nl.returnValue)&&(e=nl.returnValue(l,e)),sl(l,e,a,{},u)}function fl(l,e){if(_(nl,l)){var a=nl[l];return a?function(e,u){var t=a;d(a)&&(t=a(e)),e=sl(l,e,t.args,t.returnValue);var v=[e];"undefined"!==typeof u&&v.push(u);var n=wx[t.name||l].apply(wx,v);return J(l)?cl(l,n,t.returnValue,z(l)):n}:function(){console.error("app-plus 暂不支持".concat(l))}}return e}var pl=Object.create(null),hl=["subscribePush","unsubscribePush","onPush","offPush","share"];function dl(l){return function(e){var a=e.fail,u=e.complete,t={errMsg:"".concat(l,":fail:暂不支持 ").concat(l," 方法")};d(a)&&a(t),d(u)&&u(t)}}hl.forEach(function(l){pl[l]=dl(l)});var yl=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return l||(l=new u.default),l};var l}();function gl(l,e,a){return l[e].apply(l,a)}function _l(){return gl(yl(),"$on",Array.prototype.slice.call(arguments))}function ml(){return gl(yl(),"$off",Array.prototype.slice.call(arguments))}function wl(){return gl(yl(),"$once",Array.prototype.slice.call(arguments))}function $l(){return gl(yl(),"$emit",Array.prototype.slice.call(arguments))}var Ol=Object.freeze({$on:_l,$off:ml,$once:wl,$emit:$l});function Sl(l){l.$processed=!0,l.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},l.id)};var e=[];if(l.onMessage=function(l){e.push(l)},l.$consumeMessage=function(l){e.forEach(function(e){return e(l)})},l.__uniapp_mask_id){var a=l.__uniapp_mask,u=plus.webview.getWebviewById(l.__uniapp_mask_id);u=u.parent()||u;var t=l.show,v=l.hide,n=l.close,r=function(){u.setStyle({mask:a})},b=function(){u.setStyle({mask:"none"})};l.show=function(){r();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return t.apply(l,a)},l.hide=function(){b();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return v.apply(l,a)},l.close=function(){b(),e=[];for(var a=arguments.length,u=new Array(a),t=0;t<a;t++)u[t]=arguments[t];return n.apply(l,u)}}}function Al(l){var e=plus.webview.getWebviewById(l);return e&&!e.$processed&&Sl(e),e}function xl(l){return"undefined"!==typeof weex?weex.requireModule(l):__requireNativePlugin__(l)}var kl=Object.freeze({requireNativePlugin:xl,getSubNVueById:Al}),jl=Page,Dl=Component,El=/:/g,Pl=w(function(l){return O(l.replace(El,"-"))});function Tl(l){if(wx.canIUse("nextTick")){var e=l.triggerEvent;l.triggerEvent=function(a){for(var u=arguments.length,t=new Array(u>1?u-1:0),v=1;v<u;v++)t[v-1]=arguments[v];return e.apply(l,[Pl(a)].concat(t))}}}function Il(l,e){var a=e[l];e[l]=a?function(){Tl(this);for(var l=arguments.length,e=new Array(l),u=0;u<l;u++)e[u]=arguments[u];return a.apply(this,e)}:function(){Tl(this)}}Page=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Il("onLoad",l),jl(l)},Component=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Il("created",l),Dl(l)};var Cl=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nl(l,e){var a=l.$mp[l.mpType];e.forEach(function(e){_(a,e)&&(l[e]=a[e])})}function Rl(l,e){if(!e)return!0;if(u.default.options&&Array.isArray(u.default.options[l]))return!0;if(e=e.default||e,d(e))return!!d(e.extendOptions[l])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[l]));if(d(e[l]))return!0;var a=e.mixins;return Array.isArray(a)?!!a.find(function(e){return Rl(l,e)}):void 0}function Bl(l,e,a){e.forEach(function(e){Rl(e,a)&&(l[e]=function(l){return this.$vm&&this.$vm.__call_hook(e,l)})})}function Ml(l,e){var a;return e=e.default||e,d(e)?(a=e,e=a.extendOptions):a=l.extend(e),[a,e]}function Fl(l,e){if(Array.isArray(e)&&e.length){var a=Object.create(null);e.forEach(function(l){a[l]=!0}),l.$scopedSlots=l.$slots=a}}function Ll(l,e){l=(l||"").split(",");var a=l.length;1===a?e._$vueId=l[0]:2===a&&(e._$vueId=l[0],e._$vuePid=l[1])}function Vl(l,e){var a=l.data||{},u=l.methods||{};if("function"===typeof a)try{a=a.call(e)}catch(t){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(t){}return g(a)||(a={}),Object.keys(u).forEach(function(l){-1!==e.__lifecycle_hooks__.indexOf(l)||_(a,l)||(a[l]=u[l])}),a}var Ul=[String,Number,Boolean,Object,Array,null];function ql(l){return function(e,a){this.$vm&&(this.$vm[l]=e)}}function Hl(l,e){var a=l["behaviors"],u=l["extends"],t=l["mixins"],v=l["props"];v||(l["props"]=v=[]);var n=[];return Array.isArray(a)&&a.forEach(function(l){n.push(l.replace("uni://","wx".concat("://"))),"uni://form-field"===l&&(Array.isArray(v)?(v.push("name"),v.push("value")):(v["name"]={type:String,default:""},v["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&n.push(e({properties:Jl(u.props,!0)})),Array.isArray(t)&&t.forEach(function(l){g(l)&&l.props&&n.push(e({properties:Jl(l.props,!0)}))}),n}function zl(l,e,a,u){return Array.isArray(e)&&1===e.length?e[0]:e}function Jl(l){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(l,e){var a=Object.create(null);l.forEach(function(l){a[l]=!0}),this.setData({$slots:a})}}),Array.isArray(l)?l.forEach(function(l){a[l]={type:null,observer:ql(l)}}):g(l)&&Object.keys(l).forEach(function(e){var u=l[e];if(g(u)){var t=u["default"];d(t)&&(t=t()),u.type=zl(e,u.type),a[e]={type:-1!==Ul.indexOf(u.type)?u.type:null,value:t,observer:ql(e)}}else{var v=zl(e,u);a[e]={type:-1!==Ul.indexOf(v)?v:null,observer:ql(e)}}}),a}function Gl(l){try{l.mp=JSON.parse(JSON.stringify(l))}catch(e){}return l.stopPropagation=m,l.preventDefault=m,l.target=l.target||{},_(l,"detail")||(l.detail={}),g(l.detail)&&(l.target=Object.assign({},l.target,l.detail)),l}function Wl(l,e){var a=l;return e.forEach(function(e){var u=e[0],t=e[2];if(u||"undefined"!==typeof t){var v=e[1],n=e[3],r=u?l.__get_value(u,a):a;Number.isInteger(r)?a=t:v?Array.isArray(r)?a=r.find(function(e){return l.__get_value(v,e)===t}):g(r)?a=Object.keys(r).find(function(e){return l.__get_value(v,r[e])===t}):console.error("v-for 暂不支持循环数据：",r):a=r[t],n&&(a=l.__get_value(n,a))}}),a}function Kl(l,e,a){var u={};return Array.isArray(e)&&e.length&&e.forEach(function(e,t){"string"===typeof e?e?"$event"===e?u["$"+t]=a:0===e.indexOf("$event.")?u["$"+t]=l.__get_value(e.replace("$event.",""),a):u["$"+t]=l.__get_value(e):u["$"+t]=l:u["$"+t]=Wl(l,e)}),u}function Yl(l){for(var e={},a=1;a<l.length;a++){var u=l[a];e[u[0]]=u[1]}return e}function Xl(l,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],t=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,n=!1;if(t&&(n=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!a.length))return n?[e]:e.detail.__args__||e.detail;var r=Kl(l,u,e),b=[];return a.forEach(function(l){"$event"===l?"__set_model"!==v||t?t&&!n?b.push(e.detail.__args__[0]):b.push(e):b.push(e.target.value):Array.isArray(l)&&"o"===l[0]?b.push(Yl(l)):"string"===typeof l&&_(r,l)?b.push(r[l]):b.push(l)}),b}var Zl="~",Ql="^";function le(l,e){return l===e||"regionchange"===e&&("begin"===l||"end"===l)}function ee(l){var e=this;l=Gl(l);var a=(l.currentTarget||l.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var t=l.type,v=[];return u.forEach(function(a){var u=a[0],n=a[1],r=u.charAt(0)===Ql;u=r?u.slice(1):u;var b=u.charAt(0)===Zl;u=b?u.slice(1):u,n&&le(t,u)&&n.forEach(function(a){var u=a[0];if(u){var t=e.$vm;t.$options.generic&&t.$parent&&t.$parent.$parent&&(t=t.$parent.$parent);var n=t[u];if(!d(n))throw new Error(" _vm.".concat(u," is not a function"));if(b){if(n.once)return;n.once=!0}v.push(n.apply(t,Xl(e.$vm,l,a[1],a[2],r,u)))}})}),"input"===t&&1===v.length&&"undefined"!==typeof v[0]?v[0]:void 0}var ae=["onShow","onHide","onError","onPageNotFound"];function ue(l,e){var a=e.mocks,t=e.initRefs;l.$options.store&&(u.default.prototype.$store=l.$options.store),u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(t(this),Nl(this,a)))}});var v={onLaunch:function(e){this.$vm||(this.$vm=l,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return v.globalData=l.$options.globalData||{},Bl(v,ae),v}var te=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ve(l,e){var a=l.$children,u=a.find(function(l){return l.$scope._$vueId===e});if(u)return u;for(var t=a.length-1;t>=0;t--)if(u=ve(a[t],e),u)return u}function ne(l){return Behavior(l)}function re(){return!!this.route}function be(l){this.triggerEvent("__l",l)}function oe(l){var e=l.$scope;Object.defineProperty(l,"$refs",{get:function(){var l={},a=e.selectAllComponents(".vue-ref");a.forEach(function(e){var a=e.dataset.ref;l[a]=e.$vm||e});var u=e.selectAllComponents(".vue-ref-in-for");return u.forEach(function(e){var a=e.dataset.ref;l[a]||(l[a]=[]),l[a].push(e.$vm||e)}),l}})}function ie(l){var e,a=l.detail||l.value,u=a.vuePid,t=a.vueOptions;u&&(e=ve(this.$vm,u)),e||(e=this.$vm),t.parent=e}function se(l){return ue(l,{mocks:te,initRefs:oe})}var ce=["onUniNViewMessage"];function fe(l){var e=se(l);return Bl(e,ce),e}function pe(l){return App(fe(l)),l}function he(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.isPage,t=e.initRelation,n=Ml(u.default,l),r=v(n,2),b=r[0],o=r[1],i={options:{multipleSlots:!0,addGlobalClass:!0},data:Vl(o,u.default.prototype),behaviors:Hl(o,ne),properties:Jl(o.props,!1,o.__file),lifetimes:{attached:function(){var l=this.properties,e={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:l};Ll(l.vueId,this),t.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new b(e),Fl(this.$vm,l.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(l){this.$vm&&this.$vm.__call_hook("onPageShow",l)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(l){this.$vm&&this.$vm.__call_hook("onPageResize",l)}},methods:{__l:ie,__e:ee}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(l){i.methods[l]=function(e){return this.$vm[l](e)}}),a?i:[i,b]}function de(l){return he(l,{isPage:re,initRelation:be})}function ye(l){var e=de(l);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function _e(l,e){e.isPage,e.initRelation;var a=ye(l);return Bl(a.methods,ge,l),a.methods.onLoad=function(l){this.$vm.$mp.query=l,this.$vm.__call_hook("onLoad",l)},a}function me(l){return _e(l,{isPage:re,initRelation:be})}ge.push.apply(ge,Cl);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(l){var e=me(l);return Bl(e.methods,we),e}function Oe(l){return Component($e(l))}function Se(l){return Component(ye(l))}rl.forEach(function(l){nl[l]=!1}),bl.forEach(function(l){var e=nl[l]&&nl[l].name?nl[l].name:l;wx.canIUse(e)||(nl[l]=!1)});var Ae={};Object.keys(vl).forEach(function(l){Ae[l]=vl[l]}),Object.keys(Ol).forEach(function(l){Ae[l]=Ol[l]}),Object.keys(kl).forEach(function(l){Ae[l]=Y(l,kl[l])}),Object.keys(wx).forEach(function(l){(_(wx,l)||_(nl,l))&&(Ae[l]=Y(l,fl(l,wx[l])))}),"undefined"!==typeof l&&(l.uni=Ae,l.UniEmitter=Ol),wx.createApp=pe,wx.createPage=Oe,wx.createComponent=Se;var xe=Ae,ke=xe;e.default=ke}).call(this,a("c8ba"))},8189:function(l){l.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(l,e,a){"use strict";(function(l){var e=a("8189");function u(l,e){return!e||"object"!==typeof e&&"function"!==typeof e?t(l):e}function t(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function v(l){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},v(l)}function n(l,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(e&&e.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),e&&r(l,e)}function r(l,e){return r=Object.setPrototypeOf||function(l,e){return l.__proto__=e,l},r(l,e)}function b(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")}function o(l,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function i(l,e,a){return e&&o(l.prototype,e),a&&o(l,a),l}var s=e.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(a){e=""}return e}try{e=l.getStorageSync(y)}catch(a){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{l.setStorageSync(y,e)}catch(a){l.setStorageSync(y,g)}}return e}var m=function(l){var e=Object.keys(l),a=e.sort(),u={},t="";for(var v in a)u[a[v]]=l[a[v]],t+=a[v]+"="+l[a[v]]+"&";return{sign:"",options:t.substr(0,t.length-1)}},w=function(l){var e="";for(var a in l)e+=a+"="+l[a]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var l={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return l["app-plus"]},S=function(){var e="";return"wx"!==O()&&"qq"!==O()||(e=l.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===O()?plus.runtime.version:""},x=function(){var l=O(),e="";return"n"===l&&(e=plus.runtime.channel),e},k=function(e){var a=O(),u="";return e||("wx"===a&&(u=l.getLaunchOptionsSync().scene),u)},j="First__Visit__Time",D="Last__Visit__Time",E=function(){var e=l.getStorageSync(j),a=0;return e?a=e:(a=$(),l.setStorageSync(j,a),l.removeStorageSync(D)),a},P=function(){var e=l.getStorageSync(D),a=0;return a=e||"",l.setStorageSync(D,$()),a},T="__page__residence__time",I=0,C=0,N=function(){return I=$(),"n"===O()&&l.setStorageSync(T,$()),I},R=function(){return C=$(),"n"===O()&&(I=l.getStorageSync(T)),C-I},B="Total__Visit__Count",M=function(){var e=l.getStorageSync(B),a=1;return e&&(a=e,a++),l.setStorageSync(B,a),a},F=function(l){var e={};for(var a in l)e[a]=encodeURIComponent(l[a]);return e},L=0,V=0,U=function(){var l=(new Date).getTime();return L=l,V=0,l},q=function(){var l=(new Date).getTime();return V=l,l},H=function(l){var e=0;if(0!==L&&(e=V-L),e=parseInt(e/1e3),e=e<1?1:e,"app"===l){var a=e>h;return{residenceTime:e,overtime:a}}if("page"===l){var u=e>p;return{residenceTime:e,overtime:u}}return{residenceTime:e}},z=function(){var l=getCurrentPages(),e=l[l.length-1],a=e.$vm;return"bd"===O()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},J=function(l){var e=getCurrentPages(),a=e[e.length-1],u=a.$vm,t=l._query,v=t&&"{}"!==JSON.stringify(t)?"?"+JSON.stringify(t):"";return l._query="","bd"===O()?u.$mp&&u.$mp.page.is+v:u.$scope&&u.$scope.route+v||u.$mp&&u.$mp.page.route+v},G=function(l){return!!("page"===l.mpType||l.$mp&&"page"===l.$mp.mpType||"page"===l.$options.mpType)},W=function(l,e){return l?"string"!==typeof l?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):l.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===l&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("26f5").default,Y=a("5e0e").default||a("5e0e"),X=l.getSystemInfoSync(),Z=function(){function e(){b(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:O(),mpn:S(),ak:Y.appid,usv:s,v:A(),ch:x(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return i(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var l=H("app");if(l.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(l,e){this.__licationHide=!0,q();var a=H();U();var u=J(this);this._sendHideRequest({urlref:u,urlref_ts:a.residenceTime},e)}},{key:"_pageShow",value:function(){var l=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return U(),this.__licationShow=!1,void(this._lastPageRoute=l);q(),this._lastPageRoute=l;var a=H("page");if(a.overtime){var u={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(u)}U()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var l=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:l.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(l){this._sendEventRequest({key:l},0)}},{key:"_sendReportRequest",value:function(l){this._navigationBarTitle.lt="1";var e=l.query&&"{}"!==JSON.stringify(l.query)?"?"+JSON.stringify(l.query):"";this.statData.lt="1",this.statData.url=l.path+e||"",this.statData.t=$(),this.statData.sc=k(l.scene),this.statData.fvts=E(),this.statData.lvts=P(),this.statData.tvc=M(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(l){var e=l.url,a=l.urlref,u=l.urlref_ts;this._navigationBarTitle.lt="11";var t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(t)}},{key:"_sendHideRequest",value:function(l,e){var a=l.urlref,u=l.urlref_ts,t={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(t,e)}},{key:"_sendEventRequest",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=l.key,a=void 0===e?"":e,u=l.value,t=void 0===u?"":u,v=this._lastPageRoute,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:v,ch:this.statData.ch,e_n:a,e_v:"object"===typeof t?JSON.stringify(t):t.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}},{key:"getNetworkInfo",value:function(){var e=this;l.getNetworkType({success:function(l){e.statData.net=l.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var l=this;plus.runtime.getProperty(plus.runtime.appid,function(e){l.statData.v=e.version||"",l.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?l.getLocation({type:"wgs84",geocode:!0,success:function(l){l.address&&(e.statData.cn=l.address.country,e.statData.pn=l.address.province,e.statData.ct=l.address.city),e.statData.lat=l.latitude,e.statData.lng=l.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,a){var u=this,t=$(),v=this._navigationBarTitle;e.ttn=v.page,e.ttpj=v.config,e.ttc=v.report;var n=this._reportingRequestData;if("n"===O()&&(n=l.getStorageSync("__UNI__STAT__DATA")||{}),n[e.lt]||(n[e.lt]=[]),n[e.lt].push(e),"n"===O()&&l.setStorageSync("__UNI__STAT__DATA",n),!(R()<d)||a){var r=this._reportingRequestData;"n"===O()&&(r=l.getStorageSync("__UNI__STAT__DATA")),N();var b=[],o=[],i=[],c=function(l){var e=r[l];e.forEach(function(e){var a=w(e);0===l?b.push(a):3===l?i.push(a):o.push(a)})};for(var f in r)c(f);b.push.apply(b,o.concat(i));var p={usv:s,t:t,requests:JSON.stringify(b)};this._reportingRequestData={},"n"===O()&&l.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){u._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var a=this;l.request({url:c,method:"POST",data:e,success:function(){},fail:function(l){++a._retry<3&&setTimeout(function(){a._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(l){var e=new Image,a=m(F(l)).options;e.src=f+"?"+a}},{key:"sendEvent",value:function(l,e){W(l,e)||("title"!==l?this._sendEventRequest({key:l,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function a(){var e;return b(this,a),e=u(this,v(a).call(this)),e.instance=null,"function"===typeof l.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return n(a,e),i(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),i(a,[{key:"addInterceptorInit",value:function(){var e=this;l.addInterceptor("setNavigationBarTitle",{invoke:function(l){e._navigationBarTitle.page=l.title}})}},{key:"interceptLogin",value:function(){var e=this;l.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var a=this;e?l.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var e=this;l.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(l,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(l,!0)}},{key:"load",value:function(l,e){if(!e.$scope&&!e.$mp){var a=getCurrentPages();e.$scope=a[a.length-1]}this.self=e,this._query=l}},{key:"show",value:function(l){this.self=l,G(l)?this._pageShow(l):this._applicationShow(l)}},{key:"ready",value:function(l){}},{key:"hide",value:function(l){this.self=l,G(l)?this._pageHide(l):this._applicationHide(l,!0)}},{key:"error",value:function(l){this._platform;var e="";e=l.message?l.stack:JSON.stringify(l);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}}]),a}(Z),ll=Q.getInstance(),el=!1,al={onLaunch:function(l){ll.report(l,this)},onReady:function(){ll.ready(this)},onLoad:function(l){if(ll.load(l,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(l){return ll.interceptShare(!1),e.call(this,l)}}},onShow:function(){el=!1,ll.show(this)},onHide:function(){el=!0,ll.hide(this)},onUnload:function(){el?el=!1:ll.hide(this)},onError:function(l){ll.error(l)}};function ul(){var e=a("66fd");(e.default||e).mixin(al),l.report=function(l,e){ll.sendEvent(l,e)}}ul()}).call(this,a("6e42")["default"])},"96cf":function(l,e){!function(e){"use strict";var a,u=Object.prototype,t=u.hasOwnProperty,v="function"===typeof Symbol?Symbol:{},n=v.iterator||"@@iterator",r=v.asyncIterator||"@@asyncIterator",b=v.toStringTag||"@@toStringTag",o="object"===typeof l,i=e.regeneratorRuntime;if(i)o&&(l.exports=i);else{i=e.regeneratorRuntime=o?l.exports:{},i.wrap=m;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[n]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==u&&t.call(g,n)&&(d=g);var _=S.prototype=$.prototype=Object.create(d);O.prototype=_.constructor=S,S.constructor=O,S[b]=O.displayName="GeneratorFunction",i.isGeneratorFunction=function(l){var e="function"===typeof l&&l.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(l){return Object.setPrototypeOf?Object.setPrototypeOf(l,S):(l.__proto__=S,b in l||(l[b]="GeneratorFunction")),l.prototype=Object.create(_),l},i.awrap=function(l){return{__await:l}},A(x.prototype),x.prototype[r]=function(){return this},i.AsyncIterator=x,i.async=function(l,e,a,u){var t=new x(m(l,e,a,u));return i.isGeneratorFunction(e)?t:t.next().then(function(l){return l.done?l.value:t.next()})},A(_),_[b]="Generator",_[n]=function(){return this},_.toString=function(){return"[object Generator]"},i.keys=function(l){var e=[];for(var a in l)e.push(a);return e.reverse(),function a(){while(e.length){var u=e.pop();if(u in l)return a.value=u,a.done=!1,a}return a.done=!0,a}},i.values=T,P.prototype={constructor:P,reset:function(l){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(E),!l)for(var e in this)"t"===e.charAt(0)&&t.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var l=this.tryEntries[0],e=l.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(l){if(this.done)throw l;var e=this;function u(u,t){return r.type="throw",r.arg=l,e.next=u,t&&(e.method="next",e.arg=a),!!t}for(var v=this.tryEntries.length-1;v>=0;--v){var n=this.tryEntries[v],r=n.completion;if("root"===n.tryLoc)return u("end");if(n.tryLoc<=this.prev){var b=t.call(n,"catchLoc"),o=t.call(n,"finallyLoc");if(b&&o){if(this.prev<n.catchLoc)return u(n.catchLoc,!0);if(this.prev<n.finallyLoc)return u(n.finallyLoc)}else if(b){if(this.prev<n.catchLoc)return u(n.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return u(n.finallyLoc)}}}},abrupt:function(l,e){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&t.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var v=u;break}}v&&("break"===l||"continue"===l)&&v.tryLoc<=e&&e<=v.finallyLoc&&(v=null);var n=v?v.completion:{};return n.type=l,n.arg=e,v?(this.method="next",this.next=v.finallyLoc,h):this.complete(n)},complete:function(l,e){if("throw"===l.type)throw l.arg;return"break"===l.type||"continue"===l.type?this.next=l.arg:"return"===l.type?(this.rval=this.arg=l.arg,this.method="return",this.next="end"):"normal"===l.type&&e&&(this.next=e),h},finish:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===l)return this.complete(a.completion,a.afterLoc),E(a),h}},catch:function(l){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===l){var u=a.completion;if("throw"===u.type){var t=u.arg;E(a)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(l,e,u){return this.delegate={iterator:T(l),resultName:e,nextLoc:u},"next"===this.method&&(this.arg=a),h}}}function m(l,e,a,u){var t=e&&e.prototype instanceof $?e:$,v=Object.create(t.prototype),n=new P(u||[]);return v._invoke=k(l,a,n),v}function w(l,e,a){try{return{type:"normal",arg:l.call(e,a)}}catch(u){return{type:"throw",arg:u}}}function $(){}function O(){}function S(){}function A(l){["next","throw","return"].forEach(function(e){l[e]=function(l){return this._invoke(e,l)}})}function x(l){function e(a,u,v,n){var r=w(l[a],l,u);if("throw"!==r.type){var b=r.arg,o=b.value;return o&&"object"===typeof o&&t.call(o,"__await")?Promise.resolve(o.__await).then(function(l){e("next",l,v,n)},function(l){e("throw",l,v,n)}):Promise.resolve(o).then(function(l){b.value=l,v(b)},function(l){return e("throw",l,v,n)})}n(r.arg)}var a;function u(l,u){function t(){return new Promise(function(a,t){e(l,u,a,t)})}return a=a?a.then(t,t):t()}this._invoke=u}function k(l,e,a){var u=s;return function(t,v){if(u===f)throw new Error("Generator is already running");if(u===p){if("throw"===t)throw v;return I()}a.method=t,a.arg=v;while(1){var n=a.delegate;if(n){var r=j(n,a);if(r){if(r===h)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===s)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=f;var b=w(l,e,a);if("normal"===b.type){if(u=a.done?p:c,b.arg===h)continue;return{value:b.arg,done:a.done}}"throw"===b.type&&(u=p,a.method="throw",a.arg=b.arg)}}}function j(l,e){var u=l.iterator[e.method];if(u===a){if(e.delegate=null,"throw"===e.method){if(l.iterator.return&&(e.method="return",e.arg=a,j(l,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var t=w(u,l.iterator,e.arg);if("throw"===t.type)return e.method="throw",e.arg=t.arg,e.delegate=null,h;var v=t.arg;return v?v.done?(e[l.resultName]=v.value,e.next=l.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,h):v:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function D(l){var e={tryLoc:l[0]};1 in l&&(e.catchLoc=l[1]),2 in l&&(e.finallyLoc=l[2],e.afterLoc=l[3]),this.tryEntries.push(e)}function E(l){var e=l.completion||{};e.type="normal",delete e.arg,l.completion=e}function P(l){this.tryEntries=[{tryLoc:"root"}],l.forEach(D,this),this.reset(!0)}function T(l){if(l){var e=l[n];if(e)return e.call(l);if("function"===typeof l.next)return l;if(!isNaN(l.length)){var u=-1,v=function e(){while(++u<l.length)if(t.call(l,u))return e.value=l[u],e.done=!1,e;return e.value=a,e.done=!0,e};return v.next=v}}return{next:I}}function I(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(l,e,a){l.exports=a("bbdd")},b59d:function(l,e,a){},bbdd:function(l,e,a){var u=function(){return this||"object"===typeof self&&self}()||Function("return this")(),t=u.regeneratorRuntime&&Object.getOwnPropertyNames(u).indexOf("regeneratorRuntime")>=0,v=t&&u.regeneratorRuntime;if(u.regeneratorRuntime=void 0,l.exports=a("96cf"),t)u.regeneratorRuntime=v;else try{delete u.regeneratorRuntime}catch(n){u.regeneratorRuntime=void 0}},c8ba:function(l,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}l.exports=a}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/common/commonList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/commonList.js';

define('components/common/commonList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/commonList"], {
  "0d38": function d38(t, n, u) {
    "use strict";

    var e = u("4537"),
        a = u.n(e);
    a.a;
  },
  "191b": function b(t, n, u) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    u.d(n, "a", function () {
      return e;
    }), u.d(n, "b", function () {
      return a;
    });
  },
  4537: function _(t, n, u) {},
  "463c": function c(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("191b"),
        a = u("5a67");

    for (var o in a) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    u("0d38");
    var i = u("2877"),
        c = Object(i["a"])(a["default"], e["a"], e["b"], !1, null, "adc4525a", null);
    n["default"] = c.exports;
  },
  "5a67": function a67(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("f637"),
        a = u.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = a.a;
  },
  f637: function f637(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        props: {
          item: Object,
          index: Number
        },
        data: function data() {
          return {
            isguanzhu: this.item.isguanzhu
          };
        },
        onLoad: function onLoad() {},
        methods: {
          gaunzhu: function gaunzhu() {
            this.isguanzhu = !0, t.showToast({
              title: "关注成功！"
            });
          }
        }
      };
      n.default = u;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/commonList-create-component', {
  'components/common/commonList-create-component': function componentsCommonCommonListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("463c"));
  }
}, [['components/common/commonList-create-component']]]);
});
require('components/common/commonList.js');
__wxRoute = 'components/common/loadmore';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/loadmore.js';

define('components/common/loadmore.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/loadmore"], {
  "01bf": function bf(n, t, a) {},
  "4ba5": function ba5(n, t, a) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    a.d(t, "a", function () {
      return e;
    }), a.d(t, "b", function () {
      return u;
    });
  },
  "54a2": function a2(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("4ba5"),
        u = a("b749");

    for (var o in u) {
      "default" !== o && function (n) {
        a.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    a("c2da");
    var r = a("2877"),
        c = Object(r["a"])(u["default"], e["a"], e["b"], !1, null, "f2847694", null);
    t["default"] = c.exports;
  },
  b749: function b749(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("ca9b"),
        u = a.n(e);

    for (var o in e) {
      "default" !== o && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(o);
    }

    t["default"] = u.a;
  },
  c2da: function c2da(n, t, a) {
    "use strict";

    var e = a("01bf"),
        u = a.n(e);
    u.a;
  },
  ca9b: function ca9b(n, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      props: {
        loadtext: String
      },
      data: function data() {
        return {};
      },
      onLoad: function onLoad() {},
      methods: {}
    };
    t.default = e;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/loadmore-create-component', {
  'components/common/loadmore-create-component': function componentsCommonLoadmoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("54a2"));
  }
}, [['components/common/loadmore-create-component']]]);
});
require('components/common/loadmore.js');
__wxRoute = 'components/common/noThing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/noThing.js';

define('components/common/noThing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/noThing"], {
  "2d8b": function d8b(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "noThing"
    };
    t.default = u;
  },
  "3b40": function b40(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("2d8b"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "7dd3": function dd3(n, t, e) {
    "use strict";

    var u = e("94e7"),
        a = e.n(u);
    a.a;
  },
  "94e7": function e7(n, t, e) {},
  "9e49": function e49(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  a62c: function a62c(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("9e49"),
        a = e("3b40");

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    e("7dd3");
    var o = e("2877"),
        c = Object(o["a"])(a["default"], u["a"], u["b"], !1, null, "12ae1426", null);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/noThing-create-component', {
  'components/common/noThing-create-component': function componentsCommonNoThingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a62c"));
  }
}, [['components/common/noThing-create-component']]]);
});
require('components/common/noThing.js');
__wxRoute = 'components/common/uploadImgs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/uploadImgs.js';

define('components/common/uploadImgs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/uploadImgs"], {
  "2cea": function cea(e, t, n) {
    "use strict";

    (function (e, i) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var c = u(n("a34a"));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function r(e, t, n, i, c, u, r) {
        try {
          var s = e[u](r),
              o = s.value;
        } catch (a) {
          return void n(a);
        }

        s.done ? t(o) : Promise.resolve(o).then(i, c);
      }

      function s(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (i, c) {
            var u = e.apply(t, n);

            function s(e) {
              r(u, i, c, s, o, "next", e);
            }

            function o(e) {
              r(u, i, c, s, o, "throw", e);
            }

            s(void 0);
          });
        };
      }

      var o = [["camera"], ["album"], ["camera", "album"]],
          a = [["compressed"], ["original"], ["compressed", "original"]],
          f = {
        data: function data() {
          return {
            imageList: [],
            sourceTypeIndex: 2,
            sourceType: ["拍照", "相册", "拍照或相册"],
            sizeTypeIndex: 2,
            sizeType: ["压缩", "原图", "压缩或原图"],
            countIndex: 8,
            count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          };
        },
        methods: {
          chooseImage: function () {
            var t = s(c.default.mark(function t() {
              var n,
                  u,
                  r = this;
              return c.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (2 === this.sourceTypeIndex) {
                        t.next = 6;
                        break;
                      }

                      return t.next = 3, this.checkPermission();

                    case 3:
                      if (n = t.sent, 1 === n) {
                        t.next = 6;
                        break;
                      }

                      return t.abrupt("return");

                    case 6:
                      if (9 !== this.imageList.length) {
                        t.next = 13;
                        break;
                      }

                      return t.next = 9, this.isFullImg();

                    case 9:
                      if (u = t.sent, console.log(e("是否继续?", u, " at components\\common\\uploadImgs.vue:65")), u) {
                        t.next = 13;
                        break;
                      }

                      return t.abrupt("return");

                    case 13:
                      i.chooseImage({
                        sourceType: o[this.sourceTypeIndex],
                        sizeType: a[this.sizeTypeIndex],
                        count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
                        success: function success(e) {
                          r.imageList = r.imageList.concat(e.tempFilePaths), r.$emit("uploud", r.imageList);
                        },
                        fail: function fail(e) {
                          e["code"] && 0 !== e.code && 2 === r.sourceTypeIndex && r.checkPermission(e.code);
                        }
                      });

                    case 14:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function n() {
              return t.apply(this, arguments);
            }

            return n;
          }(),
          isFullImg: function isFullImg() {
            var e = this;
            return new Promise(function (t) {
              i.showModal({
                content: "已经有9张图片了,是否清空现有图片？",
                success: function success(n) {
                  n.confirm ? (e.imageList = [], t(!0)) : t(!1);
                },
                fail: function fail() {
                  t(!1);
                }
              });
            });
          },
          previewImage: function previewImage(e) {
            var t = e.target.dataset.src;
            i.previewImage({
              current: t,
              urls: this.imageList
            });
          },
          delect: function delect(e) {
            var t = this;
            i.showModal({
              title: "提示",
              content: "是否要删除该张图片",
              success: function success(n) {
                n.confirm && (t.imageList.splice(e, 1), t.$emit("uploud", t.imageList));
              }
            });
          }
        }
      };
      t.default = f;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  "5c95": function c95(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("2cea"),
        c = n.n(i);

    for (var u in i) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(u);
    }

    t["default"] = c.a;
  },
  81890: function _(e, t, n) {
    "use strict";

    var i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        c = [];

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return c;
    });
  },
  9302: function _(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("81890"),
        c = n("5c95");

    for (var u in c) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return c[e];
        });
      }(u);
    }

    n("e3d8");
    var r = n("2877"),
        s = Object(r["a"])(c["default"], i["a"], i["b"], !1, null, "e4433404", null);
    t["default"] = s.exports;
  },
  "984c": function c(e, t, n) {},
  e3d8: function e3d8(e, t, n) {
    "use strict";

    var i = n("984c"),
        c = n.n(i);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/uploadImgs-create-component', {
  'components/common/uploadImgs-create-component': function componentsCommonUploadImgsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9302"));
  }
}, [['components/common/uploadImgs-create-component']]]);
});
require('components/common/uploadImgs.js');
__wxRoute = 'components/home/homeData';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/homeData.js';

define('components/home/homeData.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/homeData"], {
  "2e6b": function e6b(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("780c"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  4637: function _(t, n, e) {
    "use strict";

    var a = e("50d5"),
        u = e.n(a);
    u.a;
  },
  "50d5": function d5(t, n, e) {},
  "780c": function c(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      props: {
        homeData: Array
      }
    };
    n.default = a;
  },
  a6a0: function a6a0(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("f3ea"),
        u = e("2e6b");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("4637");
    var o = e("2877"),
        c = Object(o["a"])(u["default"], a["a"], a["b"], !1, null, "7df76743", null);
    n["default"] = c.exports;
  },
  f3ea: function f3ea(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/homeData-create-component', {
  'components/home/homeData-create-component': function componentsHomeHomeDataCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a6a0"));
  }
}, [['components/home/homeData-create-component']]]);
});
require('components/home/homeData.js');
__wxRoute = 'components/home/homeInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/homeInfo.js';

define('components/home/homeInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/homeInfo"], {
  "46be": function be(n, t, e) {},
  "6d8b": function d8b(n, t, e) {
    "use strict";

    var u = e("46be"),
        c = e.n(u);
    c.a;
  },
  "98c0": function c0(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  a6e2: function a6e2(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        homeInfo: Object
      }
    };
    t.default = u;
  },
  c326: function c326(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("a6e2"),
        c = e.n(u);

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    t["default"] = c.a;
  },
  f52e: function f52e(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("98c0"),
        c = e("c326");

    for (var o in c) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    e("6d8b");
    var r = e("2877"),
        a = Object(r["a"])(c["default"], u["a"], u["b"], !1, null, "3c20b9a9", null);
    t["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/homeInfo-create-component', {
  'components/home/homeInfo-create-component': function componentsHomeHomeInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f52e"));
  }
}, [['components/home/homeInfo-create-component']]]);
});
require('components/home/homeInfo.js');
__wxRoute = 'components/home/homeListItem';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/homeListItem.js';

define('components/home/homeListItem.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/homeListItem"], {
  "587a": function a(t, e, n) {},
  "89b9": function b9(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  bb86: function bb86(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("f79d"),
        a = n.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(o);
    }

    e["default"] = a.a;
  },
  d02c: function d02c(t, e, n) {
    "use strict";

    var u = n("587a"),
        a = n.n(u);
    a.a;
  },
  f79d: function f79d(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          openEvent: function openEvent(e) {
            switch (console.log(t(e, " at components\\home\\homeListItem.vue:19")), e.clicktype) {
              case "navigateTo":
                e.url && n.navigateTo({
                  url: e.url
                });
                break;

              case "switchTab":
                e.url && n.switchTab({
                  url: e.url
                });
                break;
            }
          }
        }
      };
      e.default = u;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  fd29: function fd29(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("89b9"),
        a = n("bb86");

    for (var o in a) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(o);
    }

    n("d02c");
    var c = n("2877"),
        r = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, "7a08d61b", null);
    e["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/homeListItem-create-component', {
  'components/home/homeListItem-create-component': function componentsHomeHomeListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fd29"));
  }
}, [['components/home/homeListItem-create-component']]]);
});
require('components/home/homeListItem.js');
__wxRoute = 'components/home/otherLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/otherLogin.js';

define('components/home/otherLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/otherLogin"], {
  "188c": function c(n, t, e) {},
  "5b72": function b72(n, t, e) {
    "use strict";

    var u = e("188c"),
        r = e.n(u);
    r.a;
  },
  "615b": function b(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {};
    t.default = u;
  },
  "90c4": function c4(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("e2fe"),
        r = e("f17d");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("5b72");
    var c = e("2877"),
        f = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, "21ae1bbe", null);
    t["default"] = f.exports;
  },
  e2fe: function e2fe(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  f17d: function f17d(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("615b"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/otherLogin-create-component', {
  'components/home/otherLogin-create-component': function componentsHomeOtherLoginCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("90c4"));
  }
}, [['components/home/otherLogin-create-component']]]);
});
require('components/home/otherLogin.js');
__wxRoute = 'components/index/indexList/index-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/index/indexList/index-list.js';

define('components/index/indexList/index-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/index/indexList/index-list"], {
  "3ef0": function ef0(n, i, t) {
    "use strict";

    t.r(i);
    var e = t("bb52"),
        u = t.n(e);

    for (var a in e) {
      "default" !== a && function (n) {
        t.d(i, n, function () {
          return e[n];
        });
      }(a);
    }

    i["default"] = u.a;
  },
  "8ce7": function ce7(n, i, t) {},
  "94ff": function ff(n, i, t) {
    "use strict";

    var e = t("8ce7"),
        u = t.n(e);
    u.a;
  },
  bb52: function bb52(n, i, t) {
    "use strict";

    (function (n) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var t = {
        props: {
          item: Object,
          index: Number
        },
        data: function data() {
          return {
            infonum: this.item.infonum,
            isguanzhu: this.item.isguanzhu
          };
        },
        onLoad: function onLoad() {},
        methods: {
          guanzhu: function guanzhu() {
            this.isguanzhu = !0, n.showToast({
              title: "关注成功！"
            });
          },
          caozuo: function caozuo(n) {
            switch (n) {
              case "ding":
                if (1 == this.infonum.index) return;
                this.infonum.dingnum++, 2 == this.infonum.index && this.infonum.cainum--, this.infonum.index = 1;
                break;

              case "cai":
                if (2 == this.infonum.index) return;
                this.infonum.cainum++, 1 == this.infonum.index && this.infonum.dingnum--, this.infonum.index = 2;
                break;
            }
          },
          opendetail: function opendetail() {
            n.navigateTo({
              url: "/pages/detail/detail?detailData=" + JSON.stringify(this.item)
            });
          }
        }
      };
      i.default = t;
    }).call(this, t("6e42")["default"]);
  },
  c0c7: function c0c7(n, i, t) {
    "use strict";

    var e = function e() {
      var n = this,
          i = n.$createElement;
      n._self._c;
    },
        u = [];

    t.d(i, "a", function () {
      return e;
    }), t.d(i, "b", function () {
      return u;
    });
  },
  ed06: function ed06(n, i, t) {
    "use strict";

    t.r(i);
    var e = t("c0c7"),
        u = t("3ef0");

    for (var a in u) {
      "default" !== a && function (n) {
        t.d(i, n, function () {
          return u[n];
        });
      }(a);
    }

    t("94ff");
    var o = t("2877"),
        f = Object(o["a"])(u["default"], e["a"], e["b"], !1, null, "373445a7", null);
    i["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/index/indexList/index-list-create-component', {
  'components/index/indexList/index-list-create-component': function componentsIndexIndexListIndexListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ed06"));
  }
}, [['components/index/indexList/index-list-create-component']]]);
});
require('components/index/indexList/index-list.js');
__wxRoute = 'components/index/swiperTab/swiper-tab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/index/swiperTab/swiper-tab.js';

define('components/index/swiperTab/swiper-tab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/index/swiperTab/swiper-tab"], {
  "0553": function _(t, n, a) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    a.d(n, "a", function () {
      return e;
    }), a.d(n, "b", function () {
      return u;
    });
  },
  "1b23": function b23(t, n, a) {
    "use strict";

    var e = a("3136"),
        u = a.n(e);
    u.a;
  },
  3136: function _(t, n, a) {},
  "594c": function c(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("dada"),
        u = a.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "6b84": function b84(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("0553"),
        u = a("594c");

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    a("1b23");
    var o = a("2877"),
        i = Object(o["a"])(u["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  dada: function dada(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: {
        tabBars: Array,
        tabIndex: Number
      },
      data: function data() {
        return {};
      },
      onLoad: function onLoad() {},
      methods: {
        tabtap: function tabtap(t) {
          this.$emit("tabtap", t);
        }
      }
    };
    n.default = e;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/index/swiperTab/swiper-tab-create-component', {
  'components/index/swiperTab/swiper-tab-create-component': function componentsIndexSwiperTabSwiperTabCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6b84"));
  }
}, [['components/index/swiperTab/swiper-tab-create-component']]]);
});
require('components/index/swiperTab/swiper-tab.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "4f7f": function f7f(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("ccf6"),
        u = i("5bf2");

    for (var n in u) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(n);
    }

    i("862e");
    var c = i("2877"),
        r = Object(c["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  "5bf2": function bf2(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("a426"),
        u = i.n(a);

    for (var n in a) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(n);
    }

    e["default"] = u.a;
  },
  "862e": function e(t, _e, i) {
    "use strict";

    var a = i("b07a"),
        u = i.n(a);
    u.a;
  },
  a426: function a426(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = c(i("24b1")),
        u = c(i("6d1d")),
        n = c(i("17ec"));

    function c(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: a.default,
          cityDataList: u.default[0],
          areaDataList: n.default[0][0],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault();
          var t = this.pickerValueDefault;
          this.cityDataList = u.default[t[0]], this.areaDataList = n.default[t[0]][t[1]], this.pickerValue = t;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          var t = this.pickerValueDefault,
              e = t[0],
              i = t[1],
              c = t[2];
          0 === e && 0 === i && 0 === c || (e > a.default.length - 1 && (this.pickerValueDefault[0] = e = a.default.length - 1), i > u.default[e].length - 1 && (this.pickerValueDefault[1] = i = u.default[e].length - 1), c > n.default[e][i].length - 1 && (this.pickerValueDefault[2] = n.default[e][i].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = n.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = n.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = r;
  },
  b07a: function b07a(t, e, i) {},
  ccf6: function ccf6(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4f7f"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/msg/msgList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/msg/msgList.js';

define('components/msg/msgList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/msg/msgList"], {
  3716: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("4e37"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = a.a;
  },
  "4e37": function e37(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = a(n("05cf"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var r = function r() {
        return n.e("components/uni-badge/uni-badge").then(n.bind(null, "b9b8"));
      },
          i = {
        components: {
          uniBadge: r
        },
        props: {
          item: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          index: Number
        },
        filters: {
          formatTime: function formatTime(t) {
            return u.default.gettime.gettime(t);
          }
        },
        data: function data() {
          return {};
        },
        methods: {
          navChat: function navChat() {
            t.navigateTo({
              url: "../../pages/userChat/userChat"
            });
          }
        }
      };

      e.default = i;
    }).call(this, n("6e42")["default"]);
  },
  acd0: function acd0(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("b0c9"),
        a = n("3716");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    var i = n("2877"),
        o = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, "6bd63aa5", null);
    e["default"] = o.exports;
  },
  b0c9: function b0c9(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement,
          n = (t._self._c, t._f("formatTime")(t.item.upaate_time));
      t.$mp.data = Object.assign({}, {
        $root: {
          f0: n
        }
      });
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/msg/msgList-create-component', {
  'components/msg/msgList-create-component': function componentsMsgMsgListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("acd0"));
  }
}, [['components/msg/msgList-create-component']]]);
});
require('components/msg/msgList.js');
__wxRoute = 'components/news/hotCate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/hotCate.js';

define('components/news/hotCate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/hotCate"], {
  "0cb4": function cb4(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  2015: function _(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          hotCate: Array
        },
        methods: {
          openMore: function openMore() {
            console.log(t("更多", " at components\\news\\hotCate.vue:25")), n.navigateTo({
              url: "../../pages/topicNav/topicNav"
            });
          },
          openDetail: function openDetail(e) {
            console.log(t(e, " at components\\news\\hotCate.vue:31"));
          }
        }
      };
      e.default = o;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  "59f9": function f9(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("2015"),
        a = n.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    e["default"] = a.a;
  },
  9896: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("0cb4"),
        a = n("59f9");

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    var c = n("2877"),
        r = Object(c["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = r.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/hotCate-create-component', {
  'components/news/hotCate-create-component': function componentsNewsHotCateCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9896"));
  }
}, [['components/news/hotCate-create-component']]]);
});
require('components/news/hotCate.js');
__wxRoute = 'components/news/newsNavBar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/newsNavBar.js';

define('components/news/newsNavBar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/newsNavBar"], {
  "19d6": function d6(n, t, a) {
    "use strict";

    var e = a("9c86"),
        u = a.n(e);
    u.a;
  },
  "3f09": function f09(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("910e"),
        u = a.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  8201: function _(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("d8e4"),
        u = a("3f09");

    for (var r in u) {
      "default" !== r && function (n) {
        a.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    a("19d6");
    var c = a("2877"),
        o = Object(c["a"])(u["default"], e["a"], e["b"], !1, null, "f0cafcd2", null);
    t["default"] = o.exports;
  },
  "910e": function e(n, t, a) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var e = function e() {
        return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null, "2d6a"));
      },
          u = {
        components: {
          uniNavBar: e
        },
        name: "newsNavBar",
        props: {
          tabIndex: Number,
          tabBars: Array
        },
        data: function data() {
          return {};
        },
        onLoad: function onLoad() {},
        methods: {
          changeTab: function changeTab(n) {
            this.$emit("changeTab", n);
          },
          navAdd: function navAdd() {
            n.navigateTo({
              url: "../../pages/addInput/addInput"
            });
          }
        }
      };

      t.default = u;
    }).call(this, a("6e42")["default"]);
  },
  "9c86": function c86(n, t, a) {},
  d8e4: function d8e4(n, t, a) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    a.d(t, "a", function () {
      return e;
    }), a.d(t, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/newsNavBar-create-component', {
  'components/news/newsNavBar-create-component': function componentsNewsNewsNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8201"));
  }
}, [['components/news/newsNavBar-create-component']]]);
});
require('components/news/newsNavBar.js');
__wxRoute = 'components/news/topicList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/topicList.js';

define('components/news/topicList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/topicList"], {
  "337f": function f(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          item: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          index: Number
        },
        data: function data() {
          return {};
        },
        methods: {
          open: function open() {
            t.navigateTo({
              url: "../../pages/topicDetail/topicDetail?item=" + JSON.stringify(this.item)
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "47da": function da(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  d9b6: function d9b6(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("337f"),
        i = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = i.a;
  },
  df83: function df83(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("47da"),
        i = e("d9b6");

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    var r = e("2877"),
        o = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/topicList-create-component', {
  'components/news/topicList-create-component': function componentsNewsTopicListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("df83"));
  }
}, [['components/news/topicList-create-component']]]);
});
require('components/news/topicList.js');
__wxRoute = 'components/topicDetail/topicInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/topicDetail/topicInfo.js';

define('components/topicDetail/topicInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/topicDetail/topicInfo"], {
  "0ca7": function ca7(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return c;
    });
  },
  3572: function _(t, n, e) {
    "use strict";

    var a = e("ca48"),
        c = e.n(a);
    c.a;
  },
  be3a: function be3a(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("cfd6"),
        c = e.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    n["default"] = c.a;
  },
  ca33: function ca33(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("0ca7"),
        c = e("be3a");

    for (var u in c) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(u);
    }

    e("3572");
    var r = e("2877"),
        o = Object(r["a"])(c["default"], a["a"], a["b"], !1, null, "26f2eae2", null);
    n["default"] = o.exports;
  },
  ca48: function ca48(t, n, e) {},
  cfd6: function cfd6(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      props: {
        item: Object
      }
    };
    n.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/topicDetail/topicInfo-create-component', {
  'components/topicDetail/topicInfo-create-component': function componentsTopicDetailTopicInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ca33"));
  }
}, [['components/topicDetail/topicInfo-create-component']]]);
});
require('components/topicDetail/topicInfo.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "2bef": function bef(e, t, n) {
    "use strict";

    var u = function u() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return u;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  "6bee": function bee(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("ddaf"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(i);
    }

    t["default"] = a.a;
  },
  "861e": function e(_e, t, n) {},
  "9e2b": function e2b(e, t, n) {
    "use strict";

    var u = n("861e"),
        a = n.n(u);
    a.a;
  },
  b9b8: function b9b8(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("2bef"),
        a = n("6bee");

    for (var i in a) {
      "default" !== i && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(i);
    }

    n("9e2b");
    var r = n("2877"),
        f = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  ddaf: function ddaf(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b9b8"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  4196: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "4c29": function c29(n, t, e) {
    "use strict";

    var u = e("d61f"),
        c = e.n(u);
    c.a;
  },
  5718: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("8181"),
        c = e("e4c4");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("4c29");
    var r = e("2877"),
        o = Object(r["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  8181: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  d61f: function d61f(n, t, e) {},
  e4c4: function e4c4(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4196"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5718"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-nav-bar/uni-nav-bar.js';

define('components/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar/uni-nav-bar"], {
  1623: function _(t, n, e) {},
  "2d6a": function d6a(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("be16"),
        i = e("be64");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("62d1");
    var a = e("2877"),
        o = Object(a["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "62d1": function d1(t, n, e) {
    "use strict";

    var u = e("1623"),
        i = e.n(u);
    i.a;
  },
  "870d": function d(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null, "57e5"));
    },
        i = function i() {
      return e.e("components/uni-icons/uni-icons").then(e.bind(null, "5718"));
    },
        r = {
      name: "UniNavBar",
      components: {
        uniStatusBar: u,
        uniIcons: i
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        leftText: {
          type: String,
          default: ""
        },
        rightText: {
          type: String,
          default: ""
        },
        leftIcon: {
          type: String,
          default: ""
        },
        rightIcon: {
          type: String,
          default: ""
        },
        fixed: {
          type: [Boolean, String],
          default: !1
        },
        color: {
          type: String,
          default: "#000000"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        statusBar: {
          type: [Boolean, String],
          default: !1
        },
        shadow: {
          type: [String, Boolean],
          default: !0
        },
        border: {
          type: [String, Boolean],
          default: !0
        }
      },
      methods: {
        onClickLeft: function onClickLeft() {
          this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
          this.$emit("click-right");
        }
      }
    };

    n.default = r;
  },
  be16: function be16(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  be64: function be64(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("870d"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-nav-bar/uni-nav-bar-create-component', {
  'components/uni-nav-bar/uni-nav-bar-create-component': function componentsUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2d6a"));
  }
}, [['components/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('components/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "10a7": function a7(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "3c6e": function c6e(t, n, e) {
    "use strict";

    var o = e("b7cd"),
        i = e.n(o);
    i.a;
  },
  9573: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("10a7"),
        i = e("cc02");

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    e("3c6e");
    var a = e("2877"),
        c = Object(a["a"])(i["default"], o["a"], o["b"], !1, null, "e16e36a8", null);
    n["default"] = c.exports;
  },
  b7cd: function b7cd(t, n, e) {},
  bbda: function bbda(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  cc02: function cc02(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("bbda"),
        i = e.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    n["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9573"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-status-bar/uni-status-bar.js';

define('components/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-status-bar/uni-status-bar"], {
  "4dcb": function dcb(t, n, a) {},
  "57e5": function e5(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("f4ef"),
        e = a("ca1c");

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    a("867a");
    var c = a("2877"),
        f = Object(c["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "867a": function a(t, n, _a) {
    "use strict";

    var u = _a("4dcb"),
        e = _a.n(u);

    e.a;
  },
  b7a0: function b7a0(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t.getSystemInfoSync().statusBarHeight + "px",
          u = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: a
          };
        }
      };
      n.default = u;
    }).call(this, a("6e42")["default"]);
  },
  ca1c: function ca1c(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("b7a0"),
        e = a.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  f4ef: function f4ef(t, n, a) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    a.d(n, "a", function () {
      return u;
    }), a.d(n, "b", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-status-bar/uni-status-bar-create-component', {
  'components/uni-status-bar/uni-status-bar-create-component': function componentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("57e5"));
  }
}, [['components/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/userChat/userChatList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/userChat/userChatList.js';

define('components/userChat/userChatList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/userChat/userChatList"], {
  "2b49": function b49(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("61e5"),
        r = n("9c5c");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    var f = n("2877"),
        a = Object(f["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = a.exports;
  },
  "33ff": function ff(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = 1,
        r = {
      props: {
        item: Object,
        index: Number
      },
      computed: {
        isSelf: function isSelf() {
          return u == this.item.userId;
        }
      }
    };
    e.default = r;
  },
  "61e5": function e5(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return r;
    });
  },
  "9c5c": function c5c(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("33ff"),
        r = n.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(c);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/userChat/userChatList-create-component', {
  'components/userChat/userChatList-create-component': function componentsUserChatUserChatListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2b49"));
  }
}, [['components/userChat/userChatList-create-component']]]);
});
require('components/userChat/userChatList.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"29e5":function(n,e,t){"use strict";t.r(e);var i=t("641f"),a=t("5938");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);t("e0db");var o=t("2877"),c=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},5938:function(n,e,t){"use strict";t.r(e);var i=t("8290"),a=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);e["default"]=a.a},"641f":function(n,e,t){"use strict";var i=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return a})},8290:function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return t.e("components/index/indexList/index-list").then(t.bind(null,"ed06"))},u=function(){return t.e("components/index/swiperTab/swiper-tab").then(t.bind(null,"6b84"))},o=function(){return t.e("components/common/loadmore").then(t.bind(null,"54a2"))},c=function(){return t.e("components/common/noThing").then(t.bind(null,"a62c"))},s={components:{indexList:a,swiperTab:u,loadMore:o,noThing:c},data:function(){return{swiperheight:"",tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"}],newsList:[{loadtext:"上拉加载更多",list:[{userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!1,title:"我是标题",type:"img",titlepic:"/static/demo/datapic/1.jpg",infonum:{index:0,dingnum:11,cainum:10},commentnum:2,sharenum:10},{userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!0,title:"我是标题",type:"video",titlepic:"/static/demo/datapic/1.jpg",playnum:"20w",long:"2:17",infonum:{index:1,dingnum:11,cainum:10},commentnum:2,sharenum:10},{userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!0,title:"我是标题",type:"video",titlepic:"/static/demo/datapic/1.jpg",playnum:"20w",long:"2:17",infonum:{index:2,dingnum:11,cainum:10},commentnum:2,sharenum:10}]},{loadtext:"上拉加载更多",list:[{userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!1,title:"我是标题",type:"img",titlepic:"/static/demo/datapic/1.jpg",infonum:{index:0,dingnum:11,cainum:10},commentnum:2,sharenum:10}]},{loadtext:"上拉加载更多",list:[]},{loadtext:"上拉加载更多",list:[]},{loadtext:"上拉加载更多",list:[]},{loadtext:"上拉加载更多",list:[]}]}},onLoad:function(){var e=this;n.getSystemInfo({success:function(t){var a=t.windowHeight-n.upx2px(101);e.swiperheight=a,console.log(i(a," at pages\\index\\index.vue:139"))}})},methods:{tabtap:function(n){this.tabIndex=n},tabChange:function(n){this.tabIndex=n.detail.current},loadmore:function(n){var e=this;console.log(i("上拉加载"," at pages\\index\\index.vue:153")),"上拉加载更多"==this.newsList[n].loadtext&&setTimeout(function(){var t={userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!1,title:"",type:"img",titlepic:"/static/demo/datapic/1.jpg",infonum:{index:0,dingnum:11,cainum:10},commentnum:2,sharenum:10};e.newsList[n].list.push(t),e.newsList[n].loadtext="加载中..."},1e3)},onNavigationBarSearchInputClicked:function(){n.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(e){switch(e.index){case 0:console.log(i("进入签到页面"," at pages\\index\\index.vue:188"));break;case 1:console.log(i("进入发布页面"," at pages\\index\\index.vue:191")),n.navigateTo({url:"../addInput/addInput"});break}}}};e.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},a8a7:function(n,e,t){"use strict";(function(n){t("b59d"),t("921b");i(t("66fd"));var e=i(t("29e5"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},db5c:function(n,e,t){},e0db:function(n,e,t){"use strict";var i=t("db5c"),a=t.n(i);a.a}},[["a8a7","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"1cf7":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},"3ed5":function(n,t,e){"use strict";e.r(t);var a=e("1cf7"),o=e("937a");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"9273f4d4",null);t["default"]=c.exports},4321:function(n,t,e){"use strict";(function(n){e("b59d"),e("921b");a(e("66fd"));var t=a(e("3ed5"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"937a":function(n,t,e){"use strict";e.r(t);var a=e("f7a7"),o=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=o.a},f7a7:function(n,t,e){"use strict";(function(n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"2d6a"))},i=function(){return e.e("components/common/commonList").then(e.bind(null,"463c"))},u=function(){return e.e("components/news/newsNavBar").then(e.bind(null,"8201"))},c=function(){return e.e("components/common/noThing").then(e.bind(null,"a62c"))},s=function(){return e.e("components/news/hotCate").then(e.bind(null,"9896"))},d=function(){return e.e("components/news/topicList").then(e.bind(null,"df83"))},r={components:{uniNavBar:o,commonList:i,newsNavBar:u,noThing:c,hotCate:s,topicList:d},data:function(){return{tabIndex:0,swiperheight:"",tabBars:[{name:"关注",id:"guanzhu"},{name:"话题",id:"huati"}],list:[{id:0,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:0,age:25,isguanzhu:!0,title:"我的标题",titlepic:"/static/demo/datapic/15.jpg",video:!1,share:!1,path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20},{id:1,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:0,age:25,isguanzhu:!0,title:"我的标题",titlepic:"/static/demo/datapic/15.jpg",video:{looknum:"20w",long:"2:47"},share:!1,path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20},{id:2,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:1,age:25,isguanzhu:!0,title:"我的标题",video:!1,share:{title:"标题",titlepic:"/static/demo/datapic/15.jpg"},path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20}],hotCate:[{name:"关注"},{name:"推荐"},{name:"体育"},{name:"热点"},{name:"财经"},{name:"娱乐"}],topicList:[{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}]}},onLoad:function(){var t=this;n.getSystemInfo({success:function(e){var o=e.windowHeight-n.upx2px(100);t.swiperheight=o,console.log(a(o," at pages\\news\\news.vue:151"))}})},methods:{changeTab:function(n){this.tabIndex=n},tabChange:function(n){this.tabIndex=n.detail.current}}};t.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["4321","common/runtime","common/vendor"]]]);
});
require('pages/news/news.js');
__wxRoute = 'pages/paper/paper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/paper/paper.js';

define('pages/paper/paper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paper/paper"],{"00c6":function(e,t,n){"use strict";(function(e){n("b59d"),n("921b");a(n("66fd"));var t=a(n("671a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},5074:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=[{avatar:"/static/demo/demo66.jpg",username:"曲调",upaate_time:1571187167,data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",noread:20},{avatar:"/static/demo/demo5.jpg",username:"阿拉善",upaate_time:1571187190,data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",noread:18},{avatar:"/static/demo/demo5.jpg",username:"阿拉善",upaate_time:1571187212,data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",noread:18},{avatar:"/static/demo/demo5.jpg",username:"阿拉善",upaate_time:1571187264,data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",noread:18}],u=function(){return Promise.all([n.e("common/vendor"),n.e("components/msg/msgList")]).then(n.bind(null,"acd0"))},r=function(){return n.e("components/common/noThing").then(n.bind(null,"a62c"))},i=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"9573"))},s={components:{msgList:u,noThing:r,uniPopup:i},data:function(){return{list:[{avatar:"/static/demo/demo5.jpg",username:"阿拉善",upaate_time:1571187264,data:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",noread:18}],type:"top"}},onPullDownRefresh:function(){this.refresh()},onNavigationBarButtonTap:function(t){switch(console.log(e(t," at pages\\paper\\paper.vue:84")),t.index){case 0:a.navigateTo({url:"../userList/userList"}),this.$refs.popup.close();break;case 1:this.$refs.popup.open();break}},onLoad:function(){},methods:{refresh:function(){var e=this;setTimeout(function(){e.list=o,a.stopPullDownRefresh()},2e3)},popupEvent:function(t){switch(t){case"friend":console.log(e("添加好友"," at pages\\paper\\paper.vue:112"));break;case"clear":console.log(e("清除列表"," at pages\\paper\\paper.vue:115"));break}this.$refs.popup.close()}}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},"671a":function(e,t,n){"use strict";n.r(t);var a=n("ce42"),o=n("8ef8");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"8ef8":function(e,t,n){"use strict";n.r(t);var a=n("5074"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},ce42:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})}},[["00c6","common/runtime","common/vendor"]]]);
});
require('pages/paper/paper.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"306c":function(n,e,t){"use strict";t.r(e);var o=t("c091"),u=t("58ff");for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);t("dfc6");var c=t("2877"),i=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,"1515b7db",null);e["default"]=i.exports},"4d10":function(n,e,t){"use strict";(function(n){t("b59d"),t("921b");o(t("66fd"));var e=o(t("306c"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},5608:function(n,e,t){},"58ff":function(n,e,t){"use strict";t.r(e);var o=t("9024"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a},9024:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([t.e("common/vendor"),t.e("components/home/homeListItem")]).then(t.bind(null,"fd29"))},u=function(){return t.e("components/home/homeInfo").then(t.bind(null,"f52e"))},a=function(){return t.e("components/home/otherLogin").then(t.bind(null,"90c4"))},c=function(){return t.e("components/home/homeData").then(t.bind(null,"a6a0"))},i={components:{homeListItem:o,homeInfo:u,homeData:c,otherLogin:a},data:function(){return{isLogin:!0,list:[{icon:"liulan",name:"浏览历史",clicktype:"",url:""},{icon:"huiyuanvip",name:"糗百认证",clicktype:"",url:""},{icon:"keyboard",name:"审核糗事",clicktype:"",url:""}],homeInfo:{userpic:"/static/demo/demo66.jpg",username:"昵称",totalnum:2,todaynum:1},homeData:[{name:"糗事",num:0},{name:"动态",num:0},{name:"评论",num:0},{name:"收藏",num:0}]}},onNavigationBarButtonTap:function(e){switch(e.index){case 0:n.navigateTo({url:"../userSet/userSet"});break}},methods:{}};e.default=i}).call(this,t("6e42")["default"])},c091:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u})},dfc6:function(n,e,t){"use strict";var o=t("5608"),u=t.n(o);u.a}},[["4d10","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/demo/demo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/demo/demo.js';

define('pages/demo/demo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/demo/demo"],{"001b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{name:"我是一个名称",num:0,weihight:1200}},watch:{name:function(t){console.log(e(t," at pages\\demo\\demo.vue:34"))}},computed:{zweihight:function(){return this.weihight>1e3?this.weihight/1e3+"kg":this.weihight+"g"}},methods:{click:function(t){console.log(e(t," at pages\\demo\\demo.vue:44"));t.currentTarget.dataset.index;console.log(e("我点击了"," at pages\\demo\\demo.vue:46"))},box1event:function(){console.log(e("点击了外面"," at pages\\demo\\demo.vue:49"))},box2event:function(){console.log(e("点击了里面"," at pages\\demo\\demo.vue:52"))},change:function(){this.name="哈哈哈S"},add:function(){this.num++}}};t.default=n}).call(this,n("0de9")["default"])},"19e9":function(e,t,n){"use strict";n.r(t);var o=n("001b"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=u.a},"3ef6":function(e,t,n){"use strict";n.r(t);var o=n("d9fa"),u=n("19e9");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("bd25");var i=n("2877"),c=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},8864:function(e,t,n){"use strict";(function(e){n("b59d"),n("921b");o(n("66fd"));var t=o(n("3ef6"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"9dff":function(e,t,n){},bd25:function(e,t,n){"use strict";var o=n("9dff"),u=n.n(o);u.a},d9fa:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})}},[["8864","common/runtime","common/vendor"]]]);
});
require('pages/demo/demo.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"584c":function(e,n,t){"use strict";t.r(n);var a=t("7dfe"),u=t("fc32");for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);var o=t("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"7dfe":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},"843f":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onNavigationBarSearchInputChanged:function(n){console.log(e(n," at pages\\search\\search.vue:16"))},onNavigationBarSearchInputConfirmed:function(n){console.log(e(n," at pages\\search\\search.vue:20"));n.text},methods:{onNavigationBarButtonTap:function(n){0==n.index&&(console.log(e("点击了取消"," at pages\\search\\search.vue:28")),t.navigateBack({delta:1}))}}};n.default=a}).call(this,t("0de9")["default"],t("6e42")["default"])},b715:function(e,n,t){"use strict";(function(e){t("b59d"),t("921b");a(t("66fd"));var n=a(t("584c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},fc32:function(e,n,t){"use strict";t.r(n);var a=t("843f"),u=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=u.a}},[["b715","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/addInput/addInput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/addInput/addInput.js';

define('pages/addInput/addInput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addInput/addInput"],{2660:function(n,t,e){"use strict";var u=e("6549"),o=e.n(u);o.a},"3b5d":function(n,t,e){"use strict";e.r(t);var u=e("73e6"),o=e("51f8");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("2660");var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,"2eebdd3f",null);t["default"]=c.exports},"51f8":function(n,t,e){"use strict";e.r(t);var u=e("61f5"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"61f5":function(n,t,e){"use strict";(function(n,u){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=["所有人可见","仅自己可见"],a=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"2d6a"))},i=function(){return Promise.all([e.e("common/vendor"),e.e("components/common/uploadImgs")]).then(e.bind(null,"9302"))},c=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"9573"))},d={components:{uniNavBar:a,upLoadImgs:i,uniPopup:c},data:function(){return{isget:!1,yinsi:o[0],text:"111",imageList:[],show:!1,type:""}},onLoad:function(){},onBackPress:function(){var t=this;if(this.isget)return n.showModal({content:"是否要保存为草稿？",cancelText:"不保存",confirmText:"保存",success:function(e){e.confirm?console.log(u("保存"," at pages\\addInput\\addInput.vue:50")):console.log(u("不保存"," at pages\\addInput\\addInput.vue:52")),t.isget=!0,n.navigateBack({delta:1})}}),!0},methods:{back:function(){n.navigateBack({delta:1})},submit:function(){console.log(u("我点击了发布"," at pages\\addInput\\addInput.vue:71"))},changelock:function(){var t=this;console.log(u("我点击了隐私"," at pages\\addInput\\addInput.vue:75")),n.showActionSheet({itemList:o,success:function(n){t.yinsi=o[n.tapIndex]}})},uploud:function(n){this.imageList=n,console.log(u(this.imageList," at pages\\addInput\\addInput.vue:85"))}}};t.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},6549:function(n,t,e){},"667d":function(n,t,e){"use strict";(function(n){e("b59d"),e("921b");u(e("66fd"));var t=u(e("3b5d"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"73e6":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})}},[["667d","common/runtime","common/vendor"]]]);
});
require('pages/addInput/addInput.js');
__wxRoute = 'pages/topicNav/topicNav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topicNav/topicNav.js';

define('pages/topicNav/topicNav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topicNav/topicNav"],{"1ed5":function(t,n,e){"use strict";e.r(n);var a=e("d5a6"),i=e("f035");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("87f4");var c=e("2877"),u=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},"87f4":function(t,n,e){"use strict";var a=e("e464"),i=e.n(a);i.a},a754:function(t,n,e){"use strict";(function(t){e("b59d"),e("921b");a(e("66fd"));var n=a(e("1ed5"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},b384:function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/news/topicList").then(e.bind(null,"df83"))},o=function(){return e.e("components/index/swiperTab/swiper-tab").then(e.bind(null,"6b84"))},c=function(){return e.e("components/common/loadmore").then(e.bind(null,"54a2"))},u=function(){return e.e("components/common/noThing").then(e.bind(null,"a62c"))},s={components:{topicList:i,swiperTab:o,loadMore:c,noThing:u},data:function(){return{swiperheight:"",tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"}],topicList:[{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10},{cover:"/static/demo/datapic/15.jpg",title:"话题名称",desc:"话题描述",today_count:0,news_count:10}]}},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var i=e.windowHeight-t.upx2px(100);n.swiperheight=i,console.log(a(i," at pages\\topicNav\\topicNav.vue:75"))}})},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},loadmore:function(t){var n=this;"上拉加载更多"==this.newsList[t].loadtext&&setTimeout(function(){var e={userpic:"/static/demo/userpic/1.jpg",username:"昵称",isguanzhu:!1,title:"",type:"img",titlepic:"/static/demo/datapic/1.jpg",infonum:{index:0,dingnum:11,cainum:10},commentnum:2,sharenum:10};n.newsList[t].list.push(e),n.newsList[t].loadtext="加载中..."},1e3)},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(n){switch(n.index){case 0:console.log(a("进入签到页面"," at pages\\topicNav\\topicNav.vue:123"));break;case 1:console.log(a("进入发布页面"," at pages\\topicNav\\topicNav.vue:126")),t.navigateTo({url:"../addInput/addInput"});break}}}};n.default=s}).call(this,e("6e42")["default"],e("0de9")["default"])},d5a6:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},e464:function(t,n,e){},f035:function(t,n,e){"use strict";e.r(n);var a=e("b384"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a}},[["a754","common/runtime","common/vendor"]]]);
});
require('pages/topicNav/topicNav.js');
__wxRoute = 'pages/topicDetail/topicDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topicDetail/topicDetail.js';

define('pages/topicDetail/topicDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topicDetail/topicDetail"],{"06cb":function(t,e,n){"use strict";n.r(e);var i=n("6ffa"),o=n("3f49");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("d30d");var r=n("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"20b3e2f2",null);e["default"]=u.exports},"3f49":function(t,e,n){"use strict";n.r(e);var i=n("ece6"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"65b3":function(t,e,n){"use strict";(function(t){n("b59d"),n("921b");i(n("66fd"));var e=i(n("06cb"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6ffa":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"795e":function(t,e,n){},d30d:function(t,e,n){"use strict";var i=n("795e"),o=n.n(i);o.a},ece6:function(t,e,n){"use strict";function i(t){return r(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=[{id:0,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:0,age:25,isguanzhu:!0,title:"我的标题",titlepic:"/static/demo/datapic/15.jpg",video:!1,share:!1,path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20},{id:1,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:0,age:25,isguanzhu:!0,title:"我的标题",titlepic:"/static/demo/datapic/15.jpg",video:{looknum:"20w",long:"2:47"},share:!1,path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20},{id:2,userpic:"/static/demo/demo66.jpg",username:"曲调",sex:1,age:25,isguanzhu:!0,title:"我的标题",video:!1,share:{title:"标题",titlepic:"/static/demo/datapic/15.jpg"},path:"深圳 龙岗",sharenum:20,commentnum:30,goodnum:20}],c=function(){return n.e("components/topicDetail/topicInfo").then(n.bind(null,"ca33"))},s=function(){return n.e("components/common/commonList").then(n.bind(null,"463c"))},l=function(){return n.e("components/common/loadmore").then(n.bind(null,"54a2"))},d={components:{topicInfo:c,commonList:s,loadMore:l},data:function(){return{hotList:[{title:"【新人必读】 uni-app实战第二季商城类项目开发text-ellipsis"},{title:"【新人必读】 uni-app实战第二季商城类项目开发text-ellipsis"}],tabBars:[{name:"默认"},{name:"最新"}],list1:[],list2:[],tabindex:0,loadText1:"上拉加载更多",loadText2:"上拉加载更多"}},computed:{listData:function(){return 0==this.tabindex?this.list1:this.list2},loadText:function(){return 0==this.tabindex?this.loadText1:this.loadText2}},onLoad:function(t){if(t.item){var e=JSON.parse(t.item);this.item=e}this.list1=u},onReachBottom:function(){this.loadMore()},methods:{changeTab:function(t){this.tabindex=t},loadMore:function(){var t=this,e=this.tabindex;"上拉加载更多"===this.loadText&&(this["loadText"+(e+1)]="加载中...",setTimeout(function(){t["list"+(e+1)]=[].concat(i(t["list"+(e+1)]),i(t["list"+(e+1)])),t["loadText"+(e+1)]="上拉加载更多"},2e3))}}};e.default=d}},[["65b3","common/runtime","common/vendor"]]]);
});
require('pages/topicDetail/topicDetail.js');
__wxRoute = 'pages/userList/userList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userList/userList.js';

define('pages/userList/userList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userList/userList"],{3231:function(e,n,u){"use strict";var t=u("de95"),a=u.n(t);a.a},"742e":function(e,n,u){"use strict";u.r(n);var t=u("cdc3"),a=u.n(t);for(var s in t)"default"!==s&&function(e){u.d(n,e,function(){return t[e]})}(s);n["default"]=a.a},"823e":function(e,n,u){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},a=[];u.d(n,"a",function(){return t}),u.d(n,"b",function(){return a})},9245:function(e,n,u){"use strict";u.r(n);var t=u("823e"),a=u("742e");for(var s in a)"default"!==s&&function(e){u.d(n,e,function(){return a[e]})}(s);u("3231");var i=u("2877"),c=Object(i["a"])(a["default"],t["a"],t["b"],!1,null,"6ab93733",null);n["default"]=c.exports},"9a0e":function(e,n,u){"use strict";(function(e){u("b59d"),u("921b");t(u("66fd"));var n=t(u("9245"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,u("6e42")["createPage"])},cdc3:function(e,n,u){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return u.e("components/common/loadmore").then(u.bind(null,"54a2"))},s=function(){return u.e("components/common/noThing").then(u.bind(null,"a62c"))},i=function(){return u.e("components/uni-badge/uni-badge").then(u.bind(null,"b9b8"))},c={components:{loadMore:a,noThing:s,uniBadge:i},data:function(){return{tabBars:[{name:"互关",num:0},{name:"关注",num:3},{name:"粉丝",num:30}],tabIndex:0,swiperheight:"",newsList:[{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:20,sex:0,isguanzhu:!0},{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",age:21,sex:1,isguanzhu:!1}]}]}},onNavigationBarSearchInputClicked:function(){e.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(n){0==n.index&&e.navigateBack({delta:1})},onLoad:function(){var n=this;e.getSystemInfo({success:function(u){var t=u.windowHeight-e.upx2px(100);n.swiperheight=t}})},methods:{changeTab:function(e){this.tabIndex=e},tabChange:function(e){this.tabIndex=e.detail.current},loadmore:function(e){console.log(t("上拉了"," at pages\\userList\\userList.vue:204")),console.log(t(e," at pages\\userList\\userList.vue:205"))}}};n.default=c}).call(this,u("6e42")["default"],u("0de9")["default"])},de95:function(e,n,u){}},[["9a0e","common/runtime","common/vendor"]]]);
});
require('pages/userList/userList.js');
__wxRoute = 'pages/userChat/userChat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userChat/userChat.js';

define('pages/userChat/userChat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userChat/userChat"],{"1c81":function(t,e,n){"use strict";n.r(e);var u=n("fdd1"),a=n("d18b");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("9b5a");var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"d9992c16",null);e["default"]=c.exports},"9b5a":function(t,e,n){"use strict";var u=n("ee41"),a=n.n(u);a.a},d067:function(t,e,n){"use strict";(function(t){n("b59d"),n("921b");u(n("66fd"));var e=u(n("1c81"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d18b:function(t,e,n){"use strict";n.r(e);var u=n("e0da"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},e0da:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return n.e("components/userChat/userChatList").then(n.bind(null,"2b49"))},a={components:{userChatList:u},data:function(){return{scrollH:500,list:[{userId:2,avatar:"/static/demo/demo66.jpg",username:"昵称",data:"你好啊",type:"text",createTime:1571215910}]}},onLoad:function(){var e=this;t.getSystemInfo({success:function(n){e.scrollH=n.windowHeight-t.upx2px(101)}})},methods:{}};e.default=a}).call(this,n("6e42")["default"])},ee41:function(t,e,n){},fdd1:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})}},[["d067","common/runtime","common/vendor"]]]);
});
require('pages/userChat/userChat.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"5a57":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"5fa2":function(t,e,a){"use strict";a.r(e);var n=a("b3f2"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"6aaf":function(t,e,a){"use strict";(function(t){a("b59d"),a("921b");n(a("66fd"));var e=n(a("ed1e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},b3f2:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},onLoad:function(t){var e=JSON.parse(t.detailData);this.initData(e)},onNavigationBarButtonTap:function(e){switch(console.log(t(e," at pages\\detail\\detail.vue:21")),e.index){case 0:console.log(t("分享"," at pages\\detail\\detail.vue:24"));break}},methods:{initData:function(t){a.setNavigationBarTitle({title:t.title})}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},ed1e:function(t,e,a){"use strict";a.r(e);var n=a("5a57"),i=a("5fa2");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);var o=a("2877"),l=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports}},[["6aaf","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
__wxRoute = 'pages/userSet/userSet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userSet/userSet.js';

define('pages/userSet/userSet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userSet/userSet"],{"00ff":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){return Promise.all([t.e("common/vendor"),t.e("components/home/homeListItem")]).then(t.bind(null,"fd29"))},u={components:{homeListItem:c},data:function(){return{list:[{icon:"",name:"账号与安全",clicktype:"navigateTo",url:"/pages/userSetRepassword/userSetRepassword"},{icon:"",name:"绑定邮箱",clicktype:"navigateTo",url:"/pages/userSetEmail/userSetEmail"},{icon:"",name:"资料编辑",clicktype:"navigateTo",url:"/pages/userSetUserinfo/userSetUserinfo"},{icon:"",name:"小纸条",clicktype:"",url:""},{icon:"",name:"清除缓存",clicktype:"",url:""},{icon:"",name:"意见反馈",clicktype:"",url:""},{icon:"",name:"关于糗百",clicktype:"",url:""}]}},methods:{}};n.default=u},"21fb":function(e,n,t){"use strict";t.r(n);var c=t("00ff"),u=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);n["default"]=u.a},"2d4b":function(e,n,t){"use strict";var c=t("fda2"),u=t.n(c);u.a},"3f9f":function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u})},c7c1:function(e,n,t){"use strict";(function(e){t("b59d"),t("921b");c(t("66fd"));var n=c(t("e952"));function c(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e952:function(e,n,t){"use strict";t.r(n);var c=t("3f9f"),u=t("21fb");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);t("2d4b");var a=t("2877"),o=Object(a["a"])(u["default"],c["a"],c["b"],!1,null,"5d24bca2",null);n["default"]=o.exports},fda2:function(e,n,t){}},[["c7c1","common/runtime","common/vendor"]]]);
});
require('pages/userSet/userSet.js');
__wxRoute = 'pages/userSetRepassword/userSetRepassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userSetRepassword/userSetRepassword.js';

define('pages/userSetRepassword/userSetRepassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userSetRepassword/userSetRepassword"],{"0796":function(t,s,e){"use strict";e.r(s);var n=e("31ba"),o=e("166b");for(var a in o)"default"!==a&&function(t){e.d(s,t,function(){return o[t]})}(a);e("1b80");var r=e("2877"),i=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);s["default"]=i.exports},"166b":function(t,s,e){"use strict";e.r(s);var n=e("7df9"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(s,t,function(){return n[t]})}(a);s["default"]=o.a},"1b80":function(t,s,e){"use strict";var n=e("4cd6"),o=e.n(n);o.a},"31ba":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return n}),e.d(s,"b",function(){return o})},"4cd6":function(t,s,e){},"7df9":function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n={data:function(){return{oldpassword:"",newpassword:"",renewpassword:"",disable:!0,loading:!1}},watch:{oldpassword:function(t){this.change()},newpassword:function(t){this.change()},renewpassword:function(t){this.change()}},methods:{change:function(){this.oldpassword&&this.newpassword&&this.renewpassword?this.disable=!1:this.disable=!0},check:function(){return this.oldpassword&&""!=this.oldpassword?this.newpassword&&""!=this.newpassword?this.renewpassword&&""!=this.renewpassword?this.newpassword===this.renewpassword||(t.showToast({title:"确认密码和新密码不一致"}),!1):(t.showToast({title:"重复密码不能为空"}),!1):(t.showToast({title:"新密码不能为空"}),!1):(t.showToast({title:"旧密码不能为空"}),!1)},submit:function(){console.log(e("112"," at pages\\userSetRepassword\\userSetRepassword.vue:71")),this.loading=!0,this.check()?(t.showToast({title:"提交服务器"}),this.loading=!1):this.loading=!1}}};s.default=n}).call(this,e("6e42")["default"],e("0de9")["default"])},a4e5:function(t,s,e){"use strict";(function(t){e("b59d"),e("921b");n(e("66fd"));var s=n(e("0796"));function n(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])}},[["a4e5","common/runtime","common/vendor"]]]);
});
require('pages/userSetRepassword/userSetRepassword.js');
__wxRoute = 'pages/userSetEmail/userSetEmail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userSetEmail/userSetEmail.js';

define('pages/userSetEmail/userSetEmail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userSetEmail/userSetEmail"],{"1b41":function(t,e,n){"use strict";n.r(e);var a=n("38dd"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"38dd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{email:"",password:"",disable:!0,loading:!1}},watch:{email:function(t){this.change()},password:function(t){this.change()}},methods:{change:function(){this.email&&this.password?this.disable=!1:this.disable=!0},check:function(){if(!this.email||""==this.email)return t.showToast({title:"邮箱不能为空"}),!1;var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return e.test(this.email)?!(!this.password||""==this.password)||(t.showToast({title:"密码不能为空"}),!1):(t.showToast({title:"请输入正确邮箱格式",icon:"none"}),!1)},submit:function(){this.loading=!0,this.check()?(t.showToast({title:"提交服务器"}),this.loading=!1):this.loading=!1}}};e.default=n}).call(this,n("6e42")["default"])},"7ec2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},8543:function(t,e,n){"use strict";(function(t){n("b59d"),n("921b");a(n("66fd"));var e=a(n("afce"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8edd":function(t,e,n){"use strict";var a=n("a137"),i=n.n(a);i.a},a137:function(t,e,n){},afce:function(t,e,n){"use strict";n.r(e);var a=n("7ec2"),i=n("1b41");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("8edd");var o=n("2877"),u=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"b3be1662",null);e["default"]=u.exports}},[["8543","common/runtime","common/vendor"]]]);
});
require('pages/userSetEmail/userSetEmail.js');
__wxRoute = 'pages/userSetUserinfo/userSetUserinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userSetUserinfo/userSetUserinfo.js';

define('pages/userSetUserinfo/userSetUserinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userSetUserinfo/userSetUserinfo"],{"0353":function(e,t,n){"use strict";n.r(t);var i=n("3d6b"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"206c":function(e,t,n){"use strict";n.r(t);var i=n("ed66"),a=n("0353");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("3536");var c=n("2877"),u=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"d5f1bb46",null);t["default"]=u.exports},3536:function(e,t,n){"use strict";var i=n("9736"),a=n.n(i);a.a},"3d6b":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"4f7f"))},r=["不限","男","女"],c=["秘密","未婚","已婚"],u=["秘密","IT","老师"],s={components:{mpvueCityPicker:a},data:function(){return{userpic:"/static/demo/demo66.jpg",username:"曲调",sex:"不限",qinggan:"未婚",zhiye:"IT",birthday:"1999-12-18",themeColor:"#007AFF",cityPickerValueDefault:[0,0,1]}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{changeImg:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],success:function(e){console.log(i(e," at pages\\userSetUserinfo\\userSetUserinfo.vue:95")),t.userpic=e.tempFilePaths[0]}})},submit:function(){},changeOne:function(t){var n=this,a=[];switch(t){case"sex":a=r;break;case"qinggan":a=c;break;case"zhiye":a=u;break}e.showActionSheet({itemList:a,success:function(e){console.log(i(e," at pages\\userSetUserinfo\\userSetUserinfo.vue:118"));var r=e.tapIndex;switch(t){case"sex":n.sex=a[r];break;case"qinggan":n.qinggan=a[r];break;case"zhiye":n.zhiye=a[r];break}}})},bindDateChange:function(e){this.birthday=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(n,"-").concat(i,"-").concat(a)},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.pickerText=JSON.stringify(e)}}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},"7a33":function(e,t,n){"use strict";(function(e){n("b59d"),n("921b");i(n("66fd"));var t=i(n("206c"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},9736:function(e,t,n){},ed66:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}},[["7a33","common/runtime","common/vendor"]]]);
});
require('pages/userSetUserinfo/userSetUserinfo.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

