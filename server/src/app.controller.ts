import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/Journey')
  Journey(@Body() body): any {
    return this.appService.Journey(body)
  }
  @Post('/maze')
  maze(@Body() body): any {
    console.log(123)
    return this.appService.maze(body)
  }
  @Get('med')
  med():any {
    return this.appService.getMedition()
  }
}
