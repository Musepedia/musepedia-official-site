<template>
  <div class="all">
    <div style = "position: absolute; left: -20%; z-index: 2;">
        <img src = "../assets/solutionTitle.png" style = "width: 100%"/>
    </div>
    <div class="intro">
      <div class="orange_box1"/>
      <div class="orange_box2"/>
      <div class="orange_box3"/>
      <div class="small_box" style="background:#fff426; top:170px; left: 85px;"/>
      <div class="small_box" style="background:#ff3d00; top:150px; right: 75px;"/>
      <div class="small_box" style="background:#f1502e; bottom:150px; left: 415px;"/>

      <el-container style = "margin-top: 10%;">
        <div style = "margin-top: 15px; line-height: 180%; text-align: left; font-size: 1.2em; width: 40%; height: auto; color: #ffffff">
            <p>&emsp;&emsp;Musepedia是一款面向博物馆的AI导览产品，同时也为博物馆导览提供了多场景解决方案，
              在参观博物馆时，游客可以使用“问答”、“推荐”和“发现”等功能与我们自主研发和设计的Ginkgo系统交互，
              了解展品详细信息，提升游览体验。</p>
            <p>&emsp;&emsp;Musepedia还为馆方提供基于Ginkgo系统的数据分析技术支持，在热门展品及热点问题发掘、展品资料设置、用户画像构建与特展设计等方面提供有大数据支撑的指导建议。</p>
            <p>&emsp;&emsp;Musepedia同时也为馆方提供建设文创产品设计——推广体系的服务，包括从打造具有博物馆特色的文创IP，到定制化设计产品，再到文创产品的最终交付与基于Ginkgo系统推广的全部环节。</p>
        </div>
      </el-container>
    </div>

    <div class="QA">

      <div class="yellow_box1"/>

      <div class="QA_container">
        <div class = "QA_content">
          <div style = "margin:10px 0;">
            <span class = "ask">
              狼和狗有什么关系
            </span>
          </div>
          <div style = " margin:10px 0;">
            <img src="/assets/M2.png" class = "M2" style = "vertical-align: middle;"/>
            <span class = "answer" style = "vertical-align: middle;">
              在生物学上与狗为同一种类
            </span>
          </div>
          <div style = "margin:10px 0;">
            <span class = "ask">
              大白鲨长什么样
            </span>
          </div>
          <div style = "margin:10px 0; vertical-align: top;">
            <img src="/assets/M2.png" class = "M2" style = "vertical-align: top;"/>  
            <img src="/assets/WhiteShark.png" style = "width: 80%;"/>
          </div>
        </div>

        <el-main class = "example">  
          <span class="QA_title">问答</span>
          <p class="QA_intro">通过在对话框中发送问题,Ginkgo系统会抽取出最佳答案,并针对特定问题给出定制的可视化回答。</p>
        </el-main>
      </div>
    </div>

    <div class="photoShow">
      <div class = "photoShow_phone">
          <img src="/assets/home.png" class = "phone">
          <img src="/assets/qa.png" class = "phone">
          <img src="/assets/recommendation.png" class = "phone">
      </div>
      <el-row style="margin-top: 23px;">
        <span style="width:18%;"></span>
        <span style="font-size:1.3em;">首页</span>
        <hr class="divide">
        <span style="font-size:1.3em;">提问</span>
        <hr class="divide">
        <span style="font-size:1.3em;">详情</span>
      </el-row>
    </div>
  
    <div class = "p3container">
        
        <div class = "pt3">
          
          <div class = "bg1">
            <!-- 斜杠 -->
          </div>
            
            <div class = "pt3_1">
              
                <div style = "width: 40%; margin-right: 10%; margin-top: 50px;">
                    <span class="QA_title" style = "text-align: right; margin-bottom: 50px; margin-top: 150px;">推荐</span>
                    <p style = "text-align: right; margin-left: 230px;letter-spacing:0.1px;line-height:200%; font-size: 1.2em">Ginkgo系统会结合用户兴趣与当前的提问等因素推荐相关问题，
                        帮助游客更好地了解展品。除此之外，Ginkgo系统会结合用户兴趣与当前位置等因素，在合适的时间推荐接下来建议前往的展区，帮助游客更好地规划游览路线。
                    </p>
                </div>
                
                <div style = "margin-left: 60px ;max-width: 30%;">
                    <img src="../assets/MapAnswer.png" style="transform: scale(1.2,1.2);border-radius:25px;max-width: 500px;"/>
                </div>
            </div>

            <div class="photoShow">
              <div class = "photoShow_phone">
                  <img src="/assets/questionare.png" class = "phone">
                  <img src="/assets/recommendation.png" class = "phone">
                  <img src="/assets/user.png" class = "phone">
              </div>
              <el-row style="margin-top: 23px;">
                <span style="width:18%;"></span>
                <span style="font-size:1.3em;">问卷</span>
                <hr class="divide">
                <span style="font-size:1.3em;">推荐</span>
                <hr class="divide">
                <span style="font-size:1.3em;">个人</span>
              </el-row>
            </div>
        </div>

        <div class = "pt3">
            
            <div class = "bg2">
                <!-- 斜杠 -->
            </div>

            <div class = "pt3_1">

                <div class = "textbox">
                    <span style="font-size:2em; font-weight: 700; line-height: 50px;">银杏</span>
                    <br/> 
                    <span>&emsp;银杏（学名：Ginkgo biloba），落叶乔木，寿命可达3000年以上。又名公孙树、鸭掌树、鸭脚树、鸭脚子等，其裸露的种子称为白果，叶称蒲扇。
                      属裸子植物银杏门惟一现存物种，和它同门的所有其他物种都已灭绝，因此被称为植物界的“活化石”。
                      已发现的化石可以追溯到2.7亿年前。银杏原产于中国，现广泛种植于全世界，并被早期引入人类历史。它有多种用途，可作为传统医学用途和食物。
                    </span>

                    <div style="position:absolute;z-index: 3; left: 10%; margin-top: 10px;">
                      <img src="../assets/ginkgo1.png" style="width: 95%;height: 95%;border-radius: 20px;"/>
                    </div>
                    <div style="position:absolute;z-index: 3; left: 31%; margin-top: 0px">
                      <img src="../assets/ginkgo2.png" style="width: 70%;height: 70%;border-radius: 20px;"/>
                    </div>
                    <div style="position:absolute;z-index: 3; left: 41%; margin-top: 30px;">
                      <img src="../assets/ginkgo3.png" style = "border-radius: 20px;"/>
                    </div>

                </div>

                <div style = "margin: 50px 10% 50px 5%;">
                    <span class="QA_title" style = "text-align: left; margin-bottom: 50px; margin-top: 100px;">发现</span>
                    <p style = "text-align: left;line-height:200%; font-size: 1.2em;">
                      根据不同⽤户的提问，展示当前热⻔展品及其相关的提问，⽤户可以点击展品了解详情，并浏览相关的热⻔问题及回答，从而更深入地了解感兴趣的展品。
                    </p>
                </div>

            </div>

            <div class="photoShow">
              <div class = "photoShow_phone">
                  <img src="/assets/explore.png" class = "phone">
                  <img src="/assets/explore-detail.png" class = "phone">
                  <img src="/assets/explore-question.png" class = "phone">
              </div>
              <el-row style="margin-top: 23px;">
                <span style="width:18%;"></span>
                <span style="font-size:1.3em;">发现</span>
                <hr class="divide">
                <span style="font-size:1.3em;">详情</span>
                <hr class="divide">
                <span style="font-size:1.3em;">相关</span>
              </el-row>
            </div>

        </div>

        <div class = "pt3">
          
          <div class = "bg1">
            <!-- 斜杠 -->
          </div>
            
            <div class = "pt3_1">
                <div style = "width: 40%; margin-right: 10%; margin-top: 50px;">
                    <span class="QA_title" style = "text-align: right; margin-bottom: 50px; margin-top: 60px;">
                      <span class="beta-badge" style="">Beta</span>数据分析
                    </span>
                    <p style = "text-align: right; margin-left: 230px;letter-spacing:0.1px;line-height:200%; font-size: 1.2em">
                      Ginkgo系统会记录并分析用户的产品使用行为，从“用户”、“展品”与“推广”等多个维度，为博物馆在构建用户画像，发掘热门展品，改进部分展品的资料设置等方面提供指导建议。Ginkgo系统的数据分析技术能助力博物馆更好地了解游客需求，从而提升游客的游览体验。
                    </p>
                </div>
                
                <div style = "margin-left: 60px ;max-width: 30%;">
                    <img src="/assets/data-analysis.png" style="transform: scale(1.3);border-radius:25px;max-width: 500px;"/>
                </div>
            </div>
        </div>

        <div class = "pt3">
            
            <div class = "bg2">
                <!-- 斜杠 -->
            </div>

            <div class = "pt3_1" style="margin-left: 20%">

                <div style="margin-right: 60px; max-width: 30%">
                  <img src="/assets/creative-product.png" style="transform: scale(1.2);border-radius:25px;max-width: 500px;"/>
                </div>

                <div style = "margin: 50px 10% 0 10%;">
                    <span class="QA_title" style = "text-align: left; margin-bottom: 50px; margin-top: 60px; margin-right: 100px">
                      文创产品设计——推广<span class="beta-badge">Beta</span>
                    </span>
                    <p style = "text-align: left;line-height:200%; font-size: 1.2em;">
                      Musepedia为博物馆提供构建文创产品设计——推广体系的服务，从文创IP的诞生，到文创产品的交付，Musepedia团队把关全流程的每一个环节，为博物馆打造具有特色的文创产品。除此之外，Ginkgo系统能基于推荐算法，按不同策略向用户推广博物馆与文创产品。
                    </p>
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
  font-family: 'Noto Sans SC', sans-serif;
}
.intro{
  position: relative;
  width:100%;
  height:900px;
  background: #f27853;
  clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 100%);
  z-index: 1;
}
.orange_box1{
  z-index: -1;
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
  background: linear-gradient(0deg, #f28141, rgba(255,142,38,0.00) 100%);
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
  background: linear-gradient(180deg,#fbd43d, rgba(255,246,38,0.00) 100%);
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
  height: auto;
  margin-bottom: 300px;
  margin-top: 300px;
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
  margin:90px 0;
  display: flex;
  flex-direction: row;
}
.QA_content{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 10%;
  margin-right: 5%;
}
.M2{
  background: #ffffff;
  width: 10%;
  border-radius:50%;
  box-shadow: 0px 2px 23px -11.5px #000000;
  margin-right: 3%;
}
.ask{
  background-color: #ff6839;
  border-radius: 29.5px;
  color: #ffffff;
  // margin-inline-end: 20px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  width: fit-content;
  font-weight: bold;
  font-size: 1.3em;  
  padding-inline-start: 10px;
  padding-inline-end: 10px;
  float: right;
}
.answer{
  background-color: #ffffff;
  border-radius: 29.5px;
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;  
  padding-inline-start: 20px;
  height: 40px;
  line-height: 40px;
  width: fit-content;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  // display: inline-block;
}
.QA_title{
  position:relative;
  display: block;
  font-size: 3em;
  font-weight: bold;
  padding: 0;
  margin-top: 190px;
}
.QA_intro{
  position: absolute;
  margin-top: 40px;
  inline-size: 44%;
  line-height: 200%;
  font-size: 1.2em;
  font-weight: 500;
  font-family: 'Noto Sans SC', sans-serif;
  letter-spacing: 0.1px;
  word-wrap: break-word;
  padding-right: 10%;
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
  padding-left: 5%;
  padding-right: 5%;
}
.phone{
  width: 20%;
  height: 20%;
}
.divide{
   border: 0;
   width:24%; 
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
    width: 70%;
    height: fit-content + 20px;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 1em;
    padding: 10px 20px 0px 20px;
    font-weight: 200;
    line-height: 180%;
}
.beta-badge {
  background-color: #ff6839;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 17px;
  width: 60px;
  font-size: 15px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>