// 本文件用于存放所有和用户相关的请求函数
import request from '@/utils/request'

// 1. 注册用户
export const register = (data) => {
  // 进行注册请求
  // 注意：这里必须 return，将请求的promise对象返回，将来才能await拿结果
  return request.post('/user/register', data)
}

// 2. 账户登录
export const login = (data) => {
  // 进行登录请求
  return request.post('/user/login', data)
}

// 3. 获取用户信息
export const getUserInfo = () => {
  return request('/user/currentUser')
}
