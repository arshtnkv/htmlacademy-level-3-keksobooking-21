# 16.09.2020
# Личный проект «Кексобукинг» [![Build status][travis-image]][travis-url]

* Студент: [Антон Решетников](https://up.htmlacademy.ru/javascript/21/user/1263227).
* Наставник: `Евгений Новиков`.

---

_Не удаляйте и не обращайте внимание на файлы:_<br>
_`.editorconfig`, `.eslintrc`, `.gitattributes`, `.gitignore`, `.travis.yml`, `package-lock.json`, `package.json`._

---

### Памятка

#### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

#### 2. Создайте форк

Откройте репозиторий и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии будет скопирован в ваш аккаунт.

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275195-078bb816-0050-11e8-8708-89266d2fae5d.png">

Получится вот так:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275196-07baf78e-0050-11e8-9275-404a4b63efb1.png">

#### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Также обратите внимание, что клонировать репозиторий нужно через SSH, а не через HTTPS. Нажмите зелёную кнопку в правой части экрана, чтобы скопировать SSH-адрес вашего репозитория:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275197-07d8e79e-0050-11e8-95c1-a30a433687d8.png">

Клонировать репозиторий можно так:

```
git clone SSH-адрес_вашего_форка
```

Команда клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

#### 4. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/javascript"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на интенсивном онлайн‑курсе «[JavaScript. Профессиональная разработка веб-интерфейсов](https://htmlacademy.ru/intensive/javascript)» от [HTML Academy](https://htmlacademy.ru).

[travis-image]: https://travis-ci.com/htmlacademy-javascript/1263227-keksobooking-21.svg?branch=master
[travis-url]: https://travis-ci.com/htmlacademy-javascript/1263227-keksobooking-21

## [Гайд по работе со сборкой] 📕

## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Сборка проекта, без минификации <br>
и оптимизация изображений перед деплоем на прод - `npm run nomin`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`
