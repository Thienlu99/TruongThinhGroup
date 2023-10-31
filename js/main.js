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
      disableOnInteraction: true, //Không tắt tự động chuyển slide khi người dùng tương tác với slider.
    },
    freeMode: false, //cho phép người dùng kéo slider mà không bắt buộc phải theo từng slide cố định.
    spaceBetween: 0, //Khoảng cách giữa các slide trong pixel.
    centeredSlides: true, // Slider sẽ căn giữa slide hiện tại trong tâm của viewport.
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
      pauseOnMouseEnter: false, //slider sẽ tạm dừng tự động chuyển slide khi con trỏ chuột (mouse) di vào khu vực của slider
    },
    spaceBetween: 0,
    centeredSlides: true,
  });

  //  $(".mySwiper").mouseover(function () {

  //      console.log("hi");
  //      swiper.autoplay.pause();
  //  });

  // Xử lý tương tác khác
  //   swiper.on("mouseover", function() {
  //     console.log("hi");
  //   });
  // -----end
  // -------------table of content------
  const toggle = $(".toggle");
  const nav_bar = $(".table-of-contents");
  const list = $(".table__list");

  toggle.on("click", function () {
    // if (toggle.text() === "hide") {
    //   toggle.text("show");
    // } else {
    //   toggle.text("hide");
    // }
    list.toggleClass("list-invisible");
    nav_bar.toggleClass("table-narrow");
  });
  //-------end table of content------------
  // ------------gập trải course----------
  const accordionContent1 = document.querySelectorAll(
    ".fui-accordion .accordion-content--course"
  );
  accordionContent1.forEach((item, index) => {
    const iconPlus = item.querySelector(".fui-accordion .icon-plus");
    const iconMinus = item.querySelector(".fui-accordion .icon-minus");
    var header = item.querySelector("header");
    item.classList.remove("open");
    header.addEventListener("click", () => {
      item.classList.toggle("open");
  
      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
        iconPlus.classList.add("hidden");
        iconMinus.classList.add("active");
      } else {
        description.style.height = "0px";
        iconPlus.classList.remove("hidden");
        iconMinus.classList.remove("active");
      }
      // removeOpen1
      removeOpen1(index);
    });
  });
  
  function removeOpen1(index1) {
    accordionContent1.forEach((item2, index2) => {
      const iconPlus = item2.querySelector(".fui-accordion .icon-plus");
      const iconMinus = item2.querySelector(".fui-accordion .icon-minus");
      if (index1 != index2) {
        item2.classList.remove("open");
  
        let des = item2.querySelector(".description");
        des.style.height = "0px";
        iconPlus.classList.remove("hidden");
        iconMinus.classList.remove("active");
      }
    });
  }
  //-------end gập trải course---------
  // --------gập trải FAQ ------------
  const accordionContent = document.querySelectorAll(
    ".fui-accordion .accordion-content--FAQ"
  );
  accordionContent.forEach((item, index) => {
    const iconPlus = item.querySelector(".fui-accordion .icon-plus");
    const iconMinus = item.querySelector(".fui-accordion .icon-minus");
    var header = item.querySelector("header");
    item.classList.remove("open");
    header.addEventListener("click", () => {
      item.classList.toggle("open");
  
      let description = item.querySelector(".description");
      if (item.classList.contains("open")) {
        description.style.height = `${description.scrollHeight}px`;
        iconPlus.classList.add("hidden");
        iconMinus.classList.add("active");
        item.querySelector(".title2").style.color = "#f7931e";
      } else {
        description.style.height = "0px";
        iconPlus.classList.remove("hidden");
        iconMinus.classList.remove("active");
        item.querySelector(".title2").style.color = "";
      }
      removeOpen(index);
    });
  });
  
  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      const iconPlus = item2.querySelector(".fui-accordion .icon-plus");
      const iconMinus = item2.querySelector(".fui-accordion .icon-minus");
      if (index1 != index2) {
        item2.classList.remove("open");
  
        let des = item2.querySelector(".description");
        des.style.height = "0px";
        iconPlus.classList.remove("hidden");
        iconMinus.classList.remove("active");
        item2.querySelector(".title2").style.color = "";
      }
    });
  }
  // -----facybox
  Fancybox.bind("[data-fancybox]", {
    infinity: true, // Cho phép vô hạn lặp lại các ảnh trong bộ sưu tập
    keyboard: {
        Escape: "close", // Đóng Fancybox khi nhấn phím Esc
        Delete: "close", // Đóng Fancybox khi nhấn phím Delete
        Backspace: "close", // Đóng Fancybox khi nhấn phím Backspace
        PageUp: "next", // Chuyển đến hình ảnh kế tiếp khi nhấn Page Up
        PageDown: "prev", // Chuyển đến hình ảnh trước đó khi nhấn Page Down
        ArrowUp: "next", // Chuyển đến hình ảnh kế tiếp khi nhấn mũi tên lên
        ArrowDown: "prev", // Chuyển đến hình ảnh trước đó khi nhấn mũi tên xuống
        ArrowRight: "next", // Chuyển đến hình ảnh kế tiếp khi nhấn mũi tên phải
        ArrowLeft: "prev" // Chuyển đến hình ảnh trước đó khi nhấn mũi tên trái
    },
    // l10n:{
    //     CLOSE:"Đóng",
    // },
    on: {
        ready: (fancybox) => {
            // Sự kiện này được gọi khi Fancybox đã sẵn sàng để sử dụng
            // Bạn có thể thêm mã JavaScript tùy chỉnh ở đây để xử lý khi Fancybox đã được tải
        },
        caption: function () {
            // Sự kiện này được gọi khi bạn muốn tùy chỉnh hiển thị chú thích
            // Bạn có thể cung cấp mã JavaScript tùy chỉnh để tạo nội dung chú thích theo ý muốn
        }
    },

});
});

