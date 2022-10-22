<template>
    <div>
        <div class="intro-background">
            <img src="/assets/Ginkgo.png" class="logo"/>
            <div class="intro-text">Ginkgo系统是我们为博物馆导览自主研发和设计的多场景端到端解决方案，能为Musepedia提供导览服务的同时，也为博物馆提供数据分析的技术支持。</div>
        </div>

        <ArchitectureDetail 
        title="Ginkgo是如何获取回答的" 
        text="Ginkgo基于人工智能算法自动分析用户的问题，由经过特别优化的深度学习模型从候选文本中准确地抽取出回答。所有的候选文本均来自入驻Musepedia的博物馆在注册展品时上传的资料，因此所有回答均是可信的。" 
        fig="/assets/qa_architecture.svg" />
    </div>
</template>

<script>
    import ArchitectureDetail from "../components/ArchitectureDetail.vue";

    export default {
        name: "ginkgo",
        components: {
            ArchitectureDetail
        }
    }
</script>

<style scoped>
.intro-background {
    background: linear-gradient(270deg,#ff6839 0%, rgba(255,234,40,0.70) 100%);
    height: 392.5px;
}
.logo {
    width: 200px;
    position: relative;
    margin-top: 50px;
    margin-left: 20%;
}
.intro-text {
    font-size: 18px;
    margin-top: 20px;
    margin-left: 20%;
    margin-right: 50%;
}
</style>