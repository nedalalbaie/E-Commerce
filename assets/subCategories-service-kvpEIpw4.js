import{X as t}from"./index-c8EmFYNS.js";import{q as s}from"./queryString-AL1HqB06.js";import{f as a}from"./formData-AERYmAuJ.js";const d=r=>t.addon(s).url("/subCategories").query(r).get().notFound(()=>({data:[],totalRecords:0})).json(),i=r=>t.url(`/subCategories/${r}`).get().json(),b=r=>t.addon(a).url("/subCategories").formData(r).post().json(o=>o),m=(r,o)=>t.addon(a).url(`/subCategories/${r}`).formData(o).put().json(e=>e);export{b as a,i as b,m as e,d as g};
