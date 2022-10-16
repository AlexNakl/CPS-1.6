const body = document.querySelector('body');
const header = document.querySelector('.header');
const btnFries = header.querySelector('.btn--icon-menu');
const btnHeaderChat = header.querySelector('.btn--icon-chat');
const btnHeaderCall = header.querySelector('.btn--icon-call');

const modalBackgroundCurtain = document.querySelector('.modal-background-curtain');

const menuContainer = document.querySelector('.menu-container');
const btnMenuClose = menuContainer.querySelector('.btn--icon-close');
const btnChat = menuContainer.querySelector('.btn--icon-chat');
const btnCall = menuContainer.querySelector('.btn--icon-call');

const feedbackContainer = document.querySelector('.feedback-container');
const btnFeedbackClose = feedbackContainer.querySelector('.btn--icon-close');

const backCallContainer = document.querySelector('.back-call-container');
const btnBackCallClose = backCallContainer.querySelector('.btn--icon-close');


btnFries.addEventListener('click', menuModalShow);
btnMenuClose.addEventListener('click', menuModalHidden);
modalBackgroundCurtain.addEventListener('click', menuModalHidden);

btnHeaderChat.addEventListener('click', feedbackModalShow);
btnChat.addEventListener('click', feedbackModalShow);
btnFeedbackClose.addEventListener('click', feedbackModalHidden);
modalBackgroundCurtain.addEventListener('click', feedbackModalHidden);

btnHeaderCall.addEventListener('click', backCallModalShow);
btnCall.addEventListener('click', backCallModalShow);
btnBackCallClose.addEventListener('click', backCallModalHidden);
modalBackgroundCurtain.addEventListener('click', backCallModalHidden);

function menuModalShow() {
	menuContainer.classList.add('menu-container--fries-pressed');
	modalBackgroundCurtain.classList.add('modal-background-curtain--fries-pressed');
	body.classList.add('modal-menu-open');
}
function menuModalHidden() {
	menuContainer.classList.remove('menu-container--fries-pressed');
	modalBackgroundCurtain.classList.remove('modal-background-curtain--fries-pressed');
	body.classList.remove('modal-menu-open');
}

function feedbackModalShow() {
	feedbackContainer.classList.add('feedback-container--chat-pressed');
	modalBackgroundCurtain.classList.add('modal-background-curtain--chat-pressed');
	body.classList.add('modal-open');
}
function feedbackModalHidden() {
	feedbackContainer.classList.remove('feedback-container--chat-pressed');
	modalBackgroundCurtain.classList.remove('modal-background-curtain--chat-pressed');
	body.classList.remove('modal-open');
}

function backCallModalShow() {
	backCallContainer.classList.add('back-call-container--call-pressed');
	modalBackgroundCurtain.classList.add('modal-background-curtain--call-pressed');
	body.classList.add('modal-open');
}
function backCallModalHidden() {
	backCallContainer.classList.remove('back-call-container--call-pressed');
	modalBackgroundCurtain.classList.remove('modal-background-curtain--call-pressed');
	body.classList.remove('modal-open');
}