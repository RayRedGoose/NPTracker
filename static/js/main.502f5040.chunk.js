(this["webpackJsonpreact-starter"]=this["webpackJsonpreact-starter"]||[]).push([[0],Array(31).concat([function(e,t,a){e.exports=a.p+"static/media/logo.fdb06dd8.svg"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/traveler.6aba03ab.svg"},,function(e,t,a){e.exports=a.p+"static/media/matryoshka.3edaf60d.svg"},function(e,t,a){e.exports=a.p+"static/media/checkmark.65820460.svg"},function(e,t,a){e.exports=a.p+"static/media/send.254114a8.svg"},function(e,t,a){e.exports=a.p+"static/media/bell.aaeb24f1.svg"},function(e,t,a){e.exports=a.p+"static/media/bell-full.9a386b3e.svg"},function(e,t,a){e.exports=a.p+"static/media/balalaika.b47c8f0b.svg"},function(e,t,a){e.exports=a.p+"static/media/note.295dd2ad.svg"},function(e,t,a){e.exports=a.p+"static/media/note-1.0190f07c.svg"},function(e,t,a){e.exports=a.p+"static/media/note-2.45efd08d.svg"},function(e,t,a){e.exports=a.p+"static/media/note-3.d7542fbc.svg"},,function(e,t,a){e.exports=a.p+"static/media/more.cc3dcfa1.svg"},,function(e,t,a){e.exports=a(88)},,,,,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),s=a.n(c),o=(a(60),a(61),a(5)),i=a(4),l=a(7),u=a(6),p=a(8),m=(a(62),a(11)),d=a(10),f=a(21),h=(a(67),a(31)),b=a.n(h),v=a(40),E=a.n(v),g=function(e){return{type:"ADD_PROCESS_NAME",name:e}},k=function(e){return{type:"ADD_PROCESS_STEP",step:e}},y=function(){return{type:"INCREASE_STEP"}},O=function(e){return{type:"ADD_PROCESS_QUERY",query:e}},j=function(){return{type:"REMOVE_PROCESS"}},P=function(e){return{type:"ADD_USER_INFO",info:e}},C=function(e){return{type:"ADD_PARKS",parks:e}},w=function(e){return{type:"CHANGE_ACTIVE_TAB",id:e}},S=function(e){return{type:"SELECT_PARK",park:e}},N=function(e){return{type:"ADD_PLANNED_PARKS",parks:e}},A=function(e){return{type:"ADD_PLANNED_PARK",park:e}},x=function(e){return{type:"REMOVE_PLANNED_PARK",park:e}},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).redirect=function(e){var t=a.props,n=t.addProcessName,r=t.addProcessStep;n(e.target.id),r(1),a.setState({isRedirected:!0})},a.state={isRedirected:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.type;return this.state.isRedirected?r.a.createElement(f.a,{to:"/".concat(a)}):r.a.createElement("button",{onClick:this.redirect,id:a},t)}}]),t}(n.Component),_=Object(m.b)(null,(function(e){return Object(d.bindActionCreators)({addProcessName:g,addProcessStep:k},e)}))(D),T=function(){return r.a.createElement("main",{className:"welcome"},r.a.createElement("img",{className:"logo",src:b.a,alt:"logo"}),r.a.createElement("section",null,r.a.createElement("h1",null,"Welcome, Traveler!"),r.a.createElement("img",{src:E.a,alt:"traveler"}),r.a.createElement("div",null,r.a.createElement(_,{text:"Sign In",type:"login"}),r.a.createElement(_,{text:"Create Account",type:"signup"}))))},I=(a(69),a(70),a(27)),L=function(e){return JSON.parse(localStorage.getItem(e))},R=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},U=function(e,t){var a=L(e)?Object(I.a)(L(e)):[];return localStorage.setItem(e,JSON.stringify([].concat(Object(I.a)(a),[t])))},V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChanges=function(t){var a={error:null};a[t.target.id]=t.target.value,e.setState(a)},e.redirect=function(t){t.preventDefault(),e.setState({isRedirected:!0})},e.submitUser=function(t){t.preventDefault();var a=L("users");return a?e.findUser(a):e.setState({error:"Please, create account!"})},e.findUser=function(t){var a=t.find((function(t){return t.username===e.state.username}));return a?e.checkUserPassword(a):e.setState({error:"This username is not found!"})},e.checkUserPassword=function(t){return t.password===e.state.password?e.pushUser(t):e.setState({error:"Password is incorrect!"})},e.pushUser=function(t){e.props.addUserInfo(t),R("user",t),window.location="/"},e.state={isRedirected:!1,username:"",password:""},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.error,c=e.isRedirected;return r.a.createElement("section",{className:"login-container"},c&&r.a.createElement(f.a,{to:"/signup"}),r.a.createElement("form",{onSubmit:this.submitUser},r.a.createElement("h2",null,"Traveler login"),n&&r.a.createElement("p",{className:"error"},n),r.a.createElement("label",{htmlFor:"username"},"username"),r.a.createElement("input",{type:"username",id:"username",value:t,onChange:this.handleChanges}),r.a.createElement("label",{htmlFor:"password"},"password"),r.a.createElement("input",{type:"password",id:"password",value:a,onChange:this.handleChanges}),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.submitUser},"Submit"),r.a.createElement("button",{onClick:this.redirect},"Sign Up"))))}}]),t}(n.Component),M=Object(m.b)(null,(function(e){return Object(d.bindActionCreators)({addUserInfo:P},e)}))(V),F=function(){return r.a.createElement("main",{className:"login-page"},r.a.createElement("img",{className:"logo",src:b.a,alt:"logo"}),r.a.createElement(M,null))},W=(a(71),a(72),a(19)),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).toggleTab=function(e){var t=a.props,n=t.changeActiveTab;(0,t.removeProcess)(),n(+e.target.id)},a.createTabs=function(){return["dashboard","parks","wish list","visited"].map((function(e,t){var n=a.props.activeTab===t+1?"nav-tab tab-active":"nav-tab",c=e.replace(/ /g,"-");return r.a.createElement(W.b,{to:"/".concat(c),key:c,id:t+1,className:n,onClick:a.toggleTab},e)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-panel"},this.createTabs())}}]),t}(n.Component),z=Object(m.b)((function(e){return{activeTab:e.activeTab}}),(function(e){return Object(d.bindActionCreators)({changeActiveTab:w,removeProcess:j},e)}))(q),J=(a(73),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleSubmit=function(e){e.preventDefault();var t=a.props.process,n=a.state.query;return t||""===n?a.removeSearch():a.submitSearch(e)},a.submitSearch=function(e){e.preventDefault();var t=a.props,n=t.addProcessName,r=t.addProcessQuery;n("search"),r(a.state.query),a.setState({query:""})},a.removeSearch=function(){var e=a.props.removeProcess;a.setState({query:""}),e()},a.handleChanges=function(e){var t=e.target.value.toLowerCase();a.setState({query:t})},a.state={query:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query,t=this.props.process?"cancel-btn":"submit-btn";return r.a.createElement("form",{className:"search-form",onSubmit:this.toggleSubmit},r.a.createElement("input",{type:"text",value:e,onChange:this.handleChanges,placeholder:"Search"}),r.a.createElement("button",{className:t}))}}]),t}(n.Component)),K=Object(m.b)((function(e){return{process:e.process}}),(function(e){return Object(d.bindActionCreators)({addProcessName:g,addProcessQuery:O,removeProcess:j},e)}))(J),Y=(a(74),Object(m.b)((function(e){return{user:e.user}}))((function(e){var t=e.user;return r.a.createElement("aside",{className:"user-profile"},r.a.createElement("header",null,r.a.createElement("h2",null,"Your Account")),r.a.createElement("section",null,r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(t.image,")")}}),r.a.createElement("div",null,r.a.createElement("p",null,t.name+" "+t.last_name),r.a.createElement("p",{className:"location"},t.city))))}))),Q=function(e){var t=e.Part,a=e.type;return r.a.createElement("main",{className:"main-page"},r.a.createElement("header",null,r.a.createElement(z,null),r.a.createElement(K,null)),r.a.createElement(Y,null),r.a.createElement(t,{type:a}))},B=(a(75),a(16)),X=(a(76),a(42)),G=a.n(X),H=a(43),Z=a.n(H),$=a(44),ee=a.n($),te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).checkType=function(){var e=a.props,t=e.id,n=e.process;n.step<t&&a.setState({type:"inactive"}),n.step===t&&a.setState({type:"active"}),n.step>t&&a.setState({type:"done"})},a.createInputs=function(){return a.props.inputs.map((function(e){var t="password"===e?"password":"text";return r.a.createElement(n.Fragment,{key:"inputs"},r.a.createElement("label",{key:"label-"+e,htmlFor:e},e.split("_").join(" ")),r.a.createElement("input",{key:"input-"+e,id:e,type:t,value:a.state.data[e],onChange:a.handleChanges}))}))},a.handleChanges=function(e){var t={};t[e.target.id]=e.target.value,a.setState({data:Object(B.a)({},a.state.data,{},t)})},a.updateUser=function(){a.props.increaseStep(),a.props.addUserInfo(a.state.data)},a.submitUser=function(){var e=a.props.user;R("user",e),U("users",e),window.location="/"},a.cancel=function(){window.location="/welcome"},a.checkUserFullness=function(){var e=a.props.user?a.props.user:{};return 6===Object.keys(e).length},a.state={type:"",data:{},error:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){return this.props.process?this.checkType():window.location="/welcome"}},{key:"componentDidUpdate",value:function(e){this.props.process.step!==e.process.step&&this.checkType()}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.user,c=e.process,s={height:"".concat(200-40*t,"px"),position:"relative",zIndex:"3"},o={height:"".concat(20+40*t,"px"),position:"relative",zIndex:"3"},i=r.a.createElement(n.Fragment,{key:"form"},r.a.createElement("form",null,r.a.createElement("h2",null,"CREATE ACCOUNT"),this.createInputs(),r.a.createElement("p",null,"click arrow button to go to next step")),r.a.createElement("img",{className:"arrow-btn",src:ee.a,alt:"arrow",onClick:this.updateUser})),l=r.a.createElement("div",{key:"error-block",className:"submit-block error-block"},r.a.createElement("h2",null,"Profile overview"),r.a.createElement("p",{className:"error"},"You don't pass correct data"),r.a.createElement("button",{onClick:this.cancel},"Cancel")),u=this.checkUserFullness()?r.a.createElement("div",{key:"submit-block",className:"submit-block"},r.a.createElement("h2",null,"Profile overview"),r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a.image,")")}}),r.a.createElement("p",null,a.name+" "+a.last_name),r.a.createElement("p",{className:"location"},a.city),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.submitUser},"Create"),r.a.createElement("button",{onClick:this.cancel},"Cancel"))):l,p=c&&4===c.step?u:i;return r.a.createElement("section",{id:t,className:"signup-container ".concat(this.state.type,"-block")},"inactive"===this.state.type&&r.a.createElement("img",{style:s,src:G.a,alt:"matryoshka"}),"active"===this.state.type&&p,"done"===this.state.type&&r.a.createElement("img",{style:o,src:Z.a,alt:"check"}))}}]),t}(n.Component),ae=Object(m.b)((function(e){return{process:e.process,user:e.user}}),(function(e){return Object(d.bindActionCreators)({addUserInfo:P,increaseStep:y},e)}))(te),ne=function(){var e=[["username","password"],["name","last_name","city"],["image"],[]].map((function(e,t){return r.a.createElement(ae,{key:t+1,id:t+1,inputs:e})}));return r.a.createElement("main",{className:"signup-page"},e)},re=(a(77),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).intervalID=0,e.state={text:"Click on 'Dashboard' tab to see your summary",allTexts:["Click on 'Dashboard' tab to see your summary","Click on 'Parks' tab to see all national parks","Click on 'Wish List' tab to see your plannings","Click on 'Visited' tab to see your visited places"],count:1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.allTexts,n=t.count;this.intervalID=setInterval((function(){return 4!==n?e.setState({text:a[n],count:n+1}):e.setState({text:a[0],count:1})}),6e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement("section",{className:"instructions"},r.a.createElement("h2",null,this.state.text))}}]),t}(n.Component)),ce=(a(78),function(){return r.a.createElement("main",{className:"page404"},r.a.createElement("h1",null,"Please, enter correct url!"))}),se=a(17),oe=a.n(se),ie=(a(80),function(e,t){var a,n,r,c;return oe.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a=t?"?q=".concat(t):"","jifXT2Vf98f3NV0eJEEVe6nMf04XQVPYzznfolCL",n="https://developer.nps.gov/api/v1/".concat(e).concat(a,"&fields=images&limit=60&api_key=").concat("jifXT2Vf98f3NV0eJEEVe6nMf04XQVPYzznfolCL"),s.next=5,oe.a.awrap(fetch(n));case 5:if((r=s.sent).ok){s.next=8;break}throw new Error("There was an error getting parks.");case 8:return s.next=10,oe.a.awrap(r.json());case 10:return c=s.sent,s.abrupt("return",c.data);case 12:case"end":return s.stop()}}))}),le=(a(81),a(45)),ue=a.n(le),pe=a(46),me=a.n(pe),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toggleWishLish=function(){var e=a.props,t=e.plannedParks,n=e.name;return t.includes(n)?a.removeFromWishList(n,t):a.addToWishList(n)},a.addToWishList=function(e){a.props.addPlannedPark(e),U("planning",e)},a.removeFromWishList=function(e,t){a.props.removePlannedPark(e);var n=t.filter((function(t){return t!==e}));R("planning",n)},a.redirect=function(){a.props.removeProcess()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.image,n=e.fullName,c=e.name,s=e.states,o=e.plannedParks,i=n.length>35?c:n,l=n.toLowerCase().replace(/ /g,"-"),u="".concat(this.props.type,"/").concat(l),p=o.includes(c)?me.a:ue.a;return r.a.createElement("section",{id:t,className:"park-card"},r.a.createElement("div",{className:"preview",style:{backgroundImage:"url(".concat(a,")")}},r.a.createElement("header",null,r.a.createElement("p",{className:"location"},s),r.a.createElement("section",null,r.a.createElement("img",{src:p,alt:"bell",onClick:this.toggleWishLish})))),r.a.createElement(W.b,{to:u,onClick:this.redirect,className:"title"},i))}}]),t}(n.Component),fe=Object(m.b)((function(e){return{plannedParks:e.plannedParks}}),(function(e){return Object(d.bindActionCreators)({addPlannedPark:A,removePlannedPark:x,removeProcess:j},e)}))(de),he=(a(82),a(47)),be=a.n(he),ve=a(48),Ee=a.n(ve),ge=a(49),ke=a.n(ge),ye=a(50),Oe=a.n(ye),je=a(51),Pe=a.n(je),Ce=function(){return r.a.createElement("section",{className:"loading-image"},r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"note"}),r.a.createElement("img",{src:ke.a,alt:"note"}),r.a.createElement("img",{src:Oe.a,alt:"note"}),r.a.createElement("img",{src:Pe.a,alt:"note"})),r.a.createElement("img",{src:be.a,alt:"balalaika"}),r.a.createElement("p",null,"loading..."))},we=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).fetchParks=function(){var e;return oe.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,oe.a.awrap(ie("parks","park"));case 3:e=t.sent,a.setState({isLoaded:!0}),a.props.addParks(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a.setState({isLoaded:!1,error:t.t0.message});case 11:case"end":return t.stop()}}),null,null,[[0,8]])},a.createCards=function(){var e=a.props,t=e.process,n=e.parks,c=t&&"search"===t.name?a.searchParks(n,t.query):a.chooseParksType(),s=c.parksForCard,o=c.type;return s.map((function(e){return r.a.createElement(fe,{key:e.id,id:e.id,image:e.images[0].url,fullName:e.fullName,name:e.name,states:e.states,type:o})}))},a.searchParks=function(e,t){return{parksForCard:e.filter((function(e){return e.name.toLowerCase().includes(t)})),type:"parks"}},a.chooseParksType=function(){var e=a.props,t=e.parks,n=e.type,r=e.plannedParks;switch(n){case"all":return{parksForCard:t,type:"parks"};case"wish":return{parksForCard:t.filter((function(e){return r.includes(e.name)})),type:"wish-list"};default:return{parksForCard:[],type:""}}},a.state={isLoaded:!1,error:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){return this.props.parks.length?this.setState({isLoaded:!0}):this.fetchParks()}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.error;return r.a.createElement("section",{className:"parks-content"},!t&&!a&&r.a.createElement(Ce,null),a&&r.a.createElement("p",null,a),t&&this.createCards())}}]),t}(n.Component),Se=Object(m.b)((function(e){return{parks:e.parks,plannedParks:e.plannedParks,process:e.process}}),(function(e){return Object(d.bindActionCreators)({addParks:C},e)}))(we),Ne=(a(83),a(84),a(23)),Ae=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.park,a=e.onClick,n=t.longitude,c=t.latitude;return r.a.createElement(Ne.b,{longitude:n,latitude:c},r.a.createElement("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){return a(t)}},r.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})))}}]),t}(n.PureComponent),xe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement("div",null,r.a.createElement("p",{className:"place"},e))}}]),t}(n.PureComponent),De={position:"absolute",top:0,left:0,padding:"10px"},_e={position:"absolute",top:36,left:0,padding:"10px"},Te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getDirection=function(){var e=a.props.latLong.replace("lat:","").replace("long:","").split(",");return{name:a.props.name,latitude:+e[0],longitude:+e[1]}},a._updateViewport=function(e){a.setState({viewport:e})},a._onClickMarker=function(e){a.setState({popupInfo:e})},a.state={viewport:{latitude:0,longitude:0,zoom:14,bearing:0,pitch:0},popupInfo:null},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.getDirection();this.setState({viewport:Object(B.a)({},this.state.viewport,{latitude:e.latitude,longitude:e.longitude})})}},{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&r.a.createElement(Ne.d,{anchor:"top",longitude:t.longitude,latitude:t.latitude,closeOnClick:!1,onClose:function(){return e.setState({popupInfo:null})}},r.a.createElement(xe,{name:t.name}))}},{key:"render",value:function(){var e=this.state.viewport,t=this.getDirection();return r.a.createElement(Ne.e,Object.assign({},e,{width:"100%",height:"25vh",mapStyle:"mapbox://styles/mapbox/outdoors-v11",onViewportChange:this._updateViewport,mapboxApiAccessToken:"pk.eyJ1IjoicmF5cmVkZ29vc2UiLCJhIjoiY2s1aWV6YWp3MDBhZjNrbmoza21zM2xnYSJ9.pobIjWmc_InU_zmap2lguQ"}),r.a.createElement(Ae,{park:t,onClick:this._onClickMarker}),this._renderPopup(),r.a.createElement("div",{style:De},r.a.createElement(Ne.a,null)),r.a.createElement("div",{style:_e},r.a.createElement(Ne.c,null)))}}]),t}(n.Component),Ie=function(e){var t=e.title,a=e.text,n=e.data;return r.a.createElement("section",{className:"widgets ".concat(t)},r.a.createElement("h3",null,t," info"),a?r.a.createElement("p",null,a):r.a.createElement("p",null,"There is no ",t," info."),"directions"===t&&r.a.createElement(Te,n))},Le=(a(86),a(53)),Re=a.n(Le),Ue=function(e){var t=e.image,a=e.fullName,n=e.url,c=e.states,s=e.description;return r.a.createElement("section",{className:"park-info"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("header",null,r.a.createElement("h2",null,a),r.a.createElement("a",{href:n},r.a.createElement("img",{src:Re.a,alt:"arrow"}))),r.a.createElement("p",{className:"location"},c),r.a.createElement("p",{className:"desc"},s))},Ve=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).findPark=function(t){var a=e.props,n=a.parks,r=a.selectPark,c=t.replace(/-/g," ");r(n.find((function(e){return e.fullName.toLowerCase()===c}))),e.setState({isLoaded:!0})},e.fetchPark=function(t){var a,n;return oe.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.replace(/-/g,"%20"),r.prev=1,r.next=4,oe.a.awrap(ie("parks",a));case 4:n=r.sent,e.props.selectPark(n[0]),e.setState({isLoaded:!0}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),e.setState({error:r.t0.message,isLoaded:!1});case 12:case"end":return r.stop()}}),null,null,[[1,9]])},e.state={isLoaded:!1},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.type;return e.parks.length?this.findPark(t):this.fetchPark(t)}},{key:"render",value:function(){var e=this.props.selectedPark,t=e.fullName,a=e.name,n=e.description,c=e.url,s=e.states,o=e.images,i=e.directionsInfo,l=e.weatherInfo,u=e.latLong;return this.state.isLoaded&&r.a.createElement("section",{className:"single-park"},r.a.createElement(Ue,Object.assign({fullName:t,url:c,states:s,description:n},{image:o[0].url})),r.a.createElement(Ie,{title:"planning"}),r.a.createElement(Ie,{title:"directions",text:i,data:{latLong:u,name:a}}),r.a.createElement(Ie,{title:"weather",text:l}))}}]),t}(n.Component),Me=Object(m.b)((function(e){return{parks:e.parks,selectedPark:e.selectedPark,plannedParks:e.plannedParks}}),(function(e){return Object(d.bindActionCreators)({selectPark:S},e)}))(Ve),Fe=(a(87),function(){return r.a.createElement("section",{className:"dashboard"},r.a.createElement("h2",null,"Please, click on tab to see information"))}),We=r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/welcome",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(f.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(F,null)}}),",",r.a.createElement(f.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Q,{Part:re})}}),r.a.createElement(f.b,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(Q,{Part:Fe})}}),r.a.createElement(f.b,{exact:!0,path:"/parks",render:function(){return r.a.createElement(Q,{Part:Se,type:"all"})}}),r.a.createElement(f.b,{exact:!0,path:"/wish-list",render:function(){return r.a.createElement(Q,{Part:Se,type:"wish"})}}),r.a.createElement(f.b,{exact:!0,path:"/parks/:park",render:function(e){var t=e.match;return r.a.createElement(Q,{Part:Me,type:t.params.park})}}),r.a.createElement(f.b,{path:"*",component:ce})),qe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addUser=function(e){a.props.addUserInfo(e),a.addUserData()},a.addUserData=function(){var e=L("planning");e&&a.props.addPlannedParks(e)},a.checkActiveTab=function(e){var t=a.props.changeActiveTab;switch(e){case"/dashboard":return t(1);case"/parks":return t(2);case"/wish-list":return t(3);case"/visited":return t(4);default:return t(0)}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=L("user"),t=window.location.pathname;e&&this.addUser(e),this.checkActiveTab(t)}},{key:"render",value:function(){return r.a.createElement("main",{className:"app"},We)}}]),t}(n.Component),ze=Object(m.b)(null,(function(e){return Object(d.bindActionCreators)({addUserInfo:P,addPlannedParks:N,changeActiveTab:w},e)}))(qe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=a(54),Ke=Object(d.combineReducers)({process:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROCESS_NAME":return Object(B.a)({},e,{name:t.name});case"ADD_PROCESS_STEP":return Object(B.a)({},e,{step:t.step});case"INCREASE_STEP":return Object(B.a)({},e,{step:e.step+1});case"ADD_PROCESS_QUERY":return Object(B.a)({},e,{query:t.query});case"REMOVE_PROCESS":return null;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER_INFO":return Object(B.a)({},e,{},t.info);default:return e}},parks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PARKS":return t.parks;default:return e}},activeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ACTIVE_TAB":return t.id;default:return e}},selectedPark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_PARK":return t.park;default:return e}},plannedParks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLANNED_PARKS":return t.parks;case"ADD_PLANNED_PARK":return[].concat(Object(I.a)(e),[t.park]);case"REMOVE_PLANNED_PARK":return e.filter((function(e){return e!==t.park}));default:return e}}}),Ye=Object(d.createStore)(Ke,Object(Je.composeWithDevTools)()),Qe=r.a.createElement(m.a,{store:Ye},r.a.createElement(W.a,null,r.a.createElement(ze,null)));s.a.render(Qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[55,1,2]]]);
//# sourceMappingURL=main.502f5040.chunk.js.map