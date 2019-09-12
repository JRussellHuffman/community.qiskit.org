/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}o.d(e,"a",function(){return r})},190:function(t,e,o){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}o.d(e,"a",function(){return r})},191:function(t,e,o){"use strict";var r=o(17);function n(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}o.d(e,"a",function(){return n})},192:function(t,e,o){"use strict";function r(t,p){return(r=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}o.d(e,"a",function(){return n})},193:function(t,e,o){"use strict";var r=o(1),n="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,o){(o?Reflect.getOwnMetadataKeys(e,o):Reflect.getOwnMetadataKeys(e)).forEach(function(r){var n=o?Reflect.getOwnMetadata(r,e,o):Reflect.getOwnMetadata(r,e);o?Reflect.defineMetadata(r,n,t,o):Reflect.defineMetadata(r,n,t)})}var l={__proto__:[]}instanceof Array;function f(t){return function(e,o,r){var n="function"==typeof e?e:e.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof r&&(r=void 0),n.__decorators__.push(function(e){return t(e,o,r)})}}var v=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var o=t.prototype;Object.getOwnPropertyNames(o).forEach(function(t){if("constructor"!==t)if(v.indexOf(t)>-1)e[t]=o[t];else{var r=Object.getOwnPropertyDescriptor(o,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=r.value,e}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var o=e.prototype._init;e.prototype._init=function(){var e=this,o=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||o.push(r);o.forEach(function(o){"_"!==o.charAt(0)&&Object.defineProperty(e,o,{get:function(){return t[o]},set:function(e){t[o]=e},configurable:!0})})};var data=new e;e.prototype._init=o;var r={};return Object.keys(data).forEach(function(t){void 0!==data[t]&&(r[t]=data[t])}),r}(this,t)}});var f=t.__decorators__;f&&(f.forEach(function(t){return t(e)}),delete t.__decorators__);var d,m,h=Object.getPrototypeOf(t.prototype),y=h instanceof r.a?h.constructor:r.a,k=y.extend(e);return function(t,e,o){Object.getOwnPropertyNames(e).forEach(function(r){if(!_[r]){var n=Object.getOwnPropertyDescriptor(t,r);if(!n||n.configurable){var c,f,v=Object.getOwnPropertyDescriptor(e,r);if(!l){if("cid"===r)return;var d=Object.getOwnPropertyDescriptor(o,r);if(c=v.value,f=typeof c,null!=c&&("object"===f||"function"===f)&&d&&d.value===v.value)return}0,Object.defineProperty(t,r,v)}}})}(k,t,y),n&&(c(d=k,m=t),Object.getOwnPropertyNames(m.prototype).forEach(function(t){c(d.prototype,m.prototype,t)}),Object.getOwnPropertyNames(m).forEach(function(t){c(d,m,t)})),k}var _={prototype:!0,arguments:!0,callee:!0,caller:!0};function m(t){return"function"==typeof t?d(t):function(e){return d(e,t)}}m.registerHooks=function(t){v.push.apply(v,t)};var h=m;o.d(e,"b",function(){return w}),o.d(e,"a",function(){return h});var y="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function k(t,e,o){y&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,o)))}function w(t){return void 0===t&&(t={}),function(e,o){k(t,e,o),f(function(e,o){(e.props||(e.props={}))[o]=t})(e,o)}}},194:function(t,e,o){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}o.d(e,"a",function(){return n})},228:function(t,e,o){var content=o(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(68).default)("d7f17712",content,!0,{sourceMap:!1})},229:function(t,e,o){var content=o(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(68).default)("a3ccaeb2",content,!0,{sourceMap:!1})},232:function(t,e,o){"use strict";o(95);var r=o(189),n=o(194),c=o(191),l=o(190),f=o(192),v=o(17),d=o(1),_=o(193),m=function(t,e,o,desc){var r,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c},h=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(n.a)(e,[{key:"isActive",value:function(path){return this.$route.path.startsWith(path)}}]),e}(d.a);m([Object(_.b)({type:Array,default:function(){return[{to:"/education",label:"Education"},{to:"/advocates",label:"Advocates"},{to:"/experiments",label:"Experiments"}]}})],h.prototype,"links",void 0);var y=h=m([_.a],h),k=(o(277),o(36)),component=Object(k.a)(y,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"menu-container"},[o("div",{staticClass:"menu menu--framed"},[o("section",{staticClass:"drawer",attrs:{tabindex:"-1"}},[o("svg",{staticClass:"drawer-toggle",attrs:{height:"24",viewBox:"0 0 24 24",width:"24"}},[o("path",{attrs:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}})]),t._v(" "),o("div",{staticClass:"overlay"}),t._v(" "),o("nav",{staticClass:"vertical-navigation"},[o("h2",[t._v("Elements")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/terra"}},[t._v("Terra")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/aer"}},[t._v("Aer")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/aqua"}},[t._v("Aqua")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/ignis"}},[t._v("Ignis")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/ibmqaccount"}},[t._v("IBM Q Account")]),t._v(" "),o("h2",[t._v("Learn more")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item vertical-navigation__item--active",attrs:{href:"/"}},[t._v("Community")]),t._v(" "),o("div",{staticClass:"vertical-community-navigation"},t._l(t.links,function(link,e){return o("a",{key:e,class:{"vertical-community-navigation__item":!0,"nuxt-link-active":t.isActive(link.to)},attrs:{href:link.to}},[t._v("\n              "+t._s(link.label)+"\n            ")])}),0),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorials/blob/master/qiskit/1_start_here.ipynb"}},[t._v("Tutorials")]),t._v(" "),o("a",{staticClass:"vertical-navigation__item",attrs:{href:"https://qiskit.org/documentation"}},[t._v("API Documentation")])])]),t._v(" "),o("a",{staticClass:"link-to-home",attrs:{href:"https://qiskit.org"}},[t._v("Qiskit")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),o("div",{staticClass:"community-menu menu-container menu-container--light"},[o("section",{staticClass:"menu menu--framed"},[o("nav",{staticClass:"navigation-group navigation-group--right-aligned navigation-group--fixed"},t._l(t.links,function(link,e){return o("a",{key:e,class:{"navigation-group__item":!0,"nuxt-link-active":t.isActive(link.to)},attrs:{href:link.to}},[t._v("\n          "+t._s(link.label)+"\n        ")])}),0)])])])},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navigation-group navigation-group--with-separator"},[o("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/terra"}},[t._v("Terra")]),t._v(" "),o("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/aer"}},[t._v("Aer")]),t._v(" "),o("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/aqua"}},[t._v("Aqua")]),t._v(" "),o("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/ignis"}},[t._v("Ignis")]),t._v(" "),o("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/ibmqaccount"}},[t._v("IBM Q Account")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navigation-group navigation-group--fixed navigation-group--right-aligned"},[e("a",{staticClass:"navigation-group__item navigation-group__item--active",attrs:{href:"/"}},[this._v("Community")]),this._v(" "),e("a",{staticClass:"navigation-group__item",attrs:{href:"https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorials/blob/master/qiskit/1_start_here.ipynb"}},[this._v("Tutorials")]),this._v(" "),e("a",{staticClass:"navigation-group__item",attrs:{href:"https://qiskit.org/documentation"}},[this._v("API Documentation")])])}],!1,null,"11dcba9a",null);e.a=component.exports},234:function(t,e,o){"use strict";o(279);var r=o(36),component=Object(r.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"page-footer-container"},[o("div",{staticClass:"page-footer page-footer--framed"},[o("section",{staticClass:"footer-column"},[o("h2",{staticClass:"footer-column__title"},[t._v("\n          Qiskit Elements\n        ")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.org/terra"}},[t._v("Terra")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.org/aer"}},[t._v("Aer")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.org/aqua"}},[t._v("Aqua")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.org/ignis"}},[t._v("Ignis")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.org/ibmq"}},[t._v("IBM Q")])])])]),t._v(" "),o("section",{staticClass:"footer-column"},[o("h2",{staticClass:"footer-column__title"},[t._v("\n          Qiskit for Educators\n        ")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"/textbook"}},[t._v("Textbook")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY",target:"_blank",rel:"noopener"}},[t._v("Coding With Qiskit")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"mailto:hello@qiskit.camp",target:"_blank",rel:"noopener"}},[t._v("Host an Event")])])]),t._v(" "),o("h2",{staticClass:"footer-column__title"},[t._v("\n          Qiskit Advocates\n        ")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"/advocates#become-an-advocate"}},[t._v("Become an Advocate")])])]),t._v(" "),o("h2",{staticClass:"footer-column__title"},[t._v("\n          Qiskit Experiments\n        ")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"/experiments#browse-the-experiments"}},[t._v("Browse the experiments")])])])]),t._v(" "),o("section",{staticClass:"footer-column"},[o("h2",{staticClass:"footer-column__title"},[t._v("\n          Social Media\n        ")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://github.com/Qiskit",target:"_blank",rel:"noopener"}},[t._v("GitHub")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://qiskit.slack.com/",target:"_blank",rel:"noopener"}},[t._v("Slack")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://twitter.com/Qiskit",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://medium.com/Qiskit",target:"_blank",rel:"noopener"}},[t._v("Medium")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://www.youtube.com/Qiskit",target:"_blank",rel:"noopener"}},[t._v("YouTube")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://quantumcomputing.stackexchange.com/questions/tagged/qiskit",target:"_blank",rel:"noopener"}},[t._v("Stack Exchange")])]),t._v(" "),o("li",[o("a",{staticClass:"footer-column__link",attrs:{href:"https://www.facebook.com/Qiskit",target:"_blank",rel:"noopener"}},[t._v("Facebook")])])])])])])])}],!1,null,"6f254cd0",null);e.a=component.exports},277:function(t,e,o){"use strict";var r=o(228);o.n(r).a},278:function(t,e,o){(t.exports=o(67)(!1)).push([t.i,'*[data-v-11dcba9a]{box-sizing:border-box}.menu-container[data-v-11dcba9a]{font-size:16px;font-weight:400;border-bottom:1px solid #000;background-color:#21252b;--link-color:#fff}.menu-container--light[data-v-11dcba9a]{--link-color:var(--body-color-dark);background-color:var(--secondary-color-lightmost);border-bottom:none}.menu[data-v-11dcba9a]{height:60px;display:flex;font-size:.8rem}.menu>*[data-v-11dcba9a]{height:100%}.menu--framed[data-v-11dcba9a]{max-width:1100px;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}.navigation-group[data-v-11dcba9a]{display:flex}.navigation-group__item[data-v-11dcba9a]{display:inline-flex;align-items:center;padding:0 1em;color:var(--link-color);text-decoration:none}.navigation-group__item.nuxt-link-active[data-v-11dcba9a]{font-weight:700;position:relative;top:1px;border-bottom:4px solid var(--secondary-color)}.navigation-group__item--active[data-v-11dcba9a]{padding-top:2px;position:relative;top:1px;border-bottom:4px solid var(--secondary-color)}.navigation-group--with-separator[data-v-11dcba9a]:before{content:"";background-color:hsla(0,0%,100%,.26667);width:2px;margin:12px 10px}.navigation-group--right-aligned[data-v-11dcba9a]{margin-left:auto}.navigation-group--fixed[data-v-11dcba9a]{margin-right:-.4rem}.link-to-home[data-v-11dcba9a]{display:inline-flex;align-items:center;margin-left:-1.2rem;padding:0 1em;color:var(--link-color);text-decoration:none}.drawer[data-v-11dcba9a]{display:none}.drawer-toggle[data-v-11dcba9a]{fill:#fff;height:100%;cursor:pointer;margin:0 0 0 1.5rem}.overlay[data-v-11dcba9a]{right:0;z-index:150;background-color:#000;opacity:0;transition:opacity .2s;pointer-events:none}.overlay[data-v-11dcba9a],.vertical-navigation[data-v-11dcba9a]{position:fixed;top:0;bottom:0;left:0}.vertical-navigation[data-v-11dcba9a]{display:flex;flex-direction:column;z-index:200;width:256px;padding:1.3rem;background-color:var(--primary-color);transform:translateX(-100%);transition:transform .2s;overflow-y:auto}.vertical-navigation h2[data-v-11dcba9a]{font-size:.8rem;font-weight:400;color:var(--primary-color-lightmost);padding:1em}.vertical-navigation__item[data-v-11dcba9a]{font-size:.9rem;text-decoration:none;color:#fff;padding:.5rem 1.5em}.vertical-community-navigation[data-v-11dcba9a]{display:flex;flex-direction:column;margin:0 -1.3rem;padding:1rem 0;background-color:var(--secondary-color-lightmost)}.vertical-community-navigation__item[data-v-11dcba9a]{font-size:.9rem;text-decoration:none;color:#fff;padding:.5rem 3rem;color:var(--body-color-dark)}.vertical-community-navigation__item.nuxt-link-active[data-v-11dcba9a]{font-weight:700;border-left:4px solid var(--secondary-color);padding-left:calc(3rem - 4px)}.drawer[focus-within] .vertical-navigation[data-v-11dcba9a]{transform:translateX(0)}.drawer:focus-within .vertical-navigation[data-v-11dcba9a]{transform:translateX(0)}.drawer[focus-within] .overlay[data-v-11dcba9a]{opacity:.5}.drawer:focus-within .overlay[data-v-11dcba9a]{opacity:.5}@media (max-width:830px){#navigation[data-v-11dcba9a]{min-height:60px}.link-to-home[data-v-11dcba9a]{font-size:1.1rem;margin-left:-.5rem}.drawer[data-v-11dcba9a]{display:unset;margin-left:-2rem}.community-menu[data-v-11dcba9a],.navigation-group[data-v-11dcba9a]{display:none}}',""])},279:function(t,e,o){"use strict";var r=o(229);o.n(r).a},280:function(t,e,o){(t.exports=o(67)(!1)).push([t.i,".page-footer-container[data-v-6f254cd0]{margin-top:4rem;padding-bottom:4rem}.page-footer[data-v-6f254cd0]{display:flex;flex-direction:row;font-size:.9rem;color:var(--primary-color-lightmost)}.page-footer ul[data-v-6f254cd0]{list-style:none;margin-top:1.5rem}.page-footer li[data-v-6f254cd0]{margin-top:.5rem;display:inline-block;width:100%}.page-footer--framed[data-v-6f254cd0]{max-width:1100px;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}.footer-column[data-v-6f254cd0]{flex:1;margin-right:2rem}.footer-column__title[data-v-6f254cd0]{margin-top:2rem;font-size:inherit;font-weight:400;padding-bottom:.5rem;border-bottom:1px solid var(--primary-color-lightmost)}.footer-column__title[data-v-6f254cd0]:first-child{margin-top:0}.footer-column__link[data-v-6f254cd0]{color:inherit;text-decoration:none;display:inline-block;width:100%}.footer-column__link[data-v-6f254cd0]:hover{color:var(--body-color-light)}.footer-column[data-v-6f254cd0]:last-child{margin-right:0}@media (max-width:600px){.page-footer[data-v-6f254cd0]{display:block}.footer-column[data-v-6f254cd0]{margin-top:2rem;margin-right:0}.footer-column[data-v-6f254cd0]:first-child{margin-top:0}}",""])}}]);