(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6eTy":function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cpa=function(r,t){var n=(0,a.headingDistanceTo)(r.location,t.location),i=n.distance,l=n.heading,u=i*Math.sin((0,e.degToRad)(l)),m=i*Math.cos((0,e.degToRad)(l)),f={position:{x:0,y:0},vector:{x:r.speed*Math.sin((0,e.degToRad)(r.heading)),y:r.speed*Math.cos((0,e.degToRad)(r.heading))}},c={position:{x:u,y:m},vector:{x:t.speed*Math.sin((0,e.degToRad)(t.heading)),y:t.speed*Math.cos((0,e.degToRad)(t.heading))}};return{time:o(f,c),distance:s(f,c)}},t.cpaTime=o,t.cpaDistance=s;var a=n("RvDl"),e=n("9TDR"),i=1e-8;function o(r,t){var n=f(r.vector,t.vector),a=l(n,n);return a<i?0:-l(f(r.position,t.position),n)/a}function s(r,t){var n=o(r,t);return function(r){return Math.sqrt(l(r,r))}(f(u(r.position,m(n,r.vector)),u(t.position,m(n,t.vector))))}function l(r,t){return r.x*t.x+r.y*t.y}function u(r,t){return{x:r.x+t.x,y:r.y+t.y}}function m(r,t){return{x:r*t.x,y:r*t.y}}function f(r,t){return{x:r.x-t.x,y:r.y-t.y}}},"9TDR":function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.degToRad=function(r){return r*Math.PI/180},t.radToDeg=function(r){return 180*r/Math.PI},t.knotsToMeterPerSecond=function(r){return.514444*r},t.meterPerSecondToKnots=function(r){return r/.514444},t.knotsToKmPerHour=function(r){return 1.852*r},t.kmPerHourToKnots=function(r){return r/1.852}},MBfO:function(r,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n("CcnG"),e=(n("Z+uX"),n("Ip0R")),i=(n("Fzqc"),n("Wf4p"),n("ZYjt"),n("wFw1"),a.sb({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}}));function o(r){return a.Qb(2,[a.Mb(671088640,1,{_primaryValueBar:0}),(r()(),a.ub(1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(r()(),a.ub(2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(r()(),a.ub(3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(r()(),a.ub(4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(r()(),a.ub(5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(r()(),a.ub(6,0,null,null,2,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),a.Lb(512,null,e.C,e.D,[a.k,a.u,a.F]),a.tb(8,278528,null,0,e.q,[e.C],{ngStyle:[0,"ngStyle"]},null),(r()(),a.ub(9,0,[[1,0],["primaryValueBar",1]],null,2,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),a.Lb(512,null,e.C,e.D,[a.k,a.u,a.F]),a.tb(11,278528,null,0,e.q,[e.C],{ngStyle:[0,"ngStyle"]},null),(r()(),a.ub(12,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(r,t){var n=t.component;r(t,8,0,n._bufferTransform()),r(t,11,0,n._primaryTransform())},function(r,t){var n=t.component;r(t,3,0,n.progressbarId),r(t,5,0,n._rectangleFillValue)})}},RvDl:function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EARTH_RADIUS=void 0,t.isEqual=function(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!(!r||!t)&&Math.abs(p(r)-p(t))<=n&&Math.abs(b(r)-b(t))<=n},t.isLatLon=l,t.isLatLng=u,t.isLatitudeLongitude=m,t.isLonLatTuple=f,t.getLocationType=c,t.createLocation=g,t.toLatLon=function(r){if(f(r))return{lat:r[1],lon:r[0]};if(l(r))return{lat:r.lat,lon:r.lon};if(u(r))return{lat:r.lat,lon:r.lng};if(m(r))return{lat:r.latitude,lon:r.longitude};throw new Error("Unknown location format "+JSON.stringify(r))},t.toLatLng=function(r){if(f(r))return{lat:r[1],lng:r[0]};if(l(r))return{lat:r.lat,lng:r.lon};if(u(r))return{lat:r.lat,lng:r.lng};if(m(r))return{lat:r.latitude,lng:r.longitude};throw new Error("Unknown location format "+JSON.stringify(r))},t.toLatitudeLongitude=function(r){if(f(r))return{latitude:r[1],longitude:r[0]};if(l(r))return{latitude:r.lat,longitude:r.lon};if(u(r))return{latitude:r.lat,longitude:r.lng};if(m(r))return{latitude:r.latitude,longitude:r.longitude};throw new Error("Unknown location format "+JSON.stringify(r))},t.toLonLatTuple=d,t.getLongitude=b,t.getLatitude=p,t.moveTo=y,t.headingDistanceTo=h,t.headingTo=function(r,t){return h(r,t).heading},t.distanceTo=v,t.insideBoundingBox=function(r,t){var n=p(r),a=b(r),e=b(t.topLeft),i=p(t.topLeft),o=b(t.bottomRight),s=p(t.bottomRight),l=Math.min(i,s),u=Math.max(i,s),m=Math.min(e,o),f=Math.max(e,o);return a>=m&&a<=f&&n>=l&&n<=u},t.insidePolygon=function(r,t){if(!t||!Array.isArray(t))throw new TypeError("Invalid polygon. Array with locations expected");if(0===t.length)throw new TypeError("Invalid polygon. Non-empty Array expected");return(0,e.default)(d(r),t.map(d))},t.insideCircle=function(r,t,n){return v(t,r)<=n},t.normalizeHeading=function(r){var t=r%360;return t<0&&(t+=360),t>=360&&(t-=360),t},t.normalizeLatitude=M,t.normalizeLongitude=w,t.normalizeLocation=function(r){if(f(r))return[w(r[0]),M(r[1])];if(l(r))return{lat:M(r.lat),lon:w(r.lon)};if(u(r))return{lat:M(r.lat),lng:w(r.lng)};if(m(r))return{latitude:M(r.latitude),longitude:w(r.longitude)};throw new Error("Unknown location format "+JSON.stringify(r))},t.average=function(r){if(!Array.isArray(r)||0===r.length)return null;var t=r[0];return g(k(r.map(p)),k(r.map(b)),c(t))},t.getBoundingBox=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(r)||0===r.length)return{topLeft:null,bottomRight:null};var n=c(r[0]),a=Math.max.apply(Math,o(r.map(p))),e=Math.min.apply(Math,o(r.map(b))),i=Math.min.apply(Math,o(r.map(p))),s=Math.max.apply(Math,o(r.map(b))),l=g(a,e,n),u=g(i,s,n);if(null===t||0===t)return{topLeft:l,bottomRight:u};var m=Math.SQRT2*t;return{topLeft:y(l,{heading:315,distance:m}),bottomRight:y(u,{heading:135,distance:m})}};var a,e=(a=n("cQc6"))&&a.__esModule?a:{default:a},i=n("9TDR");function o(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)}var s=t.EARTH_RADIUS=6378137;function l(r){return!!r&&"number"==typeof r.lat&&"number"==typeof r.lon}function u(r){return!!r&&"number"==typeof r.lat&&"number"==typeof r.lng}function m(r){return!!r&&"number"==typeof r.latitude&&"number"==typeof r.longitude}function f(r){return Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1]}function c(r){if(f(r))return"LonLatTuple";if(l(r))return"LatLon";if(u(r))return"LatLng";if(m(r))return"LatitudeLongitude";throw new Error("Unknown location format "+JSON.stringify(r))}function g(r,t,n){if("LonLatTuple"===n)return[t,r];if("LatLon"===n)return{lat:r,lon:t};if("LatLng"===n)return{lat:r,lng:t};if("LatitudeLongitude"===n)return{latitude:r,longitude:t};throw new Error("Unknown location format "+JSON.stringify(location))}function d(r){if(f(r))return[r[0],r[1]];if(l(r))return[r.lon,r.lat];if(u(r))return[r.lng,r.lat];if(m(r))return[r.longitude,r.latitude];throw new Error("Unknown location format "+JSON.stringify(r))}function b(r){if(f(r))return r[0];if(l(r))return r.lon;if(u(r))return r.lng;if(m(r))return r.longitude;throw new Error("Unknown location format "+JSON.stringify(r))}function p(r){if(f(r))return r[1];if(l(r))return r.lat;if(u(r))return r.lat;if(m(r))return r.latitude;throw new Error("Unknown location format "+JSON.stringify(r))}function y(r,t){var n=p(r),a=b(r),e=t.heading,o=t.distance,l=o*Math.cos((0,i.degToRad)(e))/s,u=o*Math.sin((0,i.degToRad)(e))/(s*Math.cos((0,i.degToRad)(n)));return g(n+(0,i.radToDeg)(l),a+(0,i.radToDeg)(u),c(r))}function h(r,t){var n=p(r),a=b(r),e=p(t),o=b(t),l=(0,i.degToRad)(n),u=(0,i.degToRad)(e),m=(0,i.degToRad)(e-n),f=(0,i.degToRad)(o-a),c=Math.sin(m/2)*Math.sin(m/2)+Math.cos(l)*Math.cos(u)*Math.sin(f/2)*Math.sin(f/2),g=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),d=s*g,y=Math.sin(f)*Math.cos(u),h=Math.cos(l)*Math.sin(u)-Math.sin(l)*Math.cos(u)*Math.cos(f);return{distance:d,heading:(0,i.radToDeg)(Math.atan2(y,h))}}function v(r,t){return h(r,t).distance}function M(r){return Math.asin(Math.sin(r/180*Math.PI))*(180/Math.PI)}function w(r){var t=r%360;return t>180&&(t-=360),t<=-180&&(t+=360),t}function k(r){return function(r){return r.reduce(function(r,t){return r+t},0)}(r)/r.length}},VhxH:function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("9TDR");Object.keys(a).forEach(function(r){"default"!==r&&"__esModule"!==r&&Object.defineProperty(t,r,{enumerable:!0,get:function(){return a[r]}})});var e=n("RvDl");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})});var i=n("6eTy");Object.defineProperty(t,"cpa",{enumerable:!0,get:function(){return i.cpa}})},cQc6:function(r,t){r.exports=function(r,t){for(var n=r[0],a=r[1],e=!1,i=0,o=t.length-1;i<t.length;o=i++){var s=t[i][0],l=t[i][1],u=t[o][1];l>a!=u>a&&n<(t[o][0]-s)*(a-l)/(u-l)+s&&(e=!e)}return e}}}]);