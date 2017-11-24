<template>
<div id="bak">
  <div id="container">
    <div id="container-inner">
      <div id="container-header">
        <div id="header-inner">
          <div id="header-content">
            <h1 @click="changebk">南京邮电大学科学与技术协会</h1>
            <p>Student Association for Science and Technology of NUPT</p>
          </div>
        </div>
      </div>
      <div id="container-body">
        <div id="body-inner">
          <div id="body-info">
            <p>>>
            <router-link to="/welcome" replace>
              Click to enter
            </router-link>
            </p>
          </div>
        </div>
      </div>
      <div id="container-footer">
        <div id="footer-inner">
          <p>
            <a href="https://github.com/Njupt-Sast-Network" target="_blank">Contact</a> | @NJUPT                        
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:""
    }
  },
  methods:{
    changebk:function(){
      var imgUrl = ".../../static/img/a"+ Math.round(20 * Math.random()) +".jpg"
      var bak = document.getElementById("bak");
      bak.style.backgroundImage = "url("+ imgUrl +")";
    }
  },
  mounted:function () {
    this.changebk();    
  }
  //载入新的路由后my-home组件自动销毁
}
</script>

<style>
@import '../assets/css/my-home.css';
</style>
