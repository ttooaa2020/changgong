$(function () {
  //비주얼
  const VisualSwiper = new Swiper(".visual-swiper", {
    loop: true,
    autoplay: true, //자동으로 슬라이드 적용
    speed: 3000, //기본값 300 = 0.3초

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    // 캐러셀 만들기
    slidesPerView: 1, // 보여질 슬라이드 갯수

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1 ",
    },
  });

  const swiper = new Swiper(".keyword-swiper", {
    // Optional parameters
    slidesPerView: 3, // 보여질 슬라이드 갯수
    loop: true,
    autoplay: true,
    speed: 1000, //기본값 300 = 0.3초
    spaceBetween: 70,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },

    breakpoints: {
      100: {
        slidesPerView: 1,
      },

      901: {
        slidesPerView: 2,
        spaceBetween: 76,
      },

      1401: {
        slidesPerView: 3,
        spaceBetween: 146,
      },
    },
  });

  const curriculumSwiper = new Swiper(".curriculum-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 4, // 보여질 슬라이드 갯수
    autoplay: true, //자동으로 슬라이드 적용
    speed: 2000, //기본값 300 = 0.3초
    spaceBetween: 60,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      100: {
        slidesPerView: 1,
      },

      901: {
        slidesPerView: 2,
        spaceBetween: 76,
      },

      1401: {
        slidesPerView: 4,
        spaceBetween: 146,
      },
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

    breakpoints: {
      100: {
        spaceBetween: 400,
      },

      901: {
        spaceBetween: 400,
      },

      1401: {
        spaceBetween: 250,
      },
    },
  });

  const portfolioAll = new Swiper(".portfolio-all-2", {
    speed: 5000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: "auto",

    autoplay: {
      delay: 0,
      reverseDirection: true, // 슬라이드 방향을 왼쪽으로 설정
    },

    breakpoints: {
      100: {
        spaceBetween: 400,
      },

      901: {
        spaceBetween: 400,
      },

      1401: {
        spaceBetween: 250,
      },
    },
  });

  // question------------------------------------------------------------
  const $question = $(".question-list > li");
  const $answer = $(".answer-wrap");
  const $questionList = $(".question-list");
  const duration = 300; // 애니메이션 지속 시간 추가

  // 초기 상태 설정
  $answer.hide();

  // 질문을 클릭했을 때
  $question.on("click", function () {
    const $this = $(this);
    const $thisAnswer = $this.find($answer);

    // 다른 답변들 닫기
    $question.not($this).removeClass("on");
    $answer.not($thisAnswer).slideUp(duration);

    // 현재 답변 토글
    $this.toggleClass("on");
    $thisAnswer.slideToggle(duration);
  });

  // 문서 클릭 이벤트는 필요한 경우에만 사용
  $(document).on("click", function (e) {
    if (!$(e.target).closest($questionList).length) {
      $question.removeClass("on");
      $answer.slideUp(duration);
    }
  });

  // question end------------------------------------------------------------
});
