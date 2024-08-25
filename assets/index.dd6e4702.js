import{Q as at}from"./QPage.146c4b34.js";import{c as ce,m as lt,a5 as nt,q as ot,a6 as it,a as b,F as st,h as g,Q as R,a7 as rt,a8 as oe,G as qe,k as xe,I as y,J as D,K as s,L as l,a9 as Ie,V as m,N as V,O as E,W as F,X as de,Y as fe,T as N,aa as Re,Z as ut,t as ct,v as _e,ab as Qe,x as k,D as De,B as dt,E as ie,a2 as ft,ac as vt,ad as mt,ae as bt,af as ht,ag as ge,r as Ae,A as le,ah as _t,ai as gt,aj as yt,ak as xt,b as Me,al as je,am as qt,an as Ct,ao as se,ap as re,aq as kt,ar as pt,as as wt,at as St,au as Tt,av as Lt,aw as $t}from"./index.eb181b41.js";import{Q as J,a as ue,b as Ce}from"./selection.6e0cb5b2.js";import{_ as ne}from"./PostIcon.02075735.js";const Pt={xs:8,sm:10,md:14,lg:20,xl:24};var Bt=ce({name:"QChip",props:{...lt,...nt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:v,emit:r}){const{proxy:{$q:o}}=qe(),n=ot(e,o),S=it(e,Pt),A=b(()=>e.selected===!0||e.icon!==void 0),K=b(()=>e.selected===!0?e.iconSelected||o.iconSet.chip.selected:e.icon),H=b(()=>e.iconRemove||o.iconSet.chip.remove),W=b(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),M=b(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(W.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(n.value===!0?" q-chip--dark q-dark":"")}),U=b(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},P={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||o.lang.label.remove};return{chip:d,remove:P}});function I(d){d.keyCode===13&&x(d)}function x(d){e.disable||(r("update:selected",!e.selected),r("click",d))}function p(d){(d.keyCode===void 0||d.keyCode===13)&&(xe(d),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function $(){const d=[];W.value===!0&&d.push(g("div",{class:"q-focus-helper"})),A.value===!0&&d.push(g(R,{class:"q-chip__icon q-chip__icon--left",name:K.value}));const P=e.label!==void 0?[g("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(g("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},rt(v.default,P))),e.iconRight&&d.push(g(R,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(g(R,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:H.value,...U.value.remove,onClick:p,onKeyup:p})),d}return()=>{if(e.modelValue===!1)return;const d={class:M.value,style:S.value};return W.value===!0&&Object.assign(d,U.value.chip,{onClick:x,onKeyup:I}),st("div",d,$(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[oe,e.ripple]])}}});const Rt=m("img",{alt:"",src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),At={class:"flex items-center"},It=m("span",null,"\uB2C9\uB124\uC784 \xA0\xB7\xA0 3\uC77C\uC804",-1),Qt={class:"text-h6 q-mt-sm"},Dt={class:"text-primary text-caption"},Mt={class:"text-grey-6 q-my-sm ellipsis-2-lines"},jt={class:"row items-center"},Ot={class:"col-3"},zt={class:"flex flex-center"},Vt={class:"col-3"},Wt={class:"flex flex-center"},Et={class:"col-3"},Nt={class:"flex flex-center"},Ft={class:"col-3"},Kt={class:"flex flex-center"},Ht=Object.assign({name:"PostItem"},{__name:"PostItem",props:{id:{type:String},title:{type:String},content:{type:String},readCount:{type:Number,default:0},commentCount:{type:Number,default:0},likeCount:{type:Number,default:0},bookmarkCount:{type:Number,default:0},category:{type:String},createTime:{type:Date},tags:{type:Array,default:()=>[]},uid:{type:String}},setup(e){return(v,r)=>(y(),D(ue,{to:`/posts/${e.id}`,class:"bg-white q-pt-md",clickable:""},{default:s(()=>[l(J,{avatar:"",top:""},{default:s(()=>[l(Ie,null,{default:s(()=>[Rt]),_:1})]),_:1}),l(J,null,{default:s(()=>[m("div",At,[It,l(Bt,{class:"q-ml-sm",clickable:"",color:"primary","text-color":"white"},{default:s(()=>[V(E(e.category),1)]),_:1})]),m("div",Qt,E(e.title),1),m("div",Dt,[(y(!0),F(de,null,fe(e.tags,o=>(y(),F("span",{key:o,class:"q-mr-sm"},"#"+E(o),1))),128))]),m("div",Mt,E(e.content),1),m("div",jt,[m("div",Ot,[m("div",zt,[l(ne,{name:"sym_o_visibility",label:e.readCount,tooltip:"\uC870\uD68C\uC218"},null,8,["label"])])]),m("div",Vt,[m("div",Wt,[l(ne,{name:"sym_o_sms",label:e.commentCount,tooltip:"\uB313\uAE00\uC218"},null,8,["label"])])]),m("div",Et,[m("div",Nt,[l(N,{class:"full-width",dense:"",flat:"",onClick:r[0]||(r[0]=Re(()=>{},["prevent"]))},{default:s(()=>[l(ne,{name:"sym_o_favorite",label:e.likeCount,tooltip:"\uC88B\uC544\uC694"},null,8,["label"])]),_:1})])]),m("div",Ft,[m("div",Kt,[l(N,{class:"full-width",dense:"",flat:"",onClick:r[1]||(r[1]=Re(()=>{},["prevent"]))},{default:s(()=>[l(ne,{name:"sym_o_bookmark",label:e.bookmarkCount,tooltip:"\uBD81\uB9C8\uD06C"},null,8,["label"])]),_:1})])])])]),_:1})]),_:1},8,["to"]))}}),Ut=Object.assign({name:"PostList"},{__name:"PostList",props:{items:Array,default:()=>[]},setup(e){return(v,r)=>(y(),D(Ce,{bordered:"",separator:""},{default:s(()=>[(y(!0),F(de,null,fe(e.items,o=>(y(),D(Ht,ut({key:o.id,ref_for:!0},o),null,16))),128))]),_:1}))}});let Gt=0;const Xt=["click","keydown"],Jt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Gt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Yt(e,v,r,o){const n=ct(Qe,_e);if(n===_e)return console.error("QTab/QRouteTab component needs to be child of QTabs"),_e;const{proxy:S}=qe(),A=k(null),K=k(null),H=k(null),W=b(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),M=b(()=>n.currentModel.value===e.name),U=b(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(M.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),I=b(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),x=b(()=>e.disable===!0||n.hasFocus.value===!0||M.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function p(u,w){if(w!==!0&&A.value!==null&&A.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&xe(u);return}if(o===void 0){n.updateModel({name:e.name}),r("click",u);return}if(o.hasRouterLink.value===!0){const T=(q={})=>{let L;const B=q.to===void 0||bt(q.to,e.to)===!0?n.avoidRouteWatcher=ht():null;return o.navigateToRouterLink(u,{...q,returnRouterError:!0}).catch(j=>{L=j}).then(j=>{if(B===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,L===void 0&&(j===void 0||j.message!==void 0&&j.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),q.returnRouterError===!0)return L!==void 0?Promise.reject(L):j})};r("click",u,T),u.defaultPrevented!==!0&&T();return}r("click",u)}function $(u){ft(u,[13,32])?p(u,!0):vt(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&n.onKbdNavigate(u.keyCode,S.$el)===!0&&xe(u),r("keydown",u)}function d(){const u=n.tabProps.value.narrowIndicator,w=[],T=g("div",{ref:H,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&w.push(g(R,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&w.push(g("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&w.push(e.alertIcon!==void 0?g(R,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):g("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&w.push(T);const q=[g("div",{class:"q-focus-helper",tabindex:-1,ref:A}),g("div",{class:I.value},mt(v.default,w))];return u===!1&&q.push(T),q}const P={name:b(()=>e.name),rootRef:K,tabIndicatorRef:H,routeData:o};De(()=>{n.unregisterTab(P)}),dt(()=>{n.registerTab(P)});function Y(u,w){const T={ref:K,class:U.value,tabindex:x.value,role:"tab","aria-selected":M.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:p,onKeydown:$,...w};return ie(g(u,T,d()),[[oe,W.value]])}return{renderTab:Y,$tabs:n}}var ye=ce({name:"QTab",props:Jt,emits:Xt,setup(e,{slots:v,emit:r}){const{renderTab:o}=Yt(e,v,r);return()=>o("div")}});let Oe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const v=document.createElement("div");Object.assign(v.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(v),e.scrollLeft=-1e3,Oe=e.scrollLeft>=0,e.remove()}function Zt(e,v,r){const o=r===!0?["left","right"]:["top","bottom"];return`absolute-${v===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const ea=["left","center","right","justify"];var ta=ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ea.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:v,emit:r}){const{proxy:o}=qe(),{$q:n}=o,{registerTick:S}=ge(),{registerTick:A}=ge(),{registerTick:K}=ge(),{registerTimeout:H,removeTimeout:W}=Ae(),{registerTimeout:M,removeTimeout:U}=Ae(),I=k(null),x=k(null),p=k(e.modelValue),$=k(!1),d=k(!0),P=k(!1),Y=k(!1),u=[],w=k(0),T=k(!1);let q=null,L=null,B;const j=b(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Zt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ve=b(()=>{const t=w.value,a=p.value;for(let i=0;i<t;i++)if(u[i].name.value===a)return!0;return!1}),We=b(()=>`q-tabs__content--align-${$.value===!0?"left":Y.value===!0?"justify":e.align}`),Ee=b(()=>`q-tabs row no-wrap items-center q-tabs--${$.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ne=b(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+We.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Z=b(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ee=b(()=>e.vertical!==!0&&n.lang.rtl===!0),ve=b(()=>Oe===!1&&ee.value===!0);le(ee,X),le(()=>e.modelValue,t=>{me({name:t,setCurrent:!0,skipEmit:!0})}),le(()=>e.outsideArrows,te);function me({name:t,setCurrent:a,skipEmit:i}){p.value!==t&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Fe(p.value,t),p.value=t))}function te(){S(()=>{ke({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ke(t){if(Z.value===void 0||x.value===null)return;const a=t[Z.value.container],i=Math.min(x.value[Z.value.scroll],Array.prototype.reduce.call(x.value.children,(_,f)=>_+(f[Z.value.content]||0),0)),h=a>0&&i>a;$.value=h,h===!0&&A(X),Y.value=a<parseInt(e.breakpoint,10)}function Fe(t,a){const i=t!=null&&t!==""?u.find(_=>_.name.value===t):null,h=a!=null&&a!==""?u.find(_=>_.name.value===a):null;if(i&&h){const _=i.tabIndicatorRef.value,f=h.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),_.style.transition="none",_.style.transform="none",f.style.transition="none",f.style.transform="none";const c=_.getBoundingClientRect(),C=f.getBoundingClientRect();f.style.transform=e.vertical===!0?`translate3d(0,${c.top-C.top}px,0) scale3d(1,${C.height?c.height/C.height:1},1)`:`translate3d(${c.left-C.left}px,0,0) scale3d(${C.width?c.width/C.width:1},1,1)`,K(()=>{q=setTimeout(()=>{q=null,f.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",f.style.transform="none"},70)})}h&&$.value===!0&&G(h.rootRef.value)}function G(t){const{left:a,width:i,top:h,height:_}=x.value.getBoundingClientRect(),f=t.getBoundingClientRect();let c=e.vertical===!0?f.top-h:f.left-a;if(c<0){x.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(c),X();return}c+=e.vertical===!0?f.height-_:f.width-i,c>0&&(x.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(c),X())}function X(){const t=x.value;if(t===null)return;const a=t.getBoundingClientRect(),i=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);ee.value===!0?(d.value=Math.ceil(i+a.width)<t.scrollWidth-1,P.value=i>0):(d.value=i>0,P.value=e.vertical===!0?Math.ceil(i+a.height)<t.scrollHeight:Math.ceil(i+a.width)<t.scrollWidth)}function pe(t){L!==null&&clearInterval(L),L=setInterval(()=>{Ue(t)===!0&&O()},5)}function we(){pe(ve.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){pe(ve.value===!0?0:Number.MAX_SAFE_INTEGER)}function O(){L!==null&&(clearInterval(L),L=null)}function Ke(t,a){const i=Array.prototype.filter.call(x.value.children,C=>C===a||C.matches&&C.matches(".q-tab.q-focusable")===!0),h=i.length;if(h===0)return;if(t===36)return G(i[0]),i[0].focus(),!0;if(t===35)return G(i[h-1]),i[h-1].focus(),!0;const _=t===(e.vertical===!0?38:37),f=t===(e.vertical===!0?40:39),c=_===!0?-1:f===!0?1:void 0;if(c!==void 0){const C=ee.value===!0?-1:1,Q=i.indexOf(a)+c*C;return Q>=0&&Q<h&&(G(i[Q]),i[Q].focus({preventScroll:!0})),!0}}const He=b(()=>ve.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ue(t){const a=x.value,{get:i,set:h}=He.value;let _=!1,f=i(a);const c=t<f?-1:1;return f+=c*5,f<0?(_=!0,f=0):(c===-1&&f<=t||c===1&&f>=t)&&(_=!0,f=t),h(a,f),X(),_}function Te(t,a){for(const i in t)if(t[i]!==a[i])return!1;return!0}function Ge(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const i=u.filter(c=>c.routeData!==void 0&&c.routeData.hasRouterLink.value===!0),{hash:h,query:_}=o.$route,f=Object.keys(_).length;for(const c of i){const C=c.routeData.exact.value===!0;if(c.routeData[C===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Q,query:be,matched:et,href:tt}=c.routeData.resolvedLink.value,he=Object.keys(be).length;if(C===!0){if(Q!==h||he!==f||Te(_,be)===!1)continue;t=c.name.value;break}if(Q!==""&&Q!==h||he!==0&&Te(be,_)===!1)continue;const z={matchedLen:et.length,queryDiff:f-he,hrefLen:tt.length-Q.length};if(z.matchedLen>a.matchedLen){t=c.name.value,a=z;continue}else if(z.matchedLen!==a.matchedLen)continue;if(z.queryDiff<a.queryDiff)t=c.name.value,a=z;else if(z.queryDiff!==a.queryDiff)continue;z.hrefLen>a.hrefLen&&(t=c.name.value,a=z)}t===null&&u.some(c=>c.routeData===void 0&&c.name.value===p.value)===!0||me({name:t,setCurrent:!0})}function Xe(t){if(W(),T.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(T.value=!0,$.value===!0&&G(a))}}function Je(){H(()=>{T.value=!1},30)}function ae(){$e.avoidRouteWatcher===!1?M(Ge):U()}function Le(){if(B===void 0){const t=le(()=>o.$route.fullPath,ae);B=()=>{t(),B=void 0}}}function Ye(t){u.push(t),w.value++,te(),t.routeData===void 0||o.$route===void 0?M(()=>{if($.value===!0){const a=p.value,i=a!=null&&a!==""?u.find(h=>h.name.value===a):null;i&&G(i.rootRef.value)}}):(Le(),t.routeData.hasRouterLink.value===!0&&ae())}function Ze(t){u.splice(u.indexOf(t),1),w.value--,te(),B!==void 0&&t.routeData!==void 0&&(u.every(a=>a.routeData===void 0)===!0&&B(),ae())}const $e={currentModel:p,tabProps:j,hasFocus:T,hasActiveTab:Ve,registerTab:Ye,unregisterTab:Ze,verifyRouteModel:ae,updateModel:me,onKbdNavigate:Ke,avoidRouteWatcher:!1};_t(Qe,$e);function Pe(){q!==null&&clearTimeout(q),O(),B!==void 0&&B()}let Be;return De(Pe),gt(()=>{Be=B!==void 0,Pe()}),yt(()=>{Be===!0&&Le(),te()}),()=>g("div",{ref:I,class:Ee.value,role:"tablist",onFocusin:Xe,onFocusout:Je},[g(xt,{onResize:ke}),g("div",{ref:x,class:Ne.value,onScroll:X},Me(v.default)),g(R,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(d.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O}),g(R,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(P.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:O,onMouseleavePassive:O,onTouchendPassive:O})])}});const aa={class:"flex items-center q-mb-lg"},la=m("div",{class:"text-h5"},"\uCEE4\uBBA4\uB2C8\uD2F0 \uBAA9\uB85D",-1),na=Object.assign({name:"PostHeader"},{__name:"PostHeader",setup(e){return(v,r)=>(y(),F("div",aa,[la,l(je),l(ta,{"narrow-indicator":"",dense:""},{default:s(()=>[l(ye,{ripple:!1,label:"\uCD5C\uC2E0\uC21C",name:"createTime"}),l(ye,{ripple:!1,label:"\uC870\uD68C\uC21C",name:"readCount"}),l(ye,{ripple:!1,label:"\uC88B\uC544\uC694\uC21C",name:"likeCount"})]),_:1})]))}});const oa={class:"sticky-side-bar"},ia=Object.assign({name:"StickySideBar"},{__name:"StickySideBar",setup(e){return(v,r)=>(y(),F("aside",oa,[qt(v.$slots,"default",{},void 0,!0)]))}});var ze=Ct(ia,[["__scopeId","data-v-486afdd0"]]);const sa=Object.assign({name:"PostLeftBar"},{__name:"PostLeftBar",setup(e){const v=[{label:"Q&A",value:"qna"},{label:"\uCEE4\uBBA4\uB2C8\uD2F0",value:"community"},{label:"\uACF5\uC9C0\uC0AC\uD56D",value:"notice"},{label:"\uAC15\uC758",value:"lecture"}];return(r,o)=>(y(),D(ze,null,{default:s(()=>[l(se,{flat:"",bordered:""},{default:s(()=>[l(Ce,{bordered:"",separator:""},{default:s(()=>[ie((y(),D(ue,{clickable:"",active:!0},{default:s(()=>[l(J,null,{default:s(()=>[V("\uC804\uCCB4")]),_:1})]),_:1})),[[oe]]),(y(),F(de,null,fe(v,n=>ie(l(ue,{key:n.value,clickable:""},{default:s(()=>[l(J,null,{default:s(()=>[V(E(n.label),1)]),_:2},1024)]),_:2},1024),[[oe]])),64))]),_:1})]),_:1})]),_:1}))}}),ra=m("span",{class:"text-weight-bold"},"\uC0C8 \uD3EC\uC2A4\uD2B8 \uC791\uC131\uD558\uAE30",-1),ua=m("div",{class:"text-weight-bold"},"\uD0DC\uADF8",-1),ca={class:"q-gutter-sm q-pb-sm"},da={__name:"PostRightBar",emits:["openWriteDiaLog"],setup(e){const v=k([{name:"vuejs",count:10},{name:"react",count:11},{name:"angular",count:12},{name:"html",count:13},{name:"css",count:14}]);return(r,o)=>(y(),D(ze,null,{default:s(()=>[l(N,{padding:"8px 12px 8px 8px",unelevated:"",color:"primary","text-color":"white",class:"full-width",onClick:o[0]||(o[0]=n=>r.$emit("openWriteDiaLog"))},{default:s(()=>[l(Ie,{class:"q-mr-sm",color:"white","text-color":"primary",size:"22px"},{default:s(()=>[l(R,{name:"edit",size:"14px"})]),_:1}),ra]),_:1}),l(se,{class:"q-mt-mg bg-grey-1",bordered:"",flat:""},{default:s(()=>[l(re,{class:"flex items-center q-pb-none"},{default:s(()=>[ua,l(je),l(N,{icon:"refresh",dense:"",size:"sm",flat:"",round:"",color:"grey"})]),_:1}),l(re,{class:"q-pb-sm"},{default:s(()=>[l(se,{class:"q-px-sm",bordered:"",flat:"",square:""},{default:s(()=>[l(kt,{borderless:"",dense:"","input-style":"front-size: 12px;",placeholder:"\uD0DC\uADF8\uB85C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694"}),m("div",ca,[l(N,{size:"10px",padding:"2px 4px 2px 7px",color:"grey-3","text-color":"dark",unelevated:""},{default:s(()=>[V(" vue.js "),l(R,{name:"clear",size:"12px",color:"grey"})]),_:1}),l(N,{size:"10px",padding:"2px 4px 2px 7px",color:"grey-3","text-color":"dark",unelevated:""},{default:s(()=>[V(" react "),l(R,{name:"clear",size:"12px",color:"grey"})]),_:1})])]),_:1})]),_:1}),l(Ce,{padding:""},{default:s(()=>[(y(!0),F(de,null,fe(v.value,n=>(y(),D(ue,{key:n.name,clickable:"",dense:""},{default:s(()=>[l(J,{class:"text-teal text-caption"},{default:s(()=>[V(" #"+E(n.name),1)]),_:2},1024),l(J,{side:"",class:"text-teal text-caption"},{default:s(()=>[V(E(n.count),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}};var fa=ce({name:"QCardActions",props:{...pt,vertical:Boolean},setup(e,{slots:v}){const r=wt(e),o=b(()=>`q-card__actions ${r.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>g("div",{class:o.value},Me(v.default))}});const va=m("div",{class:"text-h6"},"Alert",-1),ma=Object.assign({name:"PostWriteDialog"},{__name:"PostWriteDialog",setup(e){return(v,r)=>(y(),D(Tt,null,{default:s(()=>[l(se,null,{default:s(()=>[l(re,null,{default:s(()=>[va]),_:1}),l(re,{class:"q-pt-none"},{default:s(()=>[V(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. ")]),_:1}),l(fa,{align:"right"},{default:s(()=>[ie(l(N,{flat:"",label:"OK",color:"primary"},null,512),[[St]])]),_:1})]),_:1})]),_:1}))}}),ba={class:"row q-col-gutter-x-lg"},ha={class:"col-7"},qa=Object.assign({name:"b589b23a86fd460fb0f1e0924d01ffa4"},{__name:"index",setup(e){Lt();const v=Array.from(Array(40),(n,S)=>({id:"A"+S,title:"\uCEE4\uBBA4\uB2C8\uD2F0 \uBAA9\uB85D \uC785\uB2C8\uB2E4. "+S,content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, praesentium reprehenderit! Ipsam laborum mollitia natus tenetur voluptatem? Ducimus eius illum iure natus neque perferendis, qui sed tenetur voluptatem voluptatibus. Adipisci!",readCount:1,commentCount:2,likeCount:3,bookmarkCount:4,tags:["html","css","javascript"],uid:"uid",category:"\uCE74\uD14C\uACE0\uB9AC"+S})),r=k(!1),o=()=>{console.log("aaaaaaaaa"),r.value=!0};return(n,S)=>(y(),D(at,{padding:""},{default:s(()=>[m("div",ba,[l(sa,{class:"col-grow"}),m("section",ha,[l(na),l(Ut,{items:$t(v)},null,8,["items"])]),l(da,{class:"col-3",onOpenWriteDiaLog:o})]),l(ma,{modelValue:r.value,"onUpdate:modelValue":S[0]||(S[0]=A=>r.value=A)},null,8,["modelValue"])]),_:1}))}});export{qa as default};
