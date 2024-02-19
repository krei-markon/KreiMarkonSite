# Сайт Krei Markon

## Содержание

- [Описание](#описание)
  - [Идея](#идея)
  - [Материалы](#материалы)
  - [Codespaces](#codespaces)
- [Стек Технологий](#стек-технологий)
  - [Design](#design)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Production](#production)
- [Запуск](#запуск)
- [План](#план)
  - [Дизайн](#дизайн)
  - [CRM](#crm)
  - [Кабинет дизайнера](#кабинет-дизайнера)
  - [Кабинет клиента](#кабинет-клиента)
  - [Кабинет администратора](#кабинет-администратора)

## Описание

Сайт дизайн студии **Krei Markon**

### Идея

Наша цель создать целостную автономную экосистему, способную объединить работу дизайнеров и заказчиков для создания готового продукта. Упрощающая все промежуточные этапы разработки

### Материалы

- Проект на `GitHub`: [ссылка](https://github.com/orgs/krei-markon/projects/2)
- Презентация проекта: [ссылка](https://docs.google.com/presentation/d/1CMo-88mAKmbrTbQcbS13fPECzOtIU8zMQFkYXHSG2uE/edit?usp=sharing)
- `Behance` студии: [ссылка](https://www.behance.net/krei-markon)
- `Dribbble` студии: [ссылка](https://dribbble.com/krei-markon)
- `Figma` студии: [ссылка](https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1325803962736052548)
- `Builder.io` [ссылка](https://www.builder.io/)

### Codespaces

Для разработки настроена среда. Для её использования нажмите на кнопку ниже:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/krei-markon/KreiMarkonSite?quickstart=1)

## Стек Технологий

### Design

- `Figma`

### Backend

- `Django`
- `Postgresql`
- `Rest-Api`

### Frontend

- `React`
- `Redux`
- `Tailwind`

### Production

- `Nginx`
- `Docker`
- `Docker Compose`

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

## План

### Дизайн

Концепт многостраничного сайта, меню всегда тащим за собой, что то похожее как [здесь](https://queensymphony.ai/). Хотим запомниться, поэтому принимаются идеи дл главной страницы и нестандартные решения

- [ ] [Дизайн главной страницы](https://github.com/krei-markon/KreiMarkonSite/issues/1)
- [ ] Станица с кейсами
- [ ] Страница о нас

### CRM

Организовать `CRM` систему на сайте. Шаблон в `telegram`, подробная информация доступна участникам проекта в [репозитории](https://github.com/krei-markon/KreiMarkonBot)

- [x] Создать шаблон в `telegram`
- [ ] [Перенос и разработка CRM для заказов дизайнов](https://github.com/krei-markon/KreiMarkonSite/issues/11)

### Кабинет дизайнера

Реализовать собственны стек технологий для привлечения дизайнеров. Туда входит:

- [ ] [Файловая база данных для работ/разработок дизанейров](https://github.com/krei-markon/KreiMarkonSite/issues/4)
- [ ] Возможность контроля версий
- [ ] Связь с клиентом через `CRM` и отчетность итераций

### Кабинет клиента

Реализовать удобный кабинет клиента, где тот сможет отслеживать этап разработки

- [ ] Реализовать взаимодействие клиента с дизайнером через `CRM`
- [ ] История заказов, этапы реализации

### Кабинет администратора

Реализовать кабинет админа, где тот сможет производить `lead` рассылку, искать предполагаемых клиентов и контролировать этапы разработки продуктов

- [ ] [База данных предполагаемых пользователей](https://github.com/krei-markon/KreiMarkonSite/issues/10)
- [ ] `Lead` рассылка
