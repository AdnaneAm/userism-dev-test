<template>
  <div class="card-carousel">
    <CarouselCard
      :key="currentElement.showName"
      class="current-element"
      :showInfos="currentElement"
      @slideChange="handleSlideChange($event)"
    />
    <Indicators
      :elements="this.cards"
      :currentElementIndex="this.currentElementIndex"
      :showElement="this.showElement"
    />
  </div>
</template>

<script>
  import CarouselCard from "./CarouselCard/CarouselCard.vue";
  import Indicators from "./Indicators.vue";
export default {
  name: "Carousel",
  props: { cards: Array },
  components: { CarouselCard, Indicators },
  data() {
    return {
      currentElementIndex: 0
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    }
  },
  methods: {
    showNextElement() {
      if(this.currentElementIndex < this.cards.length-1) this.currentElementIndex++;
    },
    showPrevElement() {
      if(this.currentElementIndex > 0) this.currentElementIndex--;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    },
    handleSlideChange(direction){
      direction == 'left' ? this.showPrevElement():this.showNextElement();
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>