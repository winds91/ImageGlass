!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("ig-ui",[],n):"object"==typeof exports?exports["ig-ui"]=n():e["ig-ui"]=n()}(this,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n);var t=function(){function e(){this.eventHandlers={}}return e.prototype.addEvent=function(e,n){this.eventHandlers[e]=n},e.prototype.removeEvent=function(e){delete this.eventHandlers[e]},e.prototype.startListening=function(){var e,n=this;null===(e=window.chrome.webview)||void 0===e||e.addEventListener("message",(function(e){var t,o,r=e.data,a=null!==(t=null==r?void 0:r.Name)&&void 0!==t?t:"",i=null!==(o=null==r?void 0:r.Data)&&void 0!==o?o:"",u=n.eventHandlers[a],l=!!u;console.info("Received event '".concat(a,"' (handler=").concat(l,") with data:"),i),l&&u(a,i)}))},e}(),o=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((o=o.apply(e,n||[])).next())}))},r=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}},a=function(e,n){return new Promise((function(t){setTimeout((function(){return t(n)}),e)}))},i=function(e,n){_webview.addEvent(e,n)};const u=function(){function e(){}return e.addEvents=function(){for(var n=Array.from(document.querySelectorAll('input[name="nav"]')),t=0;t<n.length;t++){n[t].addEventListener("change",(function(n){var t=n.target.value;e.setActiveMenu(t)}),!1)}},e.setActiveMenu=function(e){queryAll(".tab-page").forEach((function(e){return e.classList.remove("active")}));var n=query('.tab-page[tab="'.concat(e,'"]'));null==n||n.classList.add("active"),queryAll('input[type="radio"]').forEach((function(e){return e.checked=!1}));var t=query('input[type="radio"][value="'.concat(e,'"]'));t&&(t.checked=!0)},e}();const l=function(){function e(){}return e.load=function(){for(var e in _pageSettings.lang)if(Object.prototype.hasOwnProperty.call(_pageSettings.lang,e))for(var n=_pageSettings.lang[e],t=0,o=queryAll('[data-lang="'.concat(e,'"]'));t<o.length;t++){o[t].innerText=n}},e}();const c=function(){function e(){}return e.loadSettings=function(){query("#Lnk_StartupDir").innerText=_pageSettings.startUpDir||"(unknown)",query("#Lnk_ConfigDir").innerText=_pageSettings.configDir||"(unknown)",query("#Lnk_UserConfigFile").innerText=_pageSettings.userConfigFilePath||"(unknown)"},e.addEvents=function(){query("#Lnk_StartupDir").addEventListener("click",(function(){return post("Lnk_StartupDir",_pageSettings.startUpDir)}),!1),query("#Lnk_ConfigDir").addEventListener("click",(function(){return post("Lnk_ConfigDir",_pageSettings.configDir)}),!1),query("#Lnk_UserConfigFile").addEventListener("click",(function(){return post("Lnk_UserConfigFile",_pageSettings.userConfigFilePath)}),!1)},e}();var s=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((o=o.apply(e,n||[])).next())}))},d=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};const f=function(){function e(){}return e.loadSettings=function(){var n=_pageSettings.config.ColorProfile||"";n.includes(".")&&(query('[name="ColorProfile"]').value="Custom",query("#Lnk_CustomColorProfile").innerText=n),e.handleColorProfileChanged(),e.handleUseEmbeddedThumbnailOptionsChanged()},e.addEvents=function(){var n=this;query("#Btn_BrowseColorProfile").addEventListener("click",(function(){return s(n,void 0,void 0,(function(){var e;return d(this,(function(n){switch(n.label){case 0:return[4,postAsync("Btn_BrowseColorProfile")];case 1:return e=n.sent(),query("#Lnk_CustomColorProfile").innerText=e,[2]}}))}))}),!1),query("#Lnk_CustomColorProfile").addEventListener("click",(function(){var e=query("#Lnk_CustomColorProfile").innerText.trim();post("Lnk_CustomColorProfile",e)}),!1),query('[name="ColorProfile"]').addEventListener("change",e.handleColorProfileChanged,!1),query('[name="UseEmbeddedThumbnailRawFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1),query('[name="UseEmbeddedThumbnailOtherFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1)},e.handleColorProfileChanged=function(){var e="Custom"===query('[name="ColorProfile"]').value;query("#Btn_BrowseColorProfile").hidden=!e,query("#Section_CustomColorProfile").hidden=!e},e.handleUseEmbeddedThumbnailOptionsChanged=function(){var e=query('[name="UseEmbeddedThumbnailRawFormats"]').checked,n=query('[name="UseEmbeddedThumbnailOtherFormats"]').checked,t=e||n;query("#Section_EmbeddedThumbnailSize").hidden=!t},e}();const g=function(){function e(){}return e.loadSettings=function(){e.handleUseRandomIntervalForSlideshowChanged(),e.handleSlideshowIntervalsChanged()},e.addEvents=function(){query('[name="UseRandomIntervalForSlideshow"]').addEventListener("input",e.handleUseRandomIntervalForSlideshowChanged,!1),query('[name="SlideshowInterval"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1),query('[name="SlideshowIntervalTo"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1)},e.handleSlideshowIntervalsChanged=function(){var n=+query('[name="SlideshowInterval"]').value||5,t=+query('[name="SlideshowIntervalTo"]').value||5,o=e.toTimeString(n),r=e.toTimeString(t),a=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowInterval").innerText=a?"".concat(o," - ").concat(r):o},e.handleUseRandomIntervalForSlideshowChanged=function(){var e=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowIntervalFrom").hidden=!e,query("#Section_SlideshowIntervalTo").hidden=!e},e.toTimeString=function(e){var n=new Date(1e3*e),t=n.getUTCMinutes().toString(),o=n.getUTCSeconds().toString(),r=n.getUTCMilliseconds().toString();return t.length<2&&(t="0".concat(t)),o.length<2&&(o="0".concat(o)),"".concat(t,":").concat(o,".").concat(r)},e}();const v=function(){function e(){}return e.loadSettings=function(){var e,n,t,o;query("#Cmb_MouseWheel_Scroll").value=(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)||"DoNothing",query("#Cmb_MouseWheel_CtrlAndScroll").value=(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)||"DoNothing",query("#Cmb_MouseWheel_ShiftAndScroll").value=(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)||"DoNothing",query("#Cmb_MouseWheel_AltAndScroll").value=(null===(o=_pageSettings.config.MouseWheelActions)||void 0===o?void 0:o.AltAndScroll)||"DoNothing"},e.addEvents=function(){query("#Btn_ResetMouseWheelAction").addEventListener("click",e.resetDefaultMouseWheelActions,!1)},e.resetDefaultMouseWheelActions=function(){query("#Cmb_MouseWheel_Scroll").value="Zoom",query("#Cmb_MouseWheel_CtrlAndScroll").value="PanVertically",query("#Cmb_MouseWheel_ShiftAndScroll").value="PanHorizontally",query("#Cmb_MouseWheel_AltAndScroll").value="BrowseImages"},e}();var h=function(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((o=o.apply(e,n||[])).next())}))},p=function(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};const y=function(){function e(){}return e.loadSettings=function(){e.handleLanguageChanged()},e.addEvents=function(){var n=this;query("#Cmb_LanguageList").addEventListener("change",e.handleLanguageChanged,!1),query("#Btn_RefreshLanguageList").addEventListener("click",(function(){return h(n,void 0,void 0,(function(){var n;return p(this,(function(t){switch(t.label){case 0:return[4,postAsync("Btn_RefreshLanguageList")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))}),!1),query("#Lnk_InstallLanguage").addEventListener("click",(function(){return h(n,void 0,void 0,(function(){var n;return p(this,(function(t){switch(t.label){case 0:return[4,postAsync("Lnk_InstallLanguage")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))}),!1)},e.handleLanguageChanged=function(){var e=query("#Cmb_LanguageList").value,n=_pageSettings.langList.find((function(n){return n.FileName===e}));n&&(query("#Section_LanguageContributors").innerText=n.Metadata.Author)},e.loadLanguageList=function(n){for(var t=query("#Cmb_LanguageList");t.options.length;)t.remove(0);Array.isArray(n)&&n.length>0&&(_pageSettings.langList=n),_pageSettings.langList.forEach((function(e){var n="".concat(e.Metadata.LocalName," (").concat(e.Metadata.EnglishName,")");e.FileName&&0!==e.FileName.length||(n=e.Metadata.EnglishName);var o=new Option(n,e.FileName);t.add(o)})),t.value=_pageSettings.config.Language,e.handleLanguageChanged()},e}();const m=function(){function e(){}return e.load=function(){for(var n in e.loadSelectBoxEnums(),y.loadLanguageList(),_pageSettings.config)if(Object.prototype.hasOwnProperty.call(_pageSettings.config,n)){var t=_pageSettings.config[n];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t){var o=query('[name="'.concat(n,'"]'));if(o){var r=o.tagName.toLowerCase();if("select"===r)o.value=t.toString();else if("input"===r){var a=o.getAttribute("type").toLowerCase(),i=o;if("radio"===a||"checkbox"===a)i.checked=Boolean(t);else if("color"===a){var u=t.toString()||"#00000000";i.value=u.substring(0,u.length-2)}else i.value=t.toString()}}}}c.loadSettings(),f.loadSettings(),v.loadSettings(),g.loadSettings(),y.loadSettings()},e.addEventsForFooter=function(){query("#BtnOK").addEventListener("click",(function(){return post("BtnOK")}),!1),query("#BtnCancel").addEventListener("click",(function(){return post("BtnCancel")}),!1),query("#BtnApply").addEventListener("click",(function(){return post("BtnApply")}),!1)},e.loadSelectBoxEnums=function(){var e=function(e){if(!Object.prototype.hasOwnProperty.call(_pageSettings.enums,e))return"continue";for(var n=_pageSettings.enums[e],t=function(t){n.forEach((function(n){var o=new Option("".concat(n),n);o.setAttribute("data-lang","_.".concat(e,"._").concat(n)),t.add(o)}))},o=0,r=queryAll('select[data-enum="'.concat(e,'"]'));o<r.length;o++){t(r[o])}};for(var n in _pageSettings.enums)e(n)},e}();const S=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const b=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const w=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const _=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const L=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const E=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();const C=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e}();return window._webview=new t,_webview.startListening(),window.query=function(e){try{return document.querySelector(e)}catch(e){}return null},window.queryAll=function(e){try{return Array.from(document.querySelectorAll(e))}catch(e){}return[]},window.on=i,window.post=function(e,n){var t;null===(t=window.chrome.webview)||void 0===t||t.postMessage({name:e,data:n})},window.postAsync=function(e,n){return o(void 0,void 0,void 0,(function(){var t,o,u;return r(this,(function(r){switch(r.label){case 0:t=!1,o=null,i(e,(function(n,r){n===e&&(t=!0,o=r,_webview.removeEvent(e))})),null===(u=window.chrome.webview)||void 0===u||u.postMessage({name:e,data:n}),r.label=1;case 1:return t?[3,3]:[4,a(100)];case 2:return r.sent(),[3,1];case 3:return[2,o]}}))}))},window._pageSettings||(window._pageSettings={config:{},lang:{},langList:[],enums:{ImageOrderBy:[],ImageOrderType:[],ColorProfileOption:[],AfterEditAppAction:[],ImageInterpolation:[],MouseWheelAction:[],MouseWheelEvent:[],MouseClickEvent:[],BackdropStyle:[],ToolbarItemModelType:[]},startUpDir:"",configDir:"",userConfigFilePath:""}),_pageSettings.setSidebarActiveMenu=u.setActiveMenu,_pageSettings.loadLanguage=l.load,_pageSettings.loadSettings=m.load,_pageSettings.loadLanguageList=y.loadLanguageList,u.addEvents(),u.setActiveMenu("image"),m.load(),l.load(),m.addEventsForFooter(),c.addEvents(),f.addEvents(),g.addEvents(),S.addEvents(),b.addEvents(),w.addEvents(),_.addEvents(),y.addEvents(),v.addEvents(),E.addEvents(),C.addEvents(),y.addEvents(),L.addEvents(),n})()));