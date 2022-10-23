<template>
    <div>
      <el-row class="textbox1">
        <h1 style="margin-left:0.3em;"> <img src="/assets/M1.png" width="48" style="vertical-align: middle"/> Musepedia</h1>
      </el-row>

      <el-row class="textbox2">
        Musepedia是一款面向博物馆的AI导览产品，同时也为博物馆导览提供了多场景解决方案，在参观博物馆时，您可以使用“问答”、“推荐”和“发现”等功能与我们自主研发和设计的Ginkgo系统交互，了解展品详细信息，提升游览体验。
      </el-row>

      <el-row>
      <nuxt-link to="/about" style="text-decoration: none;">
      <el-button round>关于我们</el-button>
      </nuxt-link>
      </el-row>

    </div>
</template>

<script>
    export default {
        name: "HelloWorld"
    }
</script>

<style scoped lang="scss">
.textbox1{
  font-size: 28px;
  flex:0 0 510px;
  width:  510px;
  height: auto;
  margin-bottom:1.5em;
}
.textbox2{
  flex:0 0 250px;
  width:  250px;
  height: 1.5em;
  margin-bottom:1.5em;
}
.el-button.is-round {
  border-radius: 94.5px;
  width:160px;
  height:50px;
  border: 2.5px solid #ff6839;
  background: none;

  color: #ff6839;
  text-align: center;
  font-family: 'PingFangSC';
  font-size:1.3em;
  font-weight: 500;
  letter-spacing: 0.18em;

  margin-top: 50px;
  
}
</style>