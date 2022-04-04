const Validation = (function (inputLogin, inputPassword) {
  function validateInputData(inputLogin, inputPassword) {
    let isValidData = false;
    const users = StorageManager.getAllUsers();
    const parsedUsers = JSON.parse(users);
    console.log(inputLogin, inputPassword);
    const filterResult = parsedUsers.users.filter(
      (user) => user.login === inputLogin && user.password === inputPassword
    );
    if (filterResult[0]) {
      isValidData = true;
    }
    return isValidData;
  }
  function validatePassword(inputPassword) {
    let = isValidPAssword = false;
    const pattern = new RegExp('^(?=(.*[a-zA-Za-яА-Я]){1,})(?=(.*[0-9]){2,}).{8,}$');
    if (pattern.test(inputPassword)) {
      isValidPAssword = true;
    }
    return isValidPAssword;
  }
  return {
    validateInputData,
    validatePassword,
  };
})();
