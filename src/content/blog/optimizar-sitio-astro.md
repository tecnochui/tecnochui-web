---
title: "Cómo optimizar tu sitio con Astro sobre un servidor Linux"
description: "Astro genera HTML estático por defecto, pero el servidor donde lo publicas también importa. Estas son las prácticas que usamos en producción."
pubDate: 2026-07-20
author: tecnochui
tags: [linux, infraestructura]
readingTime: "4 min"
---

Astro ya hace la mitad del trabajo por ti: sin JavaScript innecesario en el cliente y HTML servido tal cual. La otra mitad depende de dónde y cómo publiques ese HTML.

## 1. Sirve los assets con cabeceras de caché correctas

Los archivos dentro de `dist/_astro/` llevan un hash en el nombre, así que pueden cachearse de forma **agresiva** y segura:

```
Cache-Control: public, max-age=31536000, immutable
```

El `index.html` y el resto de rutas, en cambio, deben revalidarse siempre:

```
Cache-Control: no-cache
```

## 2. Compresión a nivel de servidor

En un Nginx o Caddy detrás de tu VPS Linux, activa `gzip` o, mejor aún, `brotli`:

```bash
# nginx.conf
brotli on;
brotli_comp_level 5;
brotli_types text/html text/css application/javascript;
```

## 3. Un checklist rápido antes de publicar

- Ejecuta `astro build` y revisa el tamaño de `dist/`
- Verifica que no queden imágenes sin optimizar (`astro:assets` ya ayuda con esto)
- Corre `lighthouse` o `astro check` como parte de tu pipeline de CI

> La velocidad no es un lujo estético: en infraestructura, cada segundo de carga es también una superficie de ataque menos expuesta si reduces dependencias de terceros.

Con estos tres puntos, la mayoría de los sitios en Astro llegan a producción con métricas de Core Web Vitals en verde sin necesitar un CDN adicional.
