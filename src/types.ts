import { HttpStatus } from '@nestjs/common'

/** @description 业务统一异常响应体 */
export interface BusinessExceptionResponse {
  code: number
  message: string
}

/** @description 未捕获的异常响应体 */
export interface UncaughtExceptionResponse {
  code: HttpStatus.INTERNAL_SERVER_ERROR

  /** @default string unknown error */
  message: string
  stack?: StackFrame[]
}
