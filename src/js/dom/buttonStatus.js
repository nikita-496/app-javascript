const authorizedUser = StorageManager.getUser();
const loginButton = document.getElementById('buttonHeader');
const logOutButton = document.createElement('form');
logOutButton.classList = 'form';
logOutButton.action = './index.html';
logOutButton.innerHTML = '<button class="button header__button" id="logout">Выйти</button>';
if (authorizedUser) {
  loginButton.parentNode.replaceChild(logOutButton, loginButton);
}
