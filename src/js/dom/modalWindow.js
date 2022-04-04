const collection = document.getElementsByClassName('button-login');
const buttonLoginArray = Array.from(collection);
buttonLoginArray.forEach((element) => {
  element.addEventListener('click', function () {
    const modalWindow = document.getElementById('modalWindow');
    modalWindow.classList.add('modal-window_open');
  });
});
document.getElementById('close').addEventListener('click', function () {
  const modalWindow = document.getElementById('modalWindow');
  modalWindow.classList.remove('modal-window_open');
});

const passwordType = document.getElementById('passwordType');
passwordType.addEventListener('click', function () {
  if (password.getAttribute('type') === 'password') {
    password.setAttribute('type', 'text');
    passwordType.setAttribute('src', '../assets/hide.png');
  } else {
    password.setAttribute('type', 'password');
    passwordType.setAttribute('src', '../assets/open.png');
  }
});
