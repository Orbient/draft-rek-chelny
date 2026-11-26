import{r as x}from"./index.BSQ5xiZn.js";var h={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function A(){if(m)return a;m=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(d,e,t){var o=null;if(t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),"key"in e){t={};for(var u in e)u!=="key"&&(t[u]=e[u])}else t=e;return e=t.ref,{$$typeof:s,type:d,key:o,ref:e!==void 0?e:null,props:t}}return a.Fragment=i,a.jsx=r,a.jsxs=r,a}var E;function J(){return E||(E=1,h.exports=A()),h.exports}var H=J();const q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},O=x.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:r,absoluteStrokeWidth:d=!1,className:e="",altIcon:t,showAlt:o=!1,icon:u,primaryColor:p,secondaryColor:f,disableSecondaryOpacity:w=!1,...y},P)=>{const v=r!==void 0?d?Number(r)*24/Number(i):r:void 0,R=v!==void 0?{strokeWidth:v,stroke:"currentColor"}:{},_={ref:P,...q,width:i,height:i,color:p||s,className:e,...R,...y},j=[...o&&t?t:u].sort(([,l],[,n])=>{const c=l.opacity!==void 0;return n.opacity!==void 0?1:c?-1:0}).map(([l,n])=>{const c=n.opacity!==void 0,k=c&&!w?n.opacity:void 0,T=f?{...n.stroke!==void 0?{stroke:c?f:p||s}:{fill:c?f:p||s}}:{};return x.createElement(l,{...n,...R,...T,opacity:k,key:n.key})});return x.createElement("svg",_,j)});O.displayName="HugeiconsIcon";export{O as H,H as j};
