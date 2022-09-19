<template>
  <div>
    <!--  导航栏  -->
    <nuxt-link to="/">产品介绍</nuxt-link>

    <nuxt-link to="/ginkgo">系统介绍</nuxt-link>
    
    <nuxt-link to="/about">关于我们</nuxt-link>

    <!--  切换页面  -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script>
  import HelloWorld from "./components/HelloWorld";
  import TestPage from "./pages/index";
  export default {
    components: {TestPage, HelloWorld}
  }
</script>