"use strict";(self["webpackChunksmal_web_version"]=self["webpackChunksmal_web_version"]||[]).push([[912],{8912:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var o=a(9835),l=a(6970);const r={class:"row",style:{"margin-top":"auto","margin-bottom":"auto","margin-left":"auto"}},s={class:"text-right"},n={class:"col-12"},i={class:"row"},c={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},d={class:"text-h5 text-white"},u={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},m={class:"text-h5 text-white"},w={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},g={class:"text-h5 text-white"},h={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},p={class:"text-h5 text-white"},v={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},_={class:"text-h5 text-white"},f={class:"col-xs-12 col-sm-6 col-md-3 q-pa-sm"},V={class:"text-h5 text-white"},x={id:"readWarning",class:"col-12 justify-center flex",style:{"margin-top":"10px"}};function b(e,t,a,b,y,C){const I=(0,o.up)("q-btn"),q=(0,o.up)("CardBadge"),D=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(D,{class:"row q-ma-sm"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("td",s,[(0,o.Wm)(I,{color:"primary",label:"Selecionar Porta","no-caps":"",onClick:C.created},null,8,["onClick"])])]),(0,o._)("div",n,[(0,o._)("div",i,[(0,o._)("div",c,[(0,o.Wm)(q,{title:"Temperatura",borderColor:"red",color:"red"},{content:(0,o.w5)((()=>[(0,o._)("div",d,(0,l.zw)(C.getValue1)+"°C ",1)])),_:1})]),(0,o._)("div",u,[(0,o.Wm)(q,{title:"Oximetria",borderColor:"green",color:"blue"},{content:(0,o.w5)((()=>[(0,o._)("div",m,(0,l.zw)(C.getValue2)+" % ",1)])),_:1})]),(0,o._)("div",w,[(0,o.Wm)(q,{title:"Frequência de Pulso",borderColor:"green",color:"green"},{content:(0,o.w5)((()=>[(0,o._)("div",g,(0,l.zw)(C.getValue3)+" bpm ",1)])),_:1})]),(0,o._)("div",h,[(0,o.Wm)(q,{title:"Respiração",borderColor:"yellow",color:"yellow"},{content:(0,o.w5)((()=>[(0,o._)("div",p,(0,l.zw)(C.getValue4)+" IRPM ",1)])),_:1})]),(0,o._)("div",v,[(0,o.Wm)(q,{title:"Frequência Cardíaca",borderColor:"purple",color:"purple"},{content:(0,o.w5)((()=>[(0,o._)("div",_,(0,l.zw)(C.getValue5)+" bpm ",1)])),_:1})]),(0,o._)("div",f,[(0,o.Wm)(q,{title:"Pressão Não Invasiva",borderColor:"orange",color:"orange"},{content:(0,o.w5)((()=>[(0,o._)("div",V,(0,l.zw)(C.getValue6)+" mmHg ",1)])),_:1})]),(0,o._)("h6",x," Última Leitura: "+(0,l.zw)(y.leitura),1)])])])),_:1})}const y={class:"col"};function C(e,t,a,r,s,n){const i=(0,o.up)("q-card-section"),c=(0,o.up)("q-icon"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{class:"shadow-8",style:(0,l.j5)(a.borderColor?`border-left: .25rem solid ${a.borderColor} !important;`:"")},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{horizontal:"",class:"row"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{class:"col-xs-8 justify-center"},{default:(0,o.w5)((()=>[(0,o._)("div",y,[(0,o._)("div",{class:(0,l.C_)(`text-subtitle1 text-weight-medium text-${a.color}`)},(0,l.zw)(a.title),3),(0,o._)("div",null,[(0,o.WI)(e.$slots,"content")])])])),_:3}),(0,o.Wm)(i,{class:"col-xs-4 content-center text-right"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{name:a.icon,class:"text-blue-grey-2",size:"lg"},null,8,["name"])])),_:1})])),_:3})])),_:3},8,["style"])}const I={name:"CardBadge",props:{title:{type:String,required:!0},icon:{type:String,default:""},color:{type:String,default:"blue-grey-8"},borderColor:{type:String,default:"#616161"}}};var q=a(1639),D=a(4458),T=a(3190),W=a(2857),S=a(9984),M=a.n(S);const z=(0,q.Z)(I,[["render",C]]),P=z;function k(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))}function B(e){return JSON.parse(window.sessionStorage.getItem(e))}function $(e){return new Promise((t=>setTimeout(t,e)))}function N(e){let t=0,a=1;"1"===e[0]&&(a=-1);let o=parseInt(e[1])*Math.pow(2,7)+parseInt(e[2])*Math.pow(2,6)+parseInt(e[3])*Math.pow(2,5)+parseInt(e[4])*Math.pow(2,4)+parseInt(e[5])*Math.pow(2,3)+parseInt(e[6])*Math.pow(2,2)+parseInt(e[7])*Math.pow(2,1)+parseInt(e[8])*Math.pow(2,0);o-=127;let l=-1,r=0;for(let s=0;s<23;s++){const t=e[s+9];r+=t*Math.pow(2,l),l--}return r+=1,t=a*Math.pow(2,o)*r/10,t.toFixed(2)}M()(I,"components",{QCard:D.Z,QCardSection:T.Z,QIcon:W.Z});const Z={name:"IndexPage",data(){return{dataValue:[0,0,0,0,0,0],leitura:"nenhum dado recebido"}},components:{CardBadge:P},computed:{getValue1(){return`${this.dataValue[0]}`},getValue2(){return`${this.dataValue[1]}`},getValue3(){return`${this.dataValue[2]}`},getValue4(){return`${this.dataValue[3]}`},getValue5(){return`${this.dataValue[4]}`},getValue6(){return`${this.dataValue[5]}`}},setup(){},methods:{async handleData(){if("serial"in navigator){let t=new Date,a=new Date,o=new Date,l=new Date,r=new Date,s=new Date;const n=await navigator.serial.requestPort();await n.open({baudRate:115200}),await $(500);while(n.readable){const i=n.readable.getReader(),c=new Date;"nenhum dado recebido"!==this.leitura?c.getTime()-this.leitura.getTime()>3e3&&(document.getElementById("readWarning").style.color="red",alert("Nenhum dado recebido! Verifique seu transmissor VLC")):document.getElementById("readWarning").style.color="white";try{while(1){const{value:d,done:u}=await i.read();if(d){const m=6,w=4,g=[];for(let h=0;h<w*m;h+=w){const p=(d[h]<<24)+(d[h+1]<<16)+(d[h+2]<<8)+d[h+3];p>=0&&(g[h/w]=p.toString(2)),31===g[h/w].length&&(g[h/w]="0"+g[h/w]);const v=N(g[h/w]),_=h/w+1,f="value"+_;if(!isNaN(v)){document.getElementById("readWarning").style.color="white";const V=new Date,x=new Date,b=new Date,y=new Date,C=new Date,I=new Date;this.leitura=new Date;const q=.3;function D(e){return"999.00"===e?"- ? -":e}function T(e,t){if("- ? -"!==t){const a=B(e);let o=new Date,l=o.getHours(),r=o.getMinutes(),s=o.getSeconds();l<=9&&(l="0"+l),r<=9&&(r="0"+r),s<=9&&(s="0"+s),o=l+":"+r+":"+s;const n=[{time:o,value:parseFloat(t).toFixed(2)}];a?(a.push(n),k(e,a)):k(e,n)}}"value1"===f&&V.getTime()-t.getTime()>=1e3*q&&(this.dataValue[0]=D(v),T(f,this.dataValue[0]),t=V),"value2"===f&&x.getTime()-a.getTime()>=1e3*q&&(this.dataValue[1]=D(v),T(f,this.dataValue[1]),a=x),"value3"===f&&b.getTime()-o.getTime()>=1e3*q&&(this.dataValue[2]=D(v),T(f,this.dataValue[2]),o=b),"value4"===f&&y.getTime()-l.getTime()>=1e3*q&&(this.dataValue[3]=D(v),T(f,this.dataValue[3]),l=y),"value5"===f&&C.getTime()-r.getTime()>=1e3*q&&(this.dataValue[4]=D(v),T(f,this.dataValue[4]),r=C),"value6"===f&&I.getTime()-s.getTime()>=1e3*q&&(this.dataValue[5]=D(v),T(f,this.dataValue[5]),s=I)}}}if(u){i.releaseLock();break}}}catch(e){}finally{i.releaseLock()}}document.getElementById("readWarning").style.color="red",alert("SmaL PnP desconectado! Verifique sua porta USB"),await n.close()}else alert("Navegador Incompatível! Tente usar Chrome, Opera ou Edge")},async created(){this.handleData()}}};var j=a(9885),E=a(2731);const F=(0,q.Z)(Z,[["render",b]]),L=F;M()(Z,"components",{QPage:j.Z,QBtn:E.Z})}}]);