var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,o=(e,o)=>{for(var i in o||(o={}))n.call(o,i)&&a(e,i,o[i]);if(t)for(var i of t(o))r.call(o,i)&&a(e,i,o[i]);return e};import{s as i,R as l,r as d,a as c}from"./vendor.a07bfb78.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=i.div`
  border: 2px solid #FFE81F;
  padding: 0.5em 0.5em;
  text-align: center;
  background-color: #04091B;
`,m=i.p`
  font-size: 1.5em;
  font-family: 'Jedi';
  color: #FFE81F;
  margin: 0;
`,p=e=>l.createElement(s,null,l.createElement(m,null,"Score: ",e.score||0));const u=i.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  max-height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`,h=i.img`
  filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.75));
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 3px solid #0038FF;
`,f=e=>{const[t,n]=d.exports.useState(e.image);return l.createElement(u,{"data-id":e.heroID,onClick:e.heroClicked},l.createElement(h,{src:t,alt:"Character's image",onLoad:e=>{const t=e.target.naturalHeight,r=e.target.naturalWidth;171===t&&300===r&&(n("/React-Memory-Game/assets/wildcard.ea528e0d.jpg"),e.target.parentNode.dataset.id="777")}}))},g=i.div``,y=e=>{const t=t=>{e.heroClicked(t.currentTarget.dataset.id)};return l.createElement(g,null,e.heroes.map((e=>l.createElement(f,{heroClicked:t,image:e.image,heroID:e.id,key:e.id}))))},E=i.button`
  font-size: 2em;
  padding: 1% 3%;
  color: white;
  background: #0038FF;
  border: 2px solid #FFFFFF;
  font-weight: 500;
`,b=e=>l.createElement(E,{type:"button",onClick:e.openModal},e.children),v=i.button`
  padding: 1% 8%;
  font-size: 1.5em;
  font-family: 'Jedi';
  color: #121212;
  background: #FFE81F;
  border: 2px solid #FFFFFF;
`,x=e=>l.createElement(v,{type:"button",onClick:e.onClickHandler},e.children);const F=i.div`
  display: flex;
  background: #04091B;
  border: 1px solid #FFE81F;
  align-items: center;
  justify-content: space-around;
  padding: 0.75%;
`,k=i.img`
  max-height: 40%;
  max-width: 40%;
`,w=i.span`
  color: #FFE81F;
  font-size: 1.8em;
  font-family: 'Jedi'
`,C=e=>l.createElement(F,null,l.createElement(k,{src:"/React-Memory-Game/assets/best.406b892c.svg",alt:"Trophy Image"}),l.createElement(w,null,e.score||0," ")),M=i.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`,S=i.div`
  min-width: 30%;
  max-width: 50%;
  font-size: 1.5em;
  padding: 0% 1%;
  min-height: 20%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: #04091b;
  color: white;
  border: 1px solid #ffe81f;
  && h5{
    margin-bottom: 5%;
  }
`,j=i.button`
  padding: 1% 10%;
  font-size: 0.8em;
  font-family: 'Jedi';
  color: #121212;
  background: #FFE81F;
  border: 2px solid #FFFFFF;
  margin-bottom: 3%;
`,z=e=>l.createElement(l.Fragment,null,l.createElement(M,{onClick:e.closeModal}),l.createElement(S,null,l.createElement("h5",null,"Click the heroes you haven’t clicked yet to get points. You lose when you click the same hero twice."),l.createElement(j,{onClick:e.closeModal},"ok"))),O=i.div`
    color: white;
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }
  && div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  && div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
  && div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  && div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  && div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  && div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  && div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  && div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  && div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  && div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  && div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  && div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  && div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  && div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`,I=()=>l.createElement(O,{id:"spinner"},l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null),l.createElement("div",null));function L(){const[e,t]=d.exports.useState([]),[n,r]=d.exports.useState(!1),[a,i]=d.exports.useState({}),[c,s]=d.exports.useState(0),[m,u]=d.exports.useState(0),[h,f]=d.exports.useState(!1),[g,E]=d.exports.useState(!1),v=e=>{let t,n=e.length;for(;n;)t=Math.floor(Math.random()*n--),[e[t],e[n]]=[e[n],e[t]];return e};d.exports.useEffect((async()=>{try{r(!0);const e=await fetch("https://akabab.github.io/starwars-api/api/all.json");let n=await e.json();n=v(n).slice(0,15),t(n)}catch(e){console.log(e.message)}r(!1)}),[h]);const F=()=>{E((e=>!e))},k=()=>{f((e=>!e))};return l.createElement("div",{className:"App"},g&&l.createElement(z,{closeModal:F}),l.createElement("header",null,l.createElement(p,{score:c})),l.createElement("main",null,n&&l.createElement(I,null),!n&&l.createElement(y,{heroClicked:e=>{a[e]?(u((e=>Math.max(c,e))),s(0),i({}),k()):(s((e=>e+1)),i((t=>o(o({},t),{[e]:!0}))),t((e=>v(e))))},heroes:e})),l.createElement("footer",null,l.createElement(b,{openModal:F},"i"),l.createElement(x,{onClickHandler:k},"Refresh"),l.createElement(C,{score:m})))}c.render(l.createElement(l.StrictMode,null,l.createElement(L,null)),document.getElementById("root"));
