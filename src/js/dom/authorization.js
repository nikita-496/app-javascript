const submit = document.getElementById('continue');
submit.addEventListener('click', function () {
  const login = document.getElementById('login').value;
  StorageManager.authorize(login);
});
