(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={container:"Statistics_container__3j3Mm",item:"Statistics_item__2h_5G"}},,,function(e,t,c){e.exports={feedbackList:"FeedbackOptions_feedbackList__1lko8",btn:"FeedbackOptions_btn__2kXsA"}},,function(e,t,c){e.exports={container:"Container_container__3UgoW"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),s=c.n(i),r=(c(12),c(13),c(3)),o=c(7),j=c.n(o),l=c(0);var b=function(e){var t=e.children;return Object(l.jsx)("div",{className:j.a.container,children:t})};var d=function(e){var t=e.title,c=e.children;return Object(l.jsx)("section",{children:Object(l.jsxs)(b,{children:[Object(l.jsx)("h2",{children:t}),c]})})},u=c(2),h=c.n(u);var O=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,i=e.positivePercentage;return Object(l.jsxs)("ul",{className:"".concat(h.a.container," list"),children:[Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:"Good"})]}),Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("p",{children:"Neutral"})]}),Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("p",{children:n}),Object(l.jsx)("p",{children:"Bad"})]}),Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsx)("p",{children:a}),Object(l.jsx)("p",{children:"Total"})]}),Object(l.jsxs)("li",{className:h.a.item,children:[Object(l.jsxs)("p",{children:[i,"%"]}),Object(l.jsx)("p",{children:"Positive feadback"})]})]})},x=c(5),p=c.n(x);var f=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(l.jsx)("ul",{className:"list ".concat(p.a.feedbackList),children:t.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{className:p.a.btn,type:"button",value:e,onClick:function(){return c(e)},children:e})},e)}))})};var m=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})};function k(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(0),s=Object(r.a)(i,2),o=s[0],j=s[1],b=Object(n.useState)(0),u=Object(r.a)(b,2),h=u[0],x=u[1],p=function(){return c+o+h};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{hidden:!0,children:"Comments"}),Object(l.jsx)(d,{title:"Please leave feedback",children:Object(l.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":x((function(e){return e+1}))}}})}),Object(l.jsx)(d,{title:"Statistics",children:p()>0?Object(l.jsx)(O,{good:c,neutral:o,bad:h,total:p(),positivePercentage:Math.round(c/p()*100)}):Object(l.jsx)(m,{message:"No feedback given"})})]})}s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.6040c68e.chunk.js.map