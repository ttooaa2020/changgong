$(function () {
  //비주얼
  const VisualSwiper = new Swiper(".visual-swiper", {
    loop: true,
    autoplay: true, //자동으로 슬라이드 적용
    speed: 3000, //기본값 300 = 0.3초

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

  const swiper = new Swiper(".curriculum-swiper", {
    // Optional parameters
    slidesPerView: 3, // 보여질 슬라이드 갯수
    loop: true,
    speed: 1000, //기본값 300 = 0.3초
    spaceBetween: 70,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
  });

  const curriculumSwiper = new Swiper(".keyword-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 4, // 보여질 슬라이드 갯수
    autoplay: true, //자동으로 슬라이드 적용
    speed: 2000, //기본값 300 = 0.3초
    spaceBetween: 40,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
  });

  // 드래그 스크롤 기능 jQuery 버전
  const $slider = $(".con-all");
  let isDown = false;
  let startX;
  let scrollLeft;

  $slider.on("mousedown", function (e) {
    isDown = true;
    $(this).css("cursor", "grabbing");
    startX = e.pageX - $slider.offset().left;
    scrollLeft = $slider.scrollLeft();
  });

  $slider.on("mouseleave mouseup", function () {
    isDown = false;
    $(this).css("cursor", "grab");
  });

  $slider.on("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - $slider.offset().left;
    const walk = (x - startX) * 10;
    $slider.scrollLeft(scrollLeft - walk);
  });

  const portfolio = new Swiper(".portfolio-all-1", {
    speed: 5000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 60,
    autoplay: "auto",

    autoplay: {
      delay: 0,
    },
  });

  const portfolioAll = new Swiper(".portfolio-all-2", {
    speed: 5000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 60,
    autoplay: "auto",

    autoplay: {
      delay: 0,
      reverseDirection: true, // 슬라이드 방향을 왼쪽으로 설정
    },
  });

  // question------------------------------------------------------------
  const $question = $(".question-list > li");
  const $answer = $(".answer-wrap");
  const $questionList = $(".question-list");

  // 초기 상태 설정
  $answer.hide();

  // 질문을 클릭했을 때
  $question.on("click", function (e) {
    e.stopPropagation(); // 이벤트 버블링 방지
    // 선택한 항목을 제외한 다른 항목들의 on 클래스 제거 및 답변 숨기기
    $(this).siblings().removeClass("on").find($answer).stop().slideUp(duration);

    // 선택한 항목의 on 클래스 토글 및 답변 토글
    $(this).toggleClass("on");
    $(this).find($answer).stop().slideToggle(duration);
  });

  // 문서 전체에 클릭 이벤트 추가
  $(document).on("click", function (e) {
    // 클릭된 요소가 질문 리스트 내부가 아닐 경우
    if (!$(e.target).closest($questionList).length) {
      $question.removeClass("on");
      $answer.stop().slideUp(duration);
    }
  });

  // question end------------------------------------------------------------
});
