import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import {
  AllExceptionFilter,
  BusinessHttpExceptionFilter,
} from './common/exception-filters'
import { BusinessResponseInterceptor } from './common/interceptors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(
    new AllExceptionFilter(),
    new BusinessHttpExceptionFilter(),
  )

  app.useGlobalInterceptors(new BusinessResponseInterceptor())

  await app.listen(3000)
}
bootstrap()
