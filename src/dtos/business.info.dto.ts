import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const bussinessSchema = z.object({
  businessName: z.string().trim(),
  yearOfStarting: z
    .string()
    .refine((data) => isValidYearString(data), {
      message: 'Invalid year format',
    }),
  businessType: z.enum(['corporation', 'partnership']),
  NAICCode: z.number(),
  businessStructure: z.enum(['corporation1', 'partnership1']),
  email: z.string().email(),
  telephone: z.string().trim(),
  address: z.string().trim(),
  loan_purpose: z.string().trim(),
  taxID: z.string().trim(),
  annualRevenue: z.number(),
  loanAmount: z.number(),
});
function isValidYearString(value: string): boolean {
  const regex = /^\d{4}$/;
  return regex.test(value);
}
export class bussinessDTO extends createZodDto(bussinessSchema) {}
