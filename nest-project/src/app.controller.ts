import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('http://127.0.0.1:5500/dommanipulatie/index.html')
  getTodos(): string {
    return this.appService.getTodos();
  }
}
