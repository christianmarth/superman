<template>
  <div class="relative bg-gray-50 overflow-hidden" :style="background">
    <div style="background-color:rgba(0,0,0,0.35);">
    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl"
          >
            Halal,
            <br class="xl:hidden" />
            <span class="text-green-300">it's a lifestyle.</span>
          </h2>
          <h5
            class="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem</h5>
          <div class="mt-8 mx-auto max-w-3xl">
            <div class="flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-4xl"
              >Search</span>
              <input
                id="search"
                class="flex-1 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:leading-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    background(){
      return {
        background: 'no-repeat center/100% url("https://static.asiawebdirect.com/m/kl/portals/langkawi-info-com/homepage/events/ramadan-in-langkawi/pagePropertiesImage/ramadan-langkawi.jpg")'
      }
    }
  }
};
</script>
