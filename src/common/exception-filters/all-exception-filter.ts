import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import type { BusinessExceptionResponse } from 'src/types'
import type { Response } from 'express'

import { HttpStatus } from '@nestjs/common'

class AllExceptionFilter implements ExceptionFilter<unknown> {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const resp = ctx.getResponse<Response>()

    const message =
      exception instanceof Error ? exception.message : 'unknown error'

    resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
    } as BusinessExceptionResponse)
  }
}

export { AllExceptionFilter }
