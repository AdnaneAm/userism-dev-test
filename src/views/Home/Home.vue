<template>
  <div>
    <HeroSection />
    <AboutSection />
  </div>
</template>

<script>
  import HeroSection from './components/HeroSection/HeroSection.vue'
  import AboutSection from './components/AboutSection/AboutSection.vue'
  export default {
    components: {
      HeroSection, AboutSection
    },
  }
</script>

<style lang="scss" scoped>

</style>