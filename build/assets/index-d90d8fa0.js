import{d as C,J as L,a0 as h,o as i,e as A,p as t,i as D,H as N,r as S,m as w,n as e,K as j,t as r,L as y,M as $,x as F,w as T,Q as V,F as z,q as R}from"./index-053db2cc.js";import{A as q}from"./vue3-apexcharts.common-953f12e9.js";import{b as B}from"./route-block-83d24a4e.js";const E=C({__name:"TxsInBlocksChart",setup(d){const s=L(),c=h(()=>({chart:{type:"bar",height:150},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!1},colors:["#5A67D8"],xaxis:{labels:{show:!1,rotate:-45},show:!1,categories:s.recents.map(a=>a.block.header.height).concat(Array(50-s.recents.length).fill(""))}})),l=h(()=>{var a;return[{name:"Txs",data:((a=s.recents)==null?void 0:a.map(n=>n.block.data.txs.length))||[]}]});return(a,n)=>(i(),A(t(q),{type:"bar",height:"150",options:t(c),series:t(l)},null,8,["options","series"]))}}),H={class:"tabs tabs-boxed bg-transparent mb-4"},I={class:"grid xl:!grid-cols-6 md:!grid-cols-4 grid-cols-1 gap-3"},J={class:"flex justify-between"},K={class:"text-md font-bold sm:!text-lg"},M={class:"rounded text-xs whitespace-nowrap font-medium text-green-600"},O={class:"flex justify-between tooltip","data-tip":"Block Proposor"},P={class:"mt-2 hidden text-sm sm:!block truncate"},Q={class:"text-right mt-1 whitespace-nowrap"},G=C({__name:"index",props:["chain"],setup(d){const s=D("blocks"),c=L(),l=N(),a=h(()=>c.recents);return(n,p)=>{var u,m;const b=S("RouterLink");return i(),w("div",null,[e("div",H,[e("a",{class:j(["tab text-gray-400 uppercase",{"tab-active":t(s)==="blocks"}]),onClick:p[0]||(p[0]=o=>s.value="blocks")},r(n.$t("block.recent")),3),y(b,{class:"tab text-gray-400 uppercase",to:`/${d.chain}/block/${Number(((m=(u=t(c).latest)==null?void 0:u.block)==null?void 0:m.header.height)||0)+1e4}`},{default:$(()=>[F(r(n.$t("block.future")),1)]),_:1},8,["to"])]),T(e("div",null,[y(E),e("div",I,[(i(!0),w(z,null,R(t(a),o=>(i(),A(b,{class:"flex flex-col justify-between rounded p-4 shadow bg-base-100",to:`/${d.chain}/block/${o.block.header.height}`},{default:$(()=>{var f,_,x,k,g,v;return[e("div",J,[e("h3",K,r(o.block.header.height),1),e("span",M,r(t(l).toDay((_=(f=o.block)==null?void 0:f.header)==null?void 0:_.time,"from")),1)]),e("div",O,[e("div",P,[e("span",null,r(t(l).validator((k=(x=o.block)==null?void 0:x.header)==null?void 0:k.proposer_address)),1)]),e("span",Q,r((v=(g=o.block)==null?void 0:g.data)==null?void 0:v.txs.length)+" txs ",1)])]}),_:2},1032,["to"]))),256))])],512),[[V,t(s)==="blocks"]])])}}});typeof B=="function"&&B(G);export{G as default};
