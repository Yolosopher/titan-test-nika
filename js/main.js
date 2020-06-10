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
let category = document.getElementById('srch-txt');
let catUl = document.querySelector('.cat-toggle-ul');
catUl.classList.toggle('hidden');
category.addEventListener('click', ()=> {
  catUl.classList.toggle('hidden');
});