/* -------------------------------------------------------------------------- */
/*                                  MAIN PAGE                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              SCROLL ANIMATION                              */
/* -------------------------------------------------------------------------- */

let animParent = document.querySelectorAll(".anim-parent"),
    startAnim = window.innerHeight/4*3

checkScroll();
window.addEventListener('scroll', checkScroll);
window.addEventListener('touchmove', checkScroll);
    
function checkScroll (){
  animParent.forEach((e) => {
    if(document.documentElement.scrollTop + startAnim >= e.offsetTop){
      let animLeft = e.querySelectorAll(".animation-left"),
          animRight = e.querySelectorAll(".animation-right"),
          animBottom = e.querySelectorAll(".animation-bottom"),
          animFade = e.querySelectorAll(".animation-fade")
      animLeft.forEach((elem)=>{
        elem.classList.remove("animation-left")  
      })
      animRight.forEach((elem)=>{
        elem.classList.remove("animation-right")  
      })
      animBottom.forEach((elem)=>{
        elem.classList.remove("animation-bottom")  
      })
      animFade.forEach((elem)=>{
        elem.classList.remove("animation-fade")  
      })
    }
  })  
}

/* -------------------------------------------------------------------------- */
/*                            MENU HIDE ON  SCROLL                            */
/* -------------------------------------------------------------------------- */

let header = document.querySelector('header'),
    buttons = header.querySelectorAll('.scroll-btn'),
    previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop,
    btnClick = false;

window.addEventListener('scroll', scrollingMenuHide);
window.addEventListener('touchmove', scrollingMenuHide);

buttons.forEach(btn =>
  btn.addEventListener('click', function() {
    btnClick = true;
    header.classList.remove('showen-menu');
    setTimeout(() => {
      btnClick = false;
    }, 1000);
  })
);

function scrollingMenuHide () 
{
  let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition && currentScrollPosition > header.querySelector('.header-line').offsetHeight) {
    btnClick = false;
    header.classList.remove('showen-menu');
  } else if (btnClick != true) {
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
/*                                FIGURE POPUP                                */
/* -------------------------------------------------------------------------- */

let figures = document.querySelectorAll('figure'),
    bg, btn;

// console.log(bg)

const newDiv = document.createElement('div');
const closeBtn = document.createElement('span');
newDiv.classList.add('fig-popup-bg');
closeBtn.classList.add('close-btn');

if (figures.length !== 0) {
  figures.forEach(figure => {
    figure.addEventListener('click', (e)=>{
      e.preventDefault();

      if (e.target.classList.contains('close-btn')){
        return false;
      }

      btn = figure.insertBefore(closeBtn, figure.firstChild)
      bg = document.body.insertBefore(newDiv, document.body.firstChild);
      figure.classList.add('active-figure'); 

      bg.addEventListener('click', deleteBg);
      btn.addEventListener('click', deleteBg);
    })
  });
}

function deleteBg ()
{
    let currentFigure = document.querySelector('.active-figure');
    if (currentFigure) {
      currentFigure.classList.remove('active-figure');
    }
    bg.remove();
    btn.remove();
}



/* -------------------------------------------------------------------------- */
/*                               PANEL SIGN PAGE                              */
/* -------------------------------------------------------------------------- */

if (document.querySelector('.panel_sign-page') != undefined) {
  
  /* -------------------------------------------------------------------------- */
  /*                                 PAGE SWITHC                                */
  /* -------------------------------------------------------------------------- */

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

  /* -------------------------------------------------------------------------- */
  /*                                SCROLL SLIDER                               */
  /* -------------------------------------------------------------------------- */
  
  let slider = document.querySelector('.fig-slider>div'),
      slideItem = slider.querySelector('figure'),
      arrR = document.querySelector('.arr-right'),
      arrL = document.querySelector('.arr-left'),
      isButtonClicked = false;
  
  arrR.addEventListener('click', function (){
    if (isButtonClicked) return false;
  
    if (slider.scrollLeft + slider.offsetWidth + slideItem.offsetWidth + 20 >= slider.scrollWidth)
    {
      slider.scrollBy(slideItem.offsetWidth+20, 0);
    } else{
      slider.scrollBy(slideItem.offsetWidth, 0);
    }
    isButtonClicked = true;
    setTimeout(() => {
      isButtonClicked = false;
    }, 500);
  });
  
  arrL.addEventListener('click', function (){
    if (isButtonClicked) return false;
    
    slider.scrollBy(-slideItem.offsetWidth, 0);
    isButtonClicked = true;
    setTimeout(() => {
      isButtonClicked = false;
    }, 500);
  });
}
