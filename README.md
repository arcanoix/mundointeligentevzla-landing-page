# MundiInteligente VZla Landing Page

## Descripción

Esta es una landing page responsive y accesible para **MundiInteligente VZla**, una empresa que ofrece servicios de:
- Encuadernación
- Sublimación (franelas, tazas, llaveros)
- Impresión publicitaria (flyers, trípticos, afiches)
- Manualidades personalizadas

La página está construida únicamente con **HTML5, CSS3 y JavaScript vanilla**, siguiendo las mejores prácticas de accesibilidad y rendimiento según las **Web Interface Guidelines**.

## Características

- ✅ Diseño completamente responsive (móvil, tablet, escritorio)
- ✅ Accesibilidad mejorada (ARIA labels, skip link, navegación con teclado)
- ✅ Modo oscuro automático (prefers-color-scheme)
- ✅ Reducción de movimiento para usuarios sensibles (prefers-reduced-motion)
- ✅ Optimización de rendimiento (loading lazy en imágenes, transiciones específicas)
- ✅ Validación de formulario en tiempo real
- ✅ Menú móvil con animación de hamburguesa a cruz
- ✅ Scroll suave entre secciones
- ✅ Feedback visual en estados hover, focus y active
- ✅ Indicador de carga accesible en el formulario
- ✅ Compatibilidad con navegadores modernos

## Estructura del proyecto

```
mundointeligente/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   └── logo.png
│   └── js/
│       └── script.js
└── skills-lock.json
```

## Cómo usar

1. Clone o descargue este repositorio
2. Abra `index.html` en su navegador para ver la página localmente
3. Para producción, suba toda la carpeta a su servidor web
4. Reemplace las imágenes placeholder en la sección de galería con fotos reales de sus trabajos

## Personalización

### Cambiar contenido
Edite el archivo `index.html` para modificar textos, agregar o eliminar servicios, etc.

### Cambiar colores
La paleta de colores principal se basa en el color extraído del logo: `#d0f0dd` (mint suave).
Para cambiarla, modifique las variables en la sección `:root` dentro de `assets/css/styles.css`.

### Agregar más imágenes
Coloque sus imágenes en la carpeta `assets/img/` y actualice las rutas en la sección de galería dentro de `index.html`.

## Tecnologías usadas

- **HTML5** - Estructura semántica
- **CSS3** - Flexbox, Grid, transiciones, variables CSS
- **JavaScript ES6** - Manipulación del DOM, eventos, validación de formulario
- **Google Fonts** - Familia Poppins
- **Font Awesome** - Iconos vectoriales

## Accesibilidad

La página implementa las siguientes características de accesibilidad:
- Skip link para saltar al contenido principal
- Todos los controles de formulario tienen labels asociados
- Botones y enlaces tienen estados de foco visibles
- Imágenes tienen atributos alt descriptivos
- Íconos decorativos usan aria-hidden="true"
- Mensajes de estado del formulario usan aria-live="polite"
- Navegación con teclado totalmente funcional
- Jerarquía adecuada de encabezados (h1-h6)
- Elementos de landmark semánticos (header, nav, main, section, footer)

## Rendimiento

- Imágenes con dimensiones explícitas para prevenir CLS
- Carga diferida (loading="lazy") en imágenes de galería
- Transiciones limitadas a propiedades específicas para mejor rendimiento
- Fuentes preconectadas para reducir bloqueo de renderizado
- Animaciones respetan prefers-reduced-motion

## Licencia

Este proyecto está bajo la Licencia MIT - vea el archivo LICENSE.txt para más detalles.

## Autor

Creado con ❤️ para MundiInteligente VZla

--- 
*Actualizado: Abril 2026*