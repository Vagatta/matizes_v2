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

/* ─────────────────────────────────────────────
   Tartas — Configuración de tamaños y precios
   ───────────────────────────────────────────── */

export interface TartaSize {
  name: string;
  servings: string;
  price: number;
}

export interface TartaProduct {
  id: string;
  name: string;
  description?: string;
  sizes: TartaSize[];
}

export interface TartaCategory {
  title: string;
  subtitle?: string;
  items: TartaProduct[];
}

export const tartasMenu: TartaCategory[] = [
  {
    title: 'Tartas de Creaciones',
    subtitle: 'Disponibles en los sabores de nuestras Creaciones Individuales',
    items: [
      {
        id: 'tarta-creaciones',
        name: 'Tarta de Creaciones',
        description: 'Elige entre Lima, Chocolate, Mascarpone o Vainilla',
        sizes: [
          { name: 'Mediana', servings: '6-8 raciones', price: 35 },
          { name: 'Grande', servings: '10-12 raciones', price: 45 },
        ],
      },
    ],
  },
  {
    title: 'Carrot Cake',
    items: [
      {
        id: 'tarta-carrot-cake',
        name: 'Carrot Cake',
        sizes: [
          { name: 'Pequeño', servings: '4-6 raciones', price: 18 },
          { name: 'Mediana', servings: '6-8 raciones', price: 22 },
          { name: 'Grande', servings: '10-12 raciones', price: 25 },
        ],
      },
    ],
  },
  {
    title: 'Brownie',
    items: [
      {
        id: 'tarta-brownie',
        name: 'Brownie',
        sizes: [
          { name: 'Pequeño', servings: '4-6 raciones', price: 20 },
          { name: 'Mediana', servings: '6-8 raciones', price: 25 },
          { name: 'Grande', servings: '10-12 raciones', price: 30 },
        ],
      },
    ],
  },
  {
    title: 'Red Velvet',
    items: [
      {
        id: 'tarta-red-velvet',
        name: 'Red Velvet',
        sizes: [
          { name: 'Pequeño', servings: '4-6 raciones', price: 20 },
          { name: 'Mediana', servings: '6-8 raciones', price: 25 },
          { name: 'Grande', servings: '10-12 raciones', price: 30 },
        ],
      },
    ],
  },
  {
    title: 'Sacher',
    items: [
      {
        id: 'tarta-sacher',
        name: 'Sacher',
        sizes: [
          { name: 'Pequeño', servings: '4-6 raciones', price: 30 },
          { name: 'Mediana', servings: '6-8 raciones', price: 35 },
          { name: 'Grande', servings: '10-12 raciones', price: 45 },
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   Productos individuales (cards con add-to-cart)
   ───────────────────────────────────────────── */

export const products: Product[] = [
  // ── VIENNOISERIE ──────────────────────────────
  {
    id: 'roll-canela',
    name: 'Roll de Canela',
    category: 'Viennoiserie',
    price: 2.00,
    description: 'Tradicional roll de canela con masa estilo brioche y glaseado de queso crema.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/be0ca15106-b7cbc54a3b2af8cf47a6.png',
    similarProducts: ['cheesecake-roll', 'tiramisu-roll', 'croissant-mediano'],
    fullDescription: 'Nuestro roll de canela artesanal, elaborado con masa estilo brioche laminada a mano, rellena de mantequilla con canela Ceilán y coronada con un generoso glaseado de queso crema.',
    ingredients: ['Harina', 'Mantequilla', 'Huevos', 'Canela Ceilán', 'Queso crema', 'Azúcar'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cheesecake-roll',
    name: 'Cheesecake Roll',
    category: 'Viennoiserie',
    price: 3.50,
    description: 'Masa estilo brioche con relleno de tarta de queso y fresa ácida, y un glaseado de queso crema y fresa.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/75bd7fae56-e069fe5c9656d0450438.png',
    badge: 'Favorito',
    badgeColor: 'gold',
    similarProducts: ['roll-canela', 'tiramisu-roll', 'cubisant'],
    fullDescription: 'Una fusión irresistible entre la bollería artesanal y la tarta de queso. Masa brioche suave con un relleno cremoso de cheesecake y fresa ácida, terminado con glaseado de queso crema y fresa.',
    ingredients: ['Harina', 'Mantequilla', 'Huevos', 'Queso crema', 'Fresas', 'Azúcar'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'tiramisu-roll',
    name: 'Tiramisú Roll',
    category: 'Viennoiserie',
    price: 3.50,
    description: 'Masa estilo brioche con relleno de café y chocolate capuchino, almíbar de nuestro café y cubierto de crema de mascarpone y cacao.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e25ea55a3-0f9128973255b58ca297.png',
    badge: 'Nuevo',
    badgeColor: 'purple',
    similarProducts: ['cheesecake-roll', 'roll-canela', 'cubisant'],
    fullDescription: 'La esencia del tiramisú italiano en formato roll. Masa brioche empapada en almíbar de café de especialidad, rellena de chocolate capuchino y cubierta con crema de mascarpone espolvoreada con cacao puro.',
    ingredients: ['Harina', 'Mantequilla', 'Huevos', 'Café', 'Mascarpone', 'Chocolate', 'Cacao'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'croissant-pequeno',
    name: 'Croissant Pequeño',
    category: 'Viennoiserie',
    price: 1.50,
    description: 'Croissant 100% mantequilla artesanal.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/539421df68-00b49ff082bf978c1d2a.png',
    similarProducts: ['croissant-mediano', 'roll-canela', 'cubisant'],
    fullDescription: 'Nuestro croissant artesanal en formato mini, laminado a mano con mantequilla de primera calidad. Exterior crujiente y hojaldrado, interior tierno y aireado.',
    ingredients: ['Harina', 'Mantequilla AOP', 'Huevos', 'Azúcar', 'Levadura', 'Sal'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'croissant-mediano',
    name: 'Croissant Mediano',
    category: 'Viennoiserie',
    price: 2.00,
    description: 'Croissant 100% mantequilla artesanal.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/539421df68-00b49ff082bf978c1d2a.png',
    badge: 'Clásico',
    badgeColor: 'gold',
    similarProducts: ['croissant-pequeno', 'cubisant', 'roll-canela'],
    fullDescription: 'El croissant clásico francés en su tamaño tradicional. Laminado a mano con mantequilla AOP, dorado al horno hasta conseguir su textura perfecta.',
    ingredients: ['Harina', 'Mantequilla AOP', 'Huevos', 'Azúcar', 'Levadura', 'Sal'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cubisant',
    name: 'Cubisant',
    category: 'Viennoiserie',
    price: 4.50,
    description: 'Masa de croissant rellena de...',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    badge: 'Estrella',
    badgeColor: 'gold',
    similarProducts: ['croissant-mediano', 'cheesecake-roll', 'tiramisu-roll'],
    fullDescription: 'Nuestra creación estrella: masa de croissant en forma de cubo, laminada a mano y rellena de forma generosa. Una experiencia única que combina la textura hojaldrada del croissant con rellenos sorprendentes.',
    ingredients: ['Harina', 'Mantequilla AOP', 'Huevos', 'Azúcar', 'Relleno variado'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },

  // ── CAKES DE AUTOR ────────────────────────────
  {
    id: 'brownie',
    name: 'Brownie',
    category: 'Cakes de Autor',
    price: 2.00,
    description: 'Brownie de chocolate 70% con praliné de avellanas.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9197ec4187-479ef001cb267f16f8b5.png',
    badge: 'Favorito',
    badgeColor: 'gold',
    similarProducts: ['carrot-cake', 'cake-naranja', 'cake-cafe-higos'],
    fullDescription: 'Brownie denso y jugoso elaborado con chocolate negro al 70% de cacao. Interior fundente con vetas de praliné de avellanas tostadas que aportan un crunch sutil y un sabor profundo.',
    ingredients: ['Chocolate negro 70%', 'Mantequilla', 'Huevos', 'Azúcar', 'Avellanas', 'Harina'],
    allergens: ['Gluten', 'Huevo', 'Lácteos', 'Frutos secos'],
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    category: 'Cakes de Autor',
    price: 1.80,
    description: 'Bizcocho de zanahoria, chocolate caramelo y mousse de vainilla.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/96fb75ed41-f75b3674eca840ad9ed0.png',
    similarProducts: ['brownie', 'cake-naranja', 'cake-cafe-higos'],
    fullDescription: 'Nuestro carrot cake combina un bizcocho húmedo de zanahoria rallada con una capa de chocolate caramelo y una suave mousse de vainilla natural. Equilibrio perfecto entre dulzura y especias.',
    ingredients: ['Zanahoria', 'Harina', 'Huevos', 'Chocolate caramelo', 'Vainilla', 'Canela', 'Nuez moscada'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cake-naranja',
    name: 'Cake de Naranja',
    category: 'Cakes de Autor',
    price: 2.00,
    description: 'Bizcocho de naranja y tamarindo, chocolate blanco y chantilly cítrica.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c590a30e-598ca973c003b8932b79.png',
    badge: 'Nuevo',
    badgeColor: 'purple',
    similarProducts: ['carrot-cake', 'brownie', 'cake-cafe-higos'],
    fullDescription: 'Un cake de autor que fusiona la frescura cítrica de la naranja con la acidez exótica del tamarindo. Terminado con una capa de chocolate blanco y chantilly cítrica que equilibra todos los sabores.',
    ingredients: ['Naranja', 'Tamarindo', 'Harina', 'Huevos', 'Chocolate blanco', 'Nata', 'Mantequilla'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cake-cafe-higos',
    name: 'Cake Café, Higos y Miel',
    category: 'Cakes de Autor',
    price: 2.00,
    description: 'Bizcocho de café y miel de castaño, mermelada de higos y chantilly de haba tonka.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/22201143d1-c1c1dfcfef15dd81d55f.png',
    similarProducts: ['brownie', 'carrot-cake', 'cake-naranja'],
    fullDescription: 'Un cake complejo y sofisticado. Bizcocho infusionado con café de especialidad y miel de castaño, capa de mermelada de higos maduros y terminado con una chantilly perfumada con haba tonka.',
    ingredients: ['Café', 'Miel de castaño', 'Higos', 'Harina', 'Huevos', 'Nata', 'Haba tonka'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },

  // ── CHEESECAKES ────────────────────────────────
  {
    id: 'tarta-queso-cabra',
    name: 'Tarta de Queso de Cabra',
    category: 'Cheesecakes',
    price: 5.00,
    description: 'Tarta de queso de cabra artesanal, cremosa y con carácter propio.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7438793c2a-f6fd1c1966279610809f.png',
    badge: 'Estrella',
    badgeColor: 'gold',
    similarProducts: ['mini-tarta-queso-cabra', 'brownie', 'carrot-cake'],
    fullDescription: 'Nuestra tarta de queso de cabra es una creación singular. Elaborada con queso de cabra de productores locales, ofrece una textura cremosa y un sabor suave con el carácter distintivo del queso de cabra.',
    ingredients: ['Queso de cabra', 'Huevos', 'Nata', 'Azúcar', 'Galleta', 'Mantequilla'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'mini-tarta-queso-cabra',
    name: 'Mini Tarta de Queso de Cabra',
    category: 'Cheesecakes',
    price: 1.50,
    description: 'Versión individual de nuestra tarta de queso de cabra.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/7438793c2a-f6fd1c1966279610809f.png',
    similarProducts: ['tarta-queso-cabra', 'brownie', 'carrot-cake'],
    fullDescription: 'La misma receta de nuestra tarta de queso de cabra en formato mini, perfecta para disfrutar en cualquier momento. Queso de cabra local, textura cremosa y sabor inconfundible.',
    ingredients: ['Queso de cabra', 'Huevos', 'Nata', 'Azúcar', 'Galleta', 'Mantequilla'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },

  // ── COOKIES GOURMET ────────────────────────────
  {
    id: 'cookie-mantequilla-salada',
    name: 'Cookie Mantequilla Salada',
    category: 'Cookies Gourmet',
    price: 2.00,
    description: 'Cookie artesanal de mantequilla salada, crujiente por fuera y tierna por dentro.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    similarProducts: ['cookie-choco-blanco-arandanos', 'cookie-cafe-avellana', 'cookie-chocolate'],
    fullDescription: 'Nuestra cookie de mantequilla salada combina la mantequilla de primera calidad con escamas de sal Maldon. El resultado es una cookie con un equilibrio perfecto entre dulce y salado.',
    ingredients: ['Mantequilla salada', 'Harina', 'Huevos', 'Azúcar moreno', 'Sal Maldon', 'Vainilla'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cookie-choco-blanco-arandanos',
    name: 'Cookie Chocolate Blanco y Arándanos',
    category: 'Cookies Gourmet',
    price: 2.00,
    description: 'Cookie con trozos de chocolate blanco y arándanos deshidratados.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    similarProducts: ['cookie-mantequilla-salada', 'cookie-cafe-avellana', 'cookie-chocolate'],
    fullDescription: 'Cookie artesanal con generosos trozos de chocolate blanco de calidad y arándanos deshidratados que aportan un toque ácido y frutal al conjunto.',
    ingredients: ['Chocolate blanco', 'Arándanos', 'Harina', 'Mantequilla', 'Huevos', 'Azúcar'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'cookie-cafe-avellana',
    name: 'Cookie Café, Avellana y Cacao',
    category: 'Cookies Gourmet',
    price: 2.00,
    description: 'Cookie con café de especialidad, avellanas tostadas y cacao puro.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    similarProducts: ['cookie-mantequilla-salada', 'cookie-choco-blanco-arandanos', 'cookie-chocolate'],
    fullDescription: 'Una cookie intensa y aromática con café de especialidad, avellanas del Piamonte tostadas y nibs de cacao. Para los amantes de los sabores profundos y tostados.',
    ingredients: ['Café', 'Avellanas', 'Cacao', 'Harina', 'Mantequilla', 'Huevos', 'Azúcar'],
    allergens: ['Gluten', 'Huevo', 'Lácteos', 'Frutos secos'],
  },
  {
    id: 'cookie-chocolate',
    name: 'Cookie de Chocolate',
    category: 'Cookies Gourmet',
    price: 2.00,
    description: 'Cookie clásica de chocolate con trozos generosos de chocolate negro.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    badge: 'Clásico',
    badgeColor: 'gold',
    similarProducts: ['cookie-mantequilla-salada', 'cookie-choco-blanco-arandanos', 'cookie-cafe-avellana'],
    fullDescription: 'La cookie de chocolate en su versión más generosa. Masa artesanal con trozos de chocolate negro de calidad, crujiente por fuera y fundente por dentro.',
    ingredients: ['Chocolate negro', 'Harina', 'Mantequilla', 'Huevos', 'Azúcar', 'Vainilla'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'pack-cookies-regalo',
    name: 'Pack Regalo Cookies',
    category: 'Cookies Gourmet',
    price: 10.00,
    description: 'Caja de mini cookies o caja de cookies, perfecta para regalar.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    badge: 'Regalo',
    badgeColor: 'purple',
    similarProducts: ['cookie-mantequilla-salada', 'cookie-chocolate', 'cookie-cafe-avellana'],
    fullDescription: 'Un pack regalo con una selección de nuestras cookies artesanales. Disponible en formato caja de mini cookies o caja de cookies estándar. El regalo perfecto para cualquier ocasión.',
    ingredients: ['Selección variada de cookies'],
    allergens: ['Gluten', 'Huevo', 'Lácteos', 'Frutos secos'],
  },

  // ── CREACIONES INDIVIDUALES ────────────────────
  {
    id: 'todo-al-verde',
    name: 'Todo al Verde',
    nameHighlight: 'Lima, Albahaca y Matcha',
    category: 'Creaciones Individuales',
    price: 4.50,
    description: 'Mousse de Riesling, gelée de flor de saúco, cremoso de albahaca, bizcocho de té matcha y crujiente de chocolate limón.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/75bd7fae56-e069fe5c9656d0450438.png',
    similarProducts: ['flor-de-la-pasion', 'silvestre', 'flor-de-vainilla'],
    fullDescription: 'Una creación que celebra los verdes en todas sus formas. Mousse de vino Riesling con gelée de flor de saúco, cremoso de albahaca fresca, bizcocho húmedo de té matcha y un crujiente de chocolate al limón.',
    ingredients: ['Riesling', 'Flor de saúco', 'Albahaca', 'Té matcha', 'Chocolate', 'Limón', 'Nata'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'flor-de-la-pasion',
    name: 'Flor de la Pasión',
    nameHighlight: 'Fruta de la Pasión y Guayaba Rosa',
    category: 'Creaciones Individuales',
    price: 6.00,
    description: 'Mousse de fruta de la pasión, cremoso de guayaba rosa, gelée de fruta de la pasión y crujiente de chocolate caramelo.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/be0ca15106-b7cbc54a3b2af8cf47a6.png',
    badge: 'Estrella',
    badgeColor: 'gold',
    similarProducts: ['todo-al-verde', 'silvestre', 'corazones-rojos'],
    fullDescription: 'Una explosión tropical de sabores. Mousse aireada de fruta de la pasión envolviendo un cremoso de guayaba rosa, gelée vibrante de maracuyá y un crujiente de chocolate caramelo que aporta textura y profundidad.',
    ingredients: ['Fruta de la pasión', 'Guayaba rosa', 'Chocolate caramelo', 'Nata', 'Huevos', 'Azúcar'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'silvestre',
    name: 'Silvestre',
    nameHighlight: 'Mascarpone y Frutos Rojos',
    category: 'Creaciones Individuales',
    price: 5.00,
    description: 'Crema de mascarpone, gelée de fresas, cremoso de frambuesas, frutos rojos naturales y crujiente de chocolate rubí.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/96fb75ed41-f75b3674eca840ad9ed0.png',
    similarProducts: ['flor-de-la-pasion', 'corazones-rojos', 'todo-al-verde'],
    fullDescription: 'Una oda a los frutos rojos del bosque. Crema de mascarpone italiano con gelée de fresas frescas, cremoso de frambuesas, frutos rojos naturales de temporada y un crujiente de chocolate rubí que aporta notas frutales.',
    ingredients: ['Mascarpone', 'Fresas', 'Frambuesas', 'Chocolate rubí', 'Nata', 'Huevos'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'calendario-azteca',
    name: 'Calendario Azteca',
    nameHighlight: 'Chocolate y Palomita Salada',
    category: 'Creaciones Individuales',
    price: 5.00,
    description: 'Ganache de chocolate amargo, núcleo líquido de cacao y palomita salada, bizcocho húmedo de cacao y sablé de cacao.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/9197ec4187-479ef001cb267f16f8b5.png',
    badge: 'Favorito',
    badgeColor: 'gold',
    similarProducts: ['silvestre', 'cacahuete-miel-sal', 'flor-de-vainilla'],
    fullDescription: 'Una creación audaz que rinde homenaje al cacao ancestral. Ganache de chocolate amargo con un sorprendente núcleo líquido de cacao y palomita salada, bizcocho húmedo de cacao y sablé de cacao para un final crujiente.',
    ingredients: ['Chocolate amargo', 'Cacao', 'Palomitas', 'Sal', 'Mantequilla', 'Huevos', 'Harina'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'corazones-rojos',
    name: 'Corazones Rojos',
    nameHighlight: 'Lichis y Rosas',
    category: 'Creaciones Individuales',
    price: 4.80,
    description: 'Mousse de lichis, cremoso de rosas, gelée de lichis y bizcocho de frambuesas.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c590a30e-598ca973c003b8932b79.png',
    similarProducts: ['silvestre', 'flor-de-la-pasion', 'flor-de-vainilla'],
    fullDescription: 'Delicadeza floral en estado puro. Mousse etérea de lichis con cremoso perfumado de rosas de Damasco, gelée de lichis y un bizcocho rosado de frambuesas que completa esta creación romántica.',
    ingredients: ['Lichis', 'Agua de rosas', 'Frambuesas', 'Nata', 'Huevos', 'Azúcar'],
    allergens: ['Huevo', 'Lácteos', 'Gluten'],
  },
  {
    id: 'cacahuete-miel-sal',
    name: 'Cacahuete, Miel y Sal',
    category: 'Creaciones Individuales',
    price: 5.50,
    description: 'Mousse de chocolate con leche-caramelo y praliné de cacahuetes eagle, núcleo líquido de caramelo y miel, financier de cacahuetes y crujiente de chocolate y praliné.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/22201143d1-c1c1dfcfef15dd81d55f.png',
    badge: 'Nuevo',
    badgeColor: 'purple',
    similarProducts: ['calendario-azteca', 'flor-de-vainilla', 'silvestre'],
    fullDescription: 'Potencia y delicadeza en un mismo postre. Mousse de chocolate con leche al caramelo con praliné de cacahuetes, un sorprendente núcleo líquido de caramelo y miel, financier de cacahuetes y crujiente de chocolate con praliné.',
    ingredients: ['Cacahuetes', 'Chocolate con leche', 'Caramelo', 'Miel', 'Mantequilla', 'Huevos', 'Harina'],
    allergens: ['Huevo', 'Lácteos', 'Gluten', 'Cacahuetes'],
  },
  {
    id: 'flor-de-vainilla',
    name: 'Flor de Vainilla',
    nameHighlight: 'Vainilla, Praliné y Caramelo',
    category: 'Creaciones Individuales',
    price: 4.20,
    description: 'Mousse de vainilla natural, toffee montado, cremoso de praliné, joconda de vainilla y sablé de vainilla.',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d5c590a30e-598ca973c003b8932b79.png',
    similarProducts: ['cacahuete-miel-sal', 'calendario-azteca', 'todo-al-verde'],
    fullDescription: 'La vainilla en su máxima expresión. Mousse de vainilla natural de Madagascar, toffee montado, cremoso de praliné, joconda de vainilla y sablé de vainilla para un final crujiente. Un homenaje a la elegancia de lo simple.',
    ingredients: ['Vainilla de Madagascar', 'Praliné', 'Caramelo', 'Nata', 'Mantequilla', 'Huevos', 'Harina'],
    allergens: ['Huevo', 'Lácteos', 'Gluten', 'Frutos secos'],
  },
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
