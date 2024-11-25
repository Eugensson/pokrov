import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    { message: "New password is required!", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    { message: "Password is required!", path: ["password"] }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
});

export const EditProductSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  discountPercentage: z.coerce.number().min(0).max(100).default(0),
  rating: z.coerce.number().min(0).max(5).default(0),
  price: z.coerce.number().min(0, { message: "Price cannot be negative" }),
  stock: z.coerce.number().min(0, { message: "Stock cannot be negative" }),
  tags: z.array(z.string()).optional(),
  // .min(1, { message: "At least one tag is required" })
  // .default([]),
  brand: z.string().min(1, { message: "Brand is required" }),
  sku: z.string().min(1, { message: "SKU is required" }),
  weight: z.coerce.number().optional(),
  width: z.coerce.number().optional(),
  height: z.coerce.number().optional(),
  depth: z.coerce.number().optional(),
  warrantyInformation: z.string().optional(),
  shippingInformation: z.string().optional(),
  returnPolicy: z.string().optional(),
  minimumOrderQuantity: z.coerce.number().min(0).default(0),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" })
    .default([]),
  thumbnail: z.string().default(""),
});
