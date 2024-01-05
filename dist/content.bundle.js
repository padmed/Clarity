(()=>{"use strict";const t=()=>document.getElementById("rootContainer").shadowRoot.querySelector("#popupContainer"),n=window.getSelection(),e=(t=>{const n=t.getRangeAt(0).getBoundingClientRect(),e=window.innerHeight/2;return n.top+n.height/2<e})(n),{top:o,left:r,bottom:i,right:d}=(t=>{if(t.rangeCount>0){const n=t.getRangeAt(0).getBoundingClientRect();return{top:n.top+window.scrollY,left:n.left+window.scrollX,bottom:n.bottom+window.scrollY,right:n.right+window.scrollX}}})(n),s=e?i+10:o-200-10,p=e?s-100:s+100,a=(r+d)/2-175,l=t=>{const n=document.createElement("div");return n.style.cssText="top"===t?"\n    position: absolute;\n    z-index: 30001;\n    top: 0;\n    height: 15px;\n    width: 100%;\n    background: linear-gradient(to bottom, rgba(27, 18, 18, 0.6), rgba(27, 18, 18, 0) 95%);\n    border-top-right-radius: 7px;\n    border-top-left-radius: 7px;\n":"\n    position: absolute;\n    z-index: 30001;\n    top: 160px;\n    height: 40px;\n    width: 100%;\n    background: linear-gradient(to top, rgba(27, 18, 18, 0.8), rgba(27, 18, 18, 0) 95%);\n    border-bottom-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n",n},c=(window.getSelection(),((t,n,e)=>{const o=document.createElement("div");o.setAttribute("id","popupContainer");const r=e?t-100:t+100;return o.style.cssText=`\n    transform: scale(0);\n    transition: all linear 0.2s;\n    width: 350px;\n    height: 200px;\n    background-color: rgba(27, 18, 18, 0.8);\n    position: absolute;\n    z-index: 30000;\n    border-radius: 7px;\n    backdrop-filter: blur(5px);\n    top: ${r}px;\n    left: ${n}px;\n    box-shadow: 0px 0px 10px rgba(27, 18, 18, 0.7);\n    color: white;\n    `,o})(s,a,e)),g=(t=>{const n=t?"-10px":"185px",e=t?-45:135,o=document.createElement("div");return o.style.cssText=`position: absolute;\n    z-index: 2999;\n    width: 25px;\n    height: 25px;\n    background: rgb(238,174,202);\n    background: linear-gradient(45deg, rgba(238,174,202,0) 55%, rgba(27, 18, 18, 0.8) 58%);\n    left: 175px;\n    top: ${n};\n    transform: rotate(${e}deg);\n    border-radius: 5px;\n    `,o})(e),u=(()=>{const t=document.createElement("p");return t.setAttribute("id","popupContent"),t.style.cssText="color: rgb(249, 246, 238);\n    margin: 0;\n    height: calc(100% - 35px);\n    padding-right: 15px;\n    padding-left: 15px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    font-size: 15px;\n    overflow: scroll;\n    position: relative;\n    ",t})(),b=l("bottom"),x=l("top");c.appendChild(b),c.appendChild(x),c.appendChild(g),c.appendChild(u),(n=>{setTimeout((()=>{const e=t();e.style.transform="scale(1)",e.style.top=`${n}px`}),100)})(s);const m=c;let h=0;const w=n=>{t().contains(n.target)||(h++,("scroll"===n.type&&h>=50||"click"===n.type)&&(()=>{const n=t();n.style.transform="scale(0)",(()=>{const n=t();n.style.transform="scale(0)",n.style.top=`${p}px`})(),setTimeout((()=>{n.remove()}),200),document.removeEventListener("click",w),window.removeEventListener("scroll",w)})())},f=window.getSelection();m.querySelector("#popupContent").innerHTML=f.toString(),document.addEventListener("click",w),window.addEventListener("scroll",w);const y=document.createElement("div");y.setAttribute("id","rootContainer"),document.body.insertAdjacentHTML("afterbegin",y.outerHTML),document.getElementById("rootContainer").attachShadow({mode:"open"}).innerHTML=`\n  ${m.outerHTML}`})();
//# sourceMappingURL=content.bundle.js.map