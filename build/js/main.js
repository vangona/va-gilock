(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.screenSize=void 0;var screenSize={vw:0,vh:0};function setScreenSize(){screenSize.vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/100,screenSize.vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/100}exports.screenSize=screenSize,setScreenSize();

},{}],2:[function(require,module,exports){
"use strict";var _scrollEvent=require("./scrollEvent");

},{"./scrollEvent":3}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollEvent=void 0;var _getScreenSize=require("./getScreenSize"),lastScrollY=0,scrollEvent=function(o){var e=window.scrollY,r=e-lastScrollY;lastScrollY=e,Math.abs(r)>5&&e>10&&(r>10&&(console.log(r),moveToProfile()),r<-5&&e<100*_getScreenSize.screenSize.vh-10&&(console.log(r),moveToProgram()))};function moveToProfile(){window.scrollTo({top:100*_getScreenSize.screenSize.vh,behavior:"smooth"})}function moveToProgram(){window.scrollTo({top:0,behavior:"smooth"})}exports.scrollEvent=scrollEvent;

},{"./getScreenSize":1}]},{},[2]);
