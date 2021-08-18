<template>
  <footer id="footer" class="bg-gray h-full">
    <div class="flex flex-col lg:flex-row flex-wrap items-center container mx-auto py-8">
      <!-- Footer top -->
      <div class="flex-1 w-full flex justify-center lg:justify-start mb-4">
         <img class="w-30 ml-4" :src="require('@/assets/icons/logo_footer.svg')" alt="Logo">
      </div>
      <ul class="flex flex-wrap flex-col my-6 lg:flex-row">
        <li class="flex-auto mb-4 lg:mr-8">
          <a class="text-xl font-semibold" href="">About</a>
        </li>
        <li class="flex-auto mb-4 lg:mr-8">
          <a class="text-xl font-semibold" href="">Composers</a>
        </li>
        <li class="flex-auto  mb-4 lg:mr-8">
          <a class="text-xl font-semibold" href="">Shows</a>
        </li>
        <li class="flex-auto mb-4 lg:mr-8">
          <a class="text-xl font-semibold" href="">Clients</a>
        </li>
        <li class="flex-auto mb-4 lg:mr-8">
          <a class="text-xl font-semibold" href="">News</a>
        </li>
        <li class="flex-auto mb-4 ">
          <a class="text-xl font-semibold" href="">Contacts</a>
        </li>
      </ul>
      <!-- Footer social media -->
      <div class="w-full flex justify-center lg:flex-row-reverse lg:justify-start">
        <img class="w-8 mr-4 lg:mr-0" :src="require('@/assets/icons/Twitter.svg')" alt="Facebook icon"/>    
        <img class="w-8 mr-4" :src="require('@/assets/icons/Linkedin.svg')" alt="Facebook icon"/>    
        <img class="w-8 mr-4" :src="require('@/assets/icons/Facebook.svg')" alt="Facebook icon"/> 
      </div>
      <!-- Footer bottom -->
      <div class="text-center w-full mt-8">
        <p class="mb-6 font-semibold">Suite 7, Washington Center, MediaCityUK, 112 Broadway, M50 2UW. Tel:<strong>0161 826 2316</strong></p>
        <span class="text-gray-100 text-sm">Copyright of the Composer Works Limited. Registered in England and Wales No 7671153</span>
      </div>
    </div>
  </footer>
</template>

<script >
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>