import{Q as _}from"./QPage.86e33359.js";import{I as a,J as s,K as r,L as m,N as l,O as i,X as f,Y as y,Z as g,a5 as b,W as d,a6 as u,G as N}from"./index.ce3b047a.js";import{Q as k,a as h,b as x}from"./QItem.c1e36d99.js";const S=Object.assign({name:"PostItem"},{__name:"PostItem",props:{id:{type:String},title:{type:String},content:{type:String},readCount:{type:Number,default:0},commentCount:{type:Number,default:0},likeCount:{type:Number,default:0},bookmarkCount:{type:Number,default:0},category:{type:String},createTime:{type:Date},tags:{type:Array,default:()=>[]},uid:{type:String}},setup(t){return(n,c)=>(a(),s(h,{clickable:"",to:`/posts/${t.id}`},{default:r(()=>[m(k,null,{default:r(()=>[l(i(t.id)+" - "+i(t.title),1)]),_:1})]),_:1},8,["to"]))}}),C=Object.assign({name:"PostList"},{__name:"PostList",props:{items:Array,default:()=>[]},setup(t){return(n,c)=>(a(),s(x,{bordered:"",separator:""},{default:r(()=>[(a(!0),f(y,null,g(t.items,e=>(a(),s(S,{key:e.id,id:e.id,title:e.title},null,8,["id","title"]))),128))]),_:1}))}}),I=d("div",{class:"text-h4"},"\uCEE4\uBBA4\uB2C8\uD2F0 \uBAA9\uB85D",-1),Q={class:"q-gutter-y-sm q-mt-lg"},B=Object.assign({name:"b589b23a86fd460fb0f1e0924d01ffa4"},{__name:"index",setup(t){b();const n=Array.from(Array(40),(p,o)=>({id:o,title:"\uCEE4\uBBA4\uB2C8\uD2F0 \uBAA9\uB85D \uC785\uB2C8\uB2E4. "+o})),e=N().type.name;return(p,o)=>(a(),s(_,{padding:""},{default:r(()=>[I,d("section",Q,[m(C,{items:u(n)},null,8,["items"]),l(" "+i(u(e))+" lorem ",1)])]),_:1}))}});export{B as default};
