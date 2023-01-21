import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import {
  AllExceptionFilter,
  BusinessHttpExceptionFilter,
} from './common/exception-filters'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(
    new AllExceptionFilter(),
    new BusinessHttpExceptionFilter(),
  )

  await app.listen(28378)
}
bootstrap()
