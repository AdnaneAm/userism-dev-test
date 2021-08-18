<template>
<!-- Navbar component -->
<nav :class="[{'open':!hiddenMenu}, 'nav', 'w-full', 'absolute', 'top-0', 'mx-0', 'p-6', 'lg:p-0' , 'content-center', 'lg:top-20', 'lg:container', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'bg-opacity-90', 'mt-6', 'flex', 'items-center', 'justify-between', 'flex-wrap']">
  <!-- Navbar logo -->
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img class="w-30 ml-8" :src="require('@/assets/icons/logo.svg')" alt="Logo">
  </div>
  <!-- Navbar mobile menu toggle button -->
  <div class="block mr-6 lg:hidden">
    <button class="flex items-center" @click="hiddenMenu = !hiddenMenu">
      <svg v-if="hiddenMenu" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/></svg>
      <svg v-else class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
    </button>
  </div>
  <!-- Navbar navigation menu -->
  <div  :class="{hidden:hiddenMenu, 'ml-auto':true, 'text-left':true,'w-full':true, 'block':true, 'lg:flex':true, 'lg:items-end':true, 'lg:w-auto':true}">
    <div class="relative text-sm lg:flex-grow p-7">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-2 py-1 mr-6 text-black">
        About
      </a>
      <a @click="hiddenSubMenu=!hiddenSubMenu" href="#responsive-header" class="relative block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-2 py-1 mr-6 text-black">
        Composers
        <div :class="[{hidden:hiddenSubMenu}, 'submenu', 'absolute' ,'top-24', 'flex', 'flex-col', 'bg-white', 'bg-opacity-90', 'text-left', 'p-6', 'w-96']">
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Banks & Wang
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Paul Honey
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Nainita Desai
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Brains & Hunch
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Jamie Salisbury
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Daniel Ingram
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Sanj Sen
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Ellie Wyatt
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Heather Fenoughty
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Jode Steele & David Wainright
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Dan McGrath & Josh Philips
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Raphaelle Thibaut
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Paul Drew
          </a>
          <a href="" class="text-xl underline font-medium text-black mb-2">
            Andy Blythe & Marten Joustra
          </a>
        </div>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-2 py-1 mr-6 text-black">
        Shows
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-2 py-1 mr-6 text-black">
        Clients
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-xl font-medium px-2 py-1 mr-6 text-black">
        News
      </a>
      <a href="#" class="block text-xl font-medium mt-4 px-2 lg:mt-0 lg:inline lg:bg-primary lg:p-8 lg:ml-4 lg:-m-8 text-black">
        Contact us
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hiddenMenu: true,
      hiddenSubMenu: true,
    }
  }
}
</script>

<style lang="scss">
  @media(max-width: 1024px) {
    .nav{
      top:36px !important;
      &.open{
        top:216px !important;
      }
    }
  }
  .open{
    position:absolute;
    top:190px;
  }
  .submenu{
    left:50%;
    transform:translateX(-50%);
    &::before{
      content:'';
      position:absolute;
      width: 0; 
      height: 0; 
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 20px solid white;
      left: calc(50% - 20px);
      opacity:90%;
      top:-20px;
    }
  }
</style>