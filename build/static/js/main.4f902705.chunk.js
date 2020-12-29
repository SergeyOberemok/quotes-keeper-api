(this["webpackJsonpquotes-keeper-react-ui"]=this["webpackJsonpquotes-keeper-react-ui"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(8),r=n.n(s),u=n(10),o=(n(58),n(59),n(60),n(61),n(21)),d=n(7),l=n(17),j=n.n(l),h=n(96),b=n(13),O=n(35),f=function e(t){Object(O.a)(this,e),this.phrase=t.phrase||"",this.author=t.author||""},p=i.a.createContext();n(79);var x=function(e){var t=Object(a.useContext)(p).addNewQuote,n=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),r=s[0],u=s[1];return{inputs:{phrase:{value:n,onChange:function(e){return c(e.target.value)}},author:{value:r,onChange:function(e){return u(e.target.value)}}},phrase:function(){return n},author:function(){return r},clear:function(){c(""),u("")}}}();return Object(c.jsx)("div",{className:"add-new-quote--wrapper",children:Object(c.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),n.phrase()&&t(new f({phrase:n.phrase(),author:n.author()})),n.clear()},children:[Object(c.jsxs)("div",{className:"two fields",children:[Object(c.jsxs)("div",{className:"twelve wide field",children:[Object(c.jsx)("label",{htmlFor:"phrase",children:"Phrase"}),Object(c.jsx)("input",Object(b.a)(Object(b.a)({type:"text",id:"phrase"},n.inputs.phrase),{},{placeholder:"phrase"}))]}),Object(c.jsxs)("div",{className:"four wide field",children:[Object(c.jsx)("label",{htmlFor:"author",children:"Author"}),Object(c.jsx)("input",Object(b.a)(Object(b.a)({type:"text",id:"author"},n.inputs.author),{},{placeholder:"author"}))]})]}),Object(c.jsx)("button",{className:"ui button",type:"submit",disabled:e.disabled,children:"Add new quote"})]})})};n(80);var m=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),i=n[0],s=n[1],r=Object(a.useContext)(p).removeQuote;return Object(c.jsx)("div",{className:"item",children:Object(c.jsxs)("div",{className:"middle aligned content",children:[Object(c.jsx)("div",{className:"header",children:e.quote.phrase}),Object(c.jsx)("div",{className:"description",children:e.quote.author}),Object(c.jsx)("div",{className:"extra",children:Object(c.jsx)("div",{className:"ui right floated",children:i?Object(c.jsx)("i",{className:"spinner loading icon"}):Object(c.jsx)("i",{className:"close icon",onClick:function(){r(e.quote),s(!0)}})})})]})})};n(81);var v=function(e){return Object(c.jsx)("div",{className:"quote-list--wrapper",children:e.quotes.length>0?Object(c.jsx)("div",{className:"ui divided items",children:e.quotes.map((function(e,t){return Object(c.jsx)(m,{quote:e},t)}))}):Object(c.jsx)("p",{children:"Quote list is empty"})})},N={quotes:{read:"/api/quotes",create:"/api/quotes",delete:"/api/quotes/<id>"}};n(82);var g=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!0),r=Object(d.a)(s,2),l=r[0],b=r[1],O=Object(a.useState)(!1),f=Object(d.a)(O,2),m=f[0],g=f[1];return Object(a.useEffect)((function(){j.a.get(N.quotes.read).then((function(e){return e.data})).then((function(e){return i(e)})).then((function(){return b(!1)})).catch(console.error)}),[]),Object(c.jsx)(p.Provider,{value:{addNewQuote:function(e){g(!0),j.a.post(N.quotes.create,e).then((function(e){return e.data})).then((function(e){i([].concat(Object(o.a)(n),[e]))})).then((function(){return u.NotificationManager.success("Quote added successfully","New quote")})).then((function(){return g(!1)})).catch(console.error)},removeQuote:function(e){j.a.delete(N.quotes.delete.replace("<id>",e._id)).then((function(t){var c=n.findIndex((function(t){return t._id===e._id}));n.splice(c,1),i(Object(o.a)(n))})).then((function(){return u.NotificationManager.warning("Quote was deleted","Delete quote")})).catch(console.error)}},children:Object(c.jsxs)("div",{className:"ui container",children:[l?Object(c.jsx)("i",{className:"spinner loading icon"}):Object(c.jsx)(v,{quotes:n}),Object(c.jsx)("div",{className:"ui divider"}),Object(c.jsx)("div",{className:"ui one column centered grid",children:Object(c.jsx)("div",{className:"one column centered row",children:Object(c.jsx)("div",{className:"center aligned column",children:Object(c.jsx)(h.a,{defaultActivePage:1,firstItem:null,lastItem:null,pointing:!0,secondary:!0,disabled:n.length<5,totalPages:3})})})}),Object(c.jsx)("div",{className:"ui divider"}),Object(c.jsx)(x,{disabled:m})]})})},q=Object(a.memo)((function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{}),Object(c.jsxs)("main",{children:[Object(c.jsx)("h2",{className:"ui center aligned header",children:"Quotes"}),Object(c.jsx)(g,{})]})]})})),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsxs)("div",{children:[Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(q,{})}),Object(c.jsx)(u.NotificationContainer,{})]}),document.getElementById("root")),w()}},[[85,1,2]]]);
//# sourceMappingURL=main.4f902705.chunk.js.map