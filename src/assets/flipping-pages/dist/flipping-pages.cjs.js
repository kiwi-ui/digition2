"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var t=require("react"),te=require("react-merge-refs"),ne=require("use-resize-observer"),re=require("classnames");function D(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var oe=D(t),q=D(te),ce=D(ne),E=D(re);const U=e=>{let r=e%1;return r>=.5&&(r-=1),r},ie="_container_1v3jh_1";var ae={container:ie},T={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=oe.default,le=Symbol.for("react.element"),ue=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,de=se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,me={key:!0,ref:!0,__self:!0,__source:!0};function W(e,r,s){var o,n={},c=null,u=null;s!==void 0&&(c=""+s),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(u=r.ref);for(o in r)fe.call(r,o)&&!me.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:le,type:e,key:c,ref:u,props:n,_owner:de.current}}N.Fragment=ue;N.jsx=W;N.jsxs=W;T.exports=N;const h=T.exports.jsx,$=T.exports.jsxs,ge=T.exports.Fragment,he="rgb(0, 0, 0, 0.25)",pe=(e=he)=>{const r=s=>{const{selected:o,willChange:n}=s,c=U(o);return h("div",{className:ae.container,style:{background:e,opacity:Math.abs(c)*2,willChange:n?"opacity":void 0}})};return t.memo(r)},Pe=(e,r)=>{switch(e){case"bottom-to-top":return`rotateX(${r*180}deg)`;case"top-to-bottom":return`rotateX(${r*-180}deg)`;case"left-to-right":return`rotateY(${r*180}deg)`;case"right-to-left":return`rotateY(${r*-180}deg)`}},_e="_container_1veud_1",we="_fullPage_1veud_7",Se="_prevPage_1veud_8",be="_nextPage_1veud_9",ve="_shadow_1veud_97";var g={container:_e,fullPage:we,prevPage:Se,nextPage:be,"bottom-to-top":"_bottom-to-top_1veud_13","top-to-bottom":"_top-to-bottom_1veud_13","left-to-right":"_left-to-right_1veud_17","right-to-left":"_right-to-left_1veud_17",shadow:ve};const Ce=e=>{const{containerProps:r,containerRef:s,direction:o,selected:n,shadowBackground:c}=e,u=t.Children.toArray(e.children),f=t.useMemo(()=>e.shadowComponent?e.shadowComponent:pe(c),[c,e.shadowComponent]),a=U(n),i=!!e.willChange;return $("div",{...r,ref:s,className:E.default(g.container,r?.className),children:[h("div",{className:E.default({[g.fullPage]:a===0,[g.prevPage]:a>0,[g.nextPage]:a<0},g[o]),children:h("div",{children:u[Math.round(n)]})}),a!==0&&$(ge,{children:[h("div",{className:E.default(a>0?g.nextPage:g.prevPage,g[o]),children:h("div",{children:u[a>0?Math.ceil(n):Math.floor(n)]})}),$("div",{className:E.default(a>0?g.nextPage:g.prevPage,g[o]),style:{transform:Pe(o,a),willChange:i?"transform":void 0},children:[h("div",{children:u[Math.round(n)]}),h("div",{className:g.shadow,children:h(f,{selected:n,willChange:i})})]})]})]})},Re=t.memo(Ce),Me=2,ke=e=>{const{direction:r,perspectiveMultiplier:s=Me}=e,{ref:o,height:n,width:c}=ce.default(),u=t.useMemo(()=>{const i=[o];return e.containerRef&&i.push(e.containerRef),q.default(i)},[o,e.containerRef]),f=t.useMemo(()=>{switch(r){case"bottom-to-top":case"top-to-bottom":return n?n*s:void 0;case"left-to-right":case"right-to-left":return c?c*s:void 0}},[r,s,n,c]),a=t.useMemo(()=>({...e.containerProps,style:{perspective:f,...e.containerProps?.style}}),[e.containerProps,f]);return h(Re,{...e,containerProps:a,containerRef:u})},Ae=t.memo(ke),ye=e=>{const{callback:r,onEnd:s,onStart:o}=e,n=t.useRef(),c=t.useRef(),u=t.useCallback(i=>{if(!c.current){c.current=i,n.current=requestAnimationFrame(u);return}const d=i-c.current;r(d)?(n.current=void 0,s()):n.current=requestAnimationFrame(u)},[r,s]),f=t.useCallback(()=>{n.current?cancelAnimationFrame(n.current):o(),c.current=void 0,n.current=requestAnimationFrame(u)},[o,u]),a=t.useCallback(()=>{n.current&&(cancelAnimationFrame(n.current),n.current=void 0,s())},[s]);return t.useEffect(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[]),{start:f,stop:a}},xe=400,Fe=e=>{const{animationDuration:r=xe,onAnimationEnd:s,onAnimationStart:o,onAnimationTurn:n}=e,[c,u]=t.useState(!1),f=t.useMemo(()=>typeof e.willChange=="boolean"?e.willChange:c?!0:void 0,[e.willChange,c]),a=t.useRef(0),[i,d]=t.useState(e.selected),S=t.useCallback(()=>{u(!0),o?.()},[o]),p=t.useCallback(()=>{u(!1),s?.()},[s]),b=t.useCallback(C=>{const P=e.selected-a.current,k=Math.sign(P)*C/r;if(Math.abs(k)>=Math.abs(P))return d(e.selected),!0;const A=a.current+k;return d(A),n?.(A),!1},[r,n,e.selected]),{start:v,stop:_}=ye({callback:b,onEnd:p,onStart:S});return t.useEffect(()=>{if(i===e.selected){_();return}if(!r){_(),d(e.selected);return}a.current=i,v()},[r,e.selected]),h(Ae,{...e,selected:i,willChange:f})},Ye=t.memo(Fe),O=(...e)=>t.useCallback(r=>{for(const s of e)s?.(r)},e),Xe=(...e)=>{const r=O(...e.map(c=>c?.onPointerCancel)),s=O(...e.map(c=>c?.onPointerDown)),o=O(...e.map(c=>c?.onPointerMove)),n=O(...e.map(c=>c?.onPointerUp));return{onPointerCancel:r,onPointerDown:s,onPointerMove:o,onPointerUp:n}},Ee=e=>{const{onDown:r,onMove:s,onUp:o}=e,[n,c]=t.useState(),u=n!==void 0,f=t.useRef(0),a=t.useRef(0),i=t.useRef(0),d=t.useRef(0),S=t.useRef(0),p=t.useRef(0),b=t.useRef(0),v=t.useRef(0),_=t.useCallback(l=>{!r(l)||(l.currentTarget.setPointerCapture(l.pointerId),c(l.pointerId),f.current=l.clientX,a.current=l.clientY,i.current=0,p.current=l.timeStamp,b.current=l.clientX,v.current=l.clientY)},[r]),C=t.useCallback(l=>{if(l.pointerId!==n)return;i.current=p.current,d.current=b.current,S.current=v.current,p.current=l.timeStamp,b.current=l.clientX,v.current=l.clientY;const R=l.clientX-f.current,M=l.clientY-a.current;s({diffX:R,diffY:M})},[s,n]),P=t.useCallback(l=>{if(l.pointerId!==n)return;c(void 0);const R=l.clientX-f.current,M=l.clientY-a.current;let y,x;if(i.current){const F=l.timeStamp-i.current;y=(l.clientX-d.current)/F,x=(l.clientY-S.current)/F}else y=0,x=0;o({diffX:R,diffY:M,speedX:y,speedY:x})},[o,n]),k=t.useCallback(l=>{if(l.pointerId!==n)return;c(void 0);const R=l.clientX-f.current,M=l.clientY-a.current;o({diffX:R,diffY:M,speedX:0,speedY:0})},[o,n]);return{cancelPointer:t.useCallback(()=>{c(void 0)},[]),onPointerCancel:k,onPointerDown:_,onPointerMove:C,onPointerUp:P,pointerDown:u}},z=e=>{const{childrenLength:r,diffX:s,diffY:o,direction:n,onOverSwipe:c,startSelected:u,swipeLength:f}=e;let a;switch(n){case"bottom-to-top":a=-o;break;case"top-to-bottom":a=o;break;case"left-to-right":a=s;break;case"right-to-left":a=-s;break}let i=u+a/f;if(i=Math.max(i,Math.ceil(u)-1),i=Math.min(i,Math.floor(u)+1),i<0){const d=Math.min(-i,1);i=-c(d)}else if(i>r-1){const d=Math.min(i-r+1,1);i=r-1+c(d)}return i},Oe=e=>{const{childrenLength:r,direction:s,speedX:o,speedY:n,startSelected:c,swipeSpeed:u}=e,f=z(e);let a;switch(s){case"bottom-to-top":a=-n;break;case"top-to-bottom":a=n;break;case"left-to-right":a=o;break;case"right-to-left":a=-o;break}let i;return Math.abs(a)<u?i=Math.round(f):a>u?i=Math.floor(f)+1:i=Math.ceil(f)-1,i=Math.max(i,Math.ceil(c)-1,0),i=Math.min(i,Math.floor(c)+1,r-1),i},De=400,Te=e=>e/4,Ne=e=>e.isPrimary,Le=.1,$e=e=>{const{children:r,direction:s,disableSwipe:o,noSwipeClass:n,onAnimationEnd:c,onAnimationStart:u,onAnimationTurn:f,onOverSwipe:a=Te,onSwipeEnd:i,onSwipeStart:d=Ne,onSwipeTurn:S,swipeLength:p=De,swipeSpeed:b=Le}=e,v=t.useRef(null),_=t.Children.count(r),C=t.useRef(!1),P=t.useRef(e.selected),[k,A]=t.useState(e.selected),l=t.useCallback(()=>{C.current=!0,u?.()},[u]),R=t.useCallback(m=>{P.current=m,f?.(m)},[f]),M=t.useCallback(()=>{C.current=!1,c?.()},[c]),y=t.useCallback(m=>{if(o)return!1;if(n&&m.target instanceof Element){let w=m.target;for(;w&&w!==v.current;){if(w.classList.contains(n))return!1;w=w.parentElement}}return d(m)?(C.current||(P.current=e.selected),A(P.current),!0):!1},[o,n,d,e.selected]),x=t.useCallback(m=>{const{diffX:w,diffY:L}=m,X=z({childrenLength:_,diffX:w,diffY:L,direction:s,onOverSwipe:a,startSelected:P.current,swipeLength:p});A(X),S?.(X)},[_,s,a,S,p]),F=t.useCallback(m=>{const{diffX:w,diffY:L,speedX:X,speedY:Z}=m,ee=Oe({childrenLength:_,diffX:w,diffY:L,direction:s,onOverSwipe:a,speedX:X,speedY:Z,startSelected:P.current,swipeLength:p,swipeSpeed:b});i?.(ee)},[_,s,a,i,p,b]),{cancelPointer:j,pointerDown:Y,...J}=Ee({onDown:y,onMove:x,onUp:F});t.useEffect(()=>{o&&j()},[j,o]);const G=Y?0:e.animationDuration,H=Y?k:e.selected,K=t.useMemo(()=>typeof e.willChange=="boolean"?e.willChange:Y?!0:void 0,[Y,e.willChange]),I=Xe(J,e.containerProps),Q=t.useMemo(()=>({...e.containerProps,...I}),[I,e.containerProps]),V=t.useMemo(()=>{const m=[v];return e.containerRef&&m.push(e.containerRef),q.default(m)},[e.containerRef]);return h(Ye,{...e,animationDuration:G,containerProps:Q,containerRef:V,onAnimationEnd:M,onAnimationStart:l,onAnimationTurn:R,selected:H,willChange:K})},je=t.memo($e),B=je;B.displayName="FlippingPages";exports.FlippingPages=B;
