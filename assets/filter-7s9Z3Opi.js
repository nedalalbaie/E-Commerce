import{z as _,I as z,A as U,H as le,G as S,B as X,D as me,i as c,p as N,b2 as Je,ab as ae,bn as Tt,an as re,ao as ke,ap as Ce,ar as Ve,bo as Bt,ac as Qe,aV as F,b7 as be,af as Be,ad as Oe,ah as Fe,bp as Ot,al as Me,am as Ze,aO as Ft,aq as et,aP as tt,as as De,at as nt,au as _e,aw as Ee,az as Re,bq as Mt,br as Dt,aA as lt,aB as pe,aC as at,aD as it,bs as _t,a3 as ne,ae as Q,bt as st,F as Z,aY as ye,aS as G,aX as ge,bu as ce,b as D,bv as ut,b9 as ot,E as rt,bw as Et,bx as Rt,bb as Kt,by as jt,ag as Ke,aH as ee,av as je,bz as Gt,bi as $t,ba as Ht,b8 as W,b6 as Nt,bA as Pe,aE as Ut,aF as zt,bB as Ne,aJ as Ue,aI as ct,aK as dt,aL as ze,bC as qt,aT as vt,aR as Wt,w as Ae,aZ as Ie,bD as Xt,bE as ft,aG as mt,bF as Yt,a$ as he,be as Jt,bG as Qt,bg as Zt,bh as en,bj as tn,U as qe,bk as nn,f as ln,bm as We,b3 as xe,g as de}from"./index-c8EmFYNS.js";import{V as ve,b as yt}from"./VAvatar-_g8D_ewF.js";import{c as gt}from"./createSimpleFunctional-gvfQdlSX.js";import{m as an,V as Xe}from"./VSelectionControl-UDC2vv3o.js";const sn=_({indeterminate:Boolean,indeterminateIcon:{type:z,default:"$checkboxIndeterminate"},...an({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),un=U()({name:"VCheckboxBtn",props:sn(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const n=le(e,"indeterminate"),l=le(e,"modelValue");function a(o){n.value&&(n.value=!1)}const u=S(()=>n.value?e.indeterminateIcon:e.falseIcon),s=S(()=>n.value?e.indeterminateIcon:e.trueIcon);return X(()=>{const o=me(Xe.filterProps(e),["modelValue"]);return c(Xe,N(o,{modelValue:l.value,"onUpdate:modelValue":[b=>l.value=b,a],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:u.value,trueIcon:s.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}}),ht=Symbol.for("vuetify:v-chip-group"),on=_({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Je},...ae(),...Tt({selectedClass:"v-chip--selected"}),...re(),...ke(),...Ce({variant:"tonal"})},"VChipGroup");U()({name:"VChipGroup",props:on(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const{themeClasses:n}=Ve(e),{isSelected:l,select:a,next:u,prev:s,selected:o}=Bt(e,ht);return Qe({VChip:{color:F(e,"color"),disabled:F(e,"disabled"),filter:F(e,"filter"),variant:F(e,"variant")}}),X(()=>c(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,{isSelected:l,select:a,next:u,prev:s,selected:o.value})]}})),{}}});const rn=_({activeClass:String,appendAvatar:String,appendIcon:z,closable:Boolean,closeIcon:{type:z,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:be(),onClickOnce:be(),...Be(),...ae(),...Oe(),...Fe(),...Ot(),...Me(),...Ze(),...Ft(),...re({tag:"span"}),...ke(),...Ce({variant:"tonal"})},"VChip"),cn=U()({name:"VChip",directives:{Ripple:et},props:rn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{t:a}=tt(),{borderClasses:u}=De(e),{colorClasses:s,colorStyles:o,variantClasses:b}=nt(e),{densityClasses:k}=_e(e),{elevationClasses:v}=Ee(e),{roundedClasses:r}=Re(e),{sizeClasses:m}=Mt(e),{themeClasses:h}=Ve(e),y=le(e,"modelValue"),d=Dt(e,ht,!1),p=lt(e,t),C=S(()=>e.link!==!1&&p.isLink.value),w=S(()=>!e.disabled&&e.link!==!1&&(!!d||e.link||p.isClickable.value)),L=S(()=>({"aria-label":a(e.closeLabel),onClick(I){I.stopPropagation(),y.value=!1,n("click:close",I)}}));function H(I){var R;n("click",I),w.value&&((R=p.navigate)==null||R.call(p,I),d==null||d.toggle())}function Y(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),H(I))}return()=>{const I=p.isLink.value?"a":e.tag,R=!!(e.appendIcon||e.appendAvatar),M=!!(R||l.append),A=!!(l.close||e.closable),$=!!(l.filter||e.filter)&&d,te=!!(e.prependIcon||e.prependAvatar),q=!!(te||l.prepend),J=!d||d.isSelected.value;return y.value&&pe(c(I,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":w.value,"v-chip--filter":$,"v-chip--pill":e.pill},h.value,u.value,J?s.value:void 0,k.value,v.value,r.value,m.value,b.value,d==null?void 0:d.selectedClass.value,e.class],style:[J?o.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:w.value?0:void 0,onClick:H,onKeydown:w.value&&!C.value&&Y},{default:()=>{var K;return[it(w.value,"v-chip"),$&&c(_t,{key:"filter"},{default:()=>[pe(c("div",{class:"v-chip__filter"},[l.filter?c(Q,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):c(ne,{key:"filter-icon",icon:e.filterIcon},null)]),[[st,d.isSelected.value]])]}),q&&c("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?c(Q,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):c(Z,null,[e.prependIcon&&c(ne,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&c(ve,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),c("div",{class:"v-chip__content"},[((K=l.default)==null?void 0:K.call(l,{isSelected:d==null?void 0:d.isSelected.value,selectedClass:d==null?void 0:d.selectedClass.value,select:d==null?void 0:d.select,toggle:d==null?void 0:d.toggle,value:d==null?void 0:d.value.value,disabled:e.disabled}))??e.text]),M&&c("div",{key:"append",class:"v-chip__append"},[l.append?c(Q,{key:"append-defaults",disabled:!R,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):c(Z,null,[e.appendIcon&&c(ne,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&c(ve,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),A&&c("button",N({key:"close",class:"v-chip__close",type:"button"},L.value),[l.close?c(Q,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):c(ne,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[at("ripple"),w.value&&e.ripple,null]])}}}),Le=Symbol.for("vuetify:list");function bt(){const e=ye(Le,{hasPrepend:G(!1),updateHasPrepend:()=>null}),i={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ge(Le,i),e}function pt(){return ye(Le,null)}const dn={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let u=l.get(i);for(;u!=null;)a.add(u),u=l.get(u);return a}else return n.delete(i),n},select:()=>null},St={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},vn={open:St.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let u=l.get(i);for(;u!=null;)a.push(u),u=l.get(u);return new Set(a)}},Ge=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=ce(n),e&&!l){const u=Array.from(a.entries()).reduce((s,o)=>{let[b,k]=o;return k==="on"?[...s,b]:s},[]);if(u.length===1&&u[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const u of t||[])a=i.select({id:u,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},kt=e=>{const i=Ge(e);return{select:n=>{let{selected:l,id:a,...u}=n;a=ce(a);const s=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...u,id:a,selected:s})},in:(n,l,a)=>{let u=new Map;return n!=null&&n.length&&(u=i.in(n.slice(0,1),l,a)),u},out:(n,l,a)=>i.out(n,l,a)}},fn=e=>{const i=Ge(e);return{select:n=>{let{id:l,selected:a,children:u,...s}=n;return l=ce(l),u.has(l)?a:i.select({id:l,selected:a,children:u,...s})},in:i.in,out:i.out}},mn=e=>{const i=kt(e);return{select:n=>{let{id:l,selected:a,children:u,...s}=n;return l=ce(l),u.has(l)?a:i.select({id:l,selected:a,children:u,...s})},in:i.in,out:i.out}},yn=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:u,parents:s}=t;n=ce(n);const o=new Map(a),b=[n];for(;b.length;){const v=b.shift();a.set(v,l?"on":"off"),u.has(v)&&b.push(...u.get(v))}let k=s.get(n);for(;k;){const v=u.get(k),r=v.every(h=>a.get(h)==="on"),m=v.every(h=>!a.has(h)||a.get(h)==="off");a.set(k,r?"on":m?"off":"indeterminate"),k=s.get(k)}return e&&!l&&Array.from(a.entries()).reduce((r,m)=>{let[h,y]=m;return y==="on"?[...r,h]:r},[]).length===0?o:a},in:(t,n,l)=>{let a=new Map;for(const u of t||[])a=i.select({id:u,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,u]of t.entries())u==="on"&&!n.has(a)&&l.push(a);return l}};return i},fe=Symbol.for("vuetify:nested"),Ct={id:G(),root:{register:()=>null,unregister:()=>null,parents:D(new Map),children:D(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:D(new Set),selected:D(new Map),selectedValues:D([])}},gn=_({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),hn=e=>{let i=!1;const t=D(new Map),n=D(new Map),l=le(e,"opened",e.opened,v=>new Set(v),v=>[...v.values()]),a=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return mn(e.mandatory);case"leaf":return fn(e.mandatory);case"independent":return Ge(e.mandatory);case"single-independent":return kt(e.mandatory);case"classic":default:return yn(e.mandatory)}}),u=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return vn;case"single":return dn;case"multiple":default:return St}}),s=le(e,"selected",e.selected,v=>a.value.in(v,t.value,n.value),v=>a.value.out(v,t.value,n.value));ut(()=>{i=!0});function o(v){const r=[];let m=v;for(;m!=null;)r.unshift(m),m=n.value.get(m);return r}const b=ot("nested"),k={id:G(),root:{opened:l,selected:s,selectedValues:S(()=>{const v=[];for(const[r,m]of s.value.entries())m==="on"&&v.push(r);return v}),register:(v,r,m)=>{r&&v!==r&&n.value.set(v,r),m&&t.value.set(v,[]),r!=null&&t.value.set(r,[...t.value.get(r)||[],v])},unregister:v=>{if(i)return;t.value.delete(v);const r=n.value.get(v);if(r){const m=t.value.get(r)??[];t.value.set(r,m.filter(h=>h!==v))}n.value.delete(v),l.value.delete(v)},open:(v,r,m)=>{b.emit("click:open",{id:v,value:r,path:o(v),event:m});const h=u.value.open({id:v,value:r,opened:new Set(l.value),children:t.value,parents:n.value,event:m});h&&(l.value=h)},openOnSelect:(v,r,m)=>{const h=u.value.select({id:v,value:r,selected:new Map(s.value),opened:new Set(l.value),children:t.value,parents:n.value,event:m});h&&(l.value=h)},select:(v,r,m)=>{b.emit("click:select",{id:v,value:r,path:o(v),event:m});const h=a.value.select({id:v,value:r,selected:new Map(s.value),children:t.value,parents:n.value,event:m});h&&(s.value=h),k.root.openOnSelect(v,r,m)},children:t,parents:n}};return ge(fe,k),k.root},Vt=(e,i)=>{const t=ye(fe,Ct),n=Symbol(rt()),l=S(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(u,s)=>t.root.open(l.value,u,s),openOnSelect:(u,s)=>t.root.openOnSelect(l.value,u,s),isOpen:S(()=>t.root.opened.value.has(l.value)),parent:S(()=>t.root.parents.value.get(l.value)),select:(u,s)=>t.root.select(l.value,u,s),isSelected:S(()=>t.root.selected.value.get(ce(l.value))==="on"),isIndeterminate:S(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),ut(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&ge(fe,a),a},bn=()=>{const e=ye(fe,Ct);ge(fe,{...e,isGroupActivator:!0})},pn=Et({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return bn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Sn=_({activeColor:String,baseColor:String,color:String,collapseIcon:{type:z,default:"$collapse"},expandIcon:{type:z,default:"$expand"},prependIcon:z,appendIcon:z,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ae(),...re()},"VListGroup"),Ye=U()({name:"VListGroup",props:Sn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=Vt(F(e,"value"),!0),u=S(()=>`v-list-group--id-${String(a.value)}`),s=pt(),{isBooted:o}=Rt();function b(m){l(!n.value,m)}const k=S(()=>({onClick:b,class:"v-list-group__header",id:u.value})),v=S(()=>n.value?e.collapseIcon:e.expandIcon),r=S(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}));return X(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&c(Q,{defaults:r.value},{default:()=>[c(pn,null,{default:()=>[t.activator({props:k.value,isOpen:n.value})]})]}),c(Kt,{transition:{component:jt},disabled:!o.value},{default:()=>{var m;return[pe(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(m=t.default)==null?void 0:m.call(t)]),[[st,n.value]])]}})]})),{}}}),kn=gt("v-list-item-subtitle"),Cn=gt("v-list-item-title"),Vn=_({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:z,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:be(),onClickOnce:be(),...Be(),...ae(),...Oe(),...Ke(),...Fe(),...Me(),...Ze(),...re(),...ke(),...Ce({variant:"text"})},"VListItem"),Se=U()({name:"VListItem",directives:{Ripple:et},props:Vn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=lt(e,t),u=S(()=>e.value===void 0?a.href.value:e.value),{select:s,isSelected:o,isIndeterminate:b,isGroupActivator:k,root:v,parent:r,openOnSelect:m}=Vt(u,!1),h=pt(),y=S(()=>{var f;return e.active!==!1&&(e.active||((f=a.isActive)==null?void 0:f.value)||o.value)}),d=S(()=>e.link!==!1&&a.isLink.value),p=S(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!h)),C=S(()=>e.rounded||e.nav),w=S(()=>e.color??e.activeColor),L=S(()=>({color:y.value?w.value??e.baseColor:e.baseColor,variant:e.variant}));ee(()=>{var f;return(f=a.isActive)==null?void 0:f.value},f=>{f&&r.value!=null&&v.open(r.value,!0),f&&m(f)},{immediate:!0});const{themeClasses:H}=Ve(e),{borderClasses:Y}=De(e),{colorClasses:I,colorStyles:R,variantClasses:M}=nt(L),{densityClasses:A}=_e(e),{dimensionStyles:$}=je(e),{elevationClasses:te}=Ee(e),{roundedClasses:q}=Re(C),J=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),K=S(()=>({isActive:y.value,select:s,isSelected:o.value,isIndeterminate:b.value}));function se(f){var g;l("click",f),!(k||!p.value)&&((g=a.navigate)==null||g.call(a,f),e.value!=null&&s(!o.value,f))}function ue(f){(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),se(f))}return X(()=>{const f=d.value?"a":e.tag,g=n.title||e.title!=null,V=n.subtitle||e.subtitle!=null,O=!!(e.appendAvatar||e.appendIcon),E=!!(O||n.append),P=!!(e.prependAvatar||e.prependIcon),T=!!(P||n.prepend);return h==null||h.updateHasPrepend(T),e.activeColor&&Gt("active-color",["color","base-color"]),pe(c(f,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!T&&(h==null?void 0:h.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&y.value},H.value,Y.value,I.value,A.value,te.value,J.value,q.value,M.value,e.class],style:[R.value,$.value,e.style],href:a.href.value,tabindex:p.value?h?-2:0:void 0,onClick:se,onKeydown:p.value&&!d.value&&ue},{default:()=>{var B;return[it(p.value||y.value,"v-list-item"),T&&c("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?c(Q,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var x;return[(x=n.prepend)==null?void 0:x.call(n,K.value)]}}):c(Z,null,[e.prependAvatar&&c(ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(ne,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[g&&c(Cn,{key:"title"},{default:()=>{var x;return[((x=n.title)==null?void 0:x.call(n,{title:e.title}))??e.title]}}),V&&c(kn,{key:"subtitle"},{default:()=>{var x;return[((x=n.subtitle)==null?void 0:x.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(B=n.default)==null?void 0:B.call(n,K.value)]),E&&c("div",{key:"append",class:"v-list-item__append"},[n.append?c(Q,{key:"append-defaults",disabled:!O,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var x;return[(x=n.append)==null?void 0:x.call(n,K.value)]}}):c(Z,null,[e.appendIcon&&c(ne,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[at("ripple"),p.value&&e.ripple]])}),{}}}),In=_({color:String,inset:Boolean,sticky:Boolean,title:String,...ae(),...re()},"VListSubheader"),wn=U()({name:"VListSubheader",props:In(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=$t(F(e,"color"));return X(()=>{const a=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var u;return[a&&c("div",{class:"v-list-subheader__text"},[((u=t.default)==null?void 0:u.call(t))??e.title])]}})}),{}}}),Pn=_({items:Array,returnObject:Boolean},"VListChildren"),It=U()({name:"VListChildren",props:Pn(),setup(e,i){let{slots:t}=i;return bt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var r,m;let{children:u,props:s,type:o,raw:b}=a;if(o==="divider")return((r=t.divider)==null?void 0:r.call(t,{props:s}))??c(Ht,s,null);if(o==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:s}))??c(wn,s,null);const k={subtitle:t.subtitle?h=>{var y;return(y=t.subtitle)==null?void 0:y.call(t,{...h,item:b})}:void 0,prepend:t.prepend?h=>{var y;return(y=t.prepend)==null?void 0:y.call(t,{...h,item:b})}:void 0,append:t.append?h=>{var y;return(y=t.append)==null?void 0:y.call(t,{...h,item:b})}:void 0,title:t.title?h=>{var y;return(y=t.title)==null?void 0:y.call(t,{...h,item:b})}:void 0},v=Ye.filterProps(s);return u?c(Ye,N({value:s==null?void 0:s.value},v),{activator:h=>{let{props:y}=h;const d={...s,...y,value:e.returnObject?b:s.value};return t.header?t.header({props:d}):c(Se,d,k)},default:()=>c(It,{items:u},t)}):t.item?t.item({props:s}):c(Se,N(s,{value:e.returnObject?b:s.value}),k)}))}}}),wt=_({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Je}},"list-items");function Te(e,i){const t=W(i,e.itemTitle,i),n=W(i,e.itemValue,t),l=W(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?me(i,["children"]):i:void 0:W(i,e.itemProps),u={title:t,value:n,...a};return{title:String(u.title??""),value:u.value,props:u,children:Array.isArray(l)?Pt(e,l):void 0,raw:i}}function Pt(e,i){const t=[];for(const n of i)t.push(Te(e,n));return t}function An(e){const i=S(()=>Pt(e,e.items)),t=S(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(u=>u!==null)),a.map(u=>e.returnObject&&typeof u=="string"?Te(e,u):i.value.find(s=>e.valueComparator(u,s.value))||Te(e,u))}function l(a){return e.returnObject?a.map(u=>{let{raw:s}=u;return s}):a.map(u=>{let{value:s}=u;return s})}return{items:i,transformIn:n,transformOut:l}}function xn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ln(e,i){const t=W(i,e.itemType,"item"),n=xn(i)?i:W(i,e.itemTitle),l=W(i,e.itemValue,void 0),a=W(i,e.itemChildren),u=e.itemProps===!0?me(i,["children"]):W(i,e.itemProps),s={title:n,value:l,...u};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&a?At(e,a):void 0,raw:i}}function At(e,i){const t=[];for(const n of i)t.push(Ln(e,n));return t}function Tn(e){return{items:S(()=>At(e,e.items))}}const Bn=_({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...gn({selectStrategy:"single-leaf",openStrategy:"list"}),...Be(),...ae(),...Oe(),...Ke(),...Fe(),itemType:{type:String,default:"type"},...wt(),...Me(),...re(),...ke(),...Ce({variant:"text"})},"VList"),On=U()({name:"VList",props:Bn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Tn(e),{themeClasses:l}=Ve(e),{backgroundColorClasses:a,backgroundColorStyles:u}=Nt(F(e,"bgColor")),{borderClasses:s}=De(e),{densityClasses:o}=_e(e),{dimensionStyles:b}=je(e),{elevationClasses:k}=Ee(e),{roundedClasses:v}=Re(e),{open:r,select:m}=hn(e),h=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=F(e,"activeColor"),d=F(e,"baseColor"),p=F(e,"color");bt(),Qe({VListGroup:{activeColor:y,baseColor:d,color:p},VListItem:{activeClass:F(e,"activeClass"),activeColor:y,baseColor:d,color:p,density:F(e,"density"),disabled:F(e,"disabled"),lines:F(e,"lines"),nav:F(e,"nav"),slim:F(e,"slim"),variant:F(e,"variant")}});const C=G(!1),w=D();function L(A){C.value=!0}function H(A){C.value=!1}function Y(A){var $;!C.value&&!(A.relatedTarget&&(($=w.value)!=null&&$.contains(A.relatedTarget)))&&M()}function I(A){if(w.value){if(A.key==="ArrowDown")M("next");else if(A.key==="ArrowUp")M("prev");else if(A.key==="Home")M("first");else if(A.key==="End")M("last");else return;A.preventDefault()}}function R(A){C.value=!0}function M(A){if(w.value)return Pe(w.value,A)}return X(()=>c(e.tag,{ref:w,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,s.value,o.value,k.value,h.value,v.value,e.class],style:[u.value,b.value,e.style],tabindex:e.disabled||C.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:L,onFocusout:H,onFocus:Y,onKeydown:I,onMousedown:R},{default:()=>[c(It,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:m,focus:M}}}),Fn=_({id:String,...me(Ut({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:yt}}),["absolute"])},"VMenu"),Mn=U()({name:"VMenu",props:Fn(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=le(e,"modelValue"),{scopeId:l}=zt(),a=rt(),u=S(()=>e.id||`v-menu-${a}`),s=D(),o=ye(Ne,null),b=G(0);ge(Ne,{register(){++b.value},unregister(){--b.value},closeParents(){setTimeout(()=>{b.value||(n.value=!1,o==null||o.closeParents())},40)}});async function k(y){var C,w,L;const d=y.relatedTarget,p=y.target;await dt(),n.value&&d!==p&&((C=s.value)!=null&&C.contentEl)&&((w=s.value)!=null&&w.globalTop)&&![document,s.value.contentEl].includes(p)&&!s.value.contentEl.contains(p)&&((L=ze(s.value.contentEl)[0])==null||L.focus())}ee(n,y=>{y?(o==null||o.register(),document.addEventListener("focusin",k,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",k))});function v(){o==null||o.closeParents()}function r(y){var d,p,C;e.disabled||y.key==="Tab"&&(qt(ze((d=s.value)==null?void 0:d.contentEl,!1),y.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(n.value=!1,(C=(p=s.value)==null?void 0:p.activatorEl)==null||C.focus()))}function m(y){var p;if(e.disabled)return;const d=(p=s.value)==null?void 0:p.contentEl;d&&n.value?y.key==="ArrowDown"?(y.preventDefault(),Pe(d,"next")):y.key==="ArrowUp"&&(y.preventDefault(),Pe(d,"prev")):["ArrowDown","ArrowUp"].includes(y.key)&&(n.value=!0,y.preventDefault(),setTimeout(()=>setTimeout(()=>m(y))))}const h=S(()=>N({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":u.value,onKeydown:m},e.activatorProps));return X(()=>{const y=Ue.filterProps(e);return c(Ue,N({ref:s,class:["v-menu",e.class],style:e.style},y,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,absolute:!0,activatorProps:h.value,"onClick:outside":v,onKeydown:r},l),{activator:t.activator,default:function(){for(var d=arguments.length,p=new Array(d),C=0;C<d;C++)p[C]=arguments[C];return c(Q,{root:"VMenu"},{default:()=>{var w;return[(w=t.default)==null?void 0:w.call(t,...p)]}})}})}),ct({id:u,ΨopenChildren:b},s)}}),Dn=_({renderless:Boolean,...ae()},"VVirtualScrollItem"),_n=U()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Dn(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:u}=vt(void 0,"border");ee(()=>{var s;return(s=u.value)==null?void 0:s.height},s=>{s!=null&&n("update:height",s)}),X(()=>{var s,o;return e.renderless?c(Z,null,[(s=l.default)==null?void 0:s.call(l,{itemRef:a})]):c("div",N({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(o=l.default)==null?void 0:o.call(l)])})}}),En=-1,Rn=1,we=100,Kn=_({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function jn(e,i){const t=Wt(),n=G(0);Ae(()=>{n.value=parseFloat(e.itemHeight||0)});const l=G(0),a=G(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),u=G(0),s=G(0),o=D(),b=D();let k=0;const{resizeRef:v,contentRect:r}=vt();Ae(()=>{v.value=o.value});const m=S(()=>{var g;return o.value===document.documentElement?t.height.value:((g=r.value)==null?void 0:g.height)||parseInt(e.height)||0}),h=S(()=>!!(o.value&&b.value&&m.value&&n.value));let y=Array.from({length:i.value.length}),d=Array.from({length:i.value.length});const p=G(0);let C=-1;function w(g){return y[g]||n.value}const L=Xt(()=>{const g=performance.now();d[0]=0;const V=i.value.length;for(let O=1;O<=V-1;O++)d[O]=(d[O-1]||0)+w(O-1);p.value=Math.max(p.value,performance.now()-g)},p),H=ee(h,g=>{g&&(H(),k=b.value.offsetTop,L.immediate(),K(),~C&&dt(()=>{mt&&window.requestAnimationFrame(()=>{ue(C),C=-1})}))});ee(m,(g,V)=>{V&&K()}),ft(()=>{L.clear()});function Y(g,V){const O=y[g],E=n.value;n.value=E?Math.min(n.value,V):V,(O!==V||E!==n.value)&&(y[g]=V,L())}function I(g){return g=Ie(g,0,i.value.length-1),d[g]||0}function R(g){return Gn(d,g)}let M=0,A=0,$=0;function te(){if(!o.value||!b.value)return;const g=o.value.scrollTop,V=performance.now();V-$>500?(A=Math.sign(g-M),k=b.value.offsetTop):A=g-M,M=g,$=V,K()}function q(){!o.value||!b.value||(A=0,$=0,K())}let J=-1;function K(){cancelAnimationFrame(J),J=requestAnimationFrame(se)}function se(){if(!o.value||!m.value)return;const g=M-k,V=Math.sign(A),O=Math.max(0,g-we),E=Ie(R(O),0,i.value.length),P=g+m.value+we,T=Ie(R(P)+1,E+1,i.value.length);if((V!==En||E<l.value)&&(V!==Rn||T>a.value)){const B=I(l.value)-I(E),x=I(T)-I(a.value);Math.max(B,x)>we?(l.value=E,a.value=T):(E<=0&&(l.value=E),T>=i.value.length&&(a.value=T))}u.value=I(l.value),s.value=I(i.value.length)-I(a.value)}function ue(g){const V=I(g);!o.value||g&&!V?C=g:o.value.scrollTop=V}const f=S(()=>i.value.slice(l.value,a.value).map((g,V)=>({raw:g,index:V+l.value})));return ee(i,()=>{y=Array.from({length:i.value.length}),d=Array.from({length:i.value.length}),L.immediate(),K()},{deep:!0}),{containerRef:o,markerRef:b,computedItems:f,paddingTop:u,paddingBottom:s,scrollToIndex:ue,handleScroll:te,handleScrollend:q,handleItemResize:Y}}function Gn(e,i){let t=e.length-1,n=0,l=0,a=null,u=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)u=l,n=l+1;else return a===i?l:n;return u}const $n=_({items:{type:Array,default:()=>[]},renderless:Boolean,...Kn(),...ae(),...Ke()},"VVirtualScroll"),Hn=U()({name:"VVirtualScroll",props:$n(),setup(e,i){let{slots:t}=i;const n=ot("VVirtualScroll"),{dimensionStyles:l}=je(e),{containerRef:a,markerRef:u,handleScroll:s,handleScrollend:o,handleItemResize:b,scrollToIndex:k,paddingTop:v,paddingBottom:r,computedItems:m}=jn(e,F(e,"items"));return Yt(()=>e.renderless,()=>{function h(){var p,C;const d=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";a.value===document.documentElement?(document[d]("scroll",s,{passive:!0}),document[d]("scrollend",o)):((p=a.value)==null||p[d]("scroll",s,{passive:!0}),(C=a.value)==null||C[d]("scrollend",o))}Jt(()=>{a.value=Qt(n.vnode.el,!0),h(!0)}),ft(h)}),X(()=>{const h=m.value.map(y=>c(_n,{key:y.index,renderless:e.renderless,"onUpdate:height":d=>b(y.index,d)},{default:d=>{var p;return(p=t.default)==null?void 0:p.call(t,{item:y.raw,index:y.index,...d})}}));return e.renderless?c(Z,null,[c("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:he(v.value)}},null),h,c("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:he(r.value)}},null)]):c("div",{ref:a,class:["v-virtual-scroll",e.class],onScrollPassive:s,onScrollend:o,style:[l.value,e.style]},[c("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:he(v.value),paddingBottom:he(r.value)}},[h])])}),{scrollToIndex:k}}});function Nn(e,i){const t=G(!1);let n;function l(s){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>{if(t.value){const o=ee(t,()=>{o(),s()})}else s()})}async function u(s){var k,v;if(s.key==="Tab"&&((k=i.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(s.key))return;const o=(v=e.value)==null?void 0:v.$el;if(!o)return;(s.key==="Home"||s.key==="End")&&o.scrollTo({top:s.key==="Home"?0:o.scrollHeight,behavior:"smooth"}),await a();const b=o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(s.key==="PageDown"||s.key==="Home"){const r=o.getBoundingClientRect().top;for(const m of b)if(m.getBoundingClientRect().top>=r){m.focus();break}}else{const r=o.getBoundingClientRect().bottom;for(const m of[...b].reverse())if(m.getBoundingClientRect().bottom<=r){m.focus();break}}}return{onListScroll:l,onListKeydown:u}}const Un=_({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:z,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...wt({itemChildren:!1})},"Select"),zn=_({...Un(),...me(Zt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...en({transition:{component:yt}})},"VSelect"),Zn=U()({name:"VSelect",props:zn(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=tt(),l=D(),a=D(),u=D(),s=le(e,"menu"),o=S({get:()=>s.value,set:f=>{var g;s.value&&!f&&((g=a.value)!=null&&g.ΨopenChildren)||(s.value=f)}}),{items:b,transformIn:k,transformOut:v}=An(e),r=le(e,"modelValue",[],f=>k(f===null?[null]:xe(f)),f=>{const g=v(f);return e.multiple?g:g[0]??null}),m=S(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),h=tn(),y=S(()=>r.value.map(f=>f.value)),d=G(!1),p=S(()=>o.value?e.closeText:e.openText);let C="",w;const L=S(()=>e.hideSelected?b.value.filter(f=>!r.value.some(g=>g===f)):b.value),H=S(()=>e.hideNoData&&!L.value.length||e.readonly||(h==null?void 0:h.isReadonly.value)),Y=S(()=>{var f;return{...e.menuProps,activatorProps:{...((f=e.menuProps)==null?void 0:f.activatorProps)||{},"aria-haspopup":"listbox"}}}),I=D(),{onListScroll:R,onListKeydown:M}=Nn(I,l);function A(f){e.openOnClear&&(o.value=!0)}function $(){H.value||(o.value=!o.value)}function te(f){var P,T;if(!f.key||e.readonly||h!=null&&h.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(f.key)&&f.preventDefault(),["Enter","ArrowDown"," "].includes(f.key)&&(o.value=!0),["Escape","Tab"].includes(f.key)&&(o.value=!1),f.key==="Home"?(P=I.value)==null||P.focus("first"):f.key==="End"&&((T=I.value)==null||T.focus("last"));const g=1e3;function V(B){const x=B.key.length===1,j=!B.ctrlKey&&!B.metaKey&&!B.altKey;return x&&j}if(e.multiple||!V(f))return;const O=performance.now();O-w>g&&(C=""),C+=f.key.toLowerCase(),w=O;const E=b.value.find(B=>B.title.toLowerCase().startsWith(C));E!==void 0&&(r.value=[E])}function q(f){if(e.multiple){const g=r.value.findIndex(V=>e.valueComparator(V.value,f.value));if(g===-1)r.value=[...r.value,f];else{const V=[...r.value];V.splice(g,1),r.value=V}}else r.value=[f],o.value=!1}function J(f){var g;(g=I.value)!=null&&g.$el.contains(f.relatedTarget)||(o.value=!1)}function K(){var f;d.value&&((f=l.value)==null||f.focus())}function se(f){d.value=!0}function ue(f){if(f==null)r.value=[];else if(We(l.value,":autofill")||We(l.value,":-webkit-autofill")){const g=b.value.find(V=>V.title===f);g&&q(g)}else l.value&&(l.value.value="")}return ee(o,()=>{if(!e.hideSelected&&o.value&&r.value.length){const f=L.value.findIndex(g=>r.value.some(V=>e.valueComparator(V.value,g.value)));mt&&window.requestAnimationFrame(()=>{var g;f>=0&&((g=u.value)==null||g.scrollToIndex(f))})}}),ee(L,(f,g)=>{d.value&&(!f.length&&e.hideNoData&&(o.value=!1),!g.length&&f.length&&(o.value=!0))}),X(()=>{const f=!!(e.chips||t.chip),g=!!(!e.hideNoData||L.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),V=r.value.length>0,O=qe.filterProps(e),E=V||!d.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return c(qe,N({ref:l},O,{modelValue:r.value.map(P=>P.props.value).join(", "),"onUpdate:modelValue":ue,focused:d.value,"onUpdate:focused":P=>d.value=P,validationValue:r.externalValue,counterValue:m.value,dirty:V,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:E,"onClick:clear":A,"onMousedown:control":$,onBlur:J,onKeydown:te,"aria-label":n(p.value),title:n(p.value)}),{...t,default:()=>c(Z,null,[c(Mn,N({ref:a,modelValue:o.value,"onUpdate:modelValue":P=>o.value=P,activator:"parent",contentClass:"v-select__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:K},Y.value),{default:()=>[g&&c(On,{ref:I,selected:y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:P=>P.preventDefault(),onKeydown:M,onFocusin:se,onScrollPassive:R,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},{default:()=>{var P,T,B;return[(P=t["prepend-item"])==null?void 0:P.call(t),!L.value.length&&!e.hideNoData&&(((T=t["no-data"])==null?void 0:T.call(t))??c(Se,{title:n(e.noDataText)},null)),c(Hn,{ref:u,renderless:!0,items:L.value},{default:x=>{var He;let{item:j,index:oe,itemRef:ie}=x;const $e=N(j.props,{ref:ie,key:oe,onClick:()=>q(j)});return((He=t.item)==null?void 0:He.call(t,{item:j,index:oe,props:$e}))??c(Se,N($e,{role:"option"}),{prepend:xt=>{let{isSelected:Lt}=xt;return c(Z,null,[e.multiple&&!e.hideSelected?c(un,{key:j.value,modelValue:Lt,ripple:!1,tabindex:"-1"},null):void 0,j.props.prependAvatar&&c(ve,{image:j.props.prependAvatar},null),j.props.prependIcon&&c(ne,{icon:j.props.prependIcon},null)])}})}}),(B=t["append-item"])==null?void 0:B.call(t)]}})]}),r.value.map((P,T)=>{function B(ie){ie.stopPropagation(),ie.preventDefault(),q(P)}const x={"onClick:close":B,onMousedown(ie){ie.preventDefault(),ie.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},j=f?!!t.chip:!!t.selection,oe=j?nn(f?t.chip({item:P,index:T,props:x}):t.selection({item:P,index:T})):void 0;if(!(j&&!oe))return c("div",{key:P.value,class:"v-select__selection"},[f?t.chip?c(Q,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:P.title}}},{default:()=>[oe]}):c(cn,N({key:"chip",closable:e.closableChips,size:"small",text:P.title,disabled:P.props.disabled},x),null):oe??c("span",{class:"v-select__selection-text"},[P.title,e.multiple&&T<r.value.length-1&&c("span",{class:"v-select__selection-comma"},[ln(",")])])])})]),"append-inner":function(){var x;for(var P=arguments.length,T=new Array(P),B=0;B<P;B++)T[B]=arguments[B];return c(Z,null,[(x=t["append-inner"])==null?void 0:x.call(t,...T),e.menuIcon?c(ne,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),ct({isFocused:d,menu:o,select:q},l)}}),qn=(e,i,t)=>e==null||i==null?-1:e.toString().toLocaleLowerCase().indexOf(i.toString().toLocaleLowerCase()),el=_({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Wn(e,i,t){var s;const n=[],l=(t==null?void 0:t.default)??qn,a=t!=null&&t.filterKeys?xe(t.filterKeys):!1,u=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return n;e:for(let o=0;o<e.length;o++){const[b,k=b]=xe(e[o]),v={},r={};let m=-1;if(i&&!(t!=null&&t.noFilter)){if(typeof b=="object"){const d=a||Object.keys(k);for(const p of d){const C=W(k,p,k),w=(s=t==null?void 0:t.customKeyFilter)==null?void 0:s[p];if(m=w?w(C,i,b):l(C,i,b),m!==-1&&m!==!1)w?v[p]=m:r[p]=m;else if((t==null?void 0:t.filterMode)==="every")continue e}}else m=l(b,i,b),m!==-1&&m!==!1&&(r.title=m);const h=Object.keys(r).length,y=Object.keys(v).length;if(!h&&!y||(t==null?void 0:t.filterMode)==="union"&&y!==u&&!h||(t==null?void 0:t.filterMode)==="intersection"&&(y!==u||!h))continue}n.push({index:o,matches:{...r,...v}})}return n}function tl(e,i,t,n){const l=D([]),a=D(new Map),u=S(()=>n!=null&&n.transform?de(i).map(o=>[o,n.transform(o)]):de(i));Ae(()=>{const o=typeof t=="function"?t():de(t),b=typeof o!="string"&&typeof o!="number"?"":String(o),k=Wn(u.value,b,{customKeyFilter:{...e.customKeyFilter,...de(n==null?void 0:n.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),v=de(i),r=[],m=new Map;k.forEach(h=>{let{index:y,matches:d}=h;const p=v[y];r.push(p),m.set(p.value,d)}),l.value=r,a.value=m});function s(o){return a.value.get(o.value)}return{filteredItems:l,filteredMatches:a,getMatches:s}}export{Se as V,Cn as a,Zn as b,un as c,Un as d,An as e,Nn as f,Mn as g,On as h,Hn as i,cn as j,el as m,tl as u};
