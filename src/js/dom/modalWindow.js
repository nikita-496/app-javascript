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
