export interface SizeOption {
  name: string;
  detail: string;
}

export interface IngredientGroup {
  group: string;
  items: string[];
}

export interface Product {
  id: string;
  name: string;
  nameHighlight?: string;
  category: string;
  collection?: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  description: string;
  image: string;
  gallery?: string[];
  badge?: string;
  badgeColor?: 'gold' | 'purple';
  similarProducts: string[];
  fullDescription?: string;
  ingredients?: string[];
  allergens?: string[];
  sizeOptions?: SizeOption[];
  nutrition?: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  story?: {
    tag: string;
    title: string;
    highlight: string;
    paragraphs: string[];
    facts: string[];
    images: string[];
    craftLabel: string;
  };
  ingredientGroups?: IngredientGroup[];
  nutritionFull?: {
    calories: string;
    fatTotal: string;
    fatSaturated: string;
    carbs: string;
    sugars: string;
    protein: string;
    sodium: string;
  };
  menu?: {
    sizes: {
      name: string;
      price: number;
      servings: number;
      description: string;
    }[];
    formats: {
      name: string;
      description: string;
      price: number;
    }[];
    preparationTime: string;
    orderAdvance: string;
  };
}

export const defaultSizeOptions: SizeOption[] = [
  { name: 'Individual', detail: '1 persona' },
  { name: 'Mediano', detail: '6-8 personas' },
  { name: 'Grande', detail: '10-12 personas' },
  { name: 'Especial', detail: 'A medida' },
];

export interface CareItem {
  icon: string;
  title: string;
  description: string;
}

export const careInfo: CareItem[] = [
  {
    icon: 'fa-temperature-half',
    title: 'Conservación',
    description: 'Mantener refrigerado entre 2°C y 6°C. No congelar. Consumir preferentemente dentro de las 48 horas posteriores a la entrega para disfrutar su textura óptima.',
  },
  {
    icon: 'fa-truck',
    title: 'Entrega',
    description: 'Entrega el mismo día para pedidos realizados antes de las 12:00h. Enviamos en caja isotérmica especialmente diseñada para proteger la integridad del pastel durante el transporte.',
  },
  {
    icon: 'fa-utensils',
    title: 'Servicio',
    description: 'Recomendamos sacar del refrigerador 20 minutos antes de servir. Cortar con cuchillo caliente para obtener cortes limpios y preservar la estética del glaseado espejo.',
  },
  {
    icon: 'fa-recycle',
    title: 'Empaque',
    description: 'Presentado en caja de cartón reciclado con lazo de seda. El empaque es biodegradable y puede reutilizarse. Incluye tarjeta de elaboración y cuidados.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Garantía',
    description: 'Garantizamos la calidad de cada creación. Si no estás satisfecho, contáctanos dentro de las primeras 6 horas de recibido el pedido y lo resolvemos sin coste adicional.',
  },
  {
    icon: 'fa-star',
    title: 'Personalización',
    description: '¿Necesitas una dedicatoria o decoración especial? Indícalo en las notas del pedido o contáctanos directamente. Sin coste adicional para mensajes sencillos.',
  },
];

export const products: Product[] = [
  {
    id: 'opera-clasica',
    name: 'Ópera Clásica',
    category: 'Pasteles clásicos',
    price: 18.50,
    description: 'Bizcocho de almendra, crema de café y ganache de chocolate negro en capas perfectas.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/96fb75ed41-f75b3674eca840ad9ed0.png',
    badge: 'Favorito',
    badgeColor: 'gold',
    similarProducts: ['eclat-chocolat', 'fraisier-temporada', 'tiramisu-revisitado'],
    fullDescription: 'Una obra maestra de la pastelería francesa. Tres capas de bizcocho de almendra empapadas en café, intercaladas con cremosa mantequilla de café y cubiertas con un espejo brillante de chocolate negro.',
    ingredients: ['Almendras', 'Harina', 'Huevos', 'Mantequilla', 'Azúcar', 'Café', 'Chocolate negro 70%'],
    allergens: ['Frutos de cáscara', 'Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 320,
      protein: '4g',
      carbs: '38g',
      fat: '18g'
    },
    menu: {
      sizes: [
        { name: 'Individual', price: 18.50, servings: 1, description: 'Porción perfecta para una persona' },
        { name: 'Pequeño (6-8 personas)', price: 85.00, servings: 6, description: 'Ideal para reuniones pequeñas' },
        { name: 'Mediano (10-12 personas)', price: 125.00, servings: 10, description: 'Perfecto para celebraciones familiares' },
        { name: 'Grande (14-16 personas)', price: 165.00, servings: 14, description: 'Para eventos y fiestas grandes' }
      ],
      formats: [
        { name: 'Pastel entero', description: 'Pastel completo decorado artesanalmente', price: 0 },
        { name: 'Porciones individuales', description: 'Porciones pre-cortadas listas para servir', price: 5.00 },
        { name: 'Mini versiones', description: 'Versiones individuales tipo muffin', price: 4.50 }
      ],
      preparationTime: '24 horas',
      orderAdvance: '48 horas'
    }
  },
  {
    id: 'eclat-chocolat',
    name: 'Éclat au',
    nameHighlight: 'Chocolat',
    category: 'Pastel clásico',
    collection: 'Colección Principal',
    price: 21.00,
    originalPrice: 24.00,
    discount: 12,
    rating: 4.5,
    reviewCount: 48,
    description: 'Mousse de chocolate oscuro 72%, glaseado espejo y crujiente de praliné de avellana. Una creación que equilibra la intensidad del cacao con la suavidad de las texturas.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9197ec4187-479ef001cb267f16f8b5.png',
    gallery: [
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/9197ec4187-479ef001cb267f16f8b5.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/96fb75ed41-f75b3674eca840ad9ed0.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e25ea55a3-0f9128973255b58ca297.png',
      'https://storage.googleapis.com/uxpilot-auth.appspot.com/7438793c2a-f6fd1c1966279610809f.png'
    ],
    similarProducts: ['opera-clasica', 'red-velvet-suave', 'fondant-coulant'],
    fullDescription: 'Una experiencia intensa de chocolate. Mousse aireado de chocolate negro 72% sobre una base crujiente de praliné de avellana, coronado con un glaseado espejo brillante.',
    ingredients: ['Chocolate negro 72%', 'Avellanas', 'Nata', 'Huevos', 'Azúcar', 'Mantequilla'],
    allergens: ['Gluten', 'Lácteos', 'Huevo', 'Frutos secos'],
    story: {
      tag: 'La historia del pastel',
      title: 'Una oda al',
      highlight: 'chocolate',
      paragraphs: [
        'El Éclat au Chocolat es nuestra interpretación más refinada del pastel de chocolate. Cada capa ha sido diseñada para ofrecer una experiencia sensorial completa: desde el crujiente del praliné de avellana hasta la suavidad etérea del mousse.',
        'Utilizamos chocolate oscuro de origen Valrhona al 72% de cacao, seleccionado por su perfil aromático complejo con notas de frutos rojos y especias. El glaseado espejo, elaborado con técnica de temperatura precisa, otorga ese acabado brillante que caracteriza a las creaciones de alta pastelería.',
        'Cada pastel se elabora con 24 horas de anticipación para garantizar que las texturas alcancen su punto óptimo de maduración.'
      ],
      facts: ['Tiempo de elaboración: 24h', 'Consumir en 48h', 'Conservar refrigerado'],
      images: [
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e25ea55a3-0f9128973255b58ca297.png',
        'https://storage.googleapis.com/uxpilot-auth.appspot.com/9197ec4187-479ef001cb267f16f8b5.png'
      ],
      craftLabel: 'Artesanal'
    },
    ingredientGroups: [
      { group: 'Mousse de chocolate', items: ['Chocolate Valrhona 72%', 'Nata para montar', 'Yemas de huevo', 'Azúcar refinada', 'Mantequilla AOP'] },
      { group: 'Glaseado espejo', items: ['Glucosa', 'Leche condensada', 'Gelatina natural', 'Cacao en polvo', 'Agua mineral'] },
      { group: 'Praliné de avellana', items: ['Avellanas del Piamonte', 'Azúcar caramelizado', 'Sal de Añana', 'Chocolate con leche'] }
    ],
    nutritionFull: {
      calories: '385 kcal',
      fatTotal: '24g',
      fatSaturated: '14g',
      carbs: '38g',
      sugars: '28g',
      protein: '6g',
      sodium: '120mg'
    }
  },
  {
    id: 'fraisier-temporada',
    name: 'Fraisier de Temporada',
    category: 'Pasteles de temporada',
    price: 19.50,
    description: 'Génoise de vainilla, crema muselina y fresas frescas de temporada con cobertura de mazapán.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/75bd7fae56-e069fe5c9656d0450438.png',
    badge: 'Temporada',
    badgeColor: 'purple',
    similarProducts: ['opera-clasica', 'tarta-frambuesa', 'panna-cotta-rosa'],
    fullDescription: 'Clásico francés que celebra la frescura de las fresas. Bizcocho ligero de vainilla, crema muselina generosa y fresas frescas enteras, todo envuelto en una fina capa de mazapán rosa.',
    ingredients: ['Fresas frescas', 'Harina', 'Huevos', 'Mantequilla', 'Azúcar', 'Vainilla', 'Mazapán'],
    allergens: ['Gluten', 'Huevo', 'Lácteos', 'Frutos de cáscara'],
    nutrition: {
      calories: 290,
      protein: '3g',
      carbs: '35g',
      fat: '15g'
    },
    menu: {
      sizes: [
        { name: 'Individual', price: 19.50, servings: 1, description: 'Porción perfecta para una persona' },
        { name: 'Pequeño (6-8 personas)', price: 90.00, servings: 6, description: 'Ideal para reuniones pequeñas' },
        { name: 'Mediano (10-12 personas)', price: 130.00, servings: 10, description: 'Perfecto para celebraciones familiares' },
        { name: 'Grande (14-16 personas)', price: 170.00, servings: 14, description: 'Para eventos y fiestas grandes' }
      ],
      formats: [
        { name: 'Pastel entero', description: 'Pastel completo decorado artesanalmente', price: 0 },
        { name: 'Porciones individuales', description: 'Porciones pre-cortadas listas para servir', price: 5.50 },
        { name: 'Mini versiones', description: 'Versiones individuales tipo muffin', price: 5.00 }
      ],
      preparationTime: '24 horas',
      orderAdvance: '48 horas'
    }
  },
  {
    id: 'red-velvet-suave',
    name: 'Red Velvet Suave',
    category: 'Pasteles clásicos',
    price: 17.50,
    description: 'Bizcocho aterciopelado rojo con crema de queso, toque de vainilla y decoración artesanal.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7438793c2a-f6fd1c1966279610809f.png',
    similarProducts: ['eclat-chocolat', 'tiramisu-revisitado', 'creme-brulee'],
    fullDescription: 'El icónico pastel rojo aterciopelado en su versión más suave. Bizcocho tierno con un toque sutil de cacao, cubierto con nuestra cremosa crema de queso con vainilla.',
    ingredients: ['Harina', 'Huevos', 'Mantequilla', 'Queso crema', 'Vainilla', 'Cacao', 'Colorante alimentario'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 340,
      protein: '4g',
      carbs: '40g',
      fat: '19g'
    },
    menu: {
      sizes: [
        { name: 'Individual', price: 17.50, servings: 1, description: 'Porción perfecta para una persona' },
        { name: 'Pequeño (6-8 personas)', price: 80.00, servings: 6, description: 'Ideal para reuniones pequeñas' },
        { name: 'Mediano (10-12 personas)', price: 115.00, servings: 10, description: 'Perfecto para celebraciones familiares' },
        { name: 'Grande (14-16 personas)', price: 150.00, servings: 14, description: 'Para eventos y fiestas grandes' }
      ],
      formats: [
        { name: 'Pastel entero', description: 'Pastel completo decorado artesanalmente', price: 0 },
        { name: 'Porciones individuales', description: 'Porciones pre-cortadas listas para servir', price: 4.50 },
        { name: 'Mini versiones', description: 'Versiones individuales tipo muffin', price: 4.00 }
      ],
      preparationTime: '24 horas',
      orderAdvance: '48 horas'
    }
  },
  {
    id: 'limon-merengue',
    name: 'Limón & Merengue',
    category: 'Pasteles de temporada',
    price: 18.00,
    description: 'Bizcocho de limón, curd cremoso y merengue italiano tostado al momento.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c590a30e-598ca973c003b8932b79.png',
    badge: 'Temporada',
    badgeColor: 'purple',
    similarProducts: ['fraisier-temporada', 'panna-cotta-rosa', 'fondant-coulant'],
    fullDescription: 'El equilibrio perfecto entre acidez y dulzura. Bizcocho esponjoso de limón, generosa capa de curd de limón cremoso y merengue italiano tostado al momento.',
    ingredients: ['Limones', 'Harina', 'Huevos', 'Azúcar', 'Mantequilla', 'Merengue italiano'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 310,
      protein: '3g',
      carbs: '36g',
      fat: '17g'
    },
    menu: {
      sizes: [
        { name: 'Individual', price: 18.00, servings: 1, description: 'Porción perfecta para una persona' },
        { name: 'Pequeño (6-8 personas)', price: 85.00, servings: 6, description: 'Ideal para reuniones pequeñas' },
        { name: 'Mediano (10-12 personas)', price: 120.00, servings: 10, description: 'Perfecto para celebraciones familiares' },
        { name: 'Grande (14-16 personas)', price: 155.00, servings: 14, description: 'Para eventos y fiestas grandes' }
      ],
      formats: [
        { name: 'Pastel entero', description: 'Pastel completo decorado artesanalmente', price: 0 },
        { name: 'Porciones individuales', description: 'Porciones pre-cortadas listas para servir', price: 5.00 },
        { name: 'Mini versiones', description: 'Versiones individuales tipo muffin', price: 4.50 }
      ],
      preparationTime: '24 horas',
      orderAdvance: '48 horas'
    }
  },
  {
    id: 'tiramisu-revisitado',
    name: 'Tiramisú Revisitado',
    category: 'Pasteles clásicos',
    price: 17.00,
    description: 'Versión refinada del clásico italiano: mascarpone, espresso y cacao de origen en capas delicadas.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e25ea55a3-0f9128973255b58ca297.png',
    similarProducts: ['opera-clasica', 'red-velvet-suave', 'eclair-cafe'],
    fullDescription: 'Nuestra interpretación elegante del tiramisú clásico. Capas finas de bizcochos de soba empapados en espresso expresso, crema mascarpone ligera y un toque de cacao de origen.',
    ingredients: ['Mascarpone', 'Huevos', 'Azúcar', 'Café expresso', 'Cacao', 'Bizcochos de soja'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
    nutrition: {
      calories: 280,
      protein: '6g',
      carbs: '32g',
      fat: '14g'
    }
  },
  {
    id: 'fondant-coulant',
    name: 'Fondant Coulant',
    category: 'Postres individuales',
    price: 8.50,
    description: 'Bizcocho de chocolate con corazón líquido de chocolate negro 70%, servido caliente.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    badge: 'Favorito',
    badgeColor: 'gold',
    similarProducts: ['eclat-chocolat', 'creme-brulee', 'limon-merengue'],
    fullDescription: 'El postre de chocolate por excelencia. Bizcocho exterior esponjoso que al cortarlo libera un corazón líquido de chocolate negro 70%. Servido caliente con una bola de helado de vainilla.',
    ingredients: ['Chocolate negro 70%', 'Mantequilla', 'Huevos', 'Azúcar', 'Harina', 'Esencia de vainilla'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 420,
      protein: '5g',
      carbs: '45g',
      fat: '25g'
    }
  },
  {
    id: 'creme-brulee',
    name: 'Crème Brûlée',
    category: 'Postres individuales',
    price: 7.50,
    description: 'Crema de vainilla con cobertura de azúcar caramelizada, clásico francés.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/22201143d1-c1c1dfcfef15dd81d55f.png',
    similarProducts: ['fondant-coulant', 'panna-cotta-rosa', 'eclair-cafe'],
    fullDescription: 'El clásico francés en su máxima expresión. Crema catalana suave de vainilla bourbon con una capa crujiente de azúcar caramelizado con soplete justo antes de servir.',
    ingredients: ['Nata', 'Yemas de huevo', 'Azúcar', 'Vainilla bourbon'],
    allergens: ['Huevo', 'Lácteos'],
    nutrition: {
      calories: 280,
      protein: '4g',
      carbs: '28g',
      fat: '18g'
    }
  },
  {
    id: 'panna-cotta-rosa',
    name: 'Panna Cotta di Rosa',
    category: 'Postres individuales',
    price: 7.00,
    description: 'Panna cotta de fresas y rosas, decorada con berries frescos y hojas de menta.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/be0ca15106-b7cbc54a3b2af8cf47a6.png',
    badge: 'Nuevo',
    badgeColor: 'purple',
    similarProducts: ['creme-brulee', 'fraisier-temporada', 'limon-merengue'],
    fullDescription: 'Una creación floral y delicada. Panna cotta infusionada con pétalos de rosa y puré de fresas frescas, decorada con una selección de berries del bosque y hojas de menta fresca.',
    ingredients: ['Nata', 'Azúcar', 'Gelatina', 'Fresas', 'Pétalos de rosa', 'Berries', 'Menta'],
    allergens: ['Lácteos'],
    nutrition: {
      calories: 220,
      protein: '2g',
      carbs: '24g',
      fat: '12g'
    }
  },
  {
    id: 'eclair-cafe',
    name: 'Éclair au Café',
    category: 'Postres individuales',
    price: 6.50,
    description: 'Hojaldre relleno de crema de café y glaseado de chocolate, toque de café expresso.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/539421df68-00b49ff082bf978c1d2a.png',
    similarProducts: ['tiramisu-revisitado', 'creme-brulee', 'croissant-beurre'],
    fullDescription: 'El éclair clásico con un toque de café. Hojaldre crujiente relleno de crema pastelera infusionada con café expresso, glaseado con chocolate negro y decorado con granos de café.',
    ingredients: ['Harina', 'Mantequilla', 'Huevos', 'Café expresso', 'Chocolate', 'Nata'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    nutrition: {
      calories: 250,
      protein: '3g',
      carbs: '28g',
      fat: '15g'
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getSimilarProducts(productIds: string[]): Product[] {
  return products.filter(product => productIds.includes(product.id));
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
