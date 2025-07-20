import { Controller, Get } from '@nestjs/common';

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
}
