(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){const e=document.createElement("main");e.classList.add("main");const t=document.createElement("div");return t.classList.add("menu"),t.append(n("Main Dishes"),function(){const e=document.createElement("div");e.classList.add("main-dish","dishes");const t=document.createElement("img");t.src="/dist/images/dish.png";const n=document.createElement("div");return n.append(s("Yakitori","$1.00","small skewers of bite-size chicken pieces seasoned with salt or brushed with a sauce"),s("Tempura","$1.00","pieces or slices of meat, fish, and/or vegetables, covered in a special tempura batter and deep fried until crunchy and pale gold"),s("Sashimi","$1.00"," raw fish or meat that has been expertly cut into thin slices and typically comes served with daikon radish, pickled ginger, wasabi and soy sauce"),s("Tonkatsu","$1.00","crisp panko breadcrumbs coated pork chops, deep-fried  until golden brown")),e.append(t,n),e}(),n("Desserts"),function(){const e=document.createElement("div");e.classList.add("desserts","dishes");const t=document.createElement("img");t.src="/dist/images/dessert.png";const n=document.createElement("div");return n.append(s("Kashi Pan","$1.00","buns stuffed with jam, or a soft filling of chocolate cream "),s("Wagashi","$1.00"," traditional Japanese confections, made from various types of rice or wheat flour, sugar, nuts, beans and starches"),s("Dorayaki","$1.00","honey pancakes filled with sweet red bean paste ")),e.append(n,t),e}(),n("Drinks"),function(){const e=document.createElement("div");e.classList.add("drinks","dishes");const t=document.createElement("img");t.src="/dist/images/drinks.png";const n=document.createElement("div");return n.append(s("Ramune","$1.00","carbonated soda that comes in a variety of different flavors, served in its distinctly-shaped glass bottle for a refreshing summer treat. "),s("Japanese Sake","$1.00","rice wine that is made from rice, rice koji, and water. "),s("Japanese Whisky","$1.00","japanese version of whisky ")),e.append(t,n),e}()),e.appendChild(t),e}function n(e){const t=document.createElement("h2");return t.classList.add("dish-type"),t.textContent=e,t}function s(e,t,n){const s=document.createElement("div");s.classList.add("dish");const a=document.createElement("div"),c=document.createElement("h3");c.classList.add("dish-name"),c.textContent=e;const o=document.createElement("p");o.classList.add("dish-price"),o.textContent=t,a.append(c,o);const i=document.createElement("p");return i.classList.add("dish-description"),i.textContent=n,s.append(a,i),s}function a(){const e=document.createElement("main");e.classList.add("main");const n=document.createElement("div");n.classList.add("home");const s=document.createElement("p");return s.classList.add("description"),s.textContent="Baryo-Fiesta offers an authentic Filipino dining experience.",n.append(s,function(e,n){const s=document.createElement("button");return s.classList.add("btn-menu"),s.textContent="See Menu",s.addEventListener("click",(()=>{o(t())})),s}()),e.appendChild(n),e}e.d({},{Z:()=>o});const c=document.querySelector("#content");function o(e){document.querySelector("main").remove(),c.append(e)}!function(e){e.append(function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Baryo-Fiesta",t.classList.add("logo");const n=document.createElement("button");return n.classList.add("show-nav"),n.innerHTML='<i class="material-icons">menu</i>',e.append(t,function(){const e=document.createElement("nav");e.classList.add("navbar");const t=document.createElement("ul");t.classList.add("nav-links");for(let e=0;e<3;e++){const e=document.createElement("button");e.classList.add("link"),t.appendChild(e)}const n=Array.from(t.children);return n[0].textContent="Home",n[1].textContent="Menu",n[2].textContent="Contact",e.appendChild(t),e}(),n),e}(),a(),function(){const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Photo by Danis Lou on Unsplash",e.appendChild(t),e}())}(c),function(){const e=Array.from(document.querySelectorAll(".link"));console.log(c.children),e.forEach((e=>{e.addEventListener("click",(()=>{"Home"===e.textContent&&o(a()),"Menu"===e.textContent&&o(t()),"Contact"===e.textContent&&alert("Contact")}))}))}();const i=document.querySelector(".show-nav");i.addEventListener("click",(function(){const e=document.querySelector(".nav-links");"none"===e.style.display?(e.style.display="flex",i.innerHTML='<i class="material-icons">close</i>'):(e.style.display="none",i.innerHTML='<i class="material-icons">menu</i>')}))})();