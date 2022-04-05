const StorageManager = (function (authorizedUser) {
  function authorize(authorizedUser) {
    StorageManager.storage.setAuthorizedUser(authorizedUser);
  }
  function getUser() {
    return StorageManager.storage.getName();
  }
  function getAllUsers() {
    return StorageManager.storage.getUsers();
  }
  function removeUser() {
    return StorageManager.storage.removeAuthorizedUser();
  }
  return {
    authorize,
    getUser,
    getAllUsers,
    removeUser,
  };
})();
