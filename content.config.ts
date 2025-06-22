import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    experiences: defineCollection({
      source: 'experiences/*.json',
      type: 'data',
      schema: z.object({
        _id: z.string(),
        title: z.string(),
        color: z.enum(['yellow', 'blue', 'green', 'pink', 'indigo']),
        date: z.string(),
        role: z.string(),
        stack: z.string(),
        summary: z.string(),
        description: z.string(),
        card: z.string(),
        link: z.string().optional(),
      }),
    }),
    formations: defineCollection({
      source: 'formations/*.json',
      type: 'data',
      schema: z.object({
        _id: z.string(),
        school: z.string(),
        date: z.string(),
        summary: z.array(z.array(z.string())),
      }),
    }),
  },
})
