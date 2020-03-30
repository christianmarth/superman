<template>
  <div
    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
  >
    <label
      :for="_uid"
      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
    >{{labelText}}</label>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <div class="max-w-lg flex rounded-md shadow-sm">
                        <textarea
                          @input='$emit("input", val)'
                          v-model="val"
                          :id="_uid"
                          rows="3"
                          class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        ></textarea>
      </div>
      <p class="mt-2 text-sm text-gray-500">{{descriptionText}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BaseTextArea",
        props:{
            labelText:{
                type: String,
                default: "About"
            },
            descriptionText:{
                type: String,
                default: "Write a few sentences about yourself."
            }

        },
        data() {
            return {
                val: ""
            };
        },

    }
</script>

<style scoped>

</style>
