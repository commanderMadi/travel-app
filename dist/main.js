!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);const o=document.getElementById("city_name"),r=document.getElementById("generate");let l=new Date,c=l.getMonth()+"."+l.getDate()+"."+l.getFullYear();r.addEventListener("click",(function(e){o.innerHTML="",document.getElementById("lat").textContent="lat: ",document.getElementById("lng").textContent="lng: ",a()}));const a=()=>{console.log("ka boom"),((e="")=>(console.log(e),fetch(e).then(e=>e.json()).catch(e=>{console.log(e)})))(`http://api.geonames.org/searchJSON?q=${o.value}&maxRows=1&username=cmadi`).then(e=>{((e="",t={})=>{fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()).catch(e=>console.log(e))})("/add",{date:c,lat:e.geonames[0].lat,lng:e.geonames[0].lng,userResponse:o.value}),u("/all")})},u=(e="")=>fetch(e).then(e=>e.json()).then(e=>{console.log(e),document.getElementById("lat").textContent+=e.lat,document.getElementById("lng").textContent+=e.lng,document.getElementById("date").innerHTML=e.date,document.getElementById("content").innerHTML=e.userResponse}).catch(e=>console.log(e));n(0);n.d(t,"getThenPost",(function(){return a}))}]);