import { RESET_ERROR_MESSAGE } from '../config/constants'

// 错误信息
export default function errorMessage(state = null, action) {
  const { type, error } = action
  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }
  return state
}
