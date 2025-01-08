$(function () {
  //비주얼
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: true, //자동으로 슬라이드 적용
    speed: 2000, //기본값 300 = 0.3초

    // 캐러셀 만들기
    slidesPerView: 1, // 보여질 슬라이드 갯수

    pagination: {
      el: ".swiper-pagination",
      clickable: true, // 페이지네이션 클릭이 되도록 만드는것
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1 ",
    },
  });
});
