/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/ConfIt/shading.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotate: () => (/* binding */ rotate)
/* harmony export */ });
function rotate(material) {
  material.vertexShader = material.vertexShader.replace("void main() {", "\n\t\tvec2 rotateUv(in vec2 uv, in float rotation) {\n\t\t\tfloat cosAngle = cos(rotation);\n\t\t\tfloat sinAngle = sin(rotation);\n\t\t\tmat2 rotationMatrix = mat2(\n\t\t\t\tcosAngle, -sinAngle,\n\t\t\t\tsinAngle,  cosAngle\n\t\t\t);\n\t\t\treturn mix(uv, rotationMatrix * uv, abs(sign(rotation)));\n\t\t}\n\t\t$&\n\t\t");
}
/******/ })()
;
//# sourceMappingURL=shading.ts.js.map