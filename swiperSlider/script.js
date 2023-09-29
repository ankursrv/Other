var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop:true,
    speed:1000,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 1,
          
        },
        1024: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
      },
  });