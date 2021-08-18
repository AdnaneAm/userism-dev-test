<template>
  <CarouselContainer :cards="cards"/>
</template>

<script>
 import {cards} from './cards.js'
 import CarouselContainer from './CarouselContainer/CarouselContainer.vue'
  export default {
    name:'HeroSection',
    components: {
      CarouselContainer,
    },
    data() {
      return {
        cards: cards
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>