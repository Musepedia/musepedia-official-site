<template>
    <div class = "container">
        
        <div class = "pt3">

            <div class = "bg1">
                <!-- 斜杠 -->
            </div>

            <div class = "pt3_1">
                <div style = "width: 45%; margin-right: 50px; margin-top: 50px;">
                    <h1 style = "text-align: right;">推荐提问</h1>
                    <p style = "text-align: right; margin-left: 300px">Ginkgo系统能给予用户兴趣以及用户当前的提问推荐相关问题，
                        帮助游客更好的了解产品；推荐提问不仅在问答界面中可以获取，
                        在主页中也有推荐，游客可以直接学习
                    </p>
                </div>
                <div style = "margin-left: 50px">
                    <img src="../assets/tmp1.png"/>
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
                    <p style = "text-align: left; margin-right: 200px; max-width: 300px;">根据不同⽤户的提问，展示当前热⻔展品及其相关的提问，
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
</template>

<script>
    export default {
        name: "solution"    
    }
</script>

<style scoped lang = "scss">

//导入字体
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;500;700&display=swap');

.container{
    height: auto;
    background-color: #fff1ed;
    font-family: 'Noto Sans SC', sans-serif;
}

.bg1{
    position:absolute;
    z-index: 1;
    background: linear-gradient(to left, rgba(255,214,42,0.40) 0%, rgba(255,214,42,0.00) 100%);
    transform: skewY(20deg);
    height:350px;
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
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    z-index: 2;
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
