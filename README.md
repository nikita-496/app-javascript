# Тестовое Frontend приложение на Javascript

Приложение является реализацией тестового задания на позизцию Front-end разработика.

## 🚀 Обо мне

Занимаюсь frontend разработкой, в основном с помощью Vue. Также начал немного осваивать backend и писать сереврную логику.

## 🛠 Навыки

Javascript, HTML, CSS, Vue, Vuex, Nuxt.js, Node.js, Nest.js

## Реализовано

- Адаптиваня версия сайта
- JSON с данными о пользователях

- Основные страницы:

  а) Главная
  ![index](https://user-images.githubusercontent.com/72722867/161797653-29b83293-3255-4af8-917f-fd949ea71485.gif)

  б) Личный кабинет

  в) Контакты

- Авторизация пользователей
- Хранение данных о пользователях в localStorage

## 🖌️ Стили

В отношении форматирования элементов, придерживался структуры БЭМ методологии именования классов (https://ru.bem.info/methodology/key-concepts/).

Стили структурированы следующим образом:

- Для каждой страницы имеются свои отдельные файлы стилей, в которых форматируются элементы конкретной страницы
- Общие элементы для каждой страницы, стилизованы в отдельном файле стилей
- Стилизация шапки сайта вынесена в отдельный файл по причине того, что является неотъемлемой частью каждой страницы
- Адаптация стилей также расположена в отдельном файле. Все стили объявляются до медиазапросов, путем импорта их в файл медизапросами, который в свою очередь импортироутся в основной файл стилей

## 💻 Логика

В реализованном приложении можно выделить 3 оновных момента, описывающих интерактивность и состояние приложения.

- Валидация данных, введенных пользователем
- Взаимодествие с localeStorage
- Рендеринг страницы и текущих элементов, в зависимости от того авторизован ли пользователь или нет
  Логика взаимодействия с localeStorage и валидации, реализованы с применением модулей.

  1.(поинт)При первом запуске приложения, в localeStorage записываются пользователи, которые берутся из данных JSON.

  2.В подмодуле json, описана логика запроса на получения данных с JSON

  2.В модуле StorageManager описаны внешние функции доступные другим программам в приложении.

  3.В качестве подмодуля StorageManager выступает storage, который непосредственно взаимодействует c API localeStorage и скрывает от других частей программы, детали по этого взаимодействия.

  4.Валидация данных реализована в модуле Validation, который проверяет существуют ли введенные данные в localeStorage, а также валидация пароля

  5.Остальная часть логики отведена на рендеринг страницы, путем манипуляции с DOM. В директории dom можно ознакомиться фрагментами данной логики.

  6.Отдельно стоит отметить файл messages, который хранит в себе информацию о сообщениях подсказках при авторизации

## 🔌 Запуск

В приложении не была реализована сборка проекта. Данную версию можно запустить с помощью плагина live server, либо же как вариант, путем перемещения локальных html файлов в браузер 😁.
