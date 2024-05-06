<template>
  <div class="login-page">
    <!-- 注册头部 -->
    <van-nav-bar title="注册"/>

    <!-- 表单内容 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符'}
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }
        ]"
      />
      <div style="margin: 16px;">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <router-link class="link" to="/login">有账号，去登陆</router-link>
  </div>
</template>

<script>
// import { Toast } from 'vant'
import { register } from '@/api/user'
export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 监听表单的提交，形参中：可以获取到输入框的值
    async onSubmit (values) {
      // const res = await register(values)
      // console.log(res)

      // Toast('注册成功')
      // Toast.loading({
      //   message: '拼命加载中...',
      //   forbidClick: true
      // })
      // Toast.success('成功文案')
      // Toast.fail('失败文案')

      // 其实Toast方法已经被挂到了原型上，通过 this.$toast 直接调用
      this.$toast.loading({
        message: '请求中...',
        forbidClick: true
      })

      await register(values)
      this.$toast.success('注册成功')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
