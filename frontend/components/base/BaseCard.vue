<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="img" alt />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-green-400">
          <a href="#" class="hover:underline">Merchant</a>
        </p>
        <nuxt-link :to="titleLink" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">{{title}}</h3>
          <p class="mt-3 text-base leading-6 text-gray-500">{{description}}</p>
        </nuxt-link>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#" class="hover:underline">Roel Aufderhar</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">Mar 16, 2020</time>
            <span class="mx-1">&middot;</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Add a title"
    },
    titleLink: {
      type: String
    },
    img: {
      type: String,
      required: false
    },
    description: {
      type: String
    }
  }
};
</script>
