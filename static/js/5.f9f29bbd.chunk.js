(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[5],{56:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return d}));var s=a(21),r=a.n(s),c=a(30),i=a(24),n=(a(40),a(16)),l=i.a.firestore(),o={signIn:function(){var e=Object(c.a)(r.a.mark((function e(t,a,s,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i.a.auth().signInWithEmailAndPassword(a,s).then((function(e){var t=e.user;t&&t.emailVerified?c(!0):alert("\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d")})).catch((function(e){alert("\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043b\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d")}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,s,r){return e.apply(this,arguments)}}(),register:function(){var e=Object(c.a)(r.a.mark((function e(t,a,s,c,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i.a.auth().createUserWithEmailAndPassword(a.trim(),s.trim()).then((function(e){var t=e.user;t.updateProfile({displayName:c}),l.collection("users").doc(t.uid).set({username:c,img:null,description:"",social:{github:null,instagram:null,telegram:null,vk:null,youtube:null},userId:t.uid}),t.sendEmailVerification().then((function(){n(!0)})).catch((function(e){alert(e.message)}))})).catch((function(e){throw alert(e.message),e}));case 3:case"end":return e.stop()}}),e)})));return function(t,a,s,r,c){return e.apply(this,arguments)}}(),sendEmail:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.a.auth().currentUser,e.next=3,a.sendEmailVerification().then((function(){t(!0)})).catch((function(e){alert(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u={sendMessage:function(){var e=Object(c.a)(r.a.mark((function e(t,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,l.collection("messages").add({message:t,id:s,date:a,key:new Date});case 3:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}()},d={updateProfile:function(){var e=Object(c.a)(r.a.mark((function e(t,a,s,c){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.a.auth().currentUser,e.next=3,l.collection("users").doc(o.uid).update({username:a,img:t,description:s,social:c}).then((function(){Object(n.b)(o.uid,a,t,s,!0)}));case 3:return e.next=5,o.updateProfile({displayName:a,photoURL:t,description:s}).then((function(){Object(n.b)(o.uid,a,t,s,!0)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,s,r){return e.apply(this,arguments)}}(),getUserProfile:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.collection("users").doc(t).get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},59:function(e,t,a){"use strict";var s=a(29),r=a(18),c=a(1),i=a.p+"static/media/logo.f869ddb0.svg",n=a.p+"static/media/arrow.af89e6b9.svg",l=a(37),o=a(56),u=a(20),d=a(57),j=a.n(d),h=a(2);j.a.setAppElement("#root");t.a=Object(r.b)((function(e){return{username:e.currentUser.username,userImg:e.currentUser.userImg,users:e.users}}))((function(e){var t=e.username,a=e.userImg,r=e.users,d=Object(c.useState)(!0),p=Object(s.a)(d,2),m=p[0],C=p[1],b=Object(c.useState)(!1),f=Object(s.a)(b,2),g=f[0],x=f[1];return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:i,alt:"ReactChat",className:"header-logo"}),Object(h.jsx)("div",{className:"header-info",onClick:function(){return C(!m)},children:Object(h.jsxs)("div",{className:"header-toProfile",children:[Object(h.jsx)("img",{src:n,alt:"arrow",className:"header-arrow ".concat(m?"":"rotate")}),Object(h.jsx)("span",{className:"header-username",children:t}),a?Object(h.jsx)("div",{className:"header-img",style:{backgroundImage:"url(".concat(a,")")}}):Object(h.jsx)("div",{className:"header-img",style:{backgroundImage:"url(".concat(l.a,")")}})]})}),Object(h.jsxs)("div",{className:"header-menu ".concat(m?"hidden":""),children:[Object(h.jsxs)(u.b,{to:"/profile",className:"header-item",children:[Object(h.jsxs)("svg",{className:"header-item-img",width:"16",height:"16",viewBox:"0 0 16 16",fill:"#333",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M7.895 7.97031C9.96267 7.97031 11.6386 6.29423 11.6386 4.22667C11.6386 2.15921 9.96267 0.483032 7.895 0.483032C5.82754 0.483032 4.15137 2.15921 4.15137 4.22667C4.15296 6.29354 5.82814 7.96872 7.895 7.97031ZM7.895 1.11753C9.6122 1.11753 11.0041 2.50948 11.0041 4.22667C11.0041 5.94386 9.6122 7.33581 7.895 7.33581C6.17801 7.33581 4.78587 5.94386 4.78587 4.22667C4.78875 2.51077 6.1791 1.12031 7.895 1.11753Z"}),Object(h.jsx)("path",{d:"M7.89497 8.90625C6.26755 8.90625 4.75415 9.53757 3.63113 10.6861C2.49213 11.8504 1.86707 13.4398 1.86707 15.1659C1.86756 15.3408 2.00938 15.4826 2.18437 15.4831H13.6057C13.7808 15.4826 13.9224 15.3408 13.9229 15.1659C13.9229 13.4431 13.2979 11.8504 12.159 10.6893C11.0359 9.54075 9.52258 8.90625 7.89497 8.90625ZM2.50802 14.8486C2.57784 13.4146 3.13299 12.1043 4.08161 11.1334C5.08416 10.1086 6.43887 9.54403 7.89189 9.54403C9.34492 9.54403 10.6996 10.1086 11.7021 11.1334C12.6539 12.1043 13.2059 13.4146 13.2758 14.8486H2.50802Z"})]}),Object(h.jsx)("span",{className:"header-item-text",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})]}),Object(h.jsxs)("div",{className:"header-item",children:[Object(h.jsx)("svg",{className:"header-item-img",width:"17",height:"17",viewBox:"0 0 17 17",fill:"#333",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M14.7026 7.85247C15.2004 7.50265 15.5301 6.92073 15.5301 6.26482C15.5301 5.19181 14.6622 4.32398 13.5892 4.32398C12.5162 4.32398 11.6484 5.19181 11.6484 6.26482C11.6484 6.92073 11.9747 7.50265 12.4759 7.85247C12.0487 8.00047 11.6585 8.2292 11.3288 8.52521C10.8748 8.13838 10.3399 7.84238 9.75465 7.66747C10.4644 7.23692 10.942 6.45318 10.942 5.56181C10.942 4.20289 9.8421 3.10297 8.48318 3.10297C7.12426 3.10297 6.02434 4.20625 6.02434 5.56181C6.02434 6.45318 6.49861 7.23692 7.21171 7.66747C6.63316 7.84238 6.10507 8.13502 5.65433 8.51512C5.32469 8.22584 4.94123 8.00047 4.52078 7.85584C5.0186 7.50601 5.34824 6.9241 5.34824 6.26818C5.34824 5.19517 4.48041 4.32734 3.4074 4.32734C2.33439 4.32734 1.46656 5.19517 1.46656 6.26818C1.46656 6.9241 1.79284 7.50601 2.29402 7.85584C0.958646 8.31666 0 9.58476 0 11.0749V11.2969C0 11.3036 0.00672734 11.3103 0.0134547 11.3103H4.12723C4.10368 11.4953 4.09023 11.6871 4.09023 11.8788V12.1075C4.09023 13.0964 4.89078 13.897 5.8797 13.897H11.0934C12.0823 13.897 12.8829 13.0964 12.8829 12.1075V11.8788C12.8829 11.6871 12.8694 11.4953 12.8459 11.3103H16.9865C16.9933 11.3103 17 11.3036 17 11.2969V11.0749C16.9933 9.5814 16.038 8.31329 14.7026 7.85247ZM12.1866 6.26145C12.1866 5.48781 12.8156 4.8588 13.5892 4.8588C14.3629 4.8588 14.9919 5.48781 14.9919 6.26145C14.9919 7.02501 14.3763 7.64729 13.6161 7.66411C13.6061 7.66411 13.5993 7.66411 13.5892 7.66411C13.5791 7.66411 13.5724 7.66411 13.5623 7.66411C12.7988 7.65065 12.1866 7.02837 12.1866 6.26145ZM6.5558 5.56181C6.5558 4.50225 7.4169 3.64115 8.47645 3.64115C9.53601 3.64115 10.3971 4.50225 10.3971 5.56181C10.3971 6.58437 9.59319 7.42192 8.58746 7.4791C8.55046 7.4791 8.51345 7.4791 8.47645 7.4791C8.43945 7.4791 8.40245 7.4791 8.36545 7.4791C7.35971 7.42192 6.5558 6.58437 6.5558 5.56181ZM1.99466 6.26145C1.99466 5.48781 2.62366 4.8588 3.39731 4.8588C4.17095 4.8588 4.79996 5.48781 4.79996 6.26145C4.79996 7.02501 4.18441 7.64729 3.42422 7.66411C3.41413 7.66411 3.4074 7.66411 3.39731 7.66411C3.38722 7.66411 3.38049 7.66411 3.3704 7.66411C2.61021 7.65065 1.99466 7.02837 1.99466 6.26145ZM4.22141 10.7688H0.544915C0.69628 9.33585 1.9072 8.21239 3.37713 8.20229C3.38385 8.20229 3.39058 8.20229 3.39731 8.20229C3.40404 8.20229 3.41076 8.20229 3.41749 8.20229C4.11713 8.20566 4.75623 8.46466 5.25069 8.88512C4.76632 9.40985 4.40641 10.0557 4.22141 10.7688ZM12.3379 12.1075C12.3379 12.7971 11.7762 13.3588 11.0867 13.3588H5.87297C5.18342 13.3588 4.62169 12.7971 4.62169 12.1075V11.8788C4.62169 9.78995 6.29007 8.0812 8.36545 8.02066C8.40245 8.02402 8.44282 8.02402 8.47982 8.02402C8.51682 8.02402 8.55718 8.02402 8.59418 8.02066C10.6696 8.0812 12.3379 9.78995 12.3379 11.8788V12.1075ZM12.7382 10.7688C12.5532 10.059 12.2 9.42331 11.719 8.89857C12.2169 8.46802 12.8627 8.20902 13.5691 8.20229C13.5758 8.20229 13.5825 8.20229 13.5892 8.20229C13.596 8.20229 13.6027 8.20229 13.6094 8.20229C15.0793 8.21239 16.2903 9.33585 16.4416 10.7688H12.7382Z"})}),Object(h.jsx)("span",{onClick:function(){return x(!0)},className:"header-item-text",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})]}),Object(h.jsxs)("div",{className:"header-item",onClick:function(){return o.a.logout()},children:[Object(h.jsxs)("svg",{className:"header-item-img",width:"16",height:"16",viewBox:"0 0 16 16",fill:"#333",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M10.3333 12C10.1491 12 10 12.1491 10 12.3333V14.6667C10 15.0342 9.70084 15.3333 9.33334 15.3333H1.33334C0.965844 15.3333 0.666687 15.0342 0.666687 14.6667V1.33334C0.666687 0.965844 0.965844 0.666687 1.33334 0.666687H9.33334C9.70084 0.666687 10 0.965844 10 1.33334V3.66669C10 3.85094 10.1491 4.00003 10.3333 4.00003C10.5176 4.00003 10.6667 3.85094 10.6667 3.66669V1.33334C10.6667 0.597969 10.0687 0 9.33334 0H1.33334C0.597969 0 0 0.597969 0 1.33334V14.6667C0 15.402 0.597969 16 1.33334 16H9.33334C10.0687 16 10.6667 15.402 10.6667 14.6667V12.3333C10.6667 12.1491 10.5176 12 10.3333 12Z"}),Object(h.jsx)("path",{d:"M15.8919 7.7542L11.8919 4.08754C11.7555 3.9632 11.5456 3.97263 11.4209 4.10804C11.2966 4.24379 11.3057 4.45473 11.4414 4.57907L14.8098 7.66663H4.33334C4.14909 7.66663 4 7.81573 4 7.99998C4 8.18423 4.14909 8.33332 4.33334 8.33332H14.8099L11.4414 11.4209C11.3057 11.5452 11.2966 11.7562 11.4209 11.8919C11.4867 11.9635 11.5765 12 11.6667 12C11.7471 12 11.8278 11.971 11.892 11.9124L15.892 8.24576C15.9609 8.1826 16 8.09342 16 7.99998C16 7.90654 15.9609 7.81735 15.8919 7.7542Z"})]}),Object(h.jsx)("span",{className:"header-item-text",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]}),Object(h.jsxs)(j.a,{isOpen:g,onRequestClose:function(){x(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(51, 51, 51, 0.6)"}},children:[Object(h.jsx)("h1",{className:"modal-title",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438:"}),Object(h.jsx)("div",{className:"modal-users",children:r.map((function(e){return Object(h.jsxs)(u.b,{to:"/profile/"+e.userId,className:"modal-user",children:[e.img?Object(h.jsx)("div",{className:"modal-user-img",style:{backgroundImage:"url(".concat(e.img,")")}}):Object(h.jsx)("div",{className:"modal-user-img",style:{backgroundImage:"url(".concat(l.a,")")}}),Object(h.jsx)("span",{className:"modal-user-name",children:e.username})]},e.userId)}))})]})]})}))},79:function(e,t,a){"use strict";a.r(t);var s=a(21),r=a.n(s),c=a(30),i=a(60),n=a(61),l=a(66),o=a(65),u=a(1),d=a(56),j=a(38),h=a(18),p=a(6),m=a(29),C=a(20),b=a(2),f=function(e){var t=e.social;return Object(b.jsxs)("div",{className:"profile-social",children:[t.telegram&&Object(b.jsx)("a",{href:"https://t.me/"+t.telegram,target:"_blank",rel:"noreferrer",className:"profile-social-item",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"#333333",children:[Object(b.jsx)("g",{clipPath:"url(#clip0)",children:Object(b.jsx)("path",{d:"M11.2925 27.0691L17.2507 41.9938L25.0085 34.2205L38.2775 44.7884L47.9063 3.33472L-0.09375 22.6362L11.2925 27.0691ZM7.54871 22.594L30.4281 13.3937L12.2336 24.418L7.54871 22.594ZM34.5051 14.2105L19.3195 28.1302L17.4928 35.0274L14.1145 26.5653L34.5051 14.2105ZM20.4565 34.8035L21.3768 31.3284L22.7966 32.4589L20.4565 34.8035ZM36.5493 39.8191L22.7318 28.8145L43.5352 9.74531L36.5493 39.8191Z"})}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"48",height:"48",fill:"white"})})})]})}),t.github&&Object(b.jsx)("a",{href:"https://github.com/"+t.github,target:"_blank",rel:"noreferrer",className:"profile-social-item",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"#333333",children:Object(b.jsx)("path",{d:"M24 0C10.8094 0 0 10.9032 0 24.0938C0 37.2078 10.7109 48 24 48C37.2726 48 48 37.2239 48 24.0938C48 10.9032 37.1906 0 24 0ZM28.2188 44.7656C26.8689 45.0469 25.4344 45.1875 24 45.1875C22.5656 45.1875 21.1311 45.0469 19.7812 44.7656V38.1844C19.7812 36.6094 20.2031 36.0469 20.7656 35.2874C21.052 34.96 21.2249 34.6663 22.5092 32.7283L20.3438 32.3906C14.7748 31.5751 12.5812 28.678 11.7092 26.428C10.5842 23.4188 11.1749 19.6498 13.2001 17.2595C13.5095 16.8937 13.7626 16.2748 13.5377 15.6281C13.1155 14.3342 13.1719 12.2812 13.4531 11.4935C14.9443 11.7067 16.4777 12.7749 17.7565 13.5469C18.3457 13.8907 18.6548 13.7999 18.9375 13.8281C19.9651 13.6143 21.568 13.0968 24.0282 13.0968C25.5469 13.0968 27.1501 13.3217 28.7252 13.7717C29.0068 13.7651 29.4595 14.0046 30.2439 13.5469C31.5806 12.7324 33.0619 11.7008 34.5469 11.4935C34.8281 12.2812 34.8845 14.3342 34.4626 15.6281C34.2374 16.2748 34.4905 16.8937 34.8003 17.2595C36.8251 19.6501 37.4158 23.4188 36.2908 26.428C35.4188 28.678 33.2252 31.5751 27.6562 32.3906L25.4908 32.7283C26.8184 34.7314 26.9583 34.9717 27.2347 35.2874C27.7969 36.0469 28.2188 36.6094 28.2188 38.1844V44.7656ZM31.0312 43.9501V38.1844C31.0312 36.5812 30.6936 35.5126 30.2435 34.7249C34.5187 33.572 37.5564 31.0404 38.9062 27.4124C40.3407 23.5876 39.694 19.0312 37.303 15.8811C37.7252 13.9969 37.7252 10.9874 36.7126 9.58118C36.2626 8.96265 35.6437 8.625 34.8563 8.625C34.8281 8.625 34.8281 8.625 34.8281 8.625C32.6473 8.74292 30.9309 9.84119 29.0907 10.9592C27.4032 10.5092 25.6875 10.2843 23.9718 10.2843C22.2283 10.2843 20.4844 10.5374 18.9379 10.9592C17.0006 9.79102 15.3007 8.73999 13.0594 8.625C12.3563 8.625 11.7374 8.96265 11.2874 9.58118C10.2751 10.9874 10.2751 13.9969 10.697 15.8811C8.30603 19.0312 7.6593 23.6155 9.09375 27.4124C10.4436 31.0404 13.4813 33.572 17.7565 34.7249C17.4075 35.3353 17.1313 36.123 17.0226 37.1891C16.1591 37.4868 15.4102 37.5839 14.7136 37.3792C13.979 37.162 13.4066 36.6716 12.9093 35.8352C11.7924 33.9587 9.88989 32.4269 7.72375 32.6261L7.97095 35.4276C8.974 35.3357 9.97229 36.397 10.4908 37.2719C11.3463 38.7125 12.4988 39.6573 13.9171 40.0763C14.97 40.3865 15.9324 40.3792 16.9688 40.158V43.9501C8.7843 41.0812 2.8125 33.2626 2.8125 24.0938C2.8125 12.4501 12.3563 2.8125 24 2.8125C35.6437 2.8125 45.1875 12.4501 45.1875 24.0938C45.1875 33.2626 39.2157 41.0812 31.0312 43.9501Z"})})}),t.youtube&&Object(b.jsx)("a",{href:"https://youtube.com/channel/"+t.youtube,target:"_blank",rel:"noreferrer",className:"profile-social-item",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"#333333",children:[Object(b.jsx)("path",{d:"M7.03125 42.2812H40.9688C44.8458 42.2812 48 39.1271 48 35.25V12.75C48 8.87292 44.8458 5.71875 40.9688 5.71875H7.03125C3.15417 5.71875 0 8.87292 0 12.75V35.25C0 39.1271 3.15417 42.2812 7.03125 42.2812ZM2.8125 12.75C2.8125 10.4238 4.70508 8.53125 7.03125 8.53125H40.9688C43.2949 8.53125 45.1875 10.4238 45.1875 12.75V35.25C45.1875 37.5762 43.2949 39.4688 40.9688 39.4688H7.03125C4.70508 39.4688 2.8125 37.5762 2.8125 35.25V12.75Z"}),Object(b.jsx)("path",{d:"M16.9688 14.5789V33.6943L33.8906 23.9799L16.9688 14.5789ZM19.7812 19.3586L28.1719 24.0201L19.7812 28.8369V19.3586Z"})]})}),t.instagram&&Object(b.jsx)("a",{href:"https://instagram.com/"+t.instagram,target:"_blank",rel:"noreferrer",className:"profile-social-item",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"#333333",children:[Object(b.jsx)("path",{d:"M7.03125 48H40.9688C44.8458 48 48 44.8458 48 40.9688V7.03125C48 3.15417 44.8458 0 40.9688 0H7.03125C3.15417 0 0 3.15417 0 7.03125V40.9688C0 44.8458 3.15417 48 7.03125 48ZM2.8125 7.03125C2.8125 4.70508 4.70508 2.8125 7.03125 2.8125H40.9688C43.2949 2.8125 45.1875 4.70508 45.1875 7.03125V40.9688C45.1875 43.2949 43.2949 45.1875 40.9688 45.1875H7.03125C4.70508 45.1875 2.8125 43.2949 2.8125 40.9688V7.03125Z"}),Object(b.jsx)("path",{d:"M24 36.6562C30.9785 36.6562 36.6562 30.9785 36.6562 24C36.6562 17.0215 30.9785 11.3438 24 11.3438C17.0215 11.3438 11.3438 17.0215 11.3438 24C11.3438 30.9785 17.0215 36.6562 24 36.6562ZM24 14.1562C29.428 14.1562 33.8438 18.572 33.8438 24C33.8438 29.428 29.428 33.8438 24 33.8438C18.572 33.8438 14.1562 29.428 14.1562 24C14.1562 18.572 18.572 14.1562 24 14.1562Z"}),Object(b.jsx)("path",{d:"M38.0625 14.1562C40.3887 14.1562 42.2812 12.2637 42.2812 9.9375C42.2812 7.61133 40.3887 5.71875 38.0625 5.71875C35.7363 5.71875 33.8438 7.61133 33.8438 9.9375C33.8438 12.2637 35.7363 14.1562 38.0625 14.1562ZM38.0625 8.53125C38.8378 8.53125 39.4688 9.16223 39.4688 9.9375C39.4688 10.7128 38.8378 11.3438 38.0625 11.3438C37.2872 11.3438 36.6562 10.7128 36.6562 9.9375C36.6562 9.16223 37.2872 8.53125 38.0625 8.53125Z"})]})}),t.vk&&Object(b.jsx)("a",{href:"https://vk.com/"+t.vk,target:"_blank",rel:"noreferrer",className:"profile-social-item",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"#333333",children:[Object(b.jsx)("g",{clipPath:"url(#clip0)",children:Object(b.jsx)("path",{d:"M42.7255 28.7532L42.6995 28.729C42.2898 28.3499 41.0344 27.1259 40.611 26.5909C40.1141 25.9234 40.2287 25.4861 40.6012 24.8307C41.0717 24.0026 42.0147 22.7323 43.0127 21.3871C46.209 17.0801 48.2726 14.0985 47.8477 11.9806L47.6189 10.8493L35.8148 10.8545C35.7734 10.966 35.1574 13.6772 32.558 18.2939C30.6732 21.6414 29.4368 22.693 29.0014 22.8787L28.934 22.8581C28.7923 22.6827 28.5447 22.2094 28.4429 20.9894C28.3367 19.7114 28.4308 18.164 28.522 16.6677C28.6286 14.913 28.7205 13.3976 28.5004 12.3134L28.1419 10.547C27.7087 10.4776 26.1226 9.86449 21.7035 9.81789C17.8777 9.77863 16.7538 10.3323 16.2019 10.8203L14.3764 12.4345L16.6839 13.2123C17.562 13.5084 17.8535 13.8501 18.0927 15.5434C18.2487 16.6471 18.3304 18.502 18.1619 20.1579C17.9198 22.5323 17.3394 22.9741 17.3094 22.9976C17.2094 22.9634 16.3616 22.5917 14.8898 19.474C13.8688 17.3117 12.9738 14.7538 12.3197 12.8861C11.5712 10.7473 11.706 11.2027 11.3262 10.1922L-0.09375 10.1918L0.645265 12.1072C3.7262 20.0999 6.55299 26.3417 10.336 30.8249C14.5155 35.778 19.7099 38.3715 26.7067 38.3715H28.113V36.9625C28.113 35.6452 28.2217 34.6967 28.455 33.9775C28.5975 33.5394 28.7868 33.1772 28.9857 32.7975C29.2808 32.2383 29.5694 31.9987 29.7269 31.9631C29.8697 31.9304 30.1209 32.0354 30.3992 32.2434C31.1983 32.8404 31.8326 33.6249 32.5042 34.4556C33.4732 35.6544 34.4752 36.8935 36.0649 37.7048C36.9335 38.148 38.5258 38.3718 39.4022 38.3718C39.634 38.3718 47.8961 38.3715 47.9063 38.3715L47.8459 36.9045C47.7558 34.711 46.0328 31.9682 42.7255 28.7532ZM39.4567 35.5535H39.434C38.8298 35.5634 37.6766 35.3649 37.3411 35.1939C36.2842 34.6545 35.5456 33.7405 34.6898 32.6822C33.9387 31.7528 33.1619 30.7918 32.0805 29.9842C31.206 29.3307 30.4117 29.1396 29.7811 29.1396C29.5291 29.1396 29.3028 29.17 29.1087 29.2141C28.3766 29.3792 27.3296 29.9068 26.4972 31.4842C26.2625 31.933 25.9963 32.4412 25.7806 33.1061C25.5546 33.8017 25.414 34.5749 25.347 35.5153C20.0743 35.2152 15.9599 33.1251 12.4838 29.0056C9.25197 25.1753 6.70936 19.8178 4.01661 13.0087C4.21143 13.0087 9.0934 13.0094 9.38161 13.0094C9.46987 13.2578 9.56508 13.5301 9.66616 13.8185C10.3711 15.8333 11.3368 18.5922 12.4746 20.945C14.1039 24.3141 15.5918 25.8167 17.2987 25.8167C18.1509 25.8167 18.9152 25.4549 19.5088 24.7698C20.3551 23.7934 20.8466 22.1819 21.0114 19.8427C21.1414 17.9982 21.0205 16.161 20.8777 15.1486C20.7598 14.3157 20.5917 13.4413 20.1816 12.6579C21.9295 12.579 24.2699 12.7038 25.7527 12.917C25.8875 13.6523 25.7996 15.0976 25.7146 16.496C25.5092 19.8739 25.2972 23.3597 27.0817 24.9907C27.3956 25.2777 27.7284 25.4314 27.738 25.4376L28.6462 25.7169C28.9966 25.6086 31.0265 26.6404 34.8703 19.9194C36.1019 17.7659 37.2485 15.2844 37.8659 13.6637C39.2978 13.6607 44.1761 13.6662 44.7492 13.667C43.9373 15.4572 42.0133 18.0107 40.7557 19.7055C39.6593 21.1827 38.7126 22.4585 38.1571 23.436C37.1251 25.252 37.2987 26.8705 38.3735 28.2982L38.3903 28.3202C38.9902 29.0853 40.4715 30.5016 40.7788 30.7871C43.0046 32.9523 44.0772 34.5077 44.5877 35.5531H39.4567V35.5535Z"})}),Object(b.jsx)("defs",{children:Object(b.jsx)("clipPath",{id:"clip0",children:Object(b.jsx)("rect",{width:"48",height:"48",fill:"white"})})})]})})]})},g=a(59),x=a(37),O=a.p+"static/media/back.495936dd.svg",v=a.p+"static/media/edit.c33fe4d2.svg",w=a(15),N=a(57),k=a.n(N),L=a.p+"static/media/check.cf5fa806.svg",y=a.p+"static/media/edit-white.91e13f28.svg",_=function(e){var t=e.social,a=e.setSocial,s=Object(u.useState)(t.telegram||""),r=Object(m.a)(s,2),c=r[0],i=r[1],n=Object(u.useState)(t.github||""),l=Object(m.a)(n,2),o=l[0],d=l[1],j=Object(u.useState)(t.youtube||""),h=Object(m.a)(j,2),p=h[0],C=h[1],f=Object(u.useState)(t.vk||""),g=Object(m.a)(f,2),x=g[0],O=g[1],v=Object(u.useState)(t.instagram||""),N=Object(m.a)(v,2),k=N[0],L=N[1],y=function(e){var t=e,s=Object(w.a)({},t);for(var r in t)""===t[r]?s[r]=null:s[r]=t[r];a(s)};return Object(b.jsxs)("div",{className:"profile-social__edit",children:[Object(b.jsxs)("div",{className:"profile-social-item__edit",children:[Object(b.jsx)("h2",{className:"profile-social-title__edit",children:"Telegram:"}),Object(b.jsx)("span",{className:"profile-social-text__edit",children:"https://t.me/"}),Object(b.jsx)("input",{defaultValue:c,type:"text",onChange:function(e){i(e.currentTarget.value),y({telegram:e.currentTarget.value,github:o,youtube:p,vk:x,instagram:k})},className:"profile-social-input__edit"})]}),Object(b.jsxs)("div",{className:"profile-social-item__edit",children:[Object(b.jsx)("h2",{className:"profile-social-title__edit",children:"Github:"}),Object(b.jsx)("span",{className:"profile-social-text__edit",children:"https://github.com/"}),Object(b.jsx)("input",{defaultValue:o,type:"text",onChange:function(e){d(e.currentTarget.value),y({telegram:c,github:e.currentTarget.value,youtube:p,vk:x,instagram:k})},className:"profile-social-input__edit"})]}),Object(b.jsxs)("div",{className:"profile-social-item__edit",children:[Object(b.jsx)("h2",{className:"profile-social-title__edit",children:"Youtube:"}),Object(b.jsx)("span",{className:"profile-social-text__edit",children:"https://www.youtube.com/channel/"}),Object(b.jsx)("input",{defaultValue:p,type:"text",onChange:function(e){C(e.currentTarget.value),y({telegram:c,github:o,youtube:e.currentTarget.value,vk:x,instagram:k})},className:"profile-social-input__edit"})]}),Object(b.jsxs)("div",{className:"profile-social-item__edit",children:[Object(b.jsx)("h2",{className:"profile-social-title__edit",children:"Vk:"}),Object(b.jsx)("span",{className:"profile-social-text__edit",children:"https://vk.com/"}),Object(b.jsx)("input",{defaultValue:x,type:"text",onChange:function(e){O(e.currentTarget.value),y({telegram:c,github:o,youtube:p,vk:e.currentTarget.value,instagram:k})},className:"profile-social-input__edit"})]}),Object(b.jsxs)("div",{className:"profile-social-item__edit",children:[Object(b.jsx)("h2",{className:"profile-social-title__edit",children:"Instagram:"}),Object(b.jsx)("span",{className:"profile-social-text__edit",children:"https://instagram.com/"}),Object(b.jsx)("input",{defaultValue:k,type:"text",onChange:function(e){L(e.currentTarget.value),y({telegram:c,github:o,youtube:p,vk:x,instagram:e.currentTarget.value})},className:"profile-social-input__edit"})]})]})};k.a.setAppElement("#root");var V=function(e){var t=Object(u.useState)(e.username),a=Object(m.a)(t,2),s=a[0],i=a[1],n=Object(u.useState)(e.description),l=Object(m.a)(n,2),o=l[0],d=l[1],j=Object(u.useState)(e.img),h=Object(m.a)(j,2),p=h[0],C=h[1],f=Object(u.useState)(""),g=Object(m.a)(f,2),v=g[0],N=g[1],V=Object(u.useState)(!1),M=Object(m.a)(V,2),Z=M[0],I=M[1],H=Object(u.useState)(Object(w.a)({},e.social)),S=Object(m.a)(H,2),P=S[0],U=S[1],T=function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.updateProfile(v,C,p,s,o);case 3:N("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateProfile(v,C,p,s,o,P);case 2:e.setIsEdit(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"profile-actions",children:[Object(b.jsx)("img",{src:O,alt:"back",className:"profile-back",onClick:function(){return e.setIsEdit(!1)}}),Object(b.jsx)("img",{src:L,alt:"check",className:"profile-check",onClick:function(){return E()}})]}),Object(b.jsxs)("div",{className:"profile-info",children:[Object(b.jsxs)("div",{className:"profile-photo-block",children:[p?Object(b.jsx)("div",{alt:"userImg",className:"profile-photo",style:{backgroundImage:"url(".concat(p,")")}}):Object(b.jsx)("div",{alt:"userImg",className:"profile-photo",style:{backgroundImage:"url(".concat(x.a,")")}}),Object(b.jsx)("div",{className:"profile-photo-overlay",onClick:function(){return I(!0)},children:Object(b.jsx)("img",{src:y,alt:"edit"})})]}),Object(b.jsxs)("div",{className:"profile-info-block",children:[Object(b.jsx)("input",{onChange:function(e){return i(e.target.value)},className:"profile-username edit",value:s,maxLength:"15"}),Object(b.jsx)("textarea",{onChange:function(e){return d(e.target.value)},className:"profile-description edit",value:o,maxLength:"150",rows:"3"})]})]}),Object(b.jsx)(_,{social:e.social,setSocial:U}),Object(b.jsx)(k.a,{isOpen:Z,onRequestClose:function(){I(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(51, 51, 51, 0.6)"}},children:Object(b.jsxs)("form",{onSubmit:function(e){return T(e)},children:[Object(b.jsx)("h1",{className:"modal-title",children:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(b.jsx)("p",{className:"modal-description",children:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 URL-\u0441\u0441\u044b\u043b\u043a\u0443 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:"}),Object(b.jsx)("input",{onChange:function(e){return N(e.currentTarget.value)},placeholder:"https://example.[jpg/png]",type:"text",className:"modal-input",pattern:"https?:\\/\\/.*\\.(?:png|jpg)",value:v,title:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 .png \u0438 .jpg",required:!0}),Object(b.jsx)("button",{className:"modal-submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})]})},M=function(e){var t=Object(u.useState)(e.username),a=Object(m.a)(t,2),s=a[0],r=a[1],c=Object(u.useState)(e.description),i=Object(m.a)(c,2),n=i[0],l=i[1],o=Object(u.useState)(e.img),d=Object(m.a)(o,2),j=d[0],h=d[1],w=Object(u.useState)(!1),N=Object(m.a)(w,2),k=N[0],L=N[1];return Object(u.useEffect)((function(){r(e.username),h(e.img),l(e.description||"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 :(")}),[e]),Object(b.jsx)("div",{className:"profile",children:e.isFound?Object(b.jsxs)("div",{children:[Object(b.jsx)(g.a,{}),k?Object(b.jsx)(V,{username:s,setIsEdit:L,img:j,description:n,social:e.social,updateProfile:e.updateProfile}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"profile-actions",children:[Object(b.jsxs)(C.b,{to:"/chat",children:[" ",Object(b.jsx)("img",{src:O,alt:"back",className:"profile-back"})," "]}),e.isCurrent&&Object(b.jsx)("img",{src:v,alt:"edit",className:"profile-edit",onClick:function(){return L(!0)}})]}),Object(b.jsxs)("div",{className:"profile-info",children:[Object(b.jsx)("div",{className:"profile-photo-block",children:j?Object(b.jsx)("div",{alt:"userImg",className:"profile-photo",style:{backgroundImage:"url(".concat(j,")")}}):Object(b.jsx)("div",{alt:"userImg",className:"profile-photo",style:{backgroundImage:"url(".concat(x.a,")")}})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"profile-username",children:s}),Object(b.jsx)("p",{className:"profile-description",children:n})]})]}),Object(b.jsx)(f,{social:e.social})]})]}):Object(b.jsx)(p.a,{to:"/error"})})},Z=a(14),I=a(24),H=(a(40),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).refreshProfile=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=s.props.match.params.userId)){e.next=8;break}return e.next=4,d.c.getUserProfile(t).then((function(e){return e.data()}));case 4:(a=e.sent).userId&&s.setState({img:a.img,username:a.username,description:a.description,social:a.social,isLoading:!1,isCurrent:!1}),e.next=9;break;case 8:s.setState({img:s.props.img,username:s.props.username,description:s.props.description,social:s.props.social,isLoading:!1,isCurrent:!0});case 9:case"end":return e.stop()}}),e)}))),s.updateProfile=function(){var e=Object(c.a)(r.a.mark((function e(t,a,s,c,i,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&a(t),e.next=3,d.c.updateProfile(t||s,c,i,n);case 3:case"end":return e.stop()}}),e)})));return function(t,a,s,r,c,i){return e.apply(this,arguments)}}(),s.state={isFound:!0,img:s.props.img,username:s.props.username,description:s.props.description,social:s.props.social,isLoading:!0,isRedirect:!1,isCurrent:!1},s}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=I.a.auth().currentUser)||!t.emailVerified){e.next=7;break}return this.setState({isRedirect:!1}),e.next=5,this.refreshProfile();case 5:e.next=8;break;case 7:this.setState({isRedirect:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.match.params.userId===t.match.params.userId&&this.state.username===a.username&&this.props===t){e.next=3;break}return e.next=3,this.refreshProfile();case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isRedirect?Object(b.jsx)(p.a,{to:"/login"}):Object(b.jsx)("div",{children:this.state.isLoading?Object(b.jsx)(Z.a,{}):Object(b.jsx)(M,{img:this.state.img,username:this.state.username,updateProfile:this.updateProfile,isFound:this.state.isFound,isCurrent:this.state.isCurrent,description:this.state.description,social:this.state.social})})}}]),a}(u.Component));t.default=Object(j.a)(Object(h.b)((function(e){return{username:e.currentUser.username,img:e.currentUser.userImg,description:e.currentUser.description,social:e.currentUser.social}}),{}),p.g)(H)}}]);
//# sourceMappingURL=5.f9f29bbd.chunk.js.map