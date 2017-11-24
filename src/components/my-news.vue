<template>
    <el-main id="news-main">   
      <el-tabs :tab-position="tabPosition">
        <el-tab-pane label="近期新闻">
          <el-carousel :interval="6000" height="55vh">
            <el-carousel-item>
              <div id="news0"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news1"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news2"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news3"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news4"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news5"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news6"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div id="news7"></div>
            </el-carousel-item>
          </el-carousel>
          <el-card class="box-card" v-for="o in 1" :key="o">
          <!-- <el-card class="box-card"> -->
            <div class="pass-content">
              <h1>第26届南邮校大学生科协全体会议隆重举办</h1>
              <div class="passage-subtitle">发布时间： 2017-11-1</div>
              <div class="img-package">
                <img src="../assets/img/news1.jpg" class="passage-pic">
                <br>
                <!-- <div class="img-caption">Lorem ipsum dolor sit amet</div> -->
              </div>
              <p>10月23日晚，南邮校大学生科协在青春剧场举行了本年度的校科协全会。校大学生科协主席团，各院科协主席，校大学生科协十大部门部长，各级中干，特邀嘉宾，各直属社团会长和新一届500多名新干事一同参加了会议。</p><br>
              <p>2017年10月23日晚六时，南邮校大学生科协在青春剧场举行了本年度的校科协全会。校大学生科协主席团，各院科协主席，校科协十大部门部长，各级中干，特邀嘉宾，各直属社团会长和新一届500多名新干事一同参加了会议。</p><br>
              <p>首先，校大学生科协主席孟天成对全体2017级新生的加入表示了热烈欢迎，对于他们通过层层选拔进入校科协表示了热烈祝贺。</p><br>
              <p>孟主席讲话亲切，幽默，风趣，时不时地与大家互动。孟主席从向大家提出的一个简单的问题展开讲话，他指出“只要你们敢想敢做有能力，科协就能为你提供展示和提升自我的平台”，他还现身说法表示：“决定你能否加入科协的重要因素是你的学习态度和能力胆识；科协只代表机会、平台，而不是身份。</p><br>
              <div class="img-package">
                <img src="../assets/img/news2.jpg" class="passage-pic">
                <br>
                <div class="img-caption">校大学生科协主席孟天成学长</div>
              </div>
              <p>孟主席又通过讲述自身经历让我们思考：我们为什么要进科协，我们能从科协获得什么，我们能为科协带来什么。</p><br>
              <p>本次会议进行了一个半小时，大家收获颇深。最后，大家在观看往届科协人的祝福寄语视频中结束。</p><br>
              <div class="img-package">
                <img src="../assets/img/news3.jpg" class="passage-pic">
                <br>
                <div class="img-caption">会后，校大学生科协部门合照</div>
              </div>
              <div class="meta-bottom">
                <div class="btn-like">
                  <a @click="changestaron(o)">
                    <i :id=o :class='[starthis]'></i>
                    点赞
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="主席团">
          <el-card class="box-card" v-for="o in 1" :key="o">
          <!-- <el-card class="box-card"> -->
            <div class="pass-content">
              <h1>第26届南邮校科协主席团换届大会圆满举行</h1>
              <div class="passage-subtitle">发布时间： 2017-11-1</div>
              <div class="img-package">
                <img src="../assets/img/news4.jpg" class="passage-pic">
                <br>
                <div class="img-caption">主席团换届现场</div>
              </div>
              <p>2017年5月26日晚，南京邮电大学大学生科学技术协会第26届主席团换届大会在大学生活动中心三楼多功能厅圆满举行。出席本次活动的有第25届主席团、中干成员，各校级社团的代表，各院级科协的代表以及本届校科协的部分干事。本次大会由第25届校科协办公室主任马尘扬主持。</p><br>
              <div class="img-package">
                <img src="../assets/img/news5.jpg" class="passage-pic">
                <br>
              </div>
              <p>12位主席候选人根据抽签顺序依次上台发言，并接受各校级社团、院级科协和本届科协各部门部长的随机提问。12位候选人进行了精彩的演讲和答辩。他们对自己的工作进行了全面的总结，就自己对于校科协的作用和价值进行了深刻的阐述，同时对校科协未来的发展和改进方向进行了展望。</p><br>
              <p>至此本次换届选举大会正式结束，会后参与大会的第25届校科协成员进行了合影。新一届主席团名单将在近期公示，愿第26届主席团能够继承25届主席团的优良作风，传承校科协的传统，突破创新创造新的成绩！</p><br>
              <div class="img-package">
                <img src="../assets/img/news6.jpg" class="passage-pic">
                <br>
                <div class="img-caption">会后，第26届主席团成员合影</div>
              </div>
              <div class="meta-bottom">
                <div class="btn-like">
                  <a @click="changestaron(o+10)">
                    <i :id=o+10 :class='[starthis]'></i>
                    点赞
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="技术部门">
          <el-card class="box-card" v-for="o in 1" :key="o">
            <!-- <el-card class="box-card"> -->
            <div class="pass-content">
              <h1>方草地课堂 | 软件研发中心第一次授课通知</h1>
              <div class="passage-subtitle">发布时间： 2017-11-1</div>
              <div class="img-package">
                <img src="../assets/img/news7.jpg" class="passage-pic">
                <br>
                <div class="img-caption">软件研发中心第一次授课通知</div>
              </div>
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br> -->
              <div class="meta-bottom">
                <div class="btn-like">
                  <a @click="changestaron(o+20)">
                    <i :id=o+20 :class='[starthis]'></i>
                    点赞
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="办公部门">
          <el-card class="box-card" v-for="o in 1" :key="o">
            <!-- <el-card class="box-card"> -->
            <div class="pass-content">
              <h1>薪火传 踏歌行|南京邮电大学75周年校庆</h1>
              <div class="passage-subtitle">发布时间： 2017-11-1</div>
              <div class="img-package">
                <img src="../assets/img/news8.jpg" class="passage-pic">
                <br>
                <div class="img-caption">南京邮电大学75周年校庆</div>
              </div>
              <p>2017年4月，南京邮电大学75周年校庆的日子到来了。为庆祝75周年校庆,在2017年4月16日我校举办“薪火传 踏歌行”南京邮电大学75周年校庆健身跑活动.校庆跑分为接力跑、精英跑、校园跑和线上跑四种形式,除去线上跑，其他三项活动总参与人数有近5000人,除去线上跑，其他三项活动路途长度有近53.2公里</p><br>
              <div class="img-package">
                <img src="../assets/img/news9.jpg" class="passage-pic">
                <br>
                <div class="img-caption">南邮毕业校友送给母校的生日蛋糕</div>
              </div>
              <p>既然是生日,怎么能够少个生日大蛋糕呢？南邮毕业校友送给母校的生日蛋糕,这个蛋糕可能是这辈子小编见过最大的了。</p><br>
              <div class="to_center">
                <p>愿南京邮电大学在新的一年举世瞩目</p>
                <p>愿南京邮电大学在新的一年薪火传承</p>
                <p>愿南京邮电大学在新的一年踏歌前行</p>
                <p>南京邮电大学75岁生日快乐!</p>
              </div><br>
              <div class="meta-bottom">
                <div class="btn-like">
                  <a @click="changestaron(o+30)">
                    <i :id=o+30 :class='[starthis]'></i>
                    点赞
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="创新部门">
          <el-card class="box-card" v-for="o in 2" :key="o">
            <!-- <el-card class="box-card"> -->
            <div class="pass-content">
              <h1>你的创青春已经上线啦！</h1>
              <div class="passage-subtitle">发布时间： 2017-11-1</div>
              <p>为提高人才培养质量，创新人才培养机制，切实增强学生的创新精神、创业意识和创新创业能力，培养造就“大众创业、万众创新”的生力军，推动更高质量创业就业，现将有关2017年南京邮电大学“创青春”大学生创业大赛有关事项通知如下:</p><br>
              <p>通过组委会专家初评，对于进入校级决赛阶段的团队，学校设立金奖、银奖、铜奖若干给予表彰及奖励。其中荣获金奖的队伍，将获得不少于5000元的奖金资助，并有机会入驻大学生创新创业教育基地“青柚创客空间”培育孵化。</p><br>
              <p>填写《2017年“创青春”大学生创业大赛项目申报简表》，对于暂时没有找到合适项目但是有强烈意愿参加的品学兼优学生，填写《“创青春”大学生创业大赛参赛选拔报名表》。请将以上材料及团队项目书以学院为单位于2017年3月9日前发送至sast@njupt.edu.cn，完成学院参赛项目和队员的报备工作。如有疑问请加交流QQ群108593391。</p><br>
              <div class="img-package">
                <img src="../assets/img/news10.jpg" class="passage-pic">
                <br>
                <div class="img-caption">南邮校科协</div>
              </div>
              <div class="meta-bottom">
                <div class="btn-like">
                  <a @click="changestaron(o+40)">
                    <i :id=o+40 :class='[starthis]'></i>
                    点赞
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>   
      </el-tabs>
      <el-tooltip class="item" effect="dark" content="回到顶部" placement="top">
        <div class="page-component-up" @click="toTop">
          <i class="el-icon-caret-top"></i> 
        </div>
      </el-tooltip>         
    </el-main>
</template>

<script>
import bus from '../assets/enventBus.js'

export default {
  name:'news',
  data() {
    return {
      tabPosition:'left',
      desit:true,
      isOn:false,
      starthis: 'el-icon-star-off'
    }
  },
  methods:{
    changestaron(o) {
      if(this.isOn == false){
        document.getElementById(o).className = "el-icon-star-on";
        this.isOn = true;
      }else if(this.isOn == true){
        document.getElementById(o).className = "el-icon-star-off";
        this.isOn = false;
      }
    },
    toTop(){
      var timer = setInterval(function(){
        var osTop = document.documentElement.scrollTop||document.body.scrollTop;
        var speed = Math.floor(-osTop / 5);
        var isTop = true;
        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        if(osTop == 0){
          clearInterval(timer);
        }
      },50);
    }
  },
  mounted:function () {
    //新闻挂载成功之后。刷新本路由界面发现轮播重新挂载了。于是乎发送消息让他毁灭
    bus.$emit('destroy',this.desit); 
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(this.$route.path);
    }
  }
}
</script>

<style>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-tabs__nav-wrap {
  width: 13em;
}

.box-card {
  margin: 35px auto;
}

.img-package {
  padding-bottom: 20px;
  text-align: center; 
}

.img-package> .img-caption
{
  min-width: 20%;
  max-width: 80%;
  min-height: 22px;
  display: inline-block;
  padding: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #d9d9d9;
  font-size: 14px;
  color: #969696;
  line-height: 1.7;
}

.meta-bottom {
  margin-bottom: 20px;
}

.meta-bottom> .btn-like {
  float: right;
  margin-right: 20px;
}

.btn-like> a{
  border: solid 1px;
  border-radius: 6px;
  cursor: pointer;
}

.page-component-up {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 0 3px rgba(0,0,0,0.12)
}

.page-component-up:hover {
  box-shadow: 0 0 3px rgba(0,0,0,1.12)
}

.passage-subtitle {
  font-size: 14px;
  margin-bottom: 2em;
  display: block;
}

.box-card h1{
  min-width: 75%;
  text-align: left;
  display: block;
  margin-bottom: 20px;
}

.pass-content {
  text-align: left;
  width: 75%;
  margin: 0 auto;
}

.pass-content p{
  text-indent: 2em;
  line-height:1.5em;
}

#news-main {
  margin: 5vh 15vw;
  min-width: 1000px;
}
#news0 {
  background: url(../../static/img/mmexport1509867972956.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news1 {
  background: url(../../static/img/mmexport1509867985321.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news2 {
  background: url(../../static/img/mmexport1509867995644.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news3 {
  background: url(../../static/img/mmexport1509868019358.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news4 {
  background: url(../../static/img/mmexport1509868080329.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news5 {
  background: url(../../static/img/mmexport1509868087822.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news6 {
  background: url(../../static/img/mmexport1509868092616.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}
#news7 {
  background: url(../../static/img/mmexport1509868169820.jpg) no-repeat;
  background-size:cover;
  height: 100%;
  width: 100%;
}

/*下面是我加的*/
.to_center p{
  text-align: center;
  margin: 0.5em auto;
}
</style>
