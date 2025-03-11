// Swiper JS

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 28,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button',
  },
  breakpoints: {
    0: {
      navigation: {
        nextEl: '.swiper-next-button-m',
        prevEl: '.swiper-prev-button-m',
      },
      slidesPerView: 1,
      spaceBetween: 28,
    },
    640: {
      navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
      },
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1024: {
      navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
      },
      slidesPerView: 3,
      spaceBetween: 28,
    },

    1280: {
      navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
      },
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },
});


  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 28,
    loop: true,
    autoplay: {
      delay: 2500,
    },
      navigation: {
      nextEl: '.swiper-next-button2',
      prevEl: '.swiper-prev-button2',
    },
    breakpoints: {
      0: {
        navigation: {
          nextEl: '.swiper-next-button2-m',
          prevEl: '.swiper-prev-button2-m',
        },
        slidesPerView: 1,
        spaceBetween: 28,
      },
      640: {
        navigation: {
          nextEl: '.swiper-next-button2',
          prevEl: '.swiper-prev-button2',
        },
        slidesPerView: 2,
        spaceBetween: 28,
      },
      1024: {
        navigation: {
          nextEl: '.swiper-next-button2',
          prevEl: '.swiper-prev-button2',
        },
        slidesPerView: 3,
        spaceBetween: 28,
      },
  
      1280: {
        navigation: {
          nextEl: '.swiper-next-button2',
          prevEl: '.swiper-prev-button2',
        },
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });



// Menu Mobile JS

document.addEventListener("DOMContentLoaded", function () {
  const openNav = document.querySelector(".nav-mobile__open-navigation");
  const menuContent = document.querySelector(".nav-mobile-content");
  const overlay = document.querySelector(".screen-overlay");

  openNav.addEventListener("click", function () {
    menuContent.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", function () {
    menuContent.classList.remove("active");
    overlay.classList.remove("active");
  });
});
