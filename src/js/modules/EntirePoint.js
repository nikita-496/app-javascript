const EntirePoint = (function () {
  function init() {
    document.addEventListener('DOMContentLoaded', function () {
      EntirePoint.json.fetchJson().then((response) => StorageManager.storage.setUsers(response));
    });
  }
  return {
    init,
  };
})();
