const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', function () {
  StorageManager.removeUser();
});
