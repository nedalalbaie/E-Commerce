import{d as c,v as m,u as p,e as d,c as l,i as _,g as s,F as f,a as y,o as g,s as h}from"./index-c8EmFYNS.js";import{u as P}from"./useQuery-diit9zOu.js";import{a as q,e as v}from"./products-service-ciQlBYGG.js";import{_ as x}from"./ProductForm.vue_vue_type_script_setup_true_lang-ZIZ-J_hJ.js";import"./queryString-AL1HqB06.js";import"./formData-AERYmAuJ.js";import"./subCategories-service-kvpEIpw4.js";import"./ImageUpload.vue_vue_type_script_setup_true_lang-oT0zF6Ug.js";import"./pathToFile-C8mbCNB7.js";import"./DeleteIcon.vue_vue_type_script_setup_true_lang-19TRQ0DL.js";import"./VAutocomplete-8cUBUDpg.js";import"./filter-7s9Z3Opi.js";import"./VAvatar-_g8D_ewF.js";import"./createSimpleFunctional-gvfQdlSX.js";import"./VSelectionControl-UDC2vv3o.js";const F=y("h1",{class:"text-2xl font-medium"}," تعديل منتج ",-1),A=c({__name:"EditProducts",setup(b){const a=m(),o=Number(a.params.id),u=P({queryKey:["product"],queryFn:()=>q(o)}),i=p(),e=d({mutationFn:({id:t,body:r})=>v(t,r),onSuccess:()=>{h.replace({name:"products"}),i.invalidateQueries({queryKey:["products"]})},onError:t=>{console.log(t)}}),n=t=>{e.mutate({body:t,id:o})};return(t,r)=>(g(),l(f,null,[F,_(x,{"is-loading":s(e).isPending.value,product:s(u).data.value,onSubmit:n},null,8,["is-loading","product"])],64))}});export{A as default};
