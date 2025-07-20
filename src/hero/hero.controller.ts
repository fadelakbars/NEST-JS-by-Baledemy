import { Controller, Get } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get()
  index() {
    return 'Ini hero';
  }

  @Get('detail')
  detail() {
    return 'ini detail hero';
  }
}
