(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{102:function(e,t,n){e.exports=n(184)},112:function(e,t,n){},114:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),c=n.n(i),r=(n(107),n(27)),l=n(11),s=n(57),p=n(21),m=n(28),d=n(29),u=n(32),h=n(31),g=(n(112),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={value:""},a}return Object(d.a)(n,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("header",{className:"searchbar",style:{position:"fixed",top:0,left:0,zIndex:110}},o.a.createElement("i",{className:"iconfont icon-taobao-line"}),o.a.createElement("div",{className:"header"},o.a.createElement(r.b,{to:"/search"},o.a.createElement("div",{className:"placeholder"},o.a.createElement("span",{className:"text iconfont icon-sousuo"},"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa")))))}}]),n}(a.Component)),f=Object(l.g)(g),E=(n(114),n(22)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"slideshow"},o.a.createElement(E.a,{autoplay:!0,infinite:!0},o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://gw.alicdn.com/imgextra/i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://gw.alicdn.com/imgextra/i3/111/O1CN01fhP0rv1CgsatV3Imq_!!111-0-lubanu.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://gw.alicdn.com/imgextra/i2/69/O1CN012kgqDf1CNdxWjfTPO_!!69-0-lubanu.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://gw.alicdn.com/imgextra/i2/87/O1CN015w4ZpM1CVt5SJMwF8_!!87-0-lubanu.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000004027/O1CN01dTRyPp1fcPaQwt7s4_!!6000000004027-0-octopus.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://gw.alicdn.com/imgextra/i2/104/O1CN010jvtis1Cdfp5OSQOA_!!104-0-lubanu.jpg",alt:""})),o.a.createElement("div",null,o.a.createElement("img",{style:{width:"100%"},src:"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",alt:""})))))}}]),n}(a.Component),x=(n(182),Object(p.b)((function(e){return{datalist:e.datalist}}))((function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],c=n[1];i||(e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e({type:"DATA",datalist:t.data})}))})),c(!i));for(var r=[],l=0;l<e.datalist.length;l++)r[l]=e.datalist[l];return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement("div",{className:"content",style:{padding:"6px"}},o.a.createElement("div",{className:"recommend-head"},o.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png",alt:""})),o.a.createElement("div",{className:"listcontent",style:{border:"none",marginTop:"5px",marginBottom:"40px"}},o.a.createElement(E.b,{data:r,columnNum:2,square:!1,hasLine:!1,itemStyle:{backgroundColor:"rgb(245,245,249)"},renderItem:function(t){return o.a.createElement("div",{className:"item"},o.a.createElement("img",{src:t.img,alt:"",onClick:function(){return e.history.push({pathname:"/page",img:t.img,id:t.id,price:t.price})}}),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"span"},o.a.createElement("span",{style:{fontSize:"13px",color:"black"}},t.title)),o.a.createElement("div",{className:"row"},o.a.createElement("span",{style:{marginLeft:"-30px",color:"red",fontSize:"11px"}}," \uffe5"),o.a.createElement("span",{style:{color:"red",fontSize:"14px",marginLeft:"5px"}},t.price),o.a.createElement("span",{style:{color:"#999999",fontSize:"11px",marginTop:"2.000004px",marginLeft:"5px"}},"43\u4eba\u5df2\u8d2d\u4e70"))))}}))))}))),y=Object(p.b)((function(e){return{userinfo:e.userinfo,shoucang:e.shoucang,datalist:e.datalist}}))((function(e){var t=e.datalist.filter((function(t){return e.shoucang.some((function(e){return e==t.id}))})),n=Object(a.useState)(t),i=Object(s.a)(n,2),c=i[0],r=i[1];return o.a.createElement("div",null,e.userinfo?o.a.createElement("div",{style:{height:"100%",marginBottom:"40px"}},o.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"#fff",marginTop:"20px",borderRadius:"20px"}},o.a.createElement("ul",null,c.map((function(n,a){return o.a.createElement("li",{style:{listStyle:"none",display:"flex",justifyContent:"flex-start"}},o.a.createElement("div",null,o.a.createElement("img",{src:n.img,style:{height:"130px",width:"130px",borderRadius:5}})),o.a.createElement("div",{style:{width:"150px",height:"130px"}},o.a.createElement("span",{style:{display:"block",marginTop:"30px",fontSize:"15px",marginLeft:"20px"}},n.title),o.a.createElement("span",{style:{display:"block",marginTop:"15px",fontSize:"16px",marginLeft:"20px",color:"red"}}," \uffe5",n.price),o.a.createElement("span",{style:{display:"block",marginLeft:"20px",fontSize:"10px",marginTop:"5px",color:"grey"}},"1000+\u4eba\u6536\u85cf ")),o.a.createElement("div",null,o.a.createElement("button",{style:{border:"none",width:"80px",height:"40px",marginTop:"50px",borderRadius:"5px",backgroundColor:"orange",color:"white"},onClick:function(){!function(n,a){console.log(a);var o=t.filter((function(e){return e.id!==n}));console.log(o),r(o);for(var i=0;i<e.shoucang.length;i++)e.shoucang[i]==n&&(e.shoucang[i]=e.shoucang[i+1],e.shoucang.pop());console.log(e.shoucang)}(n.id,a)}},"\u53d6\u6d88\u6536\u85cf")))}))))):e.history.push("/login"))})),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab",isHidden:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(E.c,{unselectedTintColor:"#949494",tintColor:"orange",barTintColor:"white"},o.a.createElement(E.c.Item,{title:"\u9996\u9875",key:"shouye",icon:o.a.createElement("i",{className:"iconfont icon-Homehomepagemenu"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-Homehomepagemenu1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),o.a.createElement(E.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucang1"}," "),title:"\u6536\u85cf",key:"shoucang",selected:"/Collection"===t,onPress:function(){e.props.history.push("/Collection")},"data-seed":"logId1"}),o.a.createElement(E.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-iconfontdingdan1"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-iconfontdingdan"}),title:"\u8ba2\u5355",key:"dingdan",selected:"/Order"===t,onPress:function(){e.props.history.push("/Order")}}),o.a.createElement(E.c.Item,{icon:o.a.createElement("i",{className:"iconfont icon-mine"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-mine-red"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"wodetaobao",selected:"/mytaobao"===t,onPress:function(){e.props.history.push("/mytaobao")}})))}}]),n}(o.a.Component),w=Object(l.g)(v),C=Object(l.g)((function(){return o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont icon-iconfontdingdan"}))})),N=Object(l.g)((function(){return o.a.createElement("div",null,o.a.createElement("i",{className:"iconfont icon-mine"}))})),j=(n(183),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).iconShouCangChange=function(){console.log(a.props.shoucang),a.props.shoucang.push(a.props.location.id),a.setState({iconShouCang:!a.state.iconShouCang,Color:!a.state.Color})},a.collection=function(){var e=a.props.location.id;0!==a.props.shoucang.length&&a.props.shoucang.map((function(t){t==e&&a.setState({iconShouCang:!a.state.iconShouCang,Color:!a.state.Color})}))},a.state={iconShouCang:!1,Color:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.iconShouCang,a=(t.Color,n?"iconfont icon-copy":"iconfont icon-shoucang"),i=n?"\u5df2\u6536\u85cf":"\u6536\u85cf";return o.a.createElement("div",{className:"show"},o.a.createElement("div",{className:"pic",onLoad:this.collection},o.a.createElement("img",{src:this.props.location.img})),o.a.createElement("div",{className:"nav-bar",style:{width:"100%",display:"flex",justifyContent:"space-between"}},o.a.createElement("button",{className:"btn",onClick:function(){return e.props.history.push("/")}},o.a.createElement("i",{className:"iconfont icon-fanhui",style:{width:"100%",top:0,fontSize:"15px"}})),o.a.createElement("button",{className:"btn"},o.a.createElement("i",{className:"iconfont icon-gouwuche1",style:{width:"100%",top:0,fontSize:"20px"}}))),o.a.createElement("div",{style:{backgroundColor:"#ffffff"}},o.a.createElement("div",{className:"price"},o.a.createElement("div",{className:"main-price"},"\uffe5",o.a.createElement("span",{className:"o-price"},this.props.location.price),o.a.createElement("span",{style:{backgroundColor:"#FFF1EB",padding:"4px",height:"14px",marginRight:"4px",borderRadius:"20px",fontSize:"9px"}},"\u5356\u5bb6\u4fc3\u9500"),o.a.createElement("span",{style:{backgroundColor:"#FFF1EB",padding:"4px",height:"14px",marginRight:"4px",borderRadius:"20px",fontSize:"9px"}},"\u6dd8\u5b9d\u5e01\u53ef\u62b50.43\u5143\u8d77")))),o.a.createElement("div",{className:"bottom-tab"},o.a.createElement("div",{className:"btn-shop",style:{width:"28px"}},o.a.createElement("i",{className:"iconfont icon-taobaodianpu",style:{fontSize:"22px",color:"#ff5000",paddingLeft:"3px"}}),o.a.createElement("span",null,"\u5e97\u94fa")),o.a.createElement("div",{className:"btn-kefu",style:{width:"28px"}},o.a.createElement("i",{className:"iconfont icon-taobaokefu-01",style:{fontSize:"22px",color:"rgb(153,153,153)",paddingLeft:"3px"}}),o.a.createElement("span",null,"\u5ba2\u670d")),o.a.createElement("div",{className:"btn-fav",style:{width:"40px"}},o.a.createElement("i",{className:a,style:{fontSize:"18px",color:this.state.Color?"rgb(255,80,0)":"grey",paddingLeft:"6px"}}),o.a.createElement("span",{onClick:function(){return e.props.userinfo?e.iconShouCangChange():e.props.history.push("/login")}}),o.a.createElement("span",null,i)),o.a.createElement("div",{className:"btn-cart"},o.a.createElement("span",{style:{backgroundColor:"#ffc500",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),o.a.createElement("span",{style:{backgroundColor:"#ff9402",borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}},"\u9886\u52b5\u8d2d\u4e70"))))}}]),n}(o.a.Component)),O=Object(p.b)((function(e){return{userinfo:e.userinfo,shoucang:e.shoucang}}))(j),k=Object(l.g)((function(e){return o.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgb(245,245,249)",position:"fixed",zIndex:"110"}},o.a.createElement("header",{style:{backgroundColor:"white",height:"45px"}},o.a.createElement("div",{style:{color:"#212121",height:"32px",display:"flex",padding:"6px 10px"}},o.a.createElement("div",{style:{color:"rgb(166,168,174)",width:"300px",lineHeight:"30px",borderRadius:"4px",backgroundColor:"#e3e3e5"}},o.a.createElement("span",{style:{marginLeft:"10px"}},"\u5b9d\u8d1d",o.a.createElement("i",{className:"iconfont icon-jiantou"})),o.a.createElement("input",{style:{border:"none",background:"none",width:"217px",height:"20px"}}),o.a.createElement("span",{style:{marginLeft:"3px"}},o.a.createElement("i",{className:"iconfont icon-search",style:{fontSize:"20px"}}))),o.a.createElement("div",{style:{marginLeft:"20px"}},o.a.createElement("div",{style:{fontSize:"12px",height:"32px",lineHeight:"32px"},onClick:function(){return e.history.goBack()}},"\u53d6\u6d88")))))})),S=n(36),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{userinfo:t.userinfo};default:return e}},T=n(83),I=[];var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if("ADD_ID"==t.type)return console.log(t),[].concat(Object(T.a)(e),[t.value]);if("DELETE_ID"==t.type){var n=Object(T.a)(e);return n.splice(t.index,1),n}return e},L=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA":var n=Object.assign({},e,{datalist:t.datalist});return n.datalist;default:return e}},B=Object(S.c)({datalist:_,shoucang:z,userinfo:X});var R=Object(S.e)(B,Object(S.d)(Object(S.a)((function(e){var t=e.getState;return function(e){return function(n){console.log("will dispatch",n);var a=e(n);return console.log("state after dispatch",t()),a}}}),(function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return console.log("thunk"),"function"===typeof a?a(t,n):e(a)}}})),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),D=Object(p.b)((function(e){return{userinfo:e.userinfo.userinfo}}))((function(e){return o.a.createElement("div",{style:{backgroundColor:"#fff",height:"1000px",zIndex:"110px"}},o.a.createElement("div",{style:{height:"391px"}},o.a.createElement("div",{style:{height:"391px",width:"335px",margin:"0 auto"}},o.a.createElement("div",{style:{height:"120px",width:"335px"}},o.a.createElement("img",{src:"https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png",style:{width:"80px",height:"80px",marginTop:"40px",marginLeft:"128.5px"}})),o.a.createElement("div",{style:{height:"171px"}},o.a.createElement("div",{style:{height:"71px"}},o.a.createElement("div",{style:{height:"31px",marginTop:"38px"}},o.a.createElement("input",{type:"text",placeholder:"\u624b\u673a\u53f7/\u90ae\u7bb1/\u4f1a\u5458\u540d",style:{width:"100%",border:"none",fontSize:"16px",height:"31px",borderBottom:"2px solid rgb(255,182,149)"}}))),o.a.createElement("div",{style:{height:"31px"}},o.a.createElement("div",{style:{height:"31px"}},o.a.createElement("input",{type:"password",placeholder:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801",style:{width:"100%",border:"none",fontSize:"16px",height:"31px",borderBottom:"2px solid rgb(255,182,149)"}}))),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement("span",null,"\u77ed\u4fe1\u9a8c\u8bc1\u7801\u767b\u5f55"))),o.a.createElement("button",{onClick:function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e({type:"LOGIN",userinfo:t.data.name})}))}))},style:{width:"100%",height:"45px",borderRadius:"22.5px 22.5px",border:"none",backgroundColor:"rgb(255,102,0)"}},o.a.createElement("span",{style:{color:"#fff",fontSize:"18px"}},"\u767b\u5f55")),e.userinfo?e.history.goBack():" ")),o.a.createElement("div",{style:{width:"100%",height:"60px",position:"fixed",bottom:0,display:"flex",zIndex:"110",backgroundColor:"white"}}))})),F=function(){return o.a.createElement(p.a,{store:R},o.a.createElement(r.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/login",component:D}),o.a.createElement(l.b,{path:"/Collection",component:y}),o.a.createElement(l.b,{path:"/order",component:C}),o.a.createElement(l.b,{path:"/mytaobao",component:N}),o.a.createElement(l.b,{path:"/page",component:O}),o.a.createElement(l.b,{path:"/search",exact:!0,component:k}),o.a.createElement(l.b,{path:"/",component:x}),o.a.createElement(l.b,{exact:!0,path:"/",component:x}),o.a.createElement(l.b,{render:function(){return o.a.createElement(l.a,{to:"/"})}})),o.a.createElement(w,null)))};c.a.render(o.a.createElement(F,null),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.a79602b1.chunk.js.map