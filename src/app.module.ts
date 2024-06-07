import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpController } from './http-service/http-service.controller';

@Module({
  imports: [],
  controllers: [HttpController],
  providers: [AppService],
})
export class AppModule {}
