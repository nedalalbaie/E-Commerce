function c(r,n=!1,s,f=s.polyfill("FormData",!0,!0),l=[]){return Object.entries(r).forEach(([i,t])=>{let o=l.reduce((e,a)=>e?`${e}[${a}]`:a,null);if(o=o?`${o}[${i}]`:i,t instanceof Array||globalThis.FileList&&t instanceof FileList)for(const e of t)f.append(o,e);else n&&typeof t=="object"&&(!(n instanceof Array)||!n.includes(i))?t!==null&&c(t,n,s,f,[...l,i]):f.append(o,t)}),f}const p={wretch:{formData(r,n=!1){return this.body(c(r,n,this._config))}}},d=p;export{d as f};
