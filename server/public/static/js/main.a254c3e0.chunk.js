(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),s=a.n(l),o=(a(75),a(6)),c=a(9),i=a(11),m=a(10),u=(a(76),a(77),a(34)),h=a(14),d=a(20),p=a(24),g=a(12),E=(a(78),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"homepage"},r.a.createElement(h.a,null,r.a.createElement(d.a,{as:"header",className:"homeHeader"},r.a.createElement(p.a,{as:"article",md:6},r.a.createElement("h1",null,"Play My Retro"),r.a.createElement("h3",null,"Where games and people meet"),r.a.createElement(g.b,{to:"/",className:"myButton"},"Get Started")),r.a.createElement(p.a,{as:"article",md:6},r.a.createElement("figure",{className:"gameController"},r.a.createElement("img",{src:"/img/game-controller.svg",alt:"gameController"})))),r.a.createElement(d.a,{as:"section",className:"works"},r.a.createElement("h1",null,"How it works!"),r.a.createElement("article",{className:"displayCard"},r.a.createElement("article",{className:"homeCard"},r.a.createElement("figure",{className:"icon"},r.a.createElement("img",{src:"/img/edit-tools.svg",alt:"signupicon"})),r.a.createElement("h4",null,"Sign Up"),r.a.createElement("p",null,"Get into our awesome comunity")),r.a.createElement("article",{className:"homeCard"},r.a.createElement("figure",{className:"icon"},r.a.createElement("img",{className:"calendar",src:"/img/calendar-day-solid.svg",alt:"createicon"})),r.a.createElement("h4",null,"Create Events"),r.a.createElement("p",null,"Create events to play videogames")),r.a.createElement("article",{className:"homeCard"},r.a.createElement("figure",{className:"icon"},r.a.createElement("img",{src:"/img/gamepad-solid.svg",alt:"playicon"})),r.a.createElement("h4",null,"Play"),r.a.createElement("p",null,"Assist to other events and play with people")),r.a.createElement("article",{className:"homeCard"},r.a.createElement("figure",{className:"icon"},r.a.createElement("img",{src:"/img/comments-solid.svg",alt:"commenticon"})),r.a.createElement("h4",null,"Comments"),r.a.createElement("p",null,"Write about events you liked most")))),r.a.createElement(d.a,{as:"section",className:"everyGame"},r.a.createElement(p.a,{as:"article",md:6},r.a.createElement("article",null,r.a.createElement("figure",{className:"composition"},r.a.createElement("img",{src:"/img/games-comp.png",alt:"compositionimg"})))),r.a.createElement(p.a,{as:"article",md:6},r.a.createElement("article",{className:"gameText"},r.a.createElement("h3",null,"Every game you want!"),r.a.createElement("p",null,"Choose a game you want and invite people to play it with you! It's simple to do, and it's a great opportunity to meet people who likes games you like!"),r.a.createElement(g.b,{to:"/events",className:"myButton"},"Create Events!"))))))}}]),a}(n.Component)),v=a(8),f=a(25),b=a.n(f),C=function e(){var t=this;Object(o.a)(this,e),this.getAllEvents=function(){return t.service.get("/getAllEvents")},this.getEvent=function(e){return t.service.get("/getEvent/".concat(e))},this.createEvent=function(e){return t.service.post("/createEvent",e)},this.removeEvent=function(e){return t.service.post("/removeEvent/".concat(e))},this.editEvent=function(e,a){return t.service.post("/editEvent/".concat(e),a)},this.getUserEvents=function(e){return t.service.get("/getuserevents/".concat(e))},this.service=b.a.create({baseURL:"".concat("https://play-my-retro.herokuapp.com/api","/events"),withCredentials:!0})},y=function(e){return r.a.createElement("article",{className:"event-card"},r.a.createElement("figure",{className:"card-img"},r.a.createElement("img",{src:e.photo,alt:"meh"})),r.a.createElement("article",{className:"card-content"},r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.platforms),r.a.createElement("p",null,e.game),r.a.createElement("div",{className:"card-buttons"},r.a.createElement(g.b,{to:"/events/".concat(e._id),className:"myButton"},"Event details"),e.loggedInUser._id===e.owner&&r.a.createElement("button",{onClick:function(){return e.removeEvent(e._id)},className:"myButton"},"Remove Event"))))},N=a(32),O=a(15),S=function e(){var t=this;Object(o.a)(this,e),this.handleAvatarUser=function(e){return t.service.post("/uploadavatar",e)},this.handlePhotoEvent=function(e){return t.service.post("/uploadevent",e)},this.service=b.a.create({baseURL:"".concat("https://play-my-retro.herokuapp.com/api","/files"),withCredentials:!0})},U=a(2),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(O.a)({},e.target.name,t))},n.handleSubmit=function(e){e.preventDefault(),n.eventService.createEvent(n.state).then((function(){return n.props.finishEventPost()})).catch((function(e){return console.log(e)}))},n.handleChecks=function(e){var t=Object(N.a)(n.state.platforms);if(e.target.checked)t.push(e.target.value),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:t}));else{var a=t.filter((function(t){return t!==e.target.value}));n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:a}))}},n.handleFileUpload=function(e){var t=new FormData;t.append("photo",e.target.files[0]),n.fileService.handlePhotoEvent(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{photo:e.data.secure_url}))})).catch((function(e){return console.log(e)}))},n.state={title:"",description:"",address:"",date:"",platforms:[],game:"",photo:"",owner:n.props.loggedInUser._id},n.eventService=new C,n.fileService=new S,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.loggedInUser),r.a.createElement(h.a,{as:"section"},r.a.createElement("h1",null,"New Event"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"title"},r.a.createElement(U.a.Label,null,"Title"),r.a.createElement(U.a.Control,{className:"input",name:"title",type:"text",value:this.state.title,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"description"},r.a.createElement(U.a.Label,null,"Description"),r.a.createElement(U.a.Control,{className:"input",name:"description",type:"textarea",value:this.state.description,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"address"},r.a.createElement(U.a.Label,null,"Address"),r.a.createElement(U.a.Control,{className:"input",name:"address",type:"text",value:this.state.address,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"date"},r.a.createElement(U.a.Label,null,"Date"),r.a.createElement(U.a.Control,{className:"input",name:"date",type:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement(U.a.Control,{as:"select"},this.props.loggedInUser.platforms.map((function(e){return r.a.createElement("option",null,e)}))),r.a.createElement(U.a.Group,{controlId:"game"},r.a.createElement(U.a.Label,null,"Game"),r.a.createElement(U.a.Control,{className:"input",name:"game",type:"text",value:this.state.game,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"photo"},r.a.createElement(U.a.Label,null,"Photo"),r.a.createElement(U.a.Control,{name:"photo",type:"file",onChange:this.handleFileUpload})),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{className:"myButton",type:"submit"},"Create Event"),r.a.createElement("button",{onClick:function(){return e.props.closeModal()},className:"myMiniButton"},"Close"))))}}]),a}(n.Component),j=a(29),k=a(50),w=(a(102),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleModal=function(t){return e.setState({modalShow:t})},e.handleToast=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(v.a)({},e.state.toast);n.show=t,n.text=a,e.setState({toast:n})},e.getAllEvents=function(){e.eventService.getAllEvents().then((function(t){return e.setState({events:t.data})})).catch((function(e){return console.log(e)}))},e.finishEventPost=function(){e.getAllEvents(),e.handleModal(!1),e.handleToast(!0,"Evento creado correctamente")},e.removeEvent=function(t){e.eventService.removeEvent(t).then((function(){e.getAllEvents()})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getAllEvents()},e.state={modalShow:!1,events:[],toast:{show:!1,text:""}},e.eventService=new C,e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"event-list"},r.a.createElement(h.a,{as:"section"},r.a.createElement("h1",null,"Check community Events!"),this.props.loggedInUser&&r.a.createElement("button",{onClick:function(){return e.handleModal(!0)},className:"myButtonBlue"},"Create new event"),r.a.createElement(d.a,{className:"event-cards"},this.state.events.map((function(t){return r.a.createElement(y,Object.assign({key:t._id},t,{loggedInUser:e.props.loggedInUser,removeEvent:function(){return e.removeEvent(t._id)}}))}))),r.a.createElement(j.a,{show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(j.a.Body,null,r.a.createElement(I,{loggedInUser:this.props.loggedInUser,finishEventPost:this.finishEventPost,closeModal:function(){return e.handleModal(!1)}}))),r.a.createElement(k.a,{onClose:function(){return e.handleToast(!1)},show:this.state.toast.show,delay:3e3,autohide:!0},r.a.createElement(k.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Message")),r.a.createElement(k.a.Body,null,this.state.toast.text))))}}]),a}(n.Component)),M=function e(){var t=this;Object(o.a)(this,e),this.getCommentsbyEvent=function(e){return t.service.get("/getcommentsbyevent/".concat(e))},this.getCommentsbyUser=function(e){return t.service.get("/getcommentsbyuser/".concat(e))},this.createComment=function(e){return t.service.post("/createcomment",e)},this.removeComment=function(e){return t.service.post("/removecomment/".concat(e))},this.service=b.a.create({baseURL:"".concat("https://play-my-retro.herokuapp.com/api","/comments"),withCredentials:!0})},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(O.a)({},e.target.name,t))},n.handleSubmit=function(e){e.preventDefault(),n.eventService.editEvent(n.props._id,n.state).then((function(){return n.props.finishEventPost()})).catch((function(e){return console.log(e)}))},n.handleChecks=function(e){var t=Object(N.a)(n.state.platforms);if(e.target.checked)t.push(e.target.value),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:t}));else{var a=t.filter((function(t){return t!==e.target.value}));n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:a}))}},n.handleFileUpload=function(e){var t=new FormData;t.append("photo",e.target.files[0]),n.fileService.handlePhotoEvent(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{photo:e.data.secure_url}))})).catch((function(e){return console.log(e)}))},n.state={title:n.props.title,description:n.props.description,address:n.props.address,date:n.props.date,platforms:n.props.platforms,game:n.props.game,photo:n.props.photo,owner:n.props.loggedInUser._id},n.eventService=new C,n.fileService=new S,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{as:"section"},r.a.createElement("h1",null,"New Event"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"title"},r.a.createElement(U.a.Label,null,"Title"),r.a.createElement(U.a.Control,{className:"input",name:"title",type:"text",value:this.state.title,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"description"},r.a.createElement(U.a.Label,null,"Description"),r.a.createElement(U.a.Control,{className:"input",name:"description",type:"textarea",value:this.state.description,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"address"},r.a.createElement(U.a.Label,null,"Address"),r.a.createElement(U.a.Control,{className:"input",name:"address",type:"text",value:this.state.address,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"date"},r.a.createElement(U.a.Label,null,"Date"),r.a.createElement(U.a.Control,{className:"input",name:"date",type:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement(U.a.Control,{as:"select"},this.props.loggedInUser.platforms.map((function(e){return r.a.createElement("option",null,e)}))),r.a.createElement(U.a.Group,{controlId:"game"},r.a.createElement(U.a.Label,null,"Game"),r.a.createElement(U.a.Control,{className:"input",name:"game",type:"text",value:this.state.game,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"photo"},r.a.createElement(U.a.Label,null,"Photo"),r.a.createElement(U.a.Control,{className:"input",name:"photo",type:"file",onChange:this.handleFileUpload})),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{className:"myButton",type:"submit"},"Edit Event"),r.a.createElement("button",{onClick:function(){return e.props.closeModal()},className:"myMiniButton"},"Close"))))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(O.a)({},e.target.name,t))},n.handleSubmit=function(e){e.preventDefault(),n.commentService.createComment(n.state).then((function(){return n.props.finishEventPost()})).catch((function(e){return console.log(e)}))},n.state={title:"",description:"",createdBy:n.props.loggedInUser._id,event:n.props.match.params.id},n.commentService=new M,n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement(h.a,{as:"section"},r.a.createElement("h1",null,"New Event"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"title"},r.a.createElement(U.a.Label,null,"Title"),r.a.createElement(U.a.Control,{className:"input",name:"title",type:"text",value:this.state.title,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"description"},r.a.createElement(U.a.Label,null,"Description"),r.a.createElement(U.a.Control,{className:"input",name:"description",type:"textarea",value:this.state.description,onChange:this.handleChange})),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{className:"myButton",type:"submit"},"Create Comment"),r.a.createElement("button",{onClick:function(){return e.props.closeModal()},className:"myMiniButton"},"Close"))))}}]),a}(n.Component),B=(a(103),function(e){return r.a.createElement("article",{className:"comment-card"},r.a.createElement("h4",null,e.title),r.a.createElement("small",null,"by: ",e.createdBy.username),r.a.createElement("p",null,e.description),e.loggedInUser._id===e.createdBy._id&&r.a.createElement("button",{onClick:function(){return e.removeComment(e._id)},className:"myButtonBlue"},"Remove Comment"))}),T=(a(104),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={avatar:n.props.avatar,username:n.props.username,friends:n.props.friends,platforms:n.props.platforms},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"owner-info-card"},r.a.createElement("figure",{className:"owner-avatar"},r.a.createElement("img",{src:this.state.avatar,alt:"avatar"})),r.a.createElement("article",{className:"owner-content"},r.a.createElement("h5",null,this.state.username),r.a.createElement("p",null,this.state.platforms)),r.a.createElement("div",{className:"form-buttons"},r.a.createElement("button",{className:"myButton"},"Add as friend"),r.a.createElement("button",{onClick:function(){return e.props.closeModal()},className:"myMiniButton"},"Close")))}}]),a}(n.Component)),_=(a(105),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleModal=function(e,t){return n.setState({modalShow:e,modalName:t})},n.handleToast=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(v.a)({},n.state.toast);a.show=e,a.text=t,n.setState({toast:a})},n.finishEventPost=function(){n.getEventInfo(),n.handleModal(!1),n.handleToast(!0,"Done!")},n.getCommentsByEvent=function(e){n.commentService.getCommentsbyEvent(e).then((function(e){return n.setState({comments:e.data})})).catch((function(e){return console.log(e)}))},n.displayModal=function(e){if(n.state.modalShow)switch(e){case"createComment":return r.a.createElement(x,Object.assign({},n.props,{finishEventPost:n.finishEventPost,loggedInUser:n.props.loggedInUser,closeModal:function(){return n.handleModal(!1)}}));case"editEvent":return r.a.createElement(L,Object.assign({},n.state,{loggedInUser:n.props.loggedInUser,finishEventPost:n.finishEventPost,closeModal:function(){return n.handleModal(!1)}}));case"ownerInfo":return r.a.createElement(T,Object.assign({},n.state.owner,{closeModal:function(){return n.handleModal(!1)}}));default:return null}},n.removeComment=function(e){n.commentService.removeComment(e).then((function(){n.getEventInfo()})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getEventInfo()},n.state={modalShow:!1,modalName:"",toast:{show:!1,text:""},comments:[],lat:"",lng:""},n.eventService=new C,n.commentService=new M,n}return Object(c.a)(a,[{key:"getEventInfo",value:function(){var e=this,t=this.props.match.params.id;this.eventService.getEvent(t).then((function(a){e.getCommentsByEvent(t),e.getOwnerInfo(a.data.owner),e.setState(a.data)})).catch((function(e){return console.log(e)}))}},{key:"getOwnerInfo",value:function(e){this.setState({owner:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"page-details"},r.a.createElement("header",{className:"details-header"},r.a.createElement("h1",null,this.state.title),r.a.createElement("h2",null,this.state.date),r.a.createElement("h2",null,this.state.game),r.a.createElement("button",{className:"myButton"},"I'm in!"),r.a.createElement("figure",{className:"details-img"},r.a.createElement("img",{src:this.state.photo,alt:this.state.title}))),r.a.createElement(h.a,null,r.a.createElement("section",{className:"details-content"},r.a.createElement("p",null,this.state.description),r.a.createElement("article",{className:"details-info"},r.a.createElement("div",{className:"elements"},r.a.createElement("h5",null,"Address"),r.a.createElement("p",null,this.state.address)),r.a.createElement("div",{className:"elements"},r.a.createElement("h5",null,"Platforms"),r.a.createElement("p",null,this.state.platforms)),r.a.createElement("div",{className:"elements"},r.a.createElement("h5",null,"Assistants"),r.a.createElement("p",null,this.state.assistants)),r.a.createElement("div",{className:"elements"},r.a.createElement("h5",null,"Owner"),this.state.owner&&r.a.createElement("p",null,this.state.owner.username))),r.a.createElement("div",{className:"details-buttons"},this.props.loggedInUser&&this.state.owner&&this.props.loggedInUser._id===this.state.owner._id&&r.a.createElement("button",{onClick:function(){return e.handleModal(!0,"editEvent")},className:"myButton"},"Edit Event"),this.props.loggedInUser?r.a.createElement("button",{onClick:function(){return e.handleModal(!0,"createComment")},className:"myButton"},"Create Comment"):null,r.a.createElement("button",{onClick:function(){return e.handleModal(!0,"ownerInfo")},className:"myButton"},"Owner Info"),r.a.createElement(g.b,{to:"/events",className:"myButton"},"Volver"))),r.a.createElement("section",{className:"comments"},this.state.comments&&this.state.comments.map((function(t){return r.a.createElement(B,Object.assign({key:t._id},t,{loggedInUser:e.props.loggedInUser,removeComment:function(){return e.removeComment(t._id)}}))}))),r.a.createElement(j.a,{className:"myModal",show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},this.displayModal(this.state.modalName)),r.a.createElement(j.a,{onClose:function(){return e.handleToast(!1)},show:this.state.toast.show,delay:3e3,autohide:!0},r.a.createElement(j.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Message")),r.a.createElement(j.a.Body,null,this.state.toast.text))))}}]),a}(n.Component)),G=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e){return t.service.post("/signup",e)},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedIn")},this.service=b.a.create({baseURL:"".concat("https://play-my-retro.herokuapp.com/api"),withCredentials:!0})},P=a(38),A=a(36),D=(a(106),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).logout=function(){n.props.setTheUser(!1),n.authService.logout()},n.state={},n.authService=new G,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(P.a,{expand:"lg"},r.a.createElement(P.a.Brand,{as:"div"},r.a.createElement(g.b,{to:"/"},"PlayMyRetro")),r.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(A.a,null,r.a.createElement(A.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/"},"Home")),r.a.createElement(A.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/events"},"Events")),this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/profile"},"Profile")),r.a.createElement(A.a.Link,{as:"div",onClick:this.logout},"Log Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/login"},"Log In")),r.a.createElement(A.a.Link,{as:"div"},r.a.createElement(g.b,{to:"/signup"},"Sign Up")))),r.a.createElement(P.a.Text,{className:"ml-auto"},"Signed in as: ",this.props.loggedInUser?this.props.loggedInUser.username:"invited"))))}}]),a}(n.Component)),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=Object(v.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(v.a)(Object(v.a)({},t),{},Object(O.a)({},r,l)),n.setState({loginInfo:t})},n.handleChecks=function(e){var t=Object(N.a)(n.state.loginInfo.platforms);if(e.target.checked)t.push(e.target.value),n.setState({loginInfo:Object(v.a)(Object(v.a)({},n.state.loginInfo),{},{platforms:t})});else{var a=t.filter((function(t){return t!==e.target.value}));n.setState({loginInfo:Object(v.a)(Object(v.a)({},n.state.loginInfo),{},{platforms:a})})}},n.handleFileUpload=function(e){var t=new FormData;t.append("avatar",e.target.files[0]),n.fileService.handleAvatarUser(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url),console.log(e.data),n.setState({loginInfo:Object(v.a)(Object(v.a)({},n.state.loginInfo),{},{avatar:e.data.secure_url})})})).catch((function(e){return console.log(e)}))},n.handleSubmit=function(e){e.preventDefault(),n.authService.signup(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:"",avatar:"",email:"",platforms:[]},errorMessage:""},n.authService=new G,n.fileService=new S,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"signup-form"},r.a.createElement(h.a,{as:"section"},r.a.createElement(d.a,null,r.a.createElement(p.a,{md:{span:4,offset:4}},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"username"},r.a.createElement(U.a.Label,null,"Username"),r.a.createElement(U.a.Control,{className:"input",name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"password"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{className:"input",name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"email"},r.a.createElement(U.a.Label,null,"Email"),r.a.createElement(U.a.Control,{className:"input",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(U.a.Label,null,"Platforms"),r.a.createElement(U.a.Check,{id:"1",name:"platforms",value:"SNES",onChange:this.handleChecks,type:"checkbox",label:"SNES"}),r.a.createElement(U.a.Check,{id:"2",name:"platforms",value:"Sega Megadrive",onChange:this.handleChecks,type:"checkbox",label:"Sega Megadrive"}),r.a.createElement(U.a.Check,{id:"3",name:"platforms",value:"Sega Saturn",onChange:this.handleChecks,type:"checkbox",label:"Sega Saturn"}),r.a.createElement(U.a.Check,{id:"4",name:"platforms",value:"Arcade",onChange:this.handleChecks,type:"checkbox",label:"Arcade"})),r.a.createElement(U.a.Group,{controlId:"img"},r.a.createElement(U.a.Label,null,"Imagen (URL)"),r.a.createElement(U.a.Control,{name:"avatar",type:"file",onChange:this.handleFileUpload})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement("button",{className:"myButton",type:"submit"},"Sign up")),r.a.createElement("p",null,r.a.createElement("small",null,"Have an account already? ",r.a.createElement(g.b,{to:"/login"},"Log In")))))))}}]),a}(n.Component),R=(a(107),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"CopyRight Aruvaro \xa92020"))}}]),a}(n.Component)),H=a(69),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=Object(v.a)({},n.state.loginInfo),a=e.target,r=a.name,l=a.value;t=Object(v.a)(Object(v.a)({},t),{},Object(O.a)({},r,l)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/")})).catch((function(e){return n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new G,n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"login-form"},r.a.createElement(h.a,{as:"section"},r.a.createElement(d.a,null,r.a.createElement(p.a,{md:{span:4,offset:4}},r.a.createElement("h1",null,"Login"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"username"},r.a.createElement(U.a.Label,null,"Username"),r.a.createElement(U.a.Control,{className:"input",name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"password"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{className:"input",name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(H.a,{className:"myButton",type:"submit"},"Log In")),r.a.createElement("p",null,r.a.createElement("small",null,"Don't you have an account? ",r.a.createElement(g.b,{to:"/signup"},"Sign Up")))))))}}]),a}(n.Component),W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("article",{className:"user-data"},r.a.createElement("figure",{className:"avatar-img"},r.a.createElement("img",{src:e.loggedInUser.avatar,alt:"avatar"})),r.a.createElement("h4",null,e.loggedInUser.username),r.a.createElement("small",null,e.loggedInUser.email),r.a.createElement("p",null,e.loggedInUser.platforms)),r.a.createElement("article",{className:"profile-buttons"},r.a.createElement(g.b,{to:"/profile/edit",className:"nav-button"},"Edit profile"),r.a.createElement(g.b,{to:"/profile/friends",className:"nav-button"},"My friends"),r.a.createElement(g.b,{to:"/profile/events/getuserevents",className:"nav-button"},"My Events")))},J=(a(108),a(109),function(e){return r.a.createElement("main",{className:"profile-home"},r.a.createElement("h1",null,"Welcome, ",e.loggedInUser.username),r.a.createElement("p",null,"This is your personal profile"))}),V=(a(110),function(e){return r.a.createElement("article",{className:"user-event-card"},r.a.createElement("figure",{className:"event-img"},r.a.createElement("img",{src:e.photo,alt:"meh"})),r.a.createElement("article",{className:"event-content"},r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"event-buttons"},r.a.createElement(g.b,{to:"/events/".concat(e._id),className:"myButton"},"Event details"),e.loggedInUser._id===e.owner&&r.a.createElement("button",{onClick:function(){return e.removeEvent(e._id)},className:"myButton"},"Remove Event"))))}),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).removeEvent=function(e){n.eventService.removeEvent(e).then((function(){n.getMyEvents()})).catch((function(e){return console.log(e)}))},n.state={events:[]},n.eventService=new C,n}return Object(c.a)(a,[{key:"getMyEvents",value:function(){var e=this;this.eventService.getUserEvents(this.props.loggedInUser._id).then((function(t){return e.setState({events:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getMyEvents()}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{className:"event-cards"},this.state.events.map((function(t){return r.a.createElement(V,Object.assign({key:t._id},t,{loggedInUser:e.props.loggedInUser,removeEvent:function(){return e.removeEvent(t._id)}}))})))}}]),a}(n.Component),K=function e(){var t=this;Object(o.a)(this,e),this.editUser=function(e,a){return t.service.post("/editUser/".concat(e),a)},this.getUser=function(e){return t.service.get("/getuser/".concat(e))},this.service=b.a.create({baseURL:"".concat("https://play-my-retro.herokuapp.com/api","/users"),withCredentials:!0})},Q=(a(111),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;n.setState(Object(O.a)({},e.target.name,t))},n.handleSubmit=function(e){e.preventDefault(),n.userService.editUser(n.props.loggedInUser._id,n.state).then((function(e){return n.props.setTheUser(e.data)})).catch((function(e){return console.log(e)}))},n.handleChecks=function(e){var t=Object(N.a)(n.state.platforms);if(e.target.checked)t.push(e.target.value),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:t}));else{var a=t.filter((function(t){return t!==e.target.value}));n.setState(Object(v.a)(Object(v.a)({},n.state),{},{platforms:a}))}},n.handleFileUpload=function(e){var t=new FormData;t.append("photo",e.target.files[0]),n.fileService.handlePhotoEvent(t).then((function(e){console.log("Subida de archivo finalizada! La URL de Cloudinray es: ",e.data.secure_url),n.setState(Object(v.a)(Object(v.a)({},n.state),{},{avatar:e.data.secure_url}))})).catch((function(e){return console.log(e)}))},n.state={avatar:n.props.loggedInUser.avatar,username:n.props.loggedInUser.username,email:n.props.loggedInUser.email,platforms:n.props.loggedInUser.platforms},n.fileService=new S,n.userService=new K,n}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("main",{className:"edit-form"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("hr",null),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"username"},r.a.createElement(U.a.Label,null,"Username"),r.a.createElement(U.a.Control,{className:"input",name:"username",type:"text",value:this.state.username,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"email"},r.a.createElement(U.a.Label,null,"Username"),r.a.createElement(U.a.Control,{className:"input",name:"email",type:"text",value:this.state.email,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(U.a.Label,null,"Platforms"),r.a.createElement(U.a.Check,{id:"1",name:"platforms",value:"SNES",onChange:this.handleChecks,type:"checkbox",label:"SNES"}),r.a.createElement(U.a.Check,{id:"2",name:"platforms",value:"Sega Megadrive",onChange:this.handleChecks,type:"checkbox",label:"Sega Megadrive"}),r.a.createElement(U.a.Check,{id:"3",name:"platforms",value:"Sega Saturn",onChange:this.handleChecks,type:"checkbox",label:"Sega Saturn"}),r.a.createElement(U.a.Check,{id:"4",name:"platforms",value:"Arcade",onChange:this.handleChecks,type:"checkbox",label:"Arcade"})),r.a.createElement(U.a.Group,{controlId:"img"},r.a.createElement(U.a.Label,null,"Avatar (URL)"),r.a.createElement(U.a.Control,{name:"avatar",type:"file",onChange:this.handleFileUpload})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement("button",{className:"myButton",type:"submit"},"Edit")))}}]),a}(n.Component)),X=(a(112),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={user:{}},n.service=new K,n}return Object(c.a)(a,[{key:"getUser",value:function(){var e=this;this.service.getUser(this.props.loggedInUser._id).then((function(t){return e.setState({user:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){return r.a.createElement("article",{className:"friends-card"},this.state.user.friends&&this.state.user.friends.map((function(e){return r.a.createElement("article",{className:"friends-avatar"},r.a.createElement("figure",{className:"card-img"},r.a.createElement("img",{src:e.avatar,alt:"meh"})),r.a.createElement("article",{className:"friends-content"},r.a.createElement("h4",null,e.username)))})))}}]),a}(n.Component)),Y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"display-profile"},r.a.createElement("section",{className:"profileNav"},r.a.createElement(W,Object.assign({},e,{loggedInUser:e.loggedInUser}))),r.a.createElement("section",{className:"profile-content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/profile",exact:!0,render:function(){return r.a.createElement(J,{loggedInUser:e.loggedInUser})}}),r.a.createElement(u.a,{path:"/profile/edit",render:function(){return r.a.createElement(Q,Object.assign({},e,{setTheUser:e.setTheUser,loggedInUser:e.loggedInUser}))}}),r.a.createElement(u.a,{path:"/profile/events/getuserevents",exact:!0,render:function(){return r.a.createElement(q,{loggedInUser:e.loggedInUser})}}),r.a.createElement(u.a,{path:"/profile/friends",render:function(){return r.a.createElement(X,{loggedInUser:e.loggedInUser})}})))))},Z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado",e.state)}))},e.fetchUser=function(){null===e.state.loggedInUser&&e.authService.isLoggedIn().then((function(t){return e.setTheUser(t.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new G,e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(E,null)}}),r.a.createElement(u.a,{path:"/events",exact:!0,render:function(){return r.a.createElement(w,{loggedInUser:e.state.loggedInUser})}}),r.a.createElement(u.a,{path:"/events/createEvent",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(u.a,{path:"/signup",render:function(t){return r.a.createElement(F,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(u.a,{path:"/login",render:function(t){return r.a.createElement(z,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(u.a,{path:"/profile",render:function(t){return e.state.loggedInUser?r.a.createElement(Y,Object.assign({},t,{setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser})):r.a.createElement(z,Object.assign({},t,{setTheUser:e.setTheUser}))}}),r.a.createElement(u.a,{path:"/events/:id",exact:!0,render:function(t){return r.a.createElement(_,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}})),r.a.createElement(R,null))}}]),a}(n.Component);s.a.render(r.a.createElement(g.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null))),document.getElementById("root"))},70:function(e,t,a){e.exports=a(113)},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.a254c3e0.chunk.js.map