import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const ApprovalDtoSchema = z
  .object({
    fullName: z.string().min(3).max(50),
    Position: z.enum(['Position1', 'Position2']),
    email: z.string().email(),
    password: z.string().min(8),
    reEnterPassword: z.string(),
  })
  .refine((data) => data.password === data.reEnterPassword, {
    message: "Passwords don't match",
  });

export class ApprovalDto extends createZodDto(ApprovalDtoSchema) {}
