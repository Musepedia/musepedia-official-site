<template>
  <div class="all">
    <div class="intro">
      <div class="orange_box1"/>
      <div class="orange_box2"/>
      <div class="orange_box3"/>
      <div class="small_box" style="background:#fff426; top:170px; left: 85px;"/>
      <div class="small_box" style="background:#ff3d00; top:150px; right: 75px;"/>
      <div class="small_box" style="background:#ff3d00; bottom:150px; left: 415px;"/>
      <el-container >
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

  </div>
</template>

<script>
    export default {
        name: "solution"    
    }
</script>

<style scoped>
.all{
  position: relative;
  width:100%;
  height:2808.5px;
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
  margin-left:150px;
  margin-right:150px;
  margin-top:200.5px;
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
</style>
