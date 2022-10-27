<template>
    <div>
        <div class="intro-background">
            <div class="left">
                <img src="/assets/Ginkgo.png" class="logo"/>
                <div class="intro-text">Ginkgo系统是我们为博物馆导览自主研发和设计的多场景端到端解决方案，能为Musepedia提供导览服务的同时，也为博物馆提供数据分析的技术支持。</div>
            </div>
            <img src="/assets/DataAnalysis.png" class="background-figure right"/>
        </div>

        <ArchitectureDetail 
        title="Ginkgo是如何获取回答的" 
        text="Ginkgo基于人工智能算法自动分析用户的问题，由经过特别优化的深度学习模型从候选文本中准确地抽取出回答。所有的候选文本均来自入驻Musepedia的博物馆在注册展品时上传的资料，因此所有回答均是可信的。" 
        :fig="qa" />
    </div>
</template>

<script>
    import ArchitectureDetail from "../components/ArchitectureDetail.vue";
    import qa from "../assets/QAArchitecture.png";

    export default {
        name: "ginkgo",
        components: {
            ArchitectureDetail
        },
        data() {
            return {
                qa: qa
            }
        }
    }
</script>

<style scoped>
.intro-background {
    background: linear-gradient(270deg,#ff6839 0%, rgba(255,234,40,0.70) 100%);
    min-height: 392.5px;
}
.left {
    position: absolute;
    left: 0px;
    width: 50%;
}
.right {
    position: absolute;
    right: 0px;
    width: 50%;
}
.logo {
    width: 200px;
    position: relative;
    margin-top: 50px;
    margin-left: 30%;
}
.background-figure {
    max-height: 380px;
    max-width: 380px;
    margin-top: 30px;
    margin-right: 20%;
    align-content: center;
}
.intro-text {
    font-family: 'PingFang SC';
    line-height: 33px;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 30%;
    margin-right: 10%;
}
</style>