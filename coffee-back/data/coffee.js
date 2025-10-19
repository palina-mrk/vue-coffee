const coffee = [
  {
    "id": 1,
    "title": "Colombia Supremo",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - нежный сбалансированный вкус, легкий аромат цитруса.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.0,
      "comments": 32
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Колумбия Супремо", "geography": "Колумбия"}
    ],
    "taste": ["цитрус", "орехи", "молочный шоколад"]
  },
  {
    "id": 2,
    "title": "Ethiopia Yirgacheffe",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - яркий цветочно-фруктовый букет, освежающая кислинка.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 150
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 8, 
      "bitterness": 3, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Иргалчефф", "geography": "Эфиопия"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"}
    ],
    "taste": ["цветочный", "абрикос", "бергамот"]
  },
  {
    "id": 3,
    "title": "Brazil Santos",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - мягкий, слегка орехово-шоколадный вкус.",
    "weights": [
      {"value": 250, "price": 200, "priceCrossed": 260},
      {"value": 1000, "price": 800, "priceCrossed": 1040}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 250
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 2, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Сантош", "geography": "Бразилия"},
      {"kind": "Арабика", "variety": "Кот Бразилио", "geography": "Бразилия"}
    ],
    "taste": ["шоколад", "орехи", "миндаль"]
  },
  {
    "id": 4,
    "title": "Kenya AA",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - выразительная ягодная кислотность, чистый аромат фруктов.",
    "weights": [
      {"value": 250, "price": 320, "priceCrossed": 420},
      {"value": 1000, "price": 1280, "priceCrossed": 1680}
    ],
    "rate": {
      "rating": 4.7,
      "comments": 100
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 4, 
      "richness": 5
    },
    "details": [
      {"kind": "Арабика", "variety": "Кения АА", "geography": "Кения"},
      {"kind": "Арабика", "variety": "Премиум Амхара Айеху", "geography": "Эфиопия"},
      {"kind": "Арабика", "variety": "Перу гр.2", "geography": "Перу"}
    ],
    "taste": ["ежевика", "мандарин", "красное яблоко"]
  },
  {
    "id": 5,
    "title": "Sumatra Mandheling",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - землистый глубокий вкус, шелковистая текстура.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 80
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 6, 
      "richness": 9
    },
    "details": [
      {"kind": "Арабика", "variety": "Манделинг", "geography": "Суматра"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"},
      {"kind": "Арабика", "variety": "Кот Бразилио", "geography": "Бразилия"},
      {"kind": "Арабика", "variety": "Перу гр.2", "geography": "Перу"}
    ],
    "taste": ["земля", "чернослив", "мускатный орех"]
  },
  {
    "id": 6,
    "title": "Peru Organic",
    "category": "coffee",
    "description": "Органически выращенный свежеобжаренный кофе - натуральный аромат, умеренная кислинка.",
    "weights": [
      {"value": 250, "price": 220, "priceCrossed": 320},
      {"value": 1000, "price": 880, "priceCrossed": 1280}
    ],
    "rate": {
      "rating": 4.1,
      "comments": 60
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Перувиан Органик", "geography": "Перу"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"}
    ],
    "taste": ["яблоко", "груша", "специи"]
  },
  {
    "id": 7,
    "title": "Costa Rica Tarrazu",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - идеально сбалансированная чашка с цитрусовыми оттенками.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 90
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Таразу", "geography": "Коста-Рика"},
      {"kind": "Арабика", "variety": "Кот Бразилио", "geography": "Бразилия"}
    ],
    "taste": ["гранат", "лаванда", "лайм"]
  },
  {
    "id": 8,
    "title": "Mexico Chiapas",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - мягкий карамельный оттенок, средняя крепость.",
    "weights": [
      {"value": 250, "price": 210, "priceCrossed": 310},
      {"value": 1000, "price": 840, "priceCrossed": 1240}
    ],
    "rate": {
      "rating": 4.0,
      "comments": 70
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 5, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Чиапас", "geography": "Мексика"}
    ],
    "taste": ["корица", "горький шоколад", "корень имбиря"]
  },
  {
    "id": 9,
    "title": "India Monsooned Malabar",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - уникальный метод обработки создает богатый пряный вкус.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 2, 
      "bitterness": 7, 
      "richness": 8
    },
    "details": [
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["перечная мята", "карамель", "древесные нотки"]
  },
  {
    "id": 10,
    "title": "Panama Geisha",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - роскошный изысканный профиль, ярко выраженные цветочные ноты.",
    "weights": [
      {"value": 250, "price": 350, "priceCrossed": 450},
      {"value": 1000, "price": 1400, "priceCrossed": 1800}
    ],
    "rate": {
      "rating": 4.9,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 9, 
      "bitterness": 3, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Гейша", "geography": "Панама"}
    ],
    "taste": ["жасмин", "бергамот", "розовый грейпфрут"]
  },
  {
    "id": 11,
    "title": "Hawaii Kona",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - элегантный баланс аромата и вкуса, тонкая сливочная текстура.",
    "weights": [
      {"value": 250, "price": 380, "priceCrossed": 480},
      {"value": 1000, "price": 1520, "priceCrossed": 1920}
    ],
    "rate": {
      "rating": 4.8,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Кона", "geography": "Гавайи"}
    ],
    "taste": ["сливочное масло", "кайенский перец", "ликёрный миндаль"]
  },
  {
    "id": 12,
    "title": "Tanzania Peaberry",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - редкие ягоды придают напитку яркую сочность и свежесть.",
    "weights": [
      {"value": 250, "price": 290, "priceCrossed": 390},
      {"value": 1000, "price": 1160, "priceCrossed": 1560}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 100
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 4, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Пибери", "geography": "Танзания"}
    ],
    "taste": ["виноград", "малина", "белый чай"]
  },
  {
    "id": 13,
    "title": "Nicaragua SHG EP",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - приятный свежий аромат, сладость с легким намеком на орехи.",
    "weights": [
      {"value": 250, "price": 230, "priceCrossed": 330},
      {"value": 1000, "price": 920, "priceCrossed": 1320}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 90
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Никаргуа ШХГ ЕП", "geography": "Никарагуа"}
    ],
    "taste": ["кленовый сироп", "зерновой хлеб", "какао-порошок"]
  },
  {
    "id": 14,
    "title": "El Salvador Bourbon",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - благородный классический вкус, мягкие винные оттенки.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Бурбон", "geography": "Эль-Сальвадор"}
    ],
    "taste": ["виноград", "лесные ягоды", "кофе"]
  },
  {
    "id": 15,
    "title": "Bolivia Caranavi",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - комплексный характер, мягкая сладость, цитрусовые акценты.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Каранави", "geography": "Боливия"}
    ],
    "taste": ["спелые фрукты", "леденцы", "виноград"]
  },
  {
    "id": 16,
    "title": "Vietnam Robusta",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - интенсивный крепкий напиток с выраженной плотностью.",
    "weights": [
      {"value": 250, "price": 180, "priceCrossed": 280},
      {"value": 1000, "price": 720, "priceCrossed": 1120}
    ],
    "rate": {
      "rating": 3.9,
      "comments": 150
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 2, 
      "bitterness": 8, 
      "richness": 9
    },
    "details": [
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["темный шоколад", "арахис", "дымчатые тона"]
  },
  {
    "id": 17,
    "title": "Papua New Guinea Wahgi Valley",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - экзотическое сочетание тропического вкуса и приятной кислоты.",
    "weights": [
      {"value": 250, "price": 300, "priceCrossed": 400},
      {"value": 1000, "price": 1200, "priceCrossed": 1600}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Уахги-Вэлли", "geography": "Папуа-Новая Гвинея"},
      {"kind": "Арабика", "variety": "Катурра", "geography": "Папуа-Новая Гвинея"}
    ],
    "taste": ["экзотический фрукт", "манго", "сладкое какао"]
  },
  {
    "id": 18,
    "title": "Yemen Mocha Matari",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - древний традиционный способ обжарки придает особенную глубину вкусу.",
    "weights": [
      {"value": 250, "price": 310, "priceCrossed": 410},
      {"value": 1000, "price": 1240, "priceCrossed": 1640}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 160
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 7, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Матари", "geography": "Йемен"},
      {"kind": "Арабика", "variety": "Типика", "geography": "Йемен"}
    ],
    "taste": ["виноград", "винные оттенки", "терпкость специй"]
  },
  {
    "id": 19,
    "title": "Uganda Bugisu",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - интересный вкусовой спектр, многослойность ощущений.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Буигиси", "geography": "Уганда"},
      {"kind": "Арабика", "variety": "Бургунд", "geography": "Уганда"}
    ],
    "taste": ["цукаты", "смола", "мягкая горечь"]
  },
  {
    "id": 20,
    "title": "Madagascar Arabica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - утончённый аромат цветов и фруктов, мягкость вкуса.",
    "weights": [
      {"value": 250, "price": 290, "priceCrossed": 390},
      {"value": 1000, "price": 1160, "priceCrossed": 1560}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 100
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Мадагаскарская Аравика", "geography": "Мадагаскар"},
      {"kind": "Арабика", "variety": "Маргонота", "geography": "Мадагаскар"}
    ],
    "taste": ["сирень", "нежные цветы", "цитрус"]
  },
  {
    "id": 21,
    "title": "Rwanda Kopakaki",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - удивляет приятным ароматом, гармоничный вкус с легкой терпкостью.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Копакаки", "geography": "Руанда"},
      {"kind": "Арабика", "variety": "Кент", "geography": "Руанда"}
    ],
    "taste": ["чай", "зеленый виноград", "рис"]
  },
  {
    "id": 22,
    "title": "Burundi Kayanza",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - деликатный и гладкий, легкое послевкусие.",
    "weights": [
      {"value": 250, "price": 230, "priceCrossed": 330},
      {"value": 1000, "price": 920, "priceCrossed": 1320}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 100
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Каиянза", "geography": "Бурунди"},
      {"kind": "Арабика", "variety": "Французская миссия", "geography": "Бурунди"}
    ],
    "taste": ["чай", "масло", "солод"]
  },
  {
    "id": 23,
    "title": "Guatemala Huehuetenango",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - особый регион выращивания дарит исключительную чистоту вкуса.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 5, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Хуэхуэтенанго", "geography": "Гватемала"},
      {"kind": "Арабика", "variety": "Катуаи", "geography": "Гватемала"}
    ],
    "taste": ["папайя", "финики", "легкая молочность"]
  },
  {
    "id": 24,
    "title": "Zambia Peaberry",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - необычный эксклюзивный вид зерен, высокая плотность тела.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Замбийская Пибери", "geography": "Замбия"},
      {"kind": "Арабика", "variety": "Катурра", "geography": "Замбия"}
    ],
    "taste": ["лесные ягоды", "лакрица", "мелисса"]
  },
  {
    "id": 25,
    "title": "Dominican Republic Santo Domingo",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - удивительно приятная смесь сладких и кислых оттенков.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Санта-Доминго", "geography": "Доминиканская Республика"},
      {"kind": "Арабика", "variety": "Бурбон", "geography": "Доминиканская Республика"}
    ],
    "taste": ["марципан", "сахарный леденец", "вина"]
  },
  {
    "id": 26,
    "title": "Timor Aifune",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - уникальная комбинация арабики и робусты, мощная энергетика.",
    "weights": [
      {"value": 250, "price": 220, "priceCrossed": 320},
      {"value": 1000, "price": 880, "priceCrossed": 1280}
    ],
    "rate": {
      "rating": 4.1,
      "comments": 140
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 7, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Айфунэ", "geography": "Тимор"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Тимор"}
    ],
    "taste": ["ядро ореха", "крепкий алкоголь", "теплая древесина"]
  },
  {
    "id": 27,
    "title": "Myanmar Arabica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - необычное путешествие во вкусе, густые шоколадные тона.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 6, 
      "richness": 9
    },
    "details": [
      {"kind": "Арабика", "variety": "Бирманская Арабика", "geography": "Мьянма"},
      {"kind": "Арабика", "variety": "Катурра", "geography": "Мьянма"}
    ],
    "taste": ["густой шоколад", "ягоды", "теплый амарант"]
  },
  {
    "id": 28,
    "title": "Jamaica Blue Mountain",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - всемирно известный бренд с тонким букетом, легкость восприятия.",
    "weights": [
      {"value": 250, "price": 350, "priceCrossed": 450},
      {"value": 1000, "price": 1400, "priceCrossed": 1800}
    ],
    "rate": {
      "rating": 4.8,
      "comments": 150
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Голубая гора", "geography": "Ямайка"},
      {"kind": "Арабика", "variety": "Типика", "geography": "Ямайка"}
    ],
    "taste": ["цитрус", "лаванда", "свежий ветер"]
  },{
    "id": 29,
    "title": "China Yunnan",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - новый взгляд на китайский кофе, сладость и немного перца.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Юньнань", "geography": "Китай"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Китай"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Китай"}
    ],
    "taste": ["горький шоколад", "перец чили", "чеснок"]
  },
  {
    "id": 30,
    "title": "Thailand Doi Chaang",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - уникальный высокогорный сорт, тонкие травянистые оттенки.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Дой Чанг", "geography": "Таиланд"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Таиланд"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Таиланд"}
    ],
    "taste": ["дикие травы", "сладкий апельсин", "древесина"]
  },
  {
    "id": 31,
    "title": "Indonesia Toraja",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - приятное удовольствие для любителей азиатского стиля.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 80
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Тораджанский", "geography": "Индонезия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индонезия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Индонезия"}
    ],
    "taste": ["коньяк", "горький шоколад", "тростниковый сахар"]
  },
  {
    "id": 32,
    "title": "Nepal Bardaghang",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - оригинальный гималайский сорт с дымком и фруктовым привкусом.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Бардагхан", "geography": "Непал"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Непал"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Непал"}
    ],
    "taste": ["дымчатый торф", "клубника", "табак"]
  },
  {
    "id": 33,
    "title": "Ecuador Galápagos",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - островной сорт с уникальным минеральным профилем.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Галáпа́гос", "geography": "Эквадор"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Эквадор"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Эквадор"}
    ],
    "taste": ["морские водоросли", "креветки", "сельдь"]
  },
  {
    "id": 34,
    "title": "Malawi Chinkondi",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - редкий африканский сорт с цветочными и фруктовыми оттенками.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Чинкондийский", "geography": "Малави"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Малави"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Малави"}
    ],
    "taste": ["лепестки розы", "малина", "шиповник"]
  },
  {
    "id": 35,
    "title": "Sri Lanka Arabica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - кокосовый аромат и ореховые нотки.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 140
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Цейлонская", "geography": "Шри-Ланка"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Шри-Ланка"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Шри-Ланка"}
    ],
    "taste": ["кокос", "кедровые орехи", "грецкий орех"]
  },
  {
    "id": 36,
    "title": "Malaysia Borneo",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - богатая палитра восточных специй и пряностей.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 150
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Борнео", "geography": "Малайзия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Малайзия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Малайзия"}
    ],
    "taste": ["галангал", "мирра", "гвоздика"]
  },
  {
    "id": 37,
    "title": "Ghana Akwatia",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - специфический горьковато-карамельный вкус с сухими травами.",
    "weights": [
      {"value": 250, "price": 230, "priceCrossed": 330},
      {"value": 1000, "price": 920, "priceCrossed": 1320}
    ],
    "rate": {
      "rating": 4.1,
      "comments": 100
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 7, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Акватия", "geography": "Гана"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Гана"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Гана"}
    ],
    "taste": ["тростниковая патока", "вереск", "живица"]
  },
  {
    "id": 38,
    "title": "Iranian Arabica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - иранский арабика с цветочным ароматом и легкими табачными нотами.",
    "weights": [
      {"value": 250, "price": 290, "priceCrossed": 390},
      {"value": 1000, "price": 1160, "priceCrossed": 1560}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Иранская", "geography": "Иран"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Иран"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Иран"}
    ],
    "taste": ["фиалка", "ментол", "дымчатость"]
  },
  {
    "id": 39,
    "title": "Angola Arabica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - ангольский кофе с яркой кислотностью и фруктовыми нотами.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 4, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Ангольская", "geography": "Ангола"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Ангола"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Ангола"}
    ],
    "taste": ["помело", "мятный лед", "светлое пиво"]
  },
 {
    "id": 40,
    "title": "Argentina Córdoba",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - аргентинский сорт с мягкой древесиной и мягким вкусом.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 110
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["древесина", "полынь", "подсолнечник"]
  },
  {
    "id": 41,
    "title": "Chile Araucaria",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - редкий чилийский сорт с мягкими фруктовыми нотами.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["алыча", "шелковица", "шерсть ягненка"]
  },
  {
    "id": 42,
    "title": "Portugal Azores",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - португальский кофе с низкой кислотностью и карамелизированным сахаром.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 150
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["белый трюфель", "маслина", "немецкий бисквит"]
  },
  {
    "id": 43,
    "title": "Philippines Barako",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - филиппинская разновидность робусты с сильной крепостью.",
    "weights": [
      {"value": 250, "price": 230, "priceCrossed": 330},
      {"value": 1000, "price": 920, "priceCrossed": 1320}
    ],
    "rate": {
      "rating": 4.1,
      "comments": 100
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 2, 
      "bitterness": 8, 
      "richness": 9
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["торфяной дым", "баклажаны", "каштановая кора"]
  },
  {
    "id": 44,
    "title": "Australia Mount Eccles",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - австралийский сорт с отчетливыми молочными и ванильными нотами.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["борщ", "мясо дичи", "рыба холодного копчения"]
  },
  {
    "id": 45,
    "title": "Cambodia Pailin",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - камбоджийский сорт с тонкой кислотностью и фруктовыми оттенками.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 130
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["шалфей", "тимьян", "солёный арбуз"]
  },
  {
    "id": 46,
    "title": "Liberia Liberica",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - крупный размер зерна и пикантный вкус.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 6, 
      "richness": 8
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["перепелиное яйцо", "творожный сыр", "фенхель"]
  },
  {
    "id": 47,
    "title": "Laos Phou Khao Noy",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - лаосский кофе с ярким лимонным ароматом и средней кислотностью.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 5, 
      "richness": 6
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["роза", "ладан", "жженая карамель"]
  },
  {
    "id": 48,
    "title": "Mongolia Nomad Coffee",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - монгольский кофе с сухим, землистым вкусом и слабой кислотностью.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 7, 
      "richness": 8
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["перламутровая ракушка", "душистый лук", "кастард"]
  },
  {
    "id": 49,
    "title": "Fiji Highlands",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - фиджийский кофе с ярким манго-персиковым ароматом.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.6,
      "comments": 130
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 6, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["сок сахарного тростника", "берёзовый веник", "шоколадное печенье"]
  },
  {
    "id": 50,
    "title": "Bangladesh Sundarbans",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - бенгальский кофе с легкой зеленью и ореховыми оттенками.",
    "weights": [
      {"value": 250, "price": 230, "priceCrossed": 330},
      {"value": 1000, "price": 920, "priceCrossed": 1320}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 110
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Робуста", "processing": "Файн", "geography": "Индия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["рожь", "солод", "кураговый джем"]
  },
  {
    "id": 51,
    "title": "Namibia Okaukuejo",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - эфиопский тип арабики с яркими фруктовыми и цитрусовыми нотами.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 7, 
      "bitterness": 5, 
      "richness": 6
    },
    "details": [
      {"kind": "Арабика", "variety": "Окакуэхо", "geography": "Намибия"},
      {"kind": "Арабика", "variety": "Перу гр.2", "geography": "Перу"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["нектарин", "абрикос", "цедра лимона"]
  },
  {
    "id": 52,
    "title": "Paraguay Itakyry",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - парагвайский сорт с округлым вкусом и легкими карамельными нотами.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": true,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 4, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Итакири", "geography": "Парагвай"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["карамель", "вареная сгущёнка", "молочнокислые бактерии"]
  },
  {
    "id": 53,
    "title": "Botswana Kalahari",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - ботсванский сорт с мускусным ароматом и средними характеристиками.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 130
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 6, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Каллахари", "geography": "Ботсвана"},
      {"kind": "Арабика", "variety": "Премиум Амхара Айеху", "geography": "Эфиопия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["дымные специи", "запечённое мясо", "семечки тыквы"]
  },
  {
    "id": 54,
    "title": "Pakistan Karakoram",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - пакистанский кофе с травянистыми оттенками и низкой кислотностью.",
    "weights": [
      {"value": 250, "price": 250, "priceCrossed": 350},
      {"value": 1000, "price": 1000, "priceCrossed": 1400}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 7, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Каракорам", "geography": "Пакистан"},
      {"kind": "Арабика", "variety": "Кот Бразилио", "geography": "Бразилия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["молодой картофель", "мята", "водоросли"]
  },
  {
    "id": 55,
    "title": "Finland Arctic Circle",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - скандинавский стиль обжарки с низкой кислотностью и шоколадным вкусом.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Арктик Сиркл", "geography": "Финляндия"},
      {"kind": "Арабика", "variety": "Перу гр.2", "geography": "Перу"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["шоколад", "картофельное пюре", "миндаль"]
  },
  {
    "id": 56,
    "title": "Ukraine Chernihiv",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - украинский сорт с карамельным вкусом и низким уровнем кислотности.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 120
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": true,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Чернигов", "geography": "Украина"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["картофельный крахмал", "овсянка", "жидкий дым"]
  },
  {
    "id": 57,
    "title": "Belgium Belgian Blend",
    "category": "coffee",
    "description": "Свежеобжаренный кофе - бельгийский бленд с разнообразием вкусов и приятных ароматов.",
    "weights": [
      {"value": 250, "price": 270, "priceCrossed": 370},
      {"value": 1000, "price": 1080, "priceCrossed": 1480}
    ],
    "rate": {
      "rating": 4.3,
      "comments": 130
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 5, 
      "bitterness": 5, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Белгийская смесь", "geography": "Бельгия"},
      {"kind": "Арабика", "variety": "Премиум Амхара Айеху", "geography": "Эфиопия"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["дрожжи", "бельгийский шоколад", "алкогольный сидр"]
  },
  {
    "id": 58,
    "title": "Japan Uji Matcha Latte",
    "category": "coffee",
    "description": "Свежезаваренный матча латте с японским зелёным чаем и молочной пенкой.",
    "weights": [
      {"value": 250, "price": 240, "priceCrossed": 340},
      {"value": 1000, "price": 960, "priceCrossed": 1360}
    ],
    "rate": {
      "rating": 4.2,
      "comments": 110
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": true
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 4, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Уджи Матча Латте", "geography": "Япония"},
      {"kind": "Арабика", "variety": "Кот Бразилио", "geography": "Бразилия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["матча", "молочная пенка", "лечебные травы"]
  },
  {
    "id": 59,
    "title": "Canada Canadian Maple",
    "category": "coffee",
    "description": "Свежеобжаренный кофе с добавлением натурального канадского сиропа.",
    "weights": [
      {"value": 250, "price": 280, "priceCrossed": 380},
      {"value": 1000, "price": 1120, "priceCrossed": 1520}
    ],
    "rate": {
      "rating": 4.5,
      "comments": 140
    },
    "actions": {
      "Скидки": false, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": true,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 4, 
      "bitterness": 5, 
      "richness": 8
    },
    "details": [
      {"kind": "Арабика", "variety": "Канадский Клен", "geography": "Канада"},
      {"kind": "Арабика", "variety": "Перу гр.2", "geography": "Перу"},
      {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
    ],
    "taste": ["кленовый сироп", "карамельная корочка", "нутелла"]
  },
  {
    "id": 60,
    "title": "Germany Bavarian Roast",
    "category": "coffee",
    "description": "Немецкий обжаренный кофе с сильным ароматом шоколада и ореха.",
    "weights": [
      {"value": 250, "price": 260, "priceCrossed": 360},
      {"value": 1000, "price": 1040, "priceCrossed": 1440}
    ],
    "rate": {
      "rating": 4.4,
      "comments": 120
    },
    "actions": {
      "Скидки": true, 
      "Популярное": true, 
      "Новый урожай": false,
      "Микролот": false,
      "Ваш выбор": false,
      "Новинка": false,
      "Сорт недели": false
    },
    "hue": {
      "acidity": 3, 
      "bitterness": 6, 
      "richness": 7
    },
    "details": [
      {"kind": "Арабика", "variety": "Бавария Рост", "geography": "Германия"},
      {"kind": "Арабика", "variety": "Эфиопия Сидамогр.4", "geography": "Эфиопия"},
      {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
    ],
    "taste": ["шоколад", "орех", "булочки с маком"]
  },
  {
        "id": 61,
        "title": "France French Press",
        "category": "coffee",
        "description": "Французский пресс-кофе с глубоким и богатым вкусом, приготовленный традиционным способом.",
        "weights": [
            {"value": 250, "price": 270, "priceCrossed": 370},
            {"value": 1000, "price": 1080, "priceCrossed": 1480}
        ],
        "rate": {
            "rating": 4.3,
            "comments": 130
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": True
        },
        "hue": {
            "acidity": 5,
            "bitterness": 5,
            "richness": 8
        },
        "details": [
            {"kind": "Арабика", "variety": "Французский Пресс", "geography": "Франция"}
        ],
        "taste": ["ореховая паста", "ромашка", "варёный кофе"]
    },
    {
        "id": 62,
        "title": "Italy Italian Espresso",
        "category": "coffee",
        "description": "Итальянский эспрессо с насыщенным телом и длительной устойчивой пенкой.",
        "weights": [
            {"value": 250, "price": 250, "priceCrossed": 350},
            {"value": 1000, "price": 1000, "priceCrossed": 1400}
        ],
        "rate": {
            "rating": 4.3,
            "comments": 130
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": True,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 4,
            "bitterness": 6,
            "richness": 7
        },
        "details": [
            {"kind": "Арабика", "variety": "Итальянский Эспрессо", "geography": "Италия"},
            {"kind": "Робуста", "processing": "Сухой", "geography": "Вьетнам"}
        ],
        "taste": ["орех", "тонкая карамель", "бархатистость"]
    },
    {
        "id": 63,
        "title": "Switzerland Swiss Chocolate",
        "category": "coffee",
        "description": "Швейцарский кофе с добавлением натуральной швейцарской плитки шоколада.",
        "weights": [
            {"value": 250, "price": 280, "priceCrossed": 380},
            {"value": 1000, "price": 1120, "priceCrossed": 1520}
        ],
        "rate": {
            "rating": 4.5,
            "comments": 140
        },
        "actions": {
            "Скидки": True,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 3,
            "bitterness": 5,
            "richness": 8
        },
        "details": [
            {"kind": "Арабика", "variety": "Швейцарский Шоколад", "geography": "Швейцария"}
        ],
        "taste": ["шоколад", "ваниль", "пряники"]
    },
    {
        "id": 64,
        "title": "Spain Spanish Style",
        "category": "coffee",
        "description": "Испанская классическая обжарка с ароматом карамели и орехов.",
        "weights": [
            {"value": 250, "price": 260, "priceCrossed": 360},
            {"value": 1000, "price": 1040, "priceCrossed": 1440}
        ],
        "rate": {
            "rating": 4.4,
            "comments": 120
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": True
        },
        "hue": {
            "acidity": 5,
            "bitterness": 5,
            "richness": 7
        },
        "details": [
            {"kind": "Арабика", "variety": "Испанская Обжарка", "geography": "Испания"}
        ],
        "taste": ["жареные орехи", "какао", "прожаренный ржаной хлеб"]
    },
    {
        "id": 65,
        "title": "Poland Polish Brew",
        "category": "coffee",
        "description": "Польская смесь кофе с тонким ароматом специй и богатой кремовой структурой.",
        "weights": [
            {"value": 250, "price": 270, "priceCrossed": 370},
            {"value": 1000, "price": 1080, "priceCrossed": 1480}
        ],
        "rate": {
            "rating": 4.3,
            "comments": 130
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": True,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 4,
            "bitterness": 6,
            "richness": 8
        },
        "details": [
            {"kind": "Арабика", "variety": "Польская Смесь", "geography": "Польша"},
            {"kind": "Робуста", "processing": "Файн", "geography": "Вьетнам"}
        ],
        "taste": ["горький шоколад", "имбирь", "зерновой солод"]
    },
    {
        "id": 66,
        "title": "Romania Romanian Bean",
        "category": "coffee",
        "description": "Романский кофе с нотами тёмного шоколада и лесных ягод.",
        "weights": [
            {"value": 250, "price": 250, "priceCrossed": 350},
            {"value": 1000, "price": 1000, "priceCrossed": 1400}
        ],
        "rate": {
            "rating": 4.2,
            "comments": 110
        },
        "actions": {
            "Скидки": True,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 3,
            "bitterness": 6,
            "richness": 7
        },
        "details": [
            {"kind": "Арабика", "variety": "Румынский Бин", "geography": "Румыния"}
        ],
        "taste": ["тёмный шоколад", "рябина", "мёд"]
    },
    {
        "id": 67,
        "title": "Turkey Turkish Delight",
        "category": "coffee",
        "description": "Турция кофе с оригинальным восточным вкусом и ароматом розовых лепестков.",
        "weights": [
            {"value": 250, "price": 280, "priceCrossed": 380},
            {"value": 1000, "price": 1120, "priceCrossed": 1520}
        ],
        "rate": {
            "rating": 4.5,
            "comments": 140
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": True
        },
        "hue": {
            "acidity": 5,
            "bitterness": 5,
            "richness": 8
        },
        "details": [
            {"kind": "Арабика", "variety": "Турецкий Деликтат", "geography": "Турция"}
        ],
        "taste": ["роза", "острый красный перец", "сливочная помадка"]
    },
    {
        "id": 68,
        "title": "Austria Vienna Roast",
        "category": "coffee",
        "description": "Австрийская обжарка с умеренно густой консистенцией и заметной кислотностью.",
        "weights": [
            {"value": 250, "price": 260, "priceCrossed": 360},
            {"value": 1000, "price": 1040, "priceCrossed": 1440}
        ],
        "rate": {
            "rating": 4.4,
            "comments": 120
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": True,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 6,
            "bitterness": 5,
            "richness": 7
        },
        "details": [
            {"kind": "Арабика", "variety": "Венская Обжарка", "geography": "Австрия"},
            {"kind": "Робуста", "processing": "Мытая", "geography": "Индия"}
        ],
        "taste": ["шоколад", "топлёное молоко", "лимонный пирог"]
    },
    {
        "id": 69,
        "title": "Denmark Danish Blonde",
        "category": "coffee",
        "description": "Светлая датская обжарка с ясным цитрусовым вкусом и высоким содержанием сахара.",
        "weights": [
            {"value": 250, "price": 270, "priceCrossed": 370},
            {"value": 1000, "price": 1080, "priceCrossed": 1480}
        ],
        "rate": {
            "rating": 4.3,
            "comments": 130
        },
        "actions": {
            "Скидки": True,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": False
        },
        "hue": {
            "acidity": 7,
            "bitterness": 4,
            "richness": 6
        },
        "details": [
            {"kind": "Арабика", "variety": "Датская Светлая Обжарка", "geography": "Дания"}
        ],
        "taste": ["мандарин", "пшеничный торт", "сливочная глазурь"]
    },
    {
        "id": 70,
        "title": "Lithuania Baltic Roast",
        "category": "coffee",
        "description": "Балтийская смесь кофе с приглушённой кислотностью и приятным землянистым ароматом.",
        "weights": [
            {"value": 250, "price": 250, "priceCrossed": 350},
            {"value": 1000, "price": 1000, "priceCrossed": 1400}
        ],
        "rate": {
            "rating": 4.2,
            "comments": 110
        },
        "actions": {
            "Скидки": False,
            "Популярное": True,
            "Новый урожай": False,
            "Микролот": False,
            "Ваш выбор": False,
            "Новинка": False,
            "Сорт недели": True
        },
        "hue": {
            "acidity": 4,
            "bitterness": 6,
            "richness": 7
        },
        "details": [
            {"kind": "Арабика", "variety": "Балтийская Обжарка", "geography": "Литва"}
        ],
        "taste": ["землистый", "томат", "аромат хлеба"]
    },
  {
    "id": 71,
    "title": "Latvia Latvian Blend",
    "description": "Латышская смесь кофе с ореховыми и хлебными нотами.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 72,
    "title": "Estonia Estonian Dark",
    "description": "Эстонская темная обжарка с крепким, длительным послевкусием.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 3, "bitterness": 7, "richness": 8},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 73,
    "title": "Croatia Croatian Roast",
    "description": "Хорватская смесь кофе с мягким ореховым ароматом и лёгкой кислотностью.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.3,
    "comments": 130
  },
  {
    "id": 74,
    "title": "Serbia Serbian Specialty",
    "description": "Сербыцкий кофе с особым образом подобранным составом и минимальной кислотностью.",
    "price": 250,
    "priceCrossed": 350,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 7},
    "rating": 4.2,
    "comments": 110
  },
  {
    "id": 75,
    "title": "Montenegro Montenegrin Blend",
    "description": "Черногорская смесь кофе с ярким характером и слегка смолянистым вкусом.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 76,
    "title": "Bosnia Bosnian Gold",
    "description": "Боснийский кофе с уникальными местными ингредиентами и долгим послевкусием.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 77,
    "title": "Bulgaria Bulgarian Black",
    "description": "Болгарский кофе глубокой обжарки с мощным, бархатистым вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 3, "bitterness": 7, "richness": 8},
    "rating": 4.3,
    "comments": 130
  },
  {
    "id": 78,
    "title": "Cyprus Cypriot Mix",
    "description": "Киприотская смесь кофе с традиционными греческими специями и богатым вкусом.",
    "price": 250,
    "priceCrossed": 350,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.2,
    "comments": 110
  },
  {
    "id": 79,
    "title": "Greece Greek Island",
    "description": "Греческий островной кофе с натуральными ароматами Средиземноморья.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 80,
    "title": "Albania Albanian Roast",
    "description": "Албанская смесь кофе с сильными древесными и ореховыми нотами.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 81,
    "title": "Kazakhstan Kazakh Steppe",
    "description": "Казахстанский степной кофе с характерным ореховым ароматом и мягким вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.3,
    "comments": 130
  },
  {
    "id": 82,
    "title": "Uzbekistan Uzbek Sunrise",
    "description": "Узбекский солнечный кофе с ярким ароматом жаркого лета и лёгким привкусом абрикоса.",
    "price": 250,
    "priceCrossed": 350,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.2,
    "comments": 110
  },
  {
    "id": 83,
    "title": "Turkmenistan Turkmen Honey",
    "description": "Туркмения медовый кофе с необычным сладким ароматом и плотной структурой.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 84,
    "title": "Kyrgyzstan Kyrgyz Treasure",
    "description": "Киргизский кофе с оригинальными альпийскими ароматами и сладким послевкусием.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 85,
    "title": "Tajikistan Tajik Spice",
    "description": "Таджикистанский кофе с ароматическими приправами Востока и маслянистым вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.3,
    "comments": 130
  },
  {
    "id": 86,
    "title": "Afghanistan Afghan Spirit",
    "description": "Афганский кофе с уникальными природными свойствами и сложной смесью вкусов.",
    "price": 250,
    "priceCrossed": 350,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.2,
    "comments": 110
  },
  {
    "id": 87,
    "title": "Lebanon Lebanese Dream",
    "description": "Ливанский кофе с арабскими мотивами и богатым шоколадным вкусом.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 88,
    "title": "Israel Israeli Magic",
    "description": "Израильский кофе с инновационной обработкой и насыщенными карамельными нотами.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 89,
    "title": "Morocco Moroccan Mint",
    "description": "Марроканский мятный кофе с традиционной марокканской подачей и уникальной свежестью.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.3,
    "comments": 130
  },
  {
    "id": 90,
    "title": "Algeria Algerian Fusion",
    "description": "Алжирский кофе с восточной харизмой и особенностями местных традиций.",
    "price": 250,
    "priceCrossed": 350,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.2,
    "comments": 110
  },
  {
    "id": 91,
    "title": "Tunisia Tunisian Twist",
    "description": "Тунискский кофе с местным рецептом приготовления и особенным ароматом.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 92,
    "title": "Saudi Arabia Saudi Crown",
    "description": "Саудовский королевский кофе с подчёркнуто солёным оттенком и пряными нотами.",
    "price": 260,
    "priceCrossed": 360,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
   {
    "id": 93,
    "title": "Oman Omani Majesty",
    "description": "Омманский кофе с экзотическим вкусом восточных пряностей и сухой миндальной ноткой.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 130
  },
  {
    "id": 94,
    "title": "Bahrain Bahraini Pearl",
    "description": "Бахрейнский жемчужный кофе с лёгкой кислинкой и намеками на морские мотивы.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 120
  },
  {
    "id": 95,
    "title": "Kuwait Kuwaiti Surprise",
    "description": "Кувейтский кофе с сюрпризом — неожиданными черничными и лесными нотами.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 6, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 96,
    "title": "United Arab Emirates UAE Royalty",
    "description": "Эмиратский королевский кофе с шафраном и ароматом кардамона.",
    "price": 300,
    "priceCrossed": 400,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 97,
    "title": "Palestine Palestinian Heritage",
    "description": "Палестинский кофе с глубокими корнями истории и пряным вкусом кардамона.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 98,
    "title": "Syria Syrian Dawn",
    "description": "Сирийский рассветный кофе с незабываемым ароматом восточных садов.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 99,
    "title": "Jordan Jordanian Soul",
    "description": "Иорданский кофе с душой пустыни и лёгким касанием свежего инжира.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 100,
    "title": "Georgia Georgian Mist",
    "description": "Грузинский туманный кофе с мягким и мягким дубовым ароматом и вязким вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 101,
    "title": "Armenia Armenian Fire",
    "description": "Армянский огненный кофе с запахом леса и отчётливым дымным оттенком.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 6, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 102,
    "title": "Azerbaijan Azerbaijani Sparkle",
    "description": "Азербайджанский искрящийся кофе с необычными элементами местной кухни.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 103,
    "title": "Mongolia Mongolian Wild",
    "description": "Монгольский дикий кофе с неповторимым ароматом степей и горных вершин.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 104,
    "title": "Kazakhstan Kazakh Horizon",
    "description": "Казахстанский горизонтальный кофе с мягкими хвойными и лесными оттенками.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 105,
    "title": "Uzbekistan Uzbek Golden",
    "description": "Узбекский золотой кофе с ярко выраженным ароматом апельсинового цветка и меда.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 106,
    "title": "Turkmenistan Turkmen Beauty",
    "description": "Туркменский красивый кофе с естественной сладостью и ореховым ароматом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 107,
    "title": "Kyrgyzstan Kyrgyz Peak",
    "description": "Киргизский пиковый кофе с выраженным ароматом кедровых лесов и свежей зелени.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 6, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 108,
    "title": "Tajikistan Tajik Treasure",
    "description": "Таджикский сокровенный кофе с необычным сочетанием аниса и бергамота.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 109,
    "title": "Afghanistan Afghan Mystery",
    "description": "Афганский таинственный кофе с неизвестными ранее ароматами и чувственными нотами.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 110,
    "title": "Iraq Iraqi Spice",
    "description": "Иракский пряный кофе с насыщенностью специй и загадочной историей региона.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 111,
    "title": "Iran Iranian Tradition",
    "description": "Иранский традиционный кофе с непривычным ароматом чёрного чая и сухофруктов.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 112,
    "title": "South Korea Korean Wave",
    "description": "Корейская волна кофе с невероятным ароматом зеленого яблока и лесной мяты.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 113,
    "title": "North Korea North Korean Secret",
    "description": "Северокорейский секретный кофе с дымным, горячим вкусом и почти незаметной кислотностью.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 3, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 114,
    "title": "China Chinese Zen",
    "description": "Китайский дзен кофе с глубоким умиротворением и освежающим вкусом зеленых листьев.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 5, "richness": 7},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 115,
    "title": "Singapore Singapore Sling",
    "description": "Сингапурский коктейльный кофе с новаторством и ярким вишневым вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 116,
    "title": "Brunei Brunei Royal",
    "description": "Брунейский королевский кофе с непревзойдённым качеством и волшебным ароматом жасмина.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 117,
    "title": "Bhutan Bhutanese Gift",
    "description": "Бутанский подарочный кофе с душистым вкусом сухих яблок и хвои.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 5, "bitterness": 5, "richness": 7},
    "rating": 4.6,
    "comments": 150
  },
  {
    "id": 118,
    "title": "Nepal Nepalese Summit",
    "description": "Непальский вершинный кофе с высочайшими стандартами и божественным вкусом.",
    "price": 270,
    "priceCrossed": 370,
    "category": ["Популярное", "Скидки"],
    "hue": {"acidity": 6, "bitterness": 5, "richness": 7},
    "rating": 4.4,
    "comments": 130
  },
  {
    "id": 119,
    "title": "Sri Lanka Sri Lankan Jewel",
    "description": "Шри-Ланкский драгоценный кофе с особыми минералами и невероятно чистым вкусом.",
    "price": 280,
    "priceCrossed": 380,
    "category": ["Популярное", "Сорт недели"],
    "hue": {"acidity": 5, "bitterness": 6, "richness": 8},
    "rating": 4.5,
    "comments": 140
  },
  {
    "id": 120,
    "title": "Greenland Greenland Glacier",
    "description": "Гренландский ледяной кофе с хрустящим холодным вкусом и необычайной свежестью.",
    "price": 290,
    "priceCrossed": 390,
    "category": ["Популярное", "Микролот"],
    "hue": {"acidity": 4, "bitterness": 6, "richness": 8},
    "rating": 4.6,
    "comments": 150
  }
]

module.exports = coffee;