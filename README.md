# Krei Markon

---

## Содержание

- [Идея](#идея)
- [Стек Технологий](#стек-технологий)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Production](#production)
- [Запуск](#запуск)
- [Масштабирование](#масштабирование)

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
2. Дать клиенту возможность заказывать товары различных брендов
3. Сформировать кабинеты и функционалы четырех уровней:

- Клиент
- Дизайнер
- Владелец бренда
- Сервис

Похожее реализовано в телеграм боте, с функционалом которого можно ознакомиться в презентации: [ссылка](https://docs.google.com/presentation/d/1WKvUbvBe3qrHjb-52ZIlfuUqy4FXi_L4zd3C77jvUL0/edit?usp=sharing)
