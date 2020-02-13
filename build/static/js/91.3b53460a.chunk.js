(window.webpackJsonp=window.webpackJsonp||[]).push([[91,130,131,132],{1190:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(32);function o(){var n=Object(r.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return n},n}var l=t(28).c.div(o());e.default=function(n){return i.a.createElement(l,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},1191:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(32),o=t(28),l=t(6);function c(){var n=Object(r.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return n},n}function s(){var n=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return n},n}var d=o.c.h3(s(),Object(l.palette)("text",0)),u=o.c.p(c(),Object(l.palette)("text",3)),p=function(n){return i.a.createElement("div",null,n.title?i.a.createElement(d,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?i.a.createElement(u,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function h(){var n=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return h=function(){return n},n}var m=o.c.div(h(),Object(l.palette)("border",0),"");e.default=function(n){return i.a.createElement(m,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},i.a.createElement(p,{title:n.title,subtitle:n.subtitle}),n.children)}},1194:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(32),o=t(28),l=t(6),c=t(44);function s(){var n=Object(r.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return s=function(){return n},n}var d=o.c.h1(s(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),u=Object(c.a)(d);e.default=function(n){return i.a.createElement(u,{className:"isoComponentTitle"},n.children)}},1196:function(n,e,t){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=a},1355:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(32),o=t(28),l=t(6);function c(){var n=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 10000000000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ",";\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n"]);return c=function(){return n},n}var s=o.c.div(c(),Object(l.palette)("primary",0));e.a=function(n){return i.a.createElement(s,null,i.a.createElement("svg",{className:"isoContentLoader",viewBox:"0 0 50 50"},i.a.createElement("circle",{className:"isoContentLoaderCircle",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"3.6"})))}},1367:function(n,e,t){n.exports=t.p+"static/media/NoAPIKey.efba4584.svg"},1381:function(n,e,t){"use strict";var a=t(0),i=t.n(a);e.a=function(n){var e=n.text,t=void 0===e?"":e;return i.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},i.a.createElement("h3",null,t))}},1388:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(32),o=t(28),l=t(6);function c(){var n=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    width: 150px;\n    height: auto;\n    margin-bottom: 30px;\n  }\n\n  h3 {\n    font-size: 18px;\n    font-weight: 500;\n    color: ",";\n    margin: 0;\n  }\n"]);return c=function(){return n},n}var s=o.c.div(c(),Object(l.palette)("text",2)),d=t(1367),u=t.n(d);e.a=function(n){var e=n.width,t=void 0===e?"100%":e,a=n.height,r=void 0===a?"40vh":a;return i.a.createElement(s,{className:"isoHelperText",style:{width:t,height:r}},i.a.createElement("img",{alt:"#",src:u.a}),i.a.createElement("h3",null,"Please Enter Your API Key in the `src/settings/index.js`"))}},2812:function(n,e,t){"use strict";t.r(e);var a=t(17),i=t(18),r=t(25),o=t(23),l=t(24),c=t(0),s=t.n(c),d=t(37),u=t(61),p=t(62),h=t(1194),m=t(1191),f=t(1190),x=t(123),b=t(29),g=t(226),y=t(1355),v=t(1381),w=t(194),j=t(2577),E=t(410),O=t(32),k=t(28),S=t(6),C=t(9),N=t(44);function T(){var n=Object(O.a)(["\n  .ant-modal-close-x {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background-color: #fff;\n    border-radius: 0 0 0 5px;\n  }\n\n  .ant-modal-body {\n    padding: 15px;\n    iframe {\n      width: 100%;\n    }\n  }\n"]);return T=function(){return n},n}function P(){var n=Object(O.a)(["\n  margin-top: 30px;\n\n  .isoTotalResultFind {\n    font-size: 18px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.3;\n    padding-bottom: 15px;\n    border-bottom: 1px solid ",";\n  }\n\n  .youtubeSearchPagination {\n    display: -webkit-flex;\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 25px 0 10px;\n\n    button {\n      margin: 0 10px;\n    }\n  }\n"]);return P=function(){return n},n}function V(){var n=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  .isoSingleVideoResult {\n    padding: 20px 0;\n    border-bottom: 1px solid ",";\n    display: flex;\n    width: 100%;\n\n    &:last-of-type {\n      border-bottom: 0;\n    }\n\n    .videoThumb {\n      width: 100px;\n      height: 100px;\n      display: -webkit-inline-flex;\n      display: -ms-inline-flex;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      overflow: hidden;\n\n      @media only screen and (max-width: 420px) {\n        width: 70px;\n        height: 70px;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .videoDescription {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      margin: ",";\n      cursor: pointer;\n\n      h3.videoName {\n        width: 70%;\n        flex-shrink: 0;\n        margin: 0;\n\n        @media only screen and (max-width: 767px) {\n          width: 100%;\n        }\n\n        @media only screen and (min-width: 768px) and (max-width: 1199px) {\n          flex-shrink: 1;\n        }\n\n        a {\n          font-size: 18px;\n          font-weight: 400;\n          color: ",";\n          line-height: 1.3;\n          word-break: break-word;\n          display: inline-block;\n          text-decoration: none;\n          ",";\n\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n\n      .ChannelNameAndDate {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        margin-top: 3px;\n\n        @media only screen and (max-width: 420px) {\n          flex-direction: column;\n          align-items: flex-start;\n        }\n\n        .channelTitle {\n          width: auto;\n          flex-shrink: 0;\n          display: inline-block;\n          align-items: center;\n          font-size: 13px;\n          font-weight: 400;\n          color: ",";\n          line-height: 1.3;\n          ",";\n\n          &:hover {\n            color: ",";\n          }\n        }\n\n        .uploadDate {\n          font-size: 13px;\n          font-weight: 400;\n          color: ",";\n          line-height: 1.3;\n          display: inline-block;\n          padding-left: 20px;\n          position: relative;\n\n          &:before {\n            content: '';\n            width: 4px;\n            height: 4px;\n            display: inline-block;\n            background-color: ",";\n            position: absolute;\n            top: 6px;\n            left: ",";\n            right: ",";\n            ",";\n          }\n\n          @media only screen and (max-width: 420px) {\n            padding: ",";\n\n            &:before {\n              left: ",";\n              right: ",";\n            }\n          }\n        }\n      }\n\n      p {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.3;\n        margin-bottom: 0;\n        margin-top: 10px;\n        display: block;\n        word-break: break-word;\n      }\n    }\n  }\n"]);return V=function(){return n},n}var R,D=k.c.div(V(),Object(S.palette)("border",2),function(n){return"rtl"===n["data-rtl"]?"0 20px 0 0":"0 0 0 20px"},Object(S.palette)("text",0),Object(C.c)(""),Object(S.palette)("primary",0),Object(S.palette)("text",2),Object(C.c)(""),Object(S.palette)("primary",11),Object(S.palette)("text",2),Object(S.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"inherit"},Object(C.a)("50%"),function(n){return"rtl"===n["data-rtl"]?"0 13px 0 0":"0 0 0 13px"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(S.palette)("text",3)),Y=k.c.div(P(),Object(S.palette)("text",0),Object(S.palette)("border",2)),z=Object(N.a)(D),A=(R=E.a,Object(k.c)(R)(T())),I=function(n){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){var n=this.props,e=n.selectedVideo,t=n.handleCancel;return s.a.createElement(A,{title:e.snippet.tittle,visible:!0,footer:null,onCancel:t,cancelText:"Cancel",className:"youtubeVideoModal",width:"670px"},s.a.createElement("div",{className:"isoCardWrapper"}),s.a.createElement(j.a,{videoId:e.id.videoId,opts:{playerVars:{autoplay:1}}}))}}]),e}(c.Component);var L=function(n){function e(){var n,t;Object(a.a)(this,e);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(t=Object(r.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(l)))).state={selectedVideo:null},t.handleCancel=function(){t.handleSelectedVideo(null)},t.handleSelectedVideo=function(n){t.setState({selectedVideo:n})},t}return Object(l.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){var n=this.props,e=n.YoutubeSearch,t=n.onPageChange,a=this.state.selectedVideo,i=e.searcText,r=e.result,o=e.loading,l=e.error,c=e.nextPageToken,d=e.prevPageToken,u=e.total_count;return i?o?s.a.createElement(y.a,null):l||!u?s.a.createElement(v.a,{text:"THERE ARE SOME ERRORS"}):0===r.length?s.a.createElement(v.a,{text:"No Result Found"}):s.a.createElement(Y,{className:"isoYoutubeSearchResult"},s.a.createElement("p",{className:"isoTotalResultFind"},s.a.createElement("span",null,"".concat(u)," videos found")),a?s.a.createElement(I,{selectedVideo:this.state.selectedVideo,handleCancel:this.handleCancel}):"",function(n,e){return s.a.createElement(z,{className:"isoYoutubeResultList"},n.map(function(n){var t=n.snippet,a=t.publishedAt,i=t.title,r=t.description,o=t.channelTitle,l=t.thumbnails,c=t.channelId,d=n.id.videoId,u=new Date(a).toDateString();return s.a.createElement("div",{key:d,className:"isoSingleVideoResult",onClick:function(t){t.preventDefault(),e(n)}},s.a.createElement("div",{className:"videoThumb"},s.a.createElement("img",{alt:"#",src:l.default.url})),s.a.createElement("div",{className:"videoDescription"},s.a.createElement("h3",{className:"videoName"},s.a.createElement("a",{href:"# "},"".concat(i," "))),s.a.createElement("div",{className:"ChannelNameAndDate"},s.a.createElement("a",{onClick:function(n){n.preventDefault(),n.stopPropagation(),window.open("https://www.youtube.com/channel/".concat(c),"_blank")},className:"channelTitle",href:"# "},"".concat(o," ")),s.a.createElement("span",{className:"uploadDate"},u)),r?s.a.createElement("p",null,r):""))}))}(r,this.handleSelectedVideo),s.a.createElement("div",{className:"youtubeSearchPagination"},d?s.a.createElement(w.b,{onClick:function(){return t(i,d)}},"Previous"):"",c?s.a.createElement(w.b,{onClick:function(){return t(i,c)}},"Next"):"")):s.a.createElement("div",null)}}]),e}(c.Component),B=t(1196),W=t(119),F=t(1388),H=t(38),M=W.a.youtubeSearch,J=W.a.onPageChange,K=function(n){function e(){var n,t;Object(a.a)(this,e);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(t=Object(r.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(l)))).onSearch=function(n){n&&n.length>0?t.props.youtubeSearch(n):Object(g.a)("error","Please type something")},t}return Object(l.a)(e,n),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.onSearch(this.props.YoutubeSearch.searcText)}},{key:"render",value:function(){var n=B.a.rowStyle,e=B.a.colStyle,t=B.a.gutter;return s.a.createElement(f.default,null,s.a.createElement(h.default,null,s.a.createElement(b.a,{id:"sidebar.youtubeSearch"})),s.a.createElement(u.a,{style:n,gutter:t,justify:"start"},s.a.createElement(p.a,{md:24,sm:24,xs:24,style:e},H.i?s.a.createElement(m.default,{style:{minHeight:220}},s.a.createElement(x.b,{placeholder:"Search on Youtube",defaultValue:this.props.YoutubeSearch.searcText,onSearch:this.onSearch}),s.a.createElement(L,{YoutubeSearch:this.props.YoutubeSearch,onPageChange:this.props.onPageChange})):s.a.createElement(F.a,null))))}}]),e}(c.Component);e.default=Object(d.c)(function(n){return{YoutubeSearch:n.YoutubeSearch}},{youtubeSearch:M,onPageChange:J})(K)}}]);
//# sourceMappingURL=91.3b53460a.chunk.js.map