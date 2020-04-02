<template>
  <section class="mt-8">
    <div class="text-center">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
      >Places To Eat</h2>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 grid max-w-lg mx-auto lg:max-w-none"
      :class="columnClasses">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    numberOfColumns: {
      type: Number, default: 4
    },
    columnGap: {
      type: Boolean, default: true
    }
  },
  computed: {
    columnClasses() {
      return {
        'lg:grid-cols-6':this.numberOfColumns === 6,
        'lg:grid-cols-4':this.numberOfColumns === 4,'lg:grid-cols-3':this.numberOfColumns === 3,
        'gap-5':this.columnGap,
        'gap-0':!this.columnGap
      }
    }
  }
}
</script>

<style>

</style>
