import {
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const securityNumberSchema = z.object({
  number: z.string().trim().min(10),
});

const ownerInfo = z.object({
  firstName: z.string().trim().min(3),
  lastName: z.string().trim().min(3),
  email: z.string().email(),
  phoneNumber: z.string().trim().min(10),
  securtynumbers: z.array(securityNumberSchema),
});
const arrayOfOwnerInfo = z.object({
  ownerInfoArray: z.array(ownerInfo),
});



export class OwnerInfoArrayDto extends createZodDto(arrayOfOwnerInfo) {}
