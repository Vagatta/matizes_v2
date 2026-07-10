# Design

## Visual Theme

Pastelería de autor y cafetería artesanal. Estética **elegante-cálida**: la fotografía del producto es protagonista, con acabados dorados y tipografía serif que refuerzan la sensación de artesanía premium. El fondo crema aporta calidez y permite que el púrpula y el dorado actúen como signos de distinción sin saturar.

## Color Palette

| Token | Hex | Uso |
|---|---|---|
| `gold` | `#C9A84C` | Acento principal: botones primarios, detalles, iconos, subrayados, estrellas/testimonios, líneas decorativas. |
| `purple` | `#820057` | Color de marca: header, fondos de sección, textos de énfasis, botones secundarios, gradientes. |
| `purple-light` | `#a3186f` | Hover / variantes de púrpula. |
| `gold-light` | `#dbbe7a` | Hover de dorado, estados luminosos. |
| `cream` | `#faf8f4` | Fondo principal de página. |
| `cream-dark` | `#f3efe8` | Fondos alternos de sección. |
| Texto sobre crema | `#1f2937` (Tailwind `gray-800`) | Cuerpo de texto. |
| Texto sobre púrpura | `#ffffff` / dorado `#C9A84C` | Títulos y acentos sobre fondos oscuros. |

### Uso recomendado

- **Fondo púrpula (`bg-purple`)** para secciones de impacto (hero, categorías, testimonios, CTA). Texto siempre blanco o dorado, con degradado que no opaque la fotografía.
- **Fondo crema (`bg-cream`)** para contenido explicativo y listados de producto.
- **Dorado** como detalle: líneas divisorias, iconos, botones de acción principal, badges de favoritos/carrito.
- **Blanco translúcido** (`bg-white/90`) para elementos flotantes encima de fotografía (badges, botones de favorito).

## Typography

### Familias

| Rol | Familia | Uso |
|---|---|---|
| Display / Serif | `Cormorant Garamond` | Títulos de sección, títulos de tarjetas, hero. |
| Display / Editorial | `Playfair Display` | Variante alternativa del Estudio Cromático. |
| Body / UI | `Jost` | Navegación, botones, cuerpo de texto, etiquetas. |
| Body / Editorial scale | `Montserrat` | Variante alternativa del Estudio Cromático. |

### Escala

- H1: `text-4xl lg:text-5xl xl:text-6xl`, `font-light`.
- H2: `text-4xl lg:text-5xl`, `font-light`.
- H3: `text-xl lg:text-2xl`, `font-light`.
- Cuerpo: `text-sm lg:text-base`, `font-light`, `leading-relaxed`.
- Etiqueta: `text-xs`, `tracking-widest`, `uppercase`.
- Botón: `text-xs lg:text-sm`, `tracking-widest`, `uppercase`, `font-medium`.

### Principios tipográficos

- Títulos en serif, ligeros, a veces con énfasis en cursiva para la palabra clave (`text-gold`).
- Cuerpo en sans-serif `Jost` con peso ligero para no competir con la fotografía.
- Uso de mayúsculas solo para etiquetas cortas y botones.

## Components

### Botones

- **`.btn-gold`**: fondo dorado, texto púrpura, sin radius, hover inverte a púrpura/dorado.
- **`.btn-purple`**: fondo púrpura, texto dorado, sin radius, hover inverte a dorado/púrpura.
- Estilo outline secundario: `border border-gold/50 text-gold`, hover relleno dorado y texto púrpura.

### Tarjetas de producto

- Fondo blanco con sombra sutil (`shadow-lg shadow-purple/5`).
- Imagen cuadrada con object-cover, zoom suave en hover (`scale-105`).
- Título en serif, precio en sans, categoría en etiqueta dorada.
- Botón de favorito absoluto en esquina superior derecha.

### Tarjetas de categoría

- Relación de aspecto fija (`h-52 lg:h-64`).
- Imagen de fondo con degradado vertical desde púrpura abajo.
- Título en esquina inferior izquierda.
- Icono de enlace externo en esquina superior derecha, visible solo en hover.
- Sin bordes ni sombras; la imagen es la superficie.

### Badges de carrito / favoritos

- Círculo dorado, texto púrpura, 18×18px, fuente Jost 10px.
- Posicionados en la esquina superior derecha del icono.
- Ocultos cuando el contador es 0.

## Layout

- Contenedor máximo: `max-w-7xl`, padding lateral `px-6 lg:px-10`.
- Header fijo con fondo transparente/blanco según scroll.
- Secciones verticales con espaciado generoso: `py-20 lg:py-28`.
- Grids responsivas: `grid-cols-2 lg:grid-cols-3` o `4`, gap `4–8`.
- Mobile-first, con break en `lg`.

## Motion

- Transiciones de hover: `transition-transform duration-700` para imágenes, `transition-colors` para botones.
- Reveals on scroll con clase `.reveal` y `.stagger-grid` (ver `animations.css`).
- Hover en tarjetas: escala de imagen 1.05, aparición de icono de enlace.
- Todas las animaciones deben respetar `@media (prefers-reduced-motion: reduce)`.

## Image Treatment

- Fotografía de producto como superficie principal.
- Degradados sobre imágenes solo para garantizar legibilidad del texto; nunca oscurecer más de lo necesario.
- Object-fit cover, calidad alta, alt text descriptivo.

## Notes

- La identidad del sitio se apoya en la combinación de fotografía apetitosa + tipografía serif + acentos dorados. Cualquier mejora debe preservar ese triángulo.
- El "Estudio Cromático" es una herramienta interna de prueba; el sistema base debe mantenerse como se describe aquí.
