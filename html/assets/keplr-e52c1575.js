import{d as B,i,u as M,k as T,l as I,C as V,o as r,m as l,n,w as y,v as $,F,q as K,t as C,p as O,y as E}from"./index-4807f7b2.js";const G={class:"bg-base-100 p-4 rounded text-center"},L={class:"flex"},J=["value"],U={class:"text-main mt-5"},j=n("div",{class:"mt-4 mb-4"}," If the chain is not offically support on Keplr, you can submit these parameters to enable Keplr. ",-1),W=B({__name:"keplr",setup(q){const D=i(""),o=i(""),d=M(),t=i({});T(()=>{const e=I();t.value=e.current||Object.values(d.chains)[0],u()});async function u(){var b,m,h,f,v,x,k,_,g,w,P;const e=t.value;if(!((m=(b=e.endpoints)==null?void 0:b.rest)!=null&&m.at(0)))throw new Error("Endpoint does not set");const S=(await V.newDefault(((f=(h=e.endpoints.rest)==null?void 0:h.at(0))==null?void 0:f.address)||"").getBaseBlockLatest()).block.header.chain_id,p=e.keplrPriceStep||{low:.01,average:.025,high:.03},c=((v=e.assets[0].denom_units.find(A=>A.denom===e.assets[0].symbol.toLowerCase()))==null?void 0:v.exponent)||6;o.value=JSON.stringify({chainId:S,chainName:e.chainName,rpc:(_=(k=(x=e.endpoints)==null?void 0:x.rpc)==null?void 0:k.at(0))==null?void 0:_.address,rest:(P=(w=(g=e.endpoints)==null?void 0:g.rest)==null?void 0:w.at(0))==null?void 0:P.address,bip44:{coinType:Number(e.coinType)},coinType:Number(e.coinType),bech32Config:{bech32PrefixAccAddr:e.bech32Prefix,bech32PrefixAccPub:`${e.bech32Prefix}pub`,bech32PrefixValAddr:`${e.bech32Prefix}valoper`,bech32PrefixValPub:`${e.bech32Prefix}valoperpub`,bech32PrefixConsAddr:`${e.bech32Prefix}valcons`,bech32PrefixConsPub:`${e.bech32Prefix}valconspub`},currencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown",gasPriceStep:p}],gasPriceStep:p,stakeCurrency:{coinDenom:e.assets[0].symbol,coinMinimalDenom:e.assets[0].base,coinDecimals:c,coinGeckoId:e.assets[0].coingecko_id||"unknown"},features:e.keplrFeatures||[]},null,"	")}function N(){window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(o.value)).catch(e=>{D.value=e})}return(e,a)=>(r(),l("div",G,[n("div",L,[y(n("select",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.value=s),class:"select select-bordered mx-5",onChange:u},[(r(!0),l(F,null,K(O(d).chains,s=>(r(),l("option",{value:s},C(s.chainName),9,J))),256))],544),[[$,t.value]]),n("button",{class:"btn !bg-yes !border-yes text-white px-10",onClick:N},"Add "+C(t.value.chainName)+" TO Keplr Wallet",1)]),n("div",U,[y(n("textarea",{"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s),class:"textarea textarea-bordered w-full",rows:"15"},null,512),[[E,o.value]])]),j]))}});export{W as default};