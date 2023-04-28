/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  width: 100%;\n  height: 100vh;\n}\n\nbody {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #414141;\n  color: #d9d9d9;\n}\n\nmain {\n  padding: 0 40px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 100px;\n}\nmain .player-container,\nmain .computer-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-family: \"Roboto\", sans-serif;\n}\nmain .player-container .player-grid,\nmain .player-container .computer-grid,\nmain .computer-container .player-grid,\nmain .computer-container .computer-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 600px;\n  width: 600px;\n  background-color: #d9d9d9;\n}\nmain .player-container .player-grid .box,\nmain .player-container .computer-grid .box,\nmain .computer-container .player-grid .box,\nmain .computer-container .computer-grid .box {\n  cursor: pointer;\n  border: 1px solid #414141;\n  transition: 250ms ease-in-out;\n}\nmain .player-container .player-grid .box:hover,\nmain .player-container .computer-grid .box:hover,\nmain .computer-container .player-grid .box:hover,\nmain .computer-container .computer-grid .box:hover {\n  background-color: #747474;\n}\n\nheader {\n  padding-top: 20px;\n  font-family: \"Bruno Ace SC\", cursive;\n  font-size: 40px;\n  text-align: center;\n}\n\nfooter {\n  margin-bottom: 10px;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nfooter a {\n  color: #d9d9d9;\n  align-self: center;\n  text-decoration: none;\n  width: fit-content;\n}\nfooter a:hover .name {\n  text-decoration: underline;\n}\nfooter a:hover .github-logo {\n  transform: rotate(360deg);\n}\nfooter .credit {\n  font-size: 1.2rem;\n  width: auto;\n  display: flex;\n  gap: 0.2em;\n}\nfooter .credit .github-logo {\n  transition: 250ms ease-in-out;\n}\n\n.style-modal {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: fixed;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #f2f2f2;\n}\n\n.modal-content {\n  font-family: \"Bruno Ace SC\", cursive;\n  color: #000;\n  padding: 0.2em;\n  width: 670px;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #d9d9d9;\n  font-size: 32px;\n  gap: 10px;\n}\n\n.start-modal-content {\n  color: #000;\n  padding: 0.5em 1em;\n  width: 650px;\n  height: 700px;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  background-color: #d9d9d9;\n  font-size: 32px;\n  gap: 10px;\n}\n.start-modal-content .start-modal-header {\n  font-family: \"Bruno Ace SC\", cursive;\n}\n.start-modal-content .start-modal-header p {\n  font-size: 30px;\n}\n.start-modal-content .coordinate-container {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n}\n.start-modal-content .coordinate-container .sub-text {\n  font-family: \"Bruno Ace SC\", cursive;\n  font-size: 16px;\n}\n.start-modal-content .coordinate-container .grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  height: 500px;\n  width: 500px;\n  background-color: #d9d9d9;\n}\n.start-modal-content .coordinate-container .grid .grid-box {\n  cursor: pointer;\n  border: 1px solid #414141;\n  transition: 250ms ease-in-out;\n}\n.start-modal-content .coordinate-container .grid .grid-box:hover {\n  background-color: #747474;\n}\n.start-modal-content .button-container {\n  align-self: center;\n  display: flex;\n  gap: 5px;\n}\n.start-modal-content .button-container button {\n  font-family: \"Bruno Ace SC\", cursive;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: #000;\n  color: #d9d9d9;\n  height: 50px;\n  width: 125px;\n  transition: 0.2s ease-in-out;\n}\n.start-modal-content .button-container button:hover {\n  transform: translateY(-5px);\n}\n\n.restart-style-button {\n  width: 200px;\n  font-size: 1.2rem;\n  background-color: #1c1c1c;\n  outline: none;\n  border: none;\n  padding: 0.8em;\n  border-radius: 8px;\n  color: #f2f2f2;\n  font-family: \"Bruno Ace SC\", cursive;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n\n.restart-style-button:hover {\n  background-color: #303030;\n}\n\n@media only screen and (max-width: 81.625em) {\n  main .player-container .player-grid,\n  main .player-container .computer-grid,\n  main .computer-container .player-grid,\n  main .computer-container .computer-grid {\n    height: 500px;\n    width: 500px;\n  }\n}\n@media only screen and (max-width: 69.375em) {\n  main .player-container .player-grid,\n  main .player-container .computer-grid,\n  main .computer-container .player-grid,\n  main .computer-container .computer-grid {\n    height: 400px;\n    width: 400px;\n  }\n}\n@media only screen and (max-width: 56.75em) {\n  main .player-container .player-grid,\n  main .player-container .computer-grid,\n  main .computer-container .player-grid,\n  main .computer-container .computer-grid {\n    height: 300px;\n    width: 300px;\n  }\n}\n@media only screen and (max-width: 44.0625em) {\n  header {\n    font-size: 24px;\n  }\n  main {\n    gap: 25px;\n    flex-direction: column;\n  }\n  main .player-container .player-grid,\n  main .player-container .computer-grid,\n  main .computer-container .player-grid,\n  main .computer-container .computer-grid {\n    height: 300px;\n    width: 300px;\n  }\n  .start-modal-content {\n    margin: 0.7em;\n    width: 450px;\n    height: 500px;\n    justify-content: center;\n    font-size: 16px;\n  }\n  .start-modal-content .start-modal-header {\n    align-self: center;\n    font-family: \"Bruno Ace SC\", cursive;\n    text-align: center;\n  }\n  .start-modal-content .start-modal-header p {\n    font-size: 16px;\n  }\n  .start-modal-content .coordinate-container {\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n  }\n  .start-modal-content .coordinate-container .sub-text {\n    font-family: \"Bruno Ace SC\", cursive;\n    font-size: 12px;\n  }\n  .start-modal-content .coordinate-container .grid {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    height: 300px;\n    width: 300px;\n    background-color: #d9d9d9;\n  }\n  .start-modal-content .coordinate-container .grid .grid-box {\n    cursor: pointer;\n    border: 1px solid #414141;\n    transition: 250ms ease-in-out;\n  }\n  .start-modal-content .coordinate-container .grid .grid-box:hover {\n    background-color: #747474;\n  }\n  .start-modal-content .button-container {\n    align-self: center;\n    display: flex;\n    gap: 5px;\n    font-size: 12px;\n  }\n  .start-modal-content .button-container button {\n    font-family: \"Bruno Ace SC\", cursive;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    background-color: #000;\n    color: #d9d9d9;\n    height: 25px;\n    width: 100px;\n    transition: 0.2s ease-in-out;\n  }\n  .start-modal-content .button-container button:hover {\n    transform: translateY(-5px);\n  }\n  .modal-content {\n    width: 320px;\n    height: 200px;\n    font-size: 20px;\n  }\n  footer {\n    margin-bottom: 5px;\n  }\n  footer a {\n    color: #d9d9d9;\n    align-self: center;\n    text-decoration: none;\n    width: fit-content;\n  }\n  footer a:hover .name {\n    text-decoration: underline;\n  }\n  footer a:hover .github-logo {\n    transform: rotate(360deg);\n  }\n  footer .credit {\n    font-size: 0.8rem;\n    width: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.2em;\n  }\n  footer .credit .github-logo {\n    transition: 250ms ease-in-out;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;AAAF;;AAEA;EACE,WAAA;EACA,aAAA;AACF;;AACA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,yBAhBa;EAiBb,cAAA;AAEF;;AAAA;EACE,eAAA;EACA,OAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;AAGF;AAFE;;EAEE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,iCAAA;AAIJ;AAHI;;;;EAEE,aAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AAON;AANM;;;;EACE,eAAA;EACA,yBAAA;EACA,6BAAA;AAWR;AAVQ;;;;EACE,yBAAA;AAeV;;AATA;EACE,iBAAA;EACA,oCAAA;EACA,eAAA;EACA,kBAAA;AAYF;;AAVA;EACE,mBAAA;EACA,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAaF;AAZE;EACE,cAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;AAcJ;AAXM;EACE,0BAAA;AAaR;AAXM;EACE,yBAAA;AAaR;AARE;EACE,iBAAA;EACA,WAAA;EACA,aAAA;EACA,UAAA;AAUJ;AARI;EACE,6BAAA;AAUN;;AALA;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,cAAA;AAQF;;AANA;EACE,oCAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,SAAA;AASF;;AAPA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,SAAA;AAUF;AATE;EACE,oCAAA;AAWJ;AATI;EACE,eAAA;AAWN;AAPE;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;AASJ;AARI;EACE,oCAAA;EACA,eAAA;AAUN;AARI;EACE,aAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;AAUN;AATM;EACE,eAAA;EACA,yBAAA;EACA,6BAAA;AAWR;AAVQ;EACE,yBAAA;AAYV;AANE;EACE,kBAAA;EACA,aAAA;EACA,QAAA;AAQJ;AANI;EACE,oCAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;AAQN;AAPM;EACE,2BAAA;AASR;;AAJA;EACE,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,cAAA;EACA,oCAAA;EACA,eAAA;EACA,4BAAA;AAOF;;AALA;EACE,yBAAA;AAQF;;AALA;EAIM;;;;IAEE,aAAA;IACA,YAAA;EAON;AACF;AAFA;EAIM;;;;IAEE,aAAA;IACA,YAAA;EAGN;AACF;AAEA;EAIM;;;;IAEE,aAAA;IACA,YAAA;EADN;AACF;AAMA;EACE;IACE,eAAA;EAJF;EAMA;IACE,SAAA;IACA,sBAAA;EAJF;EAOI;;;;IAEE,aAAA;IACA,YAAA;EAHN;EAOA;IACE,aAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;IACA,eAAA;EALF;EAME;IACE,kBAAA;IACA,oCAAA;IACA,kBAAA;EAJJ;EAKI;IACE,eAAA;EAHN;EAOE;IACE,kBAAA;IACA,aAAA;IACA,sBAAA;EALJ;EAMI;IACE,oCAAA;IACA,eAAA;EAJN;EAMI;IACE,aAAA;IACA,sCAAA;IACA,aAAA;IACA,YAAA;IACA,yBAAA;EAJN;EAKM;IACE,eAAA;IACA,yBAAA;IACA,6BAAA;EAHR;EAIQ;IACE,yBAAA;EAFV;EAQE;IACE,kBAAA;IACA,aAAA;IACA,QAAA;IACA,eAAA;EANJ;EAOI;IACE,oCAAA;IACA,eAAA;IACA,aAAA;IACA,YAAA;IACA,sBAAA;IACA,cAAA;IACA,YAAA;IACA,YAAA;IACA,4BAAA;EALN;EAMM;IACE,2BAAA;EAJR;EAUA;IACE,YAAA;IACA,aAAA;IACA,eAAA;EARF;EAWA;IACE,kBAAA;EATF;EAUE;IACE,cAAA;IACA,kBAAA;IACA,qBAAA;IACA,kBAAA;EARJ;EAWM;IACE,0BAAA;EATR;EAWM;IACE,yBAAA;EATR;EAcE;IACE,iBAAA;IACA,WAAA;IACA,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,UAAA;EAZJ;EAcI;IACE,6BAAA;EAZN;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Roboto&display=swap\");\r\n$primaryColor: #414141;\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nhtml {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\nbody {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: $primaryColor;\r\n  color: #d9d9d9;\r\n}\r\nmain {\r\n  padding: 0 40px;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 100px;\r\n  .player-container,\r\n  .computer-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    font-family: \"Roboto\", sans-serif;\r\n    .player-grid,\r\n    .computer-grid {\r\n      display: grid;\r\n      grid-template-columns: repeat(10, 1fr);\r\n      height: 600px;\r\n      width: 600px;\r\n      background-color: #d9d9d9;\r\n      .box {\r\n        cursor: pointer;\r\n        border: 1px solid $primaryColor;\r\n        transition: 250ms ease-in-out;\r\n        &:hover {\r\n          background-color: #747474;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\nheader {\r\n  padding-top: 20px;\r\n  font-family: \"Bruno Ace SC\", cursive;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\nfooter {\r\n  margin-bottom: 10px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  a {\r\n    color: #d9d9d9;\r\n    align-self: center;\r\n    text-decoration: none;\r\n    width: fit-content;\r\n\r\n    &:hover {\r\n      .name {\r\n        text-decoration: underline;\r\n      }\r\n      .github-logo {\r\n        transform: rotate(360deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  .credit {\r\n    font-size: 1.2rem;\r\n    width: auto;\r\n    display: flex;\r\n    gap: 0.2em;\r\n\r\n    .github-logo {\r\n      transition: 250ms ease-in-out;\r\n    }\r\n  }\r\n}\r\n\r\n.style-modal {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  position: fixed;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  color: #f2f2f2;\r\n}\r\n.modal-content {\r\n  font-family: \"Bruno Ace SC\", cursive;\r\n  color: #000;\r\n  padding: 0.2em;\r\n  width: 670px;\r\n  height: 200px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #d9d9d9;\r\n  font-size: 32px;\r\n  gap: 10px;\r\n}\r\n.start-modal-content {\r\n  color: #000;\r\n  padding: 0.5em 1em;\r\n  width: 650px;\r\n  height: 700px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  background-color: #d9d9d9;\r\n  font-size: 32px;\r\n  gap: 10px;\r\n  .start-modal-header {\r\n    font-family: \"Bruno Ace SC\", cursive;\r\n\r\n    p {\r\n      font-size: 30px;\r\n    }\r\n  }\r\n\r\n  .coordinate-container {\r\n    align-self: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    .sub-text {\r\n      font-family: \"Bruno Ace SC\", cursive;\r\n      font-size: 16px;\r\n    }\r\n    .grid {\r\n      display: grid;\r\n      grid-template-columns: repeat(10, 1fr);\r\n      height: 500px;\r\n      width: 500px;\r\n      background-color: #d9d9d9;\r\n      .grid-box {\r\n        cursor: pointer;\r\n        border: 1px solid $primaryColor;\r\n        transition: 250ms ease-in-out;\r\n        &:hover {\r\n          background-color: #747474;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .button-container {\r\n    align-self: center;\r\n    display: flex;\r\n    gap: 5px;\r\n\r\n    button {\r\n      font-family: \"Bruno Ace SC\", cursive;\r\n      cursor: pointer;\r\n      outline: none;\r\n      border: none;\r\n      background-color: #000;\r\n      color: #d9d9d9;\r\n      height: 50px;\r\n      width: 125px;\r\n      transition: 0.2s ease-in-out;\r\n      &:hover {\r\n        transform: translateY(-5px);\r\n      }\r\n    }\r\n  }\r\n}\r\n.restart-style-button {\r\n  width: 200px;\r\n  font-size: 1.2rem;\r\n  background-color: #1c1c1c;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0.8em;\r\n  border-radius: 8px;\r\n  color: #f2f2f2;\r\n  font-family: \"Bruno Ace SC\", cursive;\r\n  cursor: pointer;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n.restart-style-button:hover {\r\n  background-color: #303030;\r\n}\r\n\r\n@media only screen and (max-width: 81.625em) {\r\n  main {\r\n    .player-container,\r\n    .computer-container {\r\n      .player-grid,\r\n      .computer-grid {\r\n        height: 500px;\r\n        width: 500px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 69.375em) {\r\n  main {\r\n    .player-container,\r\n    .computer-container {\r\n      .player-grid,\r\n      .computer-grid {\r\n        height: 400px;\r\n        width: 400px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 56.75em) {\r\n  main {\r\n    .player-container,\r\n    .computer-container {\r\n      .player-grid,\r\n      .computer-grid {\r\n        height: 300px;\r\n        width: 300px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 44.0625em) {\r\n  header {\r\n    font-size: 24px;\r\n  }\r\n  main {\r\n    gap: 25px;\r\n    flex-direction: column;\r\n    .player-container,\r\n    .computer-container {\r\n      .player-grid,\r\n      .computer-grid {\r\n        height: 300px;\r\n        width: 300px;\r\n      }\r\n    }\r\n  }\r\n  .start-modal-content {\r\n    margin: 0.7em;\r\n    width: 450px;\r\n    height: 500px;\r\n    justify-content: center;\r\n    font-size: 16px;\r\n    .start-modal-header {\r\n      align-self: center;\r\n      font-family: \"Bruno Ace SC\", cursive;\r\n      text-align: center;\r\n      p {\r\n        font-size: 16px;\r\n      }\r\n    }\r\n\r\n    .coordinate-container {\r\n      align-self: center;\r\n      display: flex;\r\n      flex-direction: column;\r\n      .sub-text {\r\n        font-family: \"Bruno Ace SC\", cursive;\r\n        font-size: 12px;\r\n      }\r\n      .grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 1fr);\r\n        height: 300px;\r\n        width: 300px;\r\n        background-color: #d9d9d9;\r\n        .grid-box {\r\n          cursor: pointer;\r\n          border: 1px solid $primaryColor;\r\n          transition: 250ms ease-in-out;\r\n          &:hover {\r\n            background-color: #747474;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .button-container {\r\n      align-self: center;\r\n      display: flex;\r\n      gap: 5px;\r\n      font-size: 12px;\r\n      button {\r\n        font-family: \"Bruno Ace SC\", cursive;\r\n        cursor: pointer;\r\n        outline: none;\r\n        border: none;\r\n        background-color: #000;\r\n        color: #d9d9d9;\r\n        height: 25px;\r\n        width: 100px;\r\n        transition: 0.2s ease-in-out;\r\n        &:hover {\r\n          transform: translateY(-5px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .modal-content {\r\n    width: 320px;\r\n    height: 200px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  footer {\r\n    margin-bottom: 5px;\r\n    a {\r\n      color: #d9d9d9;\r\n      align-self: center;\r\n      text-decoration: none;\r\n      width: fit-content;\r\n\r\n      &:hover {\r\n        .name {\r\n          text-decoration: underline;\r\n        }\r\n        .github-logo {\r\n          transform: rotate(360deg);\r\n        }\r\n      }\r\n    }\r\n\r\n    .credit {\r\n      font-size: 0.8rem;\r\n      width: auto;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 0.2em;\r\n\r\n      .github-logo {\r\n        transition: 250ms ease-in-out;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ArrayOfValidation.js":
/*!**********************************!*\
  !*** ./src/ArrayOfValidation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship1HorizontalInValid": () => (/* binding */ ship1HorizontalInValid),
/* harmony export */   "ship1VerticalInValid": () => (/* binding */ ship1VerticalInValid),
/* harmony export */   "ship2HorizontalInValid": () => (/* binding */ ship2HorizontalInValid),
/* harmony export */   "ship2VerticalInValid": () => (/* binding */ ship2VerticalInValid),
/* harmony export */   "ship3HorizontalInValid": () => (/* binding */ ship3HorizontalInValid),
/* harmony export */   "ship3VerticalInValid": () => (/* binding */ ship3VerticalInValid),
/* harmony export */   "ship4HorizontalInValid": () => (/* binding */ ship4HorizontalInValid),
/* harmony export */   "ship4VerticalInValid": () => (/* binding */ ship4VerticalInValid),
/* harmony export */   "ship5HorizontalInValid": () => (/* binding */ ship5HorizontalInValid),
/* harmony export */   "ship5VerticalInValid": () => (/* binding */ ship5VerticalInValid)
/* harmony export */ });
const ship1HorizontalInValid = [
  "A7",
  "A8",
  "A9",
  "A10",
  "B7",
  "B8",
  "B9",
  "B10",
  "C7",
  "C8",
  "C9",
  "C10",
  "D7",
  "D8",
  "D9",
  "D10",
  "E7",
  "E8",
  "E9",
  "E10",
  "F7",
  "F8",
  "F9",
  "F10",
  "G7",
  "G8",
  "G9",
  "G10",
  "H7",
  "H8",
  "H9",
  "H10",
  "I7",
  "I8",
  "I9",
  "I10",
  "J7",
  "J8",
  "J9",
  "J10",
];

const ship1VerticalInValid = [
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "G9",
  "G10",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];

const ship2HorizontalInValid = [
  "A8",
  "A9",
  "A10",
  "B8",
  "B9",
  "B10",
  "C8",
  "C9",
  "C10",
  "D8",
  "D9",
  "D10",
  "E8",
  "E9",
  "E10",
  "F8",
  "F9",
  "F10",
  "G8",
  "G9",
  "G10",
  "H8",
  "H9",
  "H10",
  "I8",
  "I9",
  "I10",
  "J8",
  "J9",
  "J10",
];

const ship2VerticalInValid = [
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];

const ship3HorizontalInValid = [
  "A9",
  "A10",
  "B9",
  "B10",
  "C9",
  "C10",
  "D9",
  "D10",
  "E9",
  "E10",
  "F9",
  "F10",
  "G9",
  "G10",
  "H9",
  "H10",
  "I9",
  "I10",
  "J9",
  "J10",
];

const ship3VerticalInValid = [
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];

const ship4HorizontalInValid = [
  "A9",
  "A10",
  "B9",
  "B10",
  "C9",
  "C10",
  "D9",
  "D10",
  "E9",
  "E10",
  "F9",
  "F10",
  "G9",
  "G10",
  "H9",
  "H10",
  "I9",
  "I10",
  "J9",
  "J10",
];

const ship4VerticalInValid = [
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];

const ship5HorizontalInValid = [
  "A10",
  "B10",
  "C10",
  "D10",
  "E10",
  "F10",
  "G10",
  "H10",
  "I10",
  "J10",
];

const ship5VerticalInValid = [
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];


/***/ }),

/***/ "./src/Choices.js":
/*!************************!*\
  !*** ./src/Choices.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandleFifthShip": () => (/* binding */ HandleFifthShip),
/* harmony export */   "HandleFirstShip": () => (/* binding */ HandleFirstShip),
/* harmony export */   "HandleFourthShip": () => (/* binding */ HandleFourthShip),
/* harmony export */   "HandleSecondShip": () => (/* binding */ HandleSecondShip),
/* harmony export */   "HandleThirdShip": () => (/* binding */ HandleThirdShip)
/* harmony export */ });
/* harmony import */ var _ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayOfValidation */ "./src/ArrayOfValidation.js");

const playerStartParentGrid = document.getElementById("player-coordinates");
function HandleFirstShip(rotation, index, coordinate) {
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 5; i++) {
        coordinate.push(playerStartParentGrid.children[index + i].id);
        playerStartParentGrid.children[index + i].style.backgroundColor =
          "#1E72EF";
        playerStartParentGrid.children[index + i].setAttribute(
          "hascolor",
          "true"
        );
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 5; i++) {
        // prettier-ignore
        coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);

        playerStartParentGrid.children[
          index + indexForVertical
        ].style.backgroundColor = "#1E72EF";
        playerStartParentGrid.children[index + indexForVertical].setAttribute(
          "hascolor",
          "true"
        );
        indexForVertical += 10;
      }
    } else {
      return [];
    }
  }

  return coordinate;
}

function HandleSecondShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 4; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
            handleLeftOver.push(playerStartParentGrid.children[index + i]);
            coordinate.push(playerStartParentGrid.children[index + i].id);
        }
      }

      if (handleLeftOver.length !== 4) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 4; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
            coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
        }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 4) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

function HandleThirdShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
              handleLeftOver.push(playerStartParentGrid.children[index + i]);
              coordinate.push(playerStartParentGrid.children[index + i].id);
          }
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
              handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
              coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
          }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

function HandleFourthShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
                handleLeftOver.push(playerStartParentGrid.children[index + i]);
                coordinate.push(playerStartParentGrid.children[index + i].id);
            }
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 3; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
                coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
            }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 3) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}

function HandleFifthShip(rotation, index, coordinate) {
  const handleLeftOver = [];
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5HorizontalInValid.includes(validity)) {
      for (let i = 0; i < 2; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + i].hasAttribute("hascolor")) {
            handleLeftOver.push(playerStartParentGrid.children[index + i]);
            coordinate.push(playerStartParentGrid.children[index + i].id);
        }
      }

      if (handleLeftOver.length !== 2) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (!_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5VerticalInValid.includes(validity)) {
      let indexForVertical = 0;
      for (let i = 0; i < 2; i++) {
        // prettier-ignore
        if (!playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            handleLeftOver.push(playerStartParentGrid.children[index + indexForVertical]);
            coordinate.push(playerStartParentGrid.children[index + indexForVertical].id);
        }
        indexForVertical += 10;
      }

      if (handleLeftOver.length !== 2) {
        return [];
      } else {
        handleLeftOver.forEach((element) => {
          element.style.backgroundColor = "#1E72EF";
          element.setAttribute("hascolor", "true");
        });
      }
    } else {
      return [];
    }
  }
  return coordinate;
}


/***/ }),

/***/ "./src/Computer.js":
/*!*************************!*\
  !*** ./src/Computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
function Computer(computerCoordinates = []) {
  const computerCoordinate = computerCoordinates;
  let computerTurn = false;

  function changeComputerTurn(value) {
    computerTurn = value;
  }

  function getComputerTurn() {
    return computerTurn;
  }

  function getCoordinates() {
    return computerCoordinate;
  }

  return {
    getCoordinates,
    getComputerTurn,
    changeComputerTurn,
  };
}


/***/ }),

/***/ "./src/ComputerGameboard.js":
/*!**********************************!*\
  !*** ./src/ComputerGameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComputerGameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


function ComputerGameboard(computer) {
  const computerCoordinates = computer.getCoordinates();
  const computerShip1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(computerCoordinates[0]);
  const computerShip2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(computerCoordinates[1]);
  const computerShip3 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(computerCoordinates[2]);
  const computerShip4 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(computerCoordinates[3]);
  const computerShip5 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(computerCoordinates[4]);

  function receivedAttack(coordinateAttack) {
    if (computerShip1.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "hit" : "game-over";
    } else if (computerShip2.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "hit" : "game-over";
    } else if (computerShip3.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "hit" : "game-over";
    } else if (computerShip4.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "hit" : "game-over";
    } else if (computerShip5.hit(coordinateAttack)) {
      return !computerAllShipSunk() ? "hit" : "game-over";
    } else {
      return "miss";
    }
  }

  function computerAllShipSunk() {
    const allCoordinates = [
      computerShip1.isSunk(),
      computerShip2.isSunk(),
      computerShip3.isSunk(),
      computerShip4.isSunk(),
      computerShip5.isSunk(),
    ];

    const shipsValue = allCoordinates.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    if (shipsValue <= 0) {
      return true;
    }
    return false;
  }

  function getComputerCoordinates() {
    return computerCoordinates;
  }

  return {
    getComputerCoordinates,
    receivedAttack,
    computerAllShipSunk,
  };
}


/***/ }),

/***/ "./src/ComputerRandomize.js":
/*!**********************************!*\
  !*** ./src/ComputerRandomize.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputerCoordinates)
/* harmony export */ });
/* harmony import */ var _ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayOfValidation */ "./src/ArrayOfValidation.js");


async function getComputerCoordinates() {
  return new Promise((resolve, reject) => {
    let mode = 0;
    const rotations = ["horizontal", "vertical"];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let collector = [];
    let firstCoordinate = [];
    let secondCoordinate = [];
    let thirdCoordinate = [];
    let fourthCoordinate = [];
    let fifthCoordinate = [];

    if (mode === 0) {
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      if (randomRotation === "horizontal") {
        while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1HorizontalInValid.includes(random)) {
          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          random = randomLetter + randomNumber;
        }

        const letter = random.charAt(0);
        const number = parseInt(random.charAt(1));

        let sum = number;
        for (let i = 0; i < 5; i++) {
          const sumStr = sum.toString();
          firstCoordinate.push(`${letter}${sumStr}`);
          collector.push(`${letter}${sumStr}`);
          sum++;
        }
      } else {
        while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1VerticalInValid.includes(random)) {
          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          random = randomLetter + randomNumber;
        }
        const letter = random.charAt(0);
        const number = random.charAt(1);

        let pointer = letters.indexOf(letter);
        for (let i = 0; i < 5; i++) {
          const getLetter = letters[pointer];
          firstCoordinate.push(`${getLetter}${number}`);
          collector.push(`${getLetter}${number}`);
          pointer++;
        }
      }
      mode++;
    }
    if (mode === 1) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 4; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 4; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            collector.push(value);
            secondCoordinate.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 2nd Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 2) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 3; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 3; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            collector.push(value);
            thirdCoordinate.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 3rd Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 3) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 3; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 3; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            fourthCoordinate.push(value);
            collector.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 4th Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }
    if (mode === 4) {
      let tempArray = [];
      let isNotValid = true;
      let randomLetter = letters[Math.floor(Math.random() * letters.length)];
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      let randomRotation =
        rotations[Math.floor(Math.random() * rotations.length)];
      let random = randomLetter + randomNumber;
      while (isNotValid) {
        if (randomRotation === "horizontal") {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5HorizontalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }

          const letter = random.charAt(0);
          const number = parseInt(random.charAt(1));

          let sum = number;
          for (let i = 0; i < 2; i++) {
            const sumStr = sum.toString();
            tempArray.push(`${letter}${sumStr}`);
            sum++;
          }
        } else {
          while (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5VerticalInValid.includes(random)) {
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            random = randomLetter + randomNumber;
          }
          const letter = random.charAt(0);
          const number = random.charAt(1);

          let pointer = letters.indexOf(letter);
          for (let i = 0; i < 2; i++) {
            const getLetter = letters[pointer];
            tempArray.push(`${getLetter}${number}`);
            pointer++;
          }
        }

        let allValid = true;
        tempArray.forEach((value) => {
          if (collector.includes(value)) {
            allValid = false;
          }
        });

        if (allValid) {
          tempArray.forEach((value) => {
            fifthCoordinate.push(value);
            collector.push(value);
          });
          isNotValid = false;
        } else {
          console.log("Found Conflict on 5th Array: " + tempArray);
          while (tempArray.length) {
            tempArray.pop();
          }

          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
          randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          random = randomLetter + randomNumber;
        }
      }
      mode++;
    }

    resolve([
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate,
      fifthCoordinate,
    ]);
  });
}


/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _ComputerGameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerGameboard */ "./src/ComputerGameboard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Computer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Computer */ "./src/Computer.js");
/* harmony import */ var _ComputerRandomize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputerRandomize */ "./src/ComputerRandomize.js");
/* harmony import */ var _PlayerChoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerChoose */ "./src/PlayerChoose.js");







const playerCoordinatesBox = document.querySelectorAll(".player-grid .box");
const computerCoordinatesBox = document.querySelectorAll(".computer-grid .box");

const startModal = document.getElementById("start-modal");
const playerStartBoxes = document.querySelectorAll(".grid-box");
const modal = document.getElementById("open-modal");
const decisionWinner = document.getElementById("decision");
const playAgainBtn = document.getElementById("restart-btn");

// From what I know this is where we create the UI
// Where we also take the coordinates of the player and randomize the computer's coordinates.
let playerCoordinates = await (0,_PlayerChoose__WEBPACK_IMPORTED_MODULE_5__["default"])();

let computerCoordinates = await (0,_ComputerRandomize__WEBPACK_IMPORTED_MODULE_4__["default"])();

const computerHitCollector = [];

const player = (0,_Player__WEBPACK_IMPORTED_MODULE_2__["default"])(playerCoordinates);
const playerGameBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(player);

const computer = (0,_Computer__WEBPACK_IMPORTED_MODULE_3__["default"])(computerCoordinates);
const computerGameboard = (0,_ComputerGameboard__WEBPACK_IMPORTED_MODULE_1__["default"])(computer);

playerCoordinatesBox.forEach((coordinateBoxes) => {
  if (playerCoordinates[0].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[1].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[2].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[3].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  if (playerCoordinates[4].includes(coordinateBoxes.id)) {
    coordinateBoxes.style.backgroundColor = "#1E72EF";
  }
  coordinateBoxes.style.cursor = "default";
});

computerCoordinatesBox.forEach((computerBoxes) => {
  computerBoxes.addEventListener("click", (e) => {
    e.preventDefault();
    const hasPressed = computerBoxes.hasAttribute("hasPressed");

    // From what I know below this.
    // Is that when I press this and the result is "missed"
    // put a red box in that coordinateBox
    // But when the result is "hit"
    // put a greenbox in that coordinateBox
    // But when the result is Gameover we won.

    // Now we also have to think about when the computer hits us
    // It will be the same thing but it returns different values
    const playerResult = playerAttack(computerBoxes.id);
    if (!hasPressed) {
      if (playerResult === "hit") {
        computerBoxes.setAttribute("hasPressed", "true");
        computerBoxes.style.backgroundColor = "#54EF1E";
      } else if (playerResult === "miss") {
        computerBoxes.setAttribute("hasPressed", "true");
        computerBoxes.style.backgroundColor = "#FF4343";
      } else {
        modal.style.display = "flex";
        decisionWinner.textContent = "WE WON CAPTAIN!";
        playAgainBtn.addEventListener("click", (e) => {
          location.reload();
        });
      }

      const computerResult = computerAttack(randomCoordinate());
      console.log(computerResult);
      if (computerResult === "game-over") {
        modal.style.display = "flex";
        decisionWinner.textContent = "WE LOST CAPTAIN";
        playAgainBtn.addEventListener("click", (e) => {
          location.reload();
        });
      } else {
        playerCoordinatesBox.forEach((value) => {
          if (typeof computerResult === "object") {
            if (value.id === computerResult[1]) {
              value.style.backgroundColor = "#FF4343";
              return;
            }
          } else if (value.id === computerResult) {
            value.style.backgroundColor = "#54EF1E";
            return;
          }
        });
      }
    } else {
      console.log("bro you already pressed that");
    }
  });
});

function playerAttack(coordinate) {
  let result;
  result = computerGameboard.receivedAttack(coordinate);

  return result;
}

function computerAttack(coordinate) {
  let result;
  result = playerGameBoard.receivedAttack(coordinate);

  return result;
}

function randomCoordinate() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let randomLetter = letters[Math.floor(Math.random() * letters.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let random = randomLetter + randomNumber;
  while (computerHitCollector.includes(random)) {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    random = randomLetter + randomNumber;
  }

  computerHitCollector.push(random);

  return random;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


function Gameboard(player) {
  // From what I know,
  // A Gameboard should loop for five times since there are five ships
  // Now every iteration, the gameboard ask for the values of each ships.
  // The values represent on what coordinate they're in. i.e ship 1 = ['A2', 'B2', 'C2'];
  // After the loop, the game begins
  // Try running some test now

  // Basically in the UI, it should wait for the user to
  // Press where he wants to put his ships.
  // But for now we have to put a fixed coordinates in each ships
  const playerCoordinates = player.getCoordinates();
  const ship1 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(playerCoordinates[0]);
  const ship2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(playerCoordinates[1]);
  const ship3 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(playerCoordinates[2]);
  const ship4 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(playerCoordinates[3]);
  const ship5 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__["default"])(playerCoordinates[4]);

  // From what I know, also from this part
  // If we ever hit any one of them. We check if all of them sunk or not.

  // We return the coordinate attack because it's goign to handle the UI
  function receivedAttack(coordinateAttack) {
    if (ship1.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship2.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship3.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship4.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else if (ship5.hit(coordinateAttack)) {
      return !playerAllShipSunk() ? coordinateAttack : "game-over";
    } else {
      // This is a miss
      return ["miss", coordinateAttack];
    }
  }

  // If all of the value on the ship are less than or equal to 0;
  // This player lose
  function playerAllShipSunk() {
    const allCoordinates = [
      ship1.isSunk(),
      ship2.isSunk(),
      ship3.isSunk(),
      ship4.isSunk(),
      ship5.isSunk(),
    ];

    const shipsValue = allCoordinates.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    if (shipsValue <= 0) {
      return true;
    }
    return false;
  }

  function getPlayerCoordinates() {
    return playerCoordinates;
  }

  return {
    getPlayerCoordinates,
    receivedAttack,
    playerAllShipSunk,
  };
}


/***/ }),

/***/ "./src/HoverChoices.js":
/*!*****************************!*\
  !*** ./src/HoverChoices.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleHover)
/* harmony export */ });
/* harmony import */ var _ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayOfValidation */ "./src/ArrayOfValidation.js");

const playerStartParentGrid = document.getElementById("player-coordinates");
function HandleHover(rotation, index, mode) {
  if (rotation === "horizontal") {
    let validity = playerStartParentGrid.children[index].id;
    if (mode === 0) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 5; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 1) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 4; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 2) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 3) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    } else if (mode === 4) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5HorizontalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + i]) {
            playerStartParentGrid.children[index + i].style.backgroundColor =
              "#1E72EF";
          }
        }
      }
    }
  } else {
    let validity = playerStartParentGrid.children[index].id;
    if (mode === 0) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship1VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 4; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 1) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship2VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 3; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 2) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship3VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 3) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship4VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 2; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    } else if (mode === 4) {
      if (_ArrayOfValidation__WEBPACK_IMPORTED_MODULE_0__.ship5VerticalInValid.includes(validity)) {
        playerStartParentGrid.children[index].style.backgroundColor = "#FF4343";
      } else {
        let indexForVertical = 10;
        for (let i = 0; i < 1; i++) {
          if (playerStartParentGrid.children[index + indexForVertical]) {
            playerStartParentGrid.children[
              index + indexForVertical
            ].style.backgroundColor = "#1E72EF";
            indexForVertical += 10;
          }
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function Player(playerCoordinates = []) {
  // From what I know this guy does also
  // Handles the coordinates and pass the value to his gameboard
  // But also handles the turn

  const coordinates = playerCoordinates;
  let playerTurn = true;

  function changePlayerTurn(value) {
    playerTurn = value;
  }

  function getPlayerTurn() {
    return playerTurn;
  }

  function getCoordinates() {
    return coordinates;
  }

  return {
    getCoordinates,
    getPlayerTurn,
    changePlayerTurn,
  };
}


/***/ }),

/***/ "./src/PlayerChoose.js":
/*!*****************************!*\
  !*** ./src/PlayerChoose.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeShipName": () => (/* binding */ changeShipName),
/* harmony export */   "default": () => (/* binding */ getPlayerCoordinates),
/* harmony export */   "resetMode": () => (/* binding */ resetMode)
/* harmony export */ });
/* harmony import */ var _HoverChoices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverChoices */ "./src/HoverChoices.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _UnHoverChoices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnHoverChoices */ "./src/UnHoverChoices.js");
/* harmony import */ var _Choices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choices */ "./src/Choices.js");




let rotateShip = "horizontal";
let mode = 0;

const startModal = document.getElementById("start-modal");
const shipName = document.getElementById("ship-name");
const playerStartParentGrid = document.getElementById("player-coordinates");
const playerStartBoxes = document.querySelectorAll(".grid-box");
const rotateCoordinate = document.getElementById("rotate-coordinate");
const resetCoordinate = document.getElementById("reset-coordinate");

async function getPlayerCoordinates() {
  return new Promise((resolve, reject) => {
    startModal.style.display = "flex";
    let firstCoordinate = [];
    let secondCoordinate = [];
    let thirdCoordinate = [];
    let fourthCoordinate = [];
    let fifthCoordinate = [];

    resetCoordinate.addEventListener("click", () => {
      mode = 0;
      changeShipName();
      firstCoordinate = [];
      secondCoordinate = [];
      thirdCoordinate = [];
      fourthCoordinate = [];
      fifthCoordinate = [];
      playerStartBoxes.forEach((box) => {
        box.style.backgroundColor = "inherit";
        box.removeAttribute("hascolor");
      });
    });

    playerStartBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "#1E72EF";
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        (0,_HoverChoices__WEBPACK_IMPORTED_MODULE_0__["default"])(rotateShip, index, mode);
      });
      box.addEventListener("mouseleave", () => {
        if (!box.hasAttribute("hascolor")) {
          box.style.backgroundColor = "inherit";
        } else {
          box.style.backgroundColor = "#1E72EF";
        }
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        (0,_UnHoverChoices__WEBPACK_IMPORTED_MODULE_2__["default"])(rotateShip, index, mode);
      });
      box.addEventListener("click", () => {
        const index = Array.from(playerStartParentGrid.children).indexOf(box);
        if (mode === 0) {
          firstCoordinate.length = 0;
          firstCoordinate = (0,_Choices__WEBPACK_IMPORTED_MODULE_3__.HandleFirstShip)(rotateShip, index, firstCoordinate);
          if (firstCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 1) {
          secondCoordinate.length = 0;
          // prettier-ignore
          secondCoordinate = (0,_Choices__WEBPACK_IMPORTED_MODULE_3__.HandleSecondShip)(rotateShip, index, secondCoordinate);
          if (secondCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 2) {
          thirdCoordinate.length = 0;
          thirdCoordinate = (0,_Choices__WEBPACK_IMPORTED_MODULE_3__.HandleThirdShip)(rotateShip, index, thirdCoordinate);
          if (thirdCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 3) {
          fourthCoordinate.length = 0;
          // prettier-ignore
          fourthCoordinate = (0,_Choices__WEBPACK_IMPORTED_MODULE_3__.HandleFourthShip)(rotateShip, index, fourthCoordinate);
          if (fourthCoordinate.length !== 0) {
            mode++;
            changeShipName();
          }
        } else if (mode === 4) {
          fifthCoordinate.length = 0;
          fifthCoordinate = (0,_Choices__WEBPACK_IMPORTED_MODULE_3__.HandleFifthShip)(rotateShip, index, fifthCoordinate);
          if (fifthCoordinate.length !== 0) {
            startModal.style.display = "none";
            resolve([
              firstCoordinate,
              secondCoordinate,
              thirdCoordinate,
              fourthCoordinate,
              fifthCoordinate,
            ]);
          }
        }
      });
    });
  });
}

function changeShipName() {
  if (mode === 0) {
    shipName.textContent = "Ship 1";
  } else if (mode === 1) {
    shipName.textContent = "Ship 2";
  } else if (mode === 2) {
    shipName.textContent = "Ship 3";
  } else if (mode === 3) {
    shipName.textContent = "Ship 4";
  } else if (mode === 4) {
    shipName.textContent = "Ship 5";
  }
}

function resetMode() {
  mode = 0;
}

rotateCoordinate.addEventListener("click", () => {
  rotateShip = rotateShip === "horizontal" ? "vertical" : "horizontal";
});


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(shipArrayCoordinate = [], hits = 0) {
  let shipCoordinate = shipArrayCoordinate;
  let sunk = false;
  const length = shipCoordinate.length;
  let shipHits = hits;

  // From what I know also about this ship is
  // This factory function should have parameter of the hits and the length of the ship

  function hit(attackCoordinate) {
    // On what I know
    // When a computer hits A3 and then in the shipCoordinate array contains that coordinateAttack
    // Our 'hits' will increment
    // If not return a miss

    // And in the gameboard UI, I think... That I don't have to worry about the duplicate coordinate attack?
    // If the coordinate has already been hit I wouldn't let the player hit it again? Right?

    if (shipCoordinate.includes(attackCoordinate)) {
      shipHits += 1;

      return true;
    }

    return false;
  }

  function isSunk() {
    if (shipHits === length) {
      sunk = true;
      return length - getShipHits();
    }

    return length - getShipHits();
  }

  function getShipHits() {
    return shipHits;
  }

  return {
    shipCoordinate,
    length,
    getShipHits,
    hit,
    isSunk,
  };
}


/***/ }),

/***/ "./src/UnHoverChoices.js":
/*!*******************************!*\
  !*** ./src/UnHoverChoices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HandleUnHover)
/* harmony export */ });
const playerStartParentGrid = document.getElementById("player-coordinates");
function HandleUnHover(rotation, index, mode) {
  if (rotation === "horizontal") {
    if (mode === 0) {
      for (let i = 0; i < 5; i++) {
        if (playerStartParentGrid.children[index + i]) {
          playerStartParentGrid.children[index + i].style.backgroundColor =
            "inherit";
        }
      }
    } else if (mode === 1) {
      for (let i = 0; i < 4; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
            playerStartParentGrid.children[index + i].style.backgroundColor =
            "#1E72EF";
          }else{
            playerStartParentGrid.children[index + i].style.backgroundColor =
            "inherit";
          }
        }
      }
    } else if (mode === 2) {
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "#1E72EF";
              }else{
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "inherit";
            }
        }
      }
    } else if (mode === 3) {
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "#1E72EF";
            } else {
                playerStartParentGrid.children[index + i].style.backgroundColor =
                "inherit";
            }
        }
      }
    } else if (mode === 4) {
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + i]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + i].hasAttribute("hascolor")){
                    playerStartParentGrid.children[index + i].style.backgroundColor =
                    "#1E72EF";
                } else {
                    playerStartParentGrid.children[index + i].style.backgroundColor =
                    "inherit";
                }
        }
      }
    }
  } else {
    if (mode === 0) {
      let indexForVertical = 10;
      for (let i = 0; i < 4; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          playerStartParentGrid.children[
            index + indexForVertical
          ].style.backgroundColor = "inherit";
          indexForVertical += 10;
        }
      }
    } else if (mode === 1) {
      let indexForVertical = 10;
      for (let i = 0; i < 3; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
            playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
            "#1E72EF";
          }
          else{
            playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
          }
          indexForVertical += 10;
        }
      }
    } else if (mode === 2) {
      let indexForVertical = 10;
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
              playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
              "#1E72EF";
            }
            else{
              playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
            }
          indexForVertical += 10;
        }
      }
    } else if (mode === 3) {
      let indexForVertical = 10;
      for (let i = 0; i < 2; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
                "#1E72EF";
              }
              else{
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
              }
          indexForVertical += 10;
        }
      }
    } else if (mode === 4) {
      let indexForVertical = 10;
      for (let i = 0; i < 1; i++) {
        if (playerStartParentGrid.children[index + indexForVertical]) {
          // prettier-ignore
          if(playerStartParentGrid.children[index + indexForVertical].hasAttribute("hascolor")){
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor =
                "#1E72EF";
            }else{
                playerStartParentGrid.children[index + indexForVertical].style.backgroundColor = "inherit";
            }
          indexForVertical += 10;
        }
      }
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Game.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundlee84a483b5574ba975e88.js.map