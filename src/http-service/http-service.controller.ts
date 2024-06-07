import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HttpController {
  @Get()
  findAll(): string {
    return 'Hello World';
  }
}