<template>
<nav class="w-full absolute top-0 mx-0 lg:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 mt-6 flex items-center justify-between flex-wrap p-4">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img class="w-30 ml-4" :src="require('@/assets/icons/logo.svg')" alt="Logo">
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center" @click="hiddenMenu = !hiddenMenu">
      <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></svg>
    </button>
  </div>
  <div  :class="{hidden:hiddenMenu, 'w-full':true, 'block':true, 'flex-grow':true, 'lg:flex':true, 'lg:items-center':true, 'lg:w-auto':true}">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-4 py-1 border-b-2 border-black  mr-6">
        About
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-4 py-1 border-b-2 border-black  mr-6">
        Composers
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-4 py-1 border-b-2 border-black  mr-6">
        Shows
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-4 py-1 border-b-2 border-black  mr-6">
        Clients
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-4 py-1 border-b-2 border-black  mr-6">
        News
      </a>
    </div>
    <div>
      <a href="#" class="">Contact us</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hiddenMenu: true
    }
  }
}
</script>

<style lang="scss">

</style>