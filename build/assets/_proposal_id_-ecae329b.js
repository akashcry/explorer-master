import{d as rt,i as T,H as ut,Y as ct,a1 as dt,X as vt,l as _t,ai as mt,a0 as d,a7 as pt,J as ht,o as v,m as _,n as e,t as o,K as D,p as r,L as w,G as E,F as J,q as Y,af as ft,x as bt,P as A}from"./index-053db2cc.js";import{b as gt,W as yt}from"./index-ea9cedb8.js";import{_ as K}from"./Countdown.vue_vue_type_style_index_0_lang-d0f2863b.js";import{_ as xt}from"./PaginationBar.vue_vue_type_script_setup_true_lang-67342ed7.js";import"./browser-cf2306ab.js";import"./index-32eed8c6.js";const St={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},Pt={class:"card-title flex flex-col md:!justify-between md:!flex-row mb-2"},Ot={class:"truncate w-full"},Tt={class:""},wt={key:0},Nt={class:"gap-4 mb-4 grid lg:!!grid-cols-3 auto-rows-max"},kt={class:"bg-base-100 px-4 pt-3 pb-4 rounded shadow"},$t={class:"card-title mb-1"},Dt={class:"block text-sm mb-1"},Et={class:"h-5 w-full relative"},At={class:"absolute inset-x-0 inset-y-0 text-center text-sm text-[#666] dark:text-[#eee] flex items-center justify-center"},Vt={class:"mt-6 grid grid-cols-2"},It={class:"bg-base-100 px-4 pt-3 pb-5 rounded shadow lg:!!col-span-2"},Lt={class:"card-title"},Ct={class:"px-1"},Rt={class:"flex items-center mb-4 mt-2"},Bt=e("div",{class:"w-2 h-2 rounded-full bg-error mr-3"},null,-1),Ut={class:"text-base flex-1 text-main"},Wt={class:"text-sm"},Ft={class:"flex items-center mb-4"},Gt=e("div",{class:"w-2 h-2 rounded-full bg-primary mr-3"},null,-1),jt={class:"text-base flex-1 text-main"},qt={class:"text-sm"},zt={class:"mb-4"},Ht={class:"flex items-center"},Jt=e("div",{class:"w-2 h-2 rounded-full bg-yes mr-3"},null,-1),Yt={class:"text-base flex-1 text-main"},Kt={class:"text-sm"},Mt={class:"pl-5 text-sm mt-2"},Xt={class:"flex items-center mb-1"},Qt=e("div",{class:"w-2 h-2 rounded-full bg-success mr-3"},null,-1),Zt={class:"text-base flex-1 text-main"},te={class:"text-sm"},ee={class:"pl-5 text-sm"},se={key:0,class:"mt-4"},ae={class:"flex items-center"},oe=e("div",{class:"w-2 h-2 rounded-full bg-warning mr-3"},null,-1),ne={class:"text-base flex-1 text-main"},le={key:0},ie={key:1},re={class:"text-sm"},ue={class:"pl-5 text-sm mt-2"},ce={class:"bg-base-100 px-4 pt-3 pb-4 rounded mb-4 shadow"},de={class:"card-title"},ve={class:"overflow-x-auto"},_e={class:"table w-full table-zebra"},me={class:"py-2 text-sm"},pe={key:1,class:"py-2 text-sm"},Se=rt({__name:"[proposal_id]",props:["proposal_id","chain"],setup(N){const b=N,s=T({}),u=ut(),g=ct(),B=dt(),U=vt(),y=_t();g.fetchProposal(b.proposal_id).then(t=>{var c,p,f;const a=mt(t.proposal);((c=t.proposal)==null?void 0:c.status)==="PROPOSAL_STATUS_VOTING_PERIOD"&&g.fetchTally(b.proposal_id).then(n=>{a.final_tally_result=n==null?void 0:n.tally}),s.value=a,(p=a.content)!=null&&p.changes&&((f=a.content)==null||f.changes.forEach(n=>{y.rpc.getParams(n.subspace,n.key).then(h=>{s.value.content&&h.param&&(s.value.content.current?s.value.content.current.push(h.param):s.value.content.current=[h.param])})}));const l=a.content["@type"]||"";l.endsWith("MsgUpdateParams")&&(l.indexOf("staking")>-1?y.rpc.getStakingParams().then(n=>{k(n)}):l.indexOf("gov")>-1?y.rpc.getGovParamsVoting().then(n=>{k(n)}):l.indexOf("distribution")>-1?y.rpc.getDistributionParams().then(n=>{k(n)}):l.indexOf("slashing")>-1&&y.rpc.getSlashingParams().then(n=>{k(n)}))});function k(t){var a;s.value.content&&t.params&&(s.value.content.params=[(a=s.value.content)==null?void 0:a.params],s.value.content.current=[t.params])}const W=d(()=>s.value.status==="PROPOSAL_STATUS_PASSED"?"success":s.value.status==="PROPOSAL_STATUS_REJECTED"?"error":""),M=d(()=>s.value.status?s.value.status.replace("PROPOSAL_STATUS_",""):""),X=T({});g.fetchProposalDeposits(b.proposal_id).then(t=>X.value=t);const V=T({}),I=T(new pt),L=T({});g.fetchProposalVotes(b.proposal_id).then(t=>{V.value=t.votes,L.value=t.pagination});function x(t){return t?u.toDay(t,"from"):""}const Q=d(()=>{const t=new Date;return new Date(s.value.voting_end_time).getTime()-t.getTime()}),Z=d(()=>{var c,p,f,n,h,S,P;const t=Number(((p=(c=s.value.content)==null?void 0:c.plan)==null?void 0:p.height)||0);if(t>0){const O=ht(),$=Number(((h=(n=(f=O.latest)==null?void 0:f.block)==null?void 0:n.header)==null?void 0:h.height)||0);return(t-$)*Number((O.blocktime/1e3).toFixed())*1e3}const a=new Date;return new Date(((P=(S=s.value.content)==null?void 0:S.plan)==null?void 0:P.time)||"").getTime()-a.getTime()}),m=d(()=>{const t=s.value.final_tally_result;let a=0;return t&&(a+=Number(t.abstain||0),a+=Number(t.yes||0),a+=Number(t.no||0),a+=Number(t.no_with_veto||0)),a}),tt=d(()=>{var t;if(m.value>0){const a=((t=U.pool)==null?void 0:t.bonded_tokens)||"1";return u.percent(m.value/Number(a))}return 0}),et=d(()=>{var t,a;if(m.value>0){const l=((a=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:a.yes)||0;return u.percent(Number(l)/m.value)}return 0}),st=d(()=>{var t,a;if(m.value>0){const l=((a=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:a.no)||0;return u.percent(Number(l)/m.value)}return 0}),at=d(()=>{var t,a;if(m.value>0){const l=((a=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:a.no_with_veto)||0;return u.percent(Number(l)/m.value)}return 0}),ot=d(()=>{var t,a;if(m.value>0){const l=((a=(t=s.value)==null?void 0:t.final_tally_result)==null?void 0:a.abstain)||0;return u.percent(Number(l)/m.value)}return 0}),nt=d(()=>[{name:"Turnout",value:tt.value,class:"bg-info"},{name:"Yes",value:et.value,class:"bg-success"},{name:"No",value:st.value,class:"bg-error"},{name:"No With Veto",value:at.value,class:"bg-red-800"},{name:"Abstain",value:ot.value,class:"bg-warning"}]);function lt(t){const{data:a}=A.fromBech32(t),l=A.toHex(a),c=U.validators.find(p=>A.toHex(A.fromBech32(p.operator_address).data)===l);return c?c.description.moniker:t}function it(t){I.value.setPage(t),g.fetchProposalVotes(b.proposal_id,I.value).then(a=>{V.value=a.votes,L.value=a.pagination})}function C(t){return t?JSON.parse(t):{}}return(t,a)=>{var l,c,p,f,n,h,S,P,O,$,F,G,j,q,z;return v(),_("div",null,[e("div",St,[e("h2",Pt,[e("p",Ot,o(N.proposal_id)+". "+o(s.value.title||((l=s.value.content)==null?void 0:l.title)||((p=C((c=s.value)==null?void 0:c.metadata))==null?void 0:p.title)),1),e("div",{class:D(["badge badge-ghost",r(W)==="success"?"text-yes":r(W)==="error"?"text-no":"text-info"])},o(r(M)),3)]),e("div",Tt,[w(gt,{value:s.value.content},null,8,["value"])]),s.value.summary&&!((f=s.value.content)!=null&&f.description)||(h=C((n=s.value)==null?void 0:n.metadata))!=null&&h.summary?(v(),_("div",wt,[w(r(yt),{"model-value":r(u).multiLine(s.value.summary||((P=C((S=s.value)==null?void 0:S.metadata))==null?void 0:P.summary)),previewOnly:"",class:"md-editor-recover"},null,8,["model-value"])])):E("",!0)]),e("div",Nt,[e("div",kt,[e("h2",$t,o(t.$t("gov.tally")),1),(v(!0),_(J,null,Y(r(nt),(i,R)=>(v(),_("div",{class:"mb-1",key:R},[e("label",Dt,o(i.name),1),e("div",Et,[e("div",{class:D(["absolute inset-x-0 inset-y-0 w-full opacity-10 rounded-sm",`${i.class}`])},null,2),e("div",{class:D(["absolute inset-x-0 inset-y-0 rounded-sm",`${i.class}`]),style:ft(`width: ${i.value==="-"||i.value==="NaN%"?"0%":i.value}`)},null,6),e("p",At,o(i.value),1)])]))),128)),e("div",Vt,[e("label",{for:"vote",class:"btn btn-primary float-right btn-sm mx-1",onClick:a[0]||(a[0]=i=>r(B).open("vote",{proposal_id:N.proposal_id}))},o(t.$t("gov.btn_vote")),1),e("label",{for:"deposit",class:"btn btn-primary float-right btn-sm mx-1",onClick:a[1]||(a[1]=i=>r(B).open("deposit",{proposal_id:N.proposal_id}))},o(t.$t("gov.btn_deposit")),1)])]),e("div",It,[e("h2",Lt,o(t.$t("gov.timeline")),1),e("div",Ct,[e("div",Rt,[Bt,e("div",Ut,o(t.$t("gov.submit_at"))+": "+o(r(u).toDay(s.value.submit_time)),1),e("div",Wt,o(x(s.value.submit_time)),1)]),e("div",Ft,[Gt,e("div",jt,o(t.$t("gov.deposited_at"))+": "+o(r(u).toDay(s.value.status==="PROPOSAL_STATUS_DEPOSIT_PERIOD"?s.value.deposit_end_time:s.value.voting_start_time)),1),e("div",qt,o(x(s.value.status==="PROPOSAL_STATUS_DEPOSIT_PERIOD"?s.value.deposit_end_time:s.value.voting_start_time)),1)]),e("div",zt,[e("div",Ht,[Jt,e("div",Yt,o(t.$t("gov.vote_start_from"))+" "+o(r(u).toDay(s.value.voting_start_time)),1),e("div",Kt,o(x(s.value.voting_start_time)),1)]),e("div",Mt,[w(K,{time:r(Q)},null,8,["time"])])]),e("div",null,[e("div",Xt,[Qt,e("div",Zt,o(t.$t("gov.vote_end"))+" "+o(r(u).toDay(s.value.voting_end_time)),1),e("div",te,o(x(s.value.voting_end_time)),1)]),e("div",ee,o(t.$t("gov.current_status"))+": "+o(t.$t(`gov.proposal_statuses.${s.value.status}`)),1)]),(F=($=(O=s.value)==null?void 0:O.content)==null?void 0:$["@type"])!=null&&F.endsWith("SoftwareUpgradeProposal")?(v(),_("div",se,[e("div",ae,[oe,e("div",ne,[bt(o(t.$t("gov.upgrade_plan"))+": ",1),Number(((j=(G=s.value.content)==null?void 0:G.plan)==null?void 0:j.height)||"0")>0?(v(),_("span",le," (EST)")):(v(),_("span",ie,o(r(u).toDay((z=(q=s.value.content)==null?void 0:q.plan)==null?void 0:z.time)),1))]),e("div",re,o(x(s.value.voting_end_time)),1)]),e("div",ue,[w(K,{time:r(Z)},null,8,["time"])])])):E("",!0)])])]),e("div",ce,[e("h2",de,o(t.$t("gov.votes")),1),e("div",ve,[e("table",_e,[e("tbody",null,[(v(!0),_(J,null,Y(V.value,(i,R)=>(v(),_("tr",{key:R},[e("td",me,o(lt(i.voter)),1),i.option?(v(),_("td",{key:0,class:D(["py-2 text-sm",{"text-yes":i.option==="VOTE_OPTION_YES","text-gray-400":i.option==="VOTE_OPTION_ABSTAIN"}])},o(String(i.option).replace("VOTE_OPTION_","")),3)):E("",!0),i.options?(v(),_("td",pe,o(i.options.map(H=>`${H.option.replace("VOTE_OPTION_","")}:${r(u).percent(H.weight)}`).join(", ")),1)):E("",!0)]))),128))])]),w(xt,{limit:I.value.limit,total:L.value.total,callback:it},null,8,["limit","total"])])])])}}});export{Se as default};