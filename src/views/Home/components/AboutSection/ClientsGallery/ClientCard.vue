<template>
  <div 
    :style="`background-image:url('${require(`@/assets/images/clients/${client.imageName}`)}')`"
    class="w-52 h-32 bg-cover bg-no-repeat bg-center mb-2 border-2 border-gray hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"> 
  </div>
</template>

<script>
  export default {
    name:'ClientCard',
    props: {
      client: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>