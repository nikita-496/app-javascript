function renderGreeting(greetingMessage) {
  const loader = document.getElementById('loader');
  const authorizedPage = document.getElementById('authorizedPage');
  const greeting = document.getElementById('greeting');
  loader.style.display = 'none';
  authorizedPage.style.display = 'block';
  greeting.textContent = greetingMessage;
}

function renderNoneAuthorizedPage() {
  const loader = document.getElementById('loader');
  const noneAuthorizedPage = document.getElementById('noneAuthorizedPage');
  loader.style.display = 'none';
  noneAuthorizedPage.style.display = 'block';
}
