# Georges Gil — Portafolio

Portafolio profesional de [Georges Gil](https://github.com/GeorgesGil), construido con Next.js, TypeScript, Tailwind CSS y shadcn/ui. La aplicación se exporta como sitio estático para Cloudflare Pages.

## Desarrollo local

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para validar una entrega:

```bash
npm run lint
npm run build
```

El build estático queda en `out/`.

## Estructura

- `src/app/page.tsx`: contenido y estructura de la página principal.
- `src/app/globals.css`: tokens visuales, layout, motion y responsive.
- `src/app/layout.tsx`: tipografías y metadatos sociales/SEO.
- `src/app/robots.ts`, `sitemap.ts` y `manifest.ts`: descubrimiento y metadatos web.
- `src/components/ui/`: componentes shadcn/ui instalados como código fuente.

## Publicación en Cloudflare Pages

1. En **Workers & Pages**, crea una aplicación de Pages e importa este repositorio de GitHub.
2. Selecciona el preset **Next.js (Static HTML Export)**.
3. Configura la rama de producción como `main`.
4. Usa `npm run build` como comando de build y `out` como directorio de salida.
5. Publica el primer deploy; los pushes siguientes generarán despliegues automáticos y los pull requests tendrán previews.

## Dominio `georgesgil.com`

En el proyecto de Pages, abre **Custom domains**, agrega `georgesgil.com` y sigue la verificación DNS. Agrega también `www.georgesgil.com` y configura una redirección permanente hacia el dominio principal para mantener una sola URL canónica. No añadas reglas de caché personalizadas para los assets del proyecto salvo que exista una necesidad concreta; Pages ya aplica caché en su CDN.

## Actualizar contenido

Los proyectos y textos editables están al inicio de `src/app/page.tsx`. No se publican métricas, responsabilidades ni detalles internos que no hayan sido confirmados. Los enlaces profesionales vigentes son:

- [LinkedIn](https://www.linkedin.com/in/georgesgil22/)
- [GitHub](https://github.com/GeorgesGil)
