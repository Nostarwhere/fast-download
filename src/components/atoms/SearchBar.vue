<template lang="pug">
form.searchBar
    input(type="text", placeholder="Search Here")
    img(src="../../assets/photos/search.png", alt="")
</template>

<style scoped>
.searchBar {
    position: relative;
}
.searchBar input {
    border: solid #c6baf8 1px;
    border-radius: 4px;
    min-width: 700px;
    height: 40px;
    padding: 0px 10px;
    margin: 0 35px;

}
.searchBar img {
    position: absolute;
    top: 14px;
    right: 50px;
}
</style>
