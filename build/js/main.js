(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.screenSize=void 0;var screenSize={vw:0,vh:0};function setScreenSize(){screenSize.vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/100,screenSize.vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/100}exports.screenSize=screenSize,setScreenSize(),window.addEventListener("resize",setScreenSize);

},{}],2:[function(require,module,exports){
"use strict";var _scrollEvent=require("./scrollEvent");window.addEventListener("mousewheel",_scrollEvent.scrollEvent);var lowerArrows=document.querySelectorAll(".arrow-down");console.log(lowerArrows),lowerArrows.forEach(function(e){e.addEventListener("click",_scrollEvent.moveToLower)});

},{"./scrollEvent":3}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scrollEvent=exports.moveToUpper=exports.moveToLower=void 0;var _getScreenSize=require("./getScreenSize"),lastScrollY=0,moveToUpper=function(){window.scrollTo({top:window.scrollY-100*_getScreenSize.screenSize.vh,behavior:"smooth"})};exports.moveToUpper=moveToUpper;var moveToLower=function(){window.scrollTo({top:window.scrollY+100*_getScreenSize.screenSize.vh,behavior:"smooth"})};exports.moveToLower=moveToLower;var scrollEvent=function(e){console.log(e.deltaY),e.deltaY<0&&moveToUpper(),e.deltaY>0&&moveToLower()};exports.scrollEvent=scrollEvent;

},{"./getScreenSize":1}]},{},[2]);
