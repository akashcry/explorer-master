import{d as p,i as b,j as d,o as i,m as o,F as y,q as g,K as k,t as h,G as f}from"./index-4807f7b2.js";const v={class:"my-5 text-center"},_={key:0,class:"btn-group"},x=["onClick"],l=3,B=p({__name:"PaginationBar",props:{total:{type:String},limit:{type:Number},callback:{type:Function,required:!0}},setup(s){const e=s,r=b(1),c=d(()=>{const a=[],n=Number(e.total||0);if(n>0&&e.limit&&n>e.limit){let t=0;for(;!(t*e.limit>=n);)t+=1,!(n/e.limit>10&&t>l&&t<n/e.limit-l+1&&!(t>=r.value-1&&t<=r.value+1))&&a.push({color:t===r.value?"btn-primary":"",page:t})}return a});function u(a){r.value=a,e.callback(a)}return(a,n)=>(i(),o("div",v,[s.total&&s.limit?(i(),o("div",_,[(i(!0),o(y,null,g(c.value,({page:t,color:m})=>(i(),o("button",{key:t,class:k(["btn bg-gray-100 text-gray-500 hover:text-white border-none dark:bg-gray-800 dark:text-white",{"!btn-primary":m==="btn-primary"}]),onClick:C=>u(t)},h(t),11,x))),128))])):f("",!0)]))}});export{B as _};