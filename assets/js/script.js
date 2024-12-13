var swiper = new Swiper(".hero-section-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".tesimonial-slider", {
    loop:true,
    slidesPerView: 1,
    breakpoints:{
        1024:{
            slidesPerView:2
        },
        1440:{
            spaceBetween:"20%",
            slidesPerView:2
        },
    },
    spaceBetween: "20%",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

jQuery(document).ready(function ($) { 
    if ($(window).scrollTop() >= 70) {
        $('.header').addClass('is-sticky');
        $('.header-pattern').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.header-pattern').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.header-pattern').removeClass('hidden');
        }
    });
});

let open_btn = document.querySelector('.open-button');
let sidebar = document.querySelector('.sidebar');
let close_btn = document.querySelector('.close-btn');
let sidebar_links = document.querySelectorAll('.sidebar ul li ');
let sidebar_timeline = gsap.timeline();
console.log(sidebar_links);

sidebar_timeline.to(sidebar, {
    right: 0,
    duration: 0.3,
});
sidebar_timeline.from(sidebar_links,{
    x:150,
    opacity:0,
    duration:0.3,
    stagger:0.1
})
sidebar_timeline.pause();

open_btn.addEventListener("click", function () {
    sidebar_timeline.play();
    document.body.style.overflow = 'hidden';
});

close_btn.addEventListener("click", function () {
    sidebar_timeline.reverse();
    document.body.style.overflow = '';
});


const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const playIcon = playButton.querySelector('.play-icon');
const videoSection = document.querySelector('.video-section');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.src = '../assets/images/svg/pause-btn.svg';
        videoSection.classList.add('playing');
    } else {
        video.pause();
        playIcon.src = '../assets/images/svg/play-btn.svg';
        videoSection.classList.remove('playing');
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
