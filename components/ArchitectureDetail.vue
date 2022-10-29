<template>
    <div>
        <div class="detail-title">{{ title }}</div>
        <div class="detail-text">{{ text }}</div>
        <img :src="`${fig}`" class="detail-fig" />
    </div>
</template>

<script>
    export default {
        name: "ArchitectureDetail",
        props: [
            "title",
            "text",
            "fig"
        ]
    }
</script>

<style scoped>
.detail-title {
    font-family: 'PingFang SC';
    text-align: center;
    margin-top: 40px;
    font-size: 22px;
    font-weight: bold;
}
.detail-text {
    font-family: 'PingFang SC';
    line-height: 180%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 20px;
    font-size: 1em;
}
.detail-fig {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    max-width: 50%;
}
</style>