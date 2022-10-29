<template>
    <div class="bg">
      <div class = "container">
        <div class = "left">
          <div style = "align-items: center;">
            <img src = "../assets/M1.png" style = "width:35px;"/>
            <span style = "margin-left: 5%; font-size:2.5em; font-weight: 700;">Musepedia</span>
          </div>

          <div style = "margin-top: 100px; line-height: 180%; text-align: left; font-size: 1.2em;">
            <p>&emsp;&emsp;Musepedia是一款面向博物馆的AI导览产品，同时也为博物馆导览提供了多场景解决方案，
              在参观博物馆时，您可以使用“问答”、“推荐”和“发现”等功能与我们自主研发和设计的Ginkgo系统交互，
              了解展品详细信息，提升游览体验。</p>
          </div>

          <div style = "cursor: pointer; margin-top: 150px; margin-bottom: 300px;
                width: fit-content; padding-block-start: 20px; padding-block-end: 20px;">
            <NuxtLink to="/about">
              <button class = "button">关于我们</button>
            </NuxtLink>
          </div>
        </div>
        
        <div style = "width: 50%; margin-right: 5%;">
          <img src = "../assets/ReadingPeople.png" style = "width: 100%;"/>
        </div>
      </div>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;500;700&display=swap');

.bg{
  background:linear-gradient(0deg,rgba(255,104,57,0.26) 0%, rgba(255,104,57,0.00) 100%);
  width:100%;
  height:auto;
}
.container{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left{
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 200px;
  font-family: 'Noto Sans SC', sans-serif;
  width: 50%;
  margin-right: 5%;
  /* text-align: center; */
}
.button{
  border-radius: 94.5px;
  width:160px;
  height:50px;
  border: 2.5px solid #ff6839;
  background: none;
  color: #ff6839;
  text-align: center;
  font-size:1.3em;
  font-weight: 500;
  letter-spacing: 0.18em;
  z-index: 0;
}
.main{
  margin-top: 77px;
}
.aside{
  margin-top:77px;
}
.aside.bgphoto{
  margin-top: 45px;
  margin-bottom: 0;
  margin-left: 30px;
  width:auto;
  height:auto;
  float:right;
  transform: scale(0.75,0.75);
}
.el-footer{
  width:100%;
  background-color: #fff1ed;
  height: auto;
}
.info{
  font-family: 'PingFang SC';
  text-align: center;
  justify-content: center;
  line-height: 33px;
  margin-top:0.3em;
}
</style>