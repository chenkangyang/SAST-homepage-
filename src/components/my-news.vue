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
          <el-card class="box-card" v-for="o in 3" :key="o">
            <div class="pass-content">
              <h1>这是一个新闻标题</h1>
              <div class="passage-subtitle">发布时间： 2017-11-{{o}}</div>
              <div class="img-package">
                <img src="../assets/img/passage-img.jpg" class="passage-pic">
                <br>
                <div class="img-caption">Lorem ipsum dolor sit amet</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
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
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div class="pass-content">
              <h1>这是一个新闻标题</h1>
              <div class="passage-subtitle">发布时间： 2017-11-{{o}}</div>
              <div class="img-package">
                <img src="../assets/img/passage-img.jpg" class="passage-pic">
                <br>
                <div class="img-caption">Lorem ipsum dolor sit amet</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
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
          <el-card class="box-card" v-for="o in 5" :key="o">
            <div class="pass-content">
              <h1>这是一个新闻标题</h1>
              <div class="passage-subtitle">发布时间： 2017-11-{{o}}</div>
              <div class="img-package">
                <img src="../assets/img/passage-img.jpg" class="passage-pic">
                <br>
                <div class="img-caption">Lorem ipsum dolor sit amet</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
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
          <el-card class="box-card" v-for="o in 4" :key="o">
            <div class="pass-content">
              <h1>这是一个新闻标题</h1>
              <div class="passage-subtitle">发布时间： 2017-11-{{o}}</div>
              <div class="img-package">
                <img src="../assets/img/passage-img.jpg" class="passage-pic">
                <br>
                <div class="img-caption">Lorem ipsum dolor sit amet</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
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
          <el-card class="box-card" v-for="o in 6" :key="o">
            <div class="pass-content">
              <h1>这是一个新闻标题</h1>
              <div class="passage-subtitle">发布时间： 2017-11-{{o}}</div>
              <div class="img-package">
                <img src="../assets/img/passage-img.jpg" class="passage-pic">
                <br>
                <div class="img-caption">Lorem ipsum dolor sit amet</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><br>
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
      // console.log(this.$route.path);
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

</style>
