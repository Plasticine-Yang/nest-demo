import { Controller, Get, HttpStatus } from '@nestjs/common'
import { AppService } from './app.service'
import { BusinessHttpException } from './common/exceptions'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello()
  }

  @Get('env')
  getEnv() {
    return this.appService.getEnv()
  }

  @Get('error')
  getError() {
    throw new BusinessHttpException(666, '一个奇怪的异常', {
      httpStatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    })
  }
}
