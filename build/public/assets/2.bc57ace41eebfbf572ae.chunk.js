webpackJsonp([2],{469:function(e,t,r){"use strict";var n=r(493),u=r.n(n),a=r(19),i=(r.n(a),r(475));t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.i(a.Map)({}),t=arguments[1];switch(t.type){case i.a:return e.merge(u()({},t.userId,r.i(a.Map)({readyState:i.a})));case i.b:return e.merge(u()({},t.userId,r.i(a.Map)({readyState:i.b,err:r.i(a.fromJS)(t.err)})));case i.d:return e.merge(u()({},t.userId,r.i(a.Map)({readyState:i.d,info:r.i(a.fromJS)(t.data)})));default:return e}}},471:function(e,t,r){e.exports={default:r(472),__esModule:!0}},472:function(e,t,r){r(473);var n=r(13).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},473:function(e,t,r){var n=r(45);n(n.S+n.F*!r(29),"Object",{defineProperty:r(30).f})},475:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"d",function(){return u}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return f});var n="AN_USER_REQUESTING",u="AN_USER_SUCCESS",a="AN_USER_FAILURE",i="https://jsonplaceholder.typicode.com/users",o=function(e,t){return function(r){return r({type:n,userId:e}),t.get(i+"/"+e).then(function(t){r({type:u,userId:e,data:t.data})}).catch(function(t){r({type:a,userId:e,err:t})})}},c=function(e,t){var r=e.getIn(["userInfo",t]);return!r||r.get("readyState")!==u},f=function(e){return function(t,r,n){return c(r(),e)?t(o(e,n)):null}}},493:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=r(471),a=n(u);t.default=function(e,t,r){return t in e?(0,a.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}});