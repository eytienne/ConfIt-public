/*! For license information please see 251.js.LICENSE.txt */
"use strict";(self.webpackChunkconfit=self.webpackChunkconfit||[]).push([[251],{7251:(t,r,e)=>{e.r(r),e.d(r,{default:()=>h});var n=e(2484),o=e(6697),a=e(5233),i=e(3220);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){c=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",p=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var a=r&&r.prototype instanceof b?r:b,i=Object.create(a.prototype),u=new P(n||[]);return o(i,"_invoke",{value:U(t,e,u)}),i}function m(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var v="suspendedStart",h="suspendedYield",y="executing",d="completed",g={};function b(){}function w(){}function x(){}var M={};f(M,i,(function(){return this}));var S=Object.getPrototypeOf,O=S&&S(S(A([])));O&&O!==e&&n.call(O,i)&&(M=O);var j=x.prototype=b.prototype=Object.create(M);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var l=m(t[o],t,a);if("throw"!==l.type){var p=l.arg,f=p.value;return f&&"object"==u(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return e("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function U(r,e,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=m(r,e,n);if("normal"===l.type){if(o=n.done?d:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=m(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function B(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function A(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(u(r)+" is not iterable")}return w.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,p,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,p,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(_.prototype),f(_.prototype,l,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(j),f(j,p,"Generator"),f(j,i,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:A(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){s(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(t,r,e){return(r=function(t){var r=function(t){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=u(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function m(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}var v="build/materials/leather/";function h(t){return y.apply(this,arguments)}function y(){var t;return t=c().mark((function t(r){var e,u,p,s,m,h,y,d,g,b,w,x,M,S,O,j;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.mask,u=r.leatherRepeat,p=void 0===u?30:u,s=r.perforationsRepeat,m=void 0===s?30:s,h=r.springRepeat,y=void 0===h?80:h,d=[n.VD.load(v+"2K-Leather_23_Roughness.jpg"),n.VD.load(v+"2K-Leather_23_Normal.jpg"),n.VD.load(v+"Perforations.png"),n.VD.load(v+"Spring.png"),n.VD.load((0,a.Jt)(o.X4)+e)],g=d[0],b=d[1],w=d[2],x=d[3],M=d[4],(S=new n.KC).uniforms=f(f({},S.uniforms),(0,n.z_)((0,n.Q0)({roughnessMap:(0,n._2)(g,p),normalMap:(0,n._2)(b,p),perforationsBumpMap:(0,n._2)(w,m),perforationsBumpScale:-2,springBumpMap:(0,n._2)(x,y),springBumpScale:1,maskMap:M}))),(0,n.HM)(S,(function(t){t.bumpMap=!0,t.bumpMapUv=S.getChannel(b.channel);for(var r=0,e=Object.entries(t.uniforms);r<e.length;r++){var o=(u=e[r],c=2,function(t){if(Array.isArray(t))return t}(u)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=a.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(u,c)||function(t,r){if(t){if("string"==typeof t)return l(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,r):void 0}}(u,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];a.match(n.uQ)&&(0,n.Ix)(i.value)&&(t[a]=!0,t[a+"Uv"]=S.getChannel(i.value.channel))}var u,c;S.setVertexUvS(t)})),O="void main() {",S.vertexShader=S.vertexShader.replace(O,"\n\t\tvoid rotateUv(inout vec2 uv, float rotation) {\n\t\t\tfloat cosAngle = cos(rotation);\n\t\t\tfloat sinAngle = sin(rotation);\n\t\t\tmat2 rotationMatrix = mat2(\n\t\t\t\tcosAngle, -sinAngle,\n\t\t\t\tsinAngle,  cosAngle\n\t\t\t);\n\t\t\tuv = rotationMatrix * uv;\n\t\t}\n\n\t\tout vec2 normalMapUv;\n\t\tuniform mat3 maskMapTransform;\n\t\tout vec2 maskMapUv;\n\t\tuniform mat3 perforationsBumpMapTransform;\n\t\tout vec2 perforationsBumpMapUv;\n\t\tuniform mat3 springBumpMapTransform;\n\t\tuniform float springRotation;\n\t\tout vec2 springBumpMapUv;\n\n\t\t".concat(O,"\n\n\t\tnormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\t\tmaskMapUv = ( maskMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\t\tperforationsBumpMapUv = ( perforationsBumpMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\t\tspringBumpMapUv = ( springBumpMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\t\trotateUv(springBumpMapUv, springRotation);\n\t\t")),S.fragmentShader=S.fragmentShader.replace(O,"\n\t\tvec3 blend_rnm(vec3 n1, vec3 n2)\n\t\t{\n\t\t\tvec3 t = n1.xyz*vec3( 2,  2, 2) + vec3(-1, -1,  0);\n\t\t\tvec3 u = n2.xyz*vec3(-2, -2, 2) + vec3( 1,  1, -1);\n\t\t\tvec3 r = t*dot(t, u) - u*t.z;\n\t\t\treturn normalize(r);\n\t\t}\n\n\t\tvec2 dHdxy_fwd2(sampler2D map, vec2 mapUv, float scale) {\n\t\t\tvec2 dSTdx = dFdx( mapUv );\n\t\t\tvec2 dSTdy = dFdy( mapUv );\n\n\t\t\tfloat Hll = scale * texture2D( map, mapUv ).x;\n\t\t\tfloat dBx = scale * texture2D( map, mapUv + dSTdx ).x - Hll;\n\t\t\tfloat dBy = scale * texture2D( map, mapUv + dSTdy ).x - Hll;\n\n\t\t\treturn vec2( dBx, dBy );\n\t\t}\n\n\t\tin vec2 normalMapUv;\n\t\tuniform sampler2D maskMap;\n\t\tin vec2 maskMapUv;\n\t\tuniform sampler2D perforationsBumpMap;\n\t\tuniform float perforationsBumpScale;\n\t\tin vec2 perforationsBumpMapUv;\n\t\tuniform sampler2D springBumpMap;\n\t\tuniform float springBumpScale;\n\t\tin vec2 springBumpMapUv;\n\n\t\t".concat(O)),S.fragmentShader=S.fragmentShader.replace("#include <normal_fragment_maps>","\n\t\tvec4 mask = texture2D( maskMap, maskMapUv );\n\t\tfloat perforationsMask = 1.0 - (mask.r * texture2D( perforationsBumpMap, perforationsBumpMapUv ).x);\n\n\t\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd2( perforationsBumpMap, perforationsBumpMapUv, perforationsBumpScale * mask.r), faceDirection );\n\t\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd2( springBumpMap, springBumpMapUv, springBumpScale * mask.g), faceDirection );\n\n\t\tnormal = blend_rnm((normal.xyz + 1.0) / 2.0, texture2D( normalMap, normalMapUv ).xyz);\n\t\t"),j="vec3 outgoingLight =",S.fragmentShader=S.fragmentShader.replace(j,"\n\t\ttotalDiffuse.rgb *= perforationsMask;\n\t\ttotalSpecular.rgb *= perforationsMask;\n\t\t".concat(j)),S.perObjectSetup=function(t,r){var e=r.springRotation,o=void 0===e?0:e;t.uniforms.springRotation=(0,n.ZW)((0,i.pu)(o))},t.abrupt("return",S);case 13:case"end":return t.stop()}}),t)})),y=function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){m(a,n,o,i,u,"next",t)}function u(t){m(a,n,o,i,u,"throw",t)}i(void 0)}))},y.apply(this,arguments)}}}]);