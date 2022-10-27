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
          <el-row>
            Musepedia是一款面向博物馆的AI导览产品，同时也为博物馆导览提供了多场景解决方案，在参观博物馆时，您可以使用“问答”、“推荐”和“发现”等功能与我们自主研发和设计的Ginkgo系统交互，了解展品详细信息，提升游览体验。
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

      <div class="QA_container">

        <el-main style = "width: 40%;">
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
          <p class="QA_intro">通过在对话框中发送问题，Ginkgo系统会抽取出最佳答案，并针对特定问题给出定制的可视化回答。</p>
        </el-main>
      </div>
    </div>

    <div class="photoShow">
      <div class = "photoShow_phone">
        <div >
          <img src="/assets/home.png" class = "phone">
        </div>
        <div>
          <img src="/assets/qa.png" class = "phone">
        </div>
        <div>
          <img src="/assets/recommendation.png" class = "phone">
        </div>
      </div>
        <el-row style="margin-top: 23px;font-family:'Noto Sans SC', sans-serif;">
          <span style="width:18%;"></span>
          <span style="font-size:18px;">首页</span>
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
                <div style = "width: 40%; margin-right: 10%; margin-top: 50px;">
                    <h1 style = "text-align: right;font-size:2.7em; font-weight: bold;">推荐提问</h1>
                    <p style = "text-align: right; margin-left: 230px;letter-spacing:0.1px;line-height:32px;">Ginkgo系统能给予用户兴趣以及用户当前的提问推荐相关问题，
                        帮助游客更好的了解产品；推荐提问不仅在问答界面中可以获取，
                        在主页中也有推荐，游客可以直接学习
                    </p>
                </div>
                
                <div style = "margin-left: 60px ;max-width: 30%;">
                    <img src="../assets/MapAnswer.png" style="transform: scale(1.2,1.2);border-radius:25px;max-width: 500px;"/>
                </div>
            </div>

            <div class="photoShow">
              <div class = "photoShow_phone">
                <div>
                  <img src="/assets/questionare.png" class = "phone">
                </div>
                <div>
                  <img src="/assets/recommendation.png" class = "phone">
                </div>
                <div>
                  <img src="/assets/user.png" class = "phone">
                </div>
              </div>
              <el-row style="margin-top: 23px;font-family:'Noto Sans SC', sans-serif;">
                <span style="font-size:18px;margin-left:18%;">问卷</span>
                <hr class="divide">
                <span style="font-size:18px;margin:0;">推荐</span>
                <hr class="divide">
                <span style="font-size:18px;">个人</span>
              </el-row>
            </div>
        </div>

        <div class = "pt3">
            
            <div class = "bg2"/>
                <!-- 斜杠 -->
            
            
            <div style="position:absolute;z-index: 3; left: 12%; margin-top: 260px;">
              <img src="../assets/ginkgo1.png" style="width: 95%;height: 95%;border-radius: 20px;"/>
            </div>
            <div style="position:absolute;z-index: 3; left: 34%; margin-top: 250px;">
              <img src="../assets/ginkgo2.png" style="width: 70%;height: 70%;border-radius: 20px;"/>
            </div>
            <div style="position:absolute;z-index: 3; left: 45%; margin-top: 290px;border-radius: 20px;">
              <img src="../assets/ginkgo3.png"/>
            </div>

            <div class = "pt3_1">

                <div class = "textbox">
                    <span style="font-size:30px; font-weight: bold; line-height: 50px;">银杏</span>
                    <br/> 
                    <span>银杏（学名：Ginkgo biloba），落叶乔木，寿命可达3000年以上。又名公孙树、鸭掌树、鸭脚树、鸭脚子等，其裸露的种子称为白果，叶称蒲扇。属裸子植物银杏门惟一现存物种，和它同门的所有其他物种都已灭绝，因此被称为植物界的“活化石”。已发现的化石可以追溯到2.7亿年前。银杏原产于中国，现广泛种植于全世界，并被早期引入人类历史。它有多种用途，可作为传统医学用途和食物。
                    </span>
                </div>

                <div style = "margin-left: 50px; margin-top: 50px;">
                    <h1 style = "text-align: left;font-size:2.7em; font-weight: bold;">发现更多</h1>
                    <p style = "text-align: left; margin-right: 200px; max-width: 300px;line-height:32px;">根据不同⽤户的提问，展示当前热⻔展品及其相关的提问，
                        ⽤户可以点击感兴趣的展品了解详情，并浏览相关的热⻔问题及回答
                    </p>
                </div>

            </div>

            <div class="photoShow">
              <div class = "photoShow_phone">
                <div>
                  <img src="/assets/explore.png" class = "phone">
                </div>
                <div>
                  <img src="/assets/explore-detail.png" class = "phone">
                </div>
                <div>
                  <img src="/assets/explore-question.png" class = "phone">
                </div>
              </div>
              <el-row style="margin-top: 23px;font-family:'Noto Sans SC', sans-serif;">
                <span style="font-size:18px;margin-left:22%;">发现</span>
                <hr class="divide" style="width: 20%">
                <span style="font-size:18px;margin:0;">详情</span>
                <hr class="divide" style="width: 20%">
                <span style="font-size:18px;">相关</span>
              </el-row>
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
.QA_container{
  position: relative;
  margin:90px 10%;
  display: flex;
  flex-direction: row;
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
  margin: 50px 0 100px 0;
  display: flex;
  flex-direction: column;
}
.photoShow_phone{
  // position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 10%;
  padding-right: 10%;
}
.phone{
  max-width: 200px;
}
.divide{
   border: 0;
   width:13.5%; 
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
    transform: skewY(15deg);
    height:370px;
    width: 40%;
    margin-left: 50%;
    margin-top: 200px;
    right: 0px;
}

.bg2{
    position:absolute;
    background: linear-gradient(to right, rgba(255,214,42,0.40) 0%, rgba(255,214,42,0.00) 100%);
    transform: skewY(-15deg);
    height:350px;
    width: 50%;
    margin-right: 50%;
    margin-top: 200px;
    left: 0px;
    z-index: 1;
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

.textbox{
    // position:absolute;
    margin: 50px 5% 0 20%;
    background: #ffffff;
    border-radius: 20px;
    width: 30%;
    height: 220px;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 15px;
    line-height: 25px;
    padding: 10px 20px 0px 20px;
    font-weight: 400;
}
</style>