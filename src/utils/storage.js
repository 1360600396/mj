const KEY = 'vant-mobile-exp-token'

// 1. 获取token (需要返回token)
export const getToken = () => {
  return localStorage.getItem(KEY)
}
// 2. 设置token
export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}
// 3. 删除token
export const delToken = () => {
  localStorage.removeItem(KEY)
}
