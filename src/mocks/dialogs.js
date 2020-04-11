const dialogs = [
  {
    id: 1,
    subject: 'Простой запрос',
    created: '12 МАЯ 2019',
    parts: [
      {
        id: 1,
        author: 'Vasiliy',
        authorId: 1,
        text: 'Привет, как дела?',
        created: '08-06-2019 23:59',
      },
      {
        id: 2,
        author: 'Petya',
        authorId: 2,
        created: '08-06-2019 01:20',
        text: 'Привет, все хорошо, спасибо!',
      },
      {
        id: 3,
        author: 'Petya',
        authorId: 2,
        created: '08-06-2019 05:20',
        text: 'А у тебя?',
      },
    ],
  },
  {
    id: 2,
    subject: 'Вопрос по домену',
    created: '06 ИЮЛЯ 2019',
    parts: [
      {
        id: 1,
        author: 'Petr',
        authorId: 3,
        created: '18-05-2019 12:20',
        text: 'Здравствуйте, тут есть кто-нибудь?',
      },
      {
        id: 2,
        author: 'Vasiliy',
        authorId: 1,
        created: '18-05-2019 12:34',
        text: 'Да, я вас слушаю!',
      },
      {
        id: 3,
        author: 'Petr',
        authorId: 3,
        created: '18-05-2019 12:38',
        text: 'Помогите мне настроить домен!',
      },
    ],
  },
  {
    id: 3,
    subject: 'Беседа',
    created: '18 ДЕКАБРЯ 2019',
    parts: [
      {
        id: 1,
        author: 'Masha',
        authorId: 4,
        created: '30-12-2019 12:20',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        id: 2,
        author: 'Dima',
        authorId: 5,
        created: '30-12-2019 12:34',
        text: 'Doloremque dolorem provident voluptatibus officia perspiciatis vel.',
      },
      {
        id: 3,
        author: 'Petr',
        authorId: 3,
        created: '30-12-2019 12:38',
        text: 'maiores molestiae laudantium pariatur facilis corrupti ipsa quia alias ipsum quis magnam, vitae tempore deserunt?',
      },
    ],
  },
  {
    id: 4,
    subject: 'Пустой диалог',
    created: '10 АПРЕЛЯ 2020',
    parts: [],
  },
];

export default dialogs;