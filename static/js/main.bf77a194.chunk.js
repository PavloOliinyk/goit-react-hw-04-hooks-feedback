(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"Container_container__3UgoW"}},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),r=n.n(i),s=(n(16),n(17),n(10)),o=n(2),j=n(3),l=n(5),b=n(4),u=n(11),d=n.n(u),h=n(0);var O=function(e){var t=e.children;return Object(h.jsx)("div",{className:d.a.container,children:t})},p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("section",{children:Object(h.jsxs)(O,{children:[Object(h.jsx)("h2",{children:this.props.title}),this.props.children]})})}}]),n}(c.Component),f=p,x=n(6),k=n.n(x),m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:"".concat(k.a.container," list"),children:[Object(h.jsxs)("li",{className:k.a.item,children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("p",{children:"Good"})]}),Object(h.jsxs)("li",{className:k.a.item,children:[Object(h.jsx)("p",{children:n}),Object(h.jsx)("p",{children:"Neutral"})]}),Object(h.jsxs)("li",{className:k.a.item,children:[Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:"Bad"})]}),Object(h.jsxs)("li",{className:k.a.item,children:[Object(h.jsx)("p",{children:a}),Object(h.jsx)("p",{children:"Total"})]}),Object(h.jsxs)("li",{className:k.a.item,children:[Object(h.jsxs)("p",{children:[i,"%"]}),Object(h.jsx)("p",{children:"Positive feadback"})]})]})}}]),n}(c.Component),v=m,g=n(8),_=n.n(g),y=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:"list ".concat(_.a.feedbackList),children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:_.a.btn,type:"button",value:e,onClick:function(){return n(e)},children:e})},e)}))})}}]),n}(c.Component),F=y,N=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("p",{children:this.props.message})}}]),n}(c.Component),C=N,P=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return t+e}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e.handleClick=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{hidden:!0,children:"Comments"}),Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(F,{options:a,onLeaveFeedback:this.handleClick})}),Object(h.jsx)(f,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(C,{message:"No feedback given"})})]})}}]),n}(c.Component),w=P;r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Statistics_container__3j3Mm",item:"Statistics_item__2h_5G"}},8:function(e,t,n){e.exports={feedbackList:"FeedbackOptions_feedbackList__1lko8",btn:"FeedbackOptions_btn__2kXsA"}}},[[19,1,2]]]);
//# sourceMappingURL=main.bf77a194.chunk.js.map