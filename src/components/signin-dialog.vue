<template>
<el-form :model="signinForm" ref="signinForm" :rules="signinFormRules" v-model="signinFormVisible">
  <el-form-item label="邮箱" prop="email" :label-width="signinFormWidth">
    <el-input v-model="signinForm.email" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="passwd" :label-width="signinFormWidth">
    <el-input type="password" v-model="signinForm.passwd" :style="emmm" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="sendMsg"><router-link to="/welcome">取 消</router-link></el-button>
    <el-button type="primary" @click="handleSignSubmit('signinForm')">确 定</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import bus from '../assets/enventBus.js';

export default {
  data () {
    return {
      signinFormVisible:false,
      signinFormWidth: '80px',
      emmm: {
        width:'90%'
      },
      signinForm: {
        email:'',
        passwd:'',
      },
      signinFormRules: {
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
        ]
      }
    };
  },
  methods: {
    handleSignSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '登陆成功',
              type: 'success'
            });
            this.signinFormVisible = false;
            bus.$emit('cancle');
            this.$router.replace("/");
          } else {
            return false;
          }
        });
      },
      //点击取消之后将表单可见的布尔值传递出去
      sendMsg: function() {
        this.signinFormVisible = false;
        bus.$emit('cancle',this.signinFormVisible);
      }
  },
  mounted:function(){
    document.getElementById("signin-link").childNodes[0].classList.add("link-active");
    document.getElementsByClassName("navs-slider-bar")[0].style.left = "76%";
  },
  destroyed:function(){
    document.getElementById("signin-link").childNodes[0].classList.remove("link-active")
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

.link-active {
    opacity: 1 !important;
}
</style>
