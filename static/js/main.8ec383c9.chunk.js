(this["webpackJsonpgreat-explorations"]=this["webpackJsonpgreat-explorations"]||[]).push([[0],{131:function(e,t,a){},199:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r);a(131),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(15),i=a(11),o=a(13),m=a(14),h=a(12),u=(a(25),a(223)),p=a(225),E=a(221),d={apiKey:"AIzaSyCsbdkVxitaZHEvixS73t3ZDkFE2pR6hOg",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1yZWPh8McX-D2mZ9roKmCz56e9Te2P4w4TsVA5JdHO8g",textsheetId:"1f9T3uKqF24H3wOBKweVgFqViDA5dvBOhXsf25zFLXek"},x=[],g=[];function f(e){g.push(e)}var b=0,v=1,y=b;function k(){y=y===b?v:b}function w(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:d.spreadsheetId,range:"Sheet1!A2:D"}).then((function(t){var a=t.result.values,n=1,l=a.map((function(e){return{category:e[0],instructor:e[1],title:"("+n+++") "+e[2],description:e[3]}}))||[];e({workshops:l})}),(function(t){e(!1,t.result.error)}))}))}function A(){var e="B";e=e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+y),window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:d.textsheetId,range:"Sheet1!"+e+"2:"+e}).then((function(e){x=e.result.values,console.log(g);for(var t=0;t<g.length;t++)console.log(t),g[t]()}),(function(e){}))}))}var j=u.a.Header,O=u.a.Content,N=u.a.Footer,S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={current:"registration",text:[]},e.initClient=function(){window.gapi.client.init({apiKey:d.apiKey,discoveryDocs:d.discoveryDocs}).then((function(){A()}),(function(){console.log("Error initializing Google API!")}))},e.langSwitch=function(){k(),A()},e.handleClick=function(t){console.log("click ",t),e.setState({current:t.key})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient),f(this.updateText.bind(this))}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement(u.a,{className:"layout"},l.a.createElement(j,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[this.state.current],style:{lineHeight:"64px"},onClick:this.handleClick},l.a.createElement(p.a.Item,{key:"about"},l.a.createElement(s.b,{to:"/about"},this.state.text[2])),l.a.createElement(p.a.Item,{key:"schedule"},l.a.createElement(s.b,{to:"/schedule"},this.state.text[3])),l.a.createElement(p.a.Item,{key:"registration"},l.a.createElement(s.b,{to:"/registration"},this.state.text[4])),l.a.createElement(p.a.Item,{key:"sponsors"},l.a.createElement(s.b,{to:"/sponsors"},this.state.text[6])),l.a.createElement(p.a.Item,{key:"keynote"},l.a.createElement(s.b,{to:"/keynote"},this.state.text[7])),l.a.createElement(p.a.Item,{key:"faq"},l.a.createElement(s.b,{to:"/faq"},this.state.text[8])),l.a.createElement(p.a.Item,{key:"/contact"},l.a.createElement(s.b,{to:"/contact"},this.state.text[9])),l.a.createElement(E.a,{onChange:this.langSwitch,style:{color:"#9fa7ae",marginLeft:"20px"}},"Espa\xf1ol"))),l.a.createElement(O,{style:{padding:"0 3vw 0 3vw",minHeight:"100vh"}},this.props.children),l.a.createElement(N,{style:{textAlign:"center"}},this.state.text[1]))}}]),a}(n.Component),D=S,C=a(224),T=a(226),_=a(222),I=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={show:!1},e}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=null;return e=l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfaS_8XD8Sru6o56KNEh9Bkuwa6ntL50XRgi2OOf0_NGzbuYQ/viewform?embedded=true",width:"640",height:"4374",frameBorder:"0",marginHeight:"0",marginWidth:"0"},"Loading\u2026")),l.a.createElement("div",null,e)}}]),a}(l.a.Component),W=I,z=a(227),M=a(219),H=a(228),B=(a(199),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={workshops:[],error:null},e.initClient=function(){window.gapi.client.init({apiKey:d.apiKey,discoveryDocs:d.discoveryDocs}).then((function(){w(e.onLoad)}))},e.onLoad=function(t,a){if(t){var n=t.workshops,l=[];n.map((function(e,t){return l.push(e),0})),e.setState({workshops:l})}else e.setState({error:a})},e.createWorkshops=function(){var t=[],a=0,n=[];return e.state.workshops.map((function(e){var r=l.a.createElement("div",null,l.a.createElement("p",null,e.description),l.a.createElement("p",null,"Instructor: ",e.instructor));return n.push(l.a.createElement(z.a,{className:"gutter-row",span:6},l.a.createElement(M.a,{content:r,title:e.category,trigger:"hover",overlayStyle:{width:"300px"}},l.a.createElement("div",{className:"gutter-box"}," ",e.title," ")))),(a+=1)>=4&&(a=0,t.push(l.a.createElement(H.a,{gutter:"5vw"},n)),n=[]),0})),0!==a&&t.push(l.a.createElement(H.a,{gutter:"5vw"},n)),t},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return this.state.error?l.a.createElement("div",null,this.state.error):l.a.createElement("div",{className:"gutter-example"},this.createWorkshops())}}]),a}(l.a.Component)),F=B,G=a(124),K=a.n(G),L=(a(217),a.p+"static/media/aurora.8b42bcb2.jpg"),P=a.p+"static/media/IMG_5710.8f6904d6.jpg",q=a.p+"static/media/IMG_5733.d28104fd.jpg",X=a.p+"static/media/IMG_5740.26317b9b.jpg",J=a.p+"static/media/IMG_5700.b921c064.jpg",R=a.p+"static/media/IMG_5702.10e4a3cb.jpg",V=a.p+"static/media/IMG_5725.e84cf137.jpg",Z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"};return l.a.createElement("div",{style:{width:window.innerWidth,display:!0}},l.a.createElement(K.a,e,l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:L,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:P,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:q,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:X,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:J,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:R,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:V,height:"300px",alt:"logo"})))))}}]),a}(l.a.Component),Q=Z,$=a.p+"static/media/GE2022En.588b5362.pdf",Y=a.p+"static/media/GE2022Es.05300778.pdf",U=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e.success=function(){window.location.replace("/#"),C.a.success(e.state.text[118],10)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(Q,null)),l.a.createElement("p",{className:"App-header-text"},this.state.text[10],l.a.createElement("br",null),l.a.createElement("center",{style:{fontSize:"2vw",color:"black",fontWeight:"400"}},this.state.text[11])),l.a.createElement("p",{className:"App-text"},l.a.createElement("center",null,this.state.text[12],l.a.createElement("br",null)),l.a.createElement("center",{style:{fontStyle:"oblique",fontWeight:"600"}},this.state.text[13]),l.a.createElement("br",null),l.a.createElement("center",null,this.state.text[14])),l.a.createElement("p",{className:"App-text-small"},this.state.text[15],l.a.createElement("br",null)),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(F,null)),l.a.createElement("p",{className:"App-text-tiny"},l.a.createElement("i",null,this.state.text[16])),l.a.createElement("p",{align:"right"},l.a.createElement(T.a,{offsetTop:200},l.a.createElement(_.a,{type:"primary",onClick:function(){window.location.hash="#registration"}},this.state.text[115]))),l.a.createElement("p",{className:"App-header-text",id:"registration"},l.a.createElement(W,null)),l.a.createElement("p",{align:"center"},l.a.createElement(_.a,{type:"primary",onClick:this.success,ghost:!0},this.state.text[117]))))}}]),a}(n.Component),ee=U,te=a.p+"static/media/2022GEHeader.18d78bfc.jpg",ae=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:te,height:"100px",alt:"logo"}))),l.a.createElement("p",{className:"App-header-text"},this.state.text[17]),l.a.createElement("p",{className:"App-header-text-2"},this.state.text[119]),l.a.createElement("p",{className:"App-text"},this.state.text[18],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[19],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[20],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[21],l.a.createElement("br",null),l.a.createElement("br",null))))}}]),a}(n.Component),ne=ae,le=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[59]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[60],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[61]),l.a.createElement("li",null,this.state.text[62]),l.a.createElement("li",null,this.state.text[63]),l.a.createElement("li",null,this.state.text[64]),l.a.createElement("li",null,this.state.text[124]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[65],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[66]),l.a.createElement("li",null,this.state.text[67]),l.a.createElement("li",null,this.state.text[68]),l.a.createElement("li",null,this.state.text[69]),l.a.createElement("li",null,this.state.text[70]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[72],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[73]),l.a.createElement("li",null,this.state.text[74]),l.a.createElement("li",null,this.state.text[75])))))}}]),a}(n.Component),re=le,ce=a(220),se=ce.a.Panel,ie={background:"#f7f7f7",fontSize:"2vw",borderRadius:4,overflow:"hidden"},oe=(n.Component,ce.a.Panel),me={background:"#f7f7f7",fontSize:"2vw",borderRadius:4,marginBottom:24,border:0,overflow:"hidden"},he=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){var e=[{description:this.state.text[91],key:0},{description:this.state.text[92],key:1},{description:this.state.text[93],key:2}];this.state.text[97],this.state.text[98],this.state.text[99];return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[86])),l.a.createElement("div",null,l.a.createElement(ce.a,{bordered:!1,defaultActiveKey:["1"]},l.a.createElement(oe,{header:this.state.text[87],key:"1",style:me},l.a.createElement("p",null,this.state.text[88])),l.a.createElement(oe,{header:this.state.text[89],key:"2",style:me},l.a.createElement("p",null,this.state.text[90],l.a.createElement("br",null),l.a.createElement("ol",null,e.map((function(e){return l.a.createElement("li",{key:e.key},e.description)}))),this.state.text[94])),l.a.createElement(oe,{header:this.state.text[95],key:"3",style:me},l.a.createElement("p",null,this.state.text[96])),l.a.createElement(oe,{header:this.state.text[97],key:"4",style:me},l.a.createElement("p",null,this.state.text[98])),l.a.createElement(oe,{header:this.state.text[101],key:"5",style:me},l.a.createElement("p",null,this.state.text[102])),l.a.createElement(oe,{header:this.state.text[103],key:"6",style:me},l.a.createElement("p",null,this.state.text[104])),l.a.createElement(oe,{header:this.state.text[105],key:"7",style:me},l.a.createElement("p",null,this.state.text[106])))))}}]),a}(n.Component),ue=he,pe=a.p+"static/media/Perron_Julie.2bd529ec.jpg",Ee=a.p+"static/media/rachel_salt.16100c85.jpg",de=a.p+"static/media/salt_books.38749f75.jpg",xe=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[76]),l.a.createElement("p",{className:"App-header-text-2"},l.a.createElement("center",null,this.state.text[77],l.a.createElement("br",null),this.state.text[78])),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:pe,height:"300px",alt:"logo"}))),l.a.createElement("p",{className:"App-text"},this.state.text[81],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[82],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[83],l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",{className:"App-header-text-2"},l.a.createElement("center",null,this.state.text[84])),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:Ee,height:"300px",alt:"logo"}))),l.a.createElement("p",{className:"App-text"},this.state.text[85],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[125],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[126],l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:de,height:"350px",alt:"logo"})))))}}]),a}(n.Component),ge=xe,fe=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[110]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[111],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[112]),l.a.createElement("li",null,this.state.text[113]),l.a.createElement("li",null,this.state.text[114])))))}}]),a}(n.Component),be=fe,ve=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={text:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){f(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:Y},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[22],l.a.createElement("center",{style:{fontSize:"1.7vw",color:"darkblue",fontWeight:"400"}},this.state.text[23]),l.a.createElement("center",{style:{fontSize:"1.7vw",color:"darkblue",fontWeight:"400"}},this.state.text[24])),l.a.createElement("p",{className:"App-text"},this.state.text[25]," ",l.a.createElement("span",{class:"schedule"},this.state.text[26]),l.a.createElement("br",null),this.state.text[27],l.a.createElement("span",{class:"schedule"},this.state.text[28]),l.a.createElement("br",null),this.state.text[29],l.a.createElement("span",{class:"schedule"},this.state.text[30]),l.a.createElement("br",null),this.state.text[31],l.a.createElement("span",{class:"schedule"},this.state.text[32]),l.a.createElement("br",null),this.state.text[33],l.a.createElement("span",{class:"schedule"},this.state.text[34]),l.a.createElement("br",null),this.state.text[35],l.a.createElement("span",{class:"schedule"},this.state.text[36]),l.a.createElement("br",null),this.state.text[37],l.a.createElement("span",{class:"schedule"},this.state.text[38]),l.a.createElement("br",null),this.state.text[120],l.a.createElement("span",{class:"schedule"},this.state.text[121]),l.a.createElement("br",null),this.state.text[122],l.a.createElement("span",{class:"schedule"},this.state.text[123]),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",{className:"App-text"},l.a.createElement("span",{class:"App-text-small"},this.state.text[39])," ",this.state.text[40])))}}]),a}(n.Component),ye=ve,ke=l.a.createElement(s.c,{path:"/",component:D},l.a.createElement(s.a,{component:ee}),l.a.createElement(s.c,{path:"/about",component:ne}),l.a.createElement(s.c,{path:"/schedule",component:ye}),l.a.createElement(s.c,{path:"/registration",component:ee}),l.a.createElement(s.c,{path:"/sponsors",component:re}),l.a.createElement(s.c,{path:"/keynote",component:ge}),l.a.createElement(s.c,{path:"/faq",component:ue}),l.a.createElement(s.c,{path:"/contact",component:be}));c.a.render(l.a.createElement(s.d,{routes:ke,history:s.e}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){}},[[218,1,2]]]);
//# sourceMappingURL=main.8ec383c9.chunk.js.map