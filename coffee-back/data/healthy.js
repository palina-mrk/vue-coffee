const healthies = [
  {
    "id": 801,
    "title": "Цикорий лесной",
    "description": "Органический порошок корня цикория для поддержки пищеварения и иммунитета.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 150},
      {"value": 150, "price": 180, "priceCrossed": 210},
      {"value": 165, "price": 200, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 270},
      {"value": 500, "price": 550, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 802,
    "title": "Протеиновая энергия",
    "description": "Смесь белков растительного происхождения для восстановления мышц.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 150, "priceCrossed": 180},
      {"value": 150, "price": 220, "priceCrossed": 250},
      {"value": 165, "price": 240, "priceCrossed": 270},
      {"value": 200, "price": 280, "priceCrossed": 310},
      {"value": 500, "price": 650, "priceCrossed": 700},
      {"value": 1000, "price": 1200, "priceCrossed": 1300}
    ],
    "rate": {"rating": 4.8, "comments": 150},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 803,
    "title": "Толокно овсяное",
    "description": "Полезная каша на основе толокна, богатая витаминами группы B.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 160, "priceCrossed": 180},
      {"value": 200, "price": 180, "priceCrossed": 200},
      {"value": 500, "price": 400, "priceCrossed": 450},
      {"value": 1000, "price": 750, "priceCrossed": 800}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 804,
    "title": "Оздоровительный напиток",
    "description": "Витаминный напиток на основе натуральных соков и экстрактов растений.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 160},
      {"value": 150, "price": 190, "priceCrossed": 220},
      {"value": 165, "price": 210, "priceCrossed": 240},
      {"value": 200, "price": 250, "priceCrossed": 280},
      {"value": 500, "price": 580, "priceCrossed": 630},
      {"value": 1000, "price": 1050, "priceCrossed": 1150}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 805,
    "title": "Живой ячмень",
    "description": "Органический напиток из пророщенного ячменя для укрепления организма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 180, "priceCrossed": 200},
      {"value": 200, "price": 210, "priceCrossed": 230},
      {"value": 500, "price": 480, "priceCrossed": 520},
      {"value": 1000, "price": 850, "priceCrossed": 900}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 806,
    "title": "Чистый протеин",
    "description": "Высококачественная белковая смесь без сахара и добавок.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 140, "priceCrossed": 170},
      {"value": 150, "price": 200, "priceCrossed": 230},
      {"value": 165, "price": 220, "priceCrossed": 250},
      {"value": 200, "price": 260, "priceCrossed": 290},
      {"value": 500, "price": 600, "priceCrossed": 650},
      {"value": 1000, "price": 1100, "priceCrossed": 1200}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 807,
    "title": "Геркулесовое здоровье",
    "description": "Быстрорастворимая геркулесовая каша с высоким содержанием клетчатки.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 808,
    "title": "Энергия пшеницы",
    "description": "Сублимированная пшеница с натуральными ферментами для поддержания жизненных сил.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 809,
    "title": "Диетический ячмень",
    "description": "Минимально обработанный ячмень с максимальным уровнем витаминов и минералов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 810,
    "title": "Фитнес-протеин",
    "description": "Специальная формула для активных тренировок и быстрого восстановления.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 811,
    "title": "Заряженное утро",
    "description": "Комплекс антиоксидантов и аминокислот для энергичного начала дня.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 812,
    "title": "Целебный цикорий",
    "description": "Цикорий высшего качества для оздоровления печени и улучшения пищеварения.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 813,
    "title": "Антивозрастной комплекс",
    "description": "Напиток, богатый антиоксидантами и минералами для замедления старения клеток.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 814,
    "title": "Сила ячменя",
    "description": "Органический ячменный напиток с укрепляющим эффектом для иммунной системы.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 816,
    "title": "Здоровье и сила",
    "description": "Порошковый растворимый напиток на основе органических продуктов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 817,
    "title": "Энергия Природы",
    "description": "Экстракт листьев и корней целебных растений в удобном формате порошка.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 818,
    "title": "Цельнозерновые хлопья",
    "description": "Сытная и полезная каша из цельнозерновых злаков для завтрака.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 819,
    "title": "Ячменный комфорт",
    "description": "Очищающий организм напиток на основе экологически чистого ячменя.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 820,
    "title": "Белковый коктейль",
    "description": "Эффективный способ восполнить дефицит белка и восстановить мышцы.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 821,
    "title": "Цикорий чистый",
    "description": "Органический продукт для тех, кому важен здоровый образ жизни.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 822,
    "title": "Пшеничное восстановление",
    "description": "Полезный натуральный напиток из проростков пшеницы для очищения организма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 823,
    "title": "Цельное зерно",
    "description": "Каши из необработанных круп с полезными микроэлементами.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 824,
    "title": "Укрепляющий напиток",
    "description": "Простой и эффективный способ укрепить иммунитет с помощью природных компонентов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 825,
    "title": "Пророщенные семена",
    "description": "Кашу обогащают ценные вещества из пророщенных семян льна и подсолнечника.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 826,
    "title": "Биологический белок",
    "description": "Оптимальная форма для набора мышечной массы и общего самочувствия.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 827,
    "title": "Микс семян",
    "description": "Напиток из комбинации полезных масел и экстракта растительных семян.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 828,
    "title": "Органический ячмень",
    "description": "Экологически чистый напиток на основе очищенного ячменя.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 829,
    "title": "Фито-микс",
    "description": "Порошковый фитокомплекс с набором витаминов и микроэлементов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 830,
    "title": "Омега-завтрак",
    "description": "Мультизлаковая каша с омега-3 жирными кислотами и витамином D.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 831,
    "title": "Лёгкий белок",
    "description": "Растительный белок для эффективного роста мышц и быстрого восстановления.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 832,
    "title": "Детокс-напиток",
    "description": "Композиция лекарственных трав и овощей для детоксикации организма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 833,
    "title": "Целебный цикорий",
    "description": "Натуральный порошок корня цикория, поддерживающий пищеварительную систему.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 834,
    "title": "Ячменная классика",
    "description": "Цельный ячмень для повышения уровня энергии и хорошего настроения.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 835,
    "title": "Защитный барьер",
    "description": "Универсальный иммуностимулятор на основе суперпродуктов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 836,
    "title": "Энергия дня",
    "description": "Заряд бодрости на весь день с природными стимуляторами и антидепрессантами.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 837,
    "title": "Тонизирующая смесь",
    "description": "Специализированный состав тонизирующих веществ для ежедневного потребления.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 838,
    "title": "Суперфуд-коктейль",
    "description": "Максимум пользы и минимум калорий с ценными компонентами природного происхождения.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 839,
    "title": "Лечебный эликсир",
    "description": "Напиток, созданный специально для нормализации функций ЖКТ и метаболизма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 500, "priceCrossed": 550},
      {"value": 1000, "price": 900, "priceCrossed": 950}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 840,
    "title": "Терпкий протеин",
    "description": "Растворимый напиток на основе легко усваиваемого животного белка.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 841,
    "title": "Ценность тела",
    "description": "Продукт для комплексного ухода за телом, включает аминокислоты и витамины.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 210, "priceCrossed": 230},
      {"value": 200, "price": 240, "priceCrossed": 260},
      {"value": 500, "price": 560, "priceCrossed": 600},
      {"value": 1000, "price": 1000, "priceCrossed": 1100}
    ],
    "rate": {"rating": 4.8, "comments": 140},
    "actions": ["Скидки", "Новинка"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 842,
    "title": "Энергия цикориевая",
    "description": "Органический порошок цикория для придания организму силы и выносливости.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 843,
    "title": "Ячменная сила",
    "description": "Сильный антиоксидантный эффект обеспечивает хорошее самочувствие и тонус.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.6, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 844,
    "title": "Золотой цикорий",
    "description": "Натуральный напиток с богатым вкусом и ароматом, способствующий улучшению пищеварения.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 400, "priceCrossed": 450},
      {"value": 1000, "price": 750, "priceCrossed": 800}
    ],
    "rate": {"rating": 4.8, "comments": 120},
    "actions": ["Популярное", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 845,
    "title": "Витаминный микс",
    "description": "Фиточай из натуральных трав, поддерживающий иммунитет и общее состояние организма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 80, "priceCrossed": 100},
      {"value": 150, "price": 120, "priceCrossed": 140},
      {"value": 165, "price": 130, "priceCrossed": 150},
      {"value": 200, "price": 150, "priceCrossed": 170},
      {"value": 500, "price": 380, "priceCrossed": 430},
      {"value": 1000, "price": 700, "priceCrossed": 750}
    ],
    "rate": {"rating": 4.5, "comments": 80},
    "actions": ["Новый урожай", "Ваш выбор"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 846,
    "title": "Белковый коктейль",
    "description": "Высокобелковая смесь для восстановления мышц и поддержания формы тела.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 180, "priceCrossed": 200},
      {"value": 200, "price": 200, "priceCrossed": 220},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 850, "priceCrossed": 900}
    ],
    "rate": {"rating": 4.7, "comments": 100},
    "actions": ["Сорт недели", "Скидки"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 847,
    "title": "Толокно Золотое утро",
    "description": "Быстрорастворимая овсянка для утреннего завтрака, богатая витаминами группы B и клетчаткой.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 70, "priceCrossed": 90},
      {"value": 150, "price": 100, "priceCrossed": 120},
      {"value": 165, "price": 110, "priceCrossed": 130},
      {"value": 200, "price": 130, "priceCrossed": 150},
      {"value": 500, "price": 350, "priceCrossed": 400},
      {"value": 1000, "price": 650, "priceCrossed": 700}
    ],
    "rate": {"rating": 4.4, "comments": 70},
    "actions": ["Популярное", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 848,
    "title": "Цикорий с имбирём",
    "description": "Природный стимулятор иммунитета, улучшает пищеварение и поддерживает энергетический баланс.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 95, "priceCrossed": 115},
      {"value": 150, "price": 135, "priceCrossed": 155},
      {"value": 165, "price": 145, "priceCrossed": 165},
      {"value": 200, "price": 165, "priceCrosсед": 185},
      {"value": 500, "price": 410, "priceCrossed": 460},
      {"value": 1000, "price": 770, "priceCrossed": 820}
    ],
    "rate": {"rating": 4.6, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 849,
    "title": "Смузи Detox Energy",
    "description": "Освежающий смузи на основе зелёных овощей и фруктов, очищающий организм и заряжающий энергией.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 150, "priceCrossed": 170},
      {"value": 165, "price": 160, "priceCrossed": 180},
      {"value": 200, "price": 180, "priceCrossed": 200},
      {"value": 500, "price": 440, "priceCrossed": 490},
      {"value": 1000, "price": 800, "priceCrossed": 850}
    ],
    "rate": {"rating": 4.7, "comments": 130},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 850,
    "title": "Белково-витаминный комплекс",
    "description": "Комплекс белков и витаминов для поддержки активного образа жизни и повышения выносливости.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 180, "priceCrossed": 200},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 210, "priceCrossed": 230},
      {"value": 500, "price": 460, "priceCrossed": 510},
      {"value": 1000, "price": 860, "priceCrossed": 910}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 851,
    "title": "Гречка Прованская",
    "description": "Органическая гречка высшего качества, источник растительного белка и микроэлементов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 60, "priceCrossed": 80},
      {"value": 150, "price": 90, "priceCrossed": 110},
      {"value": 165, "price": 100, "priceCrossed": 120},
      {"value": 200, "price": 110, "priceCrossed": 130},
      {"value": 500, "price": 330, "priceCrossed": 380},
      {"value": 1000, "price": 600, "priceCrossed": 650}
    ],
    "rate": {"rating": 4.3, "comments": 60},
    "actions": ["Новинка", "Ваш выбор"],
    "kind": "Толокняные каши"
  },
  {
    "id": 852,
    "title": "Чёрный ячмень",
    "description": "Богатый антиоксидантами продукт, помогает поддерживать здоровье сердца и сосудов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 85, "priceCrossed": 105},
      {"value": 150, "price": 125, "priceCrossed": 145},
      {"value": 165, "price": 135, "priceCrossed": 155},
      {"value": 200, "price": 155, "priceCrossed": 175},
      {"value": 500, "price": 390, "priceCrossed": 440},
      {"value": 1000, "price": 720, "priceCrossed": 770}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Популярное"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 853,
    "title": "Имбирный чай",
    "description": "Ароматный чай с согревающим эффектом, повышает защитные силы организма и ускоряет метаболизм.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 75, "priceCrossed": 95},
      {"value": 150, "price": 110, "priceCrossed": 130},
      {"value": 165, "price": 120, "priceCrossed": 140},
      {"value": 200, "price": 130, "priceCrossed": 150},
      {"value": 500, "price": 360, "priceCrossed": 410},
      {"value": 1000, "price": 630, "priceCrossed": 680}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Ваш выбор", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 854,
    "title": "Прованские протеины",
    "description": "Высококалорийная белковая смесь для набора мышечной массы и быстрого восстановления после тренировок.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 140, "priceCrossed": 160},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 200, "priceCrossed": 220},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 470, "priceCrossed": 520},
      {"value": 1000, "price": 870, "priceCrossed": 920}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 855,
    "title": "Отруби рожь-крупчатка",
    "description": "Источник пищевых волокон, улучшающих работу кишечника и снижающих уровень холестерина.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 55, "priceCrossed": 75},
      {"value": 150, "price": 80, "priceCrossed": 100},
      {"value": 165, "price": 90, "priceCrossed": 110},
      {"value": 200, "price": 100, "priceCrossed": 120},
      {"value": 500, "price": 310, "priceCrossed": 360},
      {"value": 1000, "price": 580, "priceCrossed": 630}
    ],
    "rate": {"rating": 4.4, "comments": 80},
    "actions": ["Новинка", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 856,
    "title": "Корень солодки",
    "description": "Полезный напиток с мягким сладковатым вкусом, благотворно влияет на дыхательную систему и иммунную защиту.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 160, "priceCrossed": 180},
      {"value": 500, "price": 410, "priceCrossed": 460},
      {"value": 1000, "price": 760, "priceCrossed": 810}
    ],
    "rate": {"rating": 4.6, "comments": 110},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 857,
    "title": "Иммунитет Booster",
    "description": "Смесь природных компонентов, повышающая сопротивляемость организма инфекциям и стрессовым нагрузкам.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 140, "priceCrossed": 160},
      {"value": 165, "price": 150, "priceCrossed": 170},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 858,
    "title": "Сила Протеина",
    "description": "Высококачественный белок, обеспечивающий рост мышц и восстановление тканей после физических нагрузок.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 150, "priceCrossed": 170},
      {"value": 150, "price": 190, "priceCrossed": 210},
      {"value": 165, "price": 200, "priceCrossed": 220},
      {"value": 200, "price": 220, "priceCrossed": 240},
      {"value": 500, "price": 480, "priceCrossed": 530},
      {"value": 1000, "price": 880, "priceCrossed": 930}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 859,
    "title": "Манная крупа Люкс",
    "description": "Классическое блюдо русской кухни, простое в приготовлении и полезное для желудка.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 50, "priceCrossed": 70},
      {"value": 150, "price": 75, "priceCrossed": 95},
      {"value": 165, "price": 85, "priceCrossed": 105},
      {"value": 200, "price": 95, "priceCrossed": 115},
      {"value": 500, "price": 300, "priceCrossed": 350},
      {"value": 1000, "price": 550, "priceCrossed": 600}
    ],
    "rate": {"rating": 4.3, "comments": 70},
    "actions": ["Новинка", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 860,
    "title": "Чага природный эликсир",
    "description": "Напиток из берёзового гриба чаги, известный своими целебными свойствами и укрепляющим действием на организм.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 80, "priceCrossed": 100},
      {"value": 150, "price": 110, "priceCrossed": 130},
      {"value": 165, "price": 120, "priceCrossed": 140},
      {"value": 200, "price": 130, "priceCrossed": 150},
      {"value": 500, "price": 370, "priceCrossed": 420},
      {"value": 1000, "price": 640, "priceCrossed": 690}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Ваш выбор", "Скидки"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 861,
    "title": "Зелёный Чай Здоровье",
    "description": "Традиционный китайский зеленый чай премиум-класса, богатый антиоксидантами и полезными веществами.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 105, "priceCrossed": 125},
      {"value": 150, "price": 145, "priceCrossed": 165},
      {"value": 165, "price": 155, "priceCrossed": 175},
      {"value": 200, "price": 175, "priceCrossed": 195},
      {"value": 500, "price": 430, "priceCrossed": 480},
      {"value": 1000, "price": 790, "priceCrossed": 840}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
    {
    "id": 863,
    "title": "Семена льна Премиум",
    "description": "Богаты омега-3 жирными кислотами, способствуют нормализации уровня сахара и укреплению сердечно-сосудистой системы.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 70, "priceCrossed": 90},
      {"value": 150, "price": 100, "priceCrossed": 120},
      {"value": 165, "price": 110, "priceCrossed": 130},
      {"value": 200, "price": 120, "priceCrossed": 140},
      {"value": 500, "price": 340, "priceCrossed": 390},
      {"value": 1000, "price": 620, "priceCrossed": 670}
    ],
    "rate": {"rating": 4.4, "comments": 80},
    "actions": ["Новинка", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 864,
    "title": "Чаговый кофе Энергия",
    "description": "Безкофеиновый аналог кофе с бодрящим и освежающим вкусом природного напитка из гриба чаги.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 120, "priceCrossed": 140},
      {"value": 165, "price": 130, "priceCrossed": 150},
      {"value": 200, "price": 140, "priceCrossed": 160},
      {"value": 500, "price": 380, "priceCrossed": 430},
      {"value": 1000, "price": 730, "priceCrossed": 780}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Цикорий и корень цикория"
  },
  {
    "id": 865,
    "title": "Спортивный протеин Active Fit",
    "description": "Оптимальная формула для спортсменов и любителей фитнеса, способствует быстрому восстановлению и росту мышц.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 140, "priceCrossed": 160},
      {"value": 150, "price": 180, "priceCrossed": 200},
      {"value": 165, "price": 190, "priceCrossed": 210},
      {"value": 200, "price": 210, "priceCrossed": 230},
      {"value": 500, "price": 470, "priceCrossed": 520},
      {"value": 1000, "price": 870, "priceCrossed": 920}
    ],
    "rate": {"rating": 4.7, "comments": 110},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 866,
    "title": "Экстра Натуральная Гречка",
    "description": "Высококачественная цельнозерновая гречневая крупа, содержащая много железа и витамина E.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 65, "priceCrossed": 85},
      {"value": 150, "price": 95, "priceCrossed": 115},
      {"value": 165, "price": 105, "priceCrossed": 125},
      {"value": 200, "price": 115, "priceCrossed": 135},
      {"value": 500, "price": 320, "priceCrossed": 370},
      {"value": 1000, "price": 590, "priceCrossed": 640}
    ],
    "rate": {"rating": 4.3, "comments": 70},
    "actions": ["Новинка", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 867,
    "title": "Имбирный лимонад Vita+",
    "description": "Нежный напиток с ярким вкусом свежего имбиря, стимулирует обмен веществ и укрепляет иммунитет.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 150, "priceCrossed": 170},
      {"value": 500, "price": 410, "priceCrossed": 460},
      {"value": 1000, "price": 760, "priceCrossed": 810}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 868,
    "title": "Хрустящие Овсяные хлопья",
    "description": "Цельнозерновые овсяные хлопья быстрого приготовления, богатые клетчаткой и витаминами группы B.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 60, "priceCrossed": 80},
      {"value": 150, "price": 90, "priceCrossed": 110},
      {"value": 165, "price": 100, "priceCrossed": 120},
      {"value": 200, "price": 110, "priceCrossed": 130},
      {"value": 500, "price": 310, "priceCrossed": 360},
      {"value": 1000, "price": 570, "priceCrossed": 620}
    ],
    "rate": {"rating": 4.4, "comments": 80},
    "actions": ["Новинка", "Микролот"],
    "kind": "Толокняные каши"
  },
  {
    "id": 869,
    "title": "Энергетический батончик SportFuel",
    "description": "Натуральный протеиновый батончик с высоким содержанием полезных жиров и углеводов для интенсивных тренировок.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 180, "priceCrossed": 200},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 850, "priceCrossed": 900}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 870,
    "title": "Мощный мёд Алтая",
    "description": "Алтайский натуральный мёд с цветочным букетом, отличный источник энергии и природное средство против простуды.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 110, "priceCrossed": 130},
      {"value": 150, "price": 150, "priceCrossed": 170},
      {"value": 165, "price": 160, "priceCrossed": 180},
      {"value": 200, "price": 170, "priceCrossed": 190},
      {"value": 500, "price": 420, "priceCrossed": 470},
      {"value": 1000, "price": 780, "priceCrossed": 830}
    ],
    "rate": {"rating": 4.7, "comments": 120},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
  {
    "id": 871,
    "title": "Фруктово-протеиновая смесь",
    "description": "Сбалансированная смесь растительных белков и фруктов, отлично подходит для спортивного питания и детоксикации организма.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 130, "priceCrossed": 150},
      {"value": 150, "price": 170, "priceCrossed": 190},
      {"value": 165, "price": 180, "priceCrossed": 200},
      {"value": 200, "price": 190, "priceCrossed": 210},
      {"value": 500, "price": 460, "priceCrossed": 510},
      {"value": 1000, "price": 860, "priceCrossed": 910}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 872,
    "title": "Чистый Ячмень",
    "description": "Настоящий природный заменитель кофе, придаёт энергию и нормализует сон благодаря уникальному составу.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 85, "priceCrossed": 105},
      {"value": 150, "price": 125, "priceCrossed": 145},
      {"value": 165, "price": 135, "priceCrossed": 155},
      {"value": 200, "price": 145, "priceCrossed": 165},
      {"value": 500, "price": 390, "priceCrossed": 440},
      {"value": 1000, "price": 720, "priceCrossed": 770}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Скидки", "Ваш выбор"],
    "kind": "Ячменные напитки"
  },
  {
    "id": 873,
    "title": "Растительный Омега-3 Complex",
    "description": "Формула жирных кислот омега-3, необходимая для нормального функционирования мозга и сердечно-сосудистой системы.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 120, "priceCrossed": 140},
      {"value": 150, "price": 160, "priceCrossed": 180},
      {"value": 165, "price": 170, "priceCrossed": 190},
      {"value": 200, "price": 180, "priceCrossed": 200},
      {"value": 500, "price": 450, "priceCrossed": 500},
      {"value": 1000, "price": 850, "priceCrossed": 900}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Скидки", "Сорт недели"],
    "kind": "Протеиновые смеси"
  },
  {
    "id": 874,
    "title": "Черника Wild Berry",
    "description": "Свежезамороженные ягоды черники дикого сбора, мощный источник антиоксидантов и ценных витаминов.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 90, "priceCrossed": 110},
      {"value": 150, "price": 120, "priceCrossed": 140},
      {"value": 165, "price": 130, "priceCrossed": 150},
      {"value": 200, "price": 140, "priceCrossed": 160},
      {"value": 500, "price": 380, "priceCrossed": 430},
      {"value": 1000, "price": 730, "priceCrossed": 780}
    ],
    "rate": {"rating": 4.5, "comments": 90},
    "actions": ["Ваш выбор", "Скидки"],
    "kind": "Толокняные каши"
  },
  {
    "id": 875,
    "title": "Антиоксидантный чай Ройбуш",
    "description": "Ароматный красный африканский чай без кофеина, содержащий антиоксиданты и витамины.",
    "category": "healthy",
    "weights": [
      {"value": 100, "price": 100, "priceCrossed": 120},
      {"value": 150, "price": 130, "priceCrossed": 150},
      {"value": 165, "price": 140, "priceCrossed": 160},
      {"value": 200, "price": 150, "priceCrossed": 170},
      {"value": 500, "price": 410, "priceCrossed": 460},
      {"value": 1000, "price": 760, "priceCrossed": 810}
    ],
    "rate": {"rating": 4.6, "comments": 100},
    "actions": ["Популярное", "Скидки"],
    "kind": "Напитки для здоровья"
  },
];

module.exports = healthies;