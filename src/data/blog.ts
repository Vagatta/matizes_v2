export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  imageAlt: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'mejor-pasteleria-valladolid',
    title: 'Por qué Mat!zes es la pastelería artesanal de referencia en Valladolid',
    excerpt: 'Descubre qué hace única a nuestra pastelería en Valladolid: ingredientes de primera calidad, técnicas francesas y una propuesta pensada para quienes buscan algo más que un dulce.',
    category: 'Sobre Nosotros',
    date: '2025-11-10',
    readTime: 5,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3fd9c28d4d-cd1f86b109f2f92c0c84.png',
    imageAlt: 'Interior de la pastelería Mat!zes en Valladolid con vitrinas de pasteles artesanales',
    tags: ['pastelería Valladolid', 'pastelería artesanal', 'pastelería fina', 'Valladolid'],
    metaTitle: 'Pastelería Artesanal en Valladolid | Mat!zes — Pasteles y Cafetería',
    metaDescription: 'Mat!zes es la pastelería artesanal de referencia en Valladolid. Pasteles, tartas, petit fours y cafetería con ingredientes de primera calidad y técnicas francesas.',
    content: `
En Valladolid existe una tradición repostera profunda, pero pocas propuestas combinan la técnica francesa con el producto local de la manera en que lo hace Mat!zes. Desde nuestra apertura, la pregunta que más nos hacen es siempre la misma: ¿qué os diferencia del resto?

## El producto, por encima de todo

Trabajamos únicamente con mantequilla AOP, huevos de gallinas camperas de Castilla y harinas sin blanquear. No usamos premezclas industriales. Cada masa —desde el hojaldre de los croissants hasta el bizcocho Joconde de la Ópera Clásica— se elabora a diario, en pequeños lotes, en nuestro obrador de Valladolid.

## Técnica francesa, alma castellana

Nuestro equipo de pasteleros se formó en escuelas como Le Cordon Bleu y la École Nationale Supérieure de Pâtisserie. Aplicamos esas técnicas a productos de temporada de Castilla y León: membrillo de Puente Genil, almendra de Valladolid, y fruta de productores locales con quienes colaboramos directamente.

## Cafetería con entidad propia

Mat!zes no es solo pastelería. Nuestra cafetería en Valladolid sirve café de especialidad de origen único, infusiones artesanales y desayunos elaborados con la misma atención que ponemos en los pasteles. Si buscas dónde desayunar bien en Valladolid, esta es tu respuesta.

## Pedidos especiales para bodas y eventos

Somos uno de los referentes en Valladolid para tartas de boda personalizadas y pasteles para eventos corporativos. Cada encargo es una consulta en persona donde diseñamos juntos la creación: sabores, texturas, acabado visual y presentación.

Si todavía no nos conoces, te invitamos a pasarte por nuestra tienda. La dirección la tienes en el footer. Te esperamos con algo recién horneado.
    `,
  },
  {
    slug: 'tartas-boda-valladolid',
    title: 'Tartas de boda en Valladolid: cómo elegir la tarta perfecta para tu gran día',
    excerpt: 'Guía completa para elegir la tarta de boda ideal en Valladolid. Sabores, tamaños, tendencias 2025 y todo lo que necesitas saber antes de encargar tu pastel nupcial.',
    category: 'Guías',
    date: '2025-12-03',
    readTime: 7,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/be0ca15106-b7cbc54a3b2af8cf47a6.png',
    imageAlt: 'Tarta de boda de varios pisos decorada con flores naturales y acabado en crema',
    tags: ['tarta de boda Valladolid', 'pastel nupcial', 'bodas Valladolid', 'tarta nupcial personalizada'],
    metaTitle: 'Tartas de Boda en Valladolid — Encargo Personalizado | Mat!zes',
    metaDescription: 'Diseña tu tarta de boda perfecta en Valladolid con Mat!zes. Consulta personalizada, sabores premium y acabados artesanales. Guía completa 2025.',
    content: `
La tarta de boda es uno de los elementos más recordados de cualquier celebración. En Valladolid, cada vez más parejas apuestan por pasteles nupciales personalizados y alejados de los clásicos fondant blancos. En Mat!zes acompañamos ese proceso desde el primer boceto hasta la entrega en el día B.

## ¿Cuándo encargar la tarta?

Recomendamos ponerse en contacto al menos **2 meses antes** de la boda. Para celebraciones en temporada alta (mayo–septiembre) en Valladolid, lo ideal es reservar con 3 meses de antelación. Disponemos de un número limitado de encargos por semana para garantizar la calidad.

## Tamaños y raciones

| Invitados | Pisos recomendados | Altura aprox. |
|---|---|---|
| Hasta 50 | 1 piso | 15 cm |
| 50–100 | 2 pisos | 28 cm |
| 100–200 | 3 pisos | 42 cm |
| +200 | 4 pisos + mesa dulce | — |

## Sabores más elegidos en 2025

El **Fraisier** (fresa, crema muselina y vainilla de Madagascar) sigue siendo el más pedido. Le siguen de cerca la **Ópera Clásica** para los amantes del café y el chocolate, y la tarta de **limón y merengue** para bodas de primavera.

## Tendencias en decoración nupcial

- **Naked cake con flores naturales**: minimalista, elegante, perfecto para bodegas de Valladolid.
- **Acabado en buttercream texturizado**: aporta calidez y movimiento.
- **Monograma dorado**: muy solicitado para bodas de noche en los grandes hoteles de Valladolid.

## Cómo funciona nuestra consulta

1. Contactas por formulario o teléfono.
2. Agendamos una cita en nuestra pastelería de Valladolid.
3. Degustación de hasta 4 sabores (incluida en el presupuesto final).
4. Diseño definitivo y seña del 50%.
5. Entrega o montaje en sala el día de la boda.

¿Tienes una boda próxima en Valladolid? Escríbenos y empezamos a diseñar juntos.
    `,
  },
  {
    slug: 'desayunos-cafeteria-valladolid',
    title: 'Los mejores desayunos artesanales en Valladolid: nuestra cafetería en Mat!zes',
    excerpt: 'Si buscas dónde desayunar bien en Valladolid, Mat!zes tiene la respuesta. Croissants recién horneados, café de especialidad y una carta de desayunos que cambia con la temporada.',
    category: 'Cafetería',
    date: '2026-01-15',
    readTime: 4,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/539421df68-00b49ff082bf978c1d2a.png',
    imageAlt: 'Mesa de desayuno en la cafetería Mat!zes en Valladolid con croissant y café de especialidad',
    tags: ['cafetería Valladolid', 'desayunos Valladolid', 'café especialidad Valladolid', 'brunch Valladolid', 'donde desayunar Valladolid'],
    metaTitle: 'Cafetería y Desayunos Artesanales en Valladolid | Mat!zes',
    metaDescription: 'Los mejores desayunos en Valladolid. Croissants recién hechos, café de especialidad y brunch de temporada en la cafetería de Mat!zes. Abierto desde las 9h.',
    content: `
En Valladolid hay muchos sitios donde desayunar, pero pocos donde cada elemento del desayuno esté pensado con la misma atención que en una pastelería de alta gama. Eso es exactamente lo que ofrecemos en la cafetería de Mat!zes.

## El café que servimos

Trabajamos con dos tostadores de referencia: uno de Madrid especializado en orígenes de Etiopía y Colombia, y otro castellano que tuesta en verde y entrega semanalmente. En barra servimos:

- **Espresso** con extracción en La Marzocco Linea PB
- **Cortado y cappuccino** con leche entera de ganadería local
- **Café filtrado** de origen único (cambia cada semana)
- **Infusiones** de productores ecológicos de Castilla y León

## La carta de desayunos

Nuestra carta cambia cada temporada. En invierno y primavera encontrarás:

- **Croissant au beurre** recién horneado (elaborado en obrador propio)
- **Pain au chocolat** con Valrhona Guanaja 70%
- **Tostada de masa madre** con mantequilla y mermelada artesanal
- **Brioche tressée con crema** — el favorito del fin de semana
- **Tabla de viennoiserie** para compartir (croissant, pain aux raisins, kouign-amann)

## Horario y reservas

La cafetería abre de martes a domingo desde las **9:00h**. No hacemos reservas para desayuno, pero si vienes entre semana antes de las 11:00h encontrarás sitio sin problema. Los fines de semana recomendamos llegar antes de las 10:30h.

## ¿Buscas dónde hacer brunch en Valladolid?

Los sábados y domingos ofrecemos una carta de brunch ampliada hasta las 13:00h, con huevos a la plancha, aguacate con masa madre y opciones dulces de temporada. Es el momento más tranquilo de la semana para disfrutar de la terraza.

Te esperamos pronto.
    `,
  },
  {
    slug: 'petit-fours-que-son',
    title: 'Petit fours: qué son, tipos y por qué elevan cualquier celebración',
    excerpt: 'Los petit fours son bocados de pastelería fina que transforman cualquier evento en una experiencia gastronómica. Descubre sus tipos, historia y cómo encargarlos en Valladolid.',
    category: 'Repostería',
    date: '2026-02-20',
    readTime: 6,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bc3982a0fd-3cf4f7e323259d859ee2.png',
    imageAlt: 'Selección de petit fours artesanales: macarons, tartaletas y trufas sobre bandeja plateada',
    tags: ['petit fours', 'pastelería fina', 'catering Valladolid', 'eventos Valladolid', 'bocados dulces'],
    metaTitle: 'Petit Fours Artesanales en Valladolid — Encargos para Eventos | Mat!zes',
    metaDescription: 'Descubre qué son los petit fours y cómo pueden transformar tu evento en Valladolid. Encargos de catering dulce artesanal para bodas, corporativos y celebraciones.',
    content: `
El término **petit four** viene del francés y significa literalmente "pequeño horno". Históricamente eran los bocados que se cocían aprovechando el calor residual de los hornos de leña cuando ya no había suficiente temperatura para piezas grandes. Hoy son uno de los elementos más elegantes de la pastelería fina.

## Tipos de petit fours

### Petit fours secs (secos)
Son los más delicados: galletas finas, tuiles de almendra, financiers y lenguas de gato. Se sirven con el café al final de una comida o como acompañamiento en eventos. En Mat!zes los elaboramos con mantequilla francesa y almendra marcona de Valladolid.

### Petit fours glacés (glaseados)
Pequeñas piezas recubiertas de fondant o glaseado de espejo. Incluyen milhojas en miniatura, éclairs de dos bocados y tartaletas de frutas. Son los más vistosos y los preferidos para mesas dulces de boda en Valladolid.

### Petit fours frais (frescos)
Elaborados con cremas y rellenos perecederos: macarons, bombones de ganache, trufas y mousse en vasitos. Requieren cadena de frío y se sirven el mismo día.

## Para qué eventos son ideales

- **Bodas en Valladolid**: como mesa dulce complementaria a la tarta nupcial
- **Eventos corporativos**: coffee breaks de alto nivel y cierres de jornada
- **Cócteles y recepciones**: junto a canapés salados
- **Comuniones y bautizos**: surtidos personalizados por colores y temática

## ¿Cómo encargar petit fours en Valladolid?

En Mat!zes ofrecemos bandejas desde 24 unidades. Para eventos de más de 100 comensales recomendamos ponerse en contacto con **al menos 3 semanas de antelación**. Podemos adaptar sabores, tamaños y presentación a la identidad visual de tu evento.

Contáctanos y te enviamos nuestra carta de petit fours de temporada con precios.
    `,
  },
  {
    slug: 'ingredientes-pasteleria-artesanal',
    title: 'Ingredientes que marcan la diferencia en la pastelería artesanal',
    excerpt: 'La calidad de un pastel depende en un 80% de sus ingredientes. Te contamos qué buscamos en cada producto y por qué elegir una pastelería artesanal en Valladolid importa.',
    category: 'Repostería',
    date: '2026-03-08',
    readTime: 5,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/22201143d1-c1c1dfcfef15dd81d55f.png',
    imageAlt: 'Ingredientes de pastelería artesanal: mantequilla, huevos frescos, harina y vainilla en bote de vidrio',
    tags: ['pastelería artesanal', 'ingredientes naturales', 'sin conservadores', 'pastelería de calidad Valladolid'],
    metaTitle: 'Ingredientes Artesanales en Pastelería — Por Qué Importan | Mat!zes Valladolid',
    metaDescription: 'En Mat!zes usamos solo ingredientes naturales sin conservadores. Descubre por qué los ingredientes definen la calidad de un pastel artesanal en Valladolid.',
    content: `
Cuando alguien prueba un pastel de Mat!zes por primera vez, la reacción más frecuente es: "sabe diferente". La diferencia no está en un secreto técnico ni en una receta mágica. Está en lo que ponemos dentro.

## Mantequilla AOP francesa

Usamos exclusivamente mantequilla con Appellation d'Origine Protégée de Normandía o Charentes-Poitou. El contenido en grasa supera el 84%, lo que da a nuestros hojaldre y bizcochos una riqueza y un sabor que no se consiguen con mantequilla industrial.

## Huevos de gallinas camperas castellanas

Trabajamos con una granja de Cigales, a 15 km de Valladolid. Los huevos llegan dos veces por semana y se usan siempre en las 72 horas siguientes. La yema de huevo campero tiene más carotenoides, lo que se traduce en cremas más amarillas, más ricas en sabor.

## Chocolate Valrhona y Cacao Barry

Para coberturas y ganaches usamos chocolates de los dos grandes: Valrhona Guanaja 70% para notas amargas y Cacao Barry Ghana para cremas más redondas. No usamos mezclas de repostería con grasas vegetales.

## Vainilla de Madagascar

La vainilla en polvo y los extractos artificiales no tienen lugar en nuestro obrador. Trabajamos con vainas enteras de Tahití y Madagascar, raspadas a diario. El resultado en una crème brûlée o en una ganache de vainilla no tiene comparación.

## Harinas sin blanquear

La harina blanqueada con cloro destruye parte de los flavonoides naturales del trigo. Usamos harinas molidas en piedra de Castilla y León, sin aditivos, que aportan más sabor y una miga más abierta.

## Sin conservadores, sin colorantes

Todo lo que sale de nuestro obrador en Valladolid tiene una fecha de consumo recomendada máxima de 3 días. Si dura más, algo no está bien hecho. Nuestros pasteles no llevan conservantes E-200, E-202 ni ningún otro. Lo que tiene que durar es el recuerdo, no el pastel en el frigorífico.

La próxima vez que compares precios entre una pastelería industrial y una artesanal en Valladolid, recuerda que estás comparando ingredientes completamente distintos.
    `,
  },
  {
    slug: 'viennoiserie-valladolid-guia',
    title: 'Viennoiserie en Valladolid: croissants, brioches y el arte del laminado',
    excerpt: 'La viennoiserie es el alma del desayuno europeo. En Mat!zes la elaboramos a diario con harina sin blanquear y mantequilla AOP. Todo lo que necesitas saber sobre este arte.',
    category: 'Cafetería',
    date: '2026-04-02',
    readTime: 6,
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/52dc8885f9-7b96135997d58656e6a1.png',
    imageAlt: 'Croissants recién horneados sobre rejilla metálica en la pastelería Mat!zes de Valladolid',
    tags: ['croissant Valladolid', 'viennoiserie', 'desayuno artesanal', 'brioches Valladolid', 'cafetería artesanal Valladolid'],
    metaTitle: 'Croissants y Viennoiserie Artesanal en Valladolid | Cafetería Mat!zes',
    metaDescription: 'Prueba la mejor viennoiserie artesanal de Valladolid en Mat!zes. Croissants laminados a mano, pain au chocolat, kouign-amann y brioche recién horneados cada mañana.',
    content: `
La palabra *viennoiserie* agrupa todas las piezas de bollería laminada que tienen su origen en Viena pero que Francia adoptó y perfeccionó hasta convertirlas en un arte propio. En Mat!zes las elaboramos cada madrugada para que estén listas a las 9:00h.

## El proceso del laminado

Un buen croissant requiere entre **27 y 72 horas** de elaboración. El proceso es el siguiente:

1. **Fermentación del prefermento** (8-12 h a temperatura controlada)
2. **Elaboración de la détrempe** (masa base con harina, leche, azúcar y sal)
3. **Primera fermentación** (2 h a 4ºC)
4. **Tourage** (incorporación de la mantequilla en bloque y plegado en 3 turnos de 3)
5. **Reposo final** (12 h en frío)
6. **Corte, formado y leudado** (3-4 h a 26ºC con humedad controlada)
7. **Horneado** a 175ºC durante 18 minutos

El resultado son 27 capas alternas de masa y mantequilla, que al hornear crean el hojaldrado característico.

## Piezas de viennoiserie que encontrarás en Mat!zes

### Croissant au Beurre
El clásico. Laminado con mantequilla AOP de Normandía, dorado oscuro por fuera, alveolado y húmedo por dentro. Servido templado.

### Pain au Chocolat
Dos barritas de Valrhona Guanaja 70% envueltas en hojaldre laminado. Para los que prefieren el desayuno con carácter.

### Kouign-Amann
El más contundente. Originario de Bretaña, con capas caramelizadas de azúcar y mantequilla salada. Crujiente por fuera, fundente por dentro. En Valladolid es una rareza; en Mat!zes es un básico.

### Brioche Tressée
Trenzada a mano, fermentada lentamente y horneada en molde. La miga es como una nube. Ideal para tostar con mantequilla y mermelada.

## ¿A qué hora llegar?

La viennoiserie sale del horno entre las 8:30 y las 9:00h. Si quieres el croissant en su mejor momento —crujiente, templado, con la mantequilla aún fragante— ven antes de las 10:30h. A partir de esa hora el stock empieza a agotarse y no reponemos hasta el día siguiente.

Te esperamos mañana por la mañana.
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return posts.filter(p => p.slug !== slug).slice(0, count);
}
