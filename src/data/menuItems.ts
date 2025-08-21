import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: {
      en: 'Mediterranean Mezze Platter',
      he: 'מגש מזה ים תיכוני',
      ar: 'طبق مزة البحر المتوسط',
      ru: 'Средиземноморская тарелка мезе',
      yi: 'מעדיטעראַנעאַן מעזזע פּלאַטטער',
      am: 'የሜዲተራንያን ሜዜ ሳህን',
      fr: 'Plateau mezze méditerranéen',
      es: 'Plato de mezze mediterráneo',
      de: 'Mediterrane Mezze-Platte'
    },
    description: {
      en: 'A delightful selection of hummus, tabbouleh, olives, and pita bread',
      he: 'מבחר מענג של חומוס, טבולה, זיתים ופיתה',
      ar: 'مجموعة لذيذة من الحمص والتبولة والزيتون وخبز البيتا',
      ru: 'Восхитительный выбор хумуса, табуле, оливок и лаваша',
      yi: 'אַ דיליגהטפול אויסוואַל פון הומוס, טאַבולע, מאַסלינעס און פּיטאַ ברויט',
      am: 'የሁመስ፣ ታቡሌ፣ ዘይትና እና ፒታ ዳቦ አጣፋፊ ምርጫ',
      fr: 'Une délicieuse sélection de houmous, taboulé, olives et pain pita',
      es: 'Una deliciosa selección de hummus, tabbouleh, aceitunas y pan pita',
      de: 'Eine köstliche Auswahl an Hummus, Tabbouleh, Oliven und Pitabrot'
    },
    price: 24,
    category: 'appetizers',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    available: true,
    preparationTime: 15,
    allergens: ['gluten', 'sesame']
  },
  {
    id: '2',
    name: {
      en: 'Grilled Salmon with Herbs',
      he: 'סלמון בגריל עם עשבי תיבול',
      ar: 'سلمون مشوي بالأعشاب',
      ru: 'Лосось на гриле с травами',
      yi: 'גריד לאַקס מיט קרייַטער',
      am: 'በአሳማን ተጠብሶ የተሰራ',
      fr: 'Saumon grillé aux herbes',
      es: 'Salmón a la parrilla con hierbas',
      de: 'Gegrillter Lachs mit Kräutern'
    },
    description: {
      en: 'Fresh Atlantic salmon grilled to perfection with seasonal herbs and lemon',
      he: 'סלמון אטלנטי טרי בגריל לשלמות עם עשבי תיבול עונתיים ולימון',
      ar: 'سلمون أطلسي طازج مشوي للكمال مع الأعشاب الموسمية والليمون',
      ru: 'Свежий атлантический лосось, приготовленный на гриле до совершенства с сезонными травами и лимоном',
      yi: 'פריש אַטלאַנטיק לאַקס גריד צו פּערפעקציע מיט סיזאַנאַל קרייַטער און ציטרין',
      am: 'ትኩስ የአትላንቲክ ሳልሞን በዘመናዊ ዕፅዋትና ሊሚ ተጠብሶ የተሰራ',
      fr: 'Saumon atlantique frais grillé à la perfection avec des herbes de saison et du citron',
      es: 'Salmón atlántico fresco asado a la perfección con hierbas de temporada y limón',
      de: 'Frischer Atlantiklachs perfekt gegrillt mit saisonalen Kräutern und Zitrone'
    },
    price: 36,
    category: 'mains',
    image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
    available: true,
    preparationTime: 25,
    allergens: ['fish'],
    options: [
      {
        id: 'cooking',
        name: {
          en: 'Cooking Preference',
          he: 'העדפת בישול',
          ar: 'تفضيل الطبخ',
          ru: 'Предпочтение приготовления',
          yi: 'קאָכן פּרעפֿערענץ',
          am: 'የማብሰያ ምርጫ',
          fr: 'Préférence de cuisson',
          es: 'Preferencia de cocción',
          de: 'Kochpräferenz'
        },
        type: 'single',
        required: true,
        choices: [
          {
            id: 'rare',
            name: {
              en: 'Rare',
              he: 'נא',
              ar: 'نادر',
              ru: 'С кровью',
              yi: 'זעלטן',
              am: 'ብርቅ',
              fr: 'Saignant',
              es: 'Poco hecho',
              de: 'Blutig'
            },
            price: 0
          },
          {
            id: 'medium',
            name: {
              en: 'Medium',
              he: 'בינוני',
              ar: 'متوسط',
              ru: 'Средней прожарки',
              yi: 'מיטל',
              am: 'መካከለኛ',
              fr: 'À point',
              es: 'Término medio',
              de: 'Medium'
            },
            price: 0
          },
          {
            id: 'well-done',
            name: {
              en: 'Well Done',
              he: 'מבושל היטב',
              ar: 'مطبوخ جيداً',
              ru: 'Хорошо прожаренный',
              yi: 'גוט געטאן',
              am: 'በደንብ የተበሰለ',
              fr: 'Bien cuit',
              es: 'Bien hecho',
              de: 'Durchgebraten'
            },
            price: 0
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: {
      en: 'Chocolate Lava Cake',
      he: 'עוגת לבה שוקולד',
      ar: 'كعكة الشوكولاتة بالحمم',
      ru: 'Шоколадный лавовый торт',
      yi: 'שאָקאָלאַד לאַוואַ עוגה',
      am: 'የቸኮሌት ላቫ ኬክ',
      fr: 'Gâteau coulant au chocolat',
      es: 'Pastel de lava de chocolate',
      de: 'Schokoladen-Lava-Kuchen'
    },
    description: {
      en: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      he: 'עוגת שוקולד חמה עם מרכז נמס, מוגשת עם גלידת וניל',
      ar: 'كعكة شوكولاتة دافئة بمركز منصهر، تُقدم مع آيس كريم الفانيليا',
      ru: 'Теплый шоколадный торт с расплавленной начинкой, подается с ванильным мороженым',
      yi: 'וואַרעם שאָקאָלאַד עוגה מיט מאָלטאַן צענטער, געדינט מיט וואַניל אייז קרעם',
      am: 'በመሀል የተቀልጠ ቸኮሌት ያለው ሞቅ ያለ ኬክ፣ ከቫኒላ አይስክሬም ጋር ይቀርባል',
      fr: 'Gâteau au chocolat chaud au cœur coulant, servi avec glace vanille',
      es: 'Pastel de chocolate tibio con centro derretido, servido con helado de vainilla',
      de: 'Warmer Schokoladenkuchen mit geschmolzenem Kern, serviert mit Vanilleeis'
    },
    price: 18,
    category: 'desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    available: true,
    preparationTime: 12,
    allergens: ['dairy', 'eggs', 'gluten']
  },
  {
    id: '4',
    name: {
      en: 'Fresh Orange Juice',
      he: 'מיץ תפוזים טרי',
      ar: 'عصير برتقال طازج',
      ru: 'Свежевыжатый апельсиновый сок',
      yi: 'פריש מאַראַנץ זאַפט',
      am: 'ትኩስ የብርቱካን ጭማቂ',
      fr: 'Jus d\'orange frais',
      es: 'Jugo de naranja fresco',
      de: 'Frischer Orangensaft'
    },
    description: {
      en: 'Freshly squeezed orange juice from premium Valencia oranges',
      he: 'מיץ תפוזים טרי סחוט מתפוזי ולנסיה מובחרים',
      ar: 'عصير برتقال مضغوط طازجاً من برتقال فالنسيا المختار',
      ru: 'Свежевыжатый сок из отборных апельсинов Валенсия',
      yi: 'פריש אָויסגעפּרעסט מאַראַנץ זאַפט פון פּרעמיום וואַלענסיאַ מאַראַנץ',
      am: 'ከምርጥ የቫለንሲያ ብርቱካኖች የታጠበ ትኩስ ጭማቂ',
      fr: 'Jus d\'orange fraîchement pressé d\'oranges Valencia premium',
      es: 'Jugo de naranja recién exprimido de naranjas Valencia premium',
      de: 'Frisch gepresster Orangensaft aus erlesenen Valencia-Orangen'
    },
    price: 8,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg',
    available: true,
    preparationTime: 5,
    options: [
      {
        id: 'size',
        name: {
          en: 'Size',
          he: 'גודל',
          ar: 'الحجم',
          ru: 'Размер',
          yi: 'גרייס',
          am: 'መጠን',
          fr: 'Taille',
          es: 'Tamaño',
          de: 'Größe'
        },
        type: 'single',
        required: true,
        choices: [
          {
            id: 'small',
            name: {
              en: 'Small (250ml)',
              he: 'קטן (250מ"ל)',
              ar: 'صغير (250مل)',
              ru: 'Маленький (250мл)',
              yi: 'קליין (250מל)',
              am: 'ትንሽ (250ሚሊ)',
              fr: 'Petit (250ml)',
              es: 'Pequeño (250ml)',
              de: 'Klein (250ml)'
            },
            price: 0
          },
          {
            id: 'medium',
            name: {
              en: 'Medium (350ml)',
              he: 'בינוני (350מ"ל)',
              ar: 'متوسط (350مل)',
              ru: 'Средний (350мл)',
              yi: 'מיטל (350מל)',
              am: 'መካከለኛ (350ሚሊ)',
              fr: 'Moyen (350ml)',
              es: 'Mediano (350ml)',
              de: 'Mittel (350ml)'
            },
            price: 2
          },
          {
            id: 'large',
            name: {
              en: 'Large (500ml)',
              he: 'גדול (500מ"ל)',
              ar: 'كبير (500مل)',
              ru: 'Большой (500мл)',
              yi: 'גרויס (500מל)',
              am: 'ትልቅ (500ሚሊ)',
              fr: 'Grand (500ml)',
              es: 'Grande (500ml)',
              de: 'Groß (500ml)'
            },
            price: 4
          }
        ]
      },
      {
        id: 'ice',
        name: {
          en: 'Ice Preference',
          he: 'העדפת קרח',
          ar: 'تفضيل الثلج',
          ru: 'Предпочтение льда',
          yi: 'אייז פּרעפֿערענץ',
          am: 'የበረዶ ምርጫ',
          fr: 'Préférence de glace',
          es: 'Preferencia de hielo',
          de: 'Eispräferenz'
        },
        type: 'single',
        required: false,
        choices: [
          {
            id: 'no-ice',
            name: {
              en: 'No Ice',
              he: 'ללא קרח',
              ar: 'بدون ثلج',
              ru: 'Без льда',
              yi: 'קיין אייז',
              am: 'በረዶ የለም',
              fr: 'Sans glace',
              es: 'Sin hielo',
              de: 'Ohne Eis'
            },
            price: 0
          },
          {
            id: 'light-ice',
            name: {
              en: 'Light Ice',
              he: 'קרח קל',
              ar: 'ثلج خفيف',
              ru: 'Мало льда',
              yi: 'ליכט אייז',
              am: 'ቀላል በረዶ',
              fr: 'Peu de glace',
              es: 'Poco hielo',
              de: 'Wenig Eis'
            },
            price: 0
          },
          {
            id: 'regular-ice',
            name: {
              en: 'Regular Ice',
              he: 'קרח רגיל',
              ar: 'ثلج عادي',
              ru: 'Обычный лед',
              yi: 'רעגולער אייז',
              am: 'መደበኛ በረዶ',
              fr: 'Glace normale',
              es: 'Hielo normal',
              de: 'Normales Eis'
            },
            price: 0
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: {
      en: 'Truffle Risotto',
      he: 'ריזוטו כמהין',
      ar: 'ريزوتو الكمأة',
      ru: 'Ризотто с трюфелями',
      yi: 'טרופל ריזאָטטאָ',
      am: 'ትረፍል ሪዞቶ',
      fr: 'Risotto aux truffes',
      es: 'Risotto de trufa',
      de: 'Trüffel-Risotto'
    },
    description: {
      en: 'Creamy Arborio rice with black truffle shavings and Parmesan cheese',
      he: 'אורז ארבוריו קרמי עם שבבי כמהין שחור וגבינת פרמזן',
      ar: 'أرز أربوريو كريمي مع رقائق الكمأة السوداء وجبنة البارميزان',
      ru: 'Кремовый рис Арборио с стружкой черного трюфеля и сыром Пармезан',
      yi: 'קרעמי אַרבאָריאָ רייַז מיט שוואַרץ טרופל שאַווינגס און פּאַרמעסאַן קעז',
      am: 'ከጥቁር ትረፍልና ከፓርሜሳን ቺዝ ጋር የተሰራ ክሬሚ አርቦሪዮ ሩዝ',
      fr: 'Riz Arborio crémeux aux copeaux de truffe noire et parmesan',
      es: 'Arroz Arborio cremoso con virutas de trufa negra y queso parmesano',
      de: 'Cremiger Arborio-Reis mit schwarzen Trüffelspänen und Parmesan'
    },
    price: 42,
    category: 'mains',
    image: 'https://images.pexels.com/photos/6287380/pexels-photo-6287380.jpeg',
    available: true,
    preparationTime: 30,
    allergens: ['dairy', 'gluten']
  },
  {
    id: '6',
    name: {
      en: 'Craft Coffee Selection',
      he: 'מבחר קפה מלאכה',
      ar: 'مجموعة القهوة الحرفية',
      ru: 'Выбор крафтового кофе',
      yi: 'קראַפט קאַווע אויסוואַל',
      am: 'የእጅ ሥራ ቡና ምርጫ',
      fr: 'Sélection de café artisanal',
      es: 'Selección de café artesanal',
      de: 'Handwerkliche Kaffeeauswahl'
    },
    description: {
      en: 'Single-origin coffee beans expertly roasted and brewed to perfection',
      he: 'פולי קפה ממקור יחיד קלויים ומבושלים במומחיות לשלמות',
      ar: 'حبوب قهوة من مصدر واحد محمصة ومخمرة بخبرة للكمال',
      ru: 'Кофейные зерна одного происхождения, мастерски обжаренные и заваренные до совершенства',
      yi: 'איין-אָריגין קאַווע בינז עקספּערטלי ראָוסטיד און ברוד צו פּערפעקציע',
      am: 'ከአንድ ምንጭ የተወጡ የቡና ፍሬዎች በባለሙያነት የተጠበሱና ወደ ፍጻሜ የተደረሱ',
      fr: 'Grains de café d\'origine unique torréfiés et préparés avec expertise',
      es: 'Granos de café de origen único tostados y preparados con maestría',
      de: 'Single-Origin-Kaffeebohnen fachmännisch geröstet und perfekt gebrüht'
    },
    price: 12,
    category: 'beverages',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    available: true,
    preparationTime: 8,
    options: [
      {
        id: 'coffee-type',
        name: {
          en: 'Coffee Type',
          he: 'סוג קפה',
          ar: 'نوع القهوة',
          ru: 'Тип кофе',
          yi: 'קאַווע טיפּ',
          am: 'የቡና አይነት',
          fr: 'Type de café',
          es: 'Tipo de café',
          de: 'Kaffeetyp'
        },
        type: 'single',
        required: true,
        choices: [
          {
            id: 'espresso',
            name: {
              en: 'Espresso',
              he: 'אספרסו',
              ar: 'إسبريسو',
              ru: 'Эспрессо',
              yi: 'עספּרעססאָ',
              am: 'ኤስፕሬሶ',
              fr: 'Espresso',
              es: 'Espresso',
              de: 'Espresso'
            },
            price: 0
          },
          {
            id: 'americano',
            name: {
              en: 'Americano',
              he: 'אמריקנו',
              ar: 'أمريكانو',
              ru: 'Американо',
              yi: 'אַמעריקאַנאָ',
              am: 'አሜሪካኖ',
              fr: 'Americano',
              es: 'Americano',
              de: 'Americano'
            },
            price: 1
          },
          {
            id: 'cappuccino',
            name: {
              en: 'Cappuccino',
              he: 'קפוצ\'ינו',
              ar: 'كابتشينو',
              ru: 'Капучино',
              yi: 'קאַפּוטשינאָ',
              am: 'ካፑቺኖ',
              fr: 'Cappuccino',
              es: 'Cappuccino',
              de: 'Cappuccino'
            },
            price: 2
          },
          {
            id: 'latte',
            name: {
              en: 'Latte',
              he: 'לאטה',
              ar: 'لاتيه',
              ru: 'Латте',
              yi: 'לאַטטע',
              am: 'ላቴ',
              fr: 'Latte',
              es: 'Latte',
              de: 'Latte'
            },
            price: 2
          }
        ]
      },
      {
        id: 'milk-type',
        name: {
          en: 'Milk Type',
          he: 'סוג חלב',
          ar: 'نوع الحليب',
          ru: 'Тип молока',
          yi: 'מילך טיפּ',
          am: 'የወተት አይነት',
          fr: 'Type de lait',
          es: 'Tipo de leche',
          de: 'Milchtyp'
        },
        type: 'single',
        required: false,
        choices: [
          {
            id: 'regular',
            name: {
              en: 'Regular Milk',
              he: 'חלב רגיל',
              ar: 'حليب عادي',
              ru: 'Обычное молоко',
              yi: 'רעגולער מילך',
              am: 'መደበኛ ወተት',
              fr: 'Lait normal',
              es: 'Leche normal',
              de: 'Normale Milch'
            },
            price: 0
          },
          {
            id: 'oat',
            name: {
              en: 'Oat Milk',
              he: 'חלב שיבולת שועל',
              ar: 'حليب الشوفان',
              ru: 'Овсяное молоко',
              yi: 'האָבער מילך',
              am: 'የገብስ ወተት',
              fr: 'Lait d\'avoine',
              es: 'Leche de avena',
              de: 'Hafermilch'
            },
            price: 1
          },
          {
            id: 'almond',
            name: {
              en: 'Almond Milk',
              he: 'חלב שקדים',
              ar: 'حليب اللوز',
              ru: 'Миндальное молоко',
              yi: 'מאַנדל מילך',
              am: 'የሎዝ ወተት',
              fr: 'Lait d\'amande',
              es: 'Leche de almendra',
              de: 'Mandelmilch'
            },
            price: 1
          },
          {
            id: 'soy',
            name: {
              en: 'Soy Milk',
              he: 'חלב סויה',
              ar: 'حليب الصويا',
              ru: 'Соевое молоко',
              yi: 'סויאַ מילך',
              am: 'የሶያ ወተት',
              fr: 'Lait de soja',
              es: 'Leche de soja',
              de: 'Sojamilch'
            },
            price: 1
          }
        ]
      }
    ]
  }
];