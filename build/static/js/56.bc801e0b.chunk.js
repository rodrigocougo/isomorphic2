(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1215:function(n,t,e){"use strict";var a=e(8),r=e.n(a),i=e(50),o=e.n(i),c=e(19),l=e.n(c),s=e(51),p=e.n(s),d=e(12),u=e.n(d),m=e(21),f=e.n(m),h=e(0),v=e.n(h),b=e(1),g=e.n(b);function x(n){var t=[];return v.a.Children.forEach(n,function(n){t.push(n)}),t}function y(n,t){var e=null;return n&&n.forEach(function(n){e||n&&n.key===t&&(e=n)}),e}function E(n,t,e){var a=null;return n&&n.forEach(function(n){if(n&&n.key===t&&n.props[e]){if(a)throw new Error("two child with same key for <rc-animate> children");a=n}}),a}var j=e(15),w=e.n(j),O=e(158),C=e.n(O),k={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},N=[];"undefined"!==typeof window&&"undefined"!==typeof document&&function(){var n=document.createElement("div").style;for(var t in"AnimationEvent"in window||delete k.animationend.animation,"TransitionEvent"in window||delete k.transitionend.transition,k)if(k.hasOwnProperty(t)){var e=k[t];for(var a in e)if(a in n){N.push(e[a]);break}}}();var A={addEndEventListener:function(n,t){0!==N.length?N.forEach(function(e){!function(n,t,e){n.addEventListener(t,e,!1)}(n,e,t)}):window.setTimeout(t,0)},endEvents:N,removeEndEventListener:function(n,t){0!==N.length&&N.forEach(function(e){!function(n,t,e){n.removeEventListener(t,e,!1)}(n,e,t)})}},L=e(222),T=e.n(L),P=0!==A.endEvents.length,z=["Webkit","Moz","O","ms"],I=["-webkit-","-moz-","-o-","ms-",""];function S(n,t){for(var e=window.getComputedStyle(n,null),a="",r=0;r<I.length&&!(a=e.getPropertyValue(I[r]+t));r++);return a}function B(n){if(P){var t=parseFloat(S(n,"transition-delay"))||0,e=parseFloat(S(n,"transition-duration"))||0,a=parseFloat(S(n,"animation-delay"))||0,r=parseFloat(S(n,"animation-duration"))||0,i=Math.max(e+t,r+a);n.rcEndAnimTimeout=setTimeout(function(){n.rcEndAnimTimeout=null,n.rcEndListener&&n.rcEndListener()},1e3*i+200)}}function W(n){n.rcEndAnimTimeout&&(clearTimeout(n.rcEndAnimTimeout),n.rcEndAnimTimeout=null)}var D=function(n,t,e){var a="object"===("undefined"===typeof t?"undefined":C()(t)),r=a?t.name:t,i=a?t.active:t+"-active",o=e,c=void 0,l=void 0,s=T()(n);return e&&"[object Object]"===Object.prototype.toString.call(e)&&(o=e.end,c=e.start,l=e.active),n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),W(n),s.remove(r),s.remove(i),A.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,o&&o())},A.addEndEventListener(n,n.rcEndListener),c&&c(),s.add(r),n.rcAnimTimeout=setTimeout(function(){n.rcAnimTimeout=null,s.add(i),l&&setTimeout(l,0),B(n)},30),{stop:function(){n.rcEndListener&&n.rcEndListener()}}};D.style=function(n,t,e){n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),W(n),A.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,e&&e())},A.addEndEventListener(n,n.rcEndListener),n.rcAnimTimeout=setTimeout(function(){for(var e in t)t.hasOwnProperty(e)&&(n.style[e]=t[e]);n.rcAnimTimeout=null,B(n)},0)},D.setTransition=function(n,t,e){var a=t,r=e;void 0===e&&(r=a,a=""),a=a||"",z.forEach(function(t){n.style[t+"Transition"+a]=r})},D.isCssAnimationSupported=P;var R=D,K={isAppearSupported:function(n){return n.transitionName&&n.transitionAppear||n.animation.appear},isEnterSupported:function(n){return n.transitionName&&n.transitionEnter||n.animation.enter},isLeaveSupported:function(n){return n.transitionName&&n.transitionLeave||n.animation.leave},allowAppearCallback:function(n){return n.transitionAppear||n.animation.appear},allowEnterCallback:function(n){return n.transitionEnter||n.animation.enter},allowLeaveCallback:function(n){return n.transitionLeave||n.animation.leave}},M={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},_=function(n){function t(){return l()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f()(t,n),p()(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(n){K.isEnterSupported(this.props)?this.transition("enter",n):n()}},{key:"componentWillAppear",value:function(n){K.isAppearSupported(this.props)?this.transition("appear",n):n()}},{key:"componentWillLeave",value:function(n){K.isLeaveSupported(this.props)?this.transition("leave",n):n()}},{key:"transition",value:function(n,t){var e=this,a=w.a.findDOMNode(this),r=this.props,i=r.transitionName,o="object"===typeof i;this.stop();var c=function(){e.stopper=null,t()};if((P||!r.animation[n])&&i&&r[M[n]]){var l=o?i[n]:i+"-"+n,s=l+"-active";o&&i[n+"Active"]&&(s=i[n+"Active"]),this.stopper=R(a,{name:l,active:s},c)}else this.stopper=r.animation[n](a,c)}},{key:"stop",value:function(){var n=this.stopper;n&&(this.stopper=null,n.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(v.a.Component);_.propTypes={children:g.a.any};var V=_,U="rc_animate_"+Date.now();function F(n){var t=n.children;return v.a.isValidElement(t)&&!t.key?v.a.cloneElement(t,{key:U}):t}function H(){}var J=function(n){function t(n){l()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return q.call(e),e.currentlyAnimatingKeys={},e.keysToEnter=[],e.keysToLeave=[],e.state={children:x(F(n))},e.childrenRefs={},e}return f()(t,n),p()(t,[{key:"componentDidMount",value:function(){var n=this,t=this.props.showProp,e=this.state.children;t&&(e=e.filter(function(n){return!!n.props[t]})),e.forEach(function(t){t&&n.performAppear(t.key)})}},{key:"componentWillReceiveProps",value:function(n){var t=this;this.nextProps=n;var e=x(F(n)),a=this.props;a.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach(function(n){t.stop(n)});var r=a.showProp,i=this.currentlyAnimatingKeys,c=a.exclusive?x(F(a)):this.state.children,l=[];r?(c.forEach(function(n){var t=n&&y(e,n.key),a=void 0;(a=t&&t.props[r]||!n.props[r]?t:v.a.cloneElement(t||n,o()({},r,!0)))&&l.push(a)}),e.forEach(function(n){n&&y(c,n.key)||l.push(n)})):l=function(n,t){var e=[],a={},r=[];return n.forEach(function(n){n&&y(t,n.key)?r.length&&(a[n.key]=r,r=[]):r.push(n)}),t.forEach(function(n){n&&Object.prototype.hasOwnProperty.call(a,n.key)&&(e=e.concat(a[n.key])),e.push(n)}),e=e.concat(r)}(c,e),this.setState({children:l}),e.forEach(function(n){var e=n&&n.key;if(!n||!i[e]){var a=n&&y(c,e);if(r){var o=n.props[r];if(a)!E(c,e,r)&&o&&t.keysToEnter.push(e);else o&&t.keysToEnter.push(e)}else a||t.keysToEnter.push(e)}}),c.forEach(function(n){var a=n&&n.key;if(!n||!i[a]){var o=n&&y(e,a);if(r){var c=n.props[r];if(o)!E(e,a,r)&&c&&t.keysToLeave.push(a);else c&&t.keysToLeave.push(a)}else o||t.keysToLeave.push(a)}})}},{key:"componentDidUpdate",value:function(){var n=this.keysToEnter;this.keysToEnter=[],n.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(n,t){var e=this.props.showProp;return e?E(n,t,e):y(n,t)}},{key:"stop",value:function(n){delete this.currentlyAnimatingKeys[n];var t=this.childrenRefs[n];t&&t.stop()}},{key:"render",value:function(){var n=this,t=this.props;this.nextProps=t;var e=this.state.children,a=null;e&&(a=e.map(function(e){if(null===e||void 0===e)return e;if(!e.key)throw new Error("must set key for <rc-animate> children");return v.a.createElement(V,{key:e.key,ref:function(t){n.childrenRefs[e.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},e)}));var i=t.component;if(i){var o=t;return"string"===typeof i&&(o=r()({className:t.className,style:t.style},t.componentProps)),v.a.createElement(i,o,a)}return a[0]||null}}]),t}(v.a.Component);J.isAnimate=!0,J.propTypes={component:g.a.any,componentProps:g.a.object,animation:g.a.object,transitionName:g.a.oneOfType([g.a.string,g.a.object]),transitionEnter:g.a.bool,transitionAppear:g.a.bool,exclusive:g.a.bool,transitionLeave:g.a.bool,onEnd:g.a.func,onEnter:g.a.func,onLeave:g.a.func,onAppear:g.a.func,showProp:g.a.string,children:g.a.node},J.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:H,onEnter:H,onLeave:H,onAppear:H};var q=function(){var n=this;this.performEnter=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillEnter(n.handleDoneAdding.bind(n,t,"enter")))},this.performAppear=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillAppear(n.handleDoneAdding.bind(n,t,"appear")))},this.handleDoneAdding=function(t,e){var a=n.props;if(delete n.currentlyAnimatingKeys[t],!a.exclusive||a===n.nextProps){var r=x(F(a));n.isValidChildByKey(r,t)?"appear"===e?K.allowAppearCallback(a)&&(a.onAppear(t),a.onEnd(t,!0)):K.allowEnterCallback(a)&&(a.onEnter(t),a.onEnd(t,!0)):n.performLeave(t)}},this.performLeave=function(t){n.childrenRefs[t]&&(n.currentlyAnimatingKeys[t]=!0,n.childrenRefs[t].componentWillLeave(n.handleDoneLeaving.bind(n,t)))},this.handleDoneLeaving=function(t){var e=n.props;if(delete n.currentlyAnimatingKeys[t],!e.exclusive||e===n.nextProps){var a=x(F(e));if(n.isValidChildByKey(a,t))n.performEnter(t);else{var r=function(){K.allowLeaveCallback(e)&&(e.onLeave(t),e.onEnd(t,!1))};!function(n,t,e){var a=n.length===t.length;return a&&n.forEach(function(n,r){var i=t[r];n&&i&&(n&&!i||!n&&i?a=!1:n.key!==i.key?a=!1:e&&n.props[e]!==i.props[e]&&(a=!1))}),a}(n.state.children,a,e.showProp)?n.setState({children:a},r):r()}}}};t.a=J},1444:function(n,t,e){"use strict";var a=e(2752);t.a=a.a},2254:function(n,t,e){},2805:function(n,t,e){"use strict";e.r(t);var a=e(17),r=e(18),i=e(25),o=e(23),c=e(24),l=e(0),s=e.n(l),p=e(37),d=e(100),u=e(2815),m=e(56),f=e(194),h=e(11),v=e(29),b=e(123),g=e(423),x=e(226),y=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.deleteContact,a="";return t.firstName&&(a="".concat(t.firstName," ")),t.lastName&&(a="".concat(a).concat(t.lastName)),a||(a="No Name"),s.a.createElement(g.a,{title:"Sure to delete ".concat(a,"?"),okText:"DELETE",cancelText:"No",onConfirm:function(){Object(x.a)("error","".concat(a," Deleted"),""),e(t.id)}},s.a.createElement(f.b,{icon:"close",type:"default",className:"isoDeleteBtn"}))}}]),t}(l.Component),E=e(1),j=e(32),w=e(28),O=e(6),C=e(9),k=e(44);function N(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .isoNoResultMsg {\n    padding: 15px 20px;\n    text-align: center;\n    color: ",";\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  .isoSearchBar {\n    .ant-input {\n      width: 100%;\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      height: 69px;\n      padding: 0 20px;\n      padding-left: ",";\n      padding-right: ",";\n      border: 0;\n      border-bottom: 1px solid ",";\n      outline: 0 !important;\n      overflow: hidden;\n      background-color: #ffffff;\n      ",";\n      ",";\n      ",";\n\n      @media only screen and (max-width: 767px) {\n        height: 50px;\n      }\n\n      &:hover,\n      &:focus {\n        border-color: "," !important;\n      }\n\n      &::-webkit-input-placeholder {\n        color: ",";\n      }\n\n      &:-moz-placeholder {\n        color: ",";\n      }\n\n      &::-moz-placeholder {\n        color: ",";\n      }\n      &:-ms-input-placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-input-suffix {\n    left: 10px;\n    right: auto;\n    color: ",";\n  }\n\n  .isoContactList {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    max-height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n\n    .contactListScrollbar {\n      height: calc(100vh - 200px);\n\n      @media only screen and (max-width: 767px) {\n        max-height: 60vh;\n      }\n    }\n\n    .isoSingleContact {\n      width: 100%;\n      margin: 0;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 15px 20px;\n      padding-right: ",";\n      padding-left: ",";\n      border-bottom: 1px solid ",";\n      text-align: ",";\n      position: relative;\n      cursor: pointer;\n\n      &.active {\n        background-color: ",";\n      }\n\n      &:last-child {\n        border-bottom: 0;\n      }\n\n      .isoAvatar {\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: ",";\n        margin-left: ",";\n        flex-shrink: 0;\n        overflow: hidden;\n        ",";\n\n        img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n        }\n      }\n\n      .isoContactName {\n        h3 {\n          font-size: 15px;\n        }\n      }\n\n      .isoNoteText {\n        width: calc(100% - 60px);\n        margin-right: ",";\n        margin-left: ",";\n        padding: 20px 0;\n        cursor: pointer;\n\n        h3 {\n          width: 100%;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          color: ",";\n          font-weight: 500;\n        }\n\n        .isoNoteCreatedDate {\n          font-size: 13px;\n          color: ",";\n        }\n      }\n\n      .isoDeleteBtn {\n        width: 24px;\n        height: 24px;\n        background-color: transparent;\n        flex-shrink: 0;\n        position: absolute;\n        top: 20px;\n        right: ",";\n        left: ",";\n        padding: 0;\n        border: 0;\n        font-size: 14px;\n        color: ",";\n        ",";\n\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n\n    .isoNotlistNotice {\n      font-size: 14px;\n      font-weight: 400;\n      color: ",";\n      line-height: inherit;\n      padding: 30px 0;\n    }\n  }\n"]);return N=function(){return n},n}var A=w.c.div(N(),Object(O.palette)("secondary",2),Object(O.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"inherit"},Object(O.palette)("border",0),Object(C.b)("none"),Object(C.a)(),Object(C.c)(),Object(O.palette)("border",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"20px":"35px"},function(n){return"rtl"===n["data-rtl"]?"35px":"20px"},Object(O.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(O.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},Object(C.a)("50%"),function(n){return"rtl"===n["data-rtl"]?"inherit":"20px"},function(n){return"rtl"===n["data-rtl"]?"20px":"inherit"},Object(O.palette)("secondary",2),Object(O.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"5px"},function(n){return"rtl"===n["data-rtl"]?"5px":"inherit"},Object(O.palette)("grayscale",0),Object(C.c)(),Object(O.palette)("primary",0),Object(O.palette)("grayscale",0)),L=Object(k.a)(A),T=e(162);var P=function(n){function t(n){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this,n))).singleContact=e.singleContact.bind(Object(h.a)(Object(h.a)(e))),e.onChange=e.onChange.bind(Object(h.a)(Object(h.a)(e))),e.state={search:""},e}return Object(c.a)(t,n),Object(r.a)(t,[{key:"singleContact",value:function(n){var t=this.props,e=t.seectedId,a=t.deleteContact,r=t.changeContact,i=e===n.id?"active":"";return s.a.createElement("div",{key:n.id,className:"".concat(i," isoSingleContact"),onClick:function(){return r(n.id)}},s.a.createElement("div",{className:"isoAvatar"},n.avatar?s.a.createElement("img",{alt:"#",src:n.avatar}):""),s.a.createElement("div",{className:"isoContactName"},s.a.createElement("h3",null,n.name?n.name:"No Name")),s.a.createElement(y,{deleteContact:a,contact:n}))}},{key:"onChange",value:function(n){this.setState({search:n.target.value})}},{key:"render",value:function(){var n=this,t=this.state.search,e=function(n,t){return(t=t.toUpperCase())?n.filter(function(n){return n.name.toUpperCase().includes(t)}):n}(this.props.contacts,t);return s.a.createElement(L,{className:"isoContactListWrapper"},s.a.createElement(b.b,{placeholder:this.context.intl.formatMessage({id:"contactlist.searchContacts"}),value:t,onChange:this.onChange,className:"isoSearchBar"}),e&&e.length>0?s.a.createElement("div",{className:"isoContactList"},s.a.createElement(T.a,{className:"contactListScrollbar"},e.map(function(t){return n.singleContact(t)}))):s.a.createElement("span",{className:"isoNoResultMsg"},s.a.createElement(v.a,{id:"Component.contacts.noOption"})))}}]),t}(l.Component);function z(){var n=Object(j.a)(["\n  width: 100%;\n  height: calc(100% - 145px);\n  padding: 0 35px;\n  display: -webkit-flex;\n  display: -ms-flex;\n  display: flex;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 20px;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    flex-direction: column;\n  }\n\n  .isoContactCardHead {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 120px;\n    flex-shrink: 0;\n    margin-right: ",";\n    margin-left: ",";\n    flex-shrink: 0;\n\n    @media only screen and (max-width: 600px) {\n      margin-bottom: 20px;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      margin-bottom: 20px;\n    }\n\n    .isoPersonImage {\n      width: 120px;\n      height: 120px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 10px;\n      overflow: hidden;\n      ",";\n\n      .avatar-uploader {\n        width: 100%;\n        height: 100%;\n      }\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n\n    .isoPersonName {\n      font-size: 15px;\n      font-weight: 500;\n      color: ",";\n      line-height: 1.5;\n      margin: 0;\n    }\n  }\n\n  .isoContactInfoWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    @media only screen and (max-width: 767px) {\n      padding: 20px 0;\n    }\n\n    .isoContactCardInfos {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      align-items: baseline;\n      flex-direction: row;\n      margin-bottom: 15px;\n\n      @media only screen and (max-width: 430px) {\n        flex-direction: column;\n        margin-bottom: 20px;\n      }\n\n      .isoInfoLabel {\n        font-size: 14px;\n        font-weight: 500;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        margin-right: ",";\n        margin-left: ",";\n        text-align: ",";\n        min-width: 80px;\n        position: relative;\n\n        @media only screen and (max-width: 430px) {\n          margin-bottom: 5px;\n          margin-right: ",";\n          margin-left: ",";\n          padding-right: ",";\n          padding-left: ",";\n          min-width: 0;\n        }\n\n        &::after {\n          content: ':';\n          position: absolute;\n          right: ",";\n          left: ",";\n        }\n      }\n\n      .isoInfoDetails {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 1.5;\n        margin: 0;\n        text-align: ",";\n      }\n\n      input {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: inherit;\n        height: 36px;\n        padding: 0 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        overflow: hidden;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n\n      textarea {\n        font-size: 14px;\n        font-weight: 400;\n        color: ",";\n        line-height: 24px;\n        height: 210px;\n        padding: 10px 15px;\n        margin: 0;\n        border: 1px solid ",";\n        outline: 0 !important;\n        background-color: #ffffff;\n        ",";\n        ",";\n        ",";\n\n        &:focus {\n          border-color: ",";\n          ",";\n          outline: 0;\n        }\n\n        &:hover {\n          border-color: ",";\n        }\n\n        &::-webkit-input-placeholder {\n          color: ",";\n        }\n\n        &:-moz-placeholder {\n          color: ",";\n        }\n\n        &::-moz-placeholder {\n          color: ",";\n        }\n        &:-ms-input-placeholder {\n          color: ",";\n        }\n      }\n    }\n  }\n"]);return z=function(){return n},n}P.contextTypes={intl:E.PropTypes.object.isRequired};var I=w.c.div(z(),function(n){return"rtl"===n["data-rtl"]?"inherit":"50px"},function(n){return"rtl"===n["data-rtl"]?"50px":"inherit"},Object(C.a)("5px"),Object(O.palette)("text",0),Object(O.palette)("text",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(O.palette)("text",2),function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(O.palette)("text",2),Object(O.palette)("border",0),Object(C.b)("none"),Object(C.a)("3px"),Object(C.c)(),Object(O.palette)("primary",0),Object(C.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(O.palette)("primary",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("text",2),Object(O.palette)("border",0),Object(C.b)("none"),Object(C.a)("3px"),Object(C.c)(),Object(O.palette)("primary",0),Object(C.b)("0 0 0 2px rgba(68, 130, 255, 0.2)"),Object(O.palette)("primary",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0),Object(O.palette)("grayscale",0)),S=Object(k.a)(I),B=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contact,e=n.otherAttributes,a=t.name?t.name:"No Name",r=[];return e.forEach(function(n){var e=t[n.value];e&&r.push(s.a.createElement("div",{className:"isoContactCardInfos",key:n.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(n.title)),s.a.createElement("p",{className:"isoInfoDetails"},e)))}),s.a.createElement(S,{className:"isoContactCard"},s.a.createElement("div",{className:"isoContactCardHead"},s.a.createElement("div",{className:"isoPersonImage"},t.avatar?s.a.createElement("img",{alt:"#",src:t.avatar}):""),s.a.createElement("h1",{className:"isoPersonName"},a)),s.a.createElement("div",{className:"isoContactInfoWrapper"},r))}}]),t}(l.Component),W=e(63),D=e(1444);e(2254);function R(n){return"image/jpeg"===n.type?n.size/1024/1024<2?(Object(x.a)("success","Image uploaded successfully!",""),!0):(Object(x.a)("error","Image must smaller than 2MB!",""),!1):(Object(x.a)("error","You can only upload JPG file!",""),!1)}var K=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this,t=this.props,e=t.contact,a=t.otherAttributes,r=e.name?e.name:"No Name",i=[];return[{value:"firstName",title:"First Name"},{value:"lastName",title:"Last Name"}].concat(Object(W.a)(a)).forEach(function(t){var a=e[t.value],r=function(a){e[t.value]=a.target.value;var r="";e.firstName&&(r="".concat(e.firstName," ")),e.lastName&&(r="".concat(r).concat(e.lastName)),e.name=r,n.props.editContact(e)};"note"===t.value?i.push(s.a.createElement("div",{className:"isoContactCardInfos",key:t.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(t.title)),s.a.createElement(b.c,{placeholder:"".concat(t.title),value:a,type:"textarea",rows:5,onChange:function(n){return r(n)}}))):i.push(s.a.createElement("div",{className:"isoContactCardInfos",key:t.value},s.a.createElement("p",{className:"isoInfoLabel"},"".concat(t.title)),s.a.createElement(b.d,{placeholder:"".concat(t.title),value:a,onChange:function(n){return r(n)}})))}),s.a.createElement(S,{className:"isoContactCard"},s.a.createElement("div",{className:"isoContactCardHead"},s.a.createElement("div",{className:"isoPersonImage"},s.a.createElement(D.a,{className:"avatar-uploader",name:"avatar",showUploadList:!1,beforeUpload:R,action:""},e.avatar?s.a.createElement("img",{src:e.avatar,alt:"",className:"avatar"}):"",s.a.createElement(m.a,{type:"plus",className:"avatar-uploader-trigger"}))),s.a.createElement("h1",{className:"isoPersonName"},r)),s.a.createElement("div",{className:"isoContactInfoWrapper"},i))}}]),t}(l.Component),M=e(448);function _(){var n=Object(j.a)(["\n  padding: 50px 35px;\n  display: flex;\n  "," @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n    flex-direction: column;\n    height: auto;\n  }\n\n  @media only screen and (min-width: 767px) and (max-width: 990px) {\n    padding: 40px 30px;\n  }\n\n  .isoContactListBar {\n    display: flex;\n    flex-direction: column;\n    flex-shrink: 0;\n    background: #ffffff;\n    border: 1px solid ",";\n    width: 320px;\n    overflow: hidden;\n    overflow-y: auto;\n\n    @media only screen and (max-width: 767px) {\n      width: auto !important;\n      margin-bottom: 20px;\n      min-width: 0 !important;\n      max-width: 100% !important;\n      flex: 0 !important;\n    }\n\n    @media only screen and (min-width: 767px) and (max-width: 990px) {\n      width: 270px !important;\n      flex: 0 0 270px !important;\n    }\n  }\n\n  .isoContactBoxWrapper {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    background-color: #ffffff;\n    border: 1px solid ",";\n    border-left: ",";\n    border-right: ",";\n    position: relative;\n\n    .isoContactBox {\n      width: 100%;\n      height: 100%;\n    }\n\n    .contactBoxScrollbar {\n      height: calc(100vh - 225px);\n    }\n\n    .isoContactControl {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      flex-shrink: 0;\n      padding: 30px;\n      background-color: #ffffff;\n\n      @media only screen and (max-width: 767px) {\n        padding: 30px 20px;\n      }\n\n      button:not(.isoAddContactBtn) {\n        font-size: 16px;\n        color: ",";\n        width: 35px;\n        height: 35px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        justify-content: center;\n        background-color: #ffffff;\n        outline: 0;\n        padding: 0;\n        border: 1px solid ",";\n        margin-left: ",";\n        margin-right: ",";\n        cursor: pointer;\n        ",";\n        ",";\n\n        i {\n          width: 100%;\n        }\n\n        span {\n          display: none;\n        }\n\n        &:first-child {\n          margin-left: ",";\n          margin-right: ",";\n        }\n\n        &:hover {\n          color: ",";\n          background-color: ",";\n        }\n      }\n\n      .isoAddContactBtn {\n        background-color: ",";\n        border: 0;\n        height: 30px;\n        padding: 0 15px;\n        margin-left: ",";\n        margin-right: ",";\n        ",";\n        ",";\n\n        span {\n          font-size: 12px;\n          font-weight: 400;\n          padding: 0;\n          text-transform: uppercase;\n          color: #ffffff;\n        }\n\n        &:hover {\n          background-color: ",";\n        }\n      }\n    }\n  }\n"]);return _=function(){return n},n}var V=w.c.div(_(),"",Object(O.palette)("border",0),Object(O.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(O.palette)("secondary",0),Object(O.palette)("border",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"-1px"},function(n){return"rtl"===n["data-rtl"]?"-1px":"inherit"},Object(C.a)(),Object(C.c)(),function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(O.palette)("primary",0),Object(O.palette)("grayscale",7),Object(O.palette)("primary",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"auto"},function(n){return"rtl"===n["data-rtl"]?"auto":"inherit"},Object(C.a)("3px"),Object(C.c)(),Object(O.palette)("primary",1)),U=Object(k.a)(V),F=d.a.changeContact,H=d.a.addContact,J=d.a.editContact,q=d.a.deleteContact,G=d.a.viewChange,Y=u.a.Content,Q=function(n){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,n),Object(r.a)(t,[{key:"render",value:function(){var n=this.props,t=n.contacts,e=n.seectedId,a=n.editView,r=n.changeContact,i=n.addContact,o=n.editContact,c=n.deleteContact,l=n.viewChange,p=e?t.filter(function(n){return n.id===e})[0]:null;return s.a.createElement(U,{className:"isomorphicContacts",style:{background:"none"}},s.a.createElement("div",{className:"isoContactListBar"},s.a.createElement(P,{contacts:t,seectedId:e,changeContact:r,deleteContact:c})),s.a.createElement(u.a,{className:"isoContactBoxWrapper"},p?s.a.createElement(Y,{className:"isoContactBox"},s.a.createElement("div",{className:"isoContactControl"},s.a.createElement(f.b,{type:"default",onClick:function(){return l(!a)}},a?s.a.createElement(m.a,{type:"check"}):s.a.createElement(m.a,{type:"edit"})," "),s.a.createElement(y,{deleteContact:c,contact:p}),s.a.createElement(f.b,{type:"primary",onClick:i,className:"isoAddContactBtn"},s.a.createElement(v.a,{id:"contactlist.addNewContact"}))),s.a.createElement(T.a,{className:"contactBoxScrollbar"},a?s.a.createElement(K,{contact:p,editContact:o,otherAttributes:M.b}):s.a.createElement(B,{contact:p,otherAttributes:M.b}))):s.a.createElement("div",{className:"isoContactControl"},s.a.createElement(f.b,{type:"primary",onClick:i,className:"isoAddContactBtn"},s.a.createElement(v.a,{id:"contactlist.addNewContact"})))))}}]),t}(l.Component);t.default=Object(p.c)(function(n){var t=n.Contacts;return{contacts:t.contacts,seectedId:t.seectedId,editView:t.editView}},{changeContact:F,addContact:H,editContact:J,deleteContact:q,viewChange:G})(Q)}}]);
//# sourceMappingURL=56.bc801e0b.chunk.js.map