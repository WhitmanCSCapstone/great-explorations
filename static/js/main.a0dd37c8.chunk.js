(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(186)},106:function(e,t,a){},182:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),o=a.n(l),i=(a(106),a(12)),c=a(13),s=a(16),u=a(14),p=a(17),h=(a(65),a(187)),m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this,t=null,a="Show Form";return this.state.show&&(a="Hide Form",t=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSd1sLdB-sNR0X2F5C6lMEPU_tagEjNvMIaq3Ar-1Krs9mtl8A/viewform?embedded=true",width:"600",height:"1255",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading..."))),r.a.createElement("div",null,r.a.createElement(h.a,{type:"primary",onClick:function(){return e.handleClick()}},a),t)}}]),t}(r.a.Component),d=a(189),g=a(188),f=a(190),v=(a(78),r.a.Component,{apiKey:"AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw"});var E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={workshops:[],error:null},a.initClient=function(){window.gapi.client.init({apiKey:v.apiKey,discoveryDocs:v.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:v.spreadsheetId,range:"Sheet1!A2:D"}).then(function(t){var a=t.result.values.map(function(e){return{category:e[0],instructor:e[1],title:e[2],description:e[3]}})||[];e({workshops:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.workshops,r=[];n.map(function(e,t){r.push(e)}),a.setState({workshops:r})}else a.setState({error:t})},a.createWorkshops=function(){var e=[],t=0,n=[];return a.state.workshops.map(function(a){var l=r.a.createElement("div",null,r.a.createElement("p",null,a.description),r.a.createElement("p",null,"Instructor: ",a.instructor));n.push(r.a.createElement(d.a,{className:"gutter-row",span:4},r.a.createElement(g.a,{content:l,title:a.title,trigger:"hover",overlayStyle:{width:"300px"}},r.a.createElement("div",{className:"gutter-box"}," ",a.category.replace(/ /g,"\xa0")," ")))),(t+=1)>=6&&(t=0,e.push(r.a.createElement(f.a,{gutter:60},n)),n=[])}),e},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){if(this.state.error)return r.a.createElement("div",null,this.state.error);console.log(this.state.workshops);r.a.createElement("div",null,r.a.createElement("p",null,"Content A"),r.a.createElement("p",null,"Content B"));return r.a.createElement("div",{className:"gutter-example"},this.createWorkshops())}}]),t}(r.a.Component),w=a(90),y=a.n(w),b=(a(182),a(91)),j=a.n(b),x=a(92),k=a.n(x),O=a(93),I=a.n(O),A=a(94),C=a.n(A),M=a(95),G=a.n(M),N=a(96),S=a.n(N),_=a(97),W=a.n(_),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.innerWidth,display:!0}},r.a.createElement(y.a,{dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:j.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:k.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:I.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:C.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:G.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:S.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:W.a,height:"300px",alt:"logo"})))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement(B,null)),r.a.createElement("p",{className:"App-header-text"},"Welcome to Great Explorations!"),r.a.createElement("p",{className:"App-text"},"Below you will find all of the 2019 workshops."),r.a.createElement("p",null,r.a.createElement(E,null)),r.a.createElement("p",null,r.a.createElement(m,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/aurora.2316c945.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/IMG_5710.25c82581.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/IMG_5733.feea3af3.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/IMG_5740.d775ca5b.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/IMG_5700.b37ab3ff.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/IMG_5702.48c39ff5.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/IMG_5725.5371eba2.jpg"}},[[101,2,1]]]);
//# sourceMappingURL=main.a0dd37c8.chunk.js.map