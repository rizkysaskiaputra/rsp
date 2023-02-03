import { z, defineCollection } from 'astro:content'

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
        height: z.number().optional(),
        width: z.number().optional(),
        type: z.string().optional(),
      })
      .optional(),

    canonical: z.string().url().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),

    date: z.date().or(z.string().transform((str) => new Date(str))),
    updated: z
      .date()
      .or(z.string().transform((str) => new Date(str)))
      .optional(),
  }),
})

export const collection = {
  post: post,
}
