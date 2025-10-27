const vendings = [
  {
    "id": 501,
    "title": "Капучино Брависсимо",
    "description": "Нежный вкус капучино с воздушными сливками.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.2, "comments": 180},
    "actions": ["Скидки", "Новинка"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 502,
    "title": "Цикорий Лесной",
    "description": "Полезный напиток с приятным ароматом цикория.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1200, "priceCrossed": 1500},
      {"value": 18, "price": 2000, "priceCrossed": 2500},
      {"value": 25, "price": 2800, "priceCrossed": 3300},
      {"value": 30, "price": 3300, "priceCrossed": 3800},
      {"value": 33, "price": 3600, "priceCrossed": 4100}
    ],
    "rate": {"rating": 4.3, "comments": 150},
    "actions": ["Ваш выбор", "Скидки"],
    "kind": "Гранулированный цикорий"
  },
  {
    "id": 503,
    "title": "Молоко Провансаль",
    "description": "Идеально растворяется в горячих напитках.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1300, "priceCrossed": 1600},
      {"value": 18, "price": 2100, "priceCrossed": 2600},
      {"value": 25, "price": 2900, "priceCrossed": 3400},
      {"value": 30, "price": 3400, "priceCrossed": 3900},
      {"value": 33, "price": 3700, "priceCrossed": 4200}
    ],
    "rate": {"rating": 4.4, "comments": 170},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Сухое молоко гранулированное"
  },
  {
    "id": 504,
    "title": "Экстра Черный",
    "description": "Крепкий черный кофе для настоящих ценителей.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1300, "priceCrossed": 1600},
      {"value": 18, "price": 2200, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3500},
      {"value": 30, "price": 3500, "priceCrossed": 4000},
      {"value": 33, "price": 3800, "priceCrossed": 4300}
    ],
    "rate": {"rating": 4.6, "comments": 210},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 505,
    "title": "Медовая сладость",
    "description": "Растворимый кофе с добавлением натурального меда.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2400, "priceCrossed": 2900},
      {"value": 25, "price": 3200, "priceCrossed": 3700},
      {"value": 30, "price": 3700, "priceCrossed": 4200},
      {"value": 33, "price": 4000, "priceCrossed": 4500}
    ],
    "rate": {"rating": 4.1, "comments": 160},
    "actions": ["Скидки", "Новинка"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 506,
    "title": "Крем-карамель",
    "description": "Изысканный вкус карамельного крема.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2600, "priceCrossed": 3100},
      {"value": 25, "price": 3600, "priceCrossed": 4100},
      {"value": 30, "price": 4100, "priceCrossed": 4600},
      {"value": 33, "price": 4400, "priceCrossed": 4900}
    ],
    "rate": {"rating": 4.7, "comments": 250},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 507,
    "title": "Фруктово-ягодный микс",
    "description": "Свежесть фруктов и ягод в каждом глотке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1400, "priceCrossed": 1700},
      {"value": 18, "price": 2300, "priceCrossed": 2800},
      {"value": 25, "price": 3100, "priceCrossed": 3600},
      {"value": 30, "price": 3600, "priceCrossed": 4100},
      {"value": 33, "price": 3900, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.0, "comments": 120},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 508,
    "title": "Сладкая ваниль",
    "description": "Легкий оттенок натуральной ванили.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1400, "priceCrossed": 1700},
      {"value": 18, "price": 2300, "priceCrossed": 2800},
      {"value": 25, "price": 3100, "priceCrossed": 3600},
      {"value": 30, "price": 3600, "priceCrossed": 4100},
      {"value": 33, "price": 3900, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.5, "comments": 200},
    "actions": ["Ваш выбор", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 509,
    "title": "Горячий шоколад",
    "description": "Классический горячий шоколад с нежным вкусом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2400, "priceCrossed": 2900},
      {"value": 25, "price": 3200, "priceCrossed": 3700},
      {"value": 30, "price": 3700, "priceCrossed": 4200},
      {"value": 33, "price": 4000, "priceCrossed": 4500}
    ],
    "rate": {"rating": 4.3, "comments": 190},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный какао"
  },
  {
    "id": 510,
    "title": "Латте Фреш",
    "description": "Освежающее латте с молочным оттенком.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2400, "priceCrossed": 2900},
      {"value": 25, "price": 3200, "priceCrossed": 3700},
      {"value": 30, "price": 3700, "priceCrossed": 4200},
      {"value": 33, "price": 4000, "priceCrossed": 4500}
    ],
    "rate": {"rating": 4.4, "comments": 180},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 511,
    "title": "Порохообразный крепкий",
    "description": "Кофе тонкого помола для истинных гурманов.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1400, "priceCrossed": 1700},
      {"value": 18, "price": 2300, "priceCrossed": 2800},
      {"value": 25, "price": 3100, "priceCrossed": 3600},
      {"value": 30, "price": 3600, "priceCrossed": 4100},
      {"value": 33, "price": 3900, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.6, "comments": 220},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Кофе порошкообразный"
  },
  {
    "id": 512,
    "title": "Карибская смесь",
    "description": "Смесь карибских сортов кофе с ярким букетом ароматов.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3900},
      {"value": 30, "price": 3900, "priceCrossed": 4400},
      {"value": 33, "price": 4200, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 513,
    "title": "Колумбийский Экстра",
    "description": "Высококачественный колумбийский кофе премиум-класса.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2700, "priceCrossed": 3200},
      {"value": 25, "price": 3600, "priceCrossed": 4100},
      {"value": 30, "price": 4100, "priceCrossed": 4600},
      {"value": 33, "price": 4400, "priceCrossed": 4900}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 514,
    "title": "Чёрный Бархат",
    "description": "Интенсивный чёрный кофе с насыщенным вкусом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2400, "priceCrossed": 2900},
      {"value": 25, "price": 3200, "priceCrossed": 3700},
      {"value": 30, "price": 3700, "priceCrossed": 4200},
      {"value": 33, "price": 4000, "priceCrossed": 4500}
    ],
    "rate": {"rating": 4.5, "comments": 240},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 515,
    "title": "Африканский Колорит",
    "description": "Яркий африканский сорт кофе с фруктовыми нотками.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3900},
      {"value": 30, "price": 3900, "priceCrossed": 4400},
      {"value": 33, "price": 4200, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.4, "comments": 200},
    "actions": ["Микролот", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 516,
    "title": "Арабика Гранд",
    "description": "Натуральный аромат зернового кофе Арабика.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 230},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 517,
    "title": "Лунный свет",
    "description": "Изящный баланс аромата и мягкости.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 240},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 518,
    "title": "Золотистый какао",
    "description": "Богатый и глубокий вкус какао-бобов.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 230},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированный какао"
  },
  {
    "id": 519,
    "title": "Солнечный цикорий",
    "description": "Благородный напиток с изысканным вкусом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1200, "priceCrossed": 1500},
      {"value": 18, "price": 2000, "priceCrossed": 2500},
      {"value": 25, "price": 2800, "priceCrossed": 3300},
      {"value": 30, "price": 3300, "priceCrossed": 3800},
      {"value": 33, "price": 3600, "priceCrossed": 4100}
    ],
    "rate": {"rating": 4.4, "comments": 190},
    "actions": ["Ваш выбор", "Скидки"],
    "kind": "Гранулированный цикорий"
  },
  {
    "id": 520,
    "title": "Венский американо",
    "description": "Классический рецепт кофе по-венски.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1300, "priceCrossed": 1600},
      {"value": 18, "price": 2100, "priceCrossed": 2600},
      {"value": 25, "price": 2900, "priceCrossed": 3400},
      {"value": 30, "price": 3400, "priceCrossed": 3900},
      {"value": 33, "price": 3700, "priceCrossed": 4200}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Скидки", "Популярный"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 521,
    "title": "Индонезийская арабика",
    "description": "Сорта арабики с индонезийских островов.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 522,
    "title": "Бариста Экспрессо",
    "description": "Профессиональный эспрессо высокого качества.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 523,
    "title": "Дижестив Латте",
    "description": "Классическое сочетание молока и кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 240},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 524,
    "title": "Французский пресс",
    "description": "Традиционный французский способ приготовления кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 525,
    "title": "Итальянский эспрессо",
    "description": "Настоящий итальянский вкус эспрессо.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 526,
    "title": "Кубинский мокко",
    "description": "Уникальный кубинский стиль приготовления кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 527,
    "title": "Турецкий кофе",
    "description": "Традиционный турецкий метод заваривания кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофе порошкообразный"
  },
  {
    "id": 528,
    "title": "Французский порошок",
    "description": "Французские технологии изготовления порошка.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Скидки", "Популярное"],
    "kind": "Кофе порошкообразный"
  },
  {
    "id": 529,
    "title": "Молочный коктейль",
    "description": "Молочная основа для кофейных напитков.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1300, "priceCrossed": 1600},
      {"value": 18, "price": 2100, "priceCrossed": 2600},
      {"value": 25, "price": 2900, "priceCrossed": 3400},
      {"value": 30, "price": 3400, "priceCrossed": 3900},
      {"value": 33, "price": 3700, "priceCrossed": 4200}
    ],
    "rate": {"rating": 4.5, "comments": 230},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Сухое молоко гранулированное"
  },
  {
    "id": 530,
    "title": "Лате фраппе",
    "description": "Холодный вариант классического латте.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.4, "comments": 220},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 531,
    "title": "Перуанская робуста",
    "description": "Робуста перуанских высокогорных плантаций.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 532,
    "title": "Домашняя классика",
    "description": "Классический вкус домашнего напитка.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный кофе"
  },
    {
    "id": 533,
    "title": "Темный лес",
    "description": "Настой глубокого черного цвета с древесными нотками.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 240},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 534,
    "title": "Мокко Луна",
    "description": "Насыщенный мохито-мокко с яркими цветочными оттенками.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 535,
    "title": "Южный континент",
    "description": "Ассортимент зерен Южной Америки.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 536,
    "title": "Страсть Амазонки",
    "description": "Волшебный аромат экзотического леса Амазонии.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 537,
    "title": "Арктический романс",
    "description": "Охлажденный напиток с морскими нотками свежести.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 538,
    "title": "Вечернее наслаждение",
    "description": "Нежный вкус вечернего отдыха.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 240},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 539,
    "title": "Австрийский вальс",
    "description": "Гармоничный букет вкусов австрийского кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 540,
    "title": "Весенний рассвет",
    "description": "Светлый утренний бодрящий напиток.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 541,
    "title": "Северное сияние",
    "description": "Магия северного света в каждой чашечке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 542,
    "title": "Золотой лотос",
    "description": "Редкий вид азиатской арабики с утончённым вкусом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Скидки", "Популярное"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 543,
    "title": "Императорский завтрак",
    "description": "Бархатистый классический кофе для завтрака.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.5, "comments": 240},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 544,
    "title": "Конфетти",
    "description": "Небольшие кусочки сахара и специи в шоколаде.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированный какао"
  },
  {
    "id": 545,
    "title": "Медовые капли",
    "description": "Натуральный пчелиный продукт с приятными нотками.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Сорт недели", "Популярное"],
    "kind": "Гранулированный кофе"
  },
  {
    "id": 546,
    "title": "Цветочные облака",
    "description": "Воздушный цветок ароматизированного кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2500, "priceCrossed": 3000},
      {"value": 25, "price": 3500, "priceCrossed": 4000},
      {"value": 30, "price": 4000, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 5000}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Скидки", "Популярное"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 547,
    "title": "Цветочное облако",
    "description": "Светлый воздушный аромат зернового кофе с цветочным оттенком.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1600, "priceCrossed": 1900},
        {"value": 18, "price": 2400, "priceCrossed": 2800},
        {"value": 25, "price": 3200, "priceCrossed": 3600},
        {"value": 30, "price": 3800, "priceCrossed": 4200},
        {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.7, "comments": 260},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 548,
    "title": "Медовый эспрессо",
    "description": "Яркая комбинация обжаренных зерен арабского сорта с натуральным медом.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1700, "priceCrossed": 2000},
        {"value": 18, "price": 2500, "priceCrossed": 2900},
        {"value": 25, "price": 3300, "priceCrossed": 3700},
        {"value": 30, "price": 3900, "priceCrossed": 4300},
        {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.6, "comments": 240},
    "actions": ["Популярное", "Новый урожай"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 549,
    "title": "Лунный свет",
    "description": "Щепотка лаванды в мягком вкусе робусты с легким оттенком шоколада.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1500, "priceCrossed": 1800},
        {"value": 18, "price": 2300, "priceCrossed": 2700},
        {"value": 25, "price": 3000, "priceCrossed": 3400},
        {"value": 30, "price": 3600, "priceCrossed": 4000},
        {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.8, "comments": 280},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 550,
    "title": "Карибский рассвет",
    "description": "Свежесть цитрусовых в ярком купаже бразильской арабики.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1800, "priceCrossed": 2100},
        {"value": 18, "price": 2600, "priceCrossed": 3000},
        {"value": 25, "price": 3400, "priceCrossed": 3800},
        {"value": 30, "price": 4000, "priceCrossed": 4400},
        {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.9, "comments": 300},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 551,
    "title": "Итальянские мотивы",
    "description": "Классический итальянский стиль в смеси крепких сортов с насыщенным вкусом.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1700, "priceCrossed": 2000},
        {"value": 18, "price": 2500, "priceCrossed": 2900},
        {"value": 25, "price": 3300, "priceCrossed": 3700},
        {"value": 30, "price": 3900, "priceCrossed": 4300},
        {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 270},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 552,
    "title": "Дождливый вечер",
    "description": "Теплые ноты орехового сиропа и молочного шоколада в чашечке капучино.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1600, "priceCrossed": 1900},
        {"value": 18, "price": 2400, "priceCrossed": 2800},
        {"value": 25, "price": 3200, "priceCrossed": 3600},
        {"value": 30, "price": 3800, "priceCrossed": 4200},
        {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 250},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 553,
    "title": "Русский завтрак",
    "description": "Традиционный русский вкус крепкого кофе с горчинкой грецкого ореха.",
    "category": "vending",
    "weights": [
        {"value": 10, "price": 1500, "priceCrossed": 1800},
        {"value": 18, "price": 2300, "priceCrossed": 2700},
        {"value": 25, "price": 3000, "priceCrossed": 3400},
        {"value": 30, "price": 3600, "priceCrossed": 4000},
        {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.8, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 554,
    "title": "Каприченто",
    "description": "Обжаренные зерна премиум-класса с легкой кислинкой ягод и специй.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 555,
    "title": "Восточная сказка",
    "description": "Арабика средней обжарки с кардамоном и мускатом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 556,
    "title": "Австралийский экспресс",
    "description": "Крепкий бодрящий кофе микролота с ярко выраженной кислотностью.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.9, "comments": 320},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 557,
    "title": "Имбирный рай",
    "description": "Энергия имбиря сочетается с мягким вкусом свежемолотого кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2300, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3400},
      {"value": 30, "price": 3600, "priceCrossed": 4000},
      {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.7, "comments": 280},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 558,
    "title": "Тропическое приключение",
    "description": "Яркое сочетание экзотических фруктов и яркой кислоты арабики.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 260},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 559,
    "title": "Горячий тропик",
    "description": "Сладковатый аромат манго и папайи в освежающем напитке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 560,
    "title": "Африканская ночь",
    "description": "Темная обжарка африканских зерен с ярким шоколадным послевкусием.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 561,
    "title": "Северное сияние",
    "description": "Легкость лесных ягод и свежесть мяты в каждом глотке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 562,
    "title": "Тайна Востока",
    "description": "Эксклюзивная смесь восточных пряностей и мягкой арабики.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 563,
    "title": "Алтайская прохлада",
    "description": "Натуральный цикорий с добавлением Алтайского меда и трав.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2300, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3400},
      {"value": 30, "price": 3600, "priceCrossed": 4000},
      {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.8, "comments": 300},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированный цикорий"
  },
  {
    "id": 564,
    "title": "Летняя фантазия",
    "description": "Освежающее лето в каждой чашке благодаря ноткам лимона и лайма.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 260},
    "actions": ["Скидки", "Новинка"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 565,
    "title": "Южная страсть",
    "description": "Романтический букет южного солнца с лёгкой сладостью инжира.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 280},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 566,
    "title": "Индийский базар",
    "description": "Удивительный микс индийских специй и высококачественного кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 300},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 567,
    "title": "Солнечный марафон",
    "description": "Бодрость солнечного утра в уникальной смеси зернового кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 568,
    "title": "Камчатский восход",
    "description": "Естественный вкус Камчатки в сочетании с цедрой апельсина.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 569,
    "title": "Сибирская зима",
    "description": "Горячий согревающий кофе с терпким запахом сибирских кедровых шишек.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 570,
    "title": "Московская осень",
    "description": "Меланхоличный осенний мотив с тёплыми нотами яблочной пастилы.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 571,
    "title": "Степной чай",
    "description": "Напиток с душистыми степными травами и лёгкими сливочными нотами.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2300, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3400},
      {"value": 30, "price": 3600, "priceCrossed": 4000},
      {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.7, "comments": 280},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 572,
    "title": "Кубинский самба",
    "description": "Вдохновение кубинской культуры в насыщенном вкусе жареного кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.8, "comments": 300},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 573,
    "title": "Балканский ветер",
    "description": "Хрустящие орехи и мягкий кофе создают идеальный дуэт вкуса.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.9, "comments": 310},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 574,
    "title": "Крымская весна",
    "description": "Приятный аромат крымских трав в элегантном купаже робусты.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 576,
    "title": "Мокко Эквадор",
    "description": "Гармоничное соединение горького шоколада и эквадорской арабики.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 577,
    "title": "Черничный бриз",
    "description": "Восхитительная композиция черники и молочной пенки в одном стакане.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 578,
    "title": "Морская волна",
    "description": "Прибрежный аромат соли и морской свежести в вашей чашке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2300, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3400},
      {"value": 30, "price": 3600, "priceCrossed": 4000},
      {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.8, "comments": 300},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 579,
    "title": "Абрикосовый поцелуй",
    "description": "Солнышко абрикоса в вашем утреннем кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 580,
    "title": "Лаймовый шторм",
    "description": "Взрыв свежих цитрусов в прохладном кофейном напитке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 581,
    "title": "Антарктический лед",
    "description": "Ощутите холод антарктического льда в своем горячем напитке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1500, "priceCrossed": 1800},
      {"value": 18, "price": 2300, "priceCrossed": 2700},
      {"value": 25, "price": 3000, "priceCrossed": 3400},
      {"value": 30, "price": 3600, "priceCrossed": 4000},
      {"value": 33, "price": 4000, "priceCrossed": 4400}
    ],
    "rate": {"rating": 4.8, "comments": 300},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 582,
    "title": "Мятный сад",
    "description": "Прохлада свежей мяты с мягким привкусом молока.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 583,
    "title": "Колумбийская мечта",
    "description": "Богатая палитра колумбийской арабики с яркими аккордами шоколада.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 584,
    "title": "Перуанская радуга",
    "description": "Яркие оттенки перуанских плодов и кофе арабика.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 585,
    "title": "Апельсиновый взрыв",
    "description": "Взрыв солнечной энергии апельсиновой цедры в теплом кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 586,
    "title": "Лесные ягоды",
    "description": "Букет диких ягод в легком кофейном букете.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 587,
    "title": "Средиземноморье",
    "description": "Искусно смешанные ароматы Средиземноморья в оригинальном рецепте.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 588,
    "title": "Китайский дракон",
    "description": "Изящная китайская традиция в кофейной чашке с тонкими ароматами чая.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 589,
    "title": "Альпийская свежесть",
    "description": "Поднимитесь высоко в Альпы вместе с освежающим вкусом альпийского кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 590,
    "title": "Американский панк",
    "description": "Экспериментальный вкус Америки с острым халапеньо и сладким сиропом.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 591,
    "title": "Королевский клуб",
    "description": "Изысканный аромат дорогого вина и дымных оттенков кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 593,
    "title": "Исландский вулкан",
    "description": "Насыщенный черный кофе с огненно-жгучими нотами перца чили.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 594,
    "title": "Кленовый восторг",
    "description": "Канадский кленовый сироп придает незабываемый сладкий аромат этому кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 595,
    "title": "Янтарный аромат",
    "description": "Запах балтийского янтаря и соленый воздух моря в каждой чашке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 596,
    "title": "Императорский выбор",
    "description": "Люксовый сорт элитной арабики, приготовленный вручную в лучших традициях.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1900, "priceCrossed": 2200},
      {"value": 18, "price": 2700, "priceCrossed": 3100},
      {"value": 25, "price": 3500, "priceCrossed": 3900},
      {"value": 30, "price": 4100, "priceCrossed": 4500},
      {"value": 33, "price": 4500, "priceCrossed": 4900}
    ],
    "rate": {"rating": 4.9, "comments": 320},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 597,
    "title": "Бархатный вечер",
    "description": "Вечерний уют в чашке кофе с оттенками бархата и теплых специй.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 598,
    "title": "Зелёный океан",
    "description": "Спокойствие зелёного чая гармонично соединяется с зернами арабики.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 599,
    "title": "Легендарный микс",
    "description": "Великолепный микс классических сортов зернового кофе и насыщенного американо.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 600,
    "title": "Кофейная симфония",
    "description": "Гармоническое сочетание итальянских традиций и современной технологии приготовления.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 601,
    "title": "Весеннее настроение",
    "description": "Цветущие сады и свежий весенний ветер в каждой чашке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 602,
    "title": "Лето в городе",
    "description": "Жаркое лето в сердце города оживляется бодрящим ароматом кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 603,
    "title": "Охотничьи рассказы",
    "description": "Природные ароматы леса, дубовые листья и сосновая смола в кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 604,
    "title": "Арктический рассвет",
    "description": "Оттенки северной природы в уникальном кофейном напитке.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 605,
    "title": "Кофейная классика",
    "description": "Идеальное соотношение качества и цены классического зернового кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 606,
    "title": "Золотой баланс",
    "description": "Сбалансированный вкус и аромат в идеальной пропорции.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 607,
    "title": "Кофе и мороженое",
    "description": "Комфортная смесь охлажденного кофе и кремообразного мороженого.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 608,
    "title": "Любимый утренний",
    "description": "Безупречное начало каждого дня с любимым классическим кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 610,
    "title": "Магический трюфель",
    "description": "Трюфелевый вкус с пикантными нотами пряностей.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 611,
    "title": "Иберийский кофе",
    "description": "Испанский характер раскрывается в каждой капле напитка.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 612,
    "title": "Карамельная фея",
    "description": "Прекрасный союз карамелизированных сахаров и кофейных зерен.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 613,
    "title": "Минеральный источник",
    "description": "Незабываемый минеральный вкус с нотами лимонника и бергамота.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 614,
    "title": "Праздничный торт",
    "description": "Невероятный десертный коктейль с ароматом пирога и сахарной пудры.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 615,
    "title": "Солнце Италии",
    "description": "Настоящая итальянская атмосфера с нотами настоящего итальянского эспрессо.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 616,
    "title": "Земляничные грёзы",
    "description": "Разбудит вас своим неповторимым земляничным ароматом!",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 617,
    "title": "Восторженная улыбка",
    "description": "Неповторимая гамма вкусов и удивительное удовольствие от каждого глотка.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 618,
    "title": "Аромат горных вершин",
    "description": "Свежесть горных лесов с изысканным сочетанием натуральных ингредиентов.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 619,
    "title": "Сказочный полет",
    "description": "Забери свою порцию волшебства с каждым глотком этого напитка.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 620,
    "title": "Южной ночи тишина",
    "description": "Утончённый аромат южной ночи и уникальный вкус южноамериканской арабики.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 621,
    "title": "Вершины Кавказа",
    "description": "Истинный Кавказ раскроется в гармоничном букете вашего кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 622,
    "title": "Чашка счастья",
    "description": "Настроение праздника и ощущение счастья с первой капли кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
  {
    "id": 623,
    "title": "Уральские самоцветы",
    "description": "Изюминка Уральских просторов, спрятанная в аромате зернового кофе.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1700, "priceCrossed": 2000},
      {"value": 18, "price": 2500, "priceCrossed": 2900},
      {"value": 25, "price": 3300, "priceCrossed": 3700},
      {"value": 30, "price": 3900, "priceCrossed": 4300},
      {"value": 33, "price": 4300, "priceCrossed": 4700}
    ],
    "rate": {"rating": 4.7, "comments": 290},
    "actions": ["Популярное", "Скидки"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 624,
    "title": "Огонь пустыни",
    "description": "Прямые солнечные лучи Сахары подарят вам энергию и вдохновение.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1800, "priceCrossed": 2100},
      {"value": 18, "price": 2600, "priceCrossed": 3000},
      {"value": 25, "price": 3400, "priceCrossed": 3800},
      {"value": 30, "price": 4000, "priceCrossed": 4400},
      {"value": 33, "price": 4400, "priceCrossed": 4800}
    ],
    "rate": {"rating": 4.8, "comments": 310},
    "actions": ["Скидки", "Новинка"],
    "kind": "Зерновой кофе"
  },
  {
    "id": 625,
    "title": "Звездопад любви",
    "description": "Романтичные моменты станут ещё приятней с этим нежным напитком.",
    "category": "vending",
    "weights": [
      {"value": 10, "price": 1600, "priceCrossed": 1900},
      {"value": 18, "price": 2400, "priceCrossed": 2800},
      {"value": 25, "price": 3200, "priceCrossed": 3600},
      {"value": 30, "price": 3800, "priceCrossed": 4200},
      {"value": 33, "price": 4200, "priceCrossed": 4600}
    ],
    "rate": {"rating": 4.6, "comments": 270},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Гранулированные кофейные напитки"
  },
]

module.exports = vendings;
