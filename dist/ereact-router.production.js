!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EReactRouter=e():t.EReactRouter=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";var o=null;o=n(1),t.exports=o.default||o},function(t,e,n){(function(t){var n,o,r;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(u,c){"object"==i(e)&&"object"==i(t)?t.exports=c():(o=[],void 0===(r="function"==typeof(n=c)?n.apply(e,o):n)||(t.exports=r))}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==i(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o="@ereact/__internal_node",r=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},u=[];function c(t,e){this._dirty=!1,this.props=t||{},this.context=e||{},this._renderCallbacks=[]}Object.assign(c.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=Object.assign({},this.state,t),"function"==typeof e&&this._renderCallbacks.push(e);var n=this[o],i=n.dom,u=n.element,c=r(i)?i[0].parentNode:i.parentNode;a("@ereact/render_async",c,n,u)},forceUpdate:function(t){"function"==typeof t&&this._renderCallbacks.push(t);var e=this[o],n=e.dom,i=e.element,u=r(n)?n[0].parentNode:n.parentNode;a("@ereact/force_update",u,e,i)},render:function(){}});var a=function t(e,n,o,i,c,a){var l=o.instance;a&&f(l,i.props);var p=l.props,s=l.state,d=l.prevProps||p,m=l.prevState||s,h=l.prevContext||c,b=!1;if("@ereact/render_async"!==e){if(l._dirty=!1,l.props=d,l.state=m,l.context=h,"@ereact/force_update"!==e&&"function"==typeof l.shouldComponentUpdate&&!1===l.shouldComponentUpdate(p,s)?b=!0:"function"==typeof l.componentWillUpdate&&l.componentWillUpdate(p,s),l.props=p,l.state=s,l.context=c,l.prevProps=l.prevState=l.prevContext=null,!b){"function"==typeof l.getChildContext&&(c=Object.assign({},c,l.getChildContext()));var v=l.render(),_=o.childNode,g=y(n,_,v,c),O=r(g)?g.map(function(t){return t.dom}):g.dom;for(Object.assign(o,{dom:O,childNode:g,element:i}),"function"==typeof l.componentDidUpdate&&l.componentDidUpdate(d,m);l._renderCallbacks.length;)l._renderCallbacks.pop().call(l)}return o}l._dirty||1!==u.push({instance:l,parentDom:n,oldNode:o,element:i,context:c})||(l._dirty=!0,function(t){"function"==typeof Promise?Promise.resolve().then(t):setTimeout(t)}(function(){var e=u.pop(),n=e.instance,o=e.parentDom,r=e.oldNode,i=e.element,c=e.context;n._dirty&&t("@ereact/render_sync",o,r,i,c)}))},l=function(t,e,n){var o;if(!t.prototype||!t.prototype.render){var r=t;(t=function(t,e){c.prototype.constructor.bind(this,t,e)}).prototype=c.prototype,t.prototype.render=function(){return r(this.props)}}return o=new t(e,n),c.call(o,e,n),o.constructor=t,o},f=function(t,e){var n=!!t[o];n&&"function"==typeof t.componentWillReceiveProps?t.componentWillReceiveProps(e):n||"function"!=typeof t.componentWillMount||t.componentWillMount(),t.prevProps||(t.prevProps=t.props),t.prevContext||(t.prevContext=t.context),t.props=e},p=function(t,e){t.prevProps=t.prevState=t.prevContext=null,"function"==typeof t.getChildContext&&(e=Object.assign({},e,t.getChildContext()));var n,i=t.render(),u=null;for(n=r(i)?(u=i.map(function(t){return d(t,e)})).map(function(t){return t.dom}):(u=d(i,e)).dom,Object.assign(t[o],{dom:n,childNode:u,instance:t}),"function"==typeof t.componentDidMount&&t.componentDidMount();t._renderCallbacks.length;)t._renderCallbacks.pop().call(t)};function s(t){return(s="function"==typeof Symbol&&"symbol"==i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}var d=function(t,e){var n=t.type,r=t.props,i="@ereact/__text_element__"===n;if("function"==typeof n)return function(t,e){var n=t.type,r=t.props,i=null;return i=l(n,r,e),f(i,r),i[o]=i[o]||{element:t},p(i,e),i[o]}(t,e);var u=i?document.createTextNode(""):document.createElement(n),c=m({dom:u},t,e);return h(u,{},r),{dom:u,element:t,childNodes:c}},y=function(t,e,n,o){if(null==e){r(n)&&n.map(d).forEach(function(e){t.appendChild(e.dom)});var i=d(n,o);return r(i.dom)?function t(e){return e.reduce(function(e,n){return e.concat(r(n)?t(n):n)},[])}(i.dom).forEach(function(e){return t.appendChild(e)}):i.dom&&t.appendChild(i.dom),i}if(null==n)return r(e)?e.forEach(function(e){t.removeChild(e.dom)}):e.dom&&t.removeChild(e.dom),null;if(r(e)&&r(n))return m({dom:t,childNodes:e},{props:{children:n}},o);if((e.element||{}).type!==n.type){var u=d(n,o);return e.element&&"function"==typeof e.element.type&&"function"==typeof e.instance.componentWillUnmount&&e.instance.componentWillUnmount(),(e.dom||e[0].dom)&&t.replaceChild(u.dom,e.dom||e[0].dom),u}return"string"==typeof n.type?(e.childNodes=m(e,n,o),h(e.dom,e.element.props,n.props),e.element=n,e):a("@ereact/render_sync",t,e,n,o,!0)},m=function(t,e,n){for(var o=t.childNodes||[],r=e.props.children||[],i=[],u=Math.max(o.length,r.length),c=0;c<u;c++){var a=y(t.dom,o[c],r[c],n);i.push(a)}return i},h=function(t,e,n){for(name in e)null==n[name]&&b(t,name,void 0);for(name in n)n[name]!==e[name]&&b(t,name,n[name])},b=function(t,e,n){if("className"===e&&(e="class"),"htmlFor"===e&&(e="for"),"key"===e||"children"===e||"innerHTML"===e);else if("nodeValue"===e)t.nodeValue=n;else if("ref"===e&&null!=n)"function"==typeof n?n(t):console.error("ref should be an function");else if("style"===e){if("object"===s(n))for(var o in n)t.style[o]="number"==typeof n[o]?"".concat(n[o],"px"):n[o];"string"!=typeof n&&null!=n||(t.style=n)}else if("dangerouslySetInnerHTML"===e)"object"===s(n)&&(t.innerHTML=n.__html);else if(e.startsWith("on")){var r=e.endsWith("Capture"),i=e.toLowerCase().substring(2);n?t.addEventListener(i,v,r):t.removeEventListener(i,v,r),(t._listener||(t._listener={}))[i]=n}else t.setAttribute(e,n)};function v(t){return this._listener[t.type](t)}e.default={createElement:function(t,e){for(var n,o=Object.assign({},e),r=arguments.length,i=new Array(r>2?r-2:0),u=2;u<r;u++)i[u-2]=arguments[u];var c=(n=[]).concat.apply(n,i).filter(function(t){return null!=t&&"boolean"!=typeof t}).map(function(t){return t instanceof Object?t:function(t){return{type:"@ereact/__text_element__",props:{nodeValue:t}}}(t)});return o.children=c,{type:t,props:o,children:c}},render:function(t,e){y(e,null,t,{})},Component:c}}])})}).call(this,n(2)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n="^"+t.replace(/\/:([^\/]+)/g,function(t,n){return e.push({name:n}),"/([^/]+)"});return new RegExp(n)}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(3),u=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\/$/,"")||"/"},c={routes:[],mode:null,config:function(t){return c.mode=t&&t.mode&&"history"===t.mode&&history.pushState?"history":"hash",c},add:function(t,e){return c.routes.push({path:u(t),handler:e}),c},remove:function(t){return c.routes.forEach(function(e,n){e.path===u(t)&&c.routes.splice(n,1)}),c},match:function(t,e){return i(t).test(e)},current:function(){return"history"===c.mode?location.pathname:location.hash},listen:function(){var t=c.current();return clearInterval(c.interval),c.interval=setInterval(function(){var e=c.current();e!==t&&(t=e,c.routes.filter(function(e){return c.match(e.path,t)}).forEach(function(e){return e.handler(t)}))},50),c},flush:function(){return c.routes=[],c.mode=null,c.root="/",c},navigate:function(t){"history"===c.mode?history.pushState(null,null,t):window.location.href=window.location.href.replace(/#(.*)$/,"")+t},getUrlParams:function(t,e){var n=[],o=i(t,n),r={},u=e.match(o);return u.length>1&&(u.shift(),n.forEach(function(t,e){r[t.name]=u[e]})),r}},a=c;function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var y="/",m=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o="history"===(n=function(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?d(t):e}(this,p(e).call(this,t))).props.mode?"history":"hash";return a.config({mode:o}).listen(),n.addRoutePath=n.addRoutePath.bind(d(d(n))),n.state={url:y},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,r.a.Component),function(t,e,n){e&&f(t.prototype,e),n&&f(t,n)}(e,[{key:"componentDidMount",value:function(){var t=a.current();this.setState({url:t})}},{key:"getChildContext",value:function(){return{url:this.state.url,addRoutePath:this.addRoutePath}}},{key:"addRoutePath",value:function(t){var e=this;a.add(t,function(t){return e.setState({url:t})}),console.log(a.routes)}},{key:"render",value:function(){return this.props.children}}]),e}();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var O=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?g(t):e}(this,v(e).call(this,t))).handler=null,n.onClickLink=n.onClickLink.bind(g(g(n))),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,r.a.Component),function(t,e,n){e&&b(t.prototype,e),n&&b(t,n)}(e,[{key:"onClickLink",value:function(t){t.preventDefault(),a.navigate(this.props.to)}},{key:"render",value:function(){var t=this.props,e=t.to,n=void 0===e?"":e,o=t.children,i=void 0===o?null:o;return r.a.createElement("a",{href:n,onClick:this.onClickLink},i)}}]),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function x(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(t,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(0,(o=x(this,P(e).call(this,t,n))).context.addRoutePath)(o.props.path),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,r.a.Component),function(t,e,n){e&&S(t.prototype,e),n&&S(t,n)}(e,[{key:"render",value:function(){var t=this.props,e=t.exact,n=void 0!==e&&e,o=t.path,i=void 0===o?"":o,u=t.component,c=void 0===u?function(){return r.a.createElement("div",null)}:u,l=this.context.url;if(n?i===l:a.match(i,l)){var f=a.getUrlParams(i,l)||{};return r.a.createElement(c,{match:{params:f}})}return r.a.createElement("div",null)}}]),e}();e.default={BrowserRouter:m,Link:O,Route:w}}])});