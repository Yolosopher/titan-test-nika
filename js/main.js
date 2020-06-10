var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 720 ? 'vertical' : 'horizontal';

//     return direction;
// }
