"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38102],{47609:function(e,t,r){r.d(t,{HX:function(){return o},J_:function(){return a}});let n=(0,r(24441).oM)({name:"error",initialState:{alerts:[]},reducers:{alertAdd:(e,t)=>{var r,n;!("object"==typeof t.payload.message&&(null===(r=t.payload.message)||void 0===r?void 0:r.id)&&(null===(n=t.payload.message)||void 0===n?void 0:n.values))&&t.payload.message&&"object"==typeof t.payload.message||-1!==e.alerts.findIndex(e=>e.message===t.payload.message)||e.alerts.push({id:e.alerts.length+1,...t.payload})},alertRemove:e=>{e.alerts=e.alerts.slice(1,e.alerts.length)},alertRemoveById:(e,t)=>{e.alerts=e.alerts.filter(e=>e.id!==t.payload)}}}),{alertAdd:a,alertRemove:i,alertRemoveById:o}=n.actions;t.ZP=n.reducer},15725:function(e,t,r){r.d(t,{Cw:function(){return o},SU:function(){return i}});let n=(0,r(24441).oM)({name:"global",initialState:{color:"dark",routeSelectOpen:!1,chartRebuild:!1,isMobileDevice:!1,currentExchangeAction:"wallets",currentActionTab:""},reducers:{setRouteSelectOpen:(e,t)=>{e.routeSelectOpen=t.payload},setIsMobileDevice:(e,t)=>{e.isMobileDevice=t.payload},setCurrentExchangeAction:(e,t)=>{e.currentExchangeAction=t.payload},setCurrentActionTab:(e,t)=>{e.currentActionTab=t.payload}}}),{setRouteSelectOpen:a,setCurrentExchangeAction:i,setCurrentActionTab:o}=n.actions;t.ZP=n.reducer},26025:function(e,t,r){r.d(t,{A:function(){return n}});let n=e=>e.public.i18n.lang},57111:function(e,t,r){r.d(t,{A8:function(){return l},Eg:function(){return c},Mj:function(){return d},Xp:function(){return m},on:function(){return s},yp:function(){return u}});var n=r(92010),a=r(24441),i=r(86579);let o=(0,a.oM)({name:"ranger",initialState:{withAuth:!1,connected:!1,connecting:!1,subscriptions:[]},reducers:{rangerConnectFetch:(e,t)=>{e.withAuth=t.payload.withAuth,e.connected=!1,e.connecting=!0,e.subscriptions=[]},rangerConnectData:e=>{e.connected=!0,e.connecting=!1},rangerDisconnectData:e=>{e.connected=!1,e.connecting=!1},rangerSubscriptionData:(e,t)=>{e.subscriptions=(0,i.W)([...t.payload.subscriptions],(0,n.cZ)())},rangerSubscribe:(e,t)=>e,rangerUnsubscribe:(e,t)=>e}}),{rangerConnectFetch:l,rangerConnectData:c,rangerDisconnectData:d,rangerSubscriptionData:u,rangerSubscribe:s,rangerUnsubscribe:m}=o.actions;t.ZP=o.reducer},92050:function(e,t,r){r.d(t,{KQ:function(){return a},N8:function(){return i},tz:function(){return o},gv:function(){return l}});var n=r(92010);let a=(0,n.YU)()?e=>e.user.depthIncrement.asks:e=>e.user.depth.asks,i=(0,n.YU)()?e=>e.user.depthIncrement.bids:e=>e.user.depth.bids,o=(0,n.YU)()?e=>e.user.depthIncrement.loading:e=>e.user.depth.loading;(0,n.YU)()||(e=>e.user.depth.timestamp);let l=e=>e.user.depthIncrement.sequence},71897:function(e,t,r){r.d(t,{K4:function(){return c},KO:function(){return n},O6:function(){return a},VP:function(){return s},YQ:function(){return u},gr:function(){return m},jz:function(){return o},mN:function(){return l},sF:function(){return i},tH:function(){return d}});let n=(e,t)=>{let{state:r,id:n}=t,a=e.findIndex(e=>e.id===n),i=e.findIndex(e=>e.id===n);switch(r){case"pending":case"new":case"partiallyFilled":case"pendingCancel":case"cancelling":case"untriggered":case"wait":case"live":case"partially_filled":case"pending_cancel":if(-1===a)return[{...t},...e];return e.map(e=>e.id===t.id?{...t}:e);case"cancelled":case"cancel":case"filled":case"done":case"expired":case"rejected":return i>-1&&e.splice(i,1),e;default:return e.reduce((e,t,r)=>(t.id!==n&&e.push(t),e),[])}},a=e=>{let t=(Number(e.payload.cumExecQty||"0.0")/Number(e.payload.qty||String(e.metadata.qty))*100).toFixed(2);return{id:e.id,ordId:e.payload.orderId||"",cTime:String(new Date(e.createdAt).valueOf()),uTime:String(new Date(e.updatedAt).valueOf()),mTime:String(new Date(e.modifiedAt).valueOf()),px:e.payload.price||String(e.metadata.price),side:e.payload.side||e.metadata.side,instId:e.payload.symbol||e.metadata.symbol,ordType:e.payload.orderType||e.metadata.orderType,sz:e.payload.qty||String(e.metadata.qty),accFillSz:e.payload.cumExecQty||"0.0",filled:t,avgPx:e.payload.avgPrice||"",fee:e.payload.cumExecFee||"",feeCcy:e.payload.feeCurrency||"",state:e.payload.orderStatus||e.state,confirmed:!0}},i=e=>{let t=Number(e.origin_volume)-Number(e.remaining_volume),r=(t/Number(e.origin_volume)*100).toFixed(2);return{id:String(e.id),ordId:String(e.id),uuid:e.uuid,cTime:e.created_at&&"string"==typeof e.created_at?String(new Date(e.created_at).valueOf()):String(1e3*Number(e.created_at)),uTime:"string"==typeof e.updated_at?String(new Date(e.updated_at).valueOf()):String(1e3*Number(e.updated_at)),px:e.price,side:e.side,instId:e.market||"",ordType:e.ord_type,sz:e.origin_volume,accFillSz:String(e.executed_volume||t),filled:r+"%",avgPx:e.avg_price||"",feeType:e.fee_type,makerFee:e.maker_fee||"0",takerFee:e.taker_fee||"0",state:e.state}},o=e=>{var t,r,n,a,i,o,l,c,d,u,s,m;let p=((null===(t=e.payload)||void 0===t?void 0:t.filledQty)/Number(e.amount||(null===(r=e.payload)||void 0===r?void 0:r.orderQty))*100).toFixed(2);return{id:e.id,ordId:(null===(n=e.payload)||void 0===n?void 0:n.orderId)||"",cTime:String(new Date(e.createdAt).valueOf()),uTime:String(new Date(e.updatedAt).valueOf()),mTime:String(new Date(e.modifiedAt).valueOf()),px:e.price,side:e.side||(null===(a=e.payload)||void 0===a?void 0:a.orderSide),instId:"".concat(null===(i=e.securityCode)||void 0===i?void 0:i.toUpperCase(),"-").concat(null===(o=e.currency)||void 0===o?void 0:o.toUpperCase()),ordType:e.type||(null===(l=e.payload)||void 0===l?void 0:l.orderType),sz:e.amount||String(null===(c=e.payload)||void 0===c?void 0:c.orderQty),accFillSz:(null===(d=e.payload)||void 0===d?void 0:d.filledQty)?e.payload.filledQty.toString():"0.0",filled:p,avgPx:String((null===(u=e.payload)||void 0===u?void 0:u.averagePrice)||""),fee:(null===(s=e.payload)||void 0===s?void 0:s.cumulativeCommission)?e.payload.cumulativeCommission.toString():"0",feeCcy:e.currency,state:e.state||(null===(m=e.payload)||void 0===m?void 0:m.status)||""}},l=e=>{let{at:t,...r}=e;return i(r)},c=e=>a(e),d=e=>o(e),u=(e,t)=>-1===e.findIndex(e=>e.id===t.id)?[{...t},...e]:[...e],s=e=>{var t,r;return{id:e.id,cTime:String(new Date(e.createdAt).valueOf()),uTime:String(new Date(e.updatedAt).valueOf()),execTime:String(new Date(e.executedAt).valueOf()),px:e.price,side:e.side,instId:"".concat(null===(t=e.securityCode)||void 0===t?void 0:t.toUpperCase(),"-").concat(null===(r=e.currency)||void 0===r?void 0:r.toUpperCase()),sz:e.amount,fee:e.commission&&0!==Number(e.commission)?e.commission:"0",feeCcy:e.currency}},m=e=>({id:String(e.execId),cTime:String(new Date(e.createdAt).valueOf()),uTime:String(new Date(e.updatedAt).valueOf()),execTime:String(new Date(e.execTime).valueOf()),px:e.execPrice||"0",side:e.side,instId:e.symbol||"",ordType:e.orderType||"",sz:e.execQty||"0",fee:e.execFee&&0!==Number(e.execFee)?e.execFee:"0",feeCcy:e.feeCurrency||""})},21014:function(e,t,r){r.d(t,{$L:function(){return u},DU:function(){return y},DZ:function(){return m},P1:function(){return f},dl:function(){return p},eS:function(){return s},lR:function(){return d},s1:function(){return v}});var n=r(92010),a=r(24441),i=r(52844),o=r(71897);let l=(0,a.oM)({name:"openOrders",initialState:{list:[],fetching:!1,cancelFetching:!1,cancelError:!1},reducers:{userOpenOrdersAppend:(e,t)=>{e.list=(0,o.YQ)(e.list,t.payload)},userOpenOrdersUpdate:(e,t)=>{e.list=(0,o.KO)(e.list,t.payload)}},extraReducers:e=>{e.addMatcher((0,a.Q)(c.endpoints.userOpenOrdersArtemis.matchFulfilled,c.endpoints.userOpenOrdersGaia.matchFulfilled,c.endpoints.userOpenOrdersHestia.matchFulfilled),(e,t)=>{let{payload:r}=t;e.list=r})}}),c=i.g.injectEndpoints({endpoints:e=>({userOpenOrdersArtemis:e.query({query:e=>({url:"".concat((0,n.Yz)(),"/trade/orders-pending"),method:"GET",params:e}),transformResponse:e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.map(e=>(0,o.O6)(e))}}),userOpenOrdersGaia:e.query({query:e=>{let{market:t,type:r}=e;return{url:"".concat((0,n.Hg)(),"/market/orders?").concat(t?"market=".concat(t):"","&state=wait").concat(r?"&type=".concat(r):""),method:"GET"}},transformResponse:e=>e.map(e=>(0,o.sF)(e))}),userOpenOrdersHestia:e.query({query:e=>({url:"".concat((0,n.LX)(),"/market/orders-pending"),method:"GET",params:e}),transformResponse:e=>e.map(e=>(0,o.jz)(e))}),userOrderArtemisCancel:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/trade/cancel"),method:"POST",body:e})}),userOrderGaiaCancel:e.mutation({query:e=>({url:"".concat((0,n.Hg)(),"/market/orders/").concat(e.id,"/cancel"),method:"POST",body:e})}),userOrderHestiaCancel:e.mutation({query:e=>({url:"".concat((0,n.LX)(),"/market/orders/").concat(e.id,"/cancel"),method:"POST",body:e})})})}),{useLazyUserOpenOrdersGaiaQuery:d,useLazyUserOpenOrdersArtemisQuery:u,useLazyUserOpenOrdersHestiaQuery:s,useUserOrderArtemisCancelMutation:m,useUserOrderGaiaCancelMutation:p,useUserOrderHestiaCancelMutation:f}=c,{userOpenOrdersAppend:v,userOpenOrdersUpdate:y}=l.actions;t.ZP=l.reducer},16917:function(e,t,r){r.d(t,{hv:function(){return c},Jr:function(){return i},Ay:function(){return l},c:function(){return d},Oc:function(){return s},Me:function(){return u},sE:function(){return m},cb:function(){return p},TO:function(){return f},WU:function(){return v}});var n=r(82571),a=r(86446);let i=(e,t)=>t.find(t=>(0,a.XF)(t.instId)===(0,a.XF)(e.instId)),o=e=>"market"===e.ordType||"done"===e.state||"filled"===e.state?Number(e.avgPx):Number(e.px),l=(e,t)=>{let r=i(e,t);return r?"market"===e.ordType&&"buy"===e.side?(0,n.format)(e.sz,Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy):e.sz&&"market"===e.ordType&&"sell"===e.side?(0,n.format)(+e.sz*+e.avgPx,Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy):(0,n.format)(e.sz,Number(null==r?void 0:r.amountPrecision),",")+" "+(null==r?void 0:r.baseCcy):"-"},c=(e,t)=>{let r=i(e,t),a=o(e);return 0!==Number(e.accFillSz)&&r?(0,n.format)(Number(e.accFillSz)*a,Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy):"-"},d=(e,t)=>{let r=i(e,t);if(!r)return"-";if("buy"===e.side)switch(e.ordType){case"market":return(0,n.format)(Number(e.sz),Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy);case"limit":return(0,n.format)(Number(e.sz||0)*Number(e.px),Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy);default:return"0"}else if("sell"===e.side)switch(e.ordType){case"market":return(0,n.format)(Number(e.accFillSz)*Number(e.avgPx),Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy);case"limit":return(0,n.format)(Number(e.sz||0)*Number(e.px),Number(null==r?void 0:r.pricePrecision),",")+" "+(null==r?void 0:r.quoteCcy);default:return"0"}},u=(e,t)=>{var r,i;let o;let l=t.find(t=>(0,a.XF)(t.instId)===(0,a.XF)(e.instId)),c=0,d=Number(e.accFillSz)*Number(e.px);if((null==l?void 0:l.exchange)==="gaia"&&(null==e?void 0:e.feeType)==="quote"||(null==l?void 0:l.exchange)==="hestia"?(o=null==l?void 0:l.quoteCcy,c=Number(null==l?void 0:l.pricePrecision)):(o="buy"===e.side?null==l?void 0:l.baseCcy:null==l?void 0:l.quoteCcy,c="buy"===e.side?Number(null==l?void 0:l.amountPrecision):Number(null==l?void 0:l.pricePrecision)),0===Number(e.accFillSz))return"-";switch(e.ordType){case"limit":if(e.fee)return"".concat((null==l?void 0:l.exchange)==="hestia"?(0,n.format)(e.fee,c,","):e.fee," ").concat(null===(r=e.feeCcy)||void 0===r?void 0:r.toUpperCase());{let t=Number(e.accFillSz)*Number(e.makerFee);return(null==l?void 0:l.exchange)==="gaia"&&(null==e?void 0:e.feeType)==="quote"&&(t=Number(e.accFillSz)*Number(e.avgPx)*Number(e.makerFee)),(0,n.format)(t,c,",")+" "+o}case"market":if(e.fee)return"".concat((null==l?void 0:l.exchange)==="hestia"?(0,n.format)(e.fee,c,","):e.fee," ").concat(null===(i=e.feeCcy)||void 0===i?void 0:i.toUpperCase());return(0,n.format)(d*Number(e.takerFee),c,",")+" "+o;default:return"0.0"}},s=(e,t)=>{let{state:r,id:n}=t,a=e.findIndex(e=>e.id===n),i=e.findIndex(e=>e.id===n);switch(r){case"pending":case"new":case"partiallyFilled":case"filled":case"pendingCancel":case"cancelling":if(-1===a)return[{...t},...e];return e.map(e=>e.id===t.id?{...t}:e);case"cancelled":case"cancel":return i>-1&&e.splice(i,1),e;default:return e.reduce((e,t,r)=>(t.id!==n&&e.push(t),e),[])}},m=e=>e.user.ordersHistory.list,p=e=>e.user.ordersHistory.total,f=e=>e.user.ordersHistory.tradelist,v=e=>e.user.ordersHistory.tradeListTotal},75629:function(e,t,r){r.d(t,{RO:function(){return c},m0:function(){return l},mi:function(){return d},wk:function(){return u}});var n=r(92010),a=r(24441),i=r(52844);let o=(0,a.oM)({name:"orders",initialState:{executeLoading:!1,amount:"",orderType:""},reducers:{setOrderType:(e,t)=>{e.orderType=t.payload}}}),{useOrderArtemisExecuteMutation:l,useOrderGaiaExecuteMutation:c,useOrderHestiaExecuteMutation:d}=i.g.injectEndpoints({endpoints:e=>({orderArtemisExecute:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/trade/order"),method:"POST",body:e})}),orderGaiaExecute:e.mutation({query:e=>({url:"".concat((0,n.Hg)(),"/market/orders"),method:"POST",body:e}),transformResponse:e=>{let t=(Number(e.executed_volume)/Number(e.origin_volume)*100).toFixed(2);return{...e,ordId:String(e.id),cTime:e.created_at?String(new Date(e.created_at).valueOf()):"",uTime:e.updated_at?String(new Date(e.updated_at).valueOf()):"",px:e.price,instId:e.market,ordType:e.ord_type,sz:String(e.origin_volume),accFillSz:t,filled:t,avgPx:e.avg_price||""}}}),orderHestiaExecute:e.mutation({query:e=>({url:"".concat((0,n.LX)(),"/market/orders"),method:"POST",body:e}),transformResponse:e=>{let t=(Number(e.executed_volume)/Number(e.origin_volume)*100).toFixed(2);return{...e,ordId:String(e.id),cTime:e.created_at?String(new Date(e.created_at).valueOf()):"",uTime:e.updated_at?String(new Date(e.updated_at).valueOf()):"",px:e.price,instId:e.market,ordType:e.ord_type,sz:String(e.origin_volume),accFillSz:t,filled:t,avgPx:e.avg_price||""}}})})}),{setOrderType:u}=o.actions;t.ZP=o.reducer},83154:function(e,t,r){r.d(t,{Iv:function(){return y},Ph:function(){return f},fW:function(){return b},gh:function(){return h},oM:function(){return p},qK:function(){return v}});var n=r(92010),a=r(24441),i=r(86579),o=r(52844);let l=(e,t)=>({market:e,id:t.tid.toString(),created_at:t.date.toString(),taker_type:t.taker_type,price:String(t.price),amount:String(t.amount)}),c=(e,t)=>t.map(t=>l(e,t)),d=(e,t)=>{if(e)return t?{...e,price_change:String(+(null==e?void 0:e.price)-+(null==t?void 0:t.price))}:e},u=e=>Math.abs(Date.now()-e)<1e3*Math.abs(Date.now()-e),s=(0,a.oM)({name:"recentTrades",initialState:{list:[],tradingFees:[],loading:!1},reducers:{recentTradesData:(e,t)=>{var r,a;e.list=(0,i.W)(t.payload,(0,n.cZ)()),e.loading=!1,e.lastTrade=d(null===(r=t.payload)||void 0===r?void 0:r[0],null===(a=t.payload)||void 0===a?void 0:a[1])},clearLastTrade:e=>{e.lastTrade=void 0},recentTradesPush:(e,t)=>{let r=[...c(t.payload.market,t.payload.trades).map(e=>u(Number(e.created_at))?e:{...e,created_at:(1e3*Number(e.created_at)).toString()}),...e.list];return{...e,list:(0,i.W)(r,(0,n.cZ)()),lastTrade:d(null==r?void 0:r[0],null==r?void 0:r[1])}}},extraReducers:e=>{e.addMatcher((0,a.Q)(m.endpoints.recentTradesArtemis.matchFulfilled,m.endpoints.recentTradesGaia.matchFulfilled),(e,t)=>{let{payload:r}=t,a=r.map(e=>u(Number(e.created_at))?e:{...e,created_at:(1e3*Number(e.created_at)).toString()});e.list=(0,i.W)(a,(0,n.cZ)()),e.loading=!1,e.lastTrade=d(null==r?void 0:r[0],null==r?void 0:r[1])}).addMatcher((0,a.Q)(m.endpoints.tradingFees.matchFulfilled,m.endpoints.tradingFeesHestia.matchFulfilled),(e,t)=>{let{payload:r}=t,n=r.reduce((e,t)=>(e.find(e=>e.marketId===t.marketId&&e.group===t.group&&e.min===t.min)||e.push(t),e),e.tradingFees);e.tradingFees=n})}}),m=o.g.injectEndpoints({endpoints:e=>({recentTradesArtemis:e.query({query:e=>({url:"".concat((0,n.Yz)(),"/public/market/trades"),method:"GET",params:e}),transformResponse:e=>{var t;return null===(t=e.data)||void 0===t?void 0:t.map(e=>{var t;return{market:e.instId.toLowerCase(),id:e.tradeId,created_at:e.ts,taker_type:null===(t=e.side)||void 0===t?void 0:t.toLowerCase(),price:e.px,amount:e.sz}})}}),recentTradesGaia:e.query({query:e=>({url:"".concat((0,n.Hg)(),"/public/markets/").concat(e,"/trades"),method:"GET"}),transformResponse:e=>e.map(e=>({...e,id:e.id.toString()}))}),tradingFees:e.query({query:()=>({url:"".concat((0,n.Hg)(),"/public/trading_fees")}),transformResponse:e=>e.map(e=>({id:e.id,group:e.group,min:"0",exchangeId:null,marketId:e.market_id,maker:e.maker,taker:e.taker,feeType:e.fee_type,createdAt:e.created_at,updatedAt:e.updated_at}))}),tradingFeesHestia:e.query({query:()=>({url:"".concat((0,n.LX)(),"/public/trading_fees")})})})}),{useLazyRecentTradesArtemisQuery:p,useLazyRecentTradesGaiaQuery:f,useTradingFeesQuery:v,useTradingFeesHestiaQuery:y}=m,{recentTradesData:g,recentTradesPush:h,clearLastTrade:b}=s.actions;t.ZP=s.reducer},52820:function(e,t,r){r.d(t,{CJ:function(){return O},Cc:function(){return W},Ep:function(){return D},FA:function(){return A},FL:function(){return s},Ic:function(){return L},Ir:function(){return T},J0:function(){return F},Mu:function(){return N},OK:function(){return C},RC:function(){return y},Rb:function(){return h},Ss:function(){return x},Ug:function(){return _},Yk:function(){return q},Zs:function(){return w},bf:function(){return B},dg:function(){return U},e3:function(){return E},eS:function(){return S},hh:function(){return P},in:function(){return m},jn:function(){return g},p:function(){return f},po:function(){return u},pp:function(){return v},qI:function(){return k},sJ:function(){return p},tZ:function(){return b},tj:function(){return z}});var n=r(92010),a=r(24441),i=r(52844),o=r(44272);let l=(0,a.oM)({name:"wallets",initialState:{list:[],currencies:{hestia:[],nyx:[],gaia:[],artemisCrypto:[],artemisFiat:[]},totalEq:{artemisFiat:"0",artemisCoin:"0"},currentWallet:void 0,currentWalletItem:void 0,generatedDepositAddress:{data:void 0,loading:!1},conversionSettings:[]},reducers:{setCurrentWallet:(e,t)=>{e.currentWallet=t.payload},setCurrentWalletItem:(e,t)=>{e.currentWalletItem=t.payload},setGenerateAddressLoading:(e,t)=>{e.generatedDepositAddress.loading=t.payload},resetGeneratedDepositAddress:e=>{e.generatedDepositAddress={data:void 0,loading:!1}},walletsArtemisAddressDataWS:(e,t)=>{e.generatedDepositAddress={data:t.payload,loading:!1}},walletsGaiaAddressDataWS:(e,t)=>{e.generatedDepositAddress={data:t.payload,loading:!1}},walletsTxWS:(e,t)=>{let r=t.payload.event,n=t.payload.exchange;if(null===n)throw Error("WalletTxnWs: Exchange data not found");let a=e.currencies[n];if(!r)throw Error("WalletTxnWs: Account data not found");if(0===a.length)throw Error("WalletTxnWs: Currency not found");let i=[];switch(n){case"hestia":{let t=[{...r,asset:r.currency||r.securityId||""}];i=(0,o.m6)(t,e.currencies.hestia);break}case"nyx":{let t=[{currency:r.currency,balance:r.balance,locked:r.locked,fixed:2}];i=(0,o.U6)(t,e.currencies.nyx);break}case"gaia":{let t=[{currency:r.currency,ccy:r.currency,balance:r.balance,locked:r.locked,fixed:2}];i=(0,o.I2)(t,e.currencies.gaia)}}e.list=(0,o.aA)(e.list,i)},walletBalanceArtemisWS:(e,t)=>{let{details:r,totalEqCoin:n,totalEqFiat:a}=t.payload.balanceData.balances,i=r.filter(e=>e.eqUsd),l=r.filter(e=>!e.eqUsd).map(e=>({currency:e.ccy,balance:e.balance||"0",locked:e.locked||"0"})),{details:c}=(0,o.Ag)(i,n||"0",e.currencies.artemisCrypto,l,e.currencies.artemisFiat),d=c.filter(e=>r.find(t=>t.ccy.toLowerCase()===e.ccy.toLowerCase()));e.list=(0,o.aA)(e.list,d),n&&(e.totalEq.artemisCoin=n||"0"),a&&(e.totalEq.artemisFiat=a||"0")}},extraReducers:e=>{e.addMatcher(c.endpoints.walletsArtemisConversionSettings.matchFulfilled,(e,t)=>{let{payload:r}=t;e.conversionSettings=r.data}).addMatcher(c.endpoints.walletsArtemis.matchFulfilled,(e,t)=>{let{payload:r}=t;e.currencies.artemisCrypto=r.cryptoCurrencies||[],e.currencies.artemisFiat=r.fiatCurrencies||[],e.totalEq.artemisCoin=r.totalEqCoin||"0",e.totalEq.artemisFiat=r.totalEqFiat||"0",e.list?e.list=(0,o.aA)(e.list,r.details):e.list=[]}).addMatcher(c.endpoints.walletsGaia.matchFulfilled,(e,t)=>{let{payload:r}=t;e.list=(0,o.aA)(e.list,r.accBalances.list),e.currencies.gaia=r.currencies}).addMatcher((0,a.Q)(c.endpoints.walletsNyx.matchFulfilled),(e,t)=>{let{payload:r}=t;e.list=(0,o.aA)(e.list,r.accBalances),e.currencies.nyx=r.currencies}).addMatcher((0,a.Q)(c.endpoints.walletsHestia.matchFulfilled),(e,t)=>{let{payload:r}=t;e.list=(0,o.aA)(e.list,r.accBalances),e.currencies.hestia=r.currencies})}}),c=i.g.injectEndpoints({endpoints:e=>({walletGaiaCcy:e.query({query:e=>({url:"".concat((0,n.Hg)(),"/account/balances/").concat(e.toLowerCase()),method:"GET"}),transformResponse:e=>{var t;return{...e,availBal:(null==e?void 0:e.balance)||"0.0",ccy:(null==e?void 0:null===(t=e.currency)||void 0===t?void 0:t.toUpperCase())||"",frozenBal:(null==e?void 0:e.locked)||"0.0",name:null==e?void 0:e.name}}}),walletsArtemis:e.query({async queryFn(e,t,r,a){try{let[e,t]=await Promise.all([a("".concat((0,n.Yz)(),"/asset/currencies")),a("".concat((0,n.Yz)(),"/account/crypto-balances"))]),[r,i]=await Promise.all([a("".concat((0,n.Yz)(),"/public/fiat-currencies")),a("".concat((0,n.Yz)(),"/account/fiat-balances"))]),l=e.data,c=i.data,d=r.data.data,u=c.data,s=[];(null==l?void 0:l.data)&&Array.isArray(l.data)&&(s=[...l.data]);let m=t.data;if(!m)return{error:t.error};let{details:p,totalEq:f}=(0,o.Ag)(m.details,m.totalEq,s,u,d);return{data:{details:p,totalEqCoin:null==f?void 0:f.crypto,totalEqFiat:null==f?void 0:f.fiat,cryptoCurrencies:s,fiatCurrencies:d}}}catch(e){throw Error("string"==typeof e?e:"An error occurred fetching wallets")}}}),walletsArtemisAddress:e.query({query:e=>({url:"".concat((0,n.Yz)(),"/asset/deposit-address"),method:"GET",params:e}),transformResponse:e=>{let t=Array.isArray(e.chains)&&e.chains.length>0?e.chains[0]:e.chains;return{...e,chains:t}}}),walletsArtemisConversionSettings:e.query({query:()=>({url:"".concat((0,n.Yz)(),"/public/conversion-settings"),method:"GET"})}),walletsArtemisConversion:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/account/conversions"),method:"POST",body:e})}),walletsArtemisAddressGenerate:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/asset/deposit-address"),method:"POST",body:e})}),walletsGaia:e.query({async queryFn(e,t,r,a){try{var i,l,c,d,u,s;let[t,r]=await Promise.all([a({url:"".concat((0,n.Hg)(),"/public/currencies"),params:e}),a("".concat((0,n.Hg)(),"/account/balances"))]),m=[];Array.isArray(t.data)?m=[...t.data]:"object"!=typeof t.data||Array.isArray(t.data)||null===t.data||m.push(t.data);let p=r.data,f=(0,o.I2)(p,m);return r.data?{data:{accBalances:{list:f,page:Number(null==r?void 0:null===(l=r.meta)||void 0===l?void 0:null===(i=l.response)||void 0===i?void 0:i.headers.get("Page")),perPage:Number(null==r?void 0:null===(d=r.meta)||void 0===d?void 0:null===(c=d.response)||void 0===c?void 0:c.headers.get("Per-Page")),total:Number(null==t?void 0:null===(s=t.meta)||void 0===s?void 0:null===(u=s.response)||void 0===u?void 0:u.headers.get("Total"))},currencies:m}}:{error:r.error}}catch(e){throw Error("string"==typeof e?e:"An error occurred fetching wallets")}}}),walletsGaiaAddress:e.query({query:e=>({url:"".concat((0,n.Hg)(),"/account/deposit_address/").concat(e.toLowerCase())}),transformResponse:e=>({addr:e.address,currencies:e.currencies,state:e.state})}),walletsNyx:e.query({async queryFn(e,t,r,a){try{let[e,t]=await Promise.all([a({url:"".concat((0,n.YJ)(),"/public/currencies")}),a("".concat((0,n.YJ)(),"/me/balances"))]),r=[];Array.isArray(e.data)?r=[...e.data]:"object"!=typeof e.data||Array.isArray(e.data)||null===e.data||r.push(e.data);let i=t.data,l=(0,o.U6)(i,r);return t.data?{data:{accBalances:l,currencies:r}}:{error:t.error}}catch(e){throw Error("string"==typeof e?e:"An error occurred fetching wallets")}}}),walletsHestia:e.query({async queryFn(e,t,r,a){try{let[e,t,r]=await Promise.all([a({url:"".concat((0,n.LX)(),"/public/currencies"),timeout:5e3}),a({url:"".concat((0,n.LX)(),"/public/securities"),timeout:5e3}),a("".concat((0,n.LX)(),"/account/balances"))]),i=[];Array.isArray(e.data)?i=[...e.data]:"object"!=typeof e.data||Array.isArray(e.data)||null===e.data||i.push(e.data);let l=t.data,c=r.data,d=(0,o.m6)(c,i,l);return r.data?{data:{accBalances:d,currencies:i}}:{error:r.error}}catch(e){throw Error("string"==typeof e?e:"An error occurred fetching wallets")}}}),walletsArtemisWithdraw:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/asset/withdrawal"),method:"POST",body:e})}),walletsArtemisWithdrawFiat:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/account/fiat-withdraws"),method:"POST",body:e})}),walletsGaiaWithdraw:e.mutation({query:e=>({url:"".concat((0,n.Hg)(),"/account/withdraws"),method:"POST",body:e})}),walletsNyxWithdraw:e.mutation({query:e=>({url:"".concat((0,n.YJ)(),"/account/withdraws"),method:"POST",body:e})}),walletsHestiaWithdraw:e.mutation({query:e=>({url:"".concat((0,n.LX)(),"/account/withdraws"),method:"POST",body:e})}),walletGaiaTransfer:e.mutation({query:e=>({url:"".concat((0,n.Hg)(),"/account/user_internal_transfers"),method:"POST",body:e})}),walletNyxTransfer:e.mutation({query:e=>({url:"".concat((0,n.YJ)(),"/account/internal-transfer"),method:"POST",body:e})}),walletHestiaTransfer:e.mutation({query:e=>({url:"".concat((0,n.LX)(),"/account/internal-transfer"),method:"POST",body:e})}),walletArtemisTransfer:e.mutation({query:e=>({url:"".concat((0,n.Yz)(),"/account/internal-transfers"),method:"POST",body:e})}),exchangeRate:e.query({query:e=>({url:"".concat((0,n.t)(),"/public/exchange_rate/").concat(e)})})})}),{useLazyWalletGaiaCcyQuery:d,useLazyWalletsArtemisAddressQuery:u,useLazyWalletsArtemisQuery:s,useLazyWalletsArtemisConversionSettingsQuery:m,useLazyWalletsGaiaAddressQuery:p,useLazyWalletsGaiaQuery:f,useLazyWalletsNyxQuery:v,useWalletsHestiaQuery:y,useLazyWalletsHestiaQuery:g,useWalletsArtemisQuery:h,useWalletsGaiaQuery:b,useWalletsNyxQuery:w,useWalletsArtemisAddressGenerateMutation:x,useWalletsArtemisWithdrawMutation:S,useWalletsArtemisWithdrawFiatMutation:T,useWalletsGaiaWithdrawMutation:A,useWalletsNyxWithdrawMutation:C,useWalletsHestiaWithdrawMutation:q,useWalletGaiaTransferMutation:F,useWalletNyxTransferMutation:_,useWalletHestiaTransferMutation:N,useWalletArtemisTransferMutation:O,useWalletsArtemisConversionMutation:k,useExchangeRateQuery:P}=c,{setCurrentWallet:I,setCurrentWalletItem:z,setGenerateAddressLoading:E,resetGeneratedDepositAddress:D,walletsArtemisAddressDataWS:U,walletsGaiaAddressDataWS:L,walletsTxWS:B,walletBalanceArtemisWS:W}=l.actions;t.ZP=l.reducer},44272:function(e,t,r){r.d(t,{Ag:function(){return v},I2:function(){return f},m6:function(){return m},U6:function(){return p},Y:function(){return s},n3:function(){return u},aS:function(){return d},aA:function(){return c},B4:function(){return y.B4},B0:function(){return y.B0},dx:function(){return y.dx},r_:function(){return y.r_},dd:function(){return y.dd}});var n,a,i=r(82571),o=r(28546),l=r(84778);let c=(e,t)=>{let r=e.map(e=>{let r=t.find(t=>{var r,n;return e.exchange===t.exchange&&(null===(r=e.ccy)||void 0===r?void 0:r.toLowerCase())===(null===(n=t.ccy)||void 0===n?void 0:n.toLowerCase())});return r?{...e,...r}:e}),n=t.filter(t=>!e.find(e=>{var r,n;return e.exchange===t.exchange&&(null===(r=e.ccy)||void 0===r?void 0:r.toLowerCase())===(null===(n=t.ccy)||void 0===n?void 0:n.toLowerCase())}));return r.concat(n)},d=(e,t)=>e.filter(e=>e.exchange===t&&(Number(e.availBal)>0||Number(e.frozenBal)>0)),u=e=>{var t;return null===(t=Object.values((0,l.v)(e,"ccy")))||void 0===t?void 0:t.map(e=>e[0])},s=e=>(0,i.format)(Number(e.availBal)+Number(e.frozenBal),e.fixed,","),m=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return null==e?void 0:e.map(e=>{var n;let a=null==t?void 0:t.find(t=>t.id===e.asset),i=r.find(t=>{var r,n,a,i;return(null==t?void 0:null===(r=t.id)||void 0===r?void 0:r.toLowerCase())===(null==e?void 0:null===(n=e.asset)||void 0===n?void 0:n.toLowerCase())||(null==t?void 0:null===(a=t.code)||void 0===a?void 0:a.toLowerCase())===(null==e?void 0:null===(i=e.asset)||void 0===i?void 0:i.toLowerCase())});return{ccy:null==e?void 0:null===(n=e.asset)||void 0===n?void 0:n.toUpperCase(),availBal:null==e?void 0:e.balance,frozenBal:(null==e?void 0:e.locked)||"0.0",fixed:a?a.precision:(null==i?void 0:i.precision)?Number(i.precision):0,iconUrl:null==a?void 0:a.iconUrl,name:a?a.name:null==i?void 0:i.name,type:a?"fiat":"coin",exchange:"hestia"}})},p=(e,t)=>t.map(t=>{var r;let n=null==e?void 0:e.find(e=>e.currency===t.id);return n||(n={currency:t.id,fixed:o.wI,balance:"0.0"}),{ccy:null==n?void 0:null===(r=n.currency)||void 0===r?void 0:r.toUpperCase(),availBal:null==n?void 0:n.balance,frozenBal:(null==n?void 0:n.locked)||"0.0",fixed:(null==t?void 0:t.precision)||2,iconUrl:null==t?void 0:t.iconUrl,ccyName:null==t?void 0:t.name,type:null==t?void 0:t.type,exchange:"nyx"}}),f=(e,t)=>t.map(t=>{var r;let n=null==e?void 0:e.find(e=>{var r,n;return(null===(r=e.currency)||void 0===r?void 0:r.toLowerCase())===(null===(n=t.id)||void 0===n?void 0:n.toLowerCase())});return n||(n={currency:t.id,ccy:t.id,fixed:o.wI}),{availBal:(null==n?void 0:n.balance)||"0.0",ccy:null==n?void 0:null===(r=n.currency)||void 0===r?void 0:r.toUpperCase(),frozenBal:(null==n?void 0:n.locked)||"0.0",name:null==t?void 0:t.name,explorerTransaction:null==t?void 0:t.explorer_transaction,explorerAddress:null==t?void 0:t.explorer_address,fee:null==t?void 0:t.withdraw_fee,feeType:null==t?void 0:t.withdraw_fee_type,type:null==t?void 0:t.type,fixed:null==t?void 0:t.precision,iconUrl:null==t?void 0:t.icon_url,price:null==t?void 0:t.price,exchange:"gaia"}}),v=(e,t,r,n,a)=>{let i=(0,l.v)(r,"ccy"),c=Object.keys(i).map(t=>{var r,n,a,l,c,d;let u=null==e?void 0:e.find(e=>e.ccy===t);return u||(u={availBal:"0.0",frozenBal:"0.0",fixed:o.wI,ccy:t}),{...u,name:null===(r=i[t][0])||void 0===r?void 0:r.name,fee:null===(n=i[t][0])||void 0===n?void 0:n.maxFee,feeMin:null===(a=i[t][0])||void 0===a?void 0:a.minFee,feeMax:null===(l=i[t][0])||void 0===l?void 0:l.maxFee,type:"coin",fixed:null===(c=i[t][0])||void 0===c?void 0:c.wdTickSz,iconUrl:null===(d=i[t][0])||void 0===d?void 0:d.logoLink,exchange:"artemis"}}),d=0;return{details:[...c,...a.map(e=>{let t=n.find(t=>t.currency.toLowerCase()===e.id.toLowerCase());return t&&t.balance&&(d+=parseFloat(t.balance)||0),{availBal:(null==t?void 0:t.balance)||"0.0",frozenBal:(null==t?void 0:t.locked)||"0.0",fixed:e.precision||o.wI,ccy:e.id,name:e.name,fee:e.withdrawFee,type:"fiat",iconUrl:e.iconUrl,exchange:"artemis"}})],totalEq:{fiat:String(d)||"0",crypto:t||"0"}}};var y=r(13813);(n=a||(a={})).FUNDING_ACCOUNT="6",n.TRADING_ACCOUNT="18"},13813:function(e,t,r){r.d(t,{B0:function(){return o},B4:function(){return a},EK:function(){return l},dd:function(){return c},dx:function(){return i},r_:function(){return n}});let n=e=>{var t;return null===(t=e.user.wallets)||void 0===t?void 0:t.list},a=e=>{var t;return null===(t=e.user.wallets)||void 0===t?void 0:t.currentWalletItem},i=e=>{var t,r;return null===(r=e.user.wallets)||void 0===r?void 0:null===(t=r.generatedDepositAddress)||void 0===t?void 0:t.data},o=e=>{var t,r;return null===(r=e.user.wallets)||void 0===r?void 0:null===(t=r.generatedDepositAddress)||void 0===t?void 0:t.loading},l=e=>{var t;return null===(t=e.user.wallets)||void 0===t?void 0:t.conversionSettings},c=e=>{var t;return null===(t=e.user.wallets)||void 0===t?void 0:t.totalEq}},84778:function(e,t,r){r.d(t,{v:function(){return n}});let n=(e,t)=>e.reduce((e,r)=>((e[r[t]]=e[r[t]]||[]).push(r),e),{})}}]);