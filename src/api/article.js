import request from '@/utils/request'

// 获取文章列表接口封装完成
export const getArticles = (obj) => {
  return request.get('/interview/query', {
    // get请求参数
    params: {
      current: obj.current || 1, // 当前页 → 做分页
      pageSize: obj.pageSize || 10, // 每页条数 → 做分页
      sorter: obj.sorter // 排序字段 → 推荐(weight_desc) & 最新(不传参数)
    }
    // // headers请求头，配置token
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
}

// 获取文章详情数据
export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}

// 点赞接口
export const updateLike = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 1 // 喜欢
  })
}

// 收藏接口
export const updateCollect = (id) => {
  return request.post('interview/opt', {
    id,
    optType: 2 // 收藏
  })
}

// 获取我的收藏
export const getArticlesCollect = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 2 // 表示收藏
    }
  })
}

// 获取我的喜欢
export const getArticlesLike = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      page: obj.page, // 当前页
      pageSize: 5, // 可选
      optType: 1 // 表示喜欢
    }
  })
}
