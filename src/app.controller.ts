import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ZodValidationPipe } from 'nestjs-zod';
import { bussinessDTO } from './dtos/business.info.dto';
import { OwnerInfoArrayDto } from './dtos/owner-info.dto';
import { EligibilityDtoClass } from './dtos/Eligibility-Question.dto';
import { Signature } from './dtos/signature.dto';
import { diskStorage } from 'multer';
import { ApprovalDto } from './dtos/approval.dt0';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('business/info')
  @UsePipes(ZodValidationPipe)
  businessInfo(@Body() bussiness: bussinessDTO) {
    return bussiness;
  }
  @Post('owner')
  @UsePipes(ValidationPipe, ZodValidationPipe)
  ownerInfo(@Body() ownerInfo: OwnerInfoArrayDto) {
    return ownerInfo;
  }
  @Post('question')
  @UsePipes(ZodValidationPipe, ValidationPipe)
  Eligibility(@Body() eligiblity: EligibilityDtoClass) {
    return eligiblity;
  }
  @Post('signature')
  @UsePipes(ZodValidationPipe, ValidationPipe)
  Signature(@Body() signature: Signature) {
    return signature;
  }
  @Post('approval')
  @UsePipes(ZodValidationPipe, ValidationPipe)
  Approval(@Body() Approval: ApprovalDto) {
    return Approval;
  }

}
