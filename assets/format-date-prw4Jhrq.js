const o=t=>new Date(t).toISOString().split("T")[0],s=t=>{const a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${n}-${r}`},c=t=>{const a=t.split("-"),n=parseInt(a[0],10),r=parseInt(a[1],10)-1,e=parseInt(a[2],10);return new Date(n,r,e)};export{c as a,o as b,s as f};
