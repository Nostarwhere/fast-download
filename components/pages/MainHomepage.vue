<template lang="pug">
section
    img(src="@/assets/photos/cover.png", alt="" class="m-auto")
</template>

<script setup>
import { onMounted } from "vue";
import MainLayout from "../templates/MainLayout.vue"


onMounted(MainLayout)
</script>