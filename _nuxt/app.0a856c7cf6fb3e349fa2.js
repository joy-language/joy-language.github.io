webpackJsonp([32],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,p=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&p++,n=n.$parent;a.nuxtChildDepth=p;var f=s[p]||c,l={};r.forEach(function(t){void 0!==f[t]&&(l[t]=f[t])});var d={};o.forEach(function(t){"function"==typeof f[t]&&(d[t]=f[t].bind(u))});var h=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:l,on:d},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),u=n.n(i),s=n("//Fk"),c=n.n(s),p=n("Xxa5"),f=n.n(p),l=n("mvHQ"),d=n.n(l),h=n("exGp"),m=n.n(h),x=n("fZjL"),y=n.n(x),v=n("woOf"),b=n.n(v),g=n("/5sW"),w=n("unZF"),_=n("qcny"),j=n("YLfZ"),C=(r=m()(f.a.mark(function t(e,n,r){var o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=d()(e.query)!==d()(n.query),this._diffQuery=this._queryChanged?Object(j.g)(e.query,n.query):[],t.prev=3,t.next=6,Object(j.k)(e);case 6:t.sent,r(),t.next=17;break;case 10:t.prev=10,t.t0=t.catch(3),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 17:case"end":return t.stop()}},t,this,[[3,10]])})),function(t,e,n){return r.apply(this,arguments)}),k=(o=m()(f.a.mark(function t(e,n,r){var o,a,i,u,s,p,l,d,h=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(!o){o=!0;var e=[];R=Object(j.e)(n,e).map(function(t,r){return Object(j.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(j.m)($,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,i=[],(u=Object(j.e)(e,i)).length){t.next=24;break}return t.next=13,D.call(this,u,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout($.context):_.a.layout);case 17:return s=t.sent,t.next=20,D.call(this,u,$.context,s);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(q(u,e,n)),t.prev=26,t.next=29,D.call(this,u,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(p=u[0].options.layout)&&(p=p($.context)),t.next=37,this.loadLayout(p);case 37:return p=t.sent,t.next=40,D.call(this,u,$.context,p);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,u.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{}}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(u.map(function(t,n){if(t._path=Object(j.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==R[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch;if(a){var s=Object(j.j)(t.options.asyncData,$.context).then(function(e){Object(j.a)(t,e)});o.push(s)}if(u){var p=t.options.fetch($.context);p&&(p instanceof c.a||"function"==typeof p.then)||(p=c.a.resolve(p)),p.then(function(t){}),o.push(p)}return c.a.all(o)}));case 51:o||(R=u.map(function(t,n){return Object(j.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),R=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=_.a.layout)&&(d=d($.context)),t.next=63,this.loadLayout(d);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=m()(f.a.mark(function t(e){var n,r,o,a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,O=e.router,t.next=4,c.a.all(L(O));case 4:return n=t.sent,r=new g.default($),o=T.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){F(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(q(n,O.currentRoute)),R=O.currentRoute.matched.map(function(t){return Object(j.b)(t.path)(O.currentRoute.params)})),r.$loading={},T.error&&r.error(T.error),O.beforeEach(C.bind(r)),O.beforeEach(k.bind(r)),O.afterEach(S),O.afterEach(B.bind(r)),!T.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:k.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return S(O.currentRoute,O.currentRoute),M.call(r,O.currentRoute),void a();O.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),R=[],$=void 0,O=void 0,T=window.__NUXT__||{};function q(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);y()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function A(t,e){return T.serverRendered&&e&&Object(j.a)(t,e),t._Ctor=t,t}function L(t){var e,n=this,r=Object(j.d)(t.options.base,t.options.mode);return Object(j.c)(t.match(r),(e=m()(f.a.mark(function t(e,r,o,a,i){var u;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=A(Object(j.l)(e),T.data?T.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function D(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!a)return Object(j.i)(o,e)}function S(t,e){Object(j.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":u()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function B(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(j.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&R[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function F(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YJBD:function(t,e,n){var r=n("beaC");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6ee3ca27",r,!1,{sourceMap:!1})},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||v;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return R(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=R,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},u=r||{},s=u.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var p=t[c];if("string"!=typeof p){var f,l=i[p.name];if(null==l){if(p.optional){p.partial&&(a+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(Array.isArray(l)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!e[c].test(f))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+o()(f)+"`");a+=(0===d?p.prefix:p.delimiter)+f}}else{if(f=p.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[c].test(f))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+f+'"');a+=p.prefix+f}}else a+=p}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=$.exec(t));){var s=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+s.length,c)i+=c[1];else{var f=t[a],l=n[2],d=n[3],h=n[4],m=n[5],x=n[6],y=n[7];i&&(r.push(i),i="");var v=null!=l&&null!=f&&f!==l,b="+"===x||"*"===x,g="?"===x||"*"===x,w=n[2]||u,_=h||m;r.push({name:d||o++,prefix:l||"",delimiter:w,optional:g,repeat:b,partial:v,asterisk:!!y,pattern:_?q(_):y?".*":"[^"+T(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),u=n("Xxa5"),s=n.n(u),c=n("exGp"),p=n.n(c),f=n("//Fk"),l=n.n(f),d=n("fZjL"),h=n.n(d),m=n("Dd8w"),x=n.n(m),y=n("/5sW"),v=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=y.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return l.a.all(w(t,(e=p()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var j,C,k=(j=p()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return j.apply(this,arguments)}),E=(C=p()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=13;break}t.t0=!0,t.t1=e,t.t2=n.payload,t.t3=n.error,t.t4={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/",env:t.t4},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 13:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=21;break}return t.next=20,k(n.route);case 20:e.context.route=t.sent;case 21:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=27;break}return t.next=26,k(n.from);case 26:e.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)})),function(t,e){return C.apply(this,arguments)});function R(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},beaC:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},ct3O:function(t,e,n){"use strict";var r=n("l8Ug"),o=n("QhKw"),a=!1;var i=function(t){a||n("YJBD")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-error.vue",e.a=u.exports},l8Ug:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},mtxM:function(t,e,n){"use strict";e.a=function(){return new o.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:S,routes:[{path:"/rationale-for-joy",component:a,name:"rationale-for-joy"},{path:"/overview-of-joy",component:i,name:"overview-of-joy"},{path:"/faq-part-2",component:u,name:"faq-part-2"},{path:"/about",component:s,name:"about"},{path:"/faq",component:c,name:"faq"},{path:"/libraries-and-c-sources",component:p,name:"libraries-and-c-sources"},{path:"/papers-on-joy",component:f,name:"papers-on-joy",children:[{path:"design-of-matrix-multiplication-programs",component:l,name:"papers-on-joy-design-of-matrix-multiplication-programs"},{path:"tutorial-on-joy",component:d,name:"papers-on-joy-tutorial-on-joy"},{path:"church-arithmetic-and-church-logic-with-brent-kirby",component:h,name:"papers-on-joy-church-arithmetic-and-church-logic-with-brent-kirby"},{path:"survey-of-reproducing-programs",component:m,name:"papers-on-joy-survey-of-reproducing-programs"},{path:"the-algebra-of-joy",component:x,name:"papers-on-joy-the-algebra-of-joy"},{path:"mathematical-foundations-of-joy",component:y,name:"papers-on-joy-mathematical-foundations-of-joy"},{path:"joy-compared-with-other-functional-languages",component:v,name:"papers-on-joy-joy-compared-with-other-functional-languages"},{path:"fast-small-truth-tables",component:b,name:"papers-on-joy-fast-small-truth-tables"},{path:"imperative-thinking-for-joy-programs",component:g,name:"papers-on-joy-imperative-thinking-for-joy-programs"},{path:"atomic-programs-of-joy",component:w,name:"papers-on-joy-atomic-programs-of-joy"},{path:"nested-recursion-and-a-new-recursion-combinator",component:_,name:"papers-on-joy-nested-recursion-and-a-new-recursion-combinator"},{path:"programming-in-joy",component:j,name:"papers-on-joy-programming-in-joy"},{path:"html-manual",component:C,name:"papers-on-joy-html-manual"},{path:"design-of-a-joy-interpreter-written-in-joy",component:k,name:"papers-on-joy-design-of-a-joy-interpreter-written-in-joy"},{path:"the-annoying-quadratic-formula",component:E,name:"papers-on-joy-the-annoying-quadratic-formula"},{path:"floy-a-flat-concatenative-subset-of-joy",component:R,name:"papers-on-joy-floy-a-flat-concatenative-subset-of-joy"},{path:"recursion-theory-and-joy",component:$,name:"papers-on-joy-recursion-theory-and-joy"},{path:"a-rewriting-system-for-joy",component:O,name:"papers-on-joy-a-rewriting-system-for-joy"},{path:"lazy-lists-as-reproducing-programs",component:T,name:"papers-on-joy-lazy-lists-as-reproducing-programs"},{path:"the-current-implementation",component:q,name:"papers-on-joy-the-current-implementation"}]},{path:"/c-sources/miscellaneous-miniature-implementations-of-joy",component:A,name:"c-sources-miscellaneous-miniature-implementations-of-joy"},{path:"/c-sources/prospectus-for-john-cowans-joy1",component:L,name:"c-sources-prospectus-for-john-cowans-joy1"},{path:"/",component:D,name:"index"}],fallback:!1})};var r=n("/5sW"),o=n("/ocq");r.default.use(o.default);var a=function(){return n.e(7).then(n.bind(null,"2zBy")).then(function(t){return t.default||t})},i=function(){return n.e(9).then(n.bind(null,"h/sc")).then(function(t){return t.default||t})},u=function(){return n.e(25).then(n.bind(null,"Sljb")).then(function(t){return t.default||t})},s=function(){return n.e(3).then(n.bind(null,"hSk2")).then(function(t){return t.default||t})},c=function(){return n.e(21).then(n.bind(null,"NAEW")).then(function(t){return t.default||t})},p=function(){return n.e(1).then(n.bind(null,"5gIY")).then(function(t){return t.default||t})},f=function(){return n.e(12).then(n.bind(null,"Uhp1")).then(function(t){return t.default||t})},l=function(){return n.e(14).then(n.bind(null,"hS6g")).then(function(t){return t.default||t})},d=function(){return n.e(8).then(n.bind(null,"YcIP")).then(function(t){return t.default||t})},h=function(){return n.e(6).then(n.bind(null,"SIgt")).then(function(t){return t.default||t})},m=function(){return n.e(18).then(n.bind(null,"w0td")).then(function(t){return t.default||t})},x=function(){return n.e(4).then(n.bind(null,"610A")).then(function(t){return t.default||t})},y=function(){return n.e(22).then(n.bind(null,"LsdE")).then(function(t){return t.default||t})},v=function(){return n.e(17).then(n.bind(null,"GDJK")).then(function(t){return t.default||t})},b=function(){return n.e(11).then(n.bind(null,"4Mod")).then(function(t){return t.default||t})},g=function(){return n.e(15).then(n.bind(null,"lGpw")).then(function(t){return t.default||t})},w=function(){return n.e(29).then(n.bind(null,"Cc3T")).then(function(t){return t.default||t})},_=function(){return n.e(20).then(n.bind(null,"3sga")).then(function(t){return t.default||t})},j=function(){return n.e(13).then(n.bind(null,"OQ57")).then(function(t){return t.default||t})},C=function(){return n.e(24).then(n.bind(null,"DGHM")).then(function(t){return t.default||t})},k=function(){return n.e(16).then(n.bind(null,"eSrG")).then(function(t){return t.default||t})},E=function(){return n.e(5).then(n.bind(null,"aJKn")).then(function(t){return t.default||t})},R=function(){return n.e(23).then(n.bind(null,"9hUb")).then(function(t){return t.default||t})},$=function(){return n.e(19).then(n.bind(null,"SXzG")).then(function(t){return t.default||t})},O=function(){return n.e(28).then(n.bind(null,"S1ZD")).then(function(t){return t.default||t})},T=function(){return n.e(26).then(n.bind(null,"K18I")).then(function(t){return t.default||t})},q=function(){return n.e(27).then(n.bind(null,"v6C0")).then(function(t){return t.default||t})},A=function(){return n.e(10).then(n.bind(null,"JoV1")).then(function(t){return t.default||t})},L=function(){return n.e(30).then(n.bind(null,"0cTn")).then(function(t){return t.default||t})},D=function(){return n.e(2).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})},S=function(t,e,n){return{x:0,y:0}}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),p=n("Dd8w"),f=n.n(p),l=n("exGp"),d=n.n(l),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),y=n.n(x),v=n("mtxM"),b=n("0F0d"),g=n("HBB+"),w=n("WRRc"),_=n("ct3O"),j=n("Hot+"),C=n("yTq1"),k=n("YLfZ");n.d(e,"a",function(){return _.a});var E,R=(E=d()(o.a.mark(function t(e){var n,r,a,i,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(v.a)(e),r=f()({router:n,nuxt:{defaultTransition:$,transitions:[$],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},$,{name:t}):c()({},$,t):$}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),a=e?e.next:function(t){return r.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(s=Object(k.d)(n.options.base),i=n.resolve(s).route),t.next=7,Object(k.m)(r,{route:i,next:a,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 7:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=11;break;case 11:return t.abrupt("return",{app:r,router:n});case 12:case"end":return t.stop()}},t,this)})),function(t){return E.apply(this,arguments)});m.default.component(b.a.name,b.a),m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(j.a.name,j.a),m.default.use(y.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var $={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";e.a={}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i={_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"Joy language",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Joy Programming Language"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Fira+Sans:200,500|Roboto:400|Roboto+Mono:400"},{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico?"}],style:[],script:[]},render:function(t,e){var n=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[n])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},methods:{setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(i["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?o.a.resolve(u[n]):i[n]().then(function(t){return u[n]=t,delete i[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{}}}},["T23V"]);