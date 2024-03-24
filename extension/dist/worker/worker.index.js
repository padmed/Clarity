(()=>{"use strict";const e=new class{constructor(){this.userData=null,this.email=null,this.picture=null,this.freeTrial=null}async initialize(){const{userData:e}=await chrome.storage.sync.get(["userData"]);e?this.updateUserProps(e):this.updateUserProps(null)}async login(){try{const e=await this.getAuthToken(!0),t=await this.getUserCredentials(e),r=await this.sendLoginRequest(t);return this.updateUserProps(r),console.log("Logged in successfully"),this.userData}catch(e){throw console.error("Login error:",e),e}}async logout(){try{const e=await this.getAuthToken(!1);return e?(await this.removeCachedAuthToken(e),await this.revokeToken(e),console.log("Logged out successfully")):console.log("No token found"),this.updateUserProps(null),{response:"ok"}}catch(e){throw console.error("Logout error:",e),e}}async getAuthToken(e){return new Promise(((t,r)=>{chrome.identity.getAuthToken({interactive:e},(e=>{chrome.runtime.lastError?r(chrome.runtime.lastError):t(e)}))}))}async removeCachedAuthToken(e){return new Promise(((t,r)=>{chrome.identity.removeCachedAuthToken({token:e},(()=>{chrome.runtime.lastError?r(chrome.runtime.lastError):t()}))}))}async revokeToken(e){const t=await fetch("https://accounts.google.com/o/oauth2/revoke?token="+e,{method:"GET"});t.ok||console.error("Error revoking token:",t.statusText)}async getUserCredentials(e){const t=await fetch("https://www.googleapis.com/oauth2/v3/userinfo?access_token="+e);if(!t.ok)throw new Error("Failed to fetch user data");return await t.json()}async sendLoginRequest(e){const t=JSON.stringify(e),r=await fetch("http://localhost:3001/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(!r.ok)throw console.error("Login request failed:",r.status),new Error("Login request failed");return await r.json()}updateUserProps(e){if(!e)return this.userData=null,this.email=null,this.picture=null,void(this.freeTrial=null);this.userData=e,this.email=e.email,this.picture=e.picture,this.freeTrial=e.freeTrial}},t="http://localhost:3000",r=`${t}/onboarding/signin`,o=`${t}/onboarding/success`,a=e=>{chrome.tabs.create({url:e},(t=>{console.log("New tab launched with",e)}))},s=async t=>{await e.login(),await chrome.storage.sync.set({userData:e.userData}),t({success:!0})},n=(e,t)=>{console.error(`Error in ${t}:`,e)},i=e=>{try{if("install"!==e.reason&&"update"!==e.reason)return;(()=>{try{chrome.contextMenus.create({title:"Clarity",contexts:["selection"],id:"mfbigjpknmeflcogckmjhpghdjbfpmle"})}catch(e){handleError(e,"createContextMenu")}})(),a(r)}catch(e){n(e,"handleOnInstalled")}},c=async()=>{try{await e.initialize()}catch(e){n(e,"handleOnStartup")}},l=(r,i,c)=>{try{return"signInRequest"===r.message?(async(e,r,n)=>{try{r.origin===t?(await s(n),a(o)):await s(n)}catch(e){n({success:!1}),handleError(e,"signinReq")}})(0,i,c):"logOutRequest"===r.message?(async()=>{await e.logout(),await chrome.storage.sync.set({userData:null})})():"generateText"===r.message&&(async(t,r,o)=>{o(await(async({prompt:e,email:t})=>{try{const r=await fetch("http://localhost:3001/api/ai/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,email:t})});return 402===r.status?"Payment required":(await r.json()).generatedText}catch(e){console.error("There was a problem with the fetch operation:",e)}})({prompt:t.prompt,email:e.email}))})(r,0,c),!0}catch(e){n(e,"handleMessages")}},h=async t=>{try{if("mfbigjpknmeflcogckmjhpghdjbfpmle"===t.menuItemId){if(console.log(e),!e.email)return void a(r);(async()=>{const[e]=await chrome.tabs.query({active:!0,lastFocusedWindow:!0});chrome.scripting.executeScript({target:{tabId:e.id},files:["./content/content.index.js"]})})()}}catch(e){n(e,"onContextMenuClicked")}};(async()=>{try{chrome.runtime.onInstalled.addListener(i),chrome.runtime.onStartup.addListener(c),chrome.contextMenus.onClicked.addListener(h),chrome.runtime.onMessageExternal.addListener(l),chrome.runtime.onMessage.addListener(l)}catch(e){n(e,"main")}})()})();
//# sourceMappingURL=worker.index.js.map