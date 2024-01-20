import { IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const mySchema = z.object({
  FullName: z.string().trim(),
  CompanyName: z.string().trim(),
  JobTitle: z.string().trim(),
  Date: z.dateString(),
});

export class Signature extends createZodDto(mySchema) {}
