import{k as f,s as t,o,c as r,A as e,B as i,C as n,D as u}from"./C3C76hVJ.js";const k=["viewBox"],m=e("mask",{id:"8f12de6b-cbe8-4fc3-bb3b-c11b62d53f49"},[e("circle",{cx:"256",cy:"256",r:"256",fill:"#fff"})],-1),p={mask:"url(#8f12de6b-cbe8-4fc3-bb3b-c11b62d53f49)"},h={key:0},v=e("path",{fill:"#eee",d:"M43.6 109.4 512 144.7v222.6L43.8 397.2z"},null,-1),b=e("path",{fill:"#d80027",d:"M0 0h512v144.7H111z"},null,-1),g=e("path",{fill:"#333",d:"M111 367.3h401V512H0z"},null,-1),w=e("path",{fill:"#496e2d",d:"M0 0v512l256-256z"},null,-1),x={fill:"none"},y=["r"],C=f({__name:"sd",props:{flagName:{},strokeColor:{default:"#000"},strokeWidth:{default:0}},setup(c){const l=c,a=t(()=>512+2*l.strokeWidth),s=t(()=>-l.strokeWidth),d=t(()=>256+l.strokeWidth/2);return(B,z)=>(o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",class:"svg-circle-flags",viewBox:`${s.value} ${s.value} ${a.value} ${a.value}`},[m,e("g",p,[l.flagName?(o(),r("title",h,i(l.flagName),1)):n("",!0),v,b,g,w]),e("g",x,[e("circle",{cx:"256",cy:"256",r:d.value,fill:"none",style:u({stroke:l.strokeColor,strokeWidth:l.strokeWidth})},null,12,y)])],8,k))}});export{C as default};