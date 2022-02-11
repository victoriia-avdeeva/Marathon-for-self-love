
// Реализация закрытия модалки при клике в бекдроп
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const mobMenu = document.querySelector("[the-menu]");


backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

// Функция закрытия модального окна при нажатии на Esc
function handlerEscModalClose() {
  window.addEventListener('keydown', onEsckeyClick);
  function onEsckeyClick(evt) {
    if (evt.code === 'Escape') {
      onModalClose();
    }
  }
}
// Функция закрытия модального окна и снятия всех классов

function onModalClose() {

  backdrop.classList.add('is-hidden');
  mobMenu.classList.remove('is-open');
  body.classList.remove('modal-open');

}

// закрытие модального окна при клике по элементам навигации
const mainModalMenuListItems = document.querySelector('.site-nav');
mainModalMenuListItems.addEventListener('click', onMainMenuItemsClick);


function onMainMenuItemsClick(evt) {
  if (!evt.target.classList.value === 'site-nav__item') {
    return;
  }
  onModalClose();
}

// const onlineBtn = document.querySelector('.mobile-menu__modal-btn');
// onlineBtn.addEventListener('click', onOnlineBtnClick);
// function onOnlineBtnClick(evt) {
//   if (!evt.target.classList.value === 'footer') {
//     return;
//   }
//   onModalClose();
// }