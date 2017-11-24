<template>
  <el-header style="padding:0;">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="z-index:100;" :style="headerWidth">
			<router-link id="logo" tag="span" to="/welcome" :style="maxwh">
				<img src="../assets/img/blogo.png">
				<p>Igniting The Thought</p>
			</router-link>
			<el-menu-item index="2" :style="{padding:0}"><router-link to="/welcome/news" :style="maxwh">科协新闻</router-link></el-menu-item>
				<el-menu-item index="3" :style="{padding:0}"><router-link to="/welcome/competition" :style="maxwh">科技节</router-link></el-menu-item>
			<el-submenu index="4">
				<template slot="title">友情链接</template>
					<el-menu-item index="4-1"><a href="http://homework.nuptsast.com/index/" target="_blank">软件研发中心作业平台</a></el-menu-item>
					<el-menu-item index="4-2"><a href="http://mirrors.njupt.edu.cn/" target="_blank">南京邮电大学开源镜像站</a></el-menu-item>
					<el-menu-item index="4-1"><a href="https://github.com/njuptalex/SAST-homepage-" target="_blank">Github项目地址</a></el-menu-item>
			</el-submenu>
			<el-menu-item index="5" style="float:right;" @click="loginFormVisible = true">登陆/注册</el-menu-item>
								
			<el-menu-item index="6" style="float:right;" @click="welcomeFormVisible = true">报名招新</el-menu-item>
			<el-popover placement="top-start" title="扫描二维码" width="200" trigger="click">
				<div>
					<img src="../assets/img/qrcode1.png" style="margin-bottom: 8px; max-width:200px;">
					<p>南邮官方微信</p>
					<img src="https://pek3a.qingstor.com/warehouse1/20161205045719651.jpg" style="margin-bottom: 8px; max-width:200px;">
					<p>南邮微信小程序</p>
				</div>
				<el-menu-item index="7" style="float:right;" slot="reference">联系我们</el-menu-item>
			</el-popover>
		</el-menu>
				<!-- 招新表单 -->
		<el-dialog title="加入我们" :visible.sync="welcomeFormVisible" width="500px">
			<el-form :model="welcomeForm" ref="welcomeForm" :rules="welcomeFormRules">
				<el-form-item label="姓名" prop="name" :label-width="welcomeFormWidth">
					<el-input v-model="welcomeForm.name" auto-complete="off"></el-input>
					</el-form-item>
						<el-form-item label="学号" prop="userId" :label-width="welcomeFormWidth">
						<el-input v-model="welcomeForm.userId" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="部门" prop="department" :label-width="welcomeFormWidth">
						<el-select v-model="welcomeForm.department" placeholder="请选择部门名称">
								<el-option label="软件研发中心" value="software"></el-option>
								<el-option label="电子部" value="ee"></el-option>
								<el-option label="多媒体技术部" value="media"></el-option>
								<el-option label="办公室" value="office"></el-option>
								<el-option label="外联部" value="toOut"></el-option>
								<el-option label="科宣部" value="publicity"></el-option>
								<el-option label="社团发展部" value="develop"></el-option>
						</el-select>
					</el-form-item>
						<el-form-item label="申请理由" prop="reason" :label-width="welcomeFormWidth">
						<el-input type="textarea" v-model="welcomeForm.reason"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="handleWelcomeSubmit('welcomeForm')">确 定</el-button>
						<el-button @click="resetWelcomeForm('welcomeForm')">重 置</el-button>
						<el-button @click="welcomeFormVisible = false">取 消</el-button>
					</el-form-item>
				</el-form>
		</el-dialog>
				<!-- 登陆表单 -->
		<el-dialog :visible.sync="loginFormVisible" title="NJUPT SAST" width="400px">
				<div class="nav-slider">
						<router-link to="/welcome/signup" tag="span" id="signup-link">
								<a>注 册</a>
						</router-link>
						<router-link to="/welcome/signin" tag="span" id="signin-link">
								<a>登 陆</a>
						</router-link>
						<span class="navs-slider-bar"></span>
				</div>
				<transition name="fade">
						<router-view name="a"></router-view>
				</transition>
		</el-dialog>
</el-header>
</template>

<script>
import bus from '../assets/enventBus.js'
import loginDialog from './login-dialog.vue'
import signinDialog from './signin-dialog.vue'

export default {
	data () {
		return {
			msg:"默认",
			activeIndex: '1',
			welcomeFormVisible: false,
			loginFormVisible:false,
			welcomeFormWidth: '100px',
			headerWidth:{
				padding:'0px 250px',
				'min-width':'1000px'
			},
			maxwh: {
				display:'inline-block',
				width: '6em',
				height: '100%'
			},
			welcomeForm: {         
				department: '',
				reason: '',
				name: '',
				userId: ''
				},
			welcomeFormRules: {
				department: [
					{ required: true, message: '请选择部门', trigger: 'change' }
				],
				reason: [
					{ required: true, message: '请填写申请理由', trigger: 'blur'}
				],
				name: [
					{ required:true, message: '输入你的姓名', trigger: 'blur'}
				],
				userId: [
					{ required:true, message: '输入你的学号', trigger: 'blur'},
					{ min: 9, max: 9, message: '长度为9个字符', trigger: 'blur' }
				]
			},
		};
	},
	methods: {
		handleWelcomeSubmit(formName) {
				this.$refs[formName].validate((valid) => {
						if (valid) {
								this.$message({
										message: '恭喜你，提交成功！请等待审核。',
										type: 'success'
						});
								this.welcomeFormVisible = false;
						} else {
								this.$message.error('核查填写错误的信息');
								return false;
						}
				});
		},
		resetWelcomeForm(formName) {
				this.$refs[formName].resetFields();
		}
	},
	mounted(){
		var self = this;
		bus.$on("cancle",function(msg){
			self.msg = msg;  //msg: 从login-dialog传递来的值为false
			self.loginFormVisible = msg;
		});
		bus.$on("opNew",function(op){
			self.op = op;  //msg: 从carousel传递来的值为true
			self.welcomeFormVisible = op;con
		});
	},
	components:{loginDialog,signinDialog}
}
</script>

<style>

#logo {
	width: 20em!important;
	cursor: pointer;
}

#logo >img{
	display: inline!important;
	vertical-align: middle;
	margin: 0.5em auto;
}

#logo >p{
	display: inline!important;
	vertical-align: middle;
	font-size: 1.2em;
    opacity: 0.8;
    font-weight: 300;
	text-shadow: 2px 2px 2px #666;
}

#logo:focus{
	outline: none!important;
}

/* .el-header {
	position: fixed;
    top: 0;
    right: 0;
    left: 0;
} */

.navs-slider-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2.4em;
    height: 2px;
    background: #42b983;
    -webkit-transition: left .15s ease-in;
    transition: left .15s ease-in;
}

.nav-slider {
    position: relative;
    display: inline-block;
    width: 10em;
    font-size: 18px;
    text-align: center;
}
.nav-slider a {
    width: 4em;
    line-height: 35px;
    opacity: .6;
    -ms-filter: "alpha(Opacity=70)";
    -webkit-transition: opacity .15s,color .15s;
    transition: opacity .15s,color .15s;
}

.nav-slider a:hover {
    opacity: 1;
}

#signup-link {
    float: left;
}

#signin-link {
    float: right;
}

.link-active {
    opacity: 1 !important;
}
</style>
