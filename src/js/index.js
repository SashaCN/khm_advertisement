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
      console.log(btn.getAttribute('data-btn-name'))
      if (btn == current) {
        advMenu.classList.toggle("active-menu");
      } else {
        current.classList.remove('choosen-item');
        btn.classList.add('choosen-item');
        advMenu.classList.remove("active-menu");
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
