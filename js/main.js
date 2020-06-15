// banners slider
var swiper = new Swiper('.banners', {
  slidesPerView: 'auto',
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
// top products slider




let category = document.getElementById('srch-txt');
let catUl = document.querySelector('.cat-toggle-ul');
catUl.classList.toggle('hidden');
category.addEventListener('click', ()=> {
  catUl.classList.toggle('hidden');
});


let product = document.getElementById('top-prod-item');
let productsWidth = product.clientWidth;
let products = document.querySelectorAll('.top-prod-items');
let topProdUl = document.querySelector('.top-prod-ul');
let topProducts = document.querySelector('.top-products');


if (productsWidth < 200) {
  for (let item of products) {
    item.classList.add('respo-prod-width')
  }
  topProdUl.classList.add('respo-prod-ul');
  topProducts.classList.add('top-products-slider')
};

var swiper = new Swiper('.top-products-slider', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    }
  }
});