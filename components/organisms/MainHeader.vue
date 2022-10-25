<template lang="pug">
header(class="flex justify-start items-center")
    div
        a(class="logo-holder" href="/")
            img(src="@/assets/logo/logo.png",  alt="logo")
    div(class="menu")
        SearchBarVue(class="m-auto flex justify-center items-center ")
    div(class="button flex")
        SubmitButton(label="Đăng ký" isDefaultButton=false class="mr-9") 
        SubmitButton(label="Đăng nhập" isDefaultButton=true)
section(class="header-menu px-[5%]")
    AtomMenu(class="flex justify-center items-center font-medium")
</template>

<script setup>
import { onMounted } from 'vue';
import SearchBarVue from '../atoms/SearchBar.vue';
import SubmitButton from '../atoms/SubmitButton.vue';
import AtomMenu from '../atoms/AtomMenu.vue';


onMounted(
    SearchBarVue,
    SubmitButton,
    AtomMenu
)
</script>

<style scoped>
header {
    background-image: url('@/assets/photos/header-bg.png');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>