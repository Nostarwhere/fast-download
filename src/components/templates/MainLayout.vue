<template lang="pug">
MainHeaderVue
router-view(class="container") 
MainFooterVue 
</template>
  
<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainHeaderVue from '../organisms/MainHeader.vue';
import MainFooterVue from '../organisms/MainFooter.vue';

export default {
    name: 'MainLayout',
    components: {
        MainHeaderVue,
        MainFooterVue
    }
}
</script>
  
<style>
#app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
:root {
    --main-color: #222222;
    --max-width: 1523px;
    --font-size-title: 46px;
    --font-size-title-second: 36px;
    --font-size-title-mb: 26px;
    --font-size-title-second-mb: 18px;
}
.container {
    max-width: var(--max-width);
    padding: 0 25px;
    margin: 0 auto;
}
</style>