import{d as a,u as s,e as r,c as i,i as u,g as m,F as c,a as p,o as l,s as d}from"./index-c8EmFYNS.js";import{p as _}from"./coupons-service-sZw4vZ0g.js";import{_ as f}from"./CouponForm.vue_vue_type_script_setup_true_lang-A7BC5HE0.js";import"./queryString-AL1HqB06.js";import"./format-date-prw4Jhrq.js";import"./VDatePicker-gMxh0u0o.js";import"./VSpacer-LceoUdPZ.js";import"./createSimpleFunctional-gvfQdlSX.js";const C=p("h1",{class:"text-2xl font-medium"}," إضافة كوبون جديد ",-1),v=a({__name:"CreateCoupon",setup(g){const t=s(),e=r({mutationFn:_,onSuccess:()=>{d.replace({name:"coupons"}),t.invalidateQueries({queryKey:["coupons"]})},onError:o=>{console.log(o)}}),n=o=>{e.mutate(o)};return(o,h)=>(l(),i(c,null,[C,u(f,{"is-loading":m(e).isPending.value,onSubmit:n},null,8,["is-loading"])],64))}});export{v as default};
