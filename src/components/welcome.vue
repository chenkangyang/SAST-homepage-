<template>
  <div id="welcome">
    <my-header></my-header>
    <!-- 全屏轮播组件 -->
      <my-carousel v-if="!destroy"></my-carousel>
      <transition name="fade">
        <router-view name="b"></router-view>
      </transition>
  </div>
</template>

<script>
import myHeader from './my-header.vue'
import myCarousel from './my-carousel.vue'
import myNews from './my-news.vue'
import bus from '../assets/enventBus.js'

export default {
  name: 'welcome',
  data() {
    return {
      destroy:false
    }
  },
  beforeMount:function(){
    //收到新闻组件挂载成功的消息之后销毁全屏轮播
    var self = this;
    bus.$on("destroy",function(msg){ //msg = true
      self.destroy = msg;
    });
  },
  components: {myHeader,myCarousel,myNews},
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // console.log(this.$route.path);
      if(this.$route.path == "/welcome/news"){
        this.destroy = true;
      }
      else
        this.destroy = false;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#welcome {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.el-select, .el-input, .el-textarea {
  width: 80%;
  float: left;
}

.el-select > .el-input{
  width: 100%  
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #42b983;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-leave-active {
  transition: opacity 0 ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
}
</style>

