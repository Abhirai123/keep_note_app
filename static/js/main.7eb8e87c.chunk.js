(this["webpackJsonpgoogle-keep-note"]=this["webpackJsonpgoogle-keep-note"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(11),a=n.n(o),s=(n(42),n(34)),i=n(19),l=(n(43),n(2)),j=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"Keep Notes App"})})},u=function(){var e=(new Date).getFullYear();return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("h1",{children:["\xa9 Copyright ",e]})})},d=n(23),b=n(27),O=n(65),h=n(32),f=n.n(h),x=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)({title:"",desc:""}),s=Object(i.a)(a,2),j=s[0],u=s[1],h=function(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,c))}))};return Object(l.jsx)("div",{className:"app-row",children:Object(l.jsx)("div",{className:"create-note",onDoubleClick:function(){return o(!r)},children:Object(l.jsxs)("form",{children:[r&&Object(l.jsx)("input",{type:"text",name:"title",value:j.title,onChange:h,placeholder:"Title",autoComplete:"off"}),r&&Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{rows:"4",name:"desc",value:j.desc,onChange:h,onClick:function(){o(!0)},placeholder:"write notes here..."}),Object(l.jsx)("br",{}),r&&Object(l.jsx)(O.a,{variant:"contained",color:"success",onClick:function(){j.title&&j.desc?(e.note_event(j),u({title:"",desc:""})):alert("Blank value not allowed...!")},children:Object(l.jsx)(f.a,{})})]})})})},p=n(33),v=n.n(p),g=function(e){return Object(l.jsxs)("div",{className:"show-notes",children:[Object(l.jsx)("h4",{className:"note-title",children:e.title}),Object(l.jsx)("p",{children:e.desc}),Object(l.jsx)(O.a,{variant:"contained",color:"error",onClick:function(){e.delete_note(e.id)},children:Object(l.jsx)(v.a,{})})]})};var m=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("keep_note");return e?JSON.parse(e):[]}()),t=Object(i.a)(e,2),n=t[0],r=t[1],o=function(e){r((function(t){return t.filter((function(t,n){return e!==n}))})),console.log("Deleated ...!"+e)};return Object(c.useEffect)((function(){localStorage.setItem("keep_note",JSON.stringify(n))}),[n]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(j,{}),Object(l.jsx)(x,{note_event:function(e){r((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(l.jsx)("div",{className:"app-row",children:n.map((function(e,t){return Object(l.jsx)(g,{id:t,title:e.title,desc:e.desc,delete_note:o},t)}))}),Object(l.jsx)(u,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),N()}},[[51,1,2]]]);
//# sourceMappingURL=main.7eb8e87c.chunk.js.map