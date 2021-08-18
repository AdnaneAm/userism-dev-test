<template>
  <button :class="{'py-4':true, 'px-6':true, 'bg-white':true, 'bg-opacity-90':true, 'ml-2':arrowType=='right'}">
    <img
      class="icon"
      :src="require(`@/assets/icons/arrow_${arrowType}.svg`)"
      :alt="arrowType + ' arrow'"
    >
  </button>
</template>
<script>
export default {
  name: "ArrowButton",
  props: { arrowType: String }
};
</script>

<style lang="scss" scoped>
</style>