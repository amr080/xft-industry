import{k as d,s as t,o,c as r,A as e,B as i,C as n,D as u}from"./C3C76hVJ.js";const m=["viewBox"],k=e("mask",{id:"cc84f9d0-42bd-4ef1-876f-3ec9cf13237d"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),h={mask:"url(#cc84f9d0-42bd-4ef1-876f-3ec9cf13237d)"},p={key:0},v=e("path",{fill:"#eee",d:"m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"},null,-1),g=e("path",{fill:"#0052b4",d:"M0 0h512v144.7H0z"},null,-1),w=e("path",{fill:"#6da544",d:"M0 367.3h512V512H0z"},null,-1),x=e("path",{fill:"#333",d:"M272.7 250.4v-61.2h-33.4v61.2L199 290.8a66.7 66.7 0 0 0 114 0z"},null,-1),y={fill:"none"},W=["r"],C=d({__name:"ls",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const l=c,a=t(()=>512+2*l.strokeWidth),s=t(()=>-l.strokeWidth),f=t(()=>256+l.strokeWidth/2);return(z,B)=>(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${s.value} ${s.value} ${a.value} ${a.value}`},[k,e("g",h,[l.flagName?(o(),r("title",p,i(l.flagName),1)):n("",!0),v,g,w,x]),e("g",y,[e("circle",{cx:"256",cy:"256",r:f.value,fill:"none",style:u({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,W)])],8,m))}});export{C as default};