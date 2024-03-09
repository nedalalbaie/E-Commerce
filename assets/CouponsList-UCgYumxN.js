import{d as D,b as g,u as F,e as P,aa as T,c as v,a as p,i as e,g as o,U as B,j as t,V as r,k as N,h as f,F as S,o as m,f as d,m as E,t as q,a9 as I,p as Q}from"./index-c8EmFYNS.js";import{g as L,d as U}from"./coupons-service-sZw4vZ0g.js";import{u as j}from"./useQuery-diit9zOu.js";import{d as z}from"./index-SJTx5oYY.js";import{V as K,L as M}from"./VDataTableServer-v46vmEDx.js";import{b as $}from"./format-date-prw4Jhrq.js";import{c as O,V as A,a as G,b as H}from"./VDialog-wyLMp0R1.js";import{V as J}from"./VSpacer-LceoUdPZ.js";import"./queryString-AL1HqB06.js";import"./filter-7s9Z3Opi.js";import"./VAvatar-_g8D_ewF.js";import"./createSimpleFunctional-gvfQdlSX.js";import"./VSelectionControl-UDC2vv3o.js";const R=p("h2",{class:"text-2xl font-semibold"}," الكوبونات ",-1),W={class:"flex justify-between mt-8"},X={class:"w-72"},Y={key:1,class:"shadow-lg rounded-lg mt-4 border border-gray-200"},Z={class:"flex gap-2"},ge=D({__name:"CouponsList",setup(ee){const c=g(""),s=g({page:1,limit:10,productName:void 0,category_id:void 0}),n=j({queryKey:["coupones",s],queryFn:()=>L(s.value)}),_=[{title:"الكود",value:"coupon_code",width:"300px",sortable:!1},{title:"الحد الأعلي",value:"limit",width:"300px",sortable:!1},{title:"نسبة التخفيض",value:"discount_percentage",width:"300px",sortable:!1},{title:"تاريخ إنتهاء الصلاحية",key:"expireDate",value:"expire_date",width:"300px",sortable:!1},{title:"الإجرائات",key:"actions",width:"300px",sortable:!1}],y=({page:l,limit:i})=>{s.value={...s.value,page:l??1,limit:i??10}},h=z(()=>{s.value.productName=c.value},300),x=F(),C=P({mutationFn:U,onSuccess:()=>{x.invalidateQueries({queryKey:["coupones"]})},onError:l=>{console.log(l)}}),V=l=>{C.mutate(l)},b=l=>`حذف الكوبون ${l}# ?`;return(l,i)=>{const k=T("DeleteIcon");return m(),v(S,null,[R,p("div",W,[p("div",X,[e(B,{modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=a=>c.value=a),label:"البحث",variant:"outlined",color:"primary",clearable:"",placeholder:"البحث",density:"compact",onInput:o(h)},null,8,["modelValue","onInput"])]),e(r,{"append-icon":o(E),to:{name:"add-coupon"},color:"primary",variant:"elevated"},{default:t(()=>[d(" إضافة كوبون ")]),_:1},8,["append-icon"])]),o(n).isPending.value?(m(),N(M,{key:0})):f("",!0),o(n).data.value?(m(),v("div",Y,[e(K,{sticky:"","items-per-page":s.value.limit,page:s.value.page,headers:_,"items-length":o(n).data.value.total,items:o(n).data.value.data,loading:o(n).isPending.value,"onUpdate:options":i[1]||(i[1]=a=>y({page:a.page,limit:a.itemsPerPage}))},{"item.expireDate":t(({item:a})=>[d(q(o($)(a.expire_date)),1)]),"item.actions":t(({item:a})=>[p("div",Z,[e(r,{"append-icon":o(I),color:"grey-darken-2",size:"small",variant:"elevated",to:{name:"edit-coupon",params:{id:a.id}}},{default:t(()=>[d(" تعديل ")]),_:2},1032,["append-icon","to"]),e(O,{width:"500"},{activator:t(({props:u})=>[e(r,Q(u,{size:"small",variant:"elevated",color:"#004C6B",type:"submit"}),{prepend:t(()=>[e(k,{fill:"fill-white"})]),default:t(()=>[d(" حذف ")]),_:2},1040)]),default:t(({isActive:u})=>[e(A,{title:b(a.coupon_code),rounded:"lg",color:"#EFE9F5",style:{"padding-block":"1.75rem !important"}},{default:t(()=>[e(G,null,{default:t(()=>[d(" سيتم حذف هذه الكوبون بشكل نهائي . ")]),_:1}),e(H,null,{default:t(()=>[e(J),e(r,{text:"لا",onClick:w=>u.value=!1},null,8,["onClick"]),e(r,{text:"نعم",onClick:w=>{u.value=!1,V(a.id)}},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)])]),_:2},1032,["items-per-page","page","items-length","items","loading"])])):f("",!0)],64)}}});export{ge as default};
