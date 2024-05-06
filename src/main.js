import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全部导入：将所有的vant组件，一次性导入到项目中
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 导入按需导入的配置文件
import '@/utils/vant-ui'

// 组件的全局注册
import ArticleItem from '@/components/ArticleItem'
Vue.component('ArticleItem', ArticleItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
