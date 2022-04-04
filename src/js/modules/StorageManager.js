const StorageManager = (function (authorizedUser) {
  function authorize(authorizedUser) {
    StorageManager.storage.setaAuthorizedUser(authorizedUser);
  }
  function getUser() {
    return StorageManager.storage.getName();
  }
  function removeUser() {
    return StorageManager.storage.removeAuthorizedUser();
  }
  return {
    authorize,
    getUser,
    removeUser,
  };
})();
