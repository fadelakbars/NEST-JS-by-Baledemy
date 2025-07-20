import { Controller, Get, Req } from '@nestjs/common';
import { request } from 'express';

@Controller('hero')
export class HeroController {
  @Get()
  index() {
    return 'Ini hero';
  }

  // return object
  @Get('object')
  object() {
    return {
      nama: 'Fadhel',
    };
  }

  // pakai express response
  @Get('expressresponse')
  expressResponse(@Req() request: Request): string {
    return 'Ini express response';
  }
}
