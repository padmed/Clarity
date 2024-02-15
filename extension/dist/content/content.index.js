(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){return function(){return e.apply(t,arguments)}}e.r(t),e.d(t,{hasBrowserEnv:()=>te,hasStandardBrowserEnv:()=>ne,hasStandardBrowserWebWorkerEnv:()=>oe});const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,i=(s=Object.create(null),e=>{const t=r.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())});var s;const a=e=>(e=e.toLowerCase(),t=>i(t)===e),c=e=>t=>typeof t===e,{isArray:l}=Array,u=c("undefined"),d=a("ArrayBuffer"),f=c("string"),p=c("function"),h=c("number"),m=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=a("Date"),y=a("File"),w=a("Blob"),E=a("FileList"),O=a("URLSearchParams");function x(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function S(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,v=e=>!u(e)&&e!==R,T=(A="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>A&&e instanceof A);var A;const C=a("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),N=a("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},F="abcdefghijklmnopqrstuvwxyz",L="0123456789",B={DIGIT:L,ALPHA:F,ALPHA_DIGIT:F+F.toUpperCase()+L},_=a("AsyncFunction"),k={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=i(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:f,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:g,isUndefined:u,isDate:b,isFile:y,isBlob:w,isRegExp:N,isFunction:p,isStream:e=>m(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:T,isFileList:E,forEach:x,merge:function e(){const{caseless:t}=v(this)&&this||{},n={},r=(r,o)=>{const i=t&&S(n,o)||o;g(n[i])&&g(r)?n[i]=e(n[i],r):g(r)?n[i]=e({},r):l(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],r);return n},extend:(e,t,r,{allOwnKeys:o}={})=>(x(t,((t,o)=>{r&&p(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:S,global:R,isContextDefined:v,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return x(e,((e,t)=>{const i=n(e,r+1);!u(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:_,isThenable:e=>e&&(m(e)||p(e))&&p(e.then)&&p(e.catch)};function U(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}k.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const D=U.prototype,I={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{I[e]={value:e}})),Object.defineProperties(U,I),Object.defineProperty(D,"isAxiosError",{value:!0}),U.from=(e,t,n,r,o,i)=>{const s=Object.create(D);return k.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),U.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const q=U;function M(e){return k.isPlainObject(e)||k.isArray(e)}function z(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=z(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const $=k.toFlatObject(k,{},null,(function(e){return/^is[A-Z]/.test(e)})),J=function(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!k.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(k.isDate(e))return e.toISOString();if(!a&&k.isBlob(e))throw new q("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(e)||k.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(k.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(k.isArray(e)&&function(e){return k.isArray(e)&&!e.some(M)}(e)||(k.isFileList(e)||k.endsWith(n,"[]"))&&(a=k.toArray(e)))return n=z(n),a.forEach((function(e,r){!k.isUndefined(e)&&null!==e&&t.append(!0===s?H([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!M(e)||(t.append(H(o,n,i),c(e)),!1)}const u=[],d=Object.assign($,{defaultVisitor:l,convertValue:c,isVisitable:M});if(!k.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!k.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),k.forEach(n,(function(n,i){!0===(!(k.isUndefined(n)||null===n)&&o.call(t,n,k.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function V(e,t){this._pairs=[],e&&J(e,this,t)}const K=V.prototype;K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const G=V;function X(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Y(e,t,n){if(!t)return e;const r=n&&n.encode||X,o=n&&n.serialize;let i;if(i=o?o(t,n):k.isURLSearchParams(t)?t.toString():new G(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Q=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:G,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},te="undefined"!=typeof window&&"undefined"!=typeof document,ne=(re="undefined"!=typeof navigator&&navigator.product,te&&["ReactNative","NativeScript","NS"].indexOf(re)<0);var re;const oe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,ie={...t,...ee},se=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&k.isArray(r)?r.length:i,a?(k.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&k.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&k.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,((e,r)=>{t(function(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},ae={transitional:Z,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=k.isObject(e);if(o&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r&&r?JSON.stringify(se(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return J(e,new ie.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ie.isNode&&k.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=k.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return J(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(k.isString(e))try{return(0,JSON.parse)(e),k.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ae.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&k.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw q.from(e,q.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],(e=>{ae.headers[e]={}}));const ce=ae,le=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ue=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function fe(e){return!1===e||null==e?e:k.isArray(e)?e.map(fe):String(e)}function pe(e,t,n,r,o){return k.isFunction(r)?r.call(this,t,n):(o&&(t=n),k.isString(t)?k.isString(r)?-1!==t.indexOf(r):k.isRegExp(r)?r.test(t):void 0:void 0)}class he{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=de(t);if(!o)throw new Error("header name must be a non-empty string");const i=k.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=fe(e))}const i=(e,t)=>k.forEach(e,((e,n)=>o(e,n,t)));return k.isPlainObject(e)||e instanceof this.constructor?i(e,t):k.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&le[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=de(e)){const n=k.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(k.isFunction(t))return t.call(this,e,n);if(k.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=de(e)){const n=k.findKey(this,e);return!(!n||void 0===this[n]||t&&!pe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=de(e)){const o=k.findKey(n,e);!o||t&&!pe(0,n[o],o,t)||(delete n[o],r=!0)}}return k.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!pe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return k.forEach(this,((r,o)=>{const i=k.findKey(n,o);if(i)return t[i]=fe(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=fe(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&k.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ue]=this[ue]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=de(e);t[r]||(function(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}}he.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),k.reduceDescriptors(he.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),k.freezeMethods(he);const me=he;function ge(e,t){const n=this||ce,r=t||n,o=me.from(r.headers);let i=r.data;return k.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function be(e){return!(!e||!e.__CANCEL__)}function ye(e,t,n){q.call(this,null==e?"canceled":e,q.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(ye,q,{__CANCEL__:!0});const we=ye,Ee=ie.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),k.isString(r)&&s.push("path="+r),k.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Oe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const xe=ie.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=k.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Se(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Re={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=me.from(e.headers).normalize();let i,s,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}if(k.isFormData(r))if(ie.hasStandardBrowserEnv||ie.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(s=o.getContentType())){const[e,...t]=s?s.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const d=Oe(e.baseURL,e.url);function f(){if(!u)return;const r=me.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),Y(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new q("Request aborted",q.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new q("Network Error",q.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new q(t,r.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,e,u)),u=null},ie.hasStandardBrowserEnv&&(c&&k.isFunction(c)&&(c=c(e)),c||!1!==c&&xe(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Ee.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&k.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),k.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",Se(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{u&&(n(!t||t.type?new we(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===ie.protocols.indexOf(p)?n(new q("Unsupported protocol "+p+":",q.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};k.forEach(Re,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const ve=e=>`- ${e}`,Te=e=>k.isFunction(e)||null===e||!1===e,Ae=e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Te(n)&&(r=Re[(t=String(n)).toLowerCase()],void 0===r))throw new q(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(ve).join("\n"):" "+ve(e[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new we(null,e)}function je(e){return Ce(e),e.headers=me.from(e.headers),e.data=ge.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ae(e.adapter||ce.adapter)(e).then((function(t){return Ce(e),t.data=ge.call(e,e.transformResponse,t),t.headers=me.from(t.headers),t}),(function(t){return be(t)||(Ce(e),t&&t.response&&(t.response.data=ge.call(e,e.transformResponse,t.response),t.response.headers=me.from(t.response.headers))),Promise.reject(t)}))}const Ne=e=>e instanceof me?e.toJSON():e;function Pe(e,t){t=t||{};const n={};function r(e,t,n){return k.isPlainObject(e)&&k.isPlainObject(t)?k.merge.call({caseless:n},e,t):k.isPlainObject(t)?k.merge({},t):k.isArray(t)?t.slice():t}function o(e,t,n){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!k.isUndefined(t))return r(void 0,t)}function s(e,t){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Ne(e),Ne(t),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);k.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Fe={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Fe[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Le={};Fe.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new q(r(o," has been removed"+(t?" in "+t:"")),q.ERR_DEPRECATED);return t&&!Le[o]&&(Le[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const Be={assertOptions:function(e,t,n){if("object"!=typeof e)throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new q("option "+i+" must be "+n,q.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}},validators:Fe},_e=Be.validators;class ke{constructor(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Pe(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Be.assertOptions(n,{silentJSONParsing:_e.transitional(_e.boolean),forcedJSONParsing:_e.transitional(_e.boolean),clarifyTimeoutError:_e.transitional(_e.boolean)},!1),null!=r&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:Be.assertOptions(r,{encode:_e.function,serialize:_e.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&k.merge(o.common,o[t.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=me.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[je.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=je.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return Y(Oe((e=Pe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],(function(e){ke.prototype[e]=function(t,n){return this.request(Pe(n||{},{method:e,url:t,data:(n||{}).data}))}})),k.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Pe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ke.prototype[e]=t(),ke.prototype[e+"Form"]=t(!0)}));const Ue=ke;class De{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new we(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new De((function(t){e=t})),cancel:e}}}const Ie=De,qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qe).forEach((([e,t])=>{qe[t]=e}));const Me=qe,ze=function e(t){const r=new Ue(t),o=n(Ue.prototype.request,r);return k.extend(o,Ue.prototype,r,{allOwnKeys:!0}),k.extend(o,r,null,{allOwnKeys:!0}),o.create=function(n){return e(Pe(t,n))},o}(ce);ze.Axios=Ue,ze.CanceledError=we,ze.CancelToken=Ie,ze.isCancel=be,ze.VERSION="1.6.2",ze.toFormData=J,ze.AxiosError=q,ze.Cancel=ze.CanceledError,ze.all=function(e){return Promise.all(e)},ze.spread=function(e){return function(t){return e.apply(null,t)}},ze.isAxiosError=function(e){return k.isObject(e)&&!0===e.isAxiosError},ze.mergeConfig=Pe,ze.AxiosHeaders=me,ze.formToJSON=e=>se(k.isHTMLForm(e)?new FormData(e):e),ze.getAdapter=Ae,ze.HttpStatusCode=Me,ze.default=ze;const He=ze,$e=e=>{},Je={"Content-Type":"application/json",Authorization:"Bearer 40xWby26Fb2w295NMSXdJRtWbVsgWqgd"},We=200,Ve="popupContainer",Ke="popupContent",Ge="rootContainer",Xe="loader",Ye=(e,t,n)=>{const r=e.getElementById(t);return r||$e(n),r},Qe=()=>document.getElementById(Ge)||($e("Root container not found"),null),Ze=()=>{const e=Qe();return e?e.shadowRoot:null},et=()=>{const e=Ze();return e?Ye(e,Ve,"Popup container not found in shadow root"):null},tt=()=>{const e=Ze();return e?Ye(e,Ke,"Popup content not found in shadow root"):null},nt=window.getSelection(),rt=(e=>{const t=e.getRangeAt(0).getBoundingClientRect(),n=window.innerHeight/2;return t.top+t.height/2<n})(nt),{top:ot,left:it,bottom:st,right:at}=(e=>{if(e.rangeCount>0){const t=e.getRangeAt(0).getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,bottom:t.bottom+window.scrollY,right:t.right+window.scrollX}}})(nt),ct=((e,t,n)=>{const r=window.scrollY||window.pageYOffset,o=r+window.innerHeight,i=o<n+We;if(i&&e)return o-We-100;if(r>t-We&&i)return r+We+100;const s=e?10:-210;return e?n+s:t+s})(rt,ot,st),lt=rt?ct-100:ct+100,ut=(it+at)/2-175,dt=lt,ft=()=>{const e=tt();e&&(e.querySelector(`.${Xe}`).style.transform="scale(0)")};let pt=!1,ht=0;const mt=()=>{const e=Qe(),t=et();(()=>{const e=et();e.style.transform="scale(0)",e.style.top=`${dt}px`})(),setTimeout((()=>{e.remove()}),200),document.removeEventListener("click",yt),window.removeEventListener("scroll",yt),t.removeEventListener("mouseover",gt),t.removeEventListener("mouseout",bt)},gt=()=>{pt=!0},bt=()=>{pt=!1},yt=e=>{const t=Ze();e.target.shadowRoot===t||pt||(ht++,("scroll"===e.type&&ht>=50||"click"===e.type)&&mt())},wt=e=>{const t=document.createElement("span");return t.style.cssText=`\n    height: 2px;\n    background-color: white;\n    position: absolute;\n    top: 15px;\n    border-radius: 10px 10px 10px 10px;\n    ${e};\n  `,t},Et=e=>{const t=tt();if(!t)return void $e("Popup content not found");let n=0;const r=(()=>{const e=document.createElement("h3");e.innerText="Clarified",e.style.cssText="\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin-left: 70px;\n    margin-bottom: 14px;";const t=wt("\n    width: 60px;\n    margin-left: 10px;\n    left: -80px;"),n=wt("\n    width: 150px;\n    margin-left: 20px;\n    left: 70px;");return e.appendChild(t),e.appendChild(n),e})();if(!r)return void $e("Failed to create heading");t.appendChild(r);const o=()=>{if(n<e.length){let r=e.charAt(n);t.innerHTML+=r,n++,setTimeout(o,2)}};o()},Ot=e=>{const t=document.createElement("div");return t.style.cssText="top"===e?"\n    position: absolute;\n    z-index: 30001;\n    top: 0;\n    height: 15px;\n    width: 100%;\n    background: linear-gradient(to bottom, rgba(27, 18, 18, 0.6), rgba(27, 18, 18, 0) 95%);\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n":"\n    position: absolute;\n    z-index: 30001;\n    top: 160px;\n    height: 40px;\n    width: 100%;\n    background: linear-gradient(to top, rgba(27, 18, 18, 0.8), rgba(27, 18, 18, 0) 95%);\n    border-bottom-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n",t},xt=(e=>{const t=e?"-10px":"185px",n=e?-45:135,r=document.createElement("div");return r.style.cssText=`position: absolute;\n    z-index: 2999;\n    width: 25px;\n    height: 25px;\n    background: rgb(238,174,202);\n    background: linear-gradient(45deg, rgba(238,174,202,0) 55%, rgba(27, 18, 18, 0.8) 58%);\n    left: 170px;\n    top: ${t};\n    transform: rotate(${n}deg);\n    border-radius: 5px;\n    `,r})(rt),St=(()=>{const e=document.createElement("div");return e.setAttribute("id",Ke),e.style.cssText="color: rgb(249, 246, 238);\n    margin: 0;\n    height: calc(100% - 35px);\n    padding-right: 15px;\n    padding-left: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-size: 17px;\n    overflow: scroll;\n    position: relative;\n    font-family: 'EB Garamond', serif;\n    line-height: 22px;\n    ",e})(),Rt=Ot("bottom"),vt=Ot("top"),Tt=(e=>{const t=document.createElement("div");return t.setAttribute("id",Ve),t.style.cssText=`\n    transform: scale(0);\n    transition: all linear 0.2s;\n    width: 350px;\n    height: 200px;\n    background-color: rgba(27, 18, 18, 0.8);\n    position: absolute;\n    z-index: 30000;\n    border-radius: 7px;\n    backdrop-filter: blur(5px);\n    top: ${lt}px;\n    left: ${e}px;\n    box-shadow: 0px 0px 10px rgba(27, 18, 18, 0.7);\n    color: white;\n    `,t})(ut);Tt.appendChild(Rt),Tt.appendChild(vt),Tt.appendChild(xt),Tt.appendChild(St);const At=Tt;Qe()&&mt(),(()=>{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap",document.head.appendChild(e)})(),(()=>{const e=document.createElement("div");e.setAttribute("id",Ge),document.body.insertAdjacentHTML("afterbegin",e.outerHTML)})(),(()=>{const e=`\n  .${Xe} {\n  width: 35px;\n  aspect-ratio: 1;\n  display: grid;\n  transition: all linear 0.1s;\n  position: absolute;\n  top: 80px;\n  left: 160px;\n\n}\n.${Xe}:before,\n.${Xe}:after {\n  content: "";\n  grid-area: 1/1;\n  border-radius: 50%;\n  background: #FFFFFF;\n  -webkit-mask:repeating-linear-gradient(#000 0 5px,#0000 0 10px);\n  animation: l35 1.5s infinite;\n}\n.${Xe}:after {\n  -webkit-mask:repeating-linear-gradient(#0000 0 5px,#000 0 10px);\n  --s:-1;\n}\n@keyframes l35 {\n  0%,\n  10% {transform: translate(0) rotate(0)}\n  35% {transform: translate(calc(var(--s,1)*50%)) rotate(0)}\n  66% {transform: translate(calc(var(--s,1)*50%)) rotate(calc(var(--s,1)*180deg))}\n  90%,\n  100% {transform: translate(0) rotate(calc(var(--s,1)*180deg))}\n}`;document.getElementById(Ge).attachShadow({mode:"open"}).innerHTML=`\n  <style>\n    ${e}\n  </style>\n  ${At.outerHTML}`})(),(()=>{const e=et();document.addEventListener("click",yt),window.addEventListener("scroll",yt),e.addEventListener("mouseover",gt),e.addEventListener("mouseout",bt)})(),(e=>{setTimeout((()=>{const t=et();t.style.transform="scale(1)",t.style.top=`${e}px`}),200)})(ct),(()=>{const e=tt();if(e){const t=(()=>{const e=document.createElement("div");return e.className=Xe,e})();e.appendChild(t)}})(),(async e=>{const t={input:`[INST] <<SYS>> You are a science communicator, your task is to read the following\n            text snippet and describe its content in a simple, short, and understandable way,\n            ensuring clarity for a general audience <<SYS>> ${window.getSelection().toString()}[/INST]`};try{return(await He.post("https://api.deepinfra.com/v1/inference/meta-llama/Llama-2-70b-chat-hf",t,{headers:Je})).data}catch(e){return $e("Error:",e),e}})().then((e=>{ft();const t=e.results[0].generated_text;Et(t)})).catch((e=>{ft(),Et("Temporary out of service"),$e(e)}))})();
//# sourceMappingURL=content.index.js.map