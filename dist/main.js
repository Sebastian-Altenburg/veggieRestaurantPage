(()=>{"use strict";!function(){let e=document.querySelector("#content"),t=document.createElement("nav");e.appendChild(t);let s=document.createElement("img"),o=document.createElement("button");o.classList.add("imageButton");let c=document.createElement("div");c.classList.add("imageButtonDiv"),s.src="/images/Vegetarian.svg.png",c.appendChild(o),t.appendChild(c),t.appendChild(s);let d=document.createElement("div");d.setAttribute("class","menuDiv"),t.appendChild(d);let n=document.createElement("div");n.setAttribute("class","menuTab");let l=document.createElement("button");l.setAttribute("class","menuButton"),l.innerHTML="Menu",n.appendChild(l),d.appendChild(n);let a=document.createElement("div");a.setAttribute("class","locationTab");let i=document.createElement("button");i.setAttribute("class","locationButton"),i.innerHTML="Location",a.appendChild(i),d.appendChild(a);let r=document.createElement("div");r.setAttribute("class","aboutTab");let u=document.createElement("button");u.setAttribute("class","aboutButton"),u.innerHTML="About us",r.appendChild(u),d.appendChild(r);let m=document.createElement("div");m.setAttribute("class","contactTab");let h=document.createElement("button");h.setAttribute("class","contactButton"),h.innerHTML="Contact",m.appendChild(h),d.appendChild(m);let L=document.createElement("h1");L.innerHTML="Get your freshest Veggies right here!",t.appendChild(L);let C=document.createElement("div");C.classList.add("startCon","show");let v=document.createElement("div");v.classList.add("menuCon","hide");let p=document.createElement("div");p.classList.add("locationCon","hide");let y=document.createElement("div");y.classList.add("aboutCon","hide");let q=document.createElement("div");q.classList.add("contactCon","hide"),e.appendChild(v),e.appendChild(p),e.appendChild(y),e.appendChild(q),e.appendChild(C)}(),document.querySelector(".menuButton").addEventListener("click",(()=>{!function(){let e=document.querySelector(".contactCon");e.classList.remove("show"),e.classList.add("hide");let t=document.querySelector(".locationCon");t.classList.remove("show"),t.classList.add("hide");let s=document.querySelector(".aboutCon");s.classList.remove("show"),s.classList.add("hide");let o=document.querySelector(".startCon");o.classList.remove("show"),o.classList.add("hide");let c=document.querySelector(".menuCon");c.classList.remove("hide"),c.classList.add("show")}()})),document.querySelector(".locationButton").addEventListener("click",(()=>{!function(){let e=document.querySelector(".menuCon");e.classList.remove("show"),e.classList.add("hide");let t=document.querySelector(".contactCon");t.classList.remove("show"),t.classList.add("hide");let s=document.querySelector(".aboutCon");s.classList.remove("show"),s.classList.add("hide");let o=document.querySelector(".startCon");o.classList.remove("show"),o.classList.add("hide");let c=document.querySelector(".locationCon");c.classList.remove("hide"),c.classList.add("show")}()})),document.querySelector(".aboutButton").addEventListener("click",(()=>{!function(){let e=document.querySelector(".menuCon");e.classList.remove("show"),e.classList.add("hide");let t=document.querySelector(".locationCon");t.classList.remove("show"),t.classList.add("hide");let s=document.querySelector(".contactCon");s.classList.remove("show"),s.classList.add("hide");let o=document.querySelector(".startCon");o.classList.remove("show"),o.classList.add("hide");let c=document.querySelector(".aboutCon");c.classList.remove("hide"),c.classList.add("show")}()})),document.querySelector(".contactButton").addEventListener("click",(()=>{!function(){let e=document.querySelector(".menuCon");e.classList.remove("show"),e.classList.add("hide");let t=document.querySelector(".locationCon");t.classList.remove("show"),t.classList.add("hide");let s=document.querySelector(".aboutCon");s.classList.remove("show"),s.classList.add("hide");let o=document.querySelector(".startCon");o.classList.remove("show"),o.classList.add("hide");let c=document.querySelector(".contactCon");c.classList.remove("hide"),c.classList.add("show")}()})),document.querySelector(".imageButton").addEventListener("click",(()=>{!function(){let e=document.querySelector(".menuCon");e.classList.remove("show"),e.classList.add("hide");let t=document.querySelector(".locationCon");t.classList.remove("show"),t.classList.add("hide");let s=document.querySelector(".contactCon");s.classList.remove("show"),s.classList.add("hide");let o=document.querySelector(".aboutCon");o.classList.remove("show"),o.classList.add("hide");let c=document.querySelector(".startCon");c.classList.add("show"),c.classList.remove("hide")}()}))})();