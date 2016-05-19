import { RESET_ERROR_MESSAGE } from '../config/constants'

// 重置错误信息
export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
