/* -------------------------------------------------------------------------- */
/*                              SERVICES ACORDION                             */
/* -------------------------------------------------------------------------- */

let services = document.querySelectorAll('.service');

console.log(services)

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
/*                                CREATING LIST                               */
/* -------------------------------------------------------------------------- */

let items = document.querySelectorAll('.adv-examples a');

items.forEach(item =>
  item.addEventListener("click", function(e) {
    e.preventDefault();
    let current = document.querySelector('.adv-examples a.choosen-item');
    if(current != undefined) {
      current.classList.remove('choosen-item');
    }
    if(current != item){
      item.classList.add('choosen-item');
    }
  })
);