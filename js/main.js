$(document).ready(function () {
  // ----menu responsive--------------
  // Bắt sự kiện click trên thẻ cha <li>
  $(".nav__mobile-list i").click(function () {
    var megamenu = $(this).parent().find(".megamenu--mobile"); // Tìm thẻ con <ul> của thẻ cha

    if (megamenu.length > 0) {
      // Nếu thẻ con tồn tại, thay đổi trạng thái hiển thị bằng slideToggle
      megamenu.slideToggle();
    }
  });

  var swiper = new Swiper(".mySwiper", {
    allowTouchMove: true, //cho phép người dùng tương tác với slider bằng cách chạm hoặc di chuyển trên màn hình
    slidesPerView: "auto", //tính toán số lượng slide hiển thị trên màn hình dựa trên kích thước của màn hình.
    speed: 10000,
    loop: true, // Slider sẽ lặp lại
    autoplay: {
      delay: 0, // Thời gian chờ trước khi tự động chuyển slide
      disableOnInteraction: false //Không tắt tự động chuyển slide khi người dùng tương tác với slider.
    },
    freeMode: true, //cho phép người dùng kéo slider mà không bắt buộc phải theo từng slide cố định.
    spaceBetween: 0, //Khoảng cách giữa các slide trong pixel.
    centeredSlides: true // Slider sẽ căn giữa slide hiện tại trong tâm của viewport.
  });
  const swiperReverse = new Swiper(".mySwiperReverse", {
    allowTouchMove: true,
    slidesPerView: "auto",
    speed: 10000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      reverseDirection: true, //ngược lại
      pauseOnMouseEnter: true, //slider sẽ tạm dừng tự động chuyển slide khi con trỏ chuột (mouse) di vào khu vực của slider
    },
    spaceBetween: 0,
    centeredSlides: true,
  });

  // $(".mySwiper").mouseover(function () {

  //     console.log("hi");
  //     swiper.autoplay.pause();
  // });

  // Xử lý tương tác khác
  //   swiper.on("mouseover", function() {
  //     console.log("hi");
  //   });
});
