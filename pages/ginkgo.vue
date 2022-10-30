<template>
    <div>
        <div class="intro-background">
            <div class="left">
                <img src="/assets/Ginkgo.png" class="logo"/>
                <div class="intro-text">&emsp;&emsp;Ginkgo系统是我们为博物馆导览自主研发和设计的多场景端到端解决方案，能为Musepedia提供导览服务的同时，也为博物馆提供数据分析的技术支持。</div>
            </div>
            <img src="/assets/DataAnalysis.png" class="background-figure right"/>
        </div>

        <ArchitectureDetail 
        title="Ginkgo是如何获取回答的" 
        text="Ginkgo系统基于人工智能算法自动分析用户的问题，由经过特别优化的深度学习模型从候选文本中准确地抽取出回答。所有的候选文本均来自入驻Musepedia的博物馆在注册展品时上传的资料，因此所有回答均是可信的。" 
        :fig="qa" />

        <ArchitectureDetail 
        title="Ginkgo是如何推荐的" 
        text="Ginkgo系统特有的推荐算法基于用户的兴趣与行为，在参观过程中不仅会帮助用户更好地了解展品的信息，还会为游客补上在参观过程中错过的展品，提供一个更加完整的参观体验。" 
        :fig="recommendation" />
    </div>
</template>

<script>
    import ArchitectureDetail from "../components/ArchitectureDetail.vue";
    import qa from "../assets/QAArchitecture.png";
    import recommendation from "../assets/RecommendationArchitecture.png";

    export default {
        name: "ginkgo",
        components: {
            ArchitectureDetail
        },
        data() {
            return {
                qa: qa,
                recommendation: recommendation,
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;500;700&display=swap');
.intro-background {
    background: linear-gradient(270deg,#ff6839 0%, rgba(255,234,40,0.70) 100%);
    min-height: 392.5px;
    font-family: 'Noto Sans SC', sans-serif;
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
    line-height: 180%;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 30%;
    margin-right: 10%;
}
</style>