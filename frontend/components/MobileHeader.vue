<template>
  <nav class="bg-green-500" v-on-clickaway="away">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Full Screen Menu -->
        <div class="flex items-center w-full">
          <div class="flex-shrink-0">
            <nuxt-link :to="`/`">
              <img class="h-8 w-8" src="/loka_logo.jpeg" alt />
            </nuxt-link>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div class="-mr-2 flex">
          <button
            @click="mobileMenuToggle = !mobileMenuToggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-indigo-300 hover:text-white hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:text-white"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                :class="{hidden: mobileMenuToggle, 'inline-flex': !mobileMenuToggle }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{hidden: !mobileMenuToggle, 'inline-flex': mobileMenuToggle }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Mobile Menu End -->
      </div>
    </div>
    <div class="mx-auto px-4">
      <div :class="{block: mobileMenuToggle, hidden: !mobileMenuToggle}">
        <div class="px-2 pt-2 pb-3">
          <nuxt-link
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400"
          >{{link.name}}</nuxt-link>
        </div>
        <!-- `loggedIn` computed property set on the ./HeaderMixin -->
        <div class="border-t border-gray-700 pb-3 px-2">
        <div v-if="loggedIn" class="pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
                SameSite="None"
                Secure
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="mt-1 text-sm font-medium leading-none text-indigo-300">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <nuxt-link
              :to="{name: 'user-profile'}"
              class="block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400"
            >Your Profile</nuxt-link>
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400"
            >Settings</a>
            <a
              @click="logout"
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400"
            >Sign out</a>
          </div>
        </div>
        <nuxt-link
            v-else=""
            :to="`/login`"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-green-400 focus:outline-none focus:text-white focus:bg-green-400"
          >Login</nuxt-link>
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderMixin from "./HeaderMixin";

export default {
  mixins: [HeaderMixin]
};
</script>

<style>
</style>
