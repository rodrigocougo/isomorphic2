(window.webpackJsonp=window.webpackJsonp||[]).push([[118,112],{1228:function(l,o){l.exports=function(l){var o=-1,t=Array(l.size);return l.forEach(function(l){t[++o]=l}),t}},1231:function(l,o,t){var e=t(407),n=t(287),r=t(628),q=t(192);l.exports=function(l,o,t){if(!q(t))return!1;var i=typeof o;return!!("number"==i?n(t)&&r(o,t.length):"string"==i&&o in t)&&e(t[o],l)}},1984:function(l,o,t){"use strict";t.r(o);var e=t(17),n=t(18),r=t(25),q=t(23),i=t(24),a=t(11),s=t(0),b=t.n(s),c=t(1960),u=t.n(c),k=(t(1964),t(1965),t(32)),w=t(28),p=t(6),f=t(44);function h(){var l=Object(k.a)(["\n  .ql-editor {\n    min-height: 215px;\n    text-align: ",";\n  }\n\n  .ql-toolbar.ql-snow,\n  .ql-container.ql-snow {\n    border: 1px solid ",";\n    text-align: ",";\n\n    .ql-formats {\n      margin: ",";\n    }\n\n    .ql-picker-label {\n      padding: ",";\n\n      &:not(.ql-color-picker):not(.ql-icon-picker) {\n        svg {\n          right: ",";\n          left: ",";\n        }\n      }\n    }\n  }\n\n  .ql-container {\n    font-family: ",";\n    min-height: 220px;\n  }\n\n  .ql-editor p,\n  .ql-editor ol,\n  .ql-editor ul,\n  .ql-editor pre,\n  .ql-editor blockquote,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    color: ",";\n  }\n\n  .ql-snow.ql-toolbar button:hover,\n  .ql-snow .ql-toolbar button:hover,\n  .ql-snow.ql-toolbar button:focus,\n  .ql-snow .ql-toolbar button:focus,\n  .ql-snow.ql-toolbar button.ql-active,\n  .ql-snow .ql-toolbar button.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-label:hover,\n  .ql-snow .ql-toolbar .ql-picker-label:hover,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-item:hover,\n  .ql-snow .ql-toolbar .ql-picker-item:hover,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-stroke,\n  .ql-snow .ql-toolbar button:hover .ql-stroke,\n  .ql-snow.ql-toolbar button:focus .ql-stroke,\n  .ql-snow .ql-toolbar button:focus .ql-stroke,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: ",";\n  }\n\n  .ql-snow a {\n    color: ",";\n  }\n"]);return h=function(){return l},l}var v=w.c.div(h(),function(l){return"rtl"===l["data-rtl"]?"right":"left"},Object(p.palette)("border",0),function(l){return"rtl"===l["data-rtl"]?"right":"left"},function(l){return"rtl"===l["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},function(l){return"rtl"===l["data-rtl"]?"0 8px 0 2px":"0 2px 0 8px"},function(l){return"rtl"===l["data-rtl"]?"inherit":"0"},function(l){return"rtl"===l["data-rtl"]?"0":"inherit"},Object(p.font)("primary",0),Object(p.palette)("text",0),Object(p.palette)("primary",0),Object(p.palette)("primary",0),Object(p.palette)("primary",0),Object(p.palette)("primary",0)),d=Object(f.a)(v);t.d(o,"default",function(){return m});var m=function(l){function o(l){var t;return Object(e.a)(this,o),(t=Object(r.a)(this,Object(q.a)(o).call(this,l))).handleChange=t.handleChange.bind(Object(a.a)(Object(a.a)(t))),t.state={value:""},t.quillModules={toolbar:{container:[[{header:[1,2,!1]},{font:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]]}},t}return Object(i.a)(o,l),Object(n.a)(o,[{key:"handleChange",value:function(l){this.setState({value:l})}},{key:"render",value:function(){var l={theme:"snow",formats:o.formats,placeholder:"Write Something",value:this.state.value,onChange:this.handleChange,modules:this.quillModules};return b.a.createElement(d,null,b.a.createElement(u.a,l))}}]),o}(s.Component)}}]);
//# sourceMappingURL=forms-editor.af9d7c62.chunk.js.map