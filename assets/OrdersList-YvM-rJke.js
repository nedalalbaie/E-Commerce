import{S as n,c as V,g as k,a as N}from"./check-status-LNJt3dju.js";import{_ as D,o as i,c as u,a as t,d as E,b as S,u as $,e as B,F,r as O,g as r,q as L,t as c,n as M,i as s,j as a,f as m,V as d,k as T,p as q,h as I,s as P}from"./index-c8EmFYNS.js";import{u as j}from"./useQuery-diit9zOu.js";import{_ as Q}from"./DeleteIcon.vue_vue_type_script_setup_true_lang-19TRQ0DL.js";import{a as z,b as A,V as Z,c as K}from"./VDialog-wyLMp0R1.js";import{V as R}from"./VSpacer-LceoUdPZ.js";import"./queryString-AL1HqB06.js";import"./createSimpleFunctional-gvfQdlSX.js";import"./VAvatar-_g8D_ewF.js";const G={},H={width:"17",height:"12",viewBox:"0 0 17 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U=t("path",{d:"M8.5 0.375C4.75 0.375 1.5475 2.7075 0.25 6C1.5475 9.2925 4.75 11.625 8.5 11.625C12.25 11.625 15.4525 9.2925 16.75 6C15.4525 2.7075 12.25 0.375 8.5 0.375ZM8.5 9.75C6.43 9.75 4.75 8.07 4.75 6C4.75 3.93 6.43 2.25 8.5 2.25C10.57 2.25 12.25 3.93 12.25 6C12.25 8.07 10.57 9.75 8.5 9.75ZM8.5 3.75C7.255 3.75 6.25 4.755 6.25 6C6.25 7.245 7.255 8.25 8.5 8.25C9.745 8.25 10.75 7.245 10.75 6C10.75 4.755 9.745 3.75 8.5 3.75Z",fill:"white"},null,-1),J=[U];function W(f,_){return i(),u("svg",H,J)}const X=D(G,[["render",W]]),Y=L('<div class="flex items-center justify-between mt-6"><h1 class="text-3xl"> الطلبات <span>(20 )</span></h1><div class="flex gap-4"><button class="bg-sky-200 py-1 px-2 rounded-md"> قيد المعالجة </button><button class="bg-sky-200 py-1 px-2 rounded-md"> قيد التوصيل </button><button class="bg-sky-200 py-1 px-2 rounded-md"> تم التوصيل </button><button class="bg-sky-200 py-1 px-2 rounded-md"> ملغية </button></div></div>',1),tt={class:"grid grid-cols-productsCards gap-x-4 gap-y-8 mt-6"},et={class:"text-xl text-center"},st={class:"mt-4 flex items-center border-b border-gray-700 pb-1"},at=t("p",{class:"w-1/2"}," الحالة ",-1),ot={class:"mt-4 flex items-center border-b border-gray-700"},rt=t("p",{class:"w-1/2"}," التاريخ ",-1),nt={class:"w-1/2 text-center"},ct=t("div",{class:"mt-4 flex items-center border-b border-gray-700"},[t("p",{class:"w-1/2"}," عدد العناصر "),t("p",{class:"w-1/2 text-center"}," 5 ")],-1),it={class:"mt-4 flex items-center border-b border-gray-700"},lt=t("p",{class:"w-1/2"}," العنوان ",-1),dt={class:"w-1/2 text-center"},ut=t("div",{class:"mt-4 flex items-center border-b border-gray-700"},[t("p",{class:"w-1/2"}," رقم الهاتف "),t("p",{class:"w-1/2 text-center"}," 0925448193 ")],-1),_t={class:"mt-4 flex items-center border-b border-gray-700"},pt=t("p",{class:"w-1/2"}," الإجمالي ",-1),mt={class:"w-1/2 text-center"},xt={class:"flex justify-center gap-4 mt-6 text-white"},kt=E({__name:"OrdersList",setup(f){const _=S({page:1,limit:10,productName:void 0,category_id:void 0}),b=j({queryKey:["orders",_],queryFn:()=>k(_.value)}),g=$(),h=B({mutationFn:N,onSuccess:()=>{P.replace({name:"orders"}),g.invalidateQueries({queryKey:["orders"]})},onError:o=>{console.log(o)}}),y=o=>{h.mutate(o)},C=o=>`إلغاء الطلبية ${o}# ?`,v=o=>{const p=new Date(o);if(!isNaN(p.getTime()))return p.toLocaleDateString()};return(o,p)=>{var x;return i(),u("div",null,[Y,t("div",tt,[(i(!0),u(F,null,O((x=r(b).data.value)==null?void 0:x.data,e=>(i(),u("div",{key:e.id,class:"bg-white shadow-lg rounded-lg p-4"},[t("p",et," #"+c(e.order_number),1),t("div",st,[at,t("p",{class:M(["w-1/2 text-center font-medium",{"text-green-600":e.status===r(n).DELIVERD,"text-blue-600":e.status===r(n).PENDING,"text-yellow-600":e.status===r(n).SHIPPED,"text-purple-600":e.status===r(n).CONFIRMED,"text-red-600":e.status===r(n).CANCELD}])},c(r(V)(e.status)),3)]),t("div",ot,[rt,t("p",nt,c(v(e.created_at)),1)]),ct,t("div",it,[lt,t("p",dt,c(e.shipping_address),1)]),ut,t("div",_t,[pt,t("p",mt,c(e.total_price),1)]),t("div",xt,[s(d,{size:"large",rounded:"xl",variant:"elevated",color:"primary",type:"submit",to:{name:"order-details",params:{id:e.id}}},{prepend:a(()=>[s(X)]),default:a(()=>[m(" عرض ")]),_:2},1032,["to"]),e.status!=r(n).CANCELD?(i(),T(K,{key:0,width:"500"},{activator:a(({props:l})=>[s(d,q(l,{size:"large",rounded:"xl",variant:"elevated",color:"#004C6B",type:"submit"}),{prepend:a(()=>[s(Q,{fill:"fill-white"})]),default:a(()=>[m(" إلغاء ")]),_:2},1040)]),default:a(({isActive:l})=>[s(Z,{title:C(e.order_number),rounded:"lg",color:"#EFE9F5",style:{"padding-block":"1.75rem !important"}},{default:a(()=>[s(z,null,{default:a(()=>[m(" سيتم الغاء هذه الطبية بشكل نهائي، سيتلقى الزبون اشعارا يوضح ان الطبية تم الغاؤها. ")]),_:1}),s(A,null,{default:a(()=>[s(R),s(d,{text:"لا",onClick:w=>l.value=!1},null,8,["onClick"]),s(d,{text:"نعم",onClick:w=>{l.value=!1,y(e.id)}},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)):I("",!0)])]))),128))])])}}});export{kt as default};
