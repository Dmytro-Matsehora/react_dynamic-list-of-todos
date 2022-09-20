(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),l=c(2),r=c(3),i=c.n(r),o=c(1),d=(c(13),c(14),c(7)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:s===t?Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(0)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far fa-eye-slash"})})}):Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},h=function(e){var t=e.value,c=e.setValue,s=e.text,a=e.setText;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.currentTarget.value)},children:[Object(u.jsx)("option",{value:"all",children:" All "}),Object(u.jsx)("option",{value:"active",children:" Active "}),Object(u.jsx)("option",{value:"completed",children:" Completed "})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.currentTarget.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:""!==s&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todoId,c=e.todos,s=e.selectTodo,a=Object(o.useState)(!0),r=Object(l.a)(a,2),d=r[0],j=r[1],b=Object(o.useState)(null),h=Object(l.a)(b,2),O=h[0],f=h[1],p=c.find((function(e){return e.id===t})),v=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=5;break}return e.next=3,c=p.userId,x("/users/".concat(c));case 3:t=e.sent,f(t);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return v(),!1===d?null:Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),t?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t]}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){j(!1),s(0)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:null===p||void 0===p?void 0:p.title}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:"has-text-danger",children:null!==p&&void 0!==p&&p.completed?"Done":"Planned"})," by ",O?Object(u.jsx)("a",{href:"mailto:".concat(O.email),children:O.name}):Object(u.jsx)(m,{})]})]})]}):Object(u.jsx)(m,{})]})},f=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!1),r=Object(l.a)(a,2),d=r[0],j=r[1],f=Object(o.useState)(0),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(o.useState)("all"),g=Object(l.a)(y,2),k=g[0],T=g[1],w=Object(o.useState)(""),C=Object(l.a)(w,2),S=C[0],I=C[1],_=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,s(t),j(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();_();var B=c.filter((function(e){switch(k){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return e.title.toLowerCase().includes(S.toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{todos:c,value:k,setValue:T,text:S,setText:I})}),Object(u.jsx)("div",{className:"block",children:d?Object(u.jsx)(b,{todos:B,selectedTodoId:v,selectTodo:function(e){return N(e)}}):Object(u.jsx)(m,{})})]})})}),0!==v&&Object(u.jsx)(O,{todoId:v,todos:B,selectTodo:function(e){return N(e)}})]})};a.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7c8834eb.chunk.js.map