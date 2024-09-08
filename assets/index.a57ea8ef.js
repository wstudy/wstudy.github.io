import{I as a,J as l,K as s,V as i,L as e,T as n,ai as g,a5 as f,C as v,N as b,ap as q,aq as Q,W as p,X as L,Y as $,Z as w,t as x,ao as j,M as y,an as I}from"./index.c031cfd9.js";import{Q as P}from"./QPage.60119b85.js";import{a as _,Q as u}from"./selection.f684249a.js";import{Q as C}from"./QList.60cc19b5.js";import{Q as z}from"./QMenu.db6b2cf0.js";import{_ as c}from"./PostIcon.4aae3735.js";import{_ as A}from"./BaseCard.a2eea87e.js";import{b as k}from"./route-block.1e6a8648.js";const B={class:"flex q-mb-md"},N={class:"flex items-center"},O={class:"row items-center q-gutter-x-md q-mt-md justify-end"},V=Object.assign({name:"edit"},{__name:"PostDetails",setup(m){return(o,t)=>(a(),l(A,{class:"q-pa-lg"},{default:s(()=>[i("div",B,[e(n,{icon:"sym_o_arrow_back",flat:"",dense:"",color:"grey",size:"16px"}),e(g),e(n,{icon:"sym_o_favorite",flat:"",dense:"",color:"red",size:"16px"}),e(n,{icon:"sym_o_bookmark",flat:"",dense:"",color:"blue",size:"16px"})]),i("div",N,[e(f,null,{default:s(()=>t[0]||(t[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1}),t[3]||(t[3]=i("div",{class:"q-ml-md"},[i("div",null,"\uCF54\uB529\uB9E8"),i("div",{class:"text-grey-6"},"3\uC77C\uC804")],-1)),e(g),e(n,{icon:"more_horiz",round:"",flat:""},{default:s(()=>[e(z,null,{default:s(()=>[e(C,{style:{"min-width":"100px"}},{default:s(()=>[v((a(),l(_,{clickable:"",to:`/posts/${o.$route.params.id}/edit`},{default:s(()=>[e(u,null,{default:s(()=>t[1]||(t[1]=[b("\uC218\uC815\uD558\uAE30")])),_:1})]),_:1},8,["to"])),[[q]]),v((a(),l(_,{clickable:""},{default:s(()=>[e(u,null,{default:s(()=>t[2]||(t[2]=[b("\uC0AD\uC81C\uD558\uAE30")])),_:1})]),_:1})),[[q]])]),_:1})]),_:1})]),_:1})]),t[4]||(t[4]=i("div",{class:"q-mt-md text-h5 text-weight-bold"},"\uC81C\uBAA9\uC785\uB2C8\uB2E4.",-1)),i("div",O,[e(c,{name:"sym_o_visibility",label:"1",tooltip:"\uC870\uD68C\uC218"}),e(c,{name:"sym_o_sms",label:"2",tooltip:"\uB313\uAE00\uC218"}),e(c,{name:"sym_o_favorite",label:"3",tooltip:"\uC88B\uC544\uC694"}),e(c,{name:"sym_o_bookmark",label:"4",tooltip:"\uBD81\uB9C8\uD06C"})]),e(Q,{class:"q-my-lg"}),t[5]||(t[5]=i("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda debitis eaque est illo impedit, iure laudantium libero natus obcaecati odit perspiciatis quaerat quam quod rerum, similique suscipit tempore vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam amet animi, culpa cum deserunt expedita id inventore libero magni maiores nam nemo non, odio, quasi repellendus soluta temporibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur cumque delectus distinctio, explicabo fugit ipsa molestias nisi pariatur, quasi, quod rem rerum? Eaque illum necessitatibus non repudiandae sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda facilis fugiat fugit impedit incidunt non repudiandae vel! Aut blanditiis deserunt dolorem eum id ipsum nobis similique temporibus totam voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis dicta eligendi est illo labore maiores necessitatibus quos ut veritatis. Debitis eaque enim fugiat nesciunt, odio quas quia sapiente vero? ",-1))]),_:1}))}}),S=Object.assign({name:"CommentItem"},{__name:"CommentItem",setup(m){return(o,t)=>(a(),l(_,{class:"q-py-md"},{default:s(()=>[e(u,{side:"",top:""},{default:s(()=>[e(f,{size:"md"},{default:s(()=>t[0]||(t[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1})]),_:1}),e(u,null,{default:s(()=>t[1]||(t[1]=[i("div",{class:"flex text-caption"},[i("span",null,"\uCF54\uB529\uB9E8"),i("span",{class:"q-mx-xs"},"\xB7"),i("span",{class:"text-grey-6"},"3\uC77C\uC804")],-1),i("div",{class:"q-mt-sm"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur distinctio, doloremque fugiat id iste iusto minima nemo optio placeat porro quae reprehenderit sit temporibus ullam veniam vitae. Aliquid, distinctio. ",-1)])),_:1}),e(u,{side:"",top:""},{default:s(()=>[e(n,{flat:"",color:"grey",icon:"sym_o_delete",round:"",dense:""})]),_:1})]),_:1}))}}),D=Object.assign({name:"CommentList"},{__name:"CommentList",props:{items:{type:Array,default:()=>[]}},setup(m){return(o,t)=>(a(),l(C,{class:"q-mt-lg bg-white",bordered:"",separator:""},{default:s(()=>[(a(!0),p(L,null,$(m.items,d=>(a(),l(S,w({key:d.id,ref_for:!0},d),null,16))),128))]),_:1}))}}),E={key:0},M={class:"flex justify-end q-gutter-x-sm q-mt-sm"},T=Object.assign({name:"PostComments"},{__name:"PostComments",setup(m){const o=x(!1),t=()=>o.value=!o.value,d=x([{id:1},{id:2},{id:3},{id:4}]);return(F,r)=>(a(),p("div",null,[r[2]||(r[2]=i("div",{class:"text-subtitle1 text-weight-bold q-mb-lg"},"\uB313\uAE00 6",-1)),o.value?(a(),p("div",E,[e(j,{type:"textarea",class:"bg-white",outlined:""}),i("div",M,[e(n,{label:"\uCDE8\uC18C",color:"dark",unelevated:"",onClick:t}),e(n,{label:"\uB4F1\uB85D",color:"primary",unelevated:""})])])):y("",!0),o.value?y("",!0):(a(),l(A,{key:1,onClick:t,class:"cursor-pointer"},{default:s(()=>[e(I,{class:"flex items-center"},{default:s(()=>[e(f,null,{default:s(()=>r[0]||(r[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1}),r[1]||(r[1]=i("div",{class:"text-grey-6 q-ml-md"},"\uB313\uAE00\uC744 \uC791\uC131\uD574 \uBCF4\uC138\uC694",-1))]),_:1})]),_:1})),e(D,{items:d.value},null,8,["items"])]))}}),h=Object.assign({name:"edit"},{__name:"index",setup(m){return(o,t)=>(a(),l(P,{padding:""},{default:s(()=>[e(V),e(Q,{class:"q-my-xl"}),e(T)]),_:1}))}});typeof k=="function"&&k(h);export{h as default};
