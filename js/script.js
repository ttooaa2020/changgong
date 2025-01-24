$(function () {
  const $window = $(window);
  const $header = $("header");
  const $menu = $(".gnb>li");
  const $submenu = $(".submenu");

  const duration1 = 300;
  const duration2 = 200;

  // 서브 메뉴
  $menu.on("click", function (e) {
    e.stopPropagation();

    const $this = $(this);
    const hasSubmenu = $this.find($submenu).length > 0;

    if (hasSubmenu) {
      $this.toggleClass("on");
      $header.toggleClass("active");

      if ($this.hasClass("on")) {
        $submenu.stop().slideDown(duration1);
      } else {
        $submenu.stop().slideUp(duration2);
      }
    } else {
      // 서브메뉴가 없는 경우 링크로 이동
      const link = $this.find("a").attr("href");
      if (link) {
        window.location.href = link;
      }
    }
  });
  // 헤더 서브메뉴

  // 모바일 서브 메뉴
  const $mobileMenu = $(".mobile-gnb>li");
  const $mobileSubmenu = $(".mobile-submenu");

  $mobileMenu.on("click", function (e) {
    e.stopPropagation();

    const $this = $(this);
    const $submenu = $this.find($mobileSubmenu);

    if ($submenu.length > 0) {
      $this.toggleClass("on");

      if ($this.hasClass("on")) {
        $submenu.stop().slideDown(duration1);
      } else {
        $submenu.stop().slideUp(duration2);
      }
    } else {
      // 서브메뉴가 없는 경우 링크로 이동
      const link = $this.find("a").attr("href");
      if (link) {
        window.location.href = link;
      }
    }
  });

  // 모바일 메뉴 닫기 버튼 클릭 시 메뉴 닫기
  $(".mobile-btn-close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });
  // 모바일 서브 메뉴

  // 문서의 다른 부분을 클릭했을 때
  $(document).on("click", function () {
    $menu.removeClass("on"); // 클래스 제거
    $header.removeClass("active"); // 헤더 클래스 제거
    $submenu.stop().slideUp(duration2); // 서브메뉴 숨기기

    $mobileMenu.removeClass("on"); // 모든 메뉴에서 'on' 클래스 제거
    $mobileSubmenu.stop().slideUp(duration1); // 모든 서브 메뉴 닫기
  });

  // 서브 메뉴

  // 모바일 더보기
  const btnMenu = document.querySelector(".more-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
  // 모바일 더보기 end

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
    loop: true,

    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 60,
      },

      901: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      1301: {
        spaceBetween: 40,
      },

      1920: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const portfolioAll = new Swiper(".portfolio-all-2", {
    loop: true,

    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 60,
      },

      901: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      1301: {
        spaceBetween: 40,
      },

      1920: {
        slidesPerView: 4,
        spaceBetween: 20,
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

  // phone-con------------------------------------------------------------
  const swiperContainer = document.querySelector(".phone-con");
  // 스와이퍼
  if (swiperContainer) {
    const swiper = new Swiper(".phone-con", {
      // Optional parameters
      initialSlide: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      loop: true,
      speed: 300,
      effect: "fade",
      allowTouchMove: true, //드래그 하듯 넘길수 있도록
      grabCursor: true, //마우서 커서 변경 되도록

      // Pagination 추가
      pagination: {
        el: ".phone-pagination",
        clickable: true,
      },
      on: {
        init: function () {
          updateCardText(this.realIndex);
        },
        slideChange: function () {
          updateCardText(this.realIndex);
        },
      },
    });
    // 스와이퍼 end

    // Intersection Observer 설정 (보일때 작동)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.5 }
    ); // 50% 이상 보일 때 감지

    // Swiper 컨테이너 관찰 시작 (폰과 텍스트 연동)
    observer.observe(swiperContainer);
    function updateCardText(index) {
      const cardTexts = document.querySelectorAll(".text-con");
      cardTexts.forEach((cardText, i) => {
        if (i === index) {
          cardText.classList.add("on");
        } else {
          cardText.classList.remove("on");
        }
      });
    }

    // 페이지 로드 시 첫 번째 요소 활성화
    document.addEventListener("DOMContentLoaded", () => {
      updateCardText(0);
    });
  }

  // phone-con end------------------------------------------------------------
});
