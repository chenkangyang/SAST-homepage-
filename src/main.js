import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
//router
import welcome from './components/welcome.vue'
import signinDialog from './components/signin-dialog.vue'
import loginDialog from './components/login-dialog.vue'
import myNews from './components/my-news.vue'
import myCompetion from './components/my-competition.vue'

//jquery
import $ from 'jquery'

Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

//创建一个路由规则
const router = new VueRouter({
  base:__dirname,
  routes:[
    {
      // name: 'welcome',
      path:'/welcome',
      components:{
        default: welcome
      },
      children: [
        {
          path:'signup',
          components:{
            a: loginDialog
          }
        },
        {
          path:'signin',
          components:{
            a:signinDialog
          }
        },
        {
          path:'news',
          components:{
            b:myNews
          }
        },
        {
          path:'competition',
          components:{
            b:myCompetion
          }
        }
      ]
    }
    // {
    //   path:'*',
    //   redirect: '/'
    // },
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#main')