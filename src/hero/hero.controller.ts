import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { request, response } from 'express';

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

  @Get('expressrequest')
  expressRequest(@Res() response) {
    return response.send('Ini express request');
  }

  // passthrough digunakan jika kita ingin mengembalikan response dari express sambil tetap mengembalikan response dari NestJS
  @Get('passthrough')
  passthrough(@Req() request: Request, @Res() response) {
    response.send('Ini express response');
    return 'Ini NestJS response';
  }

  //request object
  @Post('requestbody')
  requestBody(@Req() request, @Res({ passthrough: true }) response) {
    return {
      body : request.body,
    }
  }
}
