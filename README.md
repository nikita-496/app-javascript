# Тестовое Frontend приложение на Javascript

Приложение является реализацией тестового задания на позицию Front-end разработка.

## 🚀 Обо мне

Занимаюсь frontend разработкой, в основном с помощью Vue. Также начал немного осваивать backend и писать серверную логику.

## 🛠 Навыки

Javascript, HTML, CSS, Vue, Vuex, Nuxt.js, Node.js, Nest.js

## Реализовано

✅ Адаптивная версия сайта

✅ <code>[JSON](https://github.com/nikita-496/app-javascript/blob/master/src/js/users.json)</code> с данными о пользователях

✅ Основные страницы:

  а) Главная

  б) Личный кабинет
  
  в) Контакты

✅ Процесс авторизации пользователей

✅ Валидация вводимых данных

✅ Хранение данных о пользователях в localStorage

## 🖌️ Стили

В отношении форматирования элементов, придерживался структуры БЭМ методологии именования классов (https://ru.bem.info/methodology/key-concepts/).

Стили структурированы следующим образом:

- Для каждой страницы имеются свои отдельные файлы стилей, в которых форматируются элементы конкретной страницы.

![css-section](https://user-images.githubusercontent.com/72722867/161881955-1e238358-c75c-4ca0-b7f2-167dcd17e902.gif)

- Общие элементы для каждой страницы, стилизованы в отдельном файле стилей.

![blocks-2](https://user-images.githubusercontent.com/72722867/161883050-a38364e6-a9aa-4384-b98f-4dba6473ec90.gif)

- Стилизация шапки сайта вынесена в отдельный файл по причине того, что она является неотъемлемой частью каждой страницы, своего рода layout.

- Адаптация стилей также расположена в отдельном файле. Все стили объявляются до медиазапросов, путем импорта их в файл c медизапросами, который в свою очередь импортируются в основной файл стилей.

![media-2](https://user-images.githubusercontent.com/72722867/161883494-bcab31c9-d1e1-4192-b3e2-84174437d11d.gif)

## 💻 Логика

В реализованном приложении можно выделить 3 основных момента, описывающих интерактивность и состояние приложения.

- Валидация данных, введенных пользователем
- Взаимодействие с localeStorage
- Рендеринг страницы и текущих элементов, в зависимости от того авторизован ли пользователь или нет
  
Логика взаимодействия с localeStorage и валидации, реализованы с применением модулей.

При первом запуске приложения, в localeStorage записываются пользователи, которые берутся из данных JSON.
  
```javascript
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
```
В подмодуле json модуля EntirePoint, описана логика запроса на получение данных с JSON.

 ```javascript 
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
```

В модуле StorageManager описаны внешние функции доступные другим программам в приложении.
   
 ```javascript 
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

```

В качестве подмодуля StorageManager выступает storage, который непосредственно взаимодействует c API localeStorage (запись, удаление, получение данных из localeStorage) и скрывает от других частей программы, детали этого взаимодействия.
   
```javascript 
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
    if (authorizedUser) {
      return (userName = JSON.parse(authorizedUser)[0].name);
    } else {
      return null;
    }
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
```

Валидация данных реализована в модуле Validation, который проверяет существуют ли введенные данные в localeStorage, а также валидация пароля.

 ```javascript 
const Validation = (function (inputLogin, inputPassword) {
  function validateInputData(inputLogin, inputPassword) {
    let isValidData = false;
    const users = StorageManager.getAllUsers();
    const parsedUsers = JSON.parse(users);
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
```

Остальная часть логики отведена на рендеринг страницы, путем манипуляции с DOM. В директории dom можно ознакомиться c фрагментами данной логики.

- <code>[authorization.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/dom/authorization.js")
</code> - описана логика при нажатии на кнопку "Продолжить" для отправки формы на валидацию, которая определяет состояние приложения после нажатия на кнопку. Возможные состояния приложения:

  а) Введенные данные соответствуют данным из localStorage => переход в личный кабинет

  б) Пользователя с такими данными не существует => переход в личный кабинет не осуществяется, всплывает сообщение-подсказка о некорректных введенных данных
  
  в) Пароль введен не корректно, поведение аналогично б).
  
- <code>[buttonStatus.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/dom/buttonStatus.js")</code> - описывается состояние кнопок в приложении (их текстового содержимого и назначения) в зависимости от того авторизован ли пользователь на сайте или нет.

- <code>[logoutButton.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/dom/logoutButton.js")</code>:

  а) удаление записи из localStorage о текущем авторизованном пользователе

  б) переход на главную страницу
  
- <code>[modalWindow.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/dom/modalWindow.js")</code>: 

  а) отрисрвка всплывающего окна с формой 

  б) закрытий всплывающего окна
  
  в) смена типа вводимого пароля (скрыт/открыт) и изображения
  
- <code>[renderProfile.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/dom/renderProfile.js")</code> - отрисовка страницы личного кабинет:
 
  а) пользователь не авторизован => страница личного кабинета не доступна, приглашение пройти авторизацию

  б) пользователь авторизован => страница личного кабинет с приветсвием пользователя по имени, соответствующим его данным
  
Отдельно стоит отметить файл <code>[messages.js](адрес "https://github.com/nikita-496/app-javascript/blob/master/src/js/messages.js")</code>, который хранит в себе информацию о сообщениях-подсказках при авторизации.



## 🔌 Запуск

В приложении не была реализована сборка проекта. Данную версию можно запустить с помощью плагина live server, либо же как вариант, путем перемещения локальных html файлов в браузер 😁.
