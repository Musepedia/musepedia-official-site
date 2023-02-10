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
        <el-col :span="3">
          <a href="https://admin.musepedia.cn" target="_blank"><span class="text">后台管理</span></a>
        </el-col>
    </el-row>

    <!--  切换页面  -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <el-footer>
      <el-row class="info">联系邮箱：mimiter@mimiter.com</el-row>
      <el-row class="info">Copyright © 2022-2023 Mimiter Technology. All rights reserved. 米弥特科技 版权所有 </el-row>
      <el-row class="info"><a href="http://beian.miit.gov.cn" target="_blank">沪ICP备2022030073</a></el-row>
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

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;500;700&display=swap');

.body-class{
  height:100%;
  margin:0;
  padding:0;
}
.container{
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 125.5px;
  background-color: #ffffff;
  text-align: center;
  line-height: 70px;
  font-family: 'Noto Sans SC', sans-serif;
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
a:link {
  color: #000000;
}
a:visited {
  color: #000000;
}
.router-link-active.router-link-exact-active {
  text-decoration: none;
  color:#d1dbe5;
  border-bottom: 2px solid #b38463;
  padding-bottom: 6px;
}
.info{
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 15px;
  text-align: center;
  justify-content: center;
  line-height: 33px;
  margin-top:0.3em;
}
</style>