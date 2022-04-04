EntirePoint.json = (function () {
  const url = '../js/users.json';
  async function fetchJson() {
    try {
      const data = await fetch(url);
      const response = await data.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  return {
    fetchJson,
  };
})();
