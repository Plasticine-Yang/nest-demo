import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import type { Response } from 'express'
import type { UncaughtExceptionResponse } from 'src/types'

import { HttpStatus } from '@nestjs/common'
import ErrorStackParser from 'error-stack-parser'

class AllExceptionFilter implements ExceptionFilter<unknown> {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const resp = ctx.getResponse<Response>()

    let message = 'unknown error'
    let stack = undefined

    if (exception instanceof Error) {
      message = exception.message

      if (exception.stack) {
        stack = ErrorStackParser.parse(exception)
      }
    }

    resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
      stack,
    } as UncaughtExceptionResponse)
  }
}

export { AllExceptionFilter }
