<template>
  <div>
    <!--  导航栏  -->
    <el-row  class="container" >
        <el-col :span="2" style="text-align:left;">
          <nuxt-link to="/">
            <img src="/assets/M2.png" width="50"  style="vertical-align:middle;" title="MGS"/>
          </nuxt-link>
        </el-col>
        <el-col :span="3">
          <nuxt-link to="/solution"><span class="text">产品介绍</span></nuxt-link>
        </el-col>
        <el-col :span="3">
          <nuxt-link to="/ginkgo"><span class="text">系统介绍</span></nuxt-link>
        </el-col>
        <el-col :span="3">
          <nuxt-link to="/about"><span class="text">关于我们</span></nuxt-link>
        </el-col>
    </el-row>

    <!--  切换页面  -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <el-footer>
      <el-row class="info">邮箱：</el-row>
      <el-row class="info">版权所有 © 2021-2022 AbstractMGS。 </el-row>
      <el-row class="info">沪ICP备2020032822号-2</el-row>
    </el-footer>
  </div>
</template>


<script>
  import HelloWorld from "./components/HelloWorld";
  import TestPage from "./pages/index";
  export default {
    components: {TestPage, HelloWorld},
    
    created() {
        if (typeof window !== 'undefined') {
          var percentageOn1 = (window.screen.width / 1920)*100;
          document.body.style.zoom = percentageOn1+'%';
        }
    }
    
  }
</script>

<style scoped lang="scss">
.body-class{
  height:100%;
  margin:0;
  padding:0;
}
.container{
  position: relative;
  margin-top: 30px;
  margin-left: 125.5px;
  background-color: #ffffff;
  text-align: center;
  line-height: 70px;
  &:last-child {
      margin-bottom: 0;
    }
}
.el-footer{
  width:100%;
  background-color: #fff1ed;
  height: auto;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
    .text{
      font-size: 17px;
      font-family: 'PingFang SC';
      font-weight: 400;
      text-align: center;
      color: #000000;
  }
}
.router-link-active.router-link-exact-active {
  text-decoration: none;
  color:#d1dbe5;
  border-bottom: 2px solid #b38463;
  padding-bottom: 6px;
}
.info{
  font-family: 'PingFang SC';
  text-align: center;
  justify-content: center;
  line-height: 33px;
  margin-top:0.3em;
}
</style>