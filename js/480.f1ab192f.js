"use strict";(self["webpackChunksmal_web_version"]=self["webpackChunksmal_web_version"]||[]).push([[480],{3480:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var n=l(9835);const a=(0,n.Uk)(" SmaL Web Version "),o=(0,n._)("div",null," v1.0.0 ",-1),i=(0,n._)("br",null,null,-1),u=(0,n._)("br",null,null,-1),r=(0,n._)("br",null,null,-1),s=(0,n.Uk)(" Veja Também "),c=(0,n._)("br",null,null,-1);function p(e,t,l,p,d,m){const w=(0,n.up)("q-btn"),f=(0,n.up)("q-toolbar-title"),k=(0,n.up)("q-toolbar"),b=(0,n.up)("q-header"),g=(0,n.up)("EssentialLink"),_=(0,n.up)("q-list"),Z=(0,n.up)("q-item-label"),h=(0,n.up)("q-drawer"),L=(0,n.up)("router-view"),q=(0,n.up)("q-page-container"),v=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(v,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{elevated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[a])),_:1}),o])),_:1})])),_:1}),(0,n.Wm)(h,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.essentialLinks,(e=>((0,n.wg)(),(0,n.j4)(g,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1}),u,r,(0,n.Wm)(Z,{header:""},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[c,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.essentialLinks2,(e=>((0,n.wg)(),(0,n.j4)(g,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(L)])),_:1})])),_:1})}var d=l(4646),m=l(499),w=l(6970);function f(e,t,l,a,o,i){const u=(0,n.up)("q-icon"),r=(0,n.up)("q-item-section"),s=(0,n.up)("q-item-label"),c=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(c,{clickable:"",tag:"a",href:e.link},{default:(0,n.w5)((()=>[e.icon?((0,n.wg)(),(0,n.j4)(r,{key:0,avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,w.zw)(e.title),1)])),_:1}),(0,n.Wm)(s,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,w.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const k=(0,n.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var b=l(1639),g=l(490),_=l(1233),Z=l(2857),h=l(3115),L=l(9984),q=l.n(L);const v=(0,b.Z)(k,[["render",f]]),W=v;q()(k,"components",{QItem:g.Z,QItemSection:_.Z,QIcon:Z.Z,QItemLabel:h.Z}),d.Z.init("alaf");const Q=[{title:"Home",caption:"Recepção de Dados",icon:"sensors",link:"/#/home"},{title:"Cadastrar Usuário",caption:"Novo usuário",icon:"account_circle",link:"/#/newuser"},{title:"Lista de Usuários",caption:"Editar / Deletar",icon:"list",link:"/#/users"},{title:"Sair",icon:"logout",link:"/"}],y=[{title:"Alaf do Nascimento Santos",caption:"Aluno",icon:"school",link:"http://lattes.cnpq.br/4461462146153067"},{title:"Jair Adriano Lima Silva",caption:"Orientador",icon:"school",link:"http://lattes.cnpq.br/3099010533644898"},{title:"Higor Araújo Fim Camporez",caption:"Coorientador",icon:"school",link:"http://lattes.cnpq.br/5910374743077555"},{title:"Repositório do Projeto",caption:"Github",icon:"code",link:"https://github.com/alafSantos"}],D=(0,n.aZ)({name:"MainLayout",components:{EssentialLink:W},setup(){const e=(0,m.iH)(!1);return{essentialLinks:Q,essentialLinks2:y,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},logout(){d.Z.logout()},isLoggedOut(){return!d.Z.tokens.accessToken}}}});var S=l(7605),j=l(6602),C=l(1663),H=l(9379),U=l(1973),I=l(8673),O=l(3246),T=l(2133);const V=(0,b.Z)(D,[["render",p]]),A=V;q()(D,"components",{QLayout:S.Z,QHeader:j.Z,QToolbar:C.Z,QBtn:H.Z,QToolbarTitle:U.Z,QDrawer:I.Z,QList:O.Z,QItemLabel:h.Z,QPageContainer:T.Z})}}]);