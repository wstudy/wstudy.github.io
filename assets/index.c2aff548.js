import{J as a,K as l,L as s,Y as i,M as e,W as n,ag as g,al as f,aF as L,Z as Q,D as v,S as p,Q as u,P as b,ao as q,ap as A,_,$,a0 as w,a1 as j,v as x,an as P,O as y,am as O}from"./index.765dd65f.js";import{Q as z}from"./QPage.89421bd5.js";import{_ as c}from"./PostIcon.5a3e274f.js";import{_ as C}from"./BaseCard.928f21f0.js";import{b as k}from"./route-block.1e6a8648.js";const B={class:"flex q-mb-md"},I={class:"flex items-center"},S={class:"row items-center q-gutter-x-md q-mt-md justify-end"},D=Object.assign({name:"edit"},{__name:"PostDetails",setup(m){return(o,t)=>(a(),l(C,{class:"q-pa-lg"},{default:s(()=>[i("div",B,[e(n,{icon:"sym_o_arrow_back",flat:"",dense:"",color:"grey",size:"16px"}),e(g),e(n,{icon:"sym_o_favorite",flat:"",dense:"",color:"red",size:"16px"}),e(n,{icon:"sym_o_bookmark",flat:"",dense:"",color:"blue",size:"16px"})]),i("div",I,[e(f,null,{default:s(()=>t[0]||(t[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1}),t[3]||(t[3]=i("div",{class:"q-ml-md"},[i("div",null,"\uCF54\uB529\uB9E8"),i("div",{class:"text-grey-6"},"3\uC77C\uC804")],-1)),e(g),e(n,{icon:"more_horiz",round:"",flat:""},{default:s(()=>[e(L,null,{default:s(()=>[e(Q,{style:{"min-width":"100px"}},{default:s(()=>[v((a(),l(p,{clickable:"",to:`/posts/${o.$route.params.id}/edit`},{default:s(()=>[e(u,null,{default:s(()=>t[1]||(t[1]=[b("\uC218\uC815\uD558\uAE30")])),_:1})]),_:1},8,["to"])),[[q]]),v((a(),l(p,{clickable:""},{default:s(()=>[e(u,null,{default:s(()=>t[2]||(t[2]=[b("\uC0AD\uC81C\uD558\uAE30")])),_:1})]),_:1})),[[q]])]),_:1})]),_:1})]),_:1})]),t[4]||(t[4]=i("div",{class:"q-mt-md text-h5 text-weight-bold"},"\uC81C\uBAA9\uC785\uB2C8\uB2E4.",-1)),i("div",S,[e(c,{name:"sym_o_visibility",label:"1",tooltip:"\uC870\uD68C\uC218"}),e(c,{name:"sym_o_sms",label:"2",tooltip:"\uB313\uAE00\uC218"}),e(c,{name:"sym_o_favorite",label:"3",tooltip:"\uC88B\uC544\uC694"}),e(c,{name:"sym_o_bookmark",label:"4",tooltip:"\uBD81\uB9C8\uD06C"})]),e(A,{class:"q-my-lg"}),t[5]||(t[5]=i("div",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda debitis eaque est illo impedit, iure laudantium libero natus obcaecati odit perspiciatis quaerat quam quod rerum, similique suscipit tempore vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam amet animi, culpa cum deserunt expedita id inventore libero magni maiores nam nemo non, odio, quasi repellendus soluta temporibus voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur consequuntur cumque delectus distinctio, explicabo fugit ipsa molestias nisi pariatur, quasi, quod rem rerum? Eaque illum necessitatibus non repudiandae sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda facilis fugiat fugit impedit incidunt non repudiandae vel! Aut blanditiis deserunt dolorem eum id ipsum nobis similique temporibus totam voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis dicta eligendi est illo labore maiores necessitatibus quos ut veritatis. Debitis eaque enim fugiat nesciunt, odio quas quia sapiente vero? ",-1))]),_:1}))}}),N=Object.assign({name:"CommentItem"},{__name:"CommentItem",setup(m){return(o,t)=>(a(),l(p,{class:"q-py-md"},{default:s(()=>[e(u,{side:"",top:""},{default:s(()=>[e(f,{size:"md"},{default:s(()=>t[0]||(t[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1})]),_:1}),e(u,null,{default:s(()=>t[1]||(t[1]=[i("div",{class:"flex text-caption"},[i("span",null,"\uCF54\uB529\uB9E8"),i("span",{class:"q-mx-xs"},"\xB7"),i("span",{class:"text-grey-6"},"3\uC77C\uC804")],-1),i("div",{class:"q-mt-sm"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur distinctio, doloremque fugiat id iste iusto minima nemo optio placeat porro quae reprehenderit sit temporibus ullam veniam vitae. Aliquid, distinctio. ",-1)])),_:1}),e(u,{side:"",top:""},{default:s(()=>[e(n,{flat:"",color:"grey",icon:"sym_o_delete",round:"",dense:""})]),_:1})]),_:1}))}}),V=Object.assign({name:"CommentList"},{__name:"CommentList",props:{items:{type:Array,default:()=>[]}},setup(m){return(o,t)=>(a(),l(Q,{class:"q-mt-lg bg-white",bordered:"",separator:""},{default:s(()=>[(a(!0),_($,null,w(m.items,d=>(a(),l(N,j({key:d.id,ref_for:!0},d),null,16))),128))]),_:1}))}}),E={key:0},F={class:"flex justify-end q-gutter-x-sm q-mt-sm"},M=Object.assign({name:"PostComments"},{__name:"PostComments",setup(m){const o=x(!1),t=()=>o.value=!o.value,d=x([{id:1},{id:2},{id:3},{id:4}]);return(J,r)=>(a(),_("div",null,[r[2]||(r[2]=i("div",{class:"text-subtitle1 text-weight-bold q-mb-lg"},"\uB313\uAE00 6",-1)),o.value?(a(),_("div",E,[e(P,{type:"textarea",class:"bg-white",outlined:""}),i("div",F,[e(n,{label:"\uCDE8\uC18C",color:"dark",unelevated:"",onClick:t}),e(n,{label:"\uB4F1\uB85D",color:"primary",unelevated:""})])])):y("",!0),o.value?y("",!0):(a(),l(C,{key:1,onClick:t,class:"cursor-pointer"},{default:s(()=>[e(O,{class:"flex items-center"},{default:s(()=>[e(f,null,{default:s(()=>r[0]||(r[0]=[i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1)])),_:1}),r[1]||(r[1]=i("div",{class:"text-grey-6 q-ml-md"},"\uB313\uAE00\uC744 \uC791\uC131\uD574 \uBCF4\uC138\uC694",-1))]),_:1})]),_:1})),e(V,{items:d.value},null,8,["items"])]))}}),h=Object.assign({name:"edit"},{__name:"index",setup(m){return(o,t)=>(a(),l(z,{padding:""},{default:s(()=>[e(D),e(A,{class:"q-my-xl"}),e(M)]),_:1}))}});typeof k=="function"&&k(h);export{h as default};
