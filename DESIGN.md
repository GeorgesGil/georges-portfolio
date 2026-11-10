---
name: Georges Gil — Portafolio
description: Un portafolio editorial en el que el trabajo manda y el único color saturado de la página lo ponen los logos de las tecnologías.
colors:
  paper: "#f2f2ed"
  paper-sunk: "#e9e9e2"
  ink: "#14171a"
  ink-muted: "#5a6066"
  rule: "#d6d8d1"
  rule-strong: "#b4b8b0"
  field: "#0f3a2e"
  on-field: "#e9ede8"
  on-field-muted: "#b7c8bd"
  chip: "#ffffff"
  chip-rule: "#e0e2db"
  dark-paper: "#0c1110"
  dark-paper-sunk: "#141a18"
  dark-ink: "#ecefe9"
  dark-ink-muted: "#99a49e"
  dark-rule: "#242d29"
  dark-rule-strong: "#3a443f"
  dark-field: "#16241f"
  dark-on-field: "#e7ede6"
  dark-accent: "#a8cfb4"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 9.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.66
    letterSpacing: "0em"
  lead:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.0625rem, 1.7vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
  caption:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.01em"
  micro:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  control: "2px"
  mark: "6px"
spacing:
  gutter: "clamp(20px, 4.2vw, 56px)"
  section: "clamp(64px, 8vw, 112px)"
  block: "clamp(30px, 3.8vw, 46px)"
components:
  button-solid:
    backgroundColor: "{colors.field}"
    textColor: "{colors.on-field}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-ghost:
    backgroundColor: "#00000000"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  tech-chip:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.mark}"
    size: "36px"
---

# Design System: Georges Gil — Portafolio

## Overview

**Creative North Star: "El trabajo es el color"**

La página es casi monocroma a propósito. Fondo de papel, tinta y una sola voz cromática —verde profundo— que se reserva para el énfasis. Todo el color saturado que ve el visitante viene de un lugar: las capturas de los tres sitios y los logos de las veinticuatro tecnologías. Eso hace dos cosas a la vez: mantiene la página sobria y hace que el stack y el trabajo sean lo que brilla.

El registro es editorial, no de producto. El nombre se anuncia a escala de portada, el rol va debajo como subtítulo, y cada sección abre con una etiqueta al margen izquierdo y un titular grande separados por una línea. Las capturas de proyecto rompen la caja de texto y van a sangre, de borde a borde, porque el trabajo manda sobre la retícula.

El rechazo explícito: la página anterior convertía el portafolio en un plano de ingeniería y la persona desaparecía detrás del dibujo. Aquí la jerarquía es la de un portafolio —quién es, qué ha hecho, con qué lo hace, cómo contactarlo— y la identidad viene del oficio tipográfico y de la disciplina del color, no de una metáfora.

**Key Characteristics:**
- Página monocroma; el color lo aportan las capturas y los logos de marca.
- Una sola voz cromática: verde profundo para énfasis y campo de contacto.
- Grotesco con carácter para anunciar, serif para leer.
- Capturas de proyecto a sangre, sin marco ni tarjeta.
- Etiquetas de sección al margen, nunca encima del titular.

## Colors

Papel y tinta con un único acento profundo.

### Primary
- **Verde de énfasis** (#0f3a2e): campo de contacto, botón primario, subrayados de enlace, marcas de foco y el punto de disponibilidad. En modo oscuro sube a #a8cfb4 para conservar contraste sobre el fondo casi negro.

### Neutral
- **Papel** (#f2f2ed): fondo del medio claro. Neutro cálido-grisáceo; no es crema.
- **Papel hundido** (#e9e9e2): lecho de las capturas y superficies hundidas.
- **Tinta** (#14171a): texto principal y titulares.
- **Tinta atenuada** (#5a6066): prosa secundaria, etiquetas y metadatos. Siempre ≥5.6:1 sobre papel.
- **Regla** (#d6d8d1) y **regla fuerte** (#b4b8b0): separadores de 1 px; la fuerte marca cambios de bloque.
- **Modo oscuro**: papel #0c1110, papel hundido #141a18, tinta #ecefe9, atenuada #99a49e.

### Named Rules
**La Regla del Color Prestado.** Ningún elemento decorativo introduce color saturado. El croma de la página viene de las capturas y de los logos de marca; si algo más se vuelve colorido, está fuera del sistema.

**La Regla del Verde Escaso.** El verde profundo aparece en superficies contadas: el botón primario, el campo de contacto y los subrayados. No se usa para teñir fondos de sección corrientes.

## Typography

**Display Font:** Bricolage Grotesque (con Helvetica Neue como reserva)
**Body Font:** Literata (con Georgia como reserva)
**Label/Mono Font:** Bricolage Grotesque en versalitas

**Character:** Un grotesco de carácter, con detalles recortados, para anunciar; una serif de pantalla pensada para lectura larga, para el texto. El contraste no es de estilo sino de función: el grotesco titula, la serif explica. Las etiquetas usan el grotesco en versalitas para que la página tenga una sola voz de señalización.

### Hierarchy
- **Display** (600, `clamp(3rem, 9.4vw, 6rem)`, 0.90, -0.035em): sólo el nombre, una vez.
- **Headline** (600, `clamp(1.75rem, 3.6vw, 2.75rem)`, 1.06): titulares de sección.
- **Title** (600, `clamp(1.6rem, 3vw, 2.35rem)`, 1.0): nombre de proyecto.
- **Lead** (400 serif, `clamp(1.0625rem, 1.7vw, 1.3125rem)`, 1.55): el párrafo de presentación; máximo 54ch.
- **Body** (400 serif, 1.0625rem, 1.66): prosa; medida 62ch.
- **Label** (600 grotesco, 0.6875rem, `0.14em`, versalitas): etiquetas de sección y de dato; a 0.5625rem por debajo de 620 px.
- **Caption** (500 grotesco, 0.8125rem, 1.5): metadatos, pie y navegación.

### Named Rules
**La Regla del Titular Sin Antetítulo.** Ninguna etiqueta se coloca encima de un titular. La etiqueta de sección vive al margen izquierdo, en la misma línea base que el titular.

**La Regla del Interletrado Suelo.** Ningún titular comprime por debajo de -0.04em.

## Layout

Ancho máximo 1320 px con márgenes de `clamp(20px, 4.2vw, 56px)`. El ritmo vertical entre secciones es `clamp(64px, 8vw, 112px)` y siempre hay más aire encima de un titular que debajo.

Cada sección abre con una retícula de `96px + 1fr`: la etiqueta en la columna estrecha, el titular en la ancha, alineados por línea base y cerrados con una regla de 1 px. El cuerpo de la sección arranca en la segunda columna, de modo que la etiqueta funciona como margen editorial.

Cada proyecto es una fila de dos columnas —captura a la izquierda, ficha a la derecha— separadas por `clamp(24px, 3.4vw, 56px)`: la captura gasta el ancho que antes quedaba vacío en lugar de ocupar una pantalla entera de scroll vertical. Su ancho es el de su columna y su alto sale de `aspect-ratio: 16/10`, así que ningún viewport, por ancho que sea, puede estirarla. En la ficha se apilan número, título, deck, la tabla de tipo y dominio, y el enlace. Por debajo de 1080 px las dos columnas se apilan y la captura pasa a ocupar el ancho completo. El stack se reparte en cuatro columnas; por debajo de 1080 px baja a dos y por debajo de 620 px a una. La sección «Sobre mí» es 1.45fr / 1fr; el contacto es un campo a sangre con el correo a escala de titular.

Puntos de quiebre: 1080 px (stack a dos columnas, pie de proyecto en dos filas, «Sobre mí» apilado), 860 px (la navegación pasa a botón y panel, el pie del hero se apila), 620 px (una columna, capturas con menos alto, acciones a ancho completo).

## Elevation & Depth

No hay sombras. La profundidad se resuelve con líneas de 1 px, con el papel hundido bajo las capturas y con el contraste de los dos medios. Un `box-shadow` en este sistema es una importación de otra estética.

### Named Rules
**La Regla de la Línea.** Si dos bloques necesitan separarse, la respuesta es una línea de 1 px, no una sombra.

## Shapes

Casi todo es rectangular: las capturas, las secciones y el campo de contacto no tienen radio. Sólo hay dos excepciones, ambas funcionales: los controles llevan 2 px para que no corten, y las fichas de logo llevan 6 px porque contienen una marca ajena y un cuadrado duro las maltrata. El punto de disponibilidad y el punto del logo son los únicos círculos.

## Components

- **Botón sólido**: relleno verde profundo, texto papel, 48 px de alto, radio 2 px; en hover se invierte a contorno.
- **Botón fantasma**: sólo borde de regla fuerte; en hover el borde y el texto pasan a verde.
- **Ficha de logo**: 36 px, fondo blanco, borde de 1 px y radio 6 px; dentro, la marca a 21 px **en su color de marca**. El fondo claro es obligatorio: muchos logos son negros y desaparecerían sobre el modo oscuro.
- **Monograma GG**: dos G dibujadas como trazos sobre un cuadrado del color de acento, con radio 2 px. Es la misma pieza que el favicon (`src/app/icon.svg`) y que el icono de iOS, así que la marca de la cabecera y la de la pestaña del navegador son un solo diseño. En modo oscuro el cuadrado usa el acento claro del tema.
- **Navegación**: enlaces con subrayado que crece de izquierda a derecha; por debajo de 860 px pasan a un botón con panel que cierra al elegir, con Escape o al pulsar fuera.
- **Captura de proyecto**: `<img>` con `srcSet` de 960/1280/1920/2880 px y `sizes="(max-width: 1440px) 100vw, 1440px"`, dentro de la columna de la captura. Se usa un `<img>` nativo, no `next/image`, porque el export estático corre con `images.unoptimized` y no puede emitir `srcSet`.
- **Pie de proyecto**: retícula de tres columnas con número tabular, título y deck, ficha de tipo y dominio, y enlace subrayado.
- **Lista de stack**: filas con ficha de logo, nombre y regla de 1 px.
- **Ficha de datos**: pares etiqueta/valor con regla inferior, usada en «Sobre mí».
- **Campo de contacto**: superficie verde a sangre con correo a escala de titular.

## Do's and Don'ts

**Do**
- Dejar que las capturas y los logos aporten todo el color.
- Reservar el verde profundo para el énfasis y el campo de contacto.
- Mantener la etiqueta de sección al margen, nunca encima del titular.
- Usar la serif para leer y el grotesco para señalar.
- Medir la prosa entre 54 y 68 caracteres.

**Don't**
- Añadir un segundo color de acento.
- Poner sombras, degradados o cristales.
- Encapsular las capturas en tarjetas con borde y sombra: van a sangre.
- Usar el grotesco para párrafos largos.
- Colocar una etiqueta pequeña sobre un titular.
