import{k as n,s as a,o,c as r,A as e,B as c,C as d,D as m}from"./C3C76hVJ.js";const u=["viewBox"],h=e("mask",{id:"db7f861a-12a0-4237-9698-a15b9fbaa88c"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),k={mask:"url(#db7f861a-12a0-4237-9698-a15b9fbaa88c)"},p={key:0},v=e("path",{fill:"#eee",d:"m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"},null,-1),g=e("path",{fill:"#d80027",d:"M0 0h512v167H0z"},null,-1),y=e("path",{fill:"#333",d:"M0 345h512v167H0z"},null,-1),b=e("path",{fill:"#6da544",d:"m153 194.8 13.8 42.5h44.7l-36.2 26.3 13.8 42.5-36.1-26.3-36.2 26.3 13.8-42.5-36.2-26.3h44.7zm206 0 13.9 42.5h44.7l-36.2 26.3 13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7z"},null,-1),w={fill:"none"},x=["r"],C=n({__name:"sy",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(i){const l=i,t=a(()=>512+2*l.strokeWidth),s=a(()=>-l.strokeWidth),f=a(()=>256+l.strokeWidth/2);return(z,B)=>(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${s.value} ${s.value} ${t.value} ${t.value}`},[h,e("g",k,[l.flagName?(o(),r("title",p,c(l.flagName),1)):d("",!0),v,g,y,b]),e("g",w,[e("circle",{cx:"256",cy:"256",r:f.value,fill:"none",style:m({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,x)])],8,u))}});export{C as default};