import{k as d,s as a,o as s,c as r,A as e,B as f,C as n,D as m}from"./C3C76hVJ.js";const u=["viewBox"],k=e("mask",{id:"a9478400-9026-428a-9739-db20c84b6b54"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#a9478400-9026-428a-9739-db20c84b6b54)"},v={key:0},g=e("path",{fill:"#ffda44",d:"m0 167 252.9-29.3L512 167v178l-255.7 25.7L0 345z"},null,-1),h=e("path",{fill:"#d80027",d:"M0 0h512v167H0z"},null,-1),b=e("path",{fill:"#6da544",d:"M0 345h512v167H0z"},null,-1),w={fill:"none"},x=["r"],z=d({__name:"bo",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(i){const l=i,t=a(()=>512+2*l.strokeWidth),o=a(()=>-l.strokeWidth),c=a(()=>256+l.strokeWidth/2);return(y,B)=>(s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${t.value} ${t.value}`},[k,e("g",p,[l.flagName?(s(),r("title",v,f(l.flagName),1)):n("",!0),g,h,b]),e("g",w,[e("circle",{cx:"256",cy:"256",r:c.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,x)])],8,u))}});export{z as default};