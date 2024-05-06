<template>
  <div class="article-page">
    <!-- 头部导航 -->
    <nav class="my-nav van-hairline--bottom">
      <a
        :class="{ active: sorter === 'weight_desc' }"
        @click="changeSorter('weight_desc')"
        href="javascript:;"
        >推荐</a
      >
      <!-- 对于axios，如果 传递的 属性值，为null或undefined，则此参数会被忽略 -->
      <a
        :class="{ active: sorter === null }"
        @click="changeSorter(null)"
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    </nav>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多数据了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>

  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'article-page',
  data () {
    return {
      current: 1, // 当前页
      sorter: 'weight_desc', // 推荐
      list: [], // 文章列表
      loading: false, // 是否在加载中
      finished: false // 是否加载完了全部的数据
    }
  },
  async created () {
    // 获取推荐的，第1页的10条数据
    // const res = await getArticles({
    //   current: this.current,
    //   sorter: this.sorter
    // })
    // this.list = res.data.rows
    // console.log(res.data.rows)
  },
  methods: {
    async onLoad () {
      const res = await getArticles({
        current: this.current,
        sorter: this.sorter
      })
      console.log(res)
      // 需要在 this.list 基础上，累加 res.data.rows
      this.list.push(...res.data.rows)
      // 如果数据已经请求完毕，需要将loading改成false，才能加载下一页的数据
      // 一旦 loading 改为 false，load事件可以再次触发
      this.loading = false
      this.current++ // 当前页+1

      // 对于没有更多数据的数据
      if (this.current > res.data.pageTotal) {
        this.finished = true
      }
    },
    changeSorter (value) {
      // 修改排序规则 (推荐/最新)
      this.sorter = value

      // 重置数据
      this.current = 1 // 排序条件变化，重新从第一页开始加载
      this.list = [] // 数据重置为空
      this.finished = false // finished 重置，重新有数据可以加载了
      // this.loading = false

      // 标记需要开始加载了，由于我们是手动调用加载更多 onLoad 方法
      // 所以loading 需要自己改成 true，避免重复触发
      this.loading = true
      // 根据最新的条件重新渲染
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
