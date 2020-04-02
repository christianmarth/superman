<template>
  <section class="mt-8">
    <div class="text-center">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
      >Places To Eat</h2>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
