(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1037:function(t,e,o){"use strict";var n=o(878);o.n(n).a},1038:function(t,e,o){(e=o(8)(!1)).push([t.i,'@-webkit-keyframes spin-data-v-3bb03b35{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-3bb03b35{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.search-page .platforms[data-v-3bb03b35]{display:inline-block;width:auto}.is-loading[data-v-3bb03b35]{position:relative;height:100px}.is-loading[data-v-3bb03b35]:after{content:"";position:absolute;top:50%;left:50%;margin-top:-1.5rem;margin-left:-1.5rem;width:3rem;height:3rem;border-radius:50%;border:2px solid hsla(0,0%,66.7%,.2);border-top-color:hsla(0,0%,66.7%,.8);-webkit-animation:spin-data-v-3bb03b35 1s linear infinite;animation:spin-data-v-3bb03b35 1s linear infinite}.icon-total-count[data-v-3bb03b35]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:32px;padding:4px 12px;margin-top:16px;background:#f5f7fa;border-radius:6px;font-size:16px;line-height:24px;color:#1a1a1a;display:flex;justify-content:center;align-items:center}.icon-total-count .search-icon[data-v-3bb03b35]{width:16px;height:16px;margin-right:9px}',""]),t.exports=e},3238:function(t,e,o){"use strict";o.r(e);o(15),o(13),o(11),o(12),o(30),o(31),o(32),o(19);var n=o(0),r=(o(7),o(4));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"SearchPage",components:{IstockBanner:function(){return o.e(7).then(o.bind(null,822))}},layout:"app",scrollToTop:!0,data:function(){return{term:"",icons:[],countAll:0,isFound:!1,page:1,fetchComplete:!1,allIconsLoaded:!1,intervalSendGA:null}},computed:l(l({},Object(r.e)({platform:function(t){return t.platform},user:function(t){return t.auth.user}})),{},{countAllFormatted:function(){return this.countAll.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},crossLinkText:function(){var t="Also, explore";return t+=' <a target="_blank" href="https://photos.icons8.com/images/'.concat(this.term,'">').concat(this.term.split("-").join(" ")," photos</a>"),t+=' and <a target="_blank" href="https://icons8.com/ouch/search/'.concat(this.term,'">').concat(this.term.split("-").join(" ")," vectors</a>"),t+=" from Icons8.",this.$t("REQUEST_ICONS.WEBAPP_REQUEST.CROSS_LINK",{term:this.term,termText:this.term.split("-").join(" ")},t)}}),watch:{user:function(t){t&&this.$analytics.trackSearchEvent({userId:t.id,platform:this.platform.apiCode,isPaidUser:!!t.activeLicense,type:"icon",term:this.term,ip:t.ip})}},asyncData:function(t){var e=t.app,o=t.params,n=t.store;t.redirect;return"en-US"!==n.state.i18n.locale&&n.commit("HREFLANG_DELETE"),n.dispatch("setPlatform",o.platform),{term:e.$utils.escapeSpecialChars(e.$utils.normalizeValue(o.term)),icons:[],fetchComplete:!1}},mounted:function(){var t=this;this.$analytics.trackIconSearch({term:this.term}),!this.icons||this.icons.length||this.error||this.fetchData(this.$route.params),this.intervalSendGA=setInterval((function(){t.fetchComplete&&(clearInterval(t.intervalSendGA),t.isFound?t.$ga.page({page:"/icons/search?query=".concat(t.term,"&style=").concat(t.$route.params.platform),title:"Found icons"}):(t.$analytics.track({event:"Nothing found",category:t.$route.params.platform}),t.$ga.page({page:"/icons/not_found?query=".concat(t.term,"&style=").concat(t.$route.params.platform),title:"Not found icons"})))}),1e3)},methods:l(l({},Object(r.b)(["updatePlatformsArray"])),{},{fetchData:function(t){var e=this;return this.fetchComplete=!1,new Promise((function(o){(function(t){var e=t.app,o=t.params,n=t.store,r=t.redirect;if(o.platform)return new Promise((function(t){var r=e.$utils.escapeSpecialChars(e.$utils.normalizeValue(o.term)),c=e.$utils.uppercaseFirstLetter(e.$utils.prettifyValue(r)),d=o.platform,m=n.getters.hostUrl||"https://icons8.com",h=n.state.platform.title,title=e.$t("WEB_APP.SEO.SEARCH.TITLE_DYNAMIC.ONE_PLATFORM",{term:c,platforms:h},"".concat(c," icons in ").concat(h," style for graphic design and user interfaces")),f=e.$t("WEB_APP.SEO.SEARCH.TITLE_PAGE",{term:'<span style="color: #28B351">'.concat(c,"</span>"),platform:h},'<span style="color: #28B351">'.concat(c,"</span> icons in ").concat(h," style")),v=e.$t("WEB_APP.SEO.SEARCH.DESCRIPTION_SINGLE",{term:c,platform:h},"<p>Get free icons of ".concat(c," in ").concat(h," style for your design. The free images are pixel perfect and available in png and vector. Download icons in all formats or edit them for your designs.</p> <p>As well, welcome to check new icons and popular icons.</p>"));n.dispatch("updateSEO",{titlePage:f,descriptionPage:v,title:title,description:e.$t("WEB_APP.SEO.SEARCH.DESCRIPTION_META_SINGLE",{term:c,platform:h},"Free icons of ".concat(c," in ").concat(h," style. Available in png and vector. Download icons in all formats or edit them for your design.")),canonical:"".concat(m,"/icon/set/").concat(r,"/").concat(o.platform)}),n.dispatch("search",{term:r,platform:d,amount:150}).then((function(e){if(!e.icons.length)throw new Error({message:"empty-icons"});t(l(l({term:r,isFound:!0},e),{},{fetchComplete:!0,page:2}))})).catch((function(e){console.error("page error",e&&e.message?e.message:e),t({term:r,isFound:!1,fetchComplete:!0,page:1,error:{message:e.message}})}))}));r(301,encodeURI("/icons/set/".concat(o.term)))})({app:e,store:e.$store,params:t}).then((function(t){var n;e.term=t.term,e.icons=null!==(n=t.icons)&&void 0!==n?n:[],e.isFound=!!e.icons.length,e.fetchComplete=t.fetchComplete,e.countAll=t.countAll,e.page=2,o()})).catch((function(t){e.fetchComplete=!0,console.error("error",t),e.checkError(t),o()}))}))},checkError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.error;t&&(console.log("this.error",this.error),this.error=void 0)},fetchNext:function(t){var e=this;if(this.icons.length>=this.countAll)return t.complete(),void(this.allIconsLoaded=!0);var o=this.$route.params.term;this.$store.dispatch("search",{term:o,platform:this.platform.apiCode,amount:150,page:this.page}).then((function(o){o.icons.length?(o.icons.forEach((function(t){e.icons.push(t)})),e.page++,t.loaded()):(t.complete(),e.allIconsLoaded=!0)})).catch((function(o){t.complete(),e.allIconsLoaded=!0,console.error("page error",o&&o.message?o.message:o)}))}})},m=(o(1037),o(3)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-page"},[t.fetchComplete?t.isFound?[o("div",{staticClass:"app-page-section custom-padding"},[t.countAll?o("div",{staticClass:"icon-total-count"},[o("div",{staticClass:"search-icon",domProps:{innerHTML:t._s(t.$icons.iconSearch)}}),t._v(t._s(t.$t("WEB_APP.SEARCH.ICONS_FOUND",{count:t.countAllFormatted},t.countAllFormatted+" icons found")))]):t._e(),o("app-header")],1)]:t._e():[o("div",{staticClass:"app-page-section custom-padding ph-descr-wrap"},[o("icon-placeholder",{attrs:{type:"description",text:"haveDescription",lineText:3,shortBottomMargin:!0}})],1)],t.fetchComplete?[t.fetchComplete&&!t.isFound?o("div",{staticClass:"app-page-section custom-padding"},[o("search-nothing-found")],1):t._e(),o("div",{staticClass:"app-page-section custoam-padding grid-section"},[o("icon-grid",{attrs:{icons:t.icons,"grid-style":"labels",action:"select","row-ads":6,keyAds:"CEBDTK3Y"}}),o("no-ssr",[o("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.allIconsLoaded&&t.isFound,expression:"!allIconsLoaded  && isFound"}],attrs:{distance:350},on:{infinite:t.fetchNext}},[o("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1),t.allIconsLoaded&&t.isFound?o("request-icon",{attrs:{"request-text-extra":t.crossLinkText}}):t._e(),o("no-ssr",[o("istock-banner")],1)],1)]:[o("div",{staticClass:"app-page-section custom-padding"},[o("icon-placeholder",{attrs:{count:36,type:"icon",iconsHeading:!1}})],1)]],2)}),[],!1,null,"3bb03b35",null);e.default=component.exports},878:function(t,e,o){var content=o(1038);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("316932b7",content,!0,{sourceMap:!1})}}]);