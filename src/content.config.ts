import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.string(),
    pubDate: z.string(),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

export const collections = { articles };
