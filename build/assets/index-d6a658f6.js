import{d as w,l as k,J as x,i as y,j as c,o as r,m as l,n as e,t as s,w as $,v as B,F as C,q as N,p as S}from"./index-053db2cc.js";import{b as v}from"./route-block-83d24a4e.js";const T={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},j={class:"card-title"},D={class:"my-4 grid grid-flow-col auto-cols-max overflow-auto"},F={class:"form-control"},P={class:"input-group"},U={disabled:"",selected:""},V=["value"],q={class:"text-base"},E=e("div",{class:"mockup-code bg-base-200 my-2"},[e("pre",{"data-prefix":"1"},[e("code",{class:"text-gray-800 dark:invert"},'<script type="module" src="https://unpkg.com/ping-widget@latest/dist/ping-widget.js">')])],-1),I={class:"bg-base-100 my-5 px-4 pt-3 pb-4 rounded shadow"},J={class:"card-title"},L={class:"mt-4"},M={class:"text-base"},z={class:"mockup-code bg-base-200 my-2"},A=e("pre",{"data-prefix":">"},[e("code",{class:"text-green-400"},"<!-- This widget is optional. --> ")],-1),G={"data-prefix":">"},H={class:"text-gray-800 dark:invert"},K={class:"text-base"},O={class:"mockup-code bg-base-200 my-2"},Q={"data-prefix":">"},R={class:"text-gray-800 dark:invert"},W={"data-prefix":">"},X={class:"text-gray-800 dark:invert"},Y=w({__name:"index",props:["chain"],setup(Z){var u,h,g,m;const o=k(),b=x(),i=y((m=(g=(h=(u=o.current)==null?void 0:u.endpoints)==null?void 0:h.rest)==null?void 0:g.at(0))==null?void 0:m.address),f=c(()=>{var t,a,d;return((d=(a=(t=b.latest)==null?void 0:t.block)==null?void 0:a.header)==null?void 0:d.chain_id)||""}),p=c(()=>{var t;return((t=o==null?void 0:o.current)==null?void 0:t.prettyName)||""}),_=c(()=>{var t;return`m/44'/${(t=o.current)==null?void 0:t.coinType}/0'/0/0`});return(t,a)=>{var d;return r(),l("div",null,[e("div",T,[e("h2",j,s(t.$t("widget.title")),1),e("div",D,[e("div",F,[e("div",P,[e("span",null,s(t.$t("widget.endpoint")),1),$(e("select",{"onUpdate:modelValue":a[0]||(a[0]=n=>i.value=n),class:"select select-bordered w-fit"},[e("option",U,s(t.$t("widget.select_endpoint")),1),(r(!0),l(C,null,N((d=S(o).current)==null?void 0:d.endpoints.rest,n=>(r(),l("option",{value:n.address},s(n.address),9,V))),256))],512),[[B,i.value]])])])]),e("span",q,s(t.$t("widget.text_1")),1),E]),e("div",I,[e("h2",J,s(t.$t("module.widget")),1),e("div",L,[e("span",M," 1. "+s(t.$t("widget.text_2")),1),e("div",z,[A,e("pre",G,[e("code",H,'<ping-connect-wallet chain-id="'+s(f.value)+'" hd-path="'+s(_.value)+'"/>',1)])]),e("span",K," 2. "+s(t.$t("widget.text_3")),1),e("div",O,[e("pre",Q,[e("code",R,'<ping-token-convert chain-name="'+s(p.value)+'" endpoint="'+s(i.value)+'" hd-path="'+s(_.value)+'"/>',1)]),e("pre",W,[e("code",X,'<label for="PingTokenConvert" class="btn btn-sm">Buy '+s(p.value.toUpperCase())+"</label>",1)])])])])])}}});typeof v=="function"&&v(Y);export{Y as default};
