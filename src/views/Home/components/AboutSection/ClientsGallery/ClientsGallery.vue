<template>
  <div class="flex flex-wrap justify-center gap-12 lg:relative lg:bottom-24">
    <ClientCard v-for="client in clients" :key="client.name" :client="client" />
  </div>
  <button @click="galleryOpen = !galleryOpen" class="lg:relative lg:bottom-24 text-primary uppercase tracking-widest text-2xl border-b-2 border-primary mt-12 mx-auto">
    {{galleryOpen ? 'See less':'See All'}}
  </button>
</template>

<script>
 import {clients} from './clients.js'
 import ClientCard from './ClientCard.vue'
  export default {
    name:'ClientsGallery',
    components: {
      ClientCard,
    },
    data() {
      return {
        galleryOpen: false
      }
    },
    computed: {
      clients() {
        return this.galleryOpen ? clients:clients.slice(0,6)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>