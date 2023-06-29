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
