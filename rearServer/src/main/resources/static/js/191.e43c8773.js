"use strict";(self["webpackChunkPandoraNext_TokensTool"]=self["webpackChunkPandoraNext_TokensTool"]||[]).push([[191],{5191:function(e,l,a){a.r(l),a.d(l,{default:function(){return De}});var o=a(2876),n=(a(492),a(5185)),t=(a(3349),a(6907)),u=(a(4746),a(5267)),r=(a(1645),a(7630)),s=(a(7034),a(3164)),d=(a(6335),a(157)),i=(a(1897),a(4188)),m=(a(9846),a(6252)),c=a(2262),p=a(3577),v=a(1094),w=a(5781),h=a(2201),g=a(6154),k=a(451),_=a(1348),f=a(844),b=a(9288),y=a(2534),V=a(3028);const W={class:"content"},T=(0,m._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),x=(0,m._)("div",{class:"flex-grow"},null,-1),U=(0,m._)("a",{href:"https://github.com/Yanyutin753/PandoraNext-TokensTool"},"TokensTool地址",-1),S={style:{display:"block",transform:"translate(5vw, 2.5vh)"}},z={class:"flex items-center"},O=(0,m._)("span",{class:"text-large font-600 mr-3"},"PandoraNext",-1),H=(0,m._)("span",{class:"text-sm mr-2",style:{color:"var(--el-text-color-regular)"}}," TokensTool ",-1),P={class:"under"},A={class:"search"},$={style:{display:"flex",margin:"0px 0px -17px 0px"}},N={style:{display:"flex",width:"83vw",height:"83%",transform:"translateX(0vw)"}},q={style:{display:"flex","align-items":"center"}},C={style:{"margin-left":"7px"}},D=(0,m._)("div",{style:{display:"flex","margin-top":"3vh"}},null,-1),B=(0,m.uE)('<div class="bottom-component"><div style="text-align:center;transform:translateY(0vh);"><h2> 获取token <a href="https://chat.OpenAI.com/api/auth/session">官网地址 </a><br><a href="https://ai.fakeopen.com/auth">Pandora地址</a> 欢迎大家来扩展 <a href="https://github.com/Yanyutin753/PandoraNext-TokensTool">pandoraNext-TokensTool v0.1.0 </a></h2></div><br></div>',1),j={style:{display:"block"}},Z=(0,m._)("br",null,null,-1),I=(0,m._)("br",null,null,-1),Y=(0,m._)("br",null,null,-1),M={key:0},K=(0,m._)("br",null,null,-1),E=(0,m._)("br",null,null,-1),J={key:1},F=(0,m._)("br",null,null,-1),L=(0,m._)("br",null,null,-1),R=(0,m._)("br",null,null,-1),Q={style:{margin:"5.2px"}},X=(0,m._)("br",null,null,-1),G={style:{display:"block"}},ee=(0,m._)("br",null,null,-1),le=(0,m._)("br",null,null,-1),ae=(0,m._)("br",null,null,-1),oe=(0,m._)("br",null,null,-1),ne=(0,m._)("br",null,null,-1),te={key:0},ue=(0,m._)("br",null,null,-1),re={key:0},se=(0,m._)("br",null,null,-1),de={key:1},ie=(0,m._)("br",null,null,-1),me=(0,m._)("br",null,null,-1),ce={style:{margin:"5.2px"}},pe=(0,m._)("br",null,null,-1),ve={style:{display:"block"}},we=(0,m._)("br",null,null,-1),he=(0,m._)("br",null,null,-1),ge=(0,m._)("br",null,null,-1),ke=(0,m._)("br",null,null,-1),_e=(0,m._)("br",null,null,-1),fe=(0,m._)("br",null,null,-1),be=(0,m._)("br",null,null,-1),ye=(0,m._)("br",null,null,-1),Ve=(0,m._)("br",null,null,-1),We=(0,m._)("br",null,null,-1),Te={style:{display:"block"}},xe=(0,m._)("br",null,null,-1),Ue=(0,m._)("br",null,null,-1),Se=(0,m._)("br",null,null,-1),ze=(0,m._)("br",null,null,-1),Oe=(0,m._)("br",null,null,-1),He=(0,m._)("br",null,null,-1),Pe=(0,m._)("br",null,null,-1),Ae=(0,m._)("br",null,null,-1),$e={style:{margin:"5.2px"}},Ne=(0,m._)("br",null,null,-1);var qe=(0,m.aZ)({__name:"homeIphone",setup(e){const l=(0,c.iH)(!0),a=(0,c.iH)(!1),qe=(0,c.iH)(!1),Ce=(0,c.iH)(!1),De=(0,c.iH)(!1),Be=(0,c.iH)(!1),je=k,Ze=(0,h.tv)(),Ie=(0,c.iH)(""),Ye=(0,c.iH)(""),Me=(0,c.iH)(""),Ke=(0,c.iH)(!1),Ee=(0,c.iH)(""),Je=(0,c.iH)(""),Fe=(0,c.iH)(""),Le=(0,c.iH)(""),Re=(0,c.iH)(""),Qe=(0,c.iH)(""),Xe=(0,c.iH)(""),Ge=(0,c.iH)(!1),el=(0,c.iH)(!1),ll=(0,c.iH)(!1),al=(0,c.iH)(),ol=(0,c.iH)([]),nl=(0,c.iH)(""),tl=(0,c.iH)(""),ul=(0,c.iH)(""),rl=(0,c.iH)(""),sl=(0,c.iH)(!1),dl=(0,c.iH)(!1),il=(0,c.iH)(!1),ml=(0,c.iH)("");var cl=.1*window.innerHeight,pl=.852*window.innerWidth;console.log(window.innerHeight.toString());const vl=(0,c.iH)({x:pl,y:cl}),wl=(0,c.iH)(""),hl=localStorage.getItem("jwtToken");hl||Ze.replace("/login");const gl={Authorization:`Bearer ${hl}`},kl=()=>{g.Z.post("/api/loginToken?token="+hl).then((e=>{if(0==e.data.code)return console.error(e.data.data),void Ze.replace("/login");console.log(e.data.data)})).catch((e=>{console.error("请求loginToken接口失败",e),Ze.replace("/login")}))},_l=e=>{a.value=!0,fl(e),l.value=!1},fl=async e=>{try{const l=await g.Z.get(`/api/seleteToken?name=${e}`,{headers:gl}),a=l.data.data;if(console.log(a),Array.isArray(a)){const e=a.map((e=>({name:e.name,username:e.username,userPassword:e.userPassword,token:e.token,shared:e.shared,show_user_info:e.show_user_info,password:e.password,plus:e.plus,updateTime:e.updateTime})));ol.value=e}}catch(l){console.error("获取数据失败",l),(0,_.z8)("获取数据失败")}a.value=!1};(0,m.bv)((()=>{kl(),_l(wl.value)}));const bl=(0,c.iH)("-1"),yl=(e,l)=>{console.log(e,l)},Vl=(e,l)=>{console.log(e,l),Le.value=l.name,console.log(Le.value),Qe.value=l.username,Xe.value=l.userPassword,Re.value=l.token,Ge.value=l.shared,el.value=l.show_user_info,ll.value=l.plus,al.value=l.password,qe.value=!0},Wl=()=>{Ce.value=!0},Tl=()=>{const e=V.kN.service({fullscreen:!0}),l=new Date,a=`${l.getFullYear()}-${(l.getMonth()+1).toString().padStart(2,"0")}-${l.getDate().toString().padStart(2,"0")} ${l.getHours().toString().padStart(2,"0")}:${l.getMinutes().toString().padStart(2,"0")}:${l.getSeconds().toString().padStart(2,"0")}`;""!=ml.value&&(sl.value=!1,dl.value=!1,il.value=!1);let o={name:nl.value,token:rl.value,username:tl.value,userPassword:ul.value,shared:sl.value,show_user_info:dl.value,plus:il.value,password:ml.value,updateTime:a};if(""!==o.password&&!0===o.shared)return(0,_.z8)("shared的token是不能设置密码的，请重新再试！"),void e.close();fetch("/api/addToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${hl}`},body:JSON.stringify(o)}).then((e=>e.json())).then((e=>{1==e.code?(console.log(e.data),""==o.token&&(o.token=e.data,(0,_.z8)("添加成功！已为你自动装填token")),ol.value.unshift(o),(0,_.z8)(e.data)):(0,_.z8)(e.msg)})).catch((e=>{console.error("请求addToken接口失败",e),(0,_.z8)("添加失败！")})),Le.value="",Qe.value="",Xe.value="",Re.value="",Ce.value=!1,e.close()},xl=e=>{Le.value=e.name,Qe.value=e.username,Xe.value=e.userPassword,Re.value=e.token,Ge.value=e.shared,el.value=e.show_user_info,ll.value=e.plus,al.value=e.password,De.value=!0},Ul=async()=>{const e=await g.Z.get("/api/selectSetting",{headers:gl}),l=e.data.data;console.log(l),Ie.value=l.bing,Ye.value=l.timeout,Me.value=l.proxy_url,Ke.value=l.public_share,Ee.value=l.site_password,Je.value=l.setup_password,console.log(l.whitelist),null==l.whitelist?Fe.value="null":Fe.value=l.whitelist,Be.value=!0},Sl=()=>{const e=V.kN.service({fullscreen:!0});null!=Fe.value&&"null"!=Fe.value||(Fe.value="");const l={bing:Ie.value,timeout:Ye.value,proxy_url:Me.value,public_share:Ke.value,site_password:Ee.value,setup_password:Je.value,whitelist:Fe.value};fetch("/api/requireSetting",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${hl}`},body:JSON.stringify(l)}).then((e=>e.json())).then((e=>{1==e.code?(console.log(e.data),(0,_.z8)(e.data)):(0,_.z8)(e.msg)})).catch((e=>{console.error("请求requireSetting接口失败",e),(0,_.z8)("修改失败！")})),Be.value=!1,e.close()},zl=()=>{const e=V.kN.service({fullscreen:!0}),l=new Date,a=`${l.getFullYear()}-${(l.getMonth()+1).toString().padStart(2,"0")}-${l.getDate().toString().padStart(2,"0")} ${l.getHours().toString().padStart(2,"0")}:${l.getMinutes().toString().padStart(2,"0")}:${l.getSeconds().toString().padStart(2,"0")}`;""!=al.value&&!1===Ge.value?(ll.value=!1,el.value=!1):!0!==Ge.value&&""!=al.value||(al.value="",Ge.value=!0);const o={name:Le.value,token:Re.value,username:Qe.value,userPassword:Xe.value,shared:Ge.value,show_user_info:el.value,plus:ll.value,password:al.value};fetch("/api/requiredToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${hl}`},body:JSON.stringify(o)}).then((e=>e.json())).then((e=>{if(1==e.code){console.log(e.data),(0,_.z8)(e.data),console.log(ol.value);for(let e=0;e<ol.value.length;e++)if(console.log(ol.value[e].name),ol.value[e].name===Le.value){ol.value[e].token=o.token,ol.value[e].username=o.username,ol.value[e].userPassword=o.userPassword,ol.value[e].shared=o.shared,ol.value[e].show_user_info=o.show_user_info,ol.value[e].plus=o.plus,ol.value[e].password=o.password,ol.value[e].updateTime=a;break}}else(0,_.z8)(e.msg)})).catch((e=>{console.error("请求requireToken接口失败",e),(0,_.z8)("修改失败！")})),qe.value=!1,e.close()},Ol=async()=>{const e=V.kN.service({fullscreen:!0}),l=await g.Z.get("/api/open",{headers:gl}),a=l.data.data;console.log(a),null!=a&&""!=a?f.T.alert(a,"温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}}):(0,_.z8)(l.data.msg),e.close()},Hl=async()=>{const e=V.kN.service({fullscreen:!0}),l=await g.Z.get("/api/close",{headers:gl}),a=l.data.data;console.log(a),null!=a&&""!=a?f.T.alert(a,"温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}}):(0,_.z8)(l.data.msg),e.close()},Pl=async()=>{const e=V.kN.service({fullscreen:!0}),l=await g.Z.get("/api/restart",{headers:gl}),a=l.data.data;console.log(a),null!=a&&""!=a?f.T.alert(a,"温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}}):(0,_.z8)(l.data.msg),e.close()},Al=async()=>{const e=V.kN.service({fullscreen:!0}),l=await g.Z.get("/api/reload",{headers:gl}),a=l.data.data;console.log(a),null!=a&&""!=a?f.T.alert(a,"温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}}):(0,_.z8)(l.data.msg),e.close()},$l=e=>{const l=V.kN.service({fullscreen:!0});console.log(e),console.log(e.token);const a={name:e.name,token:e.token,username:e.username,userPassword:e.userPassword,shared:e.shared,show_user_info:e.show_user_info,plus:e.plus,password:e.password};fetch("/api/updateToken",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${hl}`},body:JSON.stringify(a)}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((l=>{if(null!=l&&""!=l){e.token=l.data;const a=new Date,o=`${a.getFullYear()}-${(a.getMonth()+1).toString().padStart(2,"0")}-${a.getDate().toString().padStart(2,"0")} ${a.getHours().toString().padStart(2,"0")}:${a.getMinutes().toString().padStart(2,"0")}:${a.getSeconds().toString().padStart(2,"0")}`;e.updateTime=o,f.T.alert("更新成功!","温馨提醒",{confirmButtonText:"OK",callback:()=>{(0,_.z8)({type:"info",message:"感谢Pandora大佬！"})}})}else(0,_.z8)(l.msg)})).catch((e=>{console.error("Error:",e)})),l.close()},Nl=(e,l)=>{const a=V.kN.service({fullscreen:!0});let o="";f.T.confirm("您确定要删除这个Token吗，删除之后就找不到咯，请您要仔细认真考虑哦！","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{g.Z.put(`/api/deleteToken?name=${l.name}`,null,{headers:gl}).then((l=>{o="删除成功！",console.log(l.data.data),ol.value.splice(e,1),(0,_.z8)({type:"success",message:o})})).catch((e=>{console.error("删除失败",e)}))})).catch((()=>{(0,_.z8)({type:"info",message:"删除取消！"})})),a.close()},ql=e=>{if(!e)return"";var l=new Date;const a=(0,b.Z)(e),o=(0,y.Z)(l,a);return o>=10?"已经过去了至少10天":Math.ceil(10-o)+"天"},Cl=e=>e.substring(0,40)+"...",Dl=()=>{localStorage.removeItem("jwtToken"),Ze.replace("/login")};return(e,a)=>{const h=(0,m.up)("el-menu-item"),g=(0,m.up)("el-sub-menu"),k=(0,m.up)("el-menu"),_=(0,m.up)("el-avatar"),f=(0,m.up)("el-tag"),b=(0,m.up)("el-page-header"),y=i.e$,V=d.ol,Ze=(0,m.up)("el-icon"),cl=(0,m.up)("el-table-column"),pl=(0,m.up)("el-popover"),hl=(0,m.up)("el-button"),gl=(0,m.up)("el-table"),kl=s.gN,fl=r.rs,Bl=u.TS,jl=t.zx,Zl=n.l0,Il=o.Vq,Yl=(0,m.Q2)("loading");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m._)("div",W,[T,(0,m.Wm)(k,{"default-active":bl.value,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:yl,"active-text-color":"#0ea27e","text-color":"#0ea27e"},{default:(0,m.w5)((()=>[(0,m.Wm)(h,null,{default:(0,m.w5)((()=>[(0,m._)("img",{style:{width:"30px"},src:v,alt:"Element logo",onClick:a[0]||(a[0]=(...l)=>e.acc&&e.acc(...l))})])),_:1}),x,(0,m.Wm)(h,{index:"1"},{default:(0,m.w5)((()=>[U])),_:1}),(0,m.Wm)(g,{index:"4"},{title:(0,m.w5)((()=>[(0,m.Uk)("系统设置")])),default:(0,m.w5)((()=>[(0,m.Wm)(h,{index:"4-1",onClick:Ol},{default:(0,m.w5)((()=>[(0,m.Uk)("开启PandoraNext")])),_:1}),(0,m.Wm)(h,{index:"4-2",onClick:Hl},{default:(0,m.w5)((()=>[(0,m.Uk)("暂停PandoraNext")])),_:1}),(0,m.Wm)(h,{index:"4-3",onClick:Pl},{default:(0,m.w5)((()=>[(0,m.Uk)("重启PandoraNext")])),_:1}),(0,m.Wm)(h,{index:"4-3",onClick:Al},{default:(0,m.w5)((()=>[(0,m.Uk)("重载PandoraNext")])),_:1}),(0,m.Wm)(h,{index:"4-4",onClick:Ul},{default:(0,m.w5)((()=>[(0,m.Uk)("PandoraNext参数设置")])),_:1}),(0,m.Wm)(h,{index:"4-5",onClick:Dl},{default:(0,m.w5)((()=>[(0,m.Uk)("退出登录")])),_:1})])),_:1})])),_:1},8,["default-active"]),(0,m._)("div",S,[(0,m.Wm)(b,{icon:null,title:" "},{content:(0,m.w5)((()=>[(0,m._)("div",z,[(0,m.Wm)(_,{size:"52.6px",class:"mr-3",src:(0,c.SU)(je)},null,8,["src"]),O,H,(0,m.Wm)(f,null,{default:(0,m.w5)((()=>[(0,m.Uk)("By YY")])),_:1})])])),_:1})]),(0,m.Wm)(y,{offset:vl.value,"onUpdate:offset":a[1]||(a[1]=e=>vl.value=e),axis:"xy",icon:"add-o",onClick:Wl},null,8,["offset"]),(0,m._)("div",P,[(0,m._)("div",A,[(0,m._)("div",$,[(0,m.Wm)(V,{modelValue:wl.value,"onUpdate:modelValue":a[2]||(a[2]=e=>wl.value=e),shape:"round",placeholder:"请输入搜索token名称关键词",onSearch:_l},null,8,["modelValue"])]),(0,m._)("div",N,[(0,m.wy)(((0,m.wg)(),(0,m.j4)(gl,{data:ol.value,style:{width:"100%"},height:"100%"},{default:(0,m.w5)((()=>[(0,m.Wm)(cl,{label:"名称",width:"126"},{default:(0,m.w5)((e=>[(0,m._)("div",q,[(0,m.Wm)(Ze,null,{default:(0,m.w5)((()=>[(0,m.Wm)((0,c.SU)(w.B7y))])),_:1}),(0,m._)("span",C,(0,p.zw)(e.row.name),1)])])),_:1}),(0,m.Wm)(cl,{label:"账号信息",width:"300"},{default:(0,m.w5)((e=>[(0,m.Wm)(pl,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,m.w5)((()=>[(0,m._)("div",null,"账号: "+(0,p.zw)(e.row.username),1),(0,m._)("div",null,"密码: "+(0,p.zw)(e.row.userPassword),1)])),reference:(0,m.w5)((()=>[(0,m.Wm)(f,null,{default:(0,m.w5)((()=>[(0,m.Uk)((0,p.zw)(e.row.username),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,m.Wm)(cl,{label:"Token值",width:"318"},{default:(0,m.w5)((e=>[(0,m.Wm)(pl,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,m.w5)((()=>[(0,m._)("div",null,"token: "+(0,p.zw)(e.row.token),1)])),reference:(0,m.w5)((()=>[(0,m.Wm)(f,null,{default:(0,m.w5)((()=>[(0,m.Uk)((0,p.zw)(Cl(e.row.token)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,m.Wm)(cl,{label:"有效时间",width:"167"},{default:(0,m.w5)((e=>[(0,m.Wm)(pl,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:(0,m.w5)((()=>[(0,m._)("div",null,"注册时间："+(0,p.zw)(e.row.updateTime),1)])),reference:(0,m.w5)((()=>[(0,m.Wm)(f,null,{default:(0,m.w5)((()=>[(0,m.Uk)("距离过期还有："+(0,p.zw)(ql(e.row.updateTime)),1)])),_:2},1024)])),_:2},1024)])),_:1}),(0,m.Wm)(cl,{label:"操作方法",width:"288"},{default:(0,m.w5)((e=>[(0,m.Wm)(hl,{size:"small",onClick:l=>Vl(e.$index,e.row)},{default:(0,m.w5)((()=>[(0,m.Uk)("编辑")])),_:2},1032,["onClick"]),(0,m.Wm)(hl,{size:"small",type:"primary",onClick:l=>xl(e.row)},{default:(0,m.w5)((()=>[(0,m.Uk)("查看")])),_:2},1032,["onClick"]),(0,m.Wm)(hl,{size:"small",type:"danger",onClick:l=>Nl(e.$index,e.row)},{default:(0,m.w5)((()=>[(0,m.Uk)("删除")])),_:2},1032,["onClick"]),(0,m.Wm)(hl,{size:"small",type:"success",onClick:l=>$l(e.row)},{default:(0,m.w5)((()=>[(0,m.Uk)("刷新")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[Yl,l.value]])]),D]),B])]),(0,m.Wm)(Il,{show:qe.value,"onUpdate:show":a[11]||(a[11]=e=>qe.value=e),title:"修改token信息",width:"90vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireTokenDialog"},{default:(0,m.w5)((()=>[(0,m._)("div",j,[(0,m.Wm)(Zl,{onSubmit:a[10]||(a[10]=e=>zl())},{default:(0,m.w5)((()=>[(0,m.Wm)(Bl,{inset:""},{default:(0,m.w5)((()=>[Z,(0,m.Wm)(kl,{modelValue:Qe.value,"onUpdate:modelValue":a[3]||(a[3]=e=>Qe.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),I,(0,m.Wm)(kl,{modelValue:Xe.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Xe.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),Y,(0,m.Wm)(kl,{name:"switch",label:"是否分享出来"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:Ge.value,"onUpdate:modelValue":a[5]||(a[5]=e=>Ge.value=e)},null,8,["modelValue"])])),_:1}),1==Ge.value?((0,m.wg)(),(0,m.iD)("div",M,[K,(0,m.Wm)(kl,{name:"switch",label:"是否分享聊天记录"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:el.value,"onUpdate:modelValue":a[6]||(a[6]=e=>el.value=e)},null,8,["modelValue"])])),_:1}),E,(0,m.Wm)(kl,{name:"switch",label:"是否显示金光"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:ll.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ll.value=e)},null,8,["modelValue"])])),_:1})])):(0,m.kq)("",!0),0==Ge.value?((0,m.wg)(),(0,m.iD)("div",J,[F,(0,m.Wm)(kl,{modelValue:al.value,"onUpdate:modelValue":a[8]||(a[8]=e=>al.value=e),type:"temPassword",name:"进入Token的密码",label:"进入Token的密码",placeholder:"填了将不会分享给他人！",rules:[{required:!0,message:"如不分享token,则该项必填"}]},null,8,["modelValue"])])):(0,m.kq)("",!0),L,(0,m.Wm)(kl,{modelValue:Re.value,"onUpdate:modelValue":a[9]||(a[9]=e=>Re.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"5000",placeholder:"请填写OpenAi的Token(选填)","show-word-limit":""},null,8,["modelValue"]),R])),_:1}),(0,m._)("div",Q,[(0,m.Wm)(jl,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" 提交 ")])),_:1})])])),_:1})]),X])),_:1},8,["show"]),(0,m.Wm)(Il,{show:Ce.value,"onUpdate:show":a[21]||(a[21]=e=>Ce.value=e),title:"添加token信息",width:"90vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"addTokenDialog"},{default:(0,m.w5)((()=>[(0,m._)("div",G,[(0,m.Wm)(Zl,{onSubmit:a[20]||(a[20]=e=>Tl())},{default:(0,m.w5)((()=>[(0,m.Wm)(Bl,{inset:""},{default:(0,m.w5)((()=>[ee,(0,m.Wm)(kl,{modelValue:nl.value,"onUpdate:modelValue":a[12]||(a[12]=e=>nl.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),le,(0,m.Wm)(kl,{modelValue:tl.value,"onUpdate:modelValue":a[13]||(a[13]=e=>tl.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),ae,(0,m.Wm)(kl,{modelValue:ul.value,"onUpdate:modelValue":a[14]||(a[14]=e=>ul.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),oe,(0,m.Wm)(kl,{rows:"3",type:"textarea",maxlength:"5000","show-word-limit":"",modelValue:rl.value,"onUpdate:modelValue":a[15]||(a[15]=e=>rl.value=e),name:"OpenAI的token",label:"OpenAI的token",placeholder:"选填(可不填,不填则使用账号密码)access token/session token/refresh token/share token"},null,8,["modelValue"]),ne,""==ml.value?((0,m.wg)(),(0,m.iD)("div",te,[(0,m.Wm)(kl,{name:"switch",label:"是否分享出来"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:sl.value,"onUpdate:modelValue":a[16]||(a[16]=e=>sl.value=e)},null,8,["modelValue"])])),_:1}),ue,1==sl.value?((0,m.wg)(),(0,m.iD)("div",re,[(0,m.Wm)(kl,{name:"switch",label:"是否分享聊天记录"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:dl.value,"onUpdate:modelValue":a[17]||(a[17]=e=>dl.value=e)},null,8,["modelValue"])])),_:1}),se,(0,m.Wm)(kl,{name:"switch",label:"是否显示金光"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:il.value,"onUpdate:modelValue":a[18]||(a[18]=e=>il.value=e)},null,8,["modelValue"])])),_:1})])):(0,m.kq)("",!0)])):(0,m.kq)("",!0),""==sl.value?((0,m.wg)(),(0,m.iD)("div",de,[ie,(0,m.Wm)(kl,{modelValue:ml.value,"onUpdate:modelValue":a[19]||(a[19]=e=>ml.value=e),type:"temPassword",name:"进入Token的密码",label:"进入Token的密码",placeholder:"填了将不会分享给他人！",rules:[{required:!0,message:"如不分享token,则该项必填"}]},null,8,["modelValue"])])):(0,m.kq)("",!0),me])),_:1}),(0,m._)("div",ce,[(0,m.Wm)(jl,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" 提交 ")])),_:1})])])),_:1})]),pe])),_:1},8,["show"]),(0,m.Wm)(Il,{show:De.value,"onUpdate:show":a[30]||(a[30]=e=>De.value=e),title:"token信息",width:"90vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"showDialog"},{default:(0,m.w5)((()=>[(0,m._)("div",ve,[(0,m.Wm)(Zl,null,{default:(0,m.w5)((()=>[(0,m.Wm)(Bl,{inset:""},{default:(0,m.w5)((()=>[we,(0,m.Wm)(kl,{modelValue:Le.value,"onUpdate:modelValue":a[22]||(a[22]=e=>Le.value=e),name:"Token用户名",label:"Token用户名",placeholder:"Token用户名",readonly:!0,rules:[{required:!0,message:"请填写Token用户名"}]},null,8,["modelValue"]),he,(0,m.Wm)(kl,{modelValue:Qe.value,"onUpdate:modelValue":a[23]||(a[23]=e=>Qe.value=e),name:"OpenAi用户名",label:"OpenAi用户名",placeholder:"OpenAi用户名",readonly:!0,rules:[{required:!0,message:"请填写OpenAi用户名"}]},null,8,["modelValue"]),ge,(0,m.Wm)(kl,{modelValue:Xe.value,"onUpdate:modelValue":a[24]||(a[24]=e=>Xe.value=e),type:"password",name:"OpenAi密码",label:"OpenAi密码",placeholder:"OpenAi密码",readonly:!0,rules:[{required:!0,message:"请填写OpenAi密码"}]},null,8,["modelValue"]),ke,(0,m.Wm)(kl,{name:"temShared",readonly:!0,label:"是否分享出来"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{disabled:"","active-color":"#0ea27e",modelValue:Ge.value,"onUpdate:modelValue":a[25]||(a[25]=e=>Ge.value=e)},null,8,["modelValue"])])),_:1}),_e,(0,m.Wm)(kl,{readonly:!0,name:"temShow_user_info",label:"是否分享聊天记录"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{disabled:"","active-color":"#0ea27e",modelValue:el.value,"onUpdate:modelValue":a[26]||(a[26]=e=>el.value=e)},null,8,["modelValue"])])),_:1}),fe,(0,m.Wm)(kl,{readonly:!0,name:"temPlus",label:"是否显示金光"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{disabled:"","active-color":"#0ea27e",modelValue:ll.value,"onUpdate:modelValue":a[27]||(a[27]=e=>ll.value=e)},null,8,["modelValue"])])),_:1}),be,(0,m.Wm)(kl,{modelValue:al.value,"onUpdate:modelValue":a[28]||(a[28]=e=>al.value=e),type:"temPassword",name:"进入Token的密码",label:"进入Token的密码",placeholder:"进入Token的密码",readonly:!0},null,8,["modelValue"]),ye,(0,m.Wm)(kl,{modelValue:Re.value,"onUpdate:modelValue":a[29]||(a[29]=e=>Re.value=e),rows:"5",label:"OpenAi的Token",type:"textarea",maxlength:"5000",placeholder:"请填写OpenAi的Token","show-word-limit":"",readonly:!0},null,8,["modelValue"]),Ve])),_:1}),We])),_:1})])])),_:1},8,["show"]),(0,m.Wm)(Il,{show:Be.value,"onUpdate:show":a[38]||(a[38]=e=>Be.value=e),title:"修改系统设置信息",width:"90vw","close-on-click-overlay":!0,"show-cancel-button":!1,"show-confirm-button":!1,class:"requireSettingDialog"},{default:(0,m.w5)((()=>[(0,m._)("div",Te,[(0,m.Wm)(Zl,{onSubmit:Sl},{default:(0,m.w5)((()=>[(0,m.Wm)(Bl,{inset:""},{default:(0,m.w5)((()=>[xe,(0,m.Wm)(kl,{modelValue:Ie.value,"onUpdate:modelValue":a[31]||(a[31]=e=>Ie.value=e),name:"绑定IP和端口",label:"绑定IP和端口",placeholder:"绑定IP和端口(选填)"},null,8,["modelValue"]),Ue,(0,m.Wm)(kl,{modelValue:Ye.value,"onUpdate:modelValue":a[32]||(a[32]=e=>Ye.value=e),name:"请求超时时间",label:"请求超时时间",placeholder:"请求超时时间(选填)"},null,8,["modelValue"]),Se,(0,m.Wm)(kl,{name:"switch",label:"是否分享对话(选填)"},{"right-icon":(0,m.w5)((()=>[(0,m.Wm)(fl,{"active-color":"#0ea27e",modelValue:Ke.value,"onUpdate:modelValue":a[33]||(a[33]=e=>Ke.value=e)},null,8,["modelValue"])])),_:1}),ze,(0,m.Wm)(kl,{modelValue:Me.value,"onUpdate:modelValue":a[34]||(a[34]=e=>Me.value=e),type:"temPassword",name:"代理服务URL",label:"代理服务URL",placeholder:"代理服务URL(选填)"},null,8,["modelValue"]),Oe,(0,m.Wm)(kl,{modelValue:Ee.value,"onUpdate:modelValue":a[35]||(a[35]=e=>Ee.value=e),name:"访问网站密码",label:"访问网站密码",placeholder:"访问网站密码(选填)"},null,8,["modelValue"]),He,(0,m.Wm)(kl,{modelValue:Je.value,"onUpdate:modelValue":a[36]||(a[36]=e=>Je.value=e),name:"重载服务密码密码",label:"重载服务密码密码",placeholder:"重载服务密码密码(选填)"},null,8,["modelValue"]),Pe,(0,m.Wm)(kl,{modelValue:Fe.value,"onUpdate:modelValue":a[37]||(a[37]=e=>Fe.value=e),name:"白名单",label:"白名单",placeholder:"[]限制所有账号(默认为null)"},null,8,["modelValue"]),Ae])),_:1}),(0,m._)("div",$e,[(0,m.Wm)(jl,{round:"",block:"",color:"#0ea27e","native-type":"submit"},{default:(0,m.w5)((()=>[(0,m.Uk)(" 提交 ")])),_:1})])])),_:1})]),Ne])),_:1},8,["show"])],64)}}});const Ce=qe;var De=Ce}}]);
//# sourceMappingURL=191.e43c8773.js.map