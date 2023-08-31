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

const bgDiv = document.createElement('div');
const wrapDiv = document.createElement('figure');
const wrapImg = document.createElement('div');
const closeBtn = document.createElement('span');
bgDiv.classList.add('fig-popup-bg');
wrapDiv.classList.add('active-figure');
wrapImg.classList.add('wrap-img');
closeBtn.classList.add('close-btn');

if (figures.length !== 0) {
  figures.forEach(figure => {
    figure.addEventListener('click', (e)=>{
      e.preventDefault();

      if (e.target.classList.contains('close-btn')){
        return false;
      }
      
      btn = figure.insertBefore(closeBtn, figure.firstChild)
      wrap = document.body.insertBefore(wrapDiv, document.body.firstChild);
      imgWrap =  wrap.appendChild(wrapImg);
      img = imgWrap.appendChild(figure.querySelector('img').cloneNode());
      //     imgCoords = {
      //       'top': img.getBoundingClientRect().y,
      //       'right': img.getBoundingClientRect().x+img.getBoundingClientRect().width,
      //       'bottom': img.getBoundingClientRect().y+img.getBoundingClientRect().height,
      //       'left': img.getBoundingClientRect().x,
      //       'x': img.getBoundingClientRect().x+img.getBoundingClientRect().width/2,
      //       'y': img.getBoundingClientRect().y+img.getBoundingClientRect().height/2
      //     };
      
      // img.addEventListener('mousemove', function(event){
      //   // console.log(imgCoords.left);
      //   if (event.clientX > imgCoords.left && event.clientX < imgCoords.right && event.clientY > imgCoords.top && event.clientY < imgCoords.bottom){
      //     img.style.objectPosition = `${(imgCoords.x/event.clientX-1)*100}px ${(imgCoords.y/event.clientY-1)*100}px`;
      //   }
      // });
      // img.addEventListener("mouseout", function() {
      //   img.style.cssText = "";
      // });
      bg = document.body.insertBefore(bgDiv, document.body.firstChild);

      bg.addEventListener('click', deleteBg);
      btn.addEventListener('click', deleteBg);
    })
  });
}

function deleteBg ()
{
    bg.remove();
    btn.remove();
    img.remove();
    wrap.remove();
}

/* -------------------------------------------------------------------------- */
/*                               PANEL SIGN PAGE                              */
/* -------------------------------------------------------------------------- */

if (document.querySelector('.panel_sign-page') != undefined) {
  
  /* -------------------------------------------------------------------------- */
  /*                                 PAGE SWITHC                                */
  /* -------------------------------------------------------------------------- */

  let switches = document.querySelectorAll('.page-switches a'),
      screens = document.querySelectorAll('.page-content'),
      banners = document.querySelectorAll('section>img');

  if (location.hash) {
    let name = location.hash.slice(1);
    switches.forEach(elem =>
      elem.classList.remove('choosen-switch')
    );
    screens.forEach(screen =>
      screen.classList.remove('choosen-page')
    );
    banners.forEach(banner =>
      banner.style.display = 'none'
    );
    document.querySelector(`.page-switches a[data-name="${name}"]`).classList.add('choosen-switch');
    document.querySelector(`.page-content[data-name="${name}"]`).classList.add('choosen-page');
    document.querySelector(`section>img[data-name="${name}"]`).style.display = 'block';
  }

  switches.forEach(elem =>
    elem.addEventListener('click', function (e){
      e.preventDefault();

      if (this.classList.contains('choosen-switch')) {
        return false;
      } else {
        document.querySelector('.choosen-switch').classList.remove('choosen-switch');
        this.classList.add('choosen-switch');
        
        screens.forEach(screen =>
          screen.classList.toggle('choosen-page')
        );
        banners.forEach(banner =>
          banner.style.display = 'none'
        );
        document.querySelector(`section>img[data-name="${document.querySelector(".choosen-page").getAttribute('data-name')}"]`).style.display = 'block';

        setSlider()
      }
    })
  );

  /* -------------------------------------------------------------------------- */
  /*                                SCROLL SLIDER                               */
  /* -------------------------------------------------------------------------- */
  
// import slider from slider.js;
  setSlider()

  function setSlider(){
    const sliderAdv = new InfinitySlider(".choosen-page .slider", {
      isArrows: true,
      isSlidesToScrollAll: false,
      baseCardWidth: "400rem",
      gap: 20,
      isAutoplay: true,
      autoplaySpeed: 5000,
      transitionCard: "all 1s ease-in-out",
    });
    
    sliderAdv.init();
    window.onresize = function () {
      sliderAdv.init();
    };
  }

}