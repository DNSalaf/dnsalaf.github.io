import{c as g,h as m}from"./render.0b227118.js";import{d,e as s,c as u,h as v,f as _,B as y,g as C,_ as x,F as P,G as $,I as q,J as V,X as e,N as l,M as a}from"./index.42880330.js";var I=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:r}}=C(),t=d(_,s);if(t===s)return console.error("QPage needs to be a deep child of QLayout"),s;if(d(y,s)===s)return console.error("QPage needs to be child of QPageContainer"),s;const c=u(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof n.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:r.screen.height;return n.styleFn(o,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":r.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":r.screen.height-o+"px"}}),f=u(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:f.value,style:c.value},m(i.default))}});const F=P({name:"IndexPage",data(){return{me:"Alaf DO NASCIMENTO SANTOS",title:"Master of Science in Engineering - Institut Polytechnique de Paris"}}}),N={class:"q-gutter-md text-container"},Q=e("div",{class:"image-container q-mb-md"},[e("img",{alt:"Photo",src:"me.jpeg",class:"responsive-image"})],-1),S={class:"q-mb-md text"},B={class:"responsive-text"},b={class:"responsive-text2"},A=e("div",{class:"random-text"},[e("p",null,[a(" Here you can find my "),e("a",{href:"CVs/cv1.pdf"},"CV"),a(" and "),e("a",{href:"CVs/resume1.pdf"},"Resume"),a(". ")]),e("p",null,[a(" Ici vous pouvez trouver mon "),e("a",{href:"CVs/cv2.pdf"},"CV"),a(". ")]),e("p",null,[a(" Aqui voc\xEA pode encontrar meu "),e("a",{href:"CVs/cv3.pdf"},"curriculo completo"),a(" e "),e("a",{href:"CVs/resume3.pdf"},"curriculo resumido"),a(". ")])],-1);function H(n,i,r,t,p,c){return $(),q(I,{class:"q-gutter-md"},{default:V(()=>[e("div",N,[Q,e("div",S,[e("p",B,l(n.me),1),e("p",b,l(n.title),1),A])])]),_:1})}var O=x(F,[["render",H]]);export{O as default};
