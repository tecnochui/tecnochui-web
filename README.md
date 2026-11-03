# Tecnochui — sitio web

Sitio de [Tecnochui](https://www.tecnochui.com.ve): soporte técnico, redes, servidores y ciberseguridad para pymes y personas en Caracas, Venezuela.

Hecho con [Astro](https://astro.build) (salida estática) y [Tailwind CSS 4](https://tailwindcss.com). Se publica en GitHub Pages con dominio propio y Cloudflare por delante.

## Comandos

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm ci`          | Instala las dependencias exactas del lockfile |
| `npm run dev`     | Servidor local en `http://localhost:4321`     |
| `npm run build`   | Genera el sitio en `dist/`                    |
| `npm run preview` | Sirve `dist/` para probar la compilación      |

Requiere Node 22 (el mismo que usa el workflow de despliegue).

## Estructura

```
public/               Archivos servidos tal cual: CNAME, robots.txt, favicon, logos, og-image.png
src/
  assets/sobre-mi/    Fotos de la página "Sobre mí" (perfil.* y ponencia.*)
  components/         Header, Footer, Hero, ServicesBento, WhatsAppFloat, T
  content/blog/       Artículos en Markdown (colección "blog")
  data/               Contenido editable: site, servicios, clientes, recursos
  layouts/Layout.astro  Metadatos SEO, Open Graph, JSON-LD, tema, fuentes
  pages/              Rutas del sitio
  styles/global.css   Temas claro/oscuro y componentes
.github/workflows/deploy.yml   Despliegue a GitHub Pages
```

## Cómo editar el contenido

Casi todo se cambia sin tocar HTML:

- **Teléfono, correo, redes, formulario:** `src/data/site.js`.
- **Servicios** (portada, listado y una página por servicio, con sus preguntas frecuentes): `src/data/servicios.js`.
- **Clientes fijos:** `src/data/clientes.js`. Para ocultar uno, `mostrar: false`.
- **Checklists gratuitos:** `src/data/recursos.js`.
- **Blog:** crear un `.md` en `src/content/blog/` con este encabezado:

  ```yaml
  ---
  title: "Título del artículo"
  description: "Resumen de una o dos frases (se usa en Google)"
  pubDate: 2026-11-03
  author: Tecnochui
  tags: [ciberseguridad]
  readingTime: "5 min"
  draft: false        # true para ocultarlo
  ---
  ```

- **Fotos de "Sobre mí":** copiar `perfil.jpg` y `ponencia.jpg` (también `.png` o `.webp`) en `src/assets/sobre-mi/`. Si no existen, la página muestra las iniciales.

## Temas claro y oscuro

El visitante elige con el botón del encabezado. Por defecto se muestra el claro; la elección se guarda en el navegador (`localStorage`, clave `tema`). Los colores están como variables en `src/styles/global.css` (`:root` para el claro y `:root[data-theme="dark"]` para el oscuro).

El componente `T` permite escribir un texto distinto por tema (por ejemplo `Servicios` en claro y `~/servicios` en oscuro). Los elementos con la clase `term-only` solo se ven en el tema oscuro.

## Despliegue

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`: instala, compila y publica `dist/` en GitHub Pages. El dominio se define en `public/CNAME`.

Flujo recomendado: trabajar en una rama (por ejemplo `testing`), abrir un pull request y hacer merge a `main` solo cuando el cambio esté listo, porque el merge publica el sitio.

## SEO

- El sitemap (`/sitemap-index.xml`) lo genera `@astrojs/sitemap` en cada compilación; no se edita a mano. `robots.txt` ya apunta a él.
- Cada página define `title`, `description`, URL canónica y Open Graph desde `Layout.astro`. Las páginas de servicios incluyen datos estructurados `Service` y `FAQPage`; los artículos, `BlogPosting`; la portada, `ProfessionalService`.
- Verificar el sitio en Google Search Console y en Bing Webmaster Tools, y enviar el sitemap.

## Seguridad

La política de contenido (CSP) está en `Layout.astro` y solo permite lo necesario: Formspree para el formulario, Google Fonts y Cloudflare Insights. Si se añade un servicio externo (analítica, mapas, vídeo), hay que añadir su dominio a la CSP.

## Antes de cada merge a `main`

- [ ] Los clientes de `clientes.js` han aceptado aparecer con nombre y enlace.
- [ ] Las fotos de `src/assets/sobre-mi/` están subidas.
- [ ] `npm run build` termina sin errores.
- [ ] Probado el formulario de contacto y el botón de WhatsApp.
