const continuebutton = document.getElementById('continue');
const submit = document.getElementById('submit');

const submitListener = (event) => event.preventDefault();

let continuebuttonListenner = function () {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const snackbar = document.getElementById('snackbar');
  const snackbarMessage = document.getElementById('snackbarMessage');

  let errorMessage = null;
  if (!login || !password) {
    if (!login && !password) {
      errorMessage = message.allRequired;
    }
    if (!login && password) {
      errorMessage = message.loginRequired;
    }
    if (!password && login) {
      errorMessage = message.passwordRequired;
    }
    snackbar.style.display = 'block';
    snackbarMessage.textContent = errorMessage;
  } else {
    const isValidPassword = Validation.validatePassword(password);
    if (isValidPassword) {
      const isValidData = Validation.validateInputData(login, password);
      if (isValidData) {
        snackbar.style.display = 'none';

        StorageManager.authorize(login);
        submit.removeEventListener('click', submitListener);
      } else {
        errorMessage = message.notExist;
        snackbar.style.display = 'block';
        snackbarMessage.textContent = errorMessage;
      }
    } else {
      errorMessage = message.passwordRequirements;
      snackbar.style.display = 'block';
      snackbarMessage.textContent = errorMessage;
    }
  }
};

submit.addEventListener('click', submitListener);
continuebutton.addEventListener('click', continuebuttonListenner);
