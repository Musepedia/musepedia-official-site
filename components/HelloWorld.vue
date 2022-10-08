<template>
    <div>
      <el-row class="textbox1">
        <h1 style="margin-left:0.3em;">Hello, <img src="/assets/M1.png" width="28" style="vertical-align: middle"/> Musepedia</h1>
      </el-row>

      <el-row class="textbox1">
        <h1 style="margin-left:0.3em;">Hello, <img src="/assets/Ginkgo.png" width="108" style="vertical-align: middle"/> </h1>
      </el-row>

      <el-row class="textbox2">
      </el-row>
      <el-row class="textbox2">
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
  flex:0 0 510px;
  width:  510px;
  height: auto;
  background-color: #d9d9d9;
  margin-bottom:1.5em;
}
.textbox2{
  flex:0 0 250px;
  width:  250px;
  height: 1.5em;
  background-color: #d9d9d9;
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