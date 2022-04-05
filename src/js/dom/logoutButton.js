const logoutButtons = document.getElementsByClassName('logout');
console.log(logoutButtons);
const logoutButtonsArr = Array.from(logoutButtons);
logoutButtonsArr.forEach((button) => {
  button.addEventListener('click', function () {
    StorageManager.removeUser();
  });
});
