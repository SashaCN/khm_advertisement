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

let advButtons = document.querySelectorAll('.adv-examples a'),
    advScreens = document.querySelectorAll('.creating-screen');

advButtons.forEach(btn => 
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    // changing button

    let current = document.querySelector('.adv-examples a.choosen-item');
    if(current != undefined && current != btn) {
      current.classList.remove('choosen-item');
    }
    if(current != btn){
      btn.classList.add('choosen-item');
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
