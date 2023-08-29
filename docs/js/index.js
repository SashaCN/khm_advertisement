let animParent=document.querySelectorAll(".anim-parent"),startAnim=window.innerHeight/4*3;function checkScroll(){animParent.forEach((e=>{if(document.documentElement.scrollTop+startAnim>=e.offsetTop){let t=e.querySelectorAll(".animation-left"),n=e.querySelectorAll(".animation-right"),o=e.querySelectorAll(".animation-bottom"),c=e.querySelectorAll(".animation-fade");t.forEach((e=>{e.classList.remove("animation-left")})),n.forEach((e=>{e.classList.remove("animation-right")})),o.forEach((e=>{e.classList.remove("animation-bottom")})),c.forEach((e=>{e.classList.remove("animation-fade")}))}}))}checkScroll(),window.addEventListener("scroll",checkScroll),window.addEventListener("touchmove",checkScroll);let header=document.querySelector("header"),buttons=header.querySelectorAll(".scroll-btn"),previousScrollPosition=window.pageYOffset||document.documentElement.scrollTop,btnClick=!1;function scrollingMenuHide(){let e=window.pageYOffset||document.documentElement.scrollTop;e>previousScrollPosition&&e>header.querySelector(".header-line").offsetHeight?(btnClick=!1,header.classList.remove("showen-menu")):1!=btnClick&&header.classList.add("showen-menu"),previousScrollPosition=e}window.addEventListener("scroll",scrollingMenuHide),window.addEventListener("touchmove",scrollingMenuHide),buttons.forEach((e=>e.addEventListener("click",(function(){btnClick=!0,header.classList.remove("showen-menu"),setTimeout((()=>{btnClick=!1}),1e3)}))));let burger=document.querySelector(".burger"),menuBg=document.querySelector(".header-line");if(burger.addEventListener("click",(function(e){menuBg.classList.toggle("active-menu")})),menuBg.querySelectorAll("a").forEach((e=>e.addEventListener("click",(()=>{menuBg.classList.remove("active-menu")})))),null!=document.querySelector(".main-page")){let e=document.querySelectorAll(".first-screen .bg img"),t=1;setInterval((()=>{document.querySelector(".first-screen .bg img.active-img").classList.remove("active-img"),e[t].classList.add("active-img"),t==e.length-1?t=0:t++}),5e3),document.querySelectorAll(".service").forEach((e=>e.addEventListener("click",(function(){let t=document.querySelector(".service.showed-desc");null!=t&&t.classList.remove("showed-desc"),t!=e&&e.classList.add("showed-desc")}))));let n=document.querySelector(".adv-list-line");advButtons=n.querySelectorAll("li"),current=n.querySelector("li.choosen-item"),advScreens=document.querySelectorAll(".creating-screen"),advButtons.forEach((e=>e.addEventListener("click",(function(t){t.preventDefault(),current=n.querySelector("li.choosen-item"),screen.width<=1360?e==current?n.classList.toggle("active-menu"):(current.classList.remove("choosen-item"),e.classList.add("choosen-item"),n.classList.remove("active-menu"),e==n.querySelector("li:last-child")?e.previousSibling.classList.add("none"):null!=n.querySelector(".g-line.none")&&n.querySelector(".g-line.none").classList.remove("none")):(null!=current&&current!=e&&current.classList.remove("choosen-item"),current!=e&&e.classList.add("choosen-item")),null!=document.querySelector(".choosen-screen")&&document.querySelector(".choosen-screen").classList.remove("choosen-screen"),advScreens.forEach((function(t){t.getAttribute("data-block-name")===e.getAttribute("data-btn-name")&&t.classList.add("choosen-screen")}))}))))}let bg,btn,figures=document.querySelectorAll("figure");const bgDiv=document.createElement("div"),wrapDiv=document.createElement("figure"),wrapImg=document.createElement("div"),closeBtn=document.createElement("span");function deleteBg(){bg.remove(),btn.remove(),img.remove(),wrap.remove()}if(bgDiv.classList.add("fig-popup-bg"),wrapDiv.classList.add("active-figure"),wrapImg.classList.add("wrap-img"),closeBtn.classList.add("close-btn"),0!==figures.length&&figures.forEach((e=>{e.addEventListener("click",(t=>{if(t.preventDefault(),t.target.classList.contains("close-btn"))return!1;btn=e.insertBefore(closeBtn,e.firstChild),wrap=document.body.insertBefore(wrapDiv,document.body.firstChild),wrap.appendChild(wrapImg),img=wrapImg.appendChild(e.querySelector("img").cloneNode()),bg=document.body.insertBefore(bgDiv,document.body.firstChild),bg.addEventListener("click",deleteBg),btn.addEventListener("click",deleteBg)}))})),null!=document.querySelector(".panel_sign-page")){let e=document.querySelectorAll(".page-switches a"),t=document.querySelectorAll(".page-content"),n=document.querySelectorAll("section>img");if(location.hash){let o=location.hash.slice(1);e.forEach((e=>e.classList.remove("choosen-switch"))),t.forEach((e=>e.classList.remove("choosen-page"))),n.forEach((e=>e.style.display="none")),document.querySelector(`.page-switches a[data-name="${o}"]`).classList.add("choosen-switch"),document.querySelector(`.page-content[data-name="${o}"]`).classList.add("choosen-page"),document.querySelector(`section>img[data-name="${o}"]`).style.display="block"}function setSlider(){const e=new InfinitySlider(".choosen-page .slider",{isArrows:!0,isSlidesToScrollAll:!1,baseCardWidth:"400rem",gap:20,isAutoplay:!0,autoplaySpeed:5e3,transitionCard:"all 1s ease-in-out"});e.init(),window.onresize=function(){e.init()}}e.forEach((e=>e.addEventListener("click",(function(e){if(e.preventDefault(),this.classList.contains("choosen-switch"))return!1;document.querySelector(".choosen-switch").classList.remove("choosen-switch"),this.classList.add("choosen-switch"),t.forEach((e=>e.classList.toggle("choosen-page"))),n.forEach((e=>e.style.display="none")),document.querySelector(`section>img[data-name="${document.querySelector(".choosen-page").getAttribute("data-name")}"]`).style.display="block",setSlider()})))),setSlider()}