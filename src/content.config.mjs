import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección "blog": artículos en Markdown dentro de src/content/blog/*.md
 * Cada archivo se identifica por su nombre de archivo (usado como slug/id).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Tecnochui'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('5 min'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
