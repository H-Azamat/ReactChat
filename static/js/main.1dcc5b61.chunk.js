(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[1],{15:function(e,t,n){"use strict";var c=n.p+"static/media/loading.ad992768.gif",r=n(4);t.a=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsx)("img",{src:c,alt:"loading...",className:"loading-gif"})})}},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return o}));var c=n(31),r=n(14),a=n(34),s="SET_CURRENT_USER",i="UPDATE_MESSAGES",u="SET_USERS",j={messages:[],users:[],currentUser:{},isInitial:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{type:s,currentUser:{uid:e,username:t,userImg:n},isInitial:c}},l=function(e){return{type:i,messages:e}},o=function(e){return{type:u,users:e}},d=Object(a.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{currentUser:Object(r.a)({},t.currentUser),isInitial:t.isInitial});case i:return Object(r.a)(Object(r.a)({},e),{},{messages:Object(c.a)(t.messages)});case u:return Object(r.a)(Object(r.a)({},e),{},{users:Object(c.a)(t.users)});default:return e}}));window.store=d,t.a=d},32:function(e,t,n){"use strict";var c=n(28);n(49);c.a.initializeApp({apiKey:"AIzaSyDz6pSdf4LCf1YQn5x76haqeGwwPDTvP_U",authDomain:"reactchat-b8de4.firebaseapp.com",projectId:"reactchat-b8de4",storageBucket:"reactchat-b8de4.appspot.com",messagingSenderId:"318740535879",appId:"1:318740535879:web:7c66edf44f5ebf3e09ef62"}),t.a=c.a},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(23),a=n.n(r),s=n(20),i=n(25),u=n(6),j=n(21),b=n(32),l=(n(35),n(45),n(15)),o=n(4),d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,64))})),O=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,65))})),f=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,62))})),h=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,63))})),p=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,66))}));var x=Object(s.b)((function(e){return{isInitial:e.isInitial}}),{setCurrentUser:j.b})((function(e){var t=e.setCurrentUser,n=e.isInitial;return Object(c.useEffect)((function(){b.a.auth().onAuthStateChanged((function(e){e?t(e.uid,e.displayName,e.photoURL,!0):(t("","",null,!0),u.a)}))}),[]),Object(o.jsx)("div",{className:"App",children:n?Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{exact:!0,path:"/chat",render:function(){return Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsx)(d,{})})}}),Object(o.jsx)(u.b,{exact:!0,path:"/profile/:userId?",render:function(){return Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsx)(O,{})})}}),Object(o.jsx)(u.b,{path:"/login",render:function(){return Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsx)(f,{})})}}),Object(o.jsx)(u.b,{path:"/register",render:function(){return Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsx)(h,{})})}}),Object(o.jsx)(u.a,{exact:!0,from:"/",to:"/chat"}),Object(o.jsx)(u.b,{path:"*",render:function(){return Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(l.a,{}),children:Object(o.jsx)(p,{})})}})]})}):Object(o.jsx)(l.a,{})})}));a.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(s.a,{store:j.a,children:Object(o.jsx)(x,{})})}),document.getElementById("root"))}},[[48,2,3]]]);
//# sourceMappingURL=main.1dcc5b61.chunk.js.map