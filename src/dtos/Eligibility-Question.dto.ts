import { IsBoolean, IsNotEmpty } from 'class-validator';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const _EligibilitySchema = z.object({
  question1: z.boolean(),
  question2: z.boolean(),
  question3: z.boolean(),
  question4: z.boolean(),
  question5: z.boolean(),
});

export class EligibilityDtoClass extends createZodDto(_EligibilitySchema) {

}


