import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import {
  BusinessHttpExceptionFilter,
  UncaughtExceptionFilter,
} from './common/exception-filters'
import { BusinessResponseInterceptor } from './common/interceptors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 异常处理
  app.useGlobalFilters(
    // 处理未捕获的异常
    new UncaughtExceptionFilter(),

    // 处理业务异常
    new BusinessHttpExceptionFilter(),
  )

  app.useGlobalInterceptors(new BusinessResponseInterceptor())

  await app.listen(3000)
}
bootstrap()
