import { z } from "zod";

export const userEditSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  email: z.string().email().optional(),
  verified: z.enum(["verified", "unverified"]).optional(),
  deactivated: z.boolean().optional(),
  phone: z.number().int().positive().optional(),
  address: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
  id: z.string().uuid().optional(),
});

export type UserEditFormData = z.infer<typeof userEditSchema>;
