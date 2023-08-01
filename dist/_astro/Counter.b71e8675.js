import{r as _}from"./index.ed373d49.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=_,x=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,u){var e,o={},s=null,i=null;u!==void 0&&(s=""+u),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(i=r.ref);for(e in r)m.call(r,e)&&!a.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:x,type:t,key:s,ref:i,props:o,_owner:y.current}}n.Fragment=d;n.jsx=l;n.jsxs=l;f.exports=n;var p=f.exports;const j=()=>{const[t,r]=_.useState(0);return p.jsxs("div",{children:[p.jsxs("p",{children:["count: ",t]}),p.jsx("button",{onClick:()=>r(t+1),children:"+1"})]})};export{j as Counter};
