import{d as V,o as l,m as r,F as z,q as L,n as t,K as g,X as U,H as W,J as G,l as q,i as u,j as R,ac as J,P as D,k as X,cF as Q,ab as Y,r as Z,t as a,L as I,M as ee,w as te,y as se,p as _,G as $,x as k}from"./index-3b4797b0.js";import{b as M}from"./route-block-83d24a4e.js";const oe={class:"flex gap-0.5"},ae=["data-tip"],ne=V({__name:"UptimeBar",props:{blocks:{type:Array}},setup(C){return(v,m)=>(l(),r("div",oe,[(l(!0),r(z,null,L(C.blocks,(c,p)=>(l(),r("div",{class:"cursor-default",key:p},[t("div",{class:g(["tooltip",c.color]),"data-tip":c.height,style:{width:"3px"}},"   ",10,ae)]))),128))]))}}),ie={class:"tabs tabs-boxed bg-transparent mb-4"},le={class:"tab text-gray-400 capitalize"},re={class:"bg-base-100 px-5 pt-5"},ce={class:"flex items-center gap-x-4"},de={key:0,class:"alert alert-warning my-4"},ue={class:"flex flex-row flex-wrap gap-x-4 mt-4 justify-center"},_e={class:"flex justify-between py-0 w-[248px]"},he={class:"truncate text-sm"},me={class:"ml-1 text-black dark:text-white"},pe={key:0,class:"badge badge-sm bg-transparent border-0 text-red-500 font-bold"},ge={key:1,class:"badge badge-sm bg-transparent text-green-600 border-0 font-bold"},be={class:"mt-5 text-xs flex justify-center gap-2"},fe={class:"font-bold"},ke=t("span",{class:"bg-green-500"}," ",-1),ve=t("span",{class:"bg-yellow-500"}," ",-1),xe=t("span",{class:"bg-red-500"}," ",-1),ye={class:"table table-compact w-full mt-5"},we={class:"capitalize bg-base-200"},$e={class:"text-right"},Ce={class:"text-right"},Ne={class:"text-right"},Se={class:"hover"},je={class:"truncate max-w-sm"},Be={class:"text-right"},ze=["data-tip"],Le={key:0},Pe=["data-tip"],Te={class:"text-xs text-right"},Ae={key:0,class:"text-right"},Fe={class:"text-right"},Ke={class:"capitalize"},Re={colspan:"2",class:"text-right"},De=["data-tip"],Ie={class:"ml-2 btn btn-error btn-xs"},Me=t("td",{colspan:"8"},null,-1),Ve=t("div",{class:"h-6"},null,-1),Ee=V({__name:"index",props:["chain"],setup(C){const v=U(),m=W(),c=G(),p=q(),h=u(0),x=u(""),N=u(!0),y=u({}),P=u({});function E(s=[]){const o=Array(50).fill({height:"0",color:"bg-secondary"}).concat(s);return o.slice(o.length-50)}const S=R(()=>v.validators.map(s=>{const o=J(s.consensus_pubkey);return{moniker:s.description.moniker,hex:o,base64:D.toBase64(D.fromHex(o))}})),j=u({}),T=R(()=>{const s=x.value.length===0?S.value:S.value.filter(n=>n.moniker.toLowerCase().includes(x.value.toLowerCase())),o=Number(y.value.signed_blocks_window||0);return s.map(n=>{const e=P.value[n.hex],i=e&&o>0?(o-Number(e.missed_blocks_counter))/o:void 0;return{moniker:n.moniker,hex:n.hex,base64:n.base64,blocks:E(j.value[n.base64]||[]),uptime:i,missed_blocks_counter:e==null?void 0:e.missed_blocks_counter,signing:e}})}),A=u(!1);c.$subscribe((s,o)=>{var e,i,d;const n=Number(((d=(i=(e=o.latest)==null?void 0:e.block)==null?void 0:i.header)==null?void 0:d.height)||0);n>h.value&&(h.value=n,A.value||(H(),A.value=!0),Number(o.latest.block.header.height)%7===0&&F(),B(o.latest))}),X(()=>{var s;N.value=!0,(s=c.recents)==null||s.forEach(o=>{B(o,"start")}),F(),p.rpc.getSlashingParams().then(o=>{y.value=o.params})});function H(){if(h.value>50&&c.recents.length>=49)return;let s=Promise.resolve();for(let o=h.value-c.recents.length;o>h.value-50&&o>1;o-=1)s=s.then(()=>new Promise(n=>{N.value&&o>h.value-50&&c.fetchBlock(o).then(e=>{B(e,"start"),n()})}))}function B(s,o="end"){S.value.forEach(n=>{var f;const e=(f=s.block.last_commit)==null?void 0:f.signatures.find(w=>w.validator_address===n.base64),i=j.value[n.base64]||[];let d={height:s.block.header.height,color:"bg-red-500"};e&&(d={height:s.block.header.height,color:e.block_id_flag==="BLOCK_ID_FLAG_COMMIT"?"bg-green-500":"bg-yellow-500"}),o==="end"?i.push(d):i.unshift(d),i.length>50&&i.shift(),j.value[n.base64]=i})}function F(){p.rpc.getSlashingSigningInfos().then(s=>{var o;(o=s.info)==null||o.forEach(n=>{P.value[Q(n.address)]=n})})}Y(()=>{N.value=!1});const b=u("2");function K(s){b.value=s}function O(){var s,o,n;v.fetchAllKeyRotation((n=(o=(s=c.latest)==null?void 0:s.block)==null?void 0:o.header)==null?void 0:n.chain_id)}return(s,o)=>{const n=Z("RouterLink");return l(),r("div",null,[t("div",ie,[t("a",{class:g(["tab text-gray-400 capitalize",{"tab-active":b.value==="3"}]),onClick:o[0]||(o[0]=e=>K("3"))},a(s.$t("uptime.overall")),3),t("a",{class:g(["tab text-gray-400 capitalize",{"tab-active":b.value==="2"}]),onClick:o[1]||(o[1]=e=>K("2"))},a(s.$t("module.blocks")),3),I(n,{to:`/${C.chain}/uptime/customize`},{default:ee(()=>[t("a",le,a(s.$t("uptime.customize")),1)]),_:1},8,["to"])]),t("div",re,[t("div",ce,[te(t("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=e=>x.value=e),placeholder:"Keywords to filter validators",class:"input input-sm w-full flex-1 border border-gray-200 dark:border-gray-600"},null,512),[[se,x.value]]),_(p).isConsumerChain?(l(),r("button",{key:0,class:"btn btn-sm btn-primary",onClick:O},"Load Rotated Keys")):$("",!0)]),_(p).isConsumerChain&&Object.keys(_(v).keyRotation).length===0?(l(),r("div",de," Note: Please load rotated keys to see the correct uptime ")):$("",!0),t("div",{class:g(b.value==="2"?"":"hidden")},[t("div",ue,[(l(!0),r(z,null,L(T.value,(e,i)=>(l(),r("div",{key:i},[t("div",_e,[t("label",he,[t("span",me,a(i+1)+"."+a(e.moniker),1)]),Number((e==null?void 0:e.missed_blocks_counter)||0)>10?(l(),r("div",pe,a(e==null?void 0:e.missed_blocks_counter),1)):(l(),r("div",ge,a(e==null?void 0:e.missed_blocks_counter),1))]),I(ne,{blocks:e.blocks},null,8,["blocks"])]))),128))]),t("div",be,[t("span",fe,a(s.$t("uptime.legend"))+": ",1),ke,k(" "+a(s.$t("uptime.committed"))+" ",1),ve,k(" "+a(s.$t("uptime.precommitted"))+" ",1),xe,k(" "+a(s.$t("uptime.missed")),1)])],2),t("div",{class:g([b.value==="3"?"":"hidden","overflow-x-auto"])},[t("table",ye,[t("thead",we,[t("tr",null,[t("td",null,a(s.$t("account.validator")),1),t("td",$e,a(s.$t("module.uptime")),1),t("td",null,a(s.$t("uptime.last_jailed_time")),1),t("td",Ce,a(s.$t("uptime.signed_precommits")),1),t("td",Ne,a(s.$t("uptime.start_height")),1),t("td",null,a(s.$t("uptime.tombstoned")),1)])]),(l(!0),r(z,null,L(T.value,(e,i)=>{var d,f,w;return l(),r("tr",Se,[t("td",null,[t("div",je,a(i+1)+". "+a(e.moniker),1)]),t("td",Be,[t("span",{class:g(e.uptime&&e.uptime>.95?"text-green-500":"text-red-500")},[t("div",{class:"tooltip","data-tip":`${e.missed_blocks_counter} missing blocks`},a(_(m).percent(e.uptime)),9,ze)],2)]),t("td",null,[e.signing&&!e.signing.jailed_until.startsWith("1970")?(l(),r("span",Le,[t("div",{class:"tooltip","data-tip":_(m).toDay(e.signing.jailed_until,"long")},[t("span",null,a(_(m).toDay(e.signing.jailed_until,"from")),1)],8,Pe)])):$("",!0)]),t("td",Te,[e.signing&&e.signing.jailed_until.startsWith("1970")?(l(),r("span",Ae,a(_(m).percent(Number(e.signing.index_offset)/(h.value-Number(e.signing.start_height)))),1)):$("",!0),k(" "+a((d=e.signing)==null?void 0:d.index_offset),1)]),t("td",Fe,a((f=e.signing)==null?void 0:f.start_height),1),t("td",Ke,a((w=e.signing)==null?void 0:w.tombstoned),1)])}),256)),t("tfoot",null,[t("tr",null,[t("td",Re,[k(a(s.$t("uptime.minimum_uptime"))+": ",1),t("span",{class:"lowercase tooltip","data-tip":`Window size: ${y.value.signed_blocks_window}`},[t("span",Ie,a(_(m).percent(y.value.min_signed_per_window)),1)],8,De)]),Me])])])],2),Ve])])}}});typeof M=="function"&&M(Ee);export{Ee as default};