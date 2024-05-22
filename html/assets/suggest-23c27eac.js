import{d as J,i as o,u as K,N as r,j as R,k as q,l as z,C as O,o as x,m as w,n as s,w as b,v as A,p as I,F as H,q as Q,t as y,s as L,x as E,y as W}from"./index-4807f7b2.js";import{d as X}from"./index-d2310dc6.js";import"./index-60505039.js";const Y={class:"bg-base-100 p-4 rounded text-center"},Z={class:"flex text-center"},ee=["value"],ne=["value"],ae=["value"],se={class:"text-main mt-5"},te={class:"mt-4 mb-4"},oe=s("div",{class:"mt-4"}," If the chain is not offically support on Keplr/Metamask Snap, you can submit these parameters to enable Keplr/Metamask Snap. ",-1),de=J({__name:"suggest",setup(ie){const U=o(""),i=o(""),f=K(),l=o({}),t=o("keplr"),g=o(r.Mainnet),_=o([]),P=o([]),$=R(()=>g.value===r.Mainnet?_.value:P.value);q(()=>{const e=z();l.value=e.current||Object.values(f.chains)[0],C(),f.loadLocalConfig(r.Mainnet).then(n=>{_.value=Object.values(n)}),f.loadLocalConfig(r.Testnet).then(n=>{P.value=Object.values(n)})});function k(){t.value==="keplr"?C():j()}async function C(){var d,u,p,m,v,M,D,S,T,V,B;const e=l.value;if(!((u=(d=e.endpoints)==null?void 0:d.rest)!=null&&u.at(0)))throw new Error("Endpoint does not set");const N=(await O.newDefault(((m=(p=e.endpoints.rest)==null?void 0:p.at(0))==null?void 0:m.address)||"").getBaseBlockLatest()).block.header.chain_id,h=e.keplrPriceStep||{low:.01,average:.025,high:.03},c=((v=e.assets[0].denom_units.find(G=>G.denom===e.assets[0].symbol.toLowerCase()))==null?void 0:v.exponent)||6;i.value=JSON.stringify({chainId:N,chainName:e.chainName,rpc:(S=(D=(M=e.endpoints)==null?void 0:M.rpc)==null?void 0:D.at(0))==null?void 0:S.address,rest:(B=(V=(T=e.endpoints)==null?void 0:T.rest)==null?void 0:V.at(0))==null?void 0:B.address,bip44:{coinType:Number(e.coinType)},coinType:Number(e.coinType),bech32Config:{bech32PrefixAccAddr:e.bech32Prefix,bech32PrefixAccPub:`${e.bech32Prefix}pub`,bech32PrefixValAddr:`${e.bech32Prefix}valoper`,bech32PrefixValPub:`${e.bech32Prefix}valoperpub`,bech32PrefixConsAddr:`${e.bech32Prefix}valcons`,bech32PrefixConsPub:`${e.bech32Prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown",gasPriceStep:h}],gasPriceStep:h,stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"},features:e.keplrFeatures||[]},null,"	")}async function j(){var c,d,u,p,m;const e=l.value,[n]=e.assets;if(!((d=(c=e.endpoints)==null?void 0:c.rest)!=null&&d.at(0)))throw new Error("Endpoint does not set");const h=(await O.newDefault(((p=(u=e.endpoints.rest)==null?void 0:u.at(0))==null?void 0:p.address)||"").getBaseBlockLatest()).block.header.chain_id;i.value=JSON.stringify({chainId:h,chainName:e.chainName,bech32Config:{bech32PrefixAccAddr:e.bech32Prefix},bip44:{coinType:Number(e.coinType)},feeCurrencies:[{coinDenom:n.display,coinMinimalDenom:n.base,coinDecimals:((m=n.denom_units.find(v=>v.denom===n.display))==null?void 0:m.exponent)||6,coinGeckoId:n.coingecko_id,gasPriceStep:{low:.0625,average:.5,high:62.5}}]},null,"	")}function F(){t.value==="keplr"?window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(i.value)).catch(e=>{U.value=e}):X.suggestChain(JSON.parse(i.value))}return(e,n)=>(x(),w("div",Y,[s("div",Z,[b(s("select",{"onUpdate:modelValue":n[0]||(n[0]=a=>g.value=a),class:"select select-bordered"},[s("option",{value:I(r).Mainnet},"Mainnet",8,ee),s("option",{value:I(r).Testnet},"Testnet",8,ne)],512),[[A,g.value]]),b(s("select",{"onUpdate:modelValue":n[1]||(n[1]=a=>l.value=a),class:"select select-bordered mx-5",onChange:k},[(x(!0),w(H,null,Q($.value,a=>(x(),w("option",{value:a},y(a.chainName),9,ae))),256))],544),[[A,l.value]]),s("label",null,[b(s("input",{type:"radio","onUpdate:modelValue":n[2]||(n[2]=a=>t.value=a),value:"keplr",class:"radio radio-bordered",onChange:k},null,544),[[L,t.value]]),E(" Keplr")]),s("label",null,[b(s("input",{type:"radio","onUpdate:modelValue":n[3]||(n[3]=a=>t.value=a),value:"metamask",class:"radio radio-bordered ml-4",onChange:k},null,544),[[L,t.value]]),E(" Metamask")])]),s("div",se,[b(s("textarea",{"onUpdate:modelValue":n[4]||(n[4]=a=>i.value=a),class:"textarea textarea-bordered w-full",rows:"15"},null,512),[[W,i.value]])]),s("div",te,[s("button",{class:"btn !bg-primary !border-primary text-white mr-2",onClick:F},"Suggest "+y(l.value.chainName)+" TO "+y(t.value),1),oe])]))}});export{de as default};