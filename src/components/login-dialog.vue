<template>
<el-form :model="loginForm" ref="loginForm" :rules="loginFormRules" v-model="loginFormVisible">
  <el-form-item label="用户名" prop="name" :label-width="loginFormWidth">
    <el-input v-model="loginForm.name" auto-complete="off" :style="emmm"></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" prop="realName" :label-width="loginFormWidth">
    <el-input v-model="loginForm.realName" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="学号" prop="userId" :label-width="loginFormWidth">
    <el-input v-model="loginForm.userId" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email" :label-width="loginFormWidth">
    <el-input v-model="loginForm.email" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="passwd" :label-width="loginFormWidth">
    <el-input type="password" v-model="loginForm.passwd" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkpasswd" :label-width="loginFormWidth">
    <el-input type="password" v-model="loginForm.checkpasswd" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="sendMsg"><router-link to="/welcome">取 消</router-link></el-button>
    <el-button type="primary" @click="handleLoginSubmit('loginForm')">确 定</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import bus from '../assets/enventBus.js';

export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.checkpasswd !== '') {
          this.$refs.loginForm.validateField('checkpasswd');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.loginForm.passwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      loginFormVisible:false,
      loginFormWidth: '80px',
      emmm: {
        width:'90%'
      },
      loginForm: {
        name:'',
        realName:'',
        userId:'',
        region:'',
        email:'',
        passwd:'',
        checkpasswd:''
      },
      loginFormRules: {
        name: [
          { required:true, message: '输入你的姓名', trigger: 'blur'}
        ],
        realName: [
          { required:true, message: '输入你的真实姓名', trigger: 'blur'}
        ],
        userId: [
          { required:true, message: '输入你的学号', trigger: 'blur'},
          { min: 9, max: 9, message: '长度为9个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkpasswd: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    handleLoginSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册',
              type: 'success'
            });
            this.loginFormVisible = false;
            bus.$emit('cancle',this.loginFormVisible);
            // console.log(this.$route.path);
            this.$router.replace("/welcome");
            // console.log(this.$route.path);
          } else {
            return false;
          }
        });
      },
      //点击取消之后将表单可见的布尔值传递出去
      sendMsg: function() {
        this.loginFormVisible = false;
        bus.$emit('cancle',this.loginFormVisible);
      }
  },
  mounted:function(){
    document.getElementById("signup-link").childNodes[0].classList.add("link-active");
    document.getElementsByClassName("navs-slider-bar")[0].style.left = "0";
  },
  destroyed:function(){
    document.getElementById("signup-link").childNodes[0].classList.remove("link-active")
  }
}
</script>
  
<style>
.el-button--default span a{
  color: #000000;
}
.el-button--primary span a{
  color: #ffffff;
}
.el-dialog__title{
  font-size: 23px;
}
</style>
