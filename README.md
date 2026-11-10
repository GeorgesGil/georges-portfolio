# Georges Gil — Portafolio

Portafolio profesional de [Georges Gil](https://github.com/GeorgesGil), Ingeniero de Sistemas y Desarrollador de Software. Construido con Next.js, TypeScript y CSS propio, y exportado como sitio estático para Cloudflare Pages.

La página es un **portafolio editorial** en español e inglés: el nombre y el rol abren, los tres productos publicados mandan con sus capturas a sangre, el stack de veinticuatro tecnologías aparece con los logos reales en su color de marca, y el contacto cierra en un campo verde. La página es monocroma a propósito: el único color saturado lo aportan las capturas y los logos.

## Desarrollo local

Requisitos: Node.js 20.9 o superior y npm. El CI y el desarrollo local se han probado con Node 24.

```bash
npm install
npm run dev
```

Abre [http://localhost:5051](http://localhost:5051). Para validar una entrega:

```bash
npm run lint
npm run typecheck
npm run build
```

El build estático queda en `out/`.

## Estructura

- `src/lib/portfolio-dictionary.ts` — **todo el contenido y los datos**: textos en ambos idiomas, proyectos, stack con sus marcas, metadatos y URL del sitio. Editar el portafolio es editar este archivo.
- `src/components/portfolio-page.tsx` — la página: cabecera, presentación, trabajo, stack, sobre mí y contacto.
- `src/components/site-nav.tsx` — navegación; en móvil, un panel que cierra al elegir, con Escape o al pulsar fuera.
- `src/components/tech-logo.tsx` — la marca de cada tecnología, con `simple-icons` (un trazado al que se aplica el hex oficial) y `devicons-react` para las dos marcas que no están en el catálogo.
- `src/components/site-shell.tsx` — raíz compartida por ambos idiomas: tipografías, tema y `<html lang>`.
- `src/components/theme-toggle.tsx` — conmutador claro/oscuro (cliente).
- `src/app/(es)/`, `src/app/(en)/` — las dos raíces de ruta, cada una con su `lang` y sus metadatos.
- `src/app/globals.css` — sistema visual completo: tokens de color, tipografía, retícula, componentes y responsive.
- `src/app/robots.ts`, `sitemap.ts`, `manifest.ts`, `icon.svg`, `apple-icon.png` — descubrimiento y metadatos web.

## Sistema visual

- **Papel e tinta**: papel `#f2f2ed`, tinta `#14171a`, atenuada `#5a6066`, y un único acento verde profundo `#0f3a2e`. Modo oscuro sobre `#0c1110`.
- **Tipografía**: Bricolage Grotesque para títulos y etiquetas; Literata para la prosa. Ambas con `next/font`, sin peticiones a Google en tiempo de ejecución.
- **Color prestado**: los logos se sirven dentro de fichas claras, porque varias marcas son negras y desaparecerían sobre el fondo oscuro.
- **Sin sombras**: la profundidad la dan las líneas de 1 px y el papel hundido.

## Actualizar contenido

Todo el texto editable está en `src/lib/portfolio-dictionary.ts`. Para añadir un proyecto, agrega una entrada a `projects` con su índice, dominio, URL, imagen y copy en ambos idiomas; la sección se genera sola. Para añadir una tecnología, agrega la marca importada a `techGroups`.

Las capturas de proyecto viven en `public/projects/` con cuatro anchos por proyecto —`-960`, `-1280`, `-1920` y `-2880`— en WebP. Se capturan a 1440×900 con densidad 2×, de modo que el archivo de 2880 px se sirve 1:1 en pantallas retina y sobremuestreado en pantallas normales; el de 960 es el que baja un teléfono. Cada captura vive en una columna de la fila de proyecto (`max-width` es el de su columna, `aspect-ratio: 16/10`), así que no se deforma en viewports anchos ni con zoom alejado. La selección está verificada: 390 px @1× → 960, 1440 px @1× → 960, 1440 px @2× → 1920.

Para regenerarlas: captura el sitio a 1440×900 con `deviceScaleFactor: 2` (2880×1800), y luego

```bash
magick captura.png -resize 960x  -quality 90 -strip public/projects/nombre-960.webp
magick captura.png -resize 1280x -quality 88 -strip public/projects/nombre-1280.webp
magick captura.png -resize 1920x -quality 88 -strip public/projects/nombre-1920.webp
magick captura.png -resize 2880x -quality 88 -strip public/projects/nombre-2880.webp
```

La imagen para compartir en redes es `public/og.jpg` (1200×630).

## Procedencia de las imágenes

Todas las imágenes que se publican y cómo se obtuvieron:

- `public/projects/constructora-real-{1280,1920,2880}.webp` — capturas de `constructorareal.com.do` a 2×, noviembre de 2026.
- `public/projects/loto-real-{1280,1920,2880}.webp` — capturas de `lotoreal.com.do` a 2×, noviembre de 2026.
- `public/projects/soloticketsrd-{1280,1920,2880}.webp` — capturas de `soloticketsrd.com/reservar` a 2×, noviembre de 2026.
- `public/og.jpg` — tarjeta social generada para este sitio con la paleta y la tipografía del sistema visual.
- `src/app/apple-icon.png` — icono de 180×180 generado a partir del monograma.
- `src/app/icon.svg` — monograma vectorial del sitio.

Las tres capturas se toman de los sitios en producción y se sirven sin retoque de contenido.

## Publicación en Cloudflare Pages

1. En **Workers & Pages**, crea una aplicación de Pages e importa este repositorio de GitHub.
2. Selecciona el preset **Next.js (Static HTML Export)**.
3. Configura la rama de producción como `main`.
4. Usa `npm run build` como comando de build y `out` como directorio de salida.
5. Publica el primer deploy; los pushes siguientes generarán despliegues automáticos y los pull requests tendrán previews.

El workflow de `.github/workflows/ci.yml` corre lint, typecheck y build en cada push y pull request.

## Dominio `georgesgil.com`

En el proyecto de Pages, abre **Custom domains**, agrega `georgesgil.com` y sigue la verificación DNS. Agrega también `www.georgesgil.com` y configura una redirección permanente hacia el dominio principal para mantener una sola URL canónica.

Los enlaces profesionales vigentes son:

- [LinkedIn](https://www.linkedin.com/in/georgesgil22/)
- [GitHub](https://github.com/GeorgesGil)

> **Pendiente de tu validación:** las descripciones de alcance de los tres proyectos son una propuesta a partir de lo observable en los sitios públicos. No publican métricas, responsabilidades internas ni clientes. Confírmalas o corrígelas antes de presentarlas como hechos.
