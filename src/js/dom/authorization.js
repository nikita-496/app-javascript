const continuebutton = document.getElementById('continue');
const submit = document.getElementById('submit');

const submitListener = (event) => event.preventDefault();

submit.addEventListener('click', submitListener);

continuebutton.addEventListener('click', function () {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if (!login || !password) {
    if (!login && !password) {
      alert('Поля пароль и логин обязательны для заполнения');
    }
    if (!login && password) {
      alert('Поле логин обязательно для заполнения');
    }
    if (!password && login) {
      alert('Поле пароль обязательно для заполнения');
    }
  } else {
    const isValidPassword = Validation.validatePassword(password);
    if (isValidPassword) {
      const isValidData = Validation.validateInputData(login, password);
      if (isValidData) {
        StorageManager.authorize(login);
        submit.removeEventListener('click', submitListener);
      } else {
        alert('Логин или пароль не существуют');
      }
    } else {
      alert('Пароль должен иметь не менее 8 символов и не менее 2 цифр');
    }
  }
});
