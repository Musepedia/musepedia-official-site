<template>
    <div class="all">
      <el-container >
        <el-main class="main" style="padding-left:0;">
          <HelloWorld />
        </el-main>
        <el-main class="aside">
          <img src="/assets/ReadingPeople.png" class="bgphoto"/>
        </el-main>
      </el-container>
      <el-footer>
        <el-row class="info">邮箱：</el-row>
        <el-row class="info">版权所有 © 2021-2022 AbstractMGS。 </el-row>
        <el-row class="info">沪ICP备2020032822号-2</el-row>
      </el-footer>
    </div>
</template>

<script>
    import HelloWorld from "../components/HelloWorld";
    export default {
        name: "index",
        components: {HelloWorld},
        
      created() {
        if (typeof window !== 'undefined') {
          var percentageOn1 = (window.screen.width / 1920)*100;
          document.body.style.zoom = percentageOn1+'%';
        }
      }
    };

    
</script>

<style scoped>
.all{
  margin-left:0;
  margin-right:0;
  background:linear-gradient(0deg,rgba(255,104,57,0.26) 0%, rgba(255,104,57,0.00) 100%);
  width:100%;
  height:auto;
}
.el-container{
  margin-left:125.5px;
  margin-right:125.5px;
}
.main{
  margin-top: 77px;
}
.aside{
  margin-top:77px;
}
.bgphoto{
  display: flex;
  margin-top: 45px;
  margin-bottom: 0;
  margin-left: 30px;
  width:400px;
  height:466px;
  float:right;
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