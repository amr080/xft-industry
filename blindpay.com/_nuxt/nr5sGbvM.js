import{k as i,s as t,o as s,c as f,A as e,B as n,C as d,D as m}from"./C3C76hVJ.js";const u=["viewBox"],k=e("mask",{id:"f4553781-0199-4bd6-af2c-31ff5538fc94"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#f4553781-0199-4bd6-af2c-31ff5538fc94)"},v={key:0},g=e("path",{fill:"#d80027",d:"m0 384 255.8-29.7L512 384v128H0z"},null,-1),h=e("path",{fill:"#0052b4",d:"m0 256 259.5-31L512 256v128H0z"},null,-1),w=e("path",{fill:"#ffda44",d:"M0 0h512v256H0z"},null,-1),x={fill:"none"},y=["r"],N=i({__name:"co",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(r){const l=r,a=t(()=>512+2*l.strokeWidth),o=t(()=>-l.strokeWidth),c=t(()=>256+l.strokeWidth/2);return(B,W)=>(s(),f("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${o.value} ${o.value} ${a.value} ${a.value}`},[k,e("g",p,[l.flagName?(s(),f("title",v,n(l.flagName),1)):d("",!0),g,h,w]),e("g",x,[e("circle",{cx:"256",cy:"256",r:c.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,y)])],8,u))}});export{N as default};