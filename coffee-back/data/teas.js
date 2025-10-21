const teas = [
  {
    "id": 201,
    "title": "Сибирская тайга",
    "category": "tea",
    "description": "Чай с ароматом сибирских трав и хвойных деревьев, придаёт бодрость и энергию.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 480, "priceCrossed": 550}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 202,
    "title": "Алтайские цветы",
    "category": "tea",
    "description": "Цветочный чай с нежным цветочным букетом и мягким сладковатым послевкусием.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.5, "comments": 180},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зелёный чай"
  },
  {
    "id": 203,
    "title": "Камчатская лаванда",
    "category": "tea",
    "description": "Чай с ярким ароматом лаванды и освежающим мятным оттенком.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 390, "priceCrossed": 450},
      {"value": 200, "price": 470, "priceCrossed": 530}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Травяной чай"
  },
  {
    "id": 204,
    "title": "Русская поляна",
    "category": "tea",
    "description": "Классический русский чай с насыщенным вкусом и приятным ароматом мёда.",
    "weights": [
      {"value": 100, "price": 250, "priceCrossed": 270},
      {"value": 150, "price": 350, "priceCrossed": 400},
      {"value": 165, "price": 360, "priceCrossed": 410},
      {"value": 200, "price": 450, "priceCrossed": 500}
    ],
    "rate": {"rating": 4.4, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 205,
    "title": "Дальневосточная симфония",
    "category": "tea",
    "description": "Эксклюзивный чай с ароматами дальневосточной природы и тонкими нотками жасмина.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 460, "priceCrossed": 520},
      {"value": 200, "price": 550, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.9, "comments": 80},
    "actions": ["Новинка", "Скидки"],
    "kind": "Зелёный чай"
  },
  {
    "id": 206,
    "title": "Русский берег",
    "category": "tea",
    "description": "Напиток с ароматом моря и степных трав, согревает душу и тело.",
    "weights": [
      {"value": 100, "price": 260, "priceCrossed": 280},
      {"value": 150, "price": 360, "priceCrossed": 410},
      {"value": 165, "price": 370, "priceCrossed": 420},
      {"value": 200, "price": 460, "priceCrossed": 520}
    ],
    "rate": {"rating": 4.3, "comments": 160},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Травяной чай"
  },
  {
    "id": 207,
    "title": "Хабаровский рассвет",
    "category": "tea",
    "description": "Утро начинается с чашечки чая, наполненного энергией восточного солнца.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 130},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Зелёный чай"
  },
  {
    "id": 208,
    "title": "Байкальская мелодия",
    "category": "tea",
    "description": "Чай с ароматом байкальской воды и чистотой горных вершин.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 330},
      {"value": 150, "price": 430, "priceCrossed": 490},
      {"value": 165, "price": 440, "priceCrossed": 500},
      {"value": 200, "price": 530, "priceCrossed": 620}
    ],
    "rate": {"rating": 4.7, "comments": 90},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зелёный чай"
  },
  {
    "id": 209,
    "title": "Амурский вечер",
    "category": "tea",
    "description": "Вечерний напиток с ароматом амурского леса и цветов степи.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 440},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 490, "priceCrossed": 560}
    ],
    "rate": {"rating": 4.5, "comments": 110},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Травяной чай"
  },
  {
    "id": 210,
    "title": "Таймырская мечта",
    "category": "tea",
    "description": "Освежающий чай с чистым северным воздухом и ароматом северных ягод.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Зелёный чай"
  },
  {
    "id": 211,
    "title": "Кавказский бальзам",
    "category": "tea",
    "description": "Чай с богатым вкусом Кавказа и целебными свойствами местных растений.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 390, "priceCrossed": 450},
      {"value": 200, "price": 470, "priceCrossed": 530}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Травяной чай"
  },
  {
    "id": 212,
    "title": "Крымский сувенир",
    "category": "tea",
    "description": "Чай с крымскими цветами и южным солнцем, дарит тепло и уют.",
    "weights": [
      {"value": 100, "price": 260, "priceCrossed": 280},
      {"value": 150, "price": 360, "priceCrossed": 410},
      {"value": 165, "price": 370, "priceCrossed": 420},
      {"value": 200, "price": 460, "priceCrossed": 520}
    ],
    "rate": {"rating": 4.4, "comments": 150},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зелёный чай"
  },
  {
    "id": 213,
    "title": "Уральские горы",
    "category": "tea",
    "description": "Горный чай с уникальными растениями Урала, раскрывается постепенно, наполняя теплом.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.7, "comments": 140},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Травяной чай"
  },
  {
    "id": 214,
    "title": "Карельская гармония",
    "category": "tea",
    "description": "Гармоничный вкус карельской природы и свежей лесной зелени.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 330},
      {"value": 150, "price": 430, "priceCrossed": 490},
      {"value": 165, "price": 440, "priceCrossed": 500},
      {"value": 200, "price": 530, "priceCrossed": 620}
    ],
    "rate": {"rating": 4.6, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зелёный чай"
  },
  {
    "id": 215,
    "title": "Приморский закат",
    "category": "tea",
    "description": "Нежный чай с приморским морским бризом и тёплыми солнечными лучами.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 440},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 490, "priceCrossed": 560}
    ],
    "rate": {"rating": 4.5, "comments": 110},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Травяной чай"
  },
  {
    "id": 216,
    "title": "Северное сияние",
    "category": "tea",
    "description": "Магический чай с северным светом и морозной свежестью.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Зелёный чай"
  },
  {
    "id": 217,
    "title": "Калужские луга",
    "category": "tea",
    "description": "Чай с луговыми травами Калужской области, дарит покой и расслабление.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 390, "priceCrossed": 450},
      {"value": 200, "price": 470, "priceCrossed": 530}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Травяной чай"
  },
  {
    "id": 218,
    "title": "Степной ветер",
    "category": "tea",
    "description": "Свежесть степного ветра и аромат полыни в каждой чашечке чая.",
    "weights": [
      {"value": 100, "price": 260, "priceCrossed": 280},
      {"value": 150, "price": 360, "priceCrossed": 410},
      {"value": 165, "price": 370, "priceCrossed": 420},
      {"value": 200, "price": 460, "priceCrossed": 520}
    ],
    "rate": {"rating": 4.4, "comments": 150},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зелёный чай"
  },
  {
    "id": 219,
    "title": "Таймырская мечта",
    "category": "tea",
    "description": "Освежающий чай с чистым северным воздухом и ароматом северных ягод.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Новый урожай", "Скидки"],
    "kind": "Зелёный чай"
  },
  {
    "id": 220,
    "title": "Восточные облака",
    "category": "tea",
    "description": "Изящный молочный улун с мягкими сливочными нотами и тонким ароматом орхидеи.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 221,
    "title": "Лунный свет матча",
    "category": "tea",
    "description": "Интенсивный зелёный порошок матча с глубоким травянистым вкусом и терпким послевкусием.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 222,
    "title": "Шёлковый путь",
    "category": "tea",
    "description": "Архаичный китайский пуэр с выразительным землистым вкусом и долгим древесным послевкусием.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 330},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 440, "priceCrossed": 500},
      {"value": 200, "price": 530, "priceCrossed": 620}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Пуэр"
  },
  {
    "id": 223,
    "title": "Итальянский кофе",
    "category": "tea",
    "description": "Традиционный итальянский эспрессо с интенсивным кофейным вкусом и лёгкой горчинкой.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 440},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 490, "priceCrossed": 560}
    ],
    "rate": {"rating": 4.6, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 224,
    "title": "Императорский улун",
    "category": "tea",
    "description": "Благородный молочный улун с деликатными орехово-молочными нотами и лёгкостью цветка магнолии.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 225,
    "title": "Светлая утренняя матча",
    "category": "tea",
    "description": "Высококачественный японский порошок матча с ярче выраженной кислинкой и нежностью листьев.",
    "weights": [
      {"value": 100, "price": 360, "priceCrossed": 390},
      {"value": 150, "price": 490, "priceCrossed": 540},
      {"value": 165, "price": 510, "priceCrossed": 570},
      {"value": 200, "price": 600, "priceCrossed": 690}
    ],
    "rate": {"rating": 4.9, "comments": 80},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 226,
    "title": "Старинный шэн-пуэр",
    "category": "tea",
    "description": "Редкий молодой пуэр с яркой фруктовой кислотностью и нюансами дубового дерева.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Пуэр"
  },
  {
    "id": 227,
    "title": "Капучино искусства",
    "category": "tea",
    "description": "Идеально сбалансированный капучино с воздушным молоком и изысканным кофейным телом.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 228,
    "title": "Небесный улун",
    "category": "tea",
    "description": "Высоко ценимый молочный улун с кремовым профилем вкуса и гладкостью шелковой ткани.",
    "weights": [
      {"value": 100, "price": 340, "priceCrossed": 370},
      {"value": 150, "price": 470, "priceCrossed": 520},
      {"value": 165, "price": 490, "priceCrossed": 550},
      {"value": 200, "price": 580, "priceCrossed": 670}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 229,
    "title": "Серебряная роса матча",
    "category": "tea",
    "description": "Органическая японская матча премиум-класса с изумрудным цветом и роскошным ароматом.",
    "weights": [
      {"value": 100, "price": 370, "priceCrossed": 400},
      {"value": 150, "price": 500, "priceCrossed": 550},
      {"value": 165, "price": 520, "priceCrossed": 580},
      {"value": 200, "price": 610, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 230,
    "title": "Пуэр старинного сада",
    "category": "tea",
    "description": "Выдержанный китайский пуэр с сильным земляным характером и мягкостью древесины.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Пуэр"
  },
  {
    "id": 231,
    "title": "Французский латте",
    "category": "tea",
    "description": "Настоящий французский латте с богатой пеной и утончённым сочетанием молока и кофе.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 330},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 440, "priceCrossed": 500},
      {"value": 200, "price": 530, "priceCrossed": 620}
    ],
    "rate": {"rating": 4.6, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 232,
    "title": "Золотой полдень улунга",
    "category": "tea",
    "description": "Исключительный молочный улун с золотистым цветом настоя и приятной сладостью.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 233,
    "title": "Весеннее пробуждение матча",
    "category": "tea",
    "description": "Освежающая весенняя матча с яркими оттенками травы и цитрусовых фруктов.",
    "weights": [
      {"value": 100, "price": 380, "priceCrossed": 410},
      {"value": 150, "price": 510, "priceCrossed": 560},
      {"value": 165, "price": 530, "priceCrossed": 590},
      {"value": 200, "price": 620, "priceCrossed": 710}
    ],
    "rate": {"rating": 4.9, "comments": 100},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 234,
    "title": "Пуэр редких сортов",
    "category": "tea",
    "description": "Особенный выдержанный пуэр с древними традициями производства и уникальным вкусом.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Пуэр"
  },
  {
    "id": 235,
    "title": "Ирландский мокко",
    "category": "tea",
    "description": "Восхитительное сочетание ирландского виски и кофе с тонкой шоколадной нотой.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.6, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 236,
    "title": "Изысканный улун",
    "category": "tea",
    "description": "Премиальный молочный улун с утончёнными молочно-фруктовыми оттенками.",
    "weights": [
      {"value": 100, "price": 360, "priceCrossed": 390},
      {"value": 150, "price": 490, "priceCrossed": 540},
      {"value": 165, "price": 510, "priceCrossed": 570},
      {"value": 200, "price": 600, "priceCrossed": 690}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 237,
    "title": "Летний сад матча",
    "category": "tea",
    "description": "Богатая зеленая матчи высшего качества с ярким ароматом свежескошенных трав.",
    "weights": [
      {"value": 100, "price": 390, "priceCrossed": 420},
      {"value": 150, "price": 520, "priceCrossed": 570},
      {"value": 165, "price": 540, "priceCrossed": 600},
      {"value": 200, "price": 630, "priceCrossed": 720}
    ],
    "rate": {"rating": 4.9, "comments": 100},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 238,
    "title": "Сумасшедший Капучино",
    "category": "tea",
    "description": "Великолепный капучино с идеальной консистенцией крема и насыщенностью аромата.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
    {
    "id": 239,
    "title": "Эрл Грей классический",
    "category": "tea",
    "description": "Английский чёрный чай с бергамотом, идеально подходит для английского завтрака.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 150},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 240,
    "title": "Жасминовый зелёный",
    "category": "tea",
    "description": "Китайский зелёный чай с натуральным ароматом цветков жасмина.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 241,
    "title": "Иван-чай алтайский",
    "category": "tea",
    "description": "Натуральный травяной чай из Алтайского края с успокаивающим эффектом.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 480, "priceCrossed": 550}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 242,
    "title": "Молочный улун Тао Хуа",
    "category": "tea",
    "description": "Китайский молочный улун с приятными цветочными нотами персиковых цветов.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 460, "priceCrossed": 520},
      {"value": 200, "price": 550, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.9, "comments": 80},
    "actions": ["Новинка", "Скидки"],
    "kind": "Молочный улунг"
  },
  {
    "id": 243,
    "title": "Медовая Матча",
    "category": "tea",
    "description": "Зелёный порошковый чай с добавлением натурального меда, придающего особую сладость.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.8, "comments": 90},
    "actions": ["Популярное", "Микролот"],
    "kind": "Матча"
  },
  {
    "id": 244,
    "title": "Шу Пуэр «Старая дорога»",
    "category": "tea",
    "description": "Выдержанный шу пуэр с характерным запахом влажной земли и тёмным вкусом.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 245,
    "title": "Эфиопский Латте",
    "category": "tea",
    "description": "Кофе с густой молочной пеной и ярко выраженными эфиопскими нотами кофе.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 246,
    "title": "Африканский Красный Чай",
    "category": "tea",
    "description": "Яркий красный чай родом из Африки с привкусом яблок и цитрусовых.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Травяной чай"
  },
  {
    "id": 247,
    "title": "Масала Чаи Ассам",
    "category": "tea",
    "description": "Индийский черный чай с пряностями кардамона, корицы и гвоздики.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 470},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 248,
    "title": "Сенча Японская весна",
    "category": "tea",
    "description": "Японский зеленый чай Сенча с легкой кислинкой и ароматом свежего зелёного листа.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.8, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зеленый чай"
  },
  {
    "id": 249,
    "title": "Матча «Бархатная ночь»",
    "category": "tea",
    "description": "Японская маття премиум класса с насыщенно-зеленым цветом и мягкой структурой.",
    "weights": [
      {"value": 100, "price": 360, "priceCrossed": 390},
      {"value": 150, "price": 490, "priceCrossed": 540},
      {"value": 165, "price": 510, "priceCrossed": 570},
      {"value": 200, "price": 600, "priceCrossed": 690}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 250,
    "title": "Шен Пуэр Золотые почки",
    "category": "tea",
    "description": "Юньнаньский шен пуэр высокого качества с изысканными элементами цветов и сухофруктов.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Пуэр"
  },
  {
    "id": 251,
    "title": "Колумбийская Эспрессо",
    "category": "tea",
    "description": "Яркий колумбийский эспрессо с ярким ароматом жареного зерна и умеренной кислотностью.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 252,
    "title": "Сенча Криэйшн",
    "category": "tea",
    "description": "Разновидность японского зеленого чая сенчи с улучшенным методом обработки и особым вкусом.",
    "weights": [
      {"value": 100, "price": 340, "priceCrossed": 370},
      {"value": 150, "price": 470, "priceCrossed": 520},
      {"value": 165, "price": 490, "priceCrossed": 550},
      {"value": 200, "price": 580, "priceCrossed": 670}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зеленый чай"
  },
  {
    "id": 253,
    "title": "Монгольский Царь Трав",
    "category": "tea",
    "description": "Смесь монгольских лекарственных трав, известная своими лечебными свойствами.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 480, "priceCrossed": 550}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 254,
    "title": "Мацзу Молочный улун",
    "category": "tea",
    "description": "Китайский молочный улун, обработанный традиционным способом с ярким сливочным вкусом.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 460, "priceCrossed": 520},
      {"value": 200, "price": 550, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.9, "comments": 80},
    "actions": ["Новинка", "Скидки"],
    "kind": "Молочный улунг"
  },
  {
    "id": 255,
    "title": "Чёрный Дракон Шу Пуэр",
    "category": "tea",
    "description": "Темный шу пуэр с насыщенным крепким вкусом и плотным настоем.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
    {
    "id": 256,
    "title": "Дарджилинг первый сбор",
    "category": "tea",
    "description": "Известный индийский черный чай Дарджилинг с тонким ароматом винограда и легкими нотами муската.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 257,
    "title": "Генмайча зеленый рис",
    "category": "tea",
    "description": "Традиционный японский зеленый чай Генмайча с обжаренным коричневым рисом, придающим ореховые оттенки вкусу.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 258,
    "title": "Чай монастырский травяной",
    "category": "tea",
    "description": "Авторский рецепт сбора лечебных трав, обладающих успокоительными и тонизирующими свойствами.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 259,
    "title": "Желтый Юньнань улун",
    "category": "tea",
    "description": "Качественный желтый улун с естественным медовым вкусом и изящным ароматом.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 260,
    "title": "Матча Камакура",
    "category": "tea",
    "description": "Самурайская классическая матча с глубокими оттенками зеленого цвета и безупречным качеством.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 261,
    "title": "Золотое сердце пуэр",
    "category": "tea",
    "description": "Шен пуэр высочайшего качества с отличительной особенностью богатого комплекса вкусов и ароматов.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 262,
    "title": "Кубинский кофе Мокко",
    "category": "tea",
    "description": "Крепкий кубинский кофе с карамельными нотами и уникальной глубиной вкуса.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 263,
    "title": "Сенча Азалия",
    "category": "tea",
    "description": "Специальный сорт японского зеленого чая Сенча с изысканной смесью ароматов азалии и лимона.",
    "weights": [
      {"value": 100, "price": 340, "priceCrossed": 370},
      {"value": 150, "price": 470, "priceCrossed": 520},
      {"value": 165, "price": 490, "priceCrossed": 550},
      {"value": 200, "price": 580, "priceCrossed": 670}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зеленый чай"
  },
  {
    "id": 264,
    "title": "Чай Лесная сказка",
    "category": "tea",
    "description": "Сбор полезных лесных трав с душистыми соцветиями чабреца и липового цвета.",
    "weights": [
      {"value": 100, "price": 270, "priceCrossed": 290},
      {"value": 150, "price": 380, "priceCrossed": 430},
      {"value": 165, "price": 400, "priceCrossed": 460},
      {"value": 200, "price": 480, "priceCrossed": 550}
    ],
    "rate": {"rating": 4.9, "comments": 100},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 265,
    "title": "Люань Гуа Пи Лоулун",
    "category": "tea",
    "description": "Обжаренный Китайский улун с особенным балансом молочности и цитрусового аромата.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 266,
    "title": "Фукаши матча",
    "category": "tea",
    "description": "Оригинальная смесь японской матча с острым вкусом зеленого яблока и пикантным цедровым ароматом.",
    "weights": [
      {"value": 100, "price": 360, "priceCrossed": 390},
      {"value": 150, "price": 490, "priceCrossed": 540},
      {"value": 165, "price": 510, "priceCrossed": 570},
      {"value": 200, "price": 600, "priceCrossed": 690}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 267,
    "title": "Ферментированный Лю Ань Шуй Цзинь",
    "category": "tea",
    "description": "Ферментация черничного сорта пуэра с нотами спелых тропических плодов и оттенков кедрового масла.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 268,
    "title": "Этнический кофе Бали",
    "category": "tea",
    "description": "Кофе с острова Бали, выращенный вручную и характеризующийся сладковатыми нотами шоколада и специй.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 269,
    "title": "Королевский Эрл Грей",
    "category": "tea",
    "description": "Чай Эрл Грей особого состава с повышенной концентрацией бергамота и лимоном.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 270,
    "title": "Чай огненная гора",
    "category": "tea",
    "description": "Китайский черный чай, известный своим насыщенным красным цветом и пряным вкусом.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.8, "comments": 110},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 271,
    "title": "Перуанская Кама матча",
    "category": "tea",
    "description": "Перецубилизированная матча с перуанскими ингредиентами и заметными фруктовыми оттенками.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 272,
    "title": "Красный королевский пуэр",
    "category": "tea",
    "description": "Рассыпчатый юньнаньский пуэр глубокого красного оттенка с богатым комплексом вкусов и ароматов.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 273,
    "title": "Малабарский макколли",
    "category": "tea",
    "description": "Индийский зелёный чай Макколли с ароматами шалфея и слегка терпким вкусом ананаса.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Микролот"],
    "kind": "Зеленый чай"
  },
    {
    "id": 274,
    "title": "Белый пион",
    "category": "tea",
    "description": "Легкий белый чай с нежным цветочным ароматом и сладким послевкусием.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 275,
    "title": "Спокойная ночь",
    "category": "tea",
    "description": "Расслабляющий травяной чай с мелиссой и ромашкой для крепкого сна.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 276,
    "title": "Джаспер Оранж Милк",
    "category": "tea",
    "description": "Молочный улун с освежающими апельсиновыми нотами и нежным сливочным вкусом.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 277,
    "title": "Фуцзяньский Император",
    "category": "tea",
    "description": "Матча высшего качества с глубоким зеленым цветом и насыщенным травяным вкусом.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 278,
    "title": "Пуэр Возрождение",
    "category": "tea",
    "description": "Среднеферментированный пуэр с ароматом старых книг и приятным послевкусием дуба.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 279,
    "title": "Безупречный Эспрессо",
    "category": "tea",
    "description": "Крепкий эспрессо с выраженным ароматом кофе и легкой кислинкой.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 280,
    "title": "Дарджилинг Голубой цветок",
    "category": "tea",
    "description": "Классический дарджилинг второго урожая с насыщенным винным вкусом и ароматом сирени.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 281,
    "title": "Зеленая долина",
    "category": "tea",
    "description": "Китайский зеленый чай с легкостью летнего утра и вкусом молодых почек.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 282,
    "title": "Баланс мира",
    "category": "tea",
    "description": "Травяной чай с валерианой и мятой, идеальный для снятия стресса и восстановления сил.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 283,
    "title": "Семь чудес улуна",
    "category": "tea",
    "description": "Молочный улун премиального качества с мягким сливочным вкусом и длительным послевкусием.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 284,
    "title": "Любовь Маццы",
    "category": "tea",
    "description": "Насыщенная японская матчa с изысканным горьковато-травяным вкусом и мягким медом.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 285,
    "title": "Золотая россыпь",
    "category": "tea",
    "description": "Кусочки фрукта и ароматизированный травяной чай с кусочками папайи и манго.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Травяной чай"
  },
  {
    "id": 286,
    "title": "Эликсир молодости",
    "category": "tea",
    "description": "Зеленый чай с экстрактом гибискуса и витамином C, полезный антиоксидант.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 287,
    "title": "Пуэр Серебряный лист",
    "category": "tea",
    "description": "Юньнаньский пуэр премиум-класса с серебряными почками и богатым набором вкусов.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 288,
    "title": "Кофе Коста-Рики",
    "category": "tea",
    "description": "Ароматный коста-риканский кофе с насыщенным вкусом какао и пряных специй.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 289,
    "title": "Черный жемчуг",
    "category": "tea",
    "description": "Ассамский чай элитного сорта с благородным вкусом, богатый антиоксидантами.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 290,
    "title": "Сон сердца",
    "category": "tea",
    "description": "Укрепляющий чай с листьями розмарина и лимонником для спокойствия и хорошего настроения.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 291,
    "title": "Лунный зонтик",
    "category": "tea",
    "description": "Легкий молочный улун с элегантным благоуханием лотоса и мягким вкусом.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 292,
    "title": "Азиатский восход",
    "category": "tea",
    "description": "Теплый черный чай с нотами миндаля и фундука, подходящий для начала дня.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 293,
    "title": "Долина единорога",
    "category": "tea",
    "description": "Легкий зеленый чай с ароматом летних цветов и цветочных лепестков.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 294,
    "title": "Чай мудрости",
    "category": "tea",
    "description": "Настой лекарственных трав с ромашкой и календулой, поддерживающий здоровье организма.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 295,
    "title": "Молочный улун Изумруд",
    "category": "tea",
    "description": "Создан специально для тех, кто любит мягкий и сладкий вкус чая с нотами ванили.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 296,
    "title": "Огненное дерево",
    "category": "tea",
    "description": "Японская матча с особой техникой обжарки, придающей ей глубокий, чуть терпкий вкус.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 297,
    "title": "Красивый дождь",
    "category": "tea",
    "description": "Китайский шу пуэр с мягкими землистыми нотами и богатым глубоким вкусом.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 298,
    "title": "Вечерняя звезда",
    "category": "tea",
    "description": "Ароматный кофе средней прожарки с глубоким вкусом шоколада и орехов.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 299,
    "title": "Цветочное настроение",
    "category": "tea",
    "description": "Пряный черный чай с лепестками розы и василька, наполняющий атмосферу радостью.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Микролот"],
    "kind": "Черный чай"
  },
  {
    "id": 300,
    "title": "Таинственное утро",
    "category": "tea",
    "description": "Зеленый чай с цитрусовыми нотами и оттенками хвои, идеальный для старта нового дня.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 301,
    "title": "Радостный завтрак",
    "category": "tea",
    "description": "Травяной чай с мятой и мелиссой, создающий ощущение гармонии и благополучия.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 302,
    "title": "Шоколадный поцелуй",
    "category": "tea",
    "description": "Молочный улун с шоколадными гранулами, придающими напитку неповторимую сладость.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 303,
    "title": "Ароматы ночи",
    "category": "tea",
    "description": "Японская матча с обогащением натуральной корицей и имбирём, приятно согревающее тело и разум.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 304,
    "title": "Дыхание осени",
    "category": "tea",
    "description": "Китайский пуэр со старением 5 лет, обеспечивающий тёплый и сложный букет вкусов.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 305,
    "title": "Кофе Свежести",
    "category": "tea",
    "description": "Мягкий венесуэльский кофе с едва уловимой кислинкой и ароматом лесного ореха.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
    {
    "id": 306,
    "title": "Лунный свет",
    "category": "tea",
    "description": "Легкий и ароматный черный чай с нотами апельсина и меда, созданный для вечернего отдыха.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 307,
    "title": "Зеленое озеро",
    "category": "tea",
    "description": "Китайский зеленый чай с нежным ароматом и мягким вкусом, напоминающим свежий росток бамбука.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 308,
    "title": "Луговая симфония",
    "category": "tea",
    "description": "Травяной чай с душистой мятой, тимьяном и клевером, вдохновленный природой русских полей.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
  {
    "id": 309,
    "title": "Молочный рай",
    "category": "tea",
    "description": "Молочный улун с насыщенным сливочным вкусом и ароматом свежих сливок, покоряющий своей нежностью.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 310,
    "title": "Матча Восходящего Солнца",
    "category": "tea",
    "description": "Японская матча высшего качества с ярким зеленым цветом и насыщенным травяным вкусом.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 311,
    "title": "Пуэр Древних Деревьев",
    "category": "tea",
    "description": "Редкий пуэр, собранный с вековых деревьев, обладает глубоким и многослойным вкусом.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 312,
    "title": "Кофе Колумбийского Утра",
    "category": "tea",
    "description": "Колумбийский кофе с ярким ароматом и насыщенным вкусом, заряжающий энергией на весь день.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 313,
    "title": "Черный Жемчужный Нектар",
    "category": "tea",
    "description": "Черный чай с добавлением натуральных фруктов и ягод, создавая яркий и освежающий вкус.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  },
  {
    "id": 314,
    "title": "Зеленое Озеро",
    "category": "tea",
    "description": "Китайский зеленый чай с нежным ароматом и мягким вкусом, напоминающим свежий росток бамбука.",
    "weights": [
      {"value": 100, "price": 300, "priceCrossed": 320},
      {"value": 150, "price": 420, "priceCrossed": 480},
      {"value": 165, "price": 430, "priceCrossed": 490},
      {"value": 200, "price": 520, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Зеленый чай"
  },
  {
    "id": 315,
    "title": "Луговая Мелодия",
    "category": "tea",
    "description": "Травяной чай с душистой мятой, тимьяном и клевером, вдохновленный природой русских полей.",
    "weights": [
      {"value": 100, "price": 280, "priceCrossed": 300},
      {"value": 150, "price": 390, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.9, "comments": 110},
    "actions": ["Популярное", "Ваш выбор"],
    "kind": "Травяной чай"
  },
    {
    "id": 316,
    "title": "Молочный Рассвет",
    "category": "tea",
    "description": "Молочный улун с нежным ароматом и кремовой текстурой, напоминающий первые лучи солнца.",
    "weights": [
      {"value": 100, "price": 330, "priceCrossed": 360},
      {"value": 150, "price": 460, "priceCrossed": 510},
      {"value": 165, "price": 480, "priceCrossed": 540},
      {"value": 200, "price": 570, "priceCrossed": 660}
    ],
    "rate": {"rating": 4.8, "comments": 100},
    "actions": ["Популярное", "Микролот"],
    "kind": "Молочный улунг"
  },
  {
    "id": 317,
    "title": "Матча Заката",
    "category": "tea",
    "description": "Японская матча с насыщенным травяным вкусом и глубоким зеленым цветом, символизирующим спокойствие вечера.",
    "weights": [
      {"value": 100, "price": 350, "priceCrossed": 380},
      {"value": 150, "price": 480, "priceCrossed": 530},
      {"value": 165, "price": 500, "priceCrossed": 560},
      {"value": 200, "price": 590, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.9, "comments": 90},
    "actions": ["Новинка", "Скидки"],
    "kind": "Матча"
  },
  {
    "id": 318,
    "title": "Пуэр Старейшины",
    "category": "tea",
    "description": "Выдержанный пуэр с насыщенным землистым вкусом и ароматом сухих листьев, отражающий мудрость веков.",
    "weights": [
      {"value": 100, "price": 310, "priceCrossed": 340},
      {"value": 150, "price": 430, "priceCrossed": 480},
      {"value": 165, "price": 450, "priceCrossed": 510},
      {"value": 200, "price": 540, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Пуэр"
  },
  {
    "id": 319,
    "title": "Кофе Горной Долины",
    "category": "tea",
    "description": "Кофе с высокогорных плантаций, обладающий ярким ароматом и насыщенным вкусом с нотами шоколада и орехов.",
    "weights": [
      {"value": 100, "price": 290, "priceCrossed": 310},
      {"value": 150, "price": 400, "priceCrossed": 450},
      {"value": 165, "price": 410, "priceCrossed": 470},
      {"value": 200, "price": 500, "priceCrossed": 580}
    ],
    "rate": {"rating": 4.6, "comments": 140},
    "actions": ["Популярное", "Микролот"],
    "kind": "Кофейные напитки"
  },
  {
    "id": 320,
    "title": "Черный Орден",
    "category": "tea",
    "description": "Черный чай с насыщенным вкусом и ароматом дыма, подчеркнутым нотами специй и сушеного инжира.",
    "weights": [
      {"value": 100, "price": 320, "priceCrossed": 350},
      {"value": 150, "price": 450, "priceCrossed": 500},
      {"value": 165, "price": 470, "priceCrossed": 530},
      {"value": 200, "price": 560, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Сорт недели"],
    "kind": "Черный чай"
  }
];

module.exports = teas;
