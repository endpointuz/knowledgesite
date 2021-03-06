import { head } from 'lodash';
import girlPic from './assets/img/girl.png';
import manPic from './assets/img/manPic.png';
import igorPhoto from './assets/img/igor.jpg';
import oppGuy from './assets/img/opp-guy.png';


export const teachers = [
  {
    id: 'igor',
    name: 'Игорь Ким',
    position: 'Сооснователь и генеральный директор ENDPOINT',
    description: [
      'В Front-end разработке около 5 лет. За это время успел поработать как над обычными лендингами и разработкой магазинов, так и на более редких задачах. Работал над высоконагруженными веб-проектами в крупных компаниях США и Европы.',
      'Сооснователь cтудии ENDPOINT. Среди клиентов которых: МВД РУз, UZBAT',
    ],
    photo: igorPhoto,
  },
];

export const courses = [
  /**
   * HTML BEGINNER.
   */
  {
    id: 'html-beginner',
    title: 'Введение в верстку',
    description: 'Этот курс рассчитан на новичков без каких-либо знаний в сфере веб-технологий. На протяжении десяти уроков вы познакомитесь с фундаментальными понятиями и концепциями веб верстки. Какие могут возникнуть проблема в процессе работы и составите детальный план развития на ближайшие несколько лет',
    totalLessons: '10 занятий',
    period: '3 раза в неделю',
    startAt: 'Июль',
    link: '/courses/html-beginner',
    img: girlPic,
    pageData: {
      price: '600 000',
      startAt: '25 июля',
      teacher: head(teachers.filter(teacher => teacher.id === 'igor')),
      opportunity: {
        title: 'С чего начать свой путь в сфере веб-разработки?',
        description: 'Данный курс это первый шаг в мир веб-разработки. Ты изучишь основы верстки, необходимые для построения простых веб-страниц и, в целом, сайтов. Поймешь как необходимо учиться, чтобы достичь больших результатов в этом поприще',
        image: oppGuy,
      },
      courseProgram: [
        {
          id: 1,
          title: 'Установка и настройка виртуализации ОС Ubuntu',
          description: 'Вводный курс, рассказывающий о преимуществах использования *nix подобных ОС. Почему не стоит начинать учиться работать на Windows ОС. Рассматриваем базовые навыки использования операционной системы Ubuntu, работа в терминале и установка программ.',
        },
        {
          id: 2,
          title: 'Базовые команды в терминале',
          description: 'Продолжение изучения терминала и его основных команд. Рассматриваем команды для навигации, истории команд, создание и удаления файлов и директорий',
        },
        {
          id: 3,
          title: 'Пользователи, программы, права',
          description: 'Завершающий этап знакомства с ОС Ubuntu. Рассматриваем права пользователей, значение и исполнение файлов для программ и утилит в терминале. Понимаем базовую философия *nix',
        },
        {
          id: 4,
          title: 'Введение в HTML',
          description: 'Знакомство с версткой. Краткая история появления языка разметки. Рассматриваются наиболее популярные тэги, создаем первую веб-страницу',
        },
        {
          id: 5,
          title: 'Списки, ссылки, изображения',
          description: 'Учимся работать с медиа контентом, размещать гиперссылки и верстать списки. Так же рассматриваем основы семантической верстки данных элементов, для оптимизации SEO',
        },
        {
          id: 6,
          title: 'Введение в CSS',
          description: 'Знакомство со стилями для HTML-документа. Говорим про цвета, фон блока, размеры и стиля шрифтов, а также учимся работать с текстом',
        },
        {
          id: 7,
          title: 'CSS: Блочная верстка',
          description: 'Понимаем, как с помощью CSS можно стилизовать размеры и отступы блока. Рассматриваем позиционирование блоков на странице',
        },
        {
          id: 8,
          title: 'Создание форм',
          description: 'Одна из важнейших тем в курсе - работа с формами. Текстовые поля, кнопки множественного и одиночного выбора, выпадающие списки, это основные, но не единственные элементы рассматривающиеся в данной теме',
        },
        {
          id: 9,
          title: 'Создание таблиц',
          description: 'Учимся отрисовывать таблицы на странице. Понимаем как можно объеденить ячейки, установить размеры и рамки ячеек. Тема очень полезна, ведь она косвенно поможет в изучении фреймворка Bootstrap, который мы рассматриваем в дальнейшем',
        },
        {
          id: 10,
          title: 'GitHub, Autocomplete, Emmet, Хостинг',
          description: 'Заключительный этап курса. Мы научимся писать код быстрее, размещать страницы в сети интернет. Познакомимся с проектом GitHub pages и системой хостинга в целом',
        },
      ],
    },
  },
  /**
   * ============================ HTML ADVANCED =================================.
   */
  {
    id: 'html-advanced',
    title: 'Продвинутая верстка',
    description: 'Цель этого курса погрузить в детали и технологии фронт-энд верстальщика. Вы узнаете что такое семантика, как верстать SEO оптимизированно. Познакомитесь с новейшиими способами блочной разметки, трансформации объектов и анимации на странице',
    totalLessons: '8',
    period: '3 раза в неделю',
    startAt: 'Июль',
    link: '/courses/html-advanced',
    img: manPic,
    pageData: {
      price: '600 000',
      startAt: '25 июля',
      teacher: head(teachers.filter(teacher => teacher.id === 'igor')),
      opportunity: {
        title: 'С чего начать свой путь в сфере веб-разработки?',
        description: 'Данный курс это первый шаг в мир веб-разработки. Ты изучишь основы верстки, необходимые для построения простых веб-страниц и, в целом, сайтов. Поймешь как необходимо учиться, чтобы достичь больших результатов в этом поприще',
        image: oppGuy,
      },
      courseProgram: [
        {
          id: 1,
          title: 'Установка и настройка виртуализации ОС Ubuntu',
          description: 'Вводный курс, рассказывающий о преимуществах использования *nix подобных ОС. Почему не стоит начинать учиться работать на Windows ОС. Рассматриваем базовые навыки использования операционной системы Ubuntu, работа в терминале и установка программ.',
        },
        {
          id: 2,
          title: 'Базовые команды в терминале',
          description: 'Продолжение изучения терминала и его основных команд. Рассматриваем команды для навигации, истории команд, создание и удаления файлов и директорий',
        },
        {
          id: 3,
          title: 'Пользователи, программы, права',
          description: 'Завершающий этап знакомства с ОС Ubuntu. Рассматриваем права пользователей, значение и исполнение файлов для программ и утилит в терминале. Понимаем базовую философия *nix',
        },
        {
          id: 4,
          title: 'Введение в HTML',
          description: 'Знакомство с версткой. Краткая история появления языка разметки. Рассматриваются наиболее популярные тэги, создаем первую веб-страницу',
        },
        {
          id: 5,
          title: 'Списки, ссылки, изображения',
          description: 'Учимся работать с медиа контентом, размещать гиперссылки и верстать списки. Так же рассматриваем основы семантической верстки данных элементов, для оптимизации SEO',
        },
        {
          id: 6,
          title: 'Введение в CSS',
          description: 'Знакомство со стилями для HTML-документа. Говорим про цвета, фон блока, размеры и стиля шрифтов, а также учимся работать с текстом',
        },
        {
          id: 7,
          title: 'CSS: Блочная верстка',
          description: 'Понимаем, как с помощью CSS можно стилизовать размеры и отступы блока. Рассматриваем позиционирование блоков на странице',
        },
        {
          id: 8,
          title: 'Создание форм',
          description: 'Одна из важнейших тем в курсе - работа с формами. Текстовые поля, кнопки множественного и одиночного выбора, выпадающие списки, это основные, но не единственные элементы рассматривающиеся в данной теме',
        },
        {
          id: 9,
          title: 'Создание таблиц',
          description: 'Учимся отрисовывать таблицы на странице. Понимаем как можно объеденить ячейки, установить размеры и рамки ячеек. Тема очень полезна, ведь она косвенно поможет в изучении фреймворка Bootstrap, который мы рассматриваем в дальнейшем',
        },
        {
          id: 10,
          title: 'GitHub, Autocomplete, Emmet, Хостинг',
          description: 'Заключительный этап курса. Мы научимся писать код быстрее, размещать страницы в сети интернет. Познакомимся с проектом GitHub pages и системой хостинга в целом',
        },
      ],
    },
  },
  /**
   * ============================ JS BEGINNER =================================.
   */
  {
    id: 'js-beginner',
    title: 'Основы программирования',
    description: 'На данном курсе основным языком изучения является JavaScript - стандарт де-факто в мире фронтенда. Мы изучим его синтаксис, ради изучения программирования в целом. Курс построен таким образом, что JavaScript это всего лишь инструмент, а изучать мы будем фундаментальные навыки программирования.',
    totalLessons: '14 занятий',
    period: '3 раза в неделю',
    startAt: 'Июль',
    link: '/courses/js-beginner',
    img: girlPic,
    pageData: {
      price: '600 000',
      startAt: '25 июля',
      teacher: head(teachers.filter(teacher => teacher.id === 'igor')),
      opportunity: {
        title: 'С чего начать свой путь в сфере веб-разработки?',
        description: 'Данный курс это первый шаг в мир веб-разработки. Ты изучишь основы верстки, необходимые для построения простых веб-страниц и, в целом, сайтов. Поймешь как необходимо учиться, чтобы достичь больших результатов в этом поприще',
        image: oppGuy,
      },
      courseProgram: [
        {
          id: 1,
          title: 'Установка и настройка виртуализации ОС Ubuntu',
          description: 'Вводный курс, рассказывающий о преимуществах использования *nix подобных ОС. Почему не стоит начинать учиться работать на Windows ОС. Рассматриваем базовые навыки использования операционной системы Ubuntu, работа в терминале и установка программ.',
        },
        {
          id: 2,
          title: 'Базовые команды в терминале',
          description: 'Продолжение изучения терминала и его основных команд. Рассматриваем команды для навигации, истории команд, создание и удаления файлов и директорий',
        },
        {
          id: 3,
          title: 'Пользователи, программы, права',
          description: 'Завершающий этап знакомства с ОС Ubuntu. Рассматриваем права пользователей, значение и исполнение файлов для программ и утилит в терминале. Понимаем базовую философия *nix',
        },
        {
          id: 4,
          title: 'Введение в HTML',
          description: 'Знакомство с версткой. Краткая история появления языка разметки. Рассматриваются наиболее популярные тэги, создаем первую веб-страницу',
        },
        {
          id: 5,
          title: 'Списки, ссылки, изображения',
          description: 'Учимся работать с медиа контентом, размещать гиперссылки и верстать списки. Так же рассматриваем основы семантической верстки данных элементов, для оптимизации SEO',
        },
        {
          id: 6,
          title: 'Введение в CSS',
          description: 'Знакомство со стилями для HTML-документа. Говорим про цвета, фон блока, размеры и стиля шрифтов, а также учимся работать с текстом',
        },
        {
          id: 7,
          title: 'CSS: Блочная верстка',
          description: 'Понимаем, как с помощью CSS можно стилизовать размеры и отступы блока. Рассматриваем позиционирование блоков на странице',
        },
        {
          id: 8,
          title: 'Создание форм',
          description: 'Одна из важнейших тем в курсе - работа с формами. Текстовые поля, кнопки множественного и одиночного выбора, выпадающие списки, это основные, но не единственные элементы рассматривающиеся в данной теме',
        },
        {
          id: 9,
          title: 'Создание таблиц',
          description: 'Учимся отрисовывать таблицы на странице. Понимаем как можно объеденить ячейки, установить размеры и рамки ячеек. Тема очень полезна, ведь она косвенно поможет в изучении фреймворка Bootstrap, который мы рассматриваем в дальнейшем',
        },
        {
          id: 10,
          title: 'GitHub, Autocomplete, Emmet, Хостинг',
          description: 'Заключительный этап курса. Мы научимся писать код быстрее, размещать страницы в сети интернет. Познакомимся с проектом GitHub pages и системой хостинга в целом',
        },
      ],
    },
  },
  /**
   * ============================ JS ADVANCED =================================.
   */
  {
    id: 'js-advanced',
    title: 'Продвинутое программирование',
    description: 'Логическое продолжение курса "Основ программирования". Здесь не появится практически ничего нового из синтаксиса, но будет многое из принципов программирования, построения архитектуры, читабельности кода. Объясняем зачем это нужно и как это эффективно использовать',
    totalLessons: '14',
    period: '3 раза в неделю',
    startAt: 'Июль',
    link: '/courses/js-advanced',
    img: manPic,
    pageData: {
      price: '600 000',
      startAt: '25 июля',
      teacher: head(teachers.filter(teacher => teacher.id === 'igor')),
      opportunity: {
        title: 'С чего начать свой путь в сфере веб-разработки?',
        description: 'Данный курс это первый шаг в мир веб-разработки. Ты изучишь основы верстки, необходимые для построения простых веб-страниц и, в целом, сайтов. Поймешь как необходимо учиться, чтобы достичь больших результатов в этом поприще',
        image: oppGuy,
      },
      courseProgram: [
        {
          id: 1,
          title: 'Установка и настройка виртуализации ОС Ubuntu',
          description: 'Вводный курс, рассказывающий о преимуществах использования *nix подобных ОС. Почему не стоит начинать учиться работать на Windows ОС. Рассматриваем базовые навыки использования операционной системы Ubuntu, работа в терминале и установка программ.',
        },
        {
          id: 2,
          title: 'Базовые команды в терминале',
          description: 'Продолжение изучения терминала и его основных команд. Рассматриваем команды для навигации, истории команд, создание и удаления файлов и директорий',
        },
        {
          id: 3,
          title: 'Пользователи, программы, права',
          description: 'Завершающий этап знакомства с ОС Ubuntu. Рассматриваем права пользователей, значение и исполнение файлов для программ и утилит в терминале. Понимаем базовую философия *nix',
        },
        {
          id: 4,
          title: 'Введение в HTML',
          description: 'Знакомство с версткой. Краткая история появления языка разметки. Рассматриваются наиболее популярные тэги, создаем первую веб-страницу',
        },
        {
          id: 5,
          title: 'Списки, ссылки, изображения',
          description: 'Учимся работать с медиа контентом, размещать гиперссылки и верстать списки. Так же рассматриваем основы семантической верстки данных элементов, для оптимизации SEO',
        },
        {
          id: 6,
          title: 'Введение в CSS',
          description: 'Знакомство со стилями для HTML-документа. Говорим про цвета, фон блока, размеры и стиля шрифтов, а также учимся работать с текстом',
        },
        {
          id: 7,
          title: 'CSS: Блочная верстка',
          description: 'Понимаем, как с помощью CSS можно стилизовать размеры и отступы блока. Рассматриваем позиционирование блоков на странице',
        },
        {
          id: 8,
          title: 'Создание форм',
          description: 'Одна из важнейших тем в курсе - работа с формами. Текстовые поля, кнопки множественного и одиночного выбора, выпадающие списки, это основные, но не единственные элементы рассматривающиеся в данной теме',
        },
        {
          id: 9,
          title: 'Создание таблиц',
          description: 'Учимся отрисовывать таблицы на странице. Понимаем как можно объеденить ячейки, установить размеры и рамки ячеек. Тема очень полезна, ведь она косвенно поможет в изучении фреймворка Bootstrap, который мы рассматриваем в дальнейшем',
        },
        {
          id: 10,
          title: 'GitHub, Autocomplete, Emmet, Хостинг',
          description: 'Заключительный этап курса. Мы научимся писать код быстрее, размещать страницы в сети интернет. Познакомимся с проектом GitHub pages и системой хостинга в целом',
        },
      ],
    },
  },
  /**
   * ============================ REACT =================================.
   */
  {
    id: 'react',
    title: 'React',
    description: 'React - самый популярныйй фреймворк последних лет. Благодаря ему, Вы сможете построить любое веб-приложение, начиная от простого менеджера задач до онлайн-чата. Этот курс посвящен ему, его основам, философии и принципам. Как итог, данныйй курс завершает нашу программу и делает вас front-end разработчиком',
    totalLessons: '8',
    period: '3 раза в неделю',
    startAt: 'Июль',
    link: '/courses/react',
    img: girlPic,
    pageData: {
      price: '600 000',
      startAt: '25 июля',
      teacher: head(teachers.filter(teacher => teacher.id === 'igor')),
      opportunity: {
        title: 'С чего начать свой путь в сфере веб-разработки?',
        description: 'Данный курс это первый шаг в мир веб-разработки. Ты изучишь основы верстки, необходимые для построения простых веб-страниц и, в целом, сайтов. Поймешь как необходимо учиться, чтобы достичь больших результатов в этом поприще',
        image: oppGuy,
      },
      courseProgram: [
        {
          id: 1,
          title: 'Установка и настройка виртуализации ОС Ubuntu',
          description: 'Вводный курс, рассказывающий о преимуществах использования *nix подобных ОС. Почему не стоит начинать учиться работать на Windows ОС. Рассматриваем базовые навыки использования операционной системы Ubuntu, работа в терминале и установка программ.',
        },
        {
          id: 2,
          title: 'Базовые команды в терминале',
          description: 'Продолжение изучения терминала и его основных команд. Рассматриваем команды для навигации, истории команд, создание и удаления файлов и директорий',
        },
        {
          id: 3,
          title: 'Пользователи, программы, права',
          description: 'Завершающий этап знакомства с ОС Ubuntu. Рассматриваем права пользователей, значение и исполнение файлов для программ и утилит в терминале. Понимаем базовую философия *nix',
        },
        {
          id: 4,
          title: 'Введение в HTML',
          description: 'Знакомство с версткой. Краткая история появления языка разметки. Рассматриваются наиболее популярные тэги, создаем первую веб-страницу',
        },
        {
          id: 5,
          title: 'Списки, ссылки, изображения',
          description: 'Учимся работать с медиа контентом, размещать гиперссылки и верстать списки. Так же рассматриваем основы семантической верстки данных элементов, для оптимизации SEO',
        },
        {
          id: 6,
          title: 'Введение в CSS',
          description: 'Знакомство со стилями для HTML-документа. Говорим про цвета, фон блока, размеры и стиля шрифтов, а также учимся работать с текстом',
        },
        {
          id: 7,
          title: 'CSS: Блочная верстка',
          description: 'Понимаем, как с помощью CSS можно стилизовать размеры и отступы блока. Рассматриваем позиционирование блоков на странице',
        },
        {
          id: 8,
          title: 'Создание форм',
          description: 'Одна из важнейших тем в курсе - работа с формами. Текстовые поля, кнопки множественного и одиночного выбора, выпадающие списки, это основные, но не единственные элементы рассматривающиеся в данной теме',
        },
        {
          id: 9,
          title: 'Создание таблиц',
          description: 'Учимся отрисовывать таблицы на странице. Понимаем как можно объеденить ячейки, установить размеры и рамки ячеек. Тема очень полезна, ведь она косвенно поможет в изучении фреймворка Bootstrap, который мы рассматриваем в дальнейшем',
        },
        {
          id: 10,
          title: 'GitHub, Autocomplete, Emmet, Хостинг',
          description: 'Заключительный этап курса. Мы научимся писать код быстрее, размещать страницы в сети интернет. Познакомимся с проектом GitHub pages и системой хостинга в целом',
        },
      ],
    },
  },
];
