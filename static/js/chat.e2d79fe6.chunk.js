"use strict";(self.webpackChunkchat_test_task=self.webpackChunkchat_test_task||[]).push([[348],{4240:function(e,t,n){n.d(t,{Z:function(){return r}});n(2791);var s="Section_section__Z2PLw",a=n(3329);function r(e){var t=e.title,n=e.isHidden,r=e.width,i=e.flexShrink,c=e.children;return(0,a.jsxs)("section",{className:s,style:{width:"".concat(r),flexShrink:"".concat(i)},children:[(0,a.jsx)("h1",{className:n?"sectionTitleIsHidden":"sectionTitle",children:t}),c]})}},5377:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(885),a=n(2791);function r(e){var t=(0,a.useState)(e),n=(0,s.Z)(t,2),r=n[0],i=n[1];return{state:r,setState:i,handleChange:function(e){var t=e.target.value;i(t)}}}},3073:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});n(3158);var s=n(8909),a=n(2791),r=n(1405),i="ContactItem_contactItem__Z4FuP",c="ContactItem_selectedBtn__DiKOt ContactItem_contactBtn__nMiN-",o="ContactItem_noneSelectedBtn__oOELV ContactItem_contactBtn__nMiN-",l=n(9914),u="ContactInfoBox_avatarWrapper__Z98dj",d="ContactInfoBox_avatar__5O8YW",_="ContactInfoBox_contactName__+svwH",f="ContactInfoBox_statusIndicatorOnline__n0KjE",v="ContactInfoBox_statusIndicatorOffline__EYWbA",m=n(3329);function h(e){var t=e.id,n=(0,l.W1)(t).data;return n?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("img",{src:null===n||void 0===n?void 0:n.avatar,alt:"".concat(null===n||void 0===n?void 0:n.username," avatar"),className:d}),(0,m.jsx)("div",{className:null!==n&&void 0!==n&&n.isOnline?f:v})]}),(0,m.jsx)("p",{className:_,children:null===n||void 0===n?void 0:n.username})]}):null}var g=function(e){return e.selectedContactId},x=n(9297);function p(e){var t=e.id,n=(0,r.v9)(g),s=(0,r.I0)();var a=JSON.stringify(t)===JSON.stringify(n);return(0,m.jsx)("li",{className:i,children:(0,m.jsx)("button",{type:"button",onClick:function(){return s((0,x.f)(t))},className:a?c:o,children:(0,m.jsx)(h,{id:t})})})}var j=function(e){return e.filter},M="ContactsList_contactsList__ZQI1L",C=n(1038),y="FilterInput_inputLabel__C+sAF",I="FilterInput_filterInput__LNZay";function w(){var e=(0,l.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,t=(0,r.v9)(j),n=(0,r.I0)();return(0,m.jsx)(m.Fragment,{children:(null===e||void 0===e?void 0:e.length)>0?(0,m.jsx)("label",{className:y,children:(0,m.jsx)("input",{className:I,type:"text",name:"filter",value:t,onChange:function(e){var t=e.target.value;n((0,C.a)(t))},placeholder:"Search or start new chat"})}):null})}var N=n(4240);function S(){var e=(0,l.wY)().data,t=(0,r.v9)(j),n=function(){var n=null===t||void 0===t?void 0:t.toLowerCase();return t?null===e||void 0===e?void 0:e.filter((function(e){return e.username.toLowerCase().includes(n)})):e}();return(0,m.jsxs)(N.Z,{title:"Chats",isHidden:!1,width:"300px",flexShrink:0,children:[(0,m.jsx)(w,{}),(0,m.jsx)("ul",{className:M,children:n?null===n||void 0===n?void 0:n.map((function(e){return(0,m.jsx)(p,{id:e.id},e.id)})):null})]})}var Z=n(2982),O=n(885),H=n(1413),F=n(5861),L=n(7757),b=n.n(L),k=n(4358),B=n(5377),D="FormSendMessage_formWrapper__pP-FY",R="FormSendMessage_form__qHlW2",T="FormSendMessage_input__hlTCO",E="FormSendMessage_formBtn__R-YUO",W="FormSendMessage_btnIcon__qVR2i";function Y(e){var t=e.id,n=e.setMessageList,s=e.data,r=(0,B.Z)(""),i=r.state,c=r.setState,o=r.handleChange,u=(0,l.Ar)(),d=(0,O.Z)(u,1)[0],_=(0,a.useCallback)(function(){var e=(0,F.Z)(b().mark((function e(a,r){var i,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={message:a,date:(new Date).toISOString(),isSendedByMe:r},c=[].concat((0,Z.Z)(null===s||void 0===s?void 0:s.messages),[i]).sort((function(e,t){return new Date(e.date)-new Date(t.date)})),e.next=4,n(c);case 4:return e.next=6,d({id:t,contact:(0,H.Z)((0,H.Z)({},s),{},{messages:c})});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[d,s,t,n]),f=function(){var e=(0,F.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),_(i,!0),c("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{className:D,children:(0,m.jsxs)("form",{className:R,onSubmit:f,children:[(0,m.jsx)("input",{type:"text",name:"message",className:T,placeholder:"Type your message...",value:i,onChange:o}),(0,m.jsx)("button",{type:"submit",className:E,children:(0,m.jsx)(k.b_K,{className:W})})]})})}var A=n(8977),P="MessageHistory_messageList__a9+dD",J="MessageHistory_myMessage__HM7bD MessageHistory_message__5aRvm",q="MessageHistory_interlocutorMessage__7+L5R MessageHistory_message__5aRvm",K="MessageHistory_myMessageText__RnlJ9 MessageHistory_messageText__TJe4M",V="MessageHistory_interlocutorMessageText__7j-Pq MessageHistory_messageText__TJe4M",Q="MessageHistory_messageDate__lZ3A9";function U(e){var t=e.id,n=e.messageListRef,s=(0,a.useState)(null===n||void 0===n?void 0:n.current),r=(0,O.Z)(s,2),i=r[0],c=r[1],o=(0,l.W1)(t,{refetchOnReconnect:!0,refetchOnMountOrArgChange:!0}).data;return(0,a.useEffect)((function(){var e;if(null!==(null===(e=document)||void 0===e?void 0:e.getElementById("chat"))){var t;(t=document.getElementById("chat")).scroll({top:t.scrollHeight,behavior:"smooth"})}}),[t,i]),(0,a.useEffect)((function(){if(o&&0!==(null===o||void 0===o?void 0:o.length)){var e=(0,Z.Z)(null===o||void 0===o?void 0:o.messages).sort((function(e,t){return new Date(e.date)-new Date(t.date)}));c(e)}}),[o,c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("ul",{className:P,id:"chat",children:i?null===i||void 0===i?void 0:i.map((function(e,t){var n=e.message,s=e.isSendedByMe,a=e.date,r=(0,A.Z)(new Date(a),"PP, p");return(0,m.jsxs)("li",{className:s?J:q,children:[(0,m.jsx)("p",{className:s?K:V,children:n}),(0,m.jsx)("span",{className:Q,children:r})]},t)})):null}),(0,m.jsx)(Y,{id:t,setMessageList:c,data:o,messageList:i})]})}function z(e){var t=e.id,n=(0,l.W1)(t).data;(0,a.useEffect)((function(){var e;if(n&&0!==(null===n||void 0===n||null===(e=n.messages)||void 0===e?void 0:e.length)){var t,a=(t=null===n||void 0===n?void 0:n.messages,(0,Z.Z)(t).sort((function(e,t){return new Date(e.date)-new Date(t.date)})));s.current=a}}),[n]);var s=(0,a.useRef)(null);return(0,m.jsxs)(N.Z,{title:"Chat",isHidden:!0,width:"100%",flexShrink:1,children:[(0,m.jsx)(h,{id:t}),(0,m.jsx)(U,{id:t,messageListRef:s.current})]})}function G(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.selectedContactId})),n=(0,l.wY)("",{refetchOnReconnect:!0,refetchOnMountOrArgChange:!0}),i=n.data,c=n.isFetching;return(0,a.useEffect)((function(){i&&(c||null!==t||e((0,x.f)(i[0].id)))}),[i,e,c,t]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(S,{}),(0,m.jsx)(z,{id:t})]})})}}}]);
//# sourceMappingURL=chat.e2d79fe6.chunk.js.map