import { Module } from '@nestjs/common';
import { HttpController } from './http-service.controller';

@Module({
  controllers: [HttpController],
})
export class AppModule {}