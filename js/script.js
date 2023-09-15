/* SwiperFeedback
***************************************************************/
// var swiperFeedback = Swiper;
 
// swiperFeedback = new Swiper(".swiperFeedback", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     centeredSlides: true,
//     slideToClickedSlide: true,
//     navigation: {
//       // nextEl: ".swiper-button-next",
//       // prevEl: ".swiper-button-prev",
//     },
//     breakpoints:{
//       0:{
//         slidesPerView: 1,
//       },
  
//       950: {
//         slidesPerView: 3,
//       },
//     },
//   });
  
//   const enableSwiperProducts = function() {
  
//     swiperProducts = new Swiper(".swiperProducts", {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//       loop: true,
//     });
  
//   }; 

/* SwiperProducrs
**************************************************************/
var swiperOurProducts = Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 794px)');
    let tablet = window.matchMedia('(min-width: 795px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiperOurProducts = new Swiper(".swiperOurProducts", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiperOurProducts.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiperOurProducts.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});


const openMenuBtn = document.querySelector('.menu-button');
const closeMenuBtn = document.querySelector('.menu__close-btn');
const menu = document.querySelector('.menu');

function showMenu(){
    menu.classList.add('menu-open');
}
function closeMenu(){
    menu.classList.remove('menu-open');
}

openMenuBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', closeMenu);