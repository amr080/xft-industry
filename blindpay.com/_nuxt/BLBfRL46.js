import{k as c,s as t,o as s,c as r,A as l,B as i,C as m,D as f}from"./C3C76hVJ.js";const n=["viewBox"],d=l("mask",{id:"22883313-07a8-494f-b278-4dc6c16e1680"},[l("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),u={mask:"url(#22883313-07a8-494f-b278-4dc6c16e1680)"},k={key:0},p=l("path",{fill:"#eee",d:"m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"},null,-1),g=l("path",{fill:"#0052b4",d:"M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"},null,-1),L=l("path",{fill:"#d80027",d:"M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"},null,-1),z={fill:"none"},w=["r"],B=c({__name:"gb",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(h){const e=h,a=t(()=>512+2*e.strokeWidth),o=t(()=>-e.strokeWidth),v=t(()=>256+e.strokeWidth/2);return(x,y)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${a.value} ${a.value}`},[d,l("g",u,[e.flagName?(s(),r("title",k,i(e.flagName),1)):m("",!0),p,g,L]),l("g",z,[l("circle",{cx:"256",cy:"256",r:v.value,fill:"none",style:f({stroke:e.strokeColor,strokeWidth:e.strokeWidth})},null,12,w)])],8,n))}});export{B as default};