webpackJsonp([31,122,125,126,127],{1918:function(n,t,e){"use strict";function a(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}function l(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),c=e.n(o),s=e(33),u=e(3573),d=e(186),p=e(2762),f=e(397),m=e(1999),g=e(1997),h=e(1985),x=e(2019),b=e(2063),w=e(76),y=e(3574),E=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),v=u.a.CheckableTag,O=function(n){return c.a.createElement(y.a,null,c.a.createElement(u.a,n,n.children))},j=["Movie","Books","Music"],k=function(n){function t(){var n,e,l,o;r(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return e=l=i(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),l.state={selectedTags:[],tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},l.log=function(n){},l.handleChange=function(n,t){var e=l.state.selectedTags,r=t?[].concat(a(e),[n]):e.filter(function(t){return t!==n});l.setState({selectedTags:r})},l.preventDefault=function(n){n.preventDefault()},l.handleClose=function(n){var t=l.state.tags.filter(function(t){return t!==n});l.setState({tags:t})},l.showInput=function(){l.setState({inputVisible:!0},function(){document.getElementById("newTagsInput").focus()})},l.handleInputChange=function(n){l.setState({inputValue:n.target.value})},l.handleInputConfirm=function(){var n=l.state,t=n.inputValue,e=n.tags;t&&-1===e.indexOf(t)&&(e=[].concat(a(e),[t])),l.setState({tags:e,inputVisible:!1,inputValue:""})},o=e,i(l,o)}return l(t,n),E(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.selectedTags,a=t.tags,r=t.inputVisible,i=t.inputValue,l=b.a.rowStyle,o=b.a.colStyle,u=b.a.gutter;return c.a.createElement(h.default,null,c.a.createElement(m.default,null,c.a.createElement(w.a,{id:"uiElements.tags.tags"})),c.a.createElement(s.D,{style:l,gutter:u,justify:"start"},c.a.createElement(s.k,{md:12,sm:12,xs:24,style:o},c.a.createElement(g.default,{title:c.a.createElement(w.a,{id:"uiElements.tags.basicExample"}),subtitle:c.a.createElement(w.a,{id:"uiElements.tags.basicExampleSubTitle"})},c.a.createElement(x.default,null,c.a.createElement(O,null,c.a.createElement(w.a,{id:"uiElements.tags.tagOne"})),c.a.createElement(O,null,c.a.createElement("a",{href:"https://isomorphic.redq.io/dashboard/op_tag"},c.a.createElement(w.a,{id:"uiElements.tags.link"}))),c.a.createElement(O,{closable:!0,onClose:this.log},c.a.createElement(w.a,{id:"uiElements.tags.tagTwo"})),c.a.createElement(O,{closable:!0,onClose:this.preventDefault},c.a.createElement(w.a,{id:"uiElements.tags.preventDefault"}))))),c.a.createElement(s.k,{md:12,sm:12,xs:24,style:o},c.a.createElement(g.default,{title:c.a.createElement(w.a,{id:"uiElements.tags.colorfulTag"})},c.a.createElement(x.default,null,c.a.createElement(O,{color:"#f50"},"#f50"),c.a.createElement(O,{color:"#2db7f5"},"#2db7f5"),c.a.createElement(O,{color:"#87d068"},"#87d068"),c.a.createElement(O,{color:"#108ee9"},"#108ee9"))))),c.a.createElement(s.D,{style:l,gutter:u,justify:"start"},c.a.createElement(s.k,{md:12,sm:12,xs:24,style:o},c.a.createElement(g.default,{title:c.a.createElement(w.a,{id:"uiElements.tags.hotTags"}),subtitle:c.a.createElement(w.a,{id:"uiElements.tags.hotTagsSubTitle"})},c.a.createElement(x.default,null,c.a.createElement("strong",null,c.a.createElement(w.a,{id:"uiElements.tags.hots"})," "),j.map(function(t){return c.a.createElement(v,{key:t,checked:e.indexOf(t)>-1,onChange:function(e){return n.handleChange(t,e)}},t)})))),c.a.createElement(s.k,{md:12,sm:12,xs:24,style:o},c.a.createElement(g.default,{title:c.a.createElement(w.a,{id:"uiElements.tags.addRemoveDynamically"}),subtitle:c.a.createElement(w.a,{id:"uiElements.tags.addRemoveDynamicallySubTitle"})},c.a.createElement(x.default,null,a.map(function(t,e){var a=t.length>20,r=c.a.createElement(O,{key:t,closable:0!==e,afterClose:function(){return n.handleClose(t)}},a?t.slice(0,20)+"...":t);return a?c.a.createElement(p.a,{title:t},r):r}),r&&c.a.createElement(d.d,{id:"newTagsInput",type:"text",size:"small",style:{width:78},value:i,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!r&&c.a.createElement(f.b,{size:"small",type:"dashed",onClick:this.showInput},c.a.createElement(w.a,{id:"uiElements.tags.newTag"})))))))}}]),t}(o.Component);t.default=k},1985:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),r=e.n(a),i=e(2003);t.default=function(n){return r.a.createElement(i.a,Object.assign({className:null!=n.className?n.className+" isoLayoutContentWrapper":"isoLayoutContentWrapper"},n),n.children)}},1997:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),r=e.n(a),i=e(2012),l=e(2014);t.default=function(n){return r.a.createElement(l.a,{className:"isoBoxWrapper"},r.a.createElement(i.a,{title:n.title,subtitle:n.subtitle}),n.children)}},1999:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),r=e.n(a),i=e(2018);t.default=function(n){return r.a.createElement(i.a,{className:"isoComponentTitle"},n.children)}},2003:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var a=e(43),r=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"],["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]),i=a.b.div(r)},2012:function(n,t,e){"use strict";var a=e(0),r=e.n(a),i=e(2013);t.a=function(n){return r.a.createElement("div",null,n.title?r.a.createElement(i.b,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?r.a.createElement(i.a,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")}},2013:function(n,t,e){"use strict";function a(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.d(t,"b",function(){return c}),e.d(t,"a",function(){return s});var r=e(43),i=e(68),l=(e.n(i),a(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"],["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),o=a(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"],["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]),c=r.b.h3(l,Object(i.palette)("text",0)),s=r.b.p(o,Object(i.palette)("text",3))},2014:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var a=e(43),r=e(68),i=(e.n(r),function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),l=a.b.div(i,Object(r.palette)("border",0),"")},2018:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var a=e(43),r=e(68),i=(e.n(r),e(75)),l=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"],["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]),o=a.b.h1(l,Object(r.palette)("secondary",2),Object(r.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(r.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),c=Object(i.a)(o)},2019:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),r=e.n(a),i=e(2062);t.default=function(n){return r.a.createElement(i.a,{className:"isoExampleWrapper",style:n.style},n.children)}},2062:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var a=e(43),r=e(68),i=(e.n(r),e(75)),l=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"],["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]),o=a.b.div(l,function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0":"295px"},function(n){return"rtl"===n["data-rtl"]?"295px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"},function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"},function(n){return"rtl"===n["data-rtl"]?"0":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"0"},Object(r.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"auto":"6px"},function(n){return"rtl"===n["data-rtl"]?"6px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return n["data-rtl"],"0"},function(n){return n["data-rtl"],"0"}),c=Object(i.a)(o)},2063:function(n,t,e){"use strict";var a={width:"100%",display:"flex",flexFlow:"row wrap"},r={marginBottom:"16px"},i={rowStyle:a,colStyle:r,gutter:16};t.a=i},2762:function(n,t,e){"use strict";var a=e(33);t.a=a.N},3573:function(n,t,e){"use strict";var a=e(33);t.a=a.L},3574:function(n,t,e){"use strict";var a=e(43),r=e(68),i=(e.n(r),e(86)),l=e(75),o=function(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ",";\n    background: ",";\n    font-size: 12px;\n    color: ",";\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ",";\n    margin-left: ",";\n    cursor: pointer;\n    white-space: nowrap;\n    ",";\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .anticon-cross {\n      margin: ",";\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ",";\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ",";\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ",";\n        color: #ffffff;\n      }\n    }\n  }\n"],["\n  display: inline-block;\n\n  .ant-tag {\n    display: inline-block;\n    line-height: 24px;\n    height: 26px;\n    padding: 0 10px;\n    border-radius: 4px;\n    border: 1px solid ",";\n    background: ",";\n    font-size: 12px;\n    color: ",";\n    opacity: 1;\n    margin-top: 4px;\n    margin-bottom: 4px;\n    margin-right: ",";\n    margin-left: ",";\n    cursor: pointer;\n    white-space: nowrap;\n    ",";\n\n    a {\n      color: ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n\n    .anticon-cross {\n      margin: ",";\n    }\n\n    &.ant-tag-has-color {\n      line-height: 24px;\n      color: #ffffff;\n      border: 0;\n    }\n\n    &.ant-tag-checkable {\n      background-color: transparent;\n      border-color: transparent;\n\n      &:not(.ant-tag-checkable-checked) {\n        &:hover {\n          background-color: ",";\n          color: #ffffff;\n        }\n      }\n\n      &:active {\n        background-color: ",";\n        color: #ffffff;\n      }\n\n      &.ant-tag-checkable-checked {\n        background-color: ",";\n        color: #ffffff;\n      }\n    }\n  }\n"]),c=a.b.div(o,Object(r.palette)("border",0),Object(r.palette)("grayscale",6),Object(r.palette)("text",3),function(n){return"rtl"===n["data-rtl"]?"inherit":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"inherit"},Object(i.c)(),Object(r.palette)("text",3),Object(r.palette)("text",3),function(n){return"rtl"===n["data-rtl"]?"0 3px 0 0":"0 0 0 3px"},Object(r.palette)("primary",0),Object(r.palette)("primary",0),Object(r.palette)("primary",0));t.a=Object(l.a)(c)}});