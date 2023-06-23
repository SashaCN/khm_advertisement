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
