(this["webpackJsonpgreat-explorations"]=this["webpackJsonpgreat-explorations"]||[]).push([[0],{130:function(e,t,a){},198:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r);a(130),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(11),i=a(12),o=a(14),m=a(15),p=a(13),h=(a(27),a(221)),u=a(223),d=a(220),E={apiKey:"AIzaSyCsbdkVxitaZHEvixS73t3ZDkFE2pR6hOg",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1yZWPh8McX-D2mZ9roKmCz56e9Te2P4w4TsVA5JdHO8g",textsheetId:"1f9T3uKqF24H3wOBKweVgFqViDA5dvBOhXsf25zFLXek"},g=[],f=[];function x(e){f.push(e)}var v=0,y=1,b=0,w=v;function k(e){switch(w=w===v?y:v,localStorage.setItem("currentLanguage",w),w){case v:b=0;break;case y:b=7;break;default:b=0}A(e)}function A(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:E.spreadsheetId,range:"Sheet1!A2:K"}).then((function(t){var a=t.result.values,n=1,l=a.map((function(e){return{category:e[b],instructor:e[b+1],title:"("+n+++") "+e[b+2],description:e[b+3]}}))||[];e({workshops:l})}),(function(t){e(!1,t.result.error)}))}))}function S(){var e="B";e=e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+w),window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:E.textsheetId,range:"Sheet1!"+e+"2:"+e}).then((function(e){g=e.result.values,console.log(f);for(var t=0;t<f.length;t++)console.log(t),f[t]()}),(function(e){}))}))}var N=h.a.Header,j=h.a.Content,O=h.a.Footer,_=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={current:"registration",text:[],language:"en"},e.initClient=function(){window.gapi.client.init({apiKey:E.apiKey,discoveryDocs:E.discoveryDocs}).then((function(){S(),A()}),(function(){console.log("Error initializing Google API!")}))},e.langSwitch=function(){k(),console.log("Language switched in App.js:",e.state.language),S(),A((function(){console.log("SHEET_LOAD called after language switch.")})),e.setState({language:"en"===e.state.language?"es":"en"})},e.handleClick=function(t){console.log("click ",t),e.setState({current:t.key})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient),x(this.updateText.bind(this))}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement(h.a,{className:"layout"},l.a.createElement(N,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(u.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[this.state.current],style:{lineHeight:"64px"},onClick:this.handleClick},l.a.createElement(u.a.Item,{key:"about"},l.a.createElement(s.b,{to:"/about"},this.state.text[2])),l.a.createElement(u.a.Item,{key:"schedule"},l.a.createElement(s.b,{to:"/schedule"},this.state.text[3])),l.a.createElement(u.a.Item,{key:"registration"},l.a.createElement(s.b,{to:"/registration"},this.state.text[4])),l.a.createElement(u.a.Item,{key:"sponsors"},l.a.createElement(s.b,{to:"/sponsors"},this.state.text[6])),l.a.createElement(u.a.Item,{key:"keynote"},l.a.createElement(s.b,{to:"/keynote"},this.state.text[7])),l.a.createElement(u.a.Item,{key:"faq"},l.a.createElement(s.b,{to:"/faq"},this.state.text[8])),l.a.createElement(u.a.Item,{key:"/contact"},l.a.createElement(s.b,{to:"/contact"},this.state.text[9])),l.a.createElement(d.a,{onChange:this.langSwitch,style:{color:"#9fa7ae",marginLeft:"20px"}},"Espa\xf1ol"))),l.a.createElement(j,{style:{padding:"0 3vw 0 3vw",minHeight:"100vh"}},l.a.cloneElement(this.props.children,{language:this.state.language})),l.a.createElement(O,{style:{textAlign:"center"}},this.state.text[1]))}}]),a}(n.Component),D=_,C=a(222),z=a(224),T=a(218),I=a(225),W=(a(198),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={workshops:[],error:null,currentLanguage:e.props.language},e.initClient=function(){window.gapi.client.init({apiKey:E.apiKey,discoveryDocs:E.discoveryDocs}).then((function(){A(e.onLoad)})).catch((function(){console.error("Error initializing Google API.")}))},e.reloadWorkshops=function(){A(e.onLoad)},e.onLoad=function(t,a){if(t){var n=t.workshops,l=[];n.map((function(e,t){return l.push(e),0})),e.setState({workshops:l})}else e.setState({error:a})},e.getColumnsPerRow=function(){var e=window.innerWidth;return e<=576?1:e<=768?2:e<=992?3:4},e.updateColumns=function(){e.setState({columns:e.getColumnsPerRow()})},e.createWorkshops=function(){var t=e.state,a=t.workshops,n=t.columns,r=[],c=0,s=[];return a.forEach((function(e){var t=l.a.createElement("div",null,l.a.createElement("p",null,e.description),l.a.createElement("p",null,"Instructor: ",e.instructor));s.push(l.a.createElement(z.a,{className:"gutter-row",span:1===n?24:24/n,key:e.title},l.a.createElement(T.a,{content:t,title:e.category,trigger:"hover",overlayStyle:{width:"300px"}},l.a.createElement("div",{className:"gutter-box"},e.title)))),++c>=n&&(c=0,r.push(l.a.createElement(I.a,{gutter:16,key:r.length},s)),s=[])})),s.length>0&&r.push(l.a.createElement(I.a,{gutter:16,key:r.length},s)),r},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient),window.addEventListener("resize",this.updateColumns),this.setState({columns:this.getColumnsPerRow()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColumns)}},{key:"componentDidUpdate",value:function(e){e.language!==this.props.language&&(console.log("Language switched. Reloading workshops..."),this.initClient())}},{key:"render",value:function(){var e=this.state.error;return e?l.a.createElement("div",null,e):l.a.createElement("div",{className:"gutter-example"},this.createWorkshops())}}]),a}(l.a.Component)),M=W,H=a(123),G=a.n(H),B=(a(216),a.p+"static/media/2025_img1.dbdf2c70.png"),F=a.p+"static/media/IMG_01.f4d2e770.jpg",L=a.p+"static/media/IMG_02.d551482c.jpg",K=a.p+"static/media/2025_img2.073ece6f.png",P=a.p+"static/media/IMG_03.ed5e3a20.jpg",q=a.p+"static/media/2025_img3.3f99d816.png",R=a.p+"static/media/IMG_04.d00219ae.jpg",Z=a.p+"static/media/2025_img4.cbf1c666.png",V=a.p+"static/media/IMG_05.9dd287a7.jpg",J=a.p+"static/media/2025_img5.0f4eccbf.png",X=a.p+"static/media/IMG_06.b8285990.jpg",U=a.p+"static/media/2025_img6.0f71a9e3.png",$=a.p+"static/media/IMG_07.8f6904d6.jpg",Q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"};return l.a.createElement("div",{style:{width:window.innerWidth,display:!0}},l.a.createElement(G.a,e,l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:B,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:F,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:L,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:K,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:P,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:q,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:R,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:Z,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:V,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:J,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:X,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:U,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:$,height:"300px",alt:"logo"})))))}}]),a}(l.a.Component),Y=Q,ee=a.p+"static/media/2025GE_EN.378a1a51.pdf",te=a.p+"static/media/2025GE_ES.60af277e.pdf",ae=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e.success=function(){window.location.replace("/#"),C.a.success(e.state.text[118],10)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(Y,null)),l.a.createElement("p",{className:"App-header-text",style:{textAlign:"center"}},this.state.text[10],l.a.createElement("br",null),l.a.createElement("center",{style:{fontSize:"clamp(1rem, 2vw, 1.5rem)",color:"black",fontWeight:"400"}},this.state.text[11])),l.a.createElement("p",{className:"App-text"},l.a.createElement("center",null,this.state.text[12],l.a.createElement("br",null)),l.a.createElement("center",{style:{fontStyle:"oblique",fontWeight:"600"}},this.state.text[13]),l.a.createElement("br",null))),l.a.createElement("div",null,l.a.createElement("p",{className:"App-header-text-2"},l.a.createElement("center",null," ",this.state.text[127]," "),l.a.createElement("center",{style:{fontSize:"clamp(1rem, 2vw, 1.5rem)",color:"black"}},this.state.text[128])),l.a.createElement("p",{className:"App-text"},l.a.createElement("center",null," ",this.state.text[129]," "),l.a.createElement("center",null,l.a.createElement("a",{target:"_blank",href:"https://forms.gle/7EA6ZELnw3dvwiBo6",rel:"noopener norefferer"},"Great Explorations Pre-Registration Form.")," ",l.a.createElement("br",null))),l.a.createElement("p",{className:"App-text-tiny"},l.a.createElement("i",null,this.state.text[16]))," ",l.a.createElement("br",null),l.a.createElement("p",{className:"App-header-text-2"},l.a.createElement("center",null," ",this.state.text[130]," "),l.a.createElement("center",{style:{fontSize:"clamp(1rem, 2vw, 1.5rem)",color:"black",fontWeight:"400"}},this.state.text[14])),l.a.createElement("p",{className:"App-text-small"},this.state.text[15],l.a.createElement("br",null)),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(M,{language:this.props.language}))))}}]),a}(n.Component),ne=ae,le=a.p+"static/media/GE2025_SparkSplash.01294ff5.jpg",re=a.p+"static/media/GE2025_SparkSplash_ES.28465133.jpg",ce=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){var e=window.innerWidth<=600?"100%":"500px",t="es"===this.props.language?re:le;return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol"),l.a.createElement("p",{className:"App-header-text"},l.a.createElement("center",null,this.state.text[17])),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h3",null,l.a.createElement("img",{src:t,style:{width:e,maxWidth:"100%",height:"auto"},alt:"logo"})))),l.a.createElement("p",{className:"App-header-text-2"},this.state.text[119]),l.a.createElement("p",{className:"App-text"},this.state.text[18],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[19],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[20],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[21],l.a.createElement("br",null),l.a.createElement("br",null))))}}]),a}(n.Component),se=ce,ie=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},this.state.text[59]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[60],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[61]),l.a.createElement("li",null,this.state.text[62]),l.a.createElement("li",null,this.state.text[63]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[65],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[66]),l.a.createElement("li",null,this.state.text[67]),l.a.createElement("li",null,this.state.text[68]),l.a.createElement("li",null,this.state.text[69]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[72],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[73]),l.a.createElement("li",null,this.state.text[74]),l.a.createElement("li",null,this.state.text[75])))))}}]),a}(n.Component),oe=ie,me=a(219),pe=me.a.Panel,he=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){var e=[{description:this.state.text[91],key:0},{description:this.state.text[92],key:1}];return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},this.state.text[86])),l.a.createElement("div",null,l.a.createElement(me.a,{bordered:!1,defaultActiveKey:["1"]},l.a.createElement(pe,{className:"custom-panel",header:this.state.text[87],key:"1"},l.a.createElement("p",null,this.state.text[88])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[89],key:"2"},l.a.createElement("p",null,this.state.text[90],l.a.createElement("br",null),l.a.createElement("ol",null,e.map((function(e){return l.a.createElement("li",{key:e.key},e.description)}))),this.state.text[94])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[95],key:"3"},l.a.createElement("p",null,this.state.text[96])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[97],key:"4"},l.a.createElement("p",null,this.state.text[98])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[101],key:"5"},l.a.createElement("p",null,this.state.text[102])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[103],key:"6"},l.a.createElement("p",null,this.state.text[104])),l.a.createElement(pe,{className:"custom-panel",header:this.state.text[105],key:"7"},l.a.createElement("p",null,this.state.text[106])))))}}]),a}(n.Component),ue=he,de=a.p+"static/media/Perron.e2d56f56.jpg",Ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},this.state.text[76]),l.a.createElement("p",{className:"App-text"},"  ",l.a.createElement("center",null,this.state.text[77],l.a.createElement("br",null),this.state.text[78])),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:de,height:"300px",alt:"logo"}))),l.a.createElement("p",{className:"App-text"},this.state.text[81],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[82],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[83],l.a.createElement("br",null),l.a.createElement("br",null))))}}]),a}(n.Component),ge=Ee,fe=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(1rem, 2vw, 1.5rem) !important",fontWeight:"200 !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},this.state.text[110]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[111],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[112]),l.a.createElement("li",null,this.state.text[113]),l.a.createElement("li",null,this.state.text[114])))))}}]),a}(n.Component),xe=fe,ve=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){x(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:g})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:ee,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"English Brochure Download"),l.a.createElement("span",{style:{padding:"0 15px"}},"\xa0")," ",l.a.createElement("a",{target:"_blank",rel:"noreferrer noopener",href:te,style:{fontSize:"clamp(.1rem, 1vw, 2rem) !important",whiteSpace:"nowrap"}},"Descargar Folleto en Espa\xf1ol")),l.a.createElement("p",{className:"App-header-text"},this.state.text[22],l.a.createElement("center",{style:{fontSize:"clamp(1rem, 1.7vw, 1.5rem)",color:"darkblue",fontWeight:"400"}},this.state.text[23]),l.a.createElement("center",{style:{fontSize:"clamp(1rem, 1.7vw, 1.5rem)",color:"darkblue",fontWeight:"400"}},this.state.text[24])),l.a.createElement("p",{className:"schedule",style:{color:"black"}},this.state.text[25]," ",l.a.createElement("span",{className:"schedule"},this.state.text[26]),l.a.createElement("br",null),this.state.text[27],l.a.createElement("span",{className:"schedule"},this.state.text[28]),l.a.createElement("br",null),this.state.text[29],l.a.createElement("span",{className:"schedule"},this.state.text[30]),l.a.createElement("br",null),this.state.text[31],l.a.createElement("span",{className:"schedule"},this.state.text[32]),l.a.createElement("br",null),this.state.text[33],l.a.createElement("span",{className:"schedule"},this.state.text[34]),l.a.createElement("br",null),this.state.text[35],l.a.createElement("span",{className:"schedule"},this.state.text[36]),l.a.createElement("br",null),this.state.text[37],l.a.createElement("span",{className:"schedule"},this.state.text[38]),l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[120],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[122]),l.a.createElement("p",{className:"App-header-text"},this.state.text[39],l.a.createElement("center",{style:{fontSize:"clamp(1rem, 1.7vw, 1.5rem)",color:"darkblue",fontWeight:"400"}},this.state.text[40]))))}}]),a}(n.Component),ye=ve,be=l.a.createElement(s.c,{path:"/",component:D},l.a.createElement(s.a,{component:ne}),l.a.createElement(s.c,{path:"/about",component:se}),l.a.createElement(s.c,{path:"/schedule",component:ye}),l.a.createElement(s.c,{path:"/registration",component:ne}),l.a.createElement(s.c,{path:"/sponsors",component:oe}),l.a.createElement(s.c,{path:"/keynote",component:ge}),l.a.createElement(s.c,{path:"/faq",component:ue}),l.a.createElement(s.c,{path:"/contact",component:xe}));c.a.render(l.a.createElement(s.d,{routes:be,history:s.e}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,a){}},[[217,1,2]]]);
//# sourceMappingURL=main.d026c6f0.chunk.js.map