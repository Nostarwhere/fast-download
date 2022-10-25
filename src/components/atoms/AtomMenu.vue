<template lang="pug">
ul(:class="{'flex': isHeader}" class="md:flex-nowrap flex-wrap")
    li( v-for="menu in menus" :key="menu.id" :class="{'mx-9': isHeader , 'activePage' : Page.substring(1) == menu.textpath }" class="w-full lg-w-auto my-4") 
        router-link(class="link"  :to="{path:menu.path}") {{ menu.text }} 
</template>

<script>
export default {
    data() {
        return {
            Page: this.$route.path,
        }
    },
    props: {
        isHeader: Boolean,
        marginX: String
    },
    setup() {
        let id = 0;
        const menus = [
            { id: id++, text: 'Home', path: '/' , textpath: '' },
            { id: id++, text: 'About', path: 'About' ,textpath: 'About' },
            { id: id++, text: 'Blog', path: 'blog', textpath: 'blog' },
            { id: id++, text: 'Product', path: 'Product', textpath: 'Product' },
        ];

        // expose to template and other options API hooks
        return {
            menus
        }
    },
}
</script>

<style>
.header-atom .activePage{
    color:var(--second-color);
    position:relative;
}
.header-atom .activePage::after{
    content:"";
    width: 8px;
    height:8px;
    position: absolute;
    background-color: var(--second-color);
    bottom: -10px;
    left: 50% ;
    transform: translateX(-50%);
    border-radius: 100px;
}
@media (max-width: 768px){
#navbar-default{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    background-color:white;
    z-index:40;
    text-align: center;
}
}
</style>