import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { request, response } from 'express';

let person = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 3, name: 'Wonder Woman' },
]

@Controller('hero')
export class HeroController {
  @Get('index')
  index(@Res() response) {
    response.json(person);
  }

  @Post('create')
  create(@Req() request, @Res({passthrough: true}) response) {
    const {id, name} = request.body;
    person.push({ id, name});

    return person;
  }
}
