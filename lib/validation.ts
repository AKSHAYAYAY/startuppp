import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be at most 500 characters"),
  category: z.string().min(3, "Category must be at least 3 characters").max(20, "Category must be at most 20 characters"),
  link: z
    .string()
    .url("Invalid URL format. Ensure it starts with http:// or https://")
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (!res.ok) return false;

        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, { message: "Provided URL is not an accessible image" }),
  pitch: z.string().min(10, "Pitch must be at least 10 characters"),
});
