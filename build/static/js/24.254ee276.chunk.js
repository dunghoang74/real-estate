webpackJsonp([24,122,125,126],{1882:function(n,e,t){"use strict";function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function o(n){return{GitSearch:n.githubSearch}}Object.defineProperty(e,"__esModule",{value:!0});var l=t(0),p=t.n(l),c=t(45),s=t(33),d=t(1999),f=t(1997),x=t(1985),u=t(186),g=t(76),m=t(257),h=t(3236),b=t(2063),y=t(431),w=function(){function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}(),v=y.a.gitSearch,j=y.a.onPageChange,k=function(n){function e(){var n,t,r,o;a(this,e);for(var l=arguments.length,p=Array(l),c=0;c<l;c++)p[c]=arguments[c];return t=r=i(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(p))),r.onSearch=function(n){n&&n.length>0?r.props.gitSearch(n):Object(m.a)("error","Please type something")},o=t,i(r,o)}return r(e,n),w(e,[{key:"componentDidMount",value:function(){this.onSearch(this.props.GitSearch.searcText)}},{key:"render",value:function(){var n=b.a.rowStyle,e=b.a.colStyle,t=b.a.gutter,a=this.props,i=a.onPageChange,r=a.GitSearch;return p.a.createElement(x.default,null,p.a.createElement(d.default,null,p.a.createElement(g.a,{id:"sidebar.githubSearch"})),p.a.createElement(s.D,{style:n,gutter:t,justify:"start"},p.a.createElement(s.k,{md:24,sm:24,xs:24,style:e},p.a.createElement(f.default,null,p.a.createElement(u.b,{placeholder:"Github Search",defaultValue:r.searcText,onSearch:this.onSearch}),p.a.createElement(h.a,{GitSearch:r,defaultValue:r.searcText,onPageChange:i})))))}}]),e}(l.Component);e.default=Object(c.b)(o,{gitSearch:v,onPageChange:j})(k)},1985:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),i=t.n(a),r=t(2003);e.default=function(n){return i.a.createElement(r.a,Object.assign({className:null!=n.className?n.className+" isoLayoutContentWrapper":"isoLayoutContentWrapper"},n),n.children)}},1997:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),i=t.n(a),r=t(2012),o=t(2014);e.default=function(n){return i.a.createElement(o.a,{className:"isoBoxWrapper"},i.a.createElement(r.a,{title:n.title,subtitle:n.subtitle}),n.children)}},1999:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),i=t.n(a),r=t(2018);e.default=function(n){return i.a.createElement(r.a,{className:"isoComponentTitle"},n.children)}},2003:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var a=t(43),i=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"],["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]),r=a.b.div(i)},2012:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(2013);e.a=function(n){return i.a.createElement("div",null,n.title?i.a.createElement(r.b,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?i.a.createElement(r.a,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")}},2013:function(n,e,t){"use strict";function a(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,"b",function(){return p}),t.d(e,"a",function(){return c});var i=t(43),r=t(68),o=(t.n(r),a(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"],["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),l=a(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"],["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]),p=i.b.h3(o,Object(r.palette)("text",0)),c=i.b.p(l,Object(r.palette)("text",3))},2014:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var a=t(43),i=t(68),r=(t.n(i),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),o=a.b.div(r,Object(i.palette)("border",0),"")},2018:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var a=t(43),i=t(68),r=(t.n(i),t(75)),o=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"],["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]),l=a.b.h1(o,Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(i.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(r.a)(l)},2063:function(n,e,t){"use strict";var a={width:"100%",display:"flex",flexFlow:"row wrap"},i={marginBottom:"16px"},r={rowStyle:a,colStyle:i,gutter:16};e.a=r},2676:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(2682);e.a=function(n){return i.a.createElement(r.a,null,i.a.createElement("svg",{className:"isoContentLoader",viewBox:"0 0 50 50"},i.a.createElement("circle",{className:"isoContentLoaderCircle",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"3.6"})))}},2682:function(n,e,t){"use strict";var a=t(43),i=t(68),r=(t.n(i),function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 100000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ",";\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 100000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ",";\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n"])),o=a.b.div(r,Object(i.palette)("primary",0));e.a=o},2683:function(n,e,t){"use strict";var a=t(0),i=t.n(a);e.a=function(n){var e=n.text,t=void 0===e?"":e;return i.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},i.a.createElement("h3",null,t))}},2839:function(n,e,t){"use strict";var a=t(33),i=t(2840),r=t(75),o=Object(i.a)(a.x),l=Object(r.a)(o);e.a=l},2840:function(n,e,t){"use strict";var a=t(43),i=t(68),r=(t.n(i),t(86)),o=function(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  &.ant-pagination {\n    .ant-pagination-item {\n      margin: ",";\n      &.ant-pagination-item-active {\n        background-color: ",";\n        border-color: ",";\n\n        a {\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n          a {\n            color: #ffffff;\n          }\n        }\n      }\n\n      &:hover {\n        border-color: ",";\n        ",";\n      }\n\n      &:hover a {\n        color: ",";\n      }\n    }\n\n    .ant-pagination-total-text {\n      margin: ",";\n    }\n\n    .ant-pagination-prev,\n    .ant-pagination-next,\n    .ant-pagination-jump-prev,\n    .ant-pagination-jump-next {\n      margin: ",";\n    }\n\n    .ant-pagination-prev:hover,\n    .ant-pagination-next:hover {\n      border-color: ",";\n\n      a {\n        color: ",";\n      }\n    }\n\n    .ant-pagination-prev .ant-pagination-item-link,\n    .ant-pagination-next .ant-pagination-item-link {\n      transform: ",";\n    }\n\n    .ant-pagination-jump-prev,\n    .ant-pagination-jump-next {\n      &:after {\n        transform: ",";\n      }\n    }\n\n    &.ant-pagination-simple {\n      .ant-pagination-prev,\n      .ant-pagination-next {\n        margin: 0;\n      }\n\n      .ant-pagination-simple-pager {\n        margin: ",";\n      }\n    }\n\n    .ant-pagination-options {\n      margin: ",";\n\n      .ant-select .ant-select-selection.ant-select-selection--single {\n        height: 28px;\n\n        .ant-select-selection__rendered {\n          line-height: 28px;\n        }\n      }\n\n      .ant-pagination-options-size-changer {\n        margin: ",";\n      }\n    }\n  }\n"],["\n  &.ant-pagination {\n    .ant-pagination-item {\n      margin: ",";\n      &.ant-pagination-item-active {\n        background-color: ",";\n        border-color: ",";\n\n        a {\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n          a {\n            color: #ffffff;\n          }\n        }\n      }\n\n      &:hover {\n        border-color: ",";\n        ",";\n      }\n\n      &:hover a {\n        color: ",";\n      }\n    }\n\n    .ant-pagination-total-text {\n      margin: ",";\n    }\n\n    .ant-pagination-prev,\n    .ant-pagination-next,\n    .ant-pagination-jump-prev,\n    .ant-pagination-jump-next {\n      margin: ",";\n    }\n\n    .ant-pagination-prev:hover,\n    .ant-pagination-next:hover {\n      border-color: ",";\n\n      a {\n        color: ",";\n      }\n    }\n\n    .ant-pagination-prev .ant-pagination-item-link,\n    .ant-pagination-next .ant-pagination-item-link {\n      transform: ",";\n    }\n\n    .ant-pagination-jump-prev,\n    .ant-pagination-jump-next {\n      &:after {\n        transform: ",";\n      }\n    }\n\n    &.ant-pagination-simple {\n      .ant-pagination-prev,\n      .ant-pagination-next {\n        margin: 0;\n      }\n\n      .ant-pagination-simple-pager {\n        margin: ",";\n      }\n    }\n\n    .ant-pagination-options {\n      margin: ",";\n\n      .ant-select .ant-select-selection.ant-select-selection--single {\n        height: 28px;\n\n        .ant-select-selection__rendered {\n          line-height: 28px;\n        }\n      }\n\n      .ant-pagination-options-size-changer {\n        margin: ",";\n      }\n    }\n  }\n"]),l=function(n){return Object(a.b)(n)(o,function(n){return"rtl"===n["data-rtl"]?"3px 0 3px 8px":"3px 8px 3px 0"},Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",4),Object(i.palette)("primary",0),Object(r.c)(),Object(i.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"3px 0 3px 8px":"3px 8px 3px 0"},function(n){return"rtl"===n["data-rtl"]?"3px 0 3px 8px":"3px 8px 3px 0"},Object(i.palette)("primary",0),Object(i.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"rotate(0)"},function(n){return"rtl"===n["data-rtl"]?"rotate(180deg) scale(0.66666667)":"rotate(0) scale(0.66666667)"},function(n){return"rtl"===n["data-rtl"]?"3px 0 3px 8px":"3px 8px 3px 0"},function(n){return"rtl"===n["data-rtl"]?"3px 10px 3px 0":"3px 0 3px 10px"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 8px":"0 8px 0 0"})};e.a=l},3236:function(n,e,t){"use strict";function a(n){return r.a.createElement(s.a,{className:"isoGithubResultList"},n.map(function(n){var e=function(){window.open(n.html_url,"_blank")},t=new Date(n.updated_at).toDateString();return r.a.createElement("div",{key:n.id,className:"isoSingleRepository"},r.a.createElement("div",{className:"titleAndLanguage"},r.a.createElement("h3",null,r.a.createElement("a",{onClick:e},n.full_name+" ")),n.language?r.a.createElement("span",{className:"language"},n.language):"",n.stargazers_count?r.a.createElement("span",{className:"totalStars"},n.stargazers_count):""),n.description?r.a.createElement("p",null,n.description):"",r.a.createElement("span",{className:"updateDate"},"Updated on ",t))}))}var i=t(0),r=t.n(i),o=t(2676),l=t(2683),p=t(2839),c=t(790),s=t(3237),d=function(n){var e=n.GitSearch,t=n.onPageChange,i=e.searcText,d=e.result,f=e.loading,x=e.error,u=e.page,g=e.total_count;if(!i)return r.a.createElement("div",null);if(f)return r.a.createElement(o.a,null);if(x||!g)return r.a.createElement(l.a,{text:"THERE ARE SOME ERRORS"});if(0===d.length)return r.a.createElement(l.a,{text:"No Result Found"});var m=g>1e3?1e3:g,h=Math.floor(m/c.b);return r.a.createElement(s.b,{className:"isoGithubSearchResult"},r.a.createElement("p",{className:"isoTotalRepository"},r.a.createElement("span",null,""+g," repository results")),a(d),r.a.createElement("div",{className:"githubSearchPagination"},r.a.createElement(p.a,{defaultCurrent:u,total:h,onChange:function(n){t(i,n)}})))};e.a=d},3237:function(n,e,t){"use strict";function a(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}t.d(e,"a",function(){return f}),t.d(e,"b",function(){return d});var i=t(43),r=t(68),o=(t.n(r),t(86)),l=t(75),p=a(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoSingleRepository {\n    padding: 20px 0;\n    border-bottom: 1px solid ",";\n\n    &:last-of-type {\n      border-bottom: 0;\n    }\n\n    .titleAndLanguage {\n      display: flex;\n      width: 100%;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        flex-wrap: wrap;\n      }\n\n      h3 {\n        width: 70%;\n        flex-shrink: 0;\n\n        @media only screen and (max-width: 767px) {\n          width: 100%;\n        }\n\n        @media only screen and (min-width: 768px) and (max-width: 1199px) {\n          flex-shrink: 1;\n        }\n\n        a {\n          font-size: 17px;\n          font-weight: 700;\n          color: ",";\n          line-height: 1.3;\n          word-break: break-word;\n          display: inline-block;\n          ",";\n\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n\n      span {\n        width: 120px;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.3;\n\n        &.language {\n          margin: ",";\n          &:before {\n            content: '';\n            width: 10px;\n            height: 10px;\n            margin: ",";\n            display: inline-block;\n            background-color: ",";\n            ",";\n          }\n\n          @media only screen and (max-width: 767px) {\n            margin: ",";\n          }\n\n          @media only screen and (min-width: 768px) and (max-width: 1199px) {\n            margin: ",";\n          }\n        }\n\n        &.totalStars {\n          width: 100px;\n          &:before {\n            content: '\f4b3';\n            font-family: 'ionicons';\n            font-size: 16px;\n            color: ",";\n            margin: ",";\n          }\n        }\n      }\n    }\n\n    p {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: 1.3;\n      margin-bottom: 0;\n      margin-top: 10px;\n      display: block;\n    }\n\n    .updateDate {\n      font-size: 13px;\n      font-weight: 400;\n      color: ",";\n      line-height: 1.3;\n      display: inline-block;\n      margin-top: 25px;\n    }\n  }\n"],["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoSingleRepository {\n    padding: 20px 0;\n    border-bottom: 1px solid ",";\n\n    &:last-of-type {\n      border-bottom: 0;\n    }\n\n    .titleAndLanguage {\n      display: flex;\n      width: 100%;\n      align-items: center;\n\n      @media only screen and (max-width: 767px) {\n        flex-wrap: wrap;\n      }\n\n      h3 {\n        width: 70%;\n        flex-shrink: 0;\n\n        @media only screen and (max-width: 767px) {\n          width: 100%;\n        }\n\n        @media only screen and (min-width: 768px) and (max-width: 1199px) {\n          flex-shrink: 1;\n        }\n\n        a {\n          font-size: 17px;\n          font-weight: 700;\n          color: ",";\n          line-height: 1.3;\n          word-break: break-word;\n          display: inline-block;\n          ",";\n\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n\n      span {\n        width: 120px;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.3;\n\n        &.language {\n          margin: ",";\n          &:before {\n            content: '';\n            width: 10px;\n            height: 10px;\n            margin: ",";\n            display: inline-block;\n            background-color: ",";\n            ",";\n          }\n\n          @media only screen and (max-width: 767px) {\n            margin: ",";\n          }\n\n          @media only screen and (min-width: 768px) and (max-width: 1199px) {\n            margin: ",";\n          }\n        }\n\n        &.totalStars {\n          width: 100px;\n          &:before {\n            content: '\\f4b3';\n            font-family: 'ionicons';\n            font-size: 16px;\n            color: ",";\n            margin: ",";\n          }\n        }\n      }\n    }\n\n    p {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: 1.3;\n      margin-bottom: 0;\n      margin-top: 10px;\n      display: block;\n    }\n\n    .updateDate {\n      font-size: 13px;\n      font-weight: 400;\n      color: ",";\n      line-height: 1.3;\n      display: inline-block;\n      margin-top: 25px;\n    }\n  }\n"]),c=a(["\n  margin-top: 30px;\n\n  .isoTotalRepository {\n    font-size: 18px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.3;\n    padding-bottom: 15px;\n    border-bottom: 1px solid ",";\n  }\n\n  .githubSearchPagination {\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 25px 0 10px;\n\n    .ant-pagination {\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n    }\n  }\n"],["\n  margin-top: 30px;\n\n  .isoTotalRepository {\n    font-size: 18px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.3;\n    padding-bottom: 15px;\n    border-bottom: 1px solid ",";\n  }\n\n  .githubSearchPagination {\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 25px 0 10px;\n\n    .ant-pagination {\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n    }\n  }\n"]),s=i.b.div(p,Object(r.palette)("border",2),Object(r.palette)("primary",0),Object(o.c)(),Object(r.palette)("primary",11),Object(r.palette)("text",1),function(n){return"rtl"===n["data-rtl"]?"0 0 0 70px":"0 70px 0 0"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 5px":"0 5px 0 0"},Object(r.palette)("text",1),Object(o.a)("50%"),function(n){return n["data-rtl"],"0"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 40px":"0 40px 0 0"},Object(r.palette)("text",1),function(n){return"rtl"===n["data-rtl"]?"0 0 0 5px":"0 5px 0 0"},Object(r.palette)("text",1),Object(r.palette)("text",3)),d=i.b.div(c,Object(r.palette)("text",0),Object(r.palette)("border",2)),f=Object(l.a)(s)}});