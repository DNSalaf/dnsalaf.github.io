import{v as St,c as Re,g as Tt,a as xt,u as _t,b as Et,Q as Bt,d as $t}from"./QBtn.d144fafb.js";import{c as P,h as I,a as ot,b as zt,d as Ae,e as Pt}from"./render.ba598e35.js";import{c as v,h as C,r as T,i as lt,o as j,a as N,n as Be,b as U,g as M,l as V,d as $e,e as D,w as k,f as ce,H as We,j as O,s as ze,k as Ot,m as Vt,P as Mt,p as Ht,q as oe,t as ye,u as Fe,v as ge,x as xe,y as we,z as Dt,A as it,B as Qt,C as le,D as Rt,E as At,F as at,_ as rt,G as ee,I as ue,J as $,K as B,L as Wt,M as se,N as Ne,O as Ie,Q as Ft,R as Nt,S as It,T as Xt}from"./index.f9f35a14.js";var Yt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:o.value},I(n.default))}}),jt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:o.value,role:"toolbar"},I(n.default))}});function Ut(){const e=T(!lt.value);return e.value===!1&&j(()=>{e.value=!0}),e}const ut=typeof ResizeObserver!="undefined",Xe=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,i,t={width:-1,height:-1};function l(d){d===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},n("resize",t))}}const{proxy:f}=M();if(ut===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(l),d.observe(i),s()):a!==!0&&U(()=>{c(!0)})};return j(()=>{c()}),N(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),Be}else{let a=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",l,V.passive),c=void 0)},w=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",l,V.passive),s())};const d=Ut();let c;return j(()=>{U(()=>{i=f.$el,i&&w()})}),N(a),f.trigger=l,()=>{if(d.value===!0)return C("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:w})}}}}),Kt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=$e(ce,D);if(t===D)return console.error("QHeader needs to be child of QLayout"),D;const l=T(parseInt(e.heightHint,10)),s=T(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?l.value:0;const u=l.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function x({height:u}){h(l,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),o("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),o("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",l.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=ot(n.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(_e,{debounce:0,onResize:x})),C("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Ee=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>C("div",{style:t.value,class:i.value},I(n.default))}});const Pe={dark:{type:Boolean,default:null}};function Oe(e,n){return v(()=>e.dark===null?n.dark.isActive:e.dark)}var Gt=P({name:"QList",props:{...Pe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=M(),i=Oe(e,o.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},I(n.default))}});function Jt(e,n,o){let i;function t(){i!==void 0&&(We.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>o.value===!0,handler:n},We.add(i)}}}const Zt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},en=["beforeShow","show","beforeHide","hide"];function tn({showing:e,canShow:n,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:l}){const s=M(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||n!==void 0&&n(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),i!==void 0?i(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&x(u)}function x(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:x)(a)}k(()=>f.modelValue,L),o!==void 0&&St(s)===!0&&k(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),l===!0&&j(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const nn=[null,document,document.body,document.scrollingElement,document.documentElement];function on(e,n){let o=Tt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return nn.includes(o)?window:o}function st(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ct(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function qe(){if(ie!==void 0)return ie;const e=document.createElement("p"),n=document.createElement("div");Re(e,{width:"100%",height:"200px"}),Re(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let i=e.offsetWidth;return o===i&&(i=n.clientWidth),n.remove(),ie=o-i,ie}function ln(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ke,Ce,Z,Le=!1,Ye,je,Ue,F=null;function an(e){rn(e)&&ze(e)}function rn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Ot(e),o=e.shiftKey&&!e.deltaX,i=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||i?e.deltaY:e.deltaX;for(let l=0;l<n.length;l++){const s=n[l];if(ln(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ke(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:i}=document.scrollingElement;(Z===void 0||n!==window.innerHeight)&&(Z=o-n,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Ge(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(n);ke=ct(window),Ce=st(window),Ye=n.style.left,je=n.style.top,Ue=window.location.href,n.style.left=`-${ke}px`,n.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,V.passiveCapture),window.visualViewport.addEventListener("scroll",ae,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ke,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",an,V.notPassive),e==="remove"&&(O.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ae,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,V.passiveCapture)):window.removeEventListener("scroll",Ke,V.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Ye,n.style.top=je,window.location.href===Ue&&window.scrollTo(ke,Ce),Z=void 0)}function un(e){let n="add";if(e===!0){if(J++,F!==null){clearTimeout(F),F=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(n="remove",O.is.ios===!0&&O.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Ge(n),F=null},100);return}}Ge(n)}function sn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,un(n))}}}function cn(){let e=null;const n=M();function o(){e!==null&&(clearTimeout(e),e=null)}return Vt(o),N(o),{removeTimeout:o,registerTimeout(i,t){o(),xt(n)===!1&&(e=setTimeout(i,t))}}}const Ve={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},dn=Object.keys(Ve);Ve.all=!0;function Je(e){const n={};for(const o of dn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Ve:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const fn=["INPUT","TEXTAREA"];function Ze(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&fn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function vn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,n,o){const i=xe(e);let t,l=i.left-n.event.x,s=i.top-n.event.y,f=Math.abs(l),d=Math.abs(s);const c=n.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&l>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=l,f=0,l=0):(i.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:i,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:f,y:d},offset:{x:l,y:s},delta:{x:i.left-n.event.lastX,y:i.top-n.event.lastY}}}}let mn=0;var Te=zt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&O.has.touch!==!0)return;function i(l,s){o.mouse===!0&&s===!0?ze(l):(o.stop===!0&&ge(l),o.prevent===!0&&Fe(l))}const t={uid:"qvtp_"+mn++,handler:n,modifiers:o,direction:Je(o),noop:Be,mouseStart(l){Ze(l,t)&&Ht(l)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Ze(l,t)){const s=l.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,s){if(O.is.firefox===!0&&ye(e,!0),t.lastEvt=l,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Fe(c),l.cancelBubble===!0&&ge(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}ge(l)}const{left:f,top:d}=xe(l);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(l){if(t.event===void 0)return;const s=xe(l),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=l;const c=t.event.mouse===!0,a=()=>{i(l,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),vn(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{x(),h()},50):x()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(l,t.event.mouse);const{payload:m,synthetic:h}=Se(l,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(l);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,s){if(t.event!==void 0){if(we(t,"temp"),O.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(l===void 0?t.lastEvt:l,t).payload);const{payload:f}=Se(l===void 0?t.lastEvt:l,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}O.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Je(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),we(n,"main"),we(n,"temp"),O.is.firefox===!0&&ye(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function re(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const et=150;var hn=P({name:"QDrawer",inheritAttrs:!1,props:{...Zt,...Pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...en,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:i}){const t=M(),{proxy:{$q:l}}=t,s=Oe(e,l),{preventBodyScroll:f}=sn(),{registerTimeout:d,removeTimeout:c}=cn(),a=$e(ce,D);if(a===D)return console.error("QDrawer needs to be child of QLayout"),D;let w,q=null,m;const h=T(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>x.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||dt.value===!0));function p(r,y){if(A(),r!==!1&&a.animate(),z(0),h.value===!0){const _=a.instances[te.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),Q(1),a.isContainer.value!==!0&&f(!0)}else Q(0),r!==!1&&he(!1);d(()=>{r!==!1&&he(!0),y!==!0&&o("show",r)},et)}function b(r,y){K(),r!==!1&&a.animate(),Q(0),z(X.value*L.value),pe(),y!==!0?d(()=>{o("hide",r)},et):c()}const{show:S,hide:E}=tn({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:A,removeFromHistory:K}=Jt(g,E,u),W={belowBreakpoint:h,hide:E},H=v(()=>e.side==="right"),X=v(()=>(l.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),Me=T(0),Y=T(!1),de=T(!1),He=T(L.value*X.value),te=v(()=>H.value===!0?"left":"right"),fe=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(H.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),dt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ft=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&Y.value===!1?" hidden":"")),vt=v(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),De=v(()=>H.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),mt=v(()=>H.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ht=v(()=>{const r={};return a.header.space===!0&&De.value===!1&&(ve.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&mt.value===!1&&(ve.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),pt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${He.value}px)`};return h.value===!0?r:Object.assign(r,ht.value)}),bt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),yt=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),gt=v(()=>{const r=l.lang.rtl===!0?e.side:te.value;return[[Te,Ct,void 0,{[r]:!0,mouse:!0}]]}),wt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Te,Qe,void 0,{[r]:!0,mouse:!0}]]}),qt=v(()=>{const r=l.lang.rtl===!0?te.value:e.side;return[[Te,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Lt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(w=g.value,g.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),Q(0),pe()):S(!1))}),k(()=>e.side,(r,y)=>{a.instances[y]===W&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=W,a[r].size=L.value,a[r].space=G.value,a[r].offset=fe.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&me()}),k(a.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(fe,r=>{R("offset",r)}),k(G,r=>{o("onLayout",r),R("space",r)}),k(H,()=>{z()}),k(L,r=>{z(),be(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{be(r,L.value)}),k(()=>l.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(kt(),a.animate())}),k(x,r=>{o("miniState",r)});function z(r){r===void 0?U(()=>{r=g.value===!0?0:L.value,z(X.value*r)}):(a.isContainer.value===!0&&H.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),He.value=r)}function Q(r){Me.value=r}function he(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function kt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,q=setTimeout(()=>{q=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ct(r){if(g.value!==!1)return;const y=L.value,_=re(r.distance.x,0,y);if(r.isFinal===!0){_>=Math.min(75,y)===!0?S():(a.animate(),Q(0),z(X.value*y)),Y.value=!1;return}z((l.lang.rtl===!0?H.value!==!0:H.value)?Math.max(y-_,0):Math.min(0,_-y)),Q(re(_/y,0,1)),r.isFirst===!0&&(Y.value=!0)}function Qe(r){if(g.value!==!0)return;const y=L.value,_=r.direction===e.side,ne=(l.lang.rtl===!0?_!==!0:_)?re(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,y)===!0?(a.animate(),Q(1),z(0)):E(),Y.value=!1;return}z(X.value*ne),Q(re(1-ne/y,0,1)),r.isFirst===!0&&(Y.value=!0)}function pe(){f(!1),he(!0)}function R(r,y){a.update(e.side,r,y)}function Lt(r,y){r.value!==y&&(r.value=y)}function be(r,y){R("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=W,be(e.miniToOverlay,L.value),R("space",G.value),R("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),j(()=>{o("onLayout",G.value),o("miniState",x.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&pe(),a.instances[e.side]===W&&(a.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),gt.value)),r.push(Ae("div",{ref:"backdrop",class:ft.value,style:vt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>qt.value)));const y=x.value===!0&&n.mini!==void 0,_=[C("div",{...i,key:""+y,class:[bt.value,i.class]},y===!0?n.mini():I(n.default))];return e.elevated===!0&&g.value===!0&&_.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ae("aside",{ref:"content",class:yt.value,style:pt.value},_,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>wt.value)),C("div",{class:"q-drawer-container"},r)}}}),pn=P({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=M(),i=$e(ce,D);if(i===D)return console.error("QPageContainer needs to be child of QLayout"),D;it(Qt,!0);const t=v(()=>{const l={};return i.header.space===!0&&(l.paddingTop=`${i.header.size}px`),i.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(l.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),l});return()=>C("div",{class:"q-page-container",style:t.value},I(n.default))}});const{passive:tt}=V,bn=["both","horizontal","vertical"];var yn=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>bn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,l;k(()=>e.scrollTarget,()=>{d(),f()});function s(){i!==null&&i();const w=Math.max(0,st(t)),q=ct(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),n("scroll",{...o})}function f(){t=on(l,e.scrollTarget),t.addEventListener("scroll",c,tt),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,tt),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=M();return k(()=>a.$q.lang.rtl,s),j(()=>{l=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>o}),Be}}),gn=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=T(null),l=T(i.screen.height),s=T(e.container===!0?0:i.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),c=T(lt.value===!0?0:qe()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=S,e.onScroll!==void 0&&o("scroll",S)}}function x(b){const{height:S,width:E}=b;let A=!1;l.value!==S&&(A=!0,l.value=S,e.onScrollHeight!==void 0&&o("scrollHeight",S),g()),s.value!==E&&(A=!0,s.value=E),A===!0&&e.onResize!==void 0&&o("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=l.value>d.value?qe():0;c.value!==b&&(c.value=b)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:l,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,S,E){p[b][S]=E}};if(it(ce,p),qe()>0){let E=function(){b=null,S.classList.remove("hide-scrollbar")},A=function(){if(b===null){if(S.scrollHeight>i.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(E,300)},K=function(W){b!==null&&W==="remove"&&(clearTimeout(b),E()),window[`${W}EventListener`]("resize",A)},b=null;const S=document.body;k(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Rt(()=>{K("remove")})}return()=>{const b=Pt(n.default,[C(yn,{onScroll:h}),C(_e,{onResize:x})]),S=C("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(_e,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[S])])]):S}}}),nt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:o.value},I(n.default))}}),wn=P({name:"QItem",props:{...Pe,..._t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:i}}=M(),t=Oe(e,i),{hasLink:l,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=Et(),a=T(null),w=T(null),q=v(()=>e.clickable===!0||l.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=v(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&At(p,13)===!0){ze(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}o("keyup",p)}function u(){const p=ot(n.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:x.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}});const qn=at({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function kn(e,n,o,i,t,l){return ee(),ue(wn,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:$(()=>[e.icon?(ee(),ue(nt,{key:0,avatar:""},{default:$(()=>[B(Bt,{name:e.icon},null,8,["name"])]),_:1})):Wt("",!0),B(nt,null,{default:$(()=>[B(Ee,null,{default:$(()=>[se(Ne(e.title),1)]),_:1}),B(Ee,{caption:""},{default:$(()=>[se(Ne(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Cn=rt(qn,[["render",kn]]);const Ln=[{title:"CV",icon:"school",link:"/#/CV"},{title:"Linkedin",icon:"chat",link:"https://www.linkedin.com/in/dnsalaf"},{title:"Github",icon:"code",link:"https://github.com/dnsalaf"},{title:"ORCID",icon:"record_voice_over",link:"https://orcid.org/0000-0002-5469-3872"},{title:"Lattes Curriculum",icon:"info",link:"http://lattes.cnpq.br/4461462146153067"}],Sn=at({name:"MainLayout",components:{EssentialLink:Cn},setup(){const e=T(!1);return{essentialLinks:Ln,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function Tn(e,n,o,i,t,l){const s=Ie("EssentialLink"),f=Ie("router-view");return ee(),ue(gn,{view:"lHh Lpr lFf"},{default:$(()=>[B(Kt,{elevated:""},{default:$(()=>[B(jt,null,{default:$(()=>[B($t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(Yt,null,{default:$(()=>[se(" Personal Page ")]),_:1})]),_:1})]),_:1}),B(hn,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=d=>e.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:$(()=>[B(Gt,null,{default:$(()=>[B(Ee,{header:""},{default:$(()=>[se(" For more information ")]),_:1}),(ee(!0),Ft(It,null,Nt(e.essentialLinks,d=>(ee(),ue(s,Xt({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(pn,null,{default:$(()=>[B(f)]),_:1})]),_:1})}var $n=rt(Sn,[["render",Tn]]);export{$n as default};
