<template>
  <section 
    :style="`background-image:url('${require(`@/assets/images/${showInfos.imageName}`)}')`"
    class="h-screen bg-cover bg-no-repeat bg-center flex items-center"
  >
    <CardInfos @arrow-click="$emit('slide-change',$event)" :name="showInfos.showName" :composers="showInfos.composers"/>
  </section>
</template>

<script>
 import CardInfos from './CardInfos.vue'
  export default {
    components: {
      CardInfos
    },
    props: {
      showInfos: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>