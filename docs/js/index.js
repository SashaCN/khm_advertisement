let animParent=document.querySelectorAll(".anim-parent"),startAnim=window.innerHeight/4*3;function checkScroll(){animParent.forEach((e=>{if(document.documentElement.scrollTop+startAnim>=e.offsetTop){let t=e.querySelectorAll(".animation-left"),c=e.querySelectorAll(".animation-right"),o=e.querySelectorAll(".animation-bottom"),r=e.querySelectorAll(".animation-fade");t.forEach((e=>{e.classList.remove("animation-left")})),c.forEach((e=>{e.classList.remove("animation-right")})),o.forEach((e=>{e.classList.remove("animation-bottom")})),r.forEach((e=>{e.classList.remove("animation-fade")}))}}))}checkScroll(),window.addEventListener("scroll",checkScroll),window.addEventListener("touchmove",checkScroll);let header=document.querySelector("header"),buttons=header.querySelectorAll(".scroll-btn"),previousScrollPosition=window.pageYOffset||document.documentElement.scrollTop,btnClick=!1;function scrollingMenuHide(){let e=window.pageYOffset||document.documentElement.scrollTop;e>previousScrollPosition&&e>header.querySelector(".header-line").offsetHeight?(btnClick=!1,header.classList.remove("showen-menu")):1!=btnClick&&header.classList.add("showen-menu"),previousScrollPosition=e}window.addEventListener("scroll",scrollingMenuHide),window.addEventListener("touchmove",scrollingMenuHide),buttons.forEach((e=>e.addEventListener("click",(function(){btnClick=!0,header.classList.remove("showen-menu"),setTimeout((()=>{btnClick=!1}),1e3)}))));let burger=document.querySelector(".burger"),menuBg=document.querySelector(".header-line");if(burger.addEventListener("click",(function(e){menuBg.classList.toggle("active-menu")})),menuBg.querySelectorAll("a").forEach((e=>e.addEventListener("click",(()=>{menuBg.classList.remove("active-menu")})))),null!=document.querySelector(".main-page")){let e=document.querySelectorAll(".first-screen .bg img"),t=1;setInterval((()=>{document.querySelector(".first-screen .bg img.active-img").classList.remove("active-img"),e[t].classList.add("active-img"),t==e.length-1?t=0:t++}),5e3),document.querySelectorAll(".service").forEach((e=>e.addEventListener("click",(function(){let t=document.querySelector(".service.showed-desc");null!=t&&t.classList.remove("showed-desc"),t!=e&&e.classList.add("showed-desc")}))));let c=document.querySelector(".adv-list-line");advButtons=c.querySelectorAll("li"),current=c.querySelector("li.choosen-item"),advScreens=document.querySelectorAll(".creating-screen"),advButtons.forEach((e=>e.addEventListener("click",(function(t){t.preventDefault(),current=c.querySelector("li.choosen-item"),screen.width<=1360?e==current?c.classList.toggle("active-menu"):(current.classList.remove("choosen-item"),e.classList.add("choosen-item"),c.classList.remove("active-menu"),e==c.querySelector("li:last-child")?e.previousSibling.classList.add("none"):null!=c.querySelector(".g-line.none")&&c.querySelector(".g-line.none").classList.remove("none")):(null!=current&&current!=e&&current.classList.remove("choosen-item"),current!=e&&e.classList.add("choosen-item")),null!=document.querySelector(".choosen-screen")&&document.querySelector(".choosen-screen").classList.remove("choosen-screen"),advScreens.forEach((function(t){t.getAttribute("data-block-name")===e.getAttribute("data-btn-name")&&t.classList.add("choosen-screen")}))}))))}if(null!=document.querySelector(".panel_sign-page")){document.querySelectorAll(".page-switches a").forEach((e=>e.addEventListener("click",(function(e){if(e.preventDefault(),this.classList.contains("choosen-switch"))return!1;document.querySelector(".choosen-switch").classList.remove("choosen-switch"),this.classList.add("choosen-switch"),document.querySelectorAll(".page-content").forEach((e=>e.classList.toggle("choosen-page")))}))))}let slider=document.querySelector(".fig-slider>div"),slideItem=slider.querySelector("figure"),arrR=document.querySelector(".arr-right"),arrL=document.querySelector(".arr-left"),isButtonClicked=!1;arrR.addEventListener("click",(function(){if(isButtonClicked)return!1;slider.scrollLeft+slider.offsetWidth+slideItem.offsetWidth+20>=slider.scrollWidth?slider.scrollBy(slideItem.offsetWidth+20,0):slider.scrollBy(slideItem.offsetWidth,0),isButtonClicked=!0,setTimeout((()=>{isButtonClicked=!1}),500)})),arrL.addEventListener("click",(function(){if(isButtonClicked)return!1;slider.scrollBy(-slideItem.offsetWidth,0),isButtonClicked=!0,setTimeout((()=>{isButtonClicked=!1}),500)}));