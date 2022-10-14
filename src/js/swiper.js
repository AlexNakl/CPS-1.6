import Swiper, { Navigation, Pagination } from 'swiper';

/*----------------------Свайпер----------------------*/
let swiper;
let init = false;

function swiperCard() {
	if (window.innerWidth < 768) {
		if (!init) {
			init = true;
			swiper = new Swiper('.swiper', {
				modules: [Navigation, Pagination],
				direction: 'horizontal',
				effect: 'slide',
				slidesPerView: 'auto',
				centeredSlides: true,
				centeredSlidesBounds: true,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	} else if (init) {
		swiper.destroy();
		init = false;
	}
}

swiperCard();
window.addEventListener("resize", swiperCard);