import{cC as t,cD as o,P as c,a7 as m,T as d,l as n}from"./index-0bb3f38c.js";const _={cosmwasm_code:{url:"/cosmwasm/wasm/v1/code",adapter:t},cosmwasm_code_id:{url:"/cosmwasm/wasm/v1/code/{code_id}",adapter:t},cosmwasm_code_id_contracts:{url:"/cosmwasm/wasm/v1/code/{code_id}/contracts",adapter:t},cosmwasm_param:{url:"/cosmwasm/wasm/v1/codes/params",adapter:t},cosmwasm_contract_address:{url:"/cosmwasm/wasm/v1/contract/{address}",adapter:t},cosmwasm_contract_address_history:{url:"/cosmwasm/wasm/v1/contract/{address}/history",adapter:t},cosmwasm_contract_address_raw_query_data:{url:"/cosmwasm/wasm/v1/contract/{address}/raw/{query_data}",adapter:t},cosmwasm_contract_address_smart_query_data:{url:"/cosmwasm/wasm/v1/contract/{address}/smart/{query_data}",adapter:t},cosmwasm_contract_address_state:{url:"/cosmwasm/wasm/v1/contract/{address}/state",adapter:t},cosmwasm_wasm_contracts_creator:{url:"/cosmwasm/wasm/v1/contracts/creator/{creator_address}",adapter:t}};class w extends o{getWasmCodeList(s){return this.request(this.registry.cosmwasm_code,{})}getWasmCodeById(s){return this.request(this.registry.cosmwasm_code,{code_id:s})}getWasmCodeContracts(s,a){return this.request(this.registry.cosmwasm_code_id_contracts,{code_id:s})}getWasmParams(){return this.request(this.registry.cosmwasm_param,{})}getWasmContracts(s){return this.request(this.registry.cosmwasm_contract_address,{address:s})}getWasmContractsByCreator(s,a){return this.request(this.registry.cosmwasm_wasm_contracts_creator,{creator_address:s})}getWasmContractHistory(s){return this.request(this.registry.cosmwasm_contract_address_history,{address:s})}getWasmContractRawQuery(s,a){const r=c.toBase64(new TextEncoder().encode(a));return this.request(this.registry.cosmwasm_contract_address_raw_query_data,{address:s,query_data:r})}getWasmContractSmartQuery(s,a){const r=c.toBase64(new TextEncoder().encode(a));return this.request(this.registry.cosmwasm_contract_address_smart_query_data,{address:s,query_data:r})}getWasmContractStates(s,a){a||(a=new m);const r=`?${a.toQueryString()}`;return this.request(this.registry.cosmwasm_contract_address_state,{address:s},r)}}const u=d("module-wasm",{state:()=>({}),getters:{wasmClient(){const e=n();return new w(e.endpoint.address,_)}}});export{u};
