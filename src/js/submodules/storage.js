StorageManager.storage = (function (data) {
  function setUsers(data) {
    localStorage.setItem('users', JSON.stringify(data));
  }
  function setAuthorizedUser(login) {
    const users = getUsers();
    const parsedUsers = JSON.parse(users).users;
    const validUser = parsedUsers.filter((user) => user.login === login);
    localStorage.setItem('authorizedUser', JSON.stringify(validUser));
  }
  function getUsers() {
    return localStorage.getItem('users');
  }
  function getName() {
    let userName;
    const authorizedUser = localStorage.getItem('authorizedUser');
    return (userName = JSON.parse(authorizedUser)[0].name);
  }
  function removeAuthorizedUser() {
    localStorage.removeItem('authorizedUser');
  }
  return {
    setUsers,
    setAuthorizedUser,
    getName,
    getUsers,
    removeAuthorizedUser,
  };
})();
