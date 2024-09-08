import{t as O,a2 as Qe,d as he,A as Ke,b as X,y as H,z as Ve,B as j,G as de,f as ue,aP as re,aQ as me,a as Ie,aR as _e,h as we,u as Se,aS as _,aT as Ee,j as ke,v as E,ag as Ce,m as He,aU as Pe,w as We,aV as Me,aW as qe,D as Y,aX as Be,F as Le,g as Oe,I as ie,W as ve,L as Xe,Z as Ye,Q as Ue,O as ge,M as ye,J as Ze,K as Ge,N as Je,X as et,i as tt,k as nt,aY as ot,e as lt,aZ as it,a_ as xe,a$ as at,aN as ut,b0 as rt,b1 as st}from"./index.fe2c1d11.js";import{c as se}from"./selection.cfd77823.js";const Ae={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},ct={...Ae,contextMenu:Boolean};function ze({showing:e,avoidEmit:n,configureAnchorEl:o}){const{props:t,proxy:l,emit:c}=de(),i=O(null);let r=null;function f(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Qe(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),he(a),Ke(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:he,mobileTouch(a){if(s.mobileCleanup(a),f(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const d=a.target;X(s,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&se()}}),o=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let d;a===!0?l.$q.platform.is.mobile===!0?d=[[i.value,"touchstart","mobileTouch","passive"]]:d=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:d=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],X(s,"anchor",d)});function m(){ue(s,"anchor")}function x(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function b(){if(t.target===!1||t.target===""||l.$el.parentNode===null)i.value=null;else if(t.target===!0)x(l.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return H(()=>t.contextMenu,a=>{i.value!==null&&(m(),o(a))}),H(()=>t.target,()=>{i.value!==null&&m(),b()}),H(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?m():o())}),Ve(()=>{b(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),j(()=>{r!==null&&clearTimeout(r),m()}),{anchorEl:i,canShow:f,anchorEvents:s}}function De(e,n){const o=O(null);let t;function l(r,f){const s=`${f!==void 0?"add":"remove"}EventListener`,m=f!==void 0?f:t;r!==window&&r[s]("scroll",m,re.passive),window[s]("scroll",m,re.passive),t=f}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),n())});return j(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:U}=re,M=[];function Z(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let o=me.length-1;for(;o>=0;){const t=me[o].$;if(t.type.name==="QTooltip"){o--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;o--}for(let t=M.length-1;t>=0;t--){const l=M[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function $e(e){M.push(e),M.length===1&&(document.addEventListener("mousedown",Z,U),document.addEventListener("touchstart",Z,U))}function G(e){const n=M.findIndex(o=>o===e);n!==-1&&(M.splice(n,1),M.length===0&&(document.removeEventListener("mousedown",Z,U),document.removeEventListener("touchstart",Z,U)))}let be,pe;function J(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Fe(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ce={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ce[`${e}#ltr`]=e,ce[`${e}#rtl`]=e});function ee(e,n){const o=e.split(" ");return{vertical:o[0],horizontal:ce[`${o[1]}#${n===!0?"rtl":"ltr"}`]}}function dt(e,n){let{top:o,left:t,right:l,bottom:c,width:i,height:r}=e.getBoundingClientRect();return n!==void 0&&(o-=n[1],t-=n[0],c+=n[1],l+=n[0],i+=n[0],r+=n[1]),{top:o,bottom:c,height:r,left:t,right:l,width:i,middle:t+(l-t)/2,center:o+(c-o)/2}}function ft(e,n,o){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,o!==void 0&&(t+=o[1],l+=o[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function ht(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function Te(e,n,o,t){return{top:e[o.vertical]-n[t.vertical],left:e[o.horizontal]-n[t.horizontal]}}function fe(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{fe(e,n+1)},10);return}const{targetEl:o,offset:t,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:r,fit:f,cover:s,maxHeight:m,maxWidth:x}=e;if(Ie.is.ios===!0&&window.visualViewport!==void 0){const C=document.body.style,{offsetLeft:v,offsetTop:T}=window.visualViewport;v!==be&&(C.setProperty("--q-pe-left",v+"px"),be=v),T!==pe&&(C.setProperty("--q-pe-top",T+"px"),pe=T)}const{scrollLeft:b,scrollTop:a}=o,d=r===void 0?dt(l,s===!0?[0,0]:t):ft(l,r,t);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:x||"100vw",maxHeight:m||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:P}=o,{elWidth:q,elHeight:B}=f===!0||s===!0?{elWidth:Math.max(d.width,k),elHeight:s===!0?Math.max(d.height,P):P}:{elWidth:k,elHeight:P};let y={maxWidth:x,maxHeight:m};(f===!0||s===!0)&&(y.minWidth=d.width+"px",s===!0&&(y.minHeight=d.height+"px")),Object.assign(o.style,y);const w=ht(q,B);let h=Te(d,w,c,i);if(r===void 0||t===void 0)ae(h,d,w,c,i);else{const{top:C,left:v}=h;ae(h,d,w,c,i);let T=!1;if(h.top!==C){T=!0;const p=2*t[1];d.center=d.top-=p,d.bottom-=p+2}if(h.left!==v){T=!0;const p=2*t[0];d.middle=d.left-=p,d.right-=p+2}T===!0&&(h=Te(d,w,c,i),ae(h,d,w,c,i))}y={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(y.maxHeight=h.maxHeight+"px",d.height>h.maxHeight&&(y.minHeight=y.maxHeight)),h.maxWidth!==void 0&&(y.maxWidth=h.maxWidth+"px",d.width>h.maxWidth&&(y.minWidth=y.maxWidth)),Object.assign(o.style,y),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==b&&(o.scrollLeft=b)}function ae(e,n,o,t,l){const c=o.bottom,i=o.right,r=_e(),f=window.innerHeight-r,s=document.body.clientWidth;if(e.top<0||e.top+c>f)if(l.vertical==="center")e.top=n[t.vertical]>f/2?Math.max(0,f-c):0,e.maxHeight=Math.min(c,f);else if(n[t.vertical]>f/2){const m=Math.min(f,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,m),e.top=Math.max(0,m-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,f-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),l.horizontal==="middle")e.left=n[t.horizontal]>s/2?Math.max(0,s-i):0;else if(n[t.horizontal]>s/2){const m=Math.min(s,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(i,m),e.left=Math.max(0,m-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(i,s-e.left)}var mt=we({name:"QTooltip",inheritAttrs:!1,props:{...Ae,...Se,..._,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{..._.transitionShow,default:"jump-down"},transitionHide:{..._.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:J},self:{type:String,default:"top middle",validator:J},offset:{type:Array,default:()=>[14,14],validator:Fe},scrollTarget:Ee,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ke],setup(e,{slots:n,emit:o,attrs:t}){let l,c;const i=de(),{proxy:{$q:r}}=i,f=O(null),s=O(!1),m=E(()=>ee(e.anchor,r.lang.rtl)),x=E(()=>ee(e.self,r.lang.rtl)),b=E(()=>e.persistent!==!0),{registerTick:a,removeTick:d}=Ce(),{registerTimeout:k}=He(),{transitionProps:P,transitionStyle:q}=Pe(e),{localScrollTarget:B,changeScrollEvent:y,unconfigureScrollTarget:w}=De(e,V),{anchorEl:h,canShow:C,anchorEvents:v}=ze({showing:s,configureAnchorEl:$}),{show:T,hide:p}=We({showing:s,canShow:C,handleShow:D,handleHide:N,hideOnRouteChange:b,processOnMount:!0});Object.assign(v,{delayShow:ne,delayHide:K});const{showPortal:A,hidePortal:z,renderPortal:te}=Me(i,f,I,"tooltip");if(r.platform.is.mobile===!0){const g={anchorEl:h,innerRef:f,onClickOutside(S){return p(S),S.target.classList.contains("q-dialog__backdrop")&&Oe(S),!0}},F=E(()=>e.modelValue===null&&e.persistent!==!0&&s.value===!0);H(F,S=>{(S===!0?$e:G)(g)}),j(()=>{G(g)})}function D(g){A(),a(()=>{c=new MutationObserver(()=>W()),c.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),W(),V()}),l===void 0&&(l=H(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,W)),k(()=>{A(!0),o("show",g)},e.transitionDuration)}function N(g){d(),z(),Q(),k(()=>{z(!0),o("hide",g)},e.transitionDuration)}function Q(){c!==void 0&&(c.disconnect(),c=void 0),l!==void 0&&(l(),l=void 0),w(),ue(v,"tooltipTemp")}function W(){fe({targetEl:f.value,offset:e.offset,anchorEl:h.value,anchorOrigin:m.value,selfOrigin:x.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ne(g){if(r.platform.is.mobile===!0){se(),document.body.classList.add("non-selectable");const F=h.value,S=["touchmove","touchcancel","touchend","click"].map(L=>[F,L,"delayHide","passiveCapture"]);X(v,"tooltipTemp",S)}k(()=>{T(g)},e.delay)}function K(g){r.platform.is.mobile===!0&&(ue(v,"tooltipTemp"),se(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),k(()=>{p(g)},e.hideDelay)}function $(){if(e.noParentEvent===!0||h.value===null)return;const g=r.platform.is.mobile===!0?[[h.value,"touchstart","delayShow","passive"]]:[[h.value,"mouseenter","delayShow","passive"],[h.value,"mouseleave","delayHide","passive"]];X(v,"anchor",g)}function V(){if(h.value!==null||e.scrollTarget!==void 0){B.value=qe(h.value,e.scrollTarget);const g=e.noParentEvent===!0?W:p;y(B.value,g)}}function oe(){return s.value===!0?Y("div",{...t,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,q.value],role:"tooltip"},Le(n.default)):null}function I(){return Y(Be,P.value,oe)}return j(Q),Object.assign(i.proxy,{updatePosition:W}),te}});const vt={key:0,class:"text-grey q-ml-xs text-body2"},xt=Object.assign({name:"PostIcon"},{__name:"PostIcon",props:{name:{type:String,required:!0},label:{type:[String,Number]},tooltip:{type:String}},setup(e){return(n,o)=>(ie(),ve(et,null,[Xe(Ue,Ye({color:"grey",name:e.name,size:"xs"},n.$attrs),null,16,["name"]),e.label?(ie(),ve("span",vt,ge(e.label),1)):ye("",!0),e.tooltip?(ie(),Ze(mt,{key:1,offset:[0,4]},{default:Ge(()=>[Je(ge(e.tooltip),1)]),_:1})):ye("",!0)],64))}});var bt=we({name:"QMenu",inheritAttrs:!1,props:{...ct,...Se,...tt,..._,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:J},self:{type:String,validator:J},offset:{type:Array,validator:Fe},scrollTarget:Ee,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ke,"click","escapeKey"],setup(e,{slots:n,emit:o,attrs:t}){let l=null,c,i,r;const f=de(),{proxy:s}=f,{$q:m}=s,x=O(null),b=O(!1),a=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),d=nt(e,m),{registerTick:k,removeTick:P}=Ce(),{registerTimeout:q}=He(),{transitionProps:B,transitionStyle:y}=Pe(e),{localScrollTarget:w,changeScrollEvent:h,unconfigureScrollTarget:C}=De(e,g),{anchorEl:v,canShow:T}=ze({showing:b}),{hide:p}=We({showing:b,canShow:T,handleShow:V,handleHide:oe,hideOnRouteChange:a,processOnMount:!0}),{showPortal:A,hidePortal:z,renderPortal:te}=Me(f,x,Re,"menu"),D={anchorEl:v,innerRef:x,onClickOutside(u){if(e.persistent!==!0&&b.value===!0)return p(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Oe(u),!0}},N=E(()=>ee(e.anchor||(e.cover===!0?"center middle":"bottom start"),m.lang.rtl)),Q=E(()=>e.cover===!0?N.value:ee(e.self||"top start",m.lang.rtl)),W=E(()=>(e.square===!0?" q-menu--square":"")+(d.value===!0?" q-menu--dark q-dark":"")),ne=E(()=>e.autoClose===!0?{onClick:F}:{}),K=E(()=>b.value===!0&&e.persistent!==!0);H(K,u=>{u===!0?(at(L),$e(D)):(xe(L),G(D))});function $(){ut(()=>{let u=x.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function V(u){if(l=e.noRefocus===!1?document.activeElement:null,ot(S),A(),g(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const le=lt(u);if(le.left!==void 0){const{top:je,left:Ne}=v.value.getBoundingClientRect();c={left:le.left-Ne,top:le.top-je}}}i===void 0&&(i=H(()=>m.screen.width+"|"+m.screen.height+"|"+e.self+"|"+e.anchor+"|"+m.lang.rtl,R)),e.noFocus!==!0&&document.activeElement.blur(),k(()=>{R(),e.noFocus!==!0&&$()}),q(()=>{m.platform.is.ios===!0&&(r=e.autoClose,x.value.click()),R(),A(!0),o("show",u)},e.transitionDuration)}function oe(u){P(),z(),I(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),q(()=>{z(!0),o("hide",u)},e.transitionDuration)}function I(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||b.value===!0)&&(it(S),C(),G(D),xe(L)),u!==!0&&(l=null)}function g(){(v.value!==null||e.scrollTarget!==void 0)&&(w.value=qe(v.value,e.scrollTarget),h(w.value,R))}function F(u){r!==!0?(rt(s,u),o("click",u)):r=!1}function S(u){K.value===!0&&e.noFocus!==!0&&st(x.value,u.target)!==!0&&$()}function L(u){o("escapeKey"),p(u)}function R(){fe({targetEl:x.value,offset:e.offset,anchorEl:v.value,anchorOrigin:N.value,selfOrigin:Q.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Re(){return Y(Be,B.value,()=>b.value===!0?Y("div",{role:"menu",...t,ref:x,tabindex:-1,class:["q-menu q-position-engine scroll"+W.value,t.class],style:[t.style,y.value],...ne.value},Le(n.default)):null)}return j(I),Object.assign(s,{focus:$,updatePosition:R}),te}});export{bt as Q,xt as _};
