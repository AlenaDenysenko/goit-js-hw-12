import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const d="43242010-d57d11c2b31adad8bcda7c968";document.getElementById("loader");async function u(r){const o=`https://pixabay.com/api/?key=${d}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(o);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}catch(t){return console.error("Error fetching images:",t),[]}}function f(){const r=document.querySelector(".gallery");r.innerHTML=""}function m(r){const o=document.querySelector(".gallery");r.forEach(s=>{const e=p(s);o.appendChild(e)}),new l(".gallery a",{}).refresh()}function p(r){const o=document.createElement("div");o.classList.add("card");const t=document.createElement("img");t.src=r.webformatURL,t.alt=r.tags;const s=document.createElement("a");s.href=r.largeImageURL,s.appendChild(t),o.appendChild(s);const e=document.createElement("div");return e.classList.add("card-info"),e.innerHTML=`
    <p>Likes: ${r.likes}</p>
    <p>Views: ${r.views}</p>
    <p>Comments: ${r.comments}</p>
    <p>Downloads: ${r.downloads}</p>
  `,o.appendChild(e),o}const y=document.querySelector("#search-form"),h=document.querySelector("#search-input"),i=document.querySelector(".loader");y.addEventListener("submit",async function(r){r.preventDefault();const o=h.value.trim();if(o){f(),i.style.display="block";try{const t=await u(o);t.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):m(t)}catch(t){console.error("Error fetching images:",t),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{i.style.display="none"}}});
//# sourceMappingURL=commonHelpers.js.map
