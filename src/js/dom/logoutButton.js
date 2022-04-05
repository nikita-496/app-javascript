const logoutButtons = document.getElementsByClassName('logout');
const logoutButtonsArr = Array.from(logoutButtons);
logoutButtonsArr.forEach((button) => {
  button.addEventListener('click', function () {
    StorageManager.removeUser();
  });
});
