var swiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  centeredSlides : true,
		autoplay: {
    delay: 6000,
			disableOnInteraction: false,
  },
		speed: 1000,
  pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			clickable: true,
			renderFraction: function (currentClass, totalClass) {
      return '0' +'<span class="' + currentClass + '"></span>' +
             '  -   0' +
             '<span class="' + totalClass + '"></span>';
  	}
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    750: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
})

jQuery(function($){
    $('.popup__button').magnificPopup({ 
       type: 'image',
       // その他のオプション（必要であれば）
							mainClass: 'mfp-fade',
							removalDaley: '400',
							image: {
								cursor: null,
							}
    });
});