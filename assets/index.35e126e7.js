import{n as C}from"./index.ae2141be.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css               */import{e as c,d as j,B as V,C as S,F as m,aH as e,aG as a,aL as _,u as p,b3 as A,b4 as E,by as z,ab as D,aW as N,b7 as P,bz as k,b8 as T,bA as M}from"./arco.873a837e.js";import"./chart.2547f6b7.js";import"./vue.6325bc75.js";const R=[{title:"\u5E8F\u53F7",dataIndex:"serial",width:70,align:"center"},{title:"\u7F51\u5173\u540D\u79F0",dataIndex:"wangguanmingcheng",align:"center"},{title:"\u7F51\u5173ID",dataIndex:"wangguanid",align:"center"},{title:"\u544A\u8B66\u65F6\u95F4",dataIndex:"gaojingshijian",align:"center"},{title:"\u544A\u8B66\u5185\u5BB9",dataIndex:"gaojingneirong",align:"center"}],u=c({current:1,pageSize:10,total:0,showTotal:!0,showPageSize:!0}),U={class:"outer-container"},G={class:"section-container",style:{display:"flex"}},H={class:"section-container",style:{flex:"1",overflow:"auto"}},$=j({__name:"index",setup(L){const r=()=>({gatewayName:"",gatewayId:""}),f=c([{serial:1,wangguanmingcheng:"A\u533A-1\u53F7",wangguanid:"32132131321",gaojingshijian:"2022.12.12 12:12",gaojingneirong:"\u7F51\u5173\u79BB\u7EBF"},{serial:2,wangguanmingcheng:"A\u533A-2\u53F7",wangguanid:"32132131321",gaojingshijian:"2022.12.12 12:12",gaojingneirong:"\u7F51\u5173\u79BB\u7EBF"}]),n=c(r()),h=()=>{n.value=r()},F=t=>{u.value.current=t},w=t=>{u.value.current=1,u.value.pageSize=t};return(t,o)=>{const d=A,l=E,s=z,B=D,g=N,y=C,x=P,b=k,v=T,I=M;return V(),S("div",U,[m("div",G,[e(v,{model:n.value},{default:a(()=>[e(b,{gutter:12},{default:a(()=>[e(s,{md:6,sm:12,xs:24},{default:a(()=>[e(l,{"no-style":""},{default:a(()=>[e(d,{modelValue:n.value.gatewayName,"onUpdate:modelValue":o[0]||(o[0]=i=>n.value.gatewayName=i),placeholder:"\u8BF7\u8F93\u5165\u7F51\u5173\u540D\u79F0","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:6,sm:12,xs:24},{default:a(()=>[e(l,{"no-style":""},{default:a(()=>[e(d,{modelValue:n.value.gatewayId,"onUpdate:modelValue":o[1]||(o[1]=i=>n.value.gatewayId=i),placeholder:"\u8BF7\u8F93\u5165\u7F51\u5173ID","allow-clear":""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{md:6,sm:12,xs:24},{default:a(()=>[e(l,{"no-style":""},{default:a(()=>[e(x,null,{default:a(()=>[e(g,{type:"primary"},{icon:a(()=>[e(B)]),default:a(()=>[_(" \u67E5\u8BE2 ")]),_:1}),e(g,{onClick:h},{icon:a(()=>[e(y)]),default:a(()=>[_(" \u91CD\u7F6E ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),m("div",H,[e(I,{bordered:{cell:!0},columns:p(R),pagination:p(u),data:f.value,onPageChange:F,onPageSizeChange:w},null,8,["columns","pagination","data"])])])}}});export{$ as default};
