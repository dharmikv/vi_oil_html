var swiper = new Swiper(".hero-section-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".tesimonial-slider", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: "20%",
      slidesPerView: 2,
    },
  },
  spaceBetween: "20%",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".product-swiper", {
  loop: true,
  slidesPerView: 1,
  effect: "fade", 
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination", 
    clickable: true, 
  },
});

var swiper = new Swiper(".timeline-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    640:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
    1280:{
      slidesPerView:4
    },
    1440:{
      slidesPerView:4
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#moving-circle", {
  scrollTrigger: {
      trigger: ".timeline-section",
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: self => {
          const movingCircle = document.querySelector("#moving-circle");
          const movingCircleRect = movingCircle.getBoundingClientRect();

          document.querySelectorAll(".year-info").forEach(yearInfo => {
              const yearInfoRect = yearInfo.getBoundingClientRect();
              
              // Check overlap between moving circle and year info
              const isOverlapping = !(
                  movingCircleRect.bottom < yearInfoRect.top ||
                  movingCircleRect.top > yearInfoRect.bottom ||
                  movingCircleRect.right < yearInfoRect.left ||
                  movingCircleRect.left > yearInfoRect.right
              );

              if (isOverlapping) {
                  yearInfo.classList.add("active");
              } else {
                  yearInfo.classList.remove("active");
              }
          });
      }
  },
  attr: { cy: "100%" }, // Use percentage if needed, or calculate px-based values
  ease: "none",
});




const sectionanim = gsap.utils.toArray('.fade-in');
sectionanim.forEach((box) => {
  gsap.fromTo(box, 
    { autoAlpha: 0,y:30 }, 
    { 
      duration: 1, 
      y:0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',  
        end: 'top 50%',    
        toggleActions: 'play none none none',
        once: true
      }
    }
  );
});

const fade_lef_tanim = gsap.utils.toArray('.fade-left');
fade_lef_tanim.forEach((slide) => {
  gsap.fromTo(slide, 
    { autoAlpha: 0,x:30 }, 
    { 
      duration: 1, 
      x:0,
      autoAlpha: 1,  
      scrollTrigger: {
        trigger: slide,
        start: 'top 80%',  
        end: 'top 50%',    
        toggleActions: 'play none none none',
      }
    }
  );
})

const fade_right_anim = gsap.utils.toArray('.fade-right');
fade_right_anim.forEach((slide) => {
  gsap.fromTo(slide, 
    { autoAlpha: 0,x:-30 }, 
    { 
      duration: 1, 
      x:0,
      autoAlpha: 1,  
      scrollTrigger: {
        trigger: slide,
        start: 'top 80%',  
        end: 'top 50%',    
        toggleActions: 'play none none none',
      }
    }
  );
})

const search_icon = document.querySelector('.icon-search');
const seach_section = document.querySelector('.search')
const close_search = document.querySelector('.close-search')

const search_timeline = gsap.timeline()

search_timeline.to(seach_section, {
  top: 0,
  duration: 0.3,
});
search_timeline.pause();

search_icon.addEventListener("click", function () {
  search_timeline.play();
});

close_search.addEventListener("click", function () {
  search_timeline.reverse();
});


//cart drawer script 

const cart_icon = document.querySelector('.icon-cart');
const cart_drawer = document.querySelector('.cart-drawer')
const close_cart_drawer = document.querySelector('.close-cart-drawer')

const cart_timeline = gsap.timeline()

cart_timeline.to(cart_drawer, {
  right: 0,
  duration: 0.3,
});
cart_timeline.pause();

cart_icon.addEventListener("click", function () {
  cart_timeline.play();
});

close_cart_drawer.addEventListener("click", function () {
  cart_timeline.reverse();
});
// const cart_icon = document.querySelector('.icon-cart');
// const cart_drawer = document.querySelector('.cart-drawer');
// const close_cart_drawer = document.querySelector('.close-cart-drawer');

// const cart_timeline = gsap.timeline();

// cart_timeline.to(cart_drawer, {
//   right: 0,
//   duration: 0.3,
// });
// cart_timeline.pause();

// cart_icon.addEventListener("click", function (event) {
//   cart_timeline.play();
//   event.stopPropagation(); // Prevent this click from triggering the document event
// });

// close_cart_drawer.addEventListener("click", function (event) {
//   cart_timeline.reverse();
//   event.stopPropagation(); // Prevent this click from triggering the document event
// });

// document.addEventListener("click", function (event) {
//   if (
//     cart_drawer.contains(event.target) && (add! before)
//     cart_icon.contains(event.target) && (add! before)
//     close_cart_drawer.contains(event.target) (add! before)
//   ) {
//     cart_timeline.reverse(); // Close the drawer
//   }
// });


const experience_img = document.querySelector('.experience-img');

gsap.from(experience_img, {
  rotate: 4,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut" 
});



gsap.to(".first-circle,.second-circle,.third-circle",{
  opacity:0.4,
  duration:0.4,
  repeat:-1,
  yoyo:true,
  ease:"sine.inOut",
  stagger:0.4
})

jQuery(document).ready(function ($) {
  if ($(window).scrollTop() >= 70) {
    $(".header").addClass("is-sticky");
    $(".header-pattern").addClass("hidden");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 70) {
      $(".header").addClass("is-sticky");
      $(".header-pattern").addClass("hidden");
    } else {
      $(".header").removeClass("is-sticky");
      $(".header-pattern").removeClass("hidden");
    }
  });


  // Hide all accordion contents initially
// Initially hide all accordion content
$('.accordion-content').hide();
$('.accordion-header').addClass('rounded-b-[14px]');
$('.accordion-header img').attr('src', '../assets/images/svg/faq-plus.svg');

// Open the first accordion of each faq-main by default
$('.faq-main').each(function () {
    var firstAccordionHeader = $(this).find('.accordion-header').first();
    var firstAccordionContent = $(this).find('.accordion-content').first();

    firstAccordionContent.show();
    firstAccordionHeader.removeClass('rounded-b-[14px]');
    firstAccordionHeader.find('img').attr('src', '../assets/images/svg/faq-minus.svg');
});

// Accordion toggle functionality
$('.accordion-header').on('click', function () {
    var currentContent = $(this).next('.accordion-content');
    var currentIcon = $(this).find('img');
    var currentHeader = $(this);

    // Close other accordions within the same faq-main
    $(this).closest('.faq-main').find('.accordion-content').not(currentContent).slideUp(function () {
        $(this).prev('.accordion-header').addClass('rounded-b-[14px]');
    });
    $(this).closest('.faq-main').find('.accordion-header').not(currentHeader).find('img').attr('src', '../assets/images/svg/faq-plus.svg');

    // Toggle the current accordion
    if (currentContent.is(':visible')) {
        currentContent.slideUp(function () {
            currentHeader.addClass('rounded-b-[14px]');
        });
        currentIcon.attr('src', '../assets/images/svg/faq-plus.svg');
    } else {
        currentContent.slideDown();
        currentHeader.removeClass('rounded-b-[14px]');
        currentIcon.attr('src', '../assets/images/svg/faq-minus.svg');
    }
});




  $('[data-fancybox="gallery"]').fancybox({
    // Optional settings
    loop: true, // Loop through images
    buttons: ['zoom', 'slideShow', 'fullScreen', 'close'], // Buttons in the Fancybox toolbar
  });
});

let open_btn = document.querySelector(".open-button");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close-btn");
let sidebar_links = document.querySelectorAll(".sidebar ul li ");
let sidebar_timeline = gsap.timeline();

sidebar_timeline.to(sidebar, {
  right: 0,
  duration: 0.3,
});
sidebar_timeline.from(sidebar_links, {
  x: 150,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});
sidebar_timeline.pause();

open_btn.addEventListener("click", function () {
  sidebar_timeline.play();
  document.body.style.overflow = "hidden";
});

close_btn.addEventListener("click", function () {
  sidebar_timeline.reverse();
  document.body.style.overflow = "";
});

const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const playIcon = playButton.querySelector(".play-icon");
const videoSection = document.querySelector(".video-section");

playButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.src = "../assets/images/svg/pause-btn.svg";
    videoSection.classList.add("playing");

  } else {
    video.pause();
    playIcon.src = "../assets/images/svg/play-btn.svg";
    videoSection.classList.remove("playing");
    console.log("playing");
    
  }
});

// const checkbox = document.getElementById('custom-checkbox');
// const tickContainer = document.querySelector('.check-tick,.check-tick img');

// checkbox.addEventListener('change', function () {
//     if (checkbox.checked) {
//         tickContainer.classList.remove('hidden');
//     } else {
//         tickContainer.classList.add('hidden');
//     }
// });


// Register GSAP ScrollTrigger plugin globally once
// JavaScript to animate circle based on scroll position