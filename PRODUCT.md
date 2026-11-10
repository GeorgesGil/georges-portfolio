# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores técnicos y líderes de ingeniería que evalúan candidatos para roles de desarrollo web en República Dominicana, Latinoamérica o remoto. Llegan desde un enlace en el CV, LinkedIn o un correo, y deciden en dos o tres minutos si vale la pena una conversación. Les importa el stack, la evidencia de trabajo real y una forma directa de contactar.

Audiencia secundaria confirmada: colegas y red profesional que llegan por referencia y buscan el perfil o los enlaces de contacto.

## Product Purpose

Presentar a Georges Gil como Ingeniero de Sistemas y Desarrollador de Software, demostrar criterio técnico con evidencia de trabajo publicado, y convertir la visita en una conversación profesional por correo o LinkedIn. El éxito es un contacto entrante de un reclutador o líder técnico.

## Positioning

Perfil híbrido: ingeniero de sistemas que además construye el producto web completo. No se presenta como especialista de una sola capa, sino como alguien que entiende la interfaz, los servicios, los datos y la entrega como un mismo sistema.

## Operating Context

Se comparte por enlace directo. Se abre con frecuencia en móvil y con frecuencia en escritorio. Se lee rápido y en diagonal antes de decidir. El propio sitio funciona como muestra de trabajo: su calidad es parte de la evaluación del candidato.

## Capabilities and Constraints

- One-page estática, bilingüe español e inglés, servida desde `georgesgil.com`.
- Next.js con App Router y export estático; se despliega en Cloudflare Pages como HTML/CSS/JS sin servidor.
- Sin backend, sin base de datos, sin formularios de contacto. El contacto es por correo y enlaces externos.
- Todo el contenido vive en `src/lib/portfolio-dictionary.ts`; editar el portafolio es editar datos, no JSX.
- Tres proyectos públicos: Constructora Real, Loto Real y SoloTicketsRD.
- Veinticuatro tecnologías agrupadas en cuatro capas: interfaz, servicios, datos y entrega.
- Las descripciones de proyecto deben ser verificables; el copy propuesto se marca para validación antes de publicarse como hecho.

## Brand Commitments

- Nombre: Georges Gil.
- Monograma: GG.
- Dominio canónico: `georgesgil.com`.
- Correo de contacto: `contact@georgesgil.com`.
- Voz: directa, sobria, sin superlativos ni relleno comercial.

## Evidence on Hand

- Capturas reales de los tres proyectos en `public/projects/`.
- URLs públicas: `constructorareal.com.do`, `lotoreal.com.do`, `soloticketsrd.com/reservar`.
- Perfiles públicos: LinkedIn y GitHub.
- Ausencias que no deben fabricarse: no hay testimonios, métricas de impacto, clientes nombrados, ni estudios de caso internos.

## Product Principles

1. La credibilidad se demuestra con el propio sitio: su ejecución es la primera prueba técnica.
2. Nada se publica como hecho sin confirmación: sin métricas, sin responsabilidades inventadas.
3. Lectura en diagonal primero: la información clave debe sobrevivir a un escaneo de segundos.
4. El idioma es una capacidad, no una función secundaria: español e inglés con la misma calidad.
5. Rápido y accesible en un teléfono de gama media es parte del mensaje profesional.

## Accessibility & Inclusion

- Enlace para saltar al contenido.
- Foco de teclado siempre visible.
- Respeto a `prefers-reduced-motion`.
- Contraste de texto que cumple AA en ambos temas.
