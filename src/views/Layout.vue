<template>
  <div class="layout-page">
    <!-- 二级路由出口：匹配的二级路由的组件展示的位置 -->
    <router-view></router-view>

    <!-- route 开启路由模式 -->
    <van-tabbar route>
      <van-tabbar-item to="/article" icon="fire-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutPage'
}
</script>

<style lang="less" scoped></style>
