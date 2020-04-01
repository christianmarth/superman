<template>
  <div
    class="mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  >
    <label
      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
      :for="_uid"
    >{{label}}</label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <div class="max-w-lg rounded-md shadow-sm">
        <input
          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          :id="_uid"
          v-model="val"
          @input="$emit('input', val)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      val: ""
    };
  }
};
</script>

<style scoped>
</style>
