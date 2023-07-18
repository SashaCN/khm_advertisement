/* -------------------------------------------------------------------------- */
/*                                  MAIN PAGE                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                            MENU HIDE ON  SCROLL                            */
/* -------------------------------------------------------------------------- */

let header = document.querySelector('header'),
    previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop,
    isScrolling = false;

window.addEventListener('scroll', scrollingMenuHide(e));
window.addEventListener('touchmove', scrollingMenuHide(e));

function scrollingMenuHide (e) 
{
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition && currentScrollPosition > header.querySelector('.header-line').offsetHeight) {
    header.classList.remove('showen-menu');
  } else {
    header.classList.add('showen-menu');
  }

  previousScrollPosition = currentScrollPosition;
}

/* -------------------------------------------------------------------------- */
/*                                 BURGER MENU                                */
/* -------------------------------------------------------------------------- */

let burger = document.querySelector('.burger'),
menuBg = document.querySelector('.header-line');
  
  burger.addEventListener('click', function(burger){
    menuBg.classList.toggle('active-menu');
  });
  
  menuBg.querySelectorAll('a').forEach(btn => 
    btn.addEventListener('click', () => {
      menuBg.classList.remove('active-menu');
    })
    );
    
/* -------------------------------------------------------------------------- */
/*                           FIRST SCREEN BG SLIDER                           */
/* -------------------------------------------------------------------------- */

if (document.querySelector('.main-page') != undefined) {

let slides = document.querySelectorAll(".first-screen .bg img"),
    i = 1;

setInterval(() => {
  document.querySelector(".first-screen .bg img.active-img").classList.remove('active-img');
  slides[i].classList.add('active-img');
  if (i == slides.length-1) {
    i = 0;
  } else {
    i++;
  }
}, 5000);


  /* -------------------------------------------------------------------------- */
  /*                              SERVICES ACORDION                             */
  /* -------------------------------------------------------------------------- */
  
  let services = document.querySelectorAll('.service');
  
  services.forEach(service => 
    service.addEventListener("click", function() {
      let current = document.querySelector('.service.showed-desc');
      if(current != undefined) {
        current.classList.remove('showed-desc');
      }
      if(current != service){
        service.classList.add('showed-desc');
      }
    })
  );
  
  /* -------------------------------------------------------------------------- */
  /*                               PARTNERS SLIDER                              */
  /* -------------------------------------------------------------------------- */
  
  
  /* -------------------------------------------------------------------------- */
  /*                                CREATING LIST                               */
  /* -------------------------------------------------------------------------- */
  
  let advMenu = document.querySelector('.adv-list-line')
      advButtons = advMenu.querySelectorAll('li'),
      current = advMenu.querySelector('li.choosen-item')
      advScreens = document.querySelectorAll('.creating-screen');
  
  advButtons.forEach(btn => 
    btn.addEventListener("click", function(e) {
      e.preventDefault();
  
      // changing button
  
      current = advMenu.querySelector('li.choosen-item');
  
      if (screen.width <= 1360){
        if (btn == current) {
          advMenu.classList.toggle("active-menu");
        } else {
          current.classList.remove('choosen-item');
          btn.classList.add('choosen-item');
          advMenu.classList.remove("active-menu");
  
          if (btn == advMenu.querySelector('li:last-child')){
            btn.previousSibling.classList.add("none");
          } else {
            if (advMenu.querySelector('.g-line.none') != undefined) {
              advMenu.querySelector('.g-line.none').classList.remove("none");
            }
          }
        }
      } else {
        if(current != undefined && current != btn) {
          current.classList.remove('choosen-item');
        }
        if(current != btn){
          btn.classList.add('choosen-item');
        }
      }
  
      // changing screen
  
      if (document.querySelector('.choosen-screen') != undefined){
        document.querySelector('.choosen-screen').classList.remove('choosen-screen');
      }
      advScreens.forEach(function (screen){
        if (screen.getAttribute('data-block-name') === btn.getAttribute('data-btn-name')) {
          screen.classList.add('choosen-screen');
        };
      });
    })
  );
}


/* -------------------------------------------------------------------------- */
/*                               PANEL SIGN PAGE                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 PAGE SWITHC                                */
/* -------------------------------------------------------------------------- */

if (document.querySelector('.panel_sign-page') != undefined) {

  let switches = document.querySelectorAll('.page-switches a');

  switches.forEach(elem =>
    elem.addEventListener('click', function (e){
      e.preventDefault();

      if (this.classList.contains('choosen-switch')) {
        return false;
      } else {
        document.querySelector('.choosen-switch').classList.remove('choosen-switch');
        this.classList.add('choosen-switch');

        document.querySelectorAll('.page-content').forEach(screen =>
          screen.classList.toggle('choosen-page')
        );

      }
    })
  );

}