<template lang="pug">
div(class="self-center")
  button(@click="redirectPage()" class="button rounded-md font-medium text-sm md:mt-0" :class="isDefaultButton ? 'default' : 'outlined'") {{ label }}
</template>
<script>
export default {
  props: {
    label: String,
    isDefaultButton: Boolean,
    tab: String,
    submit: () => {},
  },
  emits: ["redirect", "submit"],
  setup(props, context) {
    const redirectPage = () => {
      context.emit("redirect");
    };
    return { redirectPage };
  },
};
</script>
<style scoped>
.button {
  height: 42px;
  width: 131px;
  /* margin-left: 35px; */
}

.default {
  background-image: linear-gradient(to left, #20bf55 10%, #24b381 90%);
  color: #ffffff;
}

.outlined {
  background-color: #ffffff;
  color: #24b381;
  border: 1px solid #24b381;
}
</style>
