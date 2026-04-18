import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string(),
    where: z.string(),
    duration: z.string()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    link: z.string().nullable().optional()
  })
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string(),
    where: z.string().optional(),
    duration: z.union([z.string(), z.number()]).optional(),
    type: z.enum(["dev", "teacher", "archive"])
  })
});

const pages = defineCollection({
  type: "content",
  schema: z
    .object({
      position: z.string().optional(),
      where: z.string().optional(),
      duration: z.string().optional()
    })
    .optional()
});

export const collections = { work, projects, experience, pages };
