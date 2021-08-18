<template>
  <div class="text-right">
    <div class="bg-white bg-opacity-90 py-6 pl-36 pr-12 text-left mr-auto mb-2">
      <h2 class="text-4xl mb-2">{{name}}</h2>
      <p class="text-xs font-semibold"><span class="text-primary uppercase">Composed by</span> <span class="text-bold underline ml-1">{{composers}}</span></p>
    </div>
    <div>
      <ArrowButton @click="$emit('arrow-click','left')" arrowType="left"/>
      <ArrowButton @click="$emit('arrow-click','right')" arrowType="right"/>
    </div>
  </div>
</template>

<script>
  import ArrowButton from '../ArrowButton.vue'
  export default {
    components: {
      ArrowButton,
    },
    props: {
      name: {
        type: String,
        required: true
      },
      composers:{
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>