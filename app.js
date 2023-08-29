const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close');
const modalcontainner = document.querySelector('.js-modal-containner');

// hàm close modal
function hidemodalclose () {
    modal.classList.remove('open')
  }
  //  nge click vào nút button đấy
  modalclose.addEventListener('click',hidemodalclose);
  //  nge click ở ngoài modal thì đóng.
  modal.addEventListener('click',hidemodalclose);
  //  ngừng nỗi bọt
  modalcontainner.addEventListener('click',function(event){
    event.stopPropagation();
  })

  // load/
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 500);
  }
  
  window.onload = fadeOut;

  // slider
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




