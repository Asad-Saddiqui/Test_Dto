import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const securityNumberSchema = z.object({
  number: z.string().trim().min(10),
});

const ownerInfo = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.string().email(),
  phoneNumber: z.string().trim().min(3),
  securtynumbers: z.array(securityNumberSchema),
});
const arrayOfOwnerInfo = z.object({
  ownerInfoArray: z.array(ownerInfo),
});
export class OwnerInfoArrayDto extends createZodDto(arrayOfOwnerInfo) {

}

