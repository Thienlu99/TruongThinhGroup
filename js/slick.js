$(document).ready(function () {
  //   slick slider
  $(".filtering").slick({
    slidesToShow: 1, //hiển thị bao nhiêu slider
    slidesToScroll: 1, // click chạy đổi bao nhiêu slider
    infinite: true, //chạy vô tận
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, //làm mất nút next prev
    draggable: false, //kéo hình ảnh đi được hay không?
    dots: true, //hiện icon dấu chấm ko?
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".filtering4").slick({
    slidesToShow: 4, //hiển thị bao nhiêu slider
    slidesToScroll: 1, // click chạy đổi bao nhiêu slider
    infinite: true, //chạy vô tận
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, //làm mất nút next prev
    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
    draggable: true, //kéo hình ảnh đi được hay không?
    dots: false, //hiện icon dấu chấm ko?
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".gallery").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, //làm mất nút next prev
    dots: false
  });
});
