(this["webpackJsonpmatelialize-react-template"]=this["webpackJsonpmatelialize-react-template"]||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(37),c=n.n(s),i=(n(75),n(16)),o=(n(41),n(8)),l=n(40),u={apiKey:"AIzaSyBlNaMAPdMTG1vb4IU5BdrnVHKgrLiR98w",authDomain:"elevated-analog-323212.firebaseapp.com",projectId:"elevated-analog-323212",storageBucket:"elevated-analog-323212.appspot.com",messagingSenderId:"975357008314",appId:"1:975357008314:web:fd0d488ebc269063d4a583",measurementId:"G-B964EVJJFG"};l.a.initializeApp(u);var p=l.a,d=n(23),h=n.n(d),m=n(22),b=n.n(m),j=n(2),f=function(e){p.auth().signOut(),b.a.remove("YT_TOKEN"),h.a.fire("\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f"),e(!1)},g=function(e){return Object(j.jsx)("nav",{className:"light-blue lighten-1",role:"navigation",children:Object(j.jsxs)("div",{className:"nav-wrapper container",children:[Object(j.jsx)("a",{id:"logo-container",href:"#",className:"brand-logo",children:"save-youtube"}),Object(j.jsx)("ul",{className:"right hide-on-med-and-down",children:e.user?Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",onClick:function(){return f(e.setChannel)},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})}):null}),Object(j.jsx)("ul",{id:"nav-mobile",className:"sidenav",children:e.user?Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",onClick:function(){return f(e.setChannel)},children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})}):null}),Object(j.jsx)("a",{href:"#","data-target":"nav-mobile",className:"sidenav-trigger",children:Object(j.jsx)("i",{className:"material-icons",children:"menu"})})]})})},x=n(62),O=n(12),v=n.n(O),w=n(19),k=n(63),C=n(64),y=n(70),S=n(69),T=n(18),N=n.n(T),I=n(65),_=n(68),R=n.n(_),A=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).job=Object(w.a)(v.a.mark((function e(){var t,n,r,s,c,o,l,u,p,d,h;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getVideo(a.props.vKey);case 2:if(t=e.sent,a.setState({video:t}),void 0!==t){e.next=6;break}return e.abrupt("return");case 6:return console.log(t),e.next=9,a.getCommentThreads(t.id);case 9:return n=e.sent,r=Object(i.a)(n,1),(s=r[0]).sort((function(e,t){return t.snippet.totalReplyCount-e.snippet.totalReplyCount})),e.next=15,R.a.for(s.filter((function(e,t){return t<20&&e.snippet.totalReplyCount>0}))).process(function(){var e=Object(w.a)(v.a.mark((function e(t){var n,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getComments(t.id);case 2:return n=e.sent,r=Object(i.a)(n,1),s=r[0],e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 15:c=e.sent,o=c.results,c.errors,l=[].concat.apply([],o),u=[],p=Object(x.a)(l),e.prev=21,h=v.a.mark((function e(){var t,n,r,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.value,!a.props.spamLink.some((function(e){return-1!==t.snippet.textOriginal.indexOf(e)}))){e.next=5;break}return t.reason={type:"spam_link",matched:a.props.spamLink.find((function(e){return-1!==t.snippet.textOriginal.indexOf(e)}))},u.push(t),e.abrupt("return","continue");case 5:if(!a.props.spamRegex.some((function(e){return null!==t.snippet.textOriginal.match(new RegExp(e))}))){e.next=9;break}return t.reason={type:"spam_regex",matched:a.props.spamRegex.find((function(e){return null!==t.snippet.textOriginal.match(new RegExp(e))}))},u.push(t),e.abrupt("return","continue");case 9:if(n=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,null===t.snippet.textOriginal.match(n)){e.next=29;break}if(console.log(t.snippet.textOriginal.match(n)),console.log(t.snippet.textOriginal.match(n)[0].trim()),!(r=a.props.returnId(t.snippet.textOriginal.match(n)[0].trim()))){e.next=26;break}return e.next=17,a.getVideo(r);case 17:if(!(s=e.sent)||s.snippet.channelId===a.state.video.snippet.channelId){e.next=24;break}return console.log(s.snippet.channelId),console.log(a.state.video.snippet.channelId),t.reason={type:"unrelated_video",matched:"".concat(s.snippet.channelTitle,": ").concat(s.snippet.title)},u.push(t),e.abrupt("return","continue");case 24:e.next=29;break;case 26:return t.reason={type:"includes_link",matched:t.snippet.textOriginal.match(n)[0].trim()},u.push(t),e.abrupt("return","continue");case 29:if(!(t.snippet.textOriginal.length>=100&&t.snippet.likeCount<10)){e.next=33;break}return t.reason={type:"long_but_no_likes",matched:"\u9ad8\u8a55\u4fa1: ".concat(t.snippet.likeCount," \u5b57\u6570:").concat(t.snippet.textOriginal.length)},u.push(t),e.abrupt("return","continue");case 33:case"end":return e.stop()}}),e)})),p.s();case 24:if((d=p.n()).done){e.next=31;break}return e.delegateYield(h(),"t0",26);case 26:if("continue"!==e.t0){e.next=29;break}return e.abrupt("continue",29);case 29:e.next=24;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(21),p.e(e.t1);case 36:return e.prev=36,p.f(),e.finish(36);case 39:console.log(u),a.setState({spamComments:u.map((function(e){return e.selected=a.highSpam.includes(e.reason.type),e}))});case 41:case"end":return e.stop()}}),e,null,[[21,33,36,39]])}))),a.lowSpam=["long_but_no_likes","unrelated_video"],a.highSpam=["spam_link","span_regex"],a.flagJob=Object(w.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(t=b.a.get().YT_TOKEN)){e.next=7;break}return window.alert("\u901a\u5831\u306b\u7528\u3044\u308bYouTube\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\uff0e(\u73fe\u5728Google\u306b\u7533\u8acb\u4e2d\u3067\u3042\u308b\u305f\u3081\uff0c\u30ed\u30b0\u30a4\u30f3\u6642\u306b\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff0e)"),(n=new p.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/youtube.force-ssl"),p.auth().signInWithPopup(n).then((function(e){console.log("Logged in!");var t=e.credential.accessToken;e.user;b.a.set("YT_TOKEN",t,{secure:!0}),a.flagJob()})).catch((function(e){window.alert("\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f..."),console.error(e)})),e.abrupt("return");case 7:return console.log("Checking access token..."),e.prev=8,e.next=11,a.getOwnChannel(t);case 11:r=e.sent,e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(8),b.a.remove("YT_TOKEN"),a.flagJob(),e.abrupt("return");case 19:console.log(r),a.props.setChannel(r),h.a.fire({title:"\u30b3\u30e1\u30f3\u30c8\u3092\u901a\u5831",icon:"warning",html:'<p><img class="circle" src="'.concat(r.snippet.thumbnails.default.url,'" width="30px" /> ').concat(r.snippet.title,"\u3068\u3057\u3066").concat(a.state.spamComments.filter((function(e){return e.selected})).length,"\u4ef6\u306e\u30b3\u30e1\u30f3\u30c8\u3092\u901a\u5831\u3057\u307e\u3059\uff0e\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f</p>"),showCancelButton:!0,preConfirm:function(){return a.markAsSpam(a.state.spamComments.filter((function(e){return e.selected})).map((function(e){return e.id})),b.a.get("YT_TOKEN"))}}).then((function(e){e.isConfirmed&&(h.a.fire({title:"\u901a\u5831\u3057\u307e\u3057\u305f",html:"<p>\u3053\u308c\u3067\u307e\u305f\u4e00\u3064\u306e\u30b3\u30e1\u30f3\u30c8\u6b04\u306e\u6cbb\u5b89\u304c\u3042\u306a\u305f\u306b\u3088\u3063\u3066\u6551\u308f\u308c\u307e\u3057\u305f...\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01</p>",icon:"success"}),a.props.setVideoId(!1),a.props.setTmpVideoLink(""))})).catch((function(e){h.a.fire({title:"\u30a8\u30e9\u30fc",html:"<p>\u8a73\u7d30\u306f\u30ed\u30b0\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff0e</p>",icon:"error"})}));case 22:case"end":return e.stop()}}),e,null,[[8,14]])}))),a.markAsSpam=function(){var e=Object(w.a)(v.a.mark((function e(t,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("https://www.googleapis.com/youtube/v3/comments/markAsSpam",{id:t.join(",")},{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.sent,e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.getOwnChannel=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://www.googleapis.com/youtube/v3/channels",{params:{part:"snippet",mine:!0},headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data.items[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getVideo=function(){var e=Object(w.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://www.googleapis.com/youtube/v3/videos",{params:{part:"snippet",id:t,key:u.apiKey}});case 2:return n=e.sent,e.abrupt("return",n.data.items[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getCommentThreads=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a,r,s=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:100,a=s.length>2&&void 0!==s[2]?s[2]:void 0,e.next=4,N.a.get("https://www.googleapis.com/youtube/v3/commentThreads",{params:{part:"snippet",videoId:t,key:u.apiKey,nextPageToken:a,order:"relevance",maxResults:n}});case 4:return r=e.sent,e.abrupt("return",[r.data.items,r.nextPageToken]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getComments=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a,r,s=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:100,a=s.length>2&&void 0!==s[2]?s[2]:void 0,e.next=4,N.a.get("https://www.googleapis.com/youtube/v3/comments",{params:{part:"snippet",parentId:t,key:u.apiKey,nextPageToken:a,maxResults:n}});case 4:return r=e.sent,e.abrupt("return",[r.data.items,r.nextPageToken]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggleTargetComment=function(e,t){var n=a.state.spamComments;console.log(a.state.spamComments.find((function(e){return e.id===t})).selected),n.find((function(e){return e.id===t})).selected=e.currentTarget.checked,a.setState({spamComments:n})},a.checkAll=function(e,t){var n=a.state.spamComments,r=e.currentTarget.checked;console.log(r),t.forEach((function(e){n.filter((function(t){return t.reason.type===e})).forEach((function(e){e.selected=r}))})),a.setState({spamComments:n})},a.commentsToCards=function(e){return e.map((function(e){return Object(j.jsxs)(o.Col,{m:6,children:[Object(j.jsx)(o.Col,{s:2,children:Object(j.jsx)(o.Checkbox,{checked:a.state.spamComments.find((function(t){return t.id===e.id})).selected,onChange:function(t){return a.toggleTargetComment(t,e.id)},filledIn:!0})}),Object(j.jsx)(o.Col,{s:10,children:Object(j.jsxs)(o.Card,{actions:[Object(j.jsx)("button",{className:"activator orange-text btn-flat",children:"\u30b3\u30e1\u30f3\u30c8\u306e\u5185\u5bb9\u3092\u898b\u308b"},"1"),Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=".concat(a.props.vKey,"&lc=").concat(e.id),children:"\u30b3\u30e1\u30f3\u30c8\u306e\u30ea\u30f3\u30af"},"2")],className:"blue-grey darken-1 truncate",reveal:Object(j.jsx)("p",{children:e.snippet.textOriginal}),closeIcon:Object(j.jsx)(o.Icon,{children:"close"}),revealIcon:Object(j.jsx)(o.Icon,{children:"more_vert"}),textClassName:"white-text",title:e.snippet.authorDisplayName,children:[{spam_link:"\u5371\u967a\u306a\u30ea\u30f3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059",spam_regex:"\u30b9\u30d1\u30e0\u30d1\u30bf\u30fc\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059",long_but_no_likes:"\u6587\u306e\u9577\u3055\u3068\u9ad8\u8a55\u4fa1\u306e\u6570\u3088\u308a\uff0c\u30b9\u30d1\u30e0\u306e\u53ef\u80fd\u6027",unrelated_video:"\u95a2\u4fc2\u306e\u306a\u3044\u52d5\u753b\u306e\u30ea\u30f3\u30af\u304c\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059",includes_link:"\u5916\u90e8\u30ea\u30f3\u30af\u304c\u8cbc\u308a\u4ed8\u3051\u3089\u308c\u3066\u3044\u307e\u3059"}[e.reason.type],":",Object(j.jsx)("br",{})," ",e.reason.matched]})})]})}))},a.state={spamComments:!1},a}return Object(C.a)(n,[{key:"componentDidMount",value:function(){this.job()}},{key:"render",value:function(){var e,t=this;return Object(j.jsx)("div",{children:this.state.video?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(I.a,{videoId:null===(e=this.state.video)||void 0===e?void 0:e.id,opts:{}})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:this.state.spamComments?Object(j.jsxs)("div",{children:[Object(j.jsx)(o.Navbar,{alignLinks:"right",brand:Object(j.jsxs)("span",{children:[Object(j.jsx)(o.Checkbox,{filledIn:!0,checked:this.state.spamComments.filter((function(e){return t.lowSpam.includes(e.reason.type)})).every((function(e){return e.selected})),onChange:function(e){return t.checkAll(e,t.lowSpam)}}),"\u30b9\u30d1\u30e0\u306e\u53ef\u80fd\u6027 (",this.state.spamComments.filter((function(e){return t.lowSpam.includes(e.reason.type)&&e.selected})).length,"/",this.state.spamComments.filter((function(e){return t.lowSpam.includes(e.reason.type)})).length,")"]}),className:"yellow darken-3",centerChildren:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(o.Row,{children:this.commentsToCards(this.state.spamComments.filter((function(e){return t.lowSpam.includes(e.reason.type)})))}),Object(j.jsx)(o.Navbar,{alignLinks:"right",brand:Object(j.jsxs)("span",{children:[Object(j.jsx)(o.Checkbox,{filledIn:!0,checked:this.state.spamComments.filter((function(e){return t.highSpam.includes(e.reason.type)})).every((function(e){return e.selected})),onChange:function(e){return t.checkAll(e,t.highSpam)}})," \u30b9\u30d1\u30e0\u30b3\u30e1\u30f3\u30c8(",this.state.spamComments.filter((function(e){return t.highSpam.includes(e.reason.type)&&e.selected})).length,"/",this.state.spamComments.filter((function(e){return t.highSpam.includes(e.reason.type)})).length,")"]}),centerChildren:!0}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(o.Row,{children:this.commentsToCards(this.state.spamComments.filter((function(e){return t.highSpam.includes(e.reason.type)})))}),Object(j.jsx)("div",{class:"center",children:Object(j.jsxs)("button",{onClick:this.flagJob,id:"flag-button",className:"btn-large waves-effect waves-light red",children:[Object(j.jsx)(o.Icon,{left:!0,children:"flag"})," \u4e00\u62ec\u901a\u5831"]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}):Object(j.jsxs)("div",{s:4,className:"center",children:["\u30b3\u30e1\u30f3\u30c8\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(o.Preloader,{active:!0,color:"blue",flashing:!1,size:"big"})]})})]}):Object(j.jsxs)(o.Col,{s:4,className:"center",children:["\u52d5\u753b\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059...",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(o.Preloader,{active:!0,color:"blue",flashing:!1,size:"big"})]})})}}]),n}(r.a.Component),L=n(39),B=n(32),K=function(e){var t,n,a,r,s,c,i;return console.log(e),Object(j.jsx)(o.Modal,(i={id:"confirmToFlag",open:e.openConfirmDialog,header:"\u30b3\u30e1\u30f3\u30c8\u3092\u901a\u5831",bottomSheet:B.isMobile,fixedFooter:B.isMobile,dismissible:!1,onClose:function(){return e.setOpenConfirmDialog(!1)},actions:[Object(j.jsxs)(o.Button,{waves:"light",className:"orange",onClick:function(){},children:[Object(j.jsx)(o.Icon,{left:!0,children:"link"}),"ID\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8"]}),Object(j.jsx)(o.Button,{flat:!0,waves:"light",onClick:function(){return e.setOpenConfirmDialog(!1)},children:"\u9589\u3058\u308b"})]},Object(L.a)(i,"bottomSheet",B.isMobile),Object(L.a)(i,"children",Object(j.jsxs)("p",{children:[Object(j.jsx)("img",{class:"circle",src:null===(t=e.user)||void 0===t||null===(n=t.snippet)||void 0===n||null===(a=n.thumbnails)||void 0===a||null===(r=a.default)||void 0===r?void 0:r.url,width:"30px"})," ",null===(s=e.user)||void 0===s||null===(c=s.snippet)||void 0===c?void 0:c.title,"\u3068\u3057\u3066\u30b3\u30e1\u30f3\u30c8\u3092\u901a\u5831\u3057\u307e\u3059\uff0e\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"]})),i))};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),c=Object(i.a)(s,2),l=(c[0],c[1],Object(a.useState)("")),u=Object(i.a)(l,2),p=u[0],d=u[1],h=Object(a.useState)(!1),m=Object(i.a)(h,2),b=m[0],f=m[1],x=Object(a.useState)(!1),O=Object(i.a)(x,2),v=O[0],w=O[1],k=Object(a.useState)(!1),C=Object(i.a)(k,2),y=C[0],S=C[1],T=Object(a.useState)(!1),I=Object(i.a)(T,2),_=I[0],R=I[1];Object(a.useEffect)((function(){N.a.get("https://gist.githubusercontent.com/BonyChops/b3f623424754d946ca333e032a53b6e0/raw/spamLink.json").then((function(e){console.log(e.data),f(e.data)})),N.a.get("https://gist.githubusercontent.com/BonyChops/b3f623424754d946ca333e032a53b6e0/raw/spamRegex.json").then((function(e){w(e.data)}))}),[]);var L=function(e){if(null==e.match(/https:\/\/(.+)\.youtube\.com/)){if(null!=e.match(/https:\/\/youtu\.be/)){var t=new URL(e);return console.log(t),t.pathname.substr(1)}return!1}var n=new URL(e);if(n.searchParams.has("v"))return n.searchParams.get("v")};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{user:y,setChannel:S}),Object(j.jsxs)(o.Section,{className:"no-pad-bot",id:"index-banner",children:[Object(j.jsxs)(o.Container,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"header center orange-text",children:"save-youtube"}),Object(j.jsxs)("div",{className:"center",children:[Object(j.jsx)("h5",{className:"col s12 light",children:"YouTube\u4e16\u7d00\u672b\u30b3\u30e1\u30f3\u30c8\u3092\u4e00\u6383"}),Object(j.jsx)("br",{}),Object(j.jsx)(o.TextInput,{style:{width:"100%"},className:"col s12 light",label:"\u52d5\u753b\u30ea\u30f3\u30af\u3092\u5165\u529b...",value:p,onChange:function(e){d(e.target.value)}})]}),Object(j.jsx)(o.Row,{className:"center",children:Object(j.jsxs)("button",{onClick:function(){r(L(p))},id:"download-button",className:"btn-large waves-effect waves-light orange",children:[Object(j.jsx)(o.Icon,{left:!0,children:"assessment"})," \u89e3\u6790"]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)(o.Container,{children:Object(j.jsx)("div",{className:"",children:n&&b&&v?Object(j.jsx)(A,{vKey:n,spamLink:b,spamRegex:v,returnId:L,setChannel:S,setOpenConfirmDialog:R,setTmpVideoLink:d,setVideoId:r},n):null})}),Object(j.jsx)(K,{user:y,openConfirmDialog:_,setOpenConfirmDialog:R})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),E()},75:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.10d4ea16.chunk.js.map