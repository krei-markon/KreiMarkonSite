# Krei Markon

---

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/krei-markon/KreiMarkonSite?quickstart=1)

## Содержание

- [Идея](#идея)
- [Стек Технологий](#стек-технологий)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Production](#production)
- [Запуск](#запуск)
- [Масштабирование](#масштабирование)
- [Дизайн](#дизайн)

---

## Идея

Сайт дизайн студии ***Krei Markon***

---

## Стек Технологий

### Backend

1. `Django`
2. `Postgresql`
3. `Rest-Api`

### Frontend

1. `React`
2. `Redux`
3. `Tailwind`

### Production

1. `Nginx`
2. `Docker`
3. `Docker Compose`

---

## Запуск

- Production:

 ```sh
 sudo docker compose up -d
 ```

- Development:

 ```sh
 source backend.sh

 source frontend.sh
 ```

---

## Масштабирование

1. Далее планируется организовать `CRM` систему на сайте, шаблон для который уже реализован в `telegram`
2. Реализовать собственны стек технологий для привлечения дизайнеров
3. Сформировать кабинеты и функционалы трех уровней:

- Клиент
- Дизайнер
- Сервис

Похожее реализовано в телеграм боте, с функционалом которого можно ознакомиться в презентации: [ссылка](https://docs.google.com/presentation/d/1WKvUbvBe3qrHjb-52ZIlfuUqy4FXi_L4zd3C77jvUL0/edit?usp=sharing)

---

## Дизайн

Реализуем три страницы:

1. Главная
2. Кейсы
3. О нас

Концепт многостраничного сайта, меню всегда тащим за собой, что то похожее как [здесь](https://queensymphony.ai/). Хотим запомниться, поэтому принимаются идеи дл главной страницы и нестандартные решения

### Главная

- Была идея с лого на нем и какой-то анимацией

### Кейсы

- Хочется, чтобы бы были интересно представлены, аля на голом торсе мужика

### О нас

- Рассказ о студии, наши фотки или персонажи
