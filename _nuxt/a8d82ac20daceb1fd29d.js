(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{227:function(e,t,r){var content=r(273);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("fe4fe7ae",content,!0,{sourceMap:!1})},228:function(e,t,r){var content=r(275);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("6ed2c143",content,!0,{sourceMap:!1})},229:function(e,t,r){var content=r(278);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("a4da5da0",content,!0,{sourceMap:!1})},271:function(e,t,r){"use strict";var n=r(6),o=r(21),c=r(70),d="".endsWith;n(n.P+n.F*r(71)("endsWith"),"String",{endsWith:function(e){var t=c(this,e,"endsWith"),r=arguments.length>1?arguments[1]:void 0,n=o(t.length),l=void 0===r?n:Math.min(o(r),n),f=String(e);return d?d.call(t,f,l):t.slice(l-f.length,l)===f}})},272:function(e,t,r){"use strict";var n=r(227);r.n(n).a},273:function(e,t,r){(e.exports=r(67)(!1)).push([e.i,"iframe[data-v-56c10029],img[data-v-56c10029],video[data-v-56c10029]{max-width:100%}",""])},274:function(e,t,r){"use strict";var n=r(228);r.n(n).a},275:function(e,t,r){(e.exports=r(67)(!1)).push([e.i,'.experiment-header-container[data-v-0d0f182e]{background-color:#000;padding-top:1rem;padding-bottom:4rem}.experiment-header-container>div[data-v-0d0f182e]{max-width:1100px;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}.experiment-header-container h1[data-v-0d0f182e]{font-size:2.5rem;color:#fff}.experiment-header__author[data-v-0d0f182e]{color:var(--secondary-color-lightmost);margin:1rem 0}.experiment-header__author[data-v-0d0f182e]:before{content:"by";color:var(--primary-color-lightmost)}.experiment-header__back-navigation[data-v-0d0f182e]{height:100%;vertical-align:middle;display:inline-flex;text-decoration:none;color:var(--secondary-color-lightmost);margin-bottom:2rem}.experiment-header__back-navigation[data-v-0d0f182e]:hover{border-bottom:1px solid var(--secondary-color-lightmost)}.experiment-header__back-navigation svg[data-v-0d0f182e]{width:.5rem}.experiment-header__back-navigation svg path[data-v-0d0f182e]{fill:var(--secondary-color-lightmost)}.experiment-header__back-navigation svg[data-v-0d0f182e]:last-child{margin-right:.25rem}.experiment-header__cta[data-v-0d0f182e]{margin-right:1rem}.experiment-header__media[data-v-0d0f182e]{width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:.5rem}.experiment-header__media>*[data-v-0d0f182e]{max-width:100%}.experiment-header__media[data-v-0d0f182e]>:first-child{grid-column-start:1;grid-column-end:3}',""])},276:function(e,t,r){var map={"./index/toc.md":[157,13],"./qiskit-blocks.md":[158,14],"./qonway-game-of-life.md":[159,15],"./quantilier.md":[160,16],"./quantiller.md":[161,17],"./quantum-toy-piano.md":[162,18],"./tictacq.md":[163,19]};function n(e){if(!r.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],n=t[0];return r.e(t[1]).then(function(){return r.t(n,7)})}n.keys=function(){return Object.keys(map)},n.id=276,e.exports=n},277:function(e,t,r){"use strict";var n=r(229);r.n(n).a},278:function(e,t,r){(e.exports=r(67)(!1)).push([e.i,"#copy{background-color:#fff;padding-top:0;padding-bottom:2rem}#copy .page-section{max-width:1100px;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}#copy ol,#copy ul{list-style-position:inside;padding-left:2rem;margin-top:1rem}#copy ul{list-style-type:square}#copy ol li,#copy ul li{margin:1rem 0}#copy h2{margin-top:3rem}#copy h3{margin-top:2rem}#copy p{text-align:justify}@media (max-width:800px){.secondary{display:block}.secondary>*{max-width:100%}.button{margin-bottom:.5rem}}",""])},291:function(e,t,r){"use strict";r.r(t);r(69),r(26),r(18),r(19),r(37);var n=r(49),o=(r(25),r(3)),c=r(191),d=r(193),l=r(192),f=r(194),m=r(17),h=r(1),v=r(195),y=r(202),_=(r(95),r(271),r(196)),w=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},x=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(_.a)(t,[{key:"isImg",value:function(e){return[".jpg",".jpeg",".gif",".png"].some(function(t){return e.endsWith(t)})}},{key:"isVideo",value:function(e){return[".mp4"].some(function(t){return e.endsWith(t)})}},{key:"isYouTube",value:function(e){return e.startsWith("https://www.youtube.com/embed/")}},{key:"isVimeo",value:function(e){return e.startsWith("https://player.vimeo.com/video/")}}]),t}(h.a);w([Object(v.b)(String)],x.prototype,"src",void 0);var O=x=w([v.a],x),j=(r(272),r(36)),k=Object(j.a)(O,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"media-container"},[e.isImg(e.src)?r("img",{attrs:{src:e.src}}):e._e(),e._v(" "),e.isVideo(e.src)?r("video",{attrs:{src:e.src}}):e._e(),e._v(" "),e.isYouTube(e.src)?r("iframe",{attrs:{width:"560",height:"315",src:e.src,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e(),e._v(" "),e.isVimeo(e.src)?r("iframe",{attrs:{src:e.src,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}}):e._e()])},[],!1,null,"56c10029",null).exports,P=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},R=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(h.a);P([Object(v.b)(String)],R.prototype,"name",void 0),P([Object(v.b)(String)],R.prototype,"authors",void 0),P([Object(v.b)(String)],R.prototype,"launch",void 0),P([Object(v.b)(String)],R.prototype,"source",void 0),P([Object(v.b)(Array)],R.prototype,"media",void 0);var C=R=P([Object(v.a)({components:{Cta:y.a,Media:k}})],R),M=(r(274),Object(j.a)(C,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"experiment-header-container"},[r("div",[r("a",{staticClass:"experiment-header__back-navigation",attrs:{href:"/experiments"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11 18"}},[r("path",{attrs:{fill:"#999",d:"M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z"}}),e._v(" "),r("path",{attrs:{fill:"#999",d:"M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z"}})]),e._v(" "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11 18"}},[r("path",{attrs:{fill:"#999",d:"M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z"}}),e._v(" "),r("path",{attrs:{fill:"#999",d:"M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z"}})]),e._v("\n      Back to experiments\n    ")]),e._v(" "),r("h1",[e._v(e._s(e.name))]),e._v(" "),r("p",{staticClass:"experiment-header__author"},[e._v("\n      "+e._s(e.authors)+"\n    ")]),e._v(" "),e.launch?r("Cta",{staticClass:"experiment-header__cta",attrs:{href:e.launch}},[e._v("\n      Launch\n    ")]):e._e(),e._v(" "),e.source?r("Cta",{staticClass:"experiment-header__cta",attrs:{href:e.source,secondary:""}},[e._v("\n      Explore the sources\n    ")]):e._e(),e._v(" "),r("div",{staticClass:"experiment-header__media"},e._l(e.media,function(e,t){return r("Media",{key:"media-item-"+t,attrs:{src:e}})}),1)],1)])},[],!1,null,"0d0f182e",null).exports),S=r(201),D=r(235);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}function W(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}var z,L=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},V=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),t}(h.a),B=V=L([Object(v.a)({layout:"second-level",components:{ExperimentHeader:M,MdContent:D.a,PageSection:S.a},head:function(){var image=this.media[0].url;return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@qiskit"},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:image}]}},asyncData:(z=Object(o.a)(regeneratorRuntime.mark(function e(t){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==(n=t.route.params.experiment)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,r(276)("./".concat(n,".md"));case 5:return o=e.sent,e.abrupt("return",W({},o.attributes,{launch:o.attributes.launch},o.vue));case 7:case"end":return e.stop()}},e)})),function(e){return z.apply(this,arguments)})})],V),F=(r(277),Object(j.a)(B,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("header",[r("ExperimentHeader",{attrs:{name:e.title,authors:e.author,launch:e.launch,source:e.source,media:e.media}})],1),e._v(" "),r("PageSection",{attrs:{id:"copy"}},[r("MdContent",{attrs:{"render-fn":e.render,"static-render-fns":e.staticRenderFns}})],1)],1)},[],!1,null,null,null));t.default=F.exports}}]);