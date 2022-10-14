const mainContainerDescription = document.querySelector('.main__description-container');
const btnReadMore = mainContainerDescription.querySelector('.description__btn-read-more');
const descriptionTextContinued = mainContainerDescription.querySelector('.description__text-continued');

const servicesContainerNavigation = document.querySelector('.brands-container__navigation');
const btnShowHide = servicesContainerNavigation.querySelector('.btn-show-hide');
const servicesContainerList = servicesContainerNavigation.querySelector('.brands-container__list');

const devicesContainerNavigation = document.querySelector('.devices-container__navigation');
const btnShowHide2 = devicesContainerNavigation.querySelector('.btn-show-hide');
const devicesContainerList = devicesContainerNavigation.querySelector('.devices-container__list');

btnReadMore.addEventListener('click', buttonReadMore);
btnShowHide.addEventListener('click', buttonShowHide);
btnShowHide2.addEventListener('click', buttonShowHide2);

function buttonReadMore() {
	if (window.innerWidth < 1120) {
		btnReadMore.classList.toggle('btn-open');
		descriptionTextContinued.classList.toggle('description__text-continued--opened');
	}

	if (btnReadMore.classList.contains('btn-open')) {
		btnReadMore.textContent = 'Скрыть';
	} else {
		btnReadMore.textContent = 'Читать далее';
	}
}

function buttonShowHide() {
		btnShowHide.classList.toggle('btn-open');
		servicesContainerList.classList.toggle('brands-container__list--opened');

	if (btnShowHide.classList.contains('btn-open')) {
		btnShowHide.textContent = 'Скрыть';
	} else {
		btnShowHide.textContent = 'Показать все';
	}
}

function buttonShowHide2() {
		btnShowHide2.classList.toggle('btn-open');
		devicesContainerList.classList.toggle('devices-container__list--opened');

	if (btnShowHide2.classList.contains('btn-open')) {
		btnShowHide2.textContent = 'Скрыть';
	} else {
		btnShowHide2.textContent = 'Показать все';
	}
}