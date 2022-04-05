const authorizedUser = StorageManager.getUser();
const loginButtonHeader = document.getElementById('buttonHeader');
const logOutWraapper = document.createElement('form');
const goProfileWraapper = document.createElement('form');

const loginButtonTitle = document.getElementById('btn');

function changeViewButton() {
  logOutWraapper.classList = 'form';
  goProfileWraapper.classList = 'form';
  changeButtonHeader();
  changeButtonTitle();
}

function changeButtonHeader() {
  logOutWraapper.action = './index.html';
  logOutWraapper.innerHTML = '<button class="button header__button logout">Выйти</button>';
  if (authorizedUser) {
    loginButtonHeader.parentNode.replaceChild(logOutWraapper, loginButtonHeader);
  }
}

function changeButtonTitle() {
  goProfileWraapper.action = './profile.html';
  goProfileWraapper.innerHTML =
    '<button class="button button__action-group button__action-group_theme_login button-login" id="btn">В кабинет</button>';
  if (authorizedUser) {
    loginButtonTitle.parentNode.replaceChild(goProfileWraapper, loginButtonTitle);
  }
}

changeViewButton();
