<template>
  <div class="all">
    <div class="intro">
      <div class="orange_box1"/>
      <div class="orange_box2"/>
      <div class="orange_box3"/>
      <div class="small_box" style="background:#fff426; top:170px; left: 85px;"/>
      <div class="small_box" style="background:#ff3d00; top:150px; right: 75px;"/>
      <div class="small_box" style="background:#ff3d00; bottom:150px; left: 415px;"/>
      <el-container>
        <el-main class="main">
          <el-row class="photobox">
          </el-row>
          <el-row class="textbox2">
          </el-row>
          <el-row class="textbox2">
          </el-row>
          <el-row class="textbox2">
          </el-row>
          <el-row class="textbox2" style="width: 250px;">
          </el-row>
          <el-row class="textbox3">
          </el-row>
        </el-main>

        <el-main class="aside">
          
        </el-main>
      </el-container>
    </div>

    <div class="QA">
      <div class="yellow_box1"/>
      <div class="orange_box4"/>
      <div class="orange_box5"/>

      <el-container class="container">

        <el-main class="answer">
          <el-row>
            <span class="ask1">狼和狗有什么关系？</span>
          </el-row>
          <el-row>
            <img src="/assets/M2.png" width="50" class="M2"/>
            <span class="answer1">在生物学上与狗为同一种类</span>
          </el-row>
          <el-row>
            <span class="ask1" style="width:155px;margin-left: 380px;margin-top: 40px;">大白鲨长什么样？</span>
          </el-row>
          <el-row>
            <img src="/assets/M2.png" width="50" style="position:absolute;" class="M2"/>  
          </el-row>
          <img src="/assets/WhiteShark.png" class="answer2">
        </el-main>

        <el-main class="example">
          <span class="QA_title">问答功能</span>
          <p class="QA_intro">通过在对话框中发送问题，Ginkgo系统会抽取出最佳答案，并针对特定问题给出定制的可视化回答。<br>除此之外，通过“扫⼀扫”功能可以获取更多当前展品的信息</p>
        </el-main>
        
      </el-container>
    </div>
    <div class="photoShow">
      <a target="_blank" href="/assets/example1.png">
        <img src="/assets/example1.png" class="phone">
      </a>
      <a target="_blank" href="/assets/example2.png">
        <img src="/assets/example2.png" class="phone">
      </a>
      <a target="_blank" href="/assets/example3.png">
        <img src="/assets/example3.png" class="phone">
      </a>
      <a target="_blank" href="/assets/example4.png">
        <img src="/assets/example4.png" class="phone">
      </a>
        <el-row style="margin-top: 23px;font-family:'Noto Sans SC', sans-serif;">
          <span style="font-size:18px;margin-left:108px;">首页</span>
          <hr class="divide">
          <span style="font-size:18px;margin:0;">搜索</span>
          <hr class="divide">
          <span style="font-size:18px;">提问</span>
          <hr class="divide">
          <span style="font-size:18px;">详情</span>
        </el-row>
        
    </div>
  
    <div class = "p3container">
        
        <div class = "pt3">

            <div class = "bg1">
                <!-- 斜杠 -->
            </div>
            <div class = "pt3_1">
              <div class="orange_box6"/>
                <div style = "width: 40%; margin-right: 110px; margin-top: 50px;">
                    <h1 style = "text-align: right;font-szie:2.7em;">推荐提问</h1>
                    <p style = "text-align: right; margin-left: 230px;letter-spacing:0.1px;line-height:32px;">Ginkgo系统能给予用户兴趣以及用户当前的提问推荐相关问题，
                        帮助游客更好的了解产品；推荐提问不仅在问答界面中可以获取，
                        在主页中也有推荐，游客可以直接学习
                    </p>
                </div>
                
                <div style = "margin-left: 60px">
                    <img src="../assets/tmp1.png" style="transform: scale(1.2,1.2);border-radius:25px;"/>
                </div>
            </div>

            <div class = "pt3_2">
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>推荐</span>
                </div>
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>详情</span>
                </div>
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>提问</span>
                </div>
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>推荐展区</span>
                </div>
            </div>
        </div>

        <div class = "pt3">
            
            <div class = "bg2">
                <!-- 斜杠 -->
            </div>

            <div class = "pt3_1">

                <div style = "margin-right: 50px; text-align: right; width: 45%;">
                    <img src="../assets/tmp1.png"/>
                </div>
                <div style = "margin-left: 50px; margin-top: 50px;">
                    <h1 style = "text-align: left;">发现更多</h1>
                    <p style = "text-align: left; margin-right: 200px; max-width: 300px;line-height:32px;">根据不同⽤户的提问，展示当前热⻔展品及其相关的提问，
                        ⽤户可以点击感兴趣的展品了解详情，并浏览相关的热⻔问题及回答
                    </p>
                </div>

            </div>

            <div class = "pt3_2">
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>发现</span>
                </div>
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>详情</span>
                </div>
                <div id = "info">
                    <img src = "../assets/tmp2.png"/>
                    <br>
                    <span>相关</span>
                </div>
            </div>

        </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "solution"    
    }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;500;700&display=swap');
.all{
  position: relative;
  width:100%;
  height:auto;
  background: rgba(255,104,57,0.09);
  margin:0%;
}
.intro{
  position: relative;
  width:100%;
  height:900px;
  background: #ff6839;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 100%);
}
.orange_box1{
  position: absolute;
  width: 30%;
  height: 80%;
  background: linear-gradient(150deg,rgba(255,153,0,0.65) 0%, rgba(255,142,38,0.00) 80%);
  border-radius: 25px;
  transform-origin: -30% 45%;
  transform:  rotate(76deg);
}
.orange_box2{
  z-index: -1;
  position: absolute;
  width: 30%;
  height: 35%;
  margin-left:45%;
  background: linear-gradient(0deg,rgba(255,153,0,0.65) 0%, rgba(255,142,38,0.00) 100%);
  border-radius: 25px;
  transform-origin: -100% -30%;
  transform:  rotate(-12deg);
}
.orange_box3{
  z-index: -1;
  position: absolute;
  width: 30%;
  height: 30%;
  bottom: 30%;
  left: 40%;
  background: linear-gradient(180deg,#fff626, rgba(255,246,38,0.00) 100%);
  border-radius: 25px;
  transform-origin: 100% 0;
  transform:  rotate(-12deg);
}
.small_box{
  z-index:-1;
  position:absolute;
  width: 65px;
  height: 34px;
  border-radius: 25px;
  transform-origin: -30% -20%;
  transform:  rotate(-13deg);
}
.el-container{
  position: absolute;
  margin-left:165px;
  margin-right:150px;
  margin-top:185.5px;
}
.photobox{
  flex:0 0 250px;
  width:8em;
  height:8em;
  background-color: #d9d9d9;
  margin-bottom:1.5em;
}
.textbox2{
  flex:0 0 250px;
  width:  400px;
  height: 1.5em;
  background-color: #d9d9d9;
  margin-bottom:1.5em;
}
.textbox2:last-child{
  flex:0 0 250px;
  width: 250px;
  height: 1.5em;
  background-color: #d9d9d9;
  margin-bottom:1.5em;
}
.textbox3{
  width: 200px;
  height: 3.2em;
  border-radius: 11px;
  background-color: #d9d9d9;
  margin-top: 3em;
}
.QA{
  position: relative;
  width:100%;
  height:700px;
}
.yellow_box1{
  position: absolute;
  z-index: -1;
  width: 40%;
  height: 75%;
  background: linear-gradient(65deg,rgba(255,214,42,0.40) 0%, rgba(255,214,42,0.00) 80%);
  clip-path: polygon(0 25%, 100% 0%, 100% 75%, 0% 100%);
}
.orange_box4{
  position: absolute;
  top: 80px;
  left:50%;
  width: 60px;
  height: 60px;
  background: #ffe976;
  border-radius: 11px;
  box-shadow: 0px 2px 49.5px -19px rgba(0,0,0,0.17);
}
.orange_box5{
  position: absolute;
  z-index: 100;
  top: 445px;
  margin-left:14%;
  width: 65px;
  height: 65px;
  background: #ffe976;
  border-radius: 11px;
  box-shadow: 0px 2px 49.5px -19px rgba(0,0,0,0.17);
}
.container{
  padding:0;
  margin:90px 150px;
  width: auto;
}
.M2{
  background: #ffffff;
  height:auto;
  border-radius: 50px;
  box-shadow: 0px 2px 23px -11.5px #000000;
  margin-top: 10px;
}
.ask1{
  background-color: #ff6839;
  border-radius: 29.5px;
  box-shadow: 0px 2px 49.5px -19px rgba(0,0,0,0.17);
  color: #ffffff;
  margin-inline-end: 20px;
  margin-top: auto;
  margin-left: 335px;
  text-align: left;
  height: 40px;
  width: 200px;
  line-height: 40px;
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: bold;
  font-size: 1.1em;  
  padding-inline-start: 20px;
}
.answer1{
  display:inline;
  background-color: #ffffff;
  border-radius: 29.5px;
  box-shadow: 0px 2px 49.5px -19px rgba(0,0,0,0.17);
  margin-inline-start: 20px;
  margin-top: auto;
  color: #000000;
  text-align: left;
  height: 40px;
  width: 300px;
  line-height: 40px;
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: bold;
  font-size: 1.1em;  
  padding-inline-start: 20px;
  word-wrap:break-word
}
.answer2{
  border-radius: 28px;
  max-width: 55%;
  margin-left: 70px;
  margin-top: 20px;
}

.QA_title{
  position:relative;
  display: block;
  font-size: 2.7em;
  font-weight: bold;
  padding: 0;
  margin-top: 190px;
}
.QA_intro{
  position: absolute;
  margin-top: 40px;
  inline-size: 44%;
  line-height: 32px;
  font-weight: 500;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 0.1px;
  word-wrap: break-word;
}
.photoShow{
  position:relative;
  margin: 0px 200px 80px 200px;
}
.phone{
  position: relative;
  width: 200px;
  object-fit: cover;
  margin-left: 40px;
  margin-bottom: 5px;
}
.divide{
   border: 0;
   width:16%; 
   margin-left:25px;
   margin-right:25px;
   margin-top: 13px;
   border-top:1.5px solid #726969;
}
.p3container{
    height: auto;
    background-color: #fff1ed;
    font-family: 'Noto Sans SC', sans-serif;
}

.bg1{
    position:absolute;
    z-index: 1;
    background: linear-gradient(to left, rgba(255,214,42,0.40) 0%, rgba(255,214,42,0.00) 100%);
    transform: skewY(20deg);
    height:370px;
    width: 50%;
    margin-left: 50%;
    margin-top: 200px;
    right: 0px;
}

.bg2{
    position:absolute;
    z-index: 1;
    background: linear-gradient(to right, rgba(255,214,42,0.40) 0%, rgba(255,214,42,0.00) 100%);
    transform: skewY(-20deg);
    height:350px;
    width: 50%;
    margin-right: 50%;
    margin-top: 200px;
    left: 0px;
}

.pt3{
    display: flex;
    flex-direction: column;
    height: auto;
    z-index: 0;
}

.pt3_1{
    margin-top: 70px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    z-index: 2;
}
.orange_box6{
  position:absolute;
  z-index: -1;
  margin-block-start: -80px;
  margin-left:65%;
  width: 65px;
  height: 65px;
  background: #ffe976;
  border-radius: 11px;
  box-shadow: 0px 2px 49.5px -19px rgba(0,0,0,0.17);
}
.pt3_2{
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 2;
    > #info {
        display: flex;
        flex-direction: column;
        text-align: center;
        > img {
            width: 150px;
            height: 300px;
        }
    }
}
</style>
