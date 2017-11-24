<template>
    <div id="fullpage">
      <div class="section" id="section0">
        <div class="title1">Sast-南邮校科协简介 </div>
        <div class="title2">Students’ Association for Science and Technology </div>
        <div class="title3">
          南京邮电大学大学生科学技术协会（Students’ Association for Science and Technology),简称SAST，中文简称南邮校科协，成立于1992年。它是在校团委指导下，依照国家法规和大学生规章制度，独立开展活动的学生科技文化及学术研究的组织，也是校团委直属的组织中唯一一个技术类的学生组织。 南邮校科协现分为技术中心、办公中心、创新中心三大中心，其中创新中心下还设有CG爱好者协会、ERP协会、安全技术协会等九个直属社团，组织管理有序，机构设置严谨。 南邮校科协本着学以致用的务实原则，结合我校的特点，广泛地开展各项具有学术性、知识性、实践性的科技创新活动，引领全校同学学习科学、热爱科学、拓宽视野、提高创新意识、深化专业知识、优化知识结构，培养复合型人才。历届校科协成员有很多凭借着优异的成绩被各类知名公司聘用、顶尖高校录取。 南京邮电大学大学生科学技术协会始终以“增强科技意识，活跃学术气氛，提高创新能力，培养科技人才”为目标，努力让更多的南邮学子在这里点燃梦想，成功启航！
        </div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section1">
        <div class="title1 fadeInLeft">软件研发中心 </div>
        <div class="title2 fadeInLeft">计算机 软件 网络 安全 </div>
        <div class="title3 fadeInLeft">软件研发中心是一个新部门，由计算机部门和网络部整合而成，总共有C++，Java，Pythhon，C#，ACM，Android开发，Java Web，Linux，前端，后端，安全，部门特色强调技术，开放良好的氛围
          <br>若干研究小组，来负责不同的方面，并对新人进行指导</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section2">
        <div class="title1">电子部 只因喜爱</div>
        <div class="title2">电子电路 嵌入式 通信系统 电子设计竞赛</div>
        <div class="title3">电子主要开展电子信息类科学技术的研究，授课和竞赛培训。学习的内容包括以模拟电路，数字电路，编程语言为基础，以自动控制系统、通信系统、仪器仪表、物联网系统为方向，专攻电子电路设计，嵌入式系统开发，FPGA和片上系统。
          <br>部门活动主要涵盖授课，交流和竞赛培训</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section3">
        <div class="title1">多媒体技术部 </div>
        <div class="title2">平面设计 视频 音频 3D 摄影</div>
        <div class="title3">无论你是轻车熟路的技术专家，还是灵感爆棚的艺术家，都将在这里找到归属感
          <br>技术与艺术相结合，兴趣与学习相结合</div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
      </div>
      <div class="section" id="section4">
        <div class="title1">联系我们</div>
        <div class="title2">Students’ Association for Science and Technology</div>
        <div class="title3">
          <p>地址:南京市栖霞区文苑路9号南京邮电大学大学生活动中心101</p><br>
          <p>邮箱:sast@njupt.edu.cn</p>
          <p>Copyright @校科协软件研发中心</p>
          <a href="https://github.com/Njupt-Sast-Network" target="_blank">https://github.com/Njupt-Sast-Network</a>
        </div>
        <div class="joinBtn" @click="openNew"><a>加入我们</a></div>
	    </div>
</div>
</template>

<script>
import $ from 'jquery'
import '../assets/js/jquery.fullPage.min.js'
import bus from '../assets/enventBus.js'

export default {
  data () {
    return {
      author: 'Alex Chen',
      welcomeFormVisible:false
    }
  },
  methods: {
    openNew: function() {
      this.welcomeFormVisible = true;
      bus.$emit('opNew',this.welcomeFormVisible);
    }
  },
  mounted:function () {
    $('#fullpage').fullpage({
      navigation: true,
      continuousVertical:true,
      afterLoad: function(anchorLink, index){
        if(index == "1"){
          document.getElementById("section0").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "2"){
          document.getElementById("section1").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "3"){
          document.getElementById("section2").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "4"){
          document.getElementById("section3").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
        if(index == "5"){
          document.getElementById("section4").childNodes[0].style.cssText +='; opacity:1;transform:translateX(0);transition-duration: 1000ms;';
        }
      },
    });
  },
  destroyed:function () {
    $('#fullpage').fullpage.destroy('all');
  }
}
</script>

<style>
@import "../assets/css/jquery.fullPage.min.css";
* { margin: 0; padding: 0;}
ul { list-style-type: none;}
.section { text-align: center; background-repeat: no-repeat; background-position: 50% 50%; background-size: cover; overflow: hidden;}
#section0 { background-image: url(../assets/img/bg.jpg);}
#section1 { background-image: url(../assets/img/2bg.jpg);}
#section2 { background-image: url(../assets/img/4bg.jpg);}
#section3 { background-image: url(../assets/img/1bg.jpg);}
#section4 { background-image: url(../assets/img/3bg.jpg);}
.title1 { opacity: 0.8; font-size: 60px; line-height: 93px; background: url(../assets/img/titleline1.png) no-repeat center bottom;text-shadow: 2px 2px 10px #666;}
.title2 { opacity: 0.8; font-size: 40px; line-height: 75px;}
.title3 { font-size: 24px; font-family: 'PingFang-SC-UltraLight', '微软雅黑', '宋体'; line-height: 48px; margin: 20px auto 0 auto; opacity: 0.7; width: 70%;}
#section1 .title1, #section1 .title2, #section2 .title1, #section2 .title2 { color: #fff; opacity: 1;}
#section1 .title3, #section2 .title3{ color: #fff;}
#section3 .title3 { color: #000;}
#section0 .title3 {font-size: 18px;opacity: 1}


#section1 .title1 { background: url(../assets/img/titleline2.png) no-repeat center bottom;}
#section2 .title1 { background: url(../assets/img/titleline3.png) no-repeat center bottom;}
#section3 .title1 { background: url(../assets/img/titleline4.png) no-repeat center bottom;}
#section4 .title1 { background: url(../assets/img/titleline4.png) no-repeat center bottom;}
.joinBtn { cursor: pointer; margin: 85px auto 0; width: 220px; height: 50px; position: relative; background: #5396FF; color: #fff; line-height: 50px; font-size: 24px; border-radius: 25px;}
.joinBtn a { display: inline-block; width: 100%; height: 100%; color: #fff; font-family: 'PingFang-SC-UltraLight', '微软雅黑', '宋体'; text-decoration: none;}

.fp-tableCell {
  opacity: 0;
  transform: translateX(-100px);
}

.fp-tableCell::before{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255,255,255,0.5);
	content: '';
	-webkit-transition: -webkit-transform 0.6s;
	transition: transform 0.6s;
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
}

.joinBtn:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section1:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section2:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section3:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
#section4:hover .fp-tableCell::before{
  transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
.gauss {
    -webkit-filter: blur(10px); 
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);    
    filter: blur(10px);
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
</style>
