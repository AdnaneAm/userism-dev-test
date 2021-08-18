<template>
  <section id="about-section" class="py-12">
    <div class="container mx-auto text-center">
      <!-- About us TOP section-->
      <div class="bg-white relative lg:bottom-52 px-12 pb-24 lg:p-24 lg:pb-0 mx-16">
        <h1 class="text-6xl mb-24">
          We are an elite group of 
          <strong>film</strong> and 
          <strong>tv composers</strong>
        </h1>
        <h2 class="text-2xl uppercase tracking-widest">For clients like these</h2>
        <svg class="mx-auto w-12 h-12 mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/></svg>
      </div>
      <!-- Clients gallery -->
      <ClientsGallery />
    </div>
  </section>
</template>

<script>
  import ClientsGallery from './ClientsGallery/ClientsGallery.vue'
  export default {
    name:'AboutSection',
    components: {
      ClientsGallery,
    },
  }
</script>

<style lang="scss" scoped>
</style>