<template>
  <nav class="bg-indigo-700">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="/loka_logo.jpeg" alt />
          </div>
          <div class="hidden md:block w-full">
            <div class="ml-10 flex items-baseline justify-end">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-800 focus:outline-none focus:text-white focus:bg-indigo-600"
              >Dashboard</a>
              <nuxt-link
                v-for="link in links"
                :key="link.name"
                :to="link.path"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
              >{{ link.name }}</nuxt-link>
            </div>
          </div>
        </div>

        <div class="flex items-center md:ml-6" v-if="loggedIn">
          <!-- Bell Button -->
          <button
            class="p-1 border-2 border-transparent text-indigo-300 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-indigo-600"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <!-- Bell Button End -->

          <!-- Profile Button -->

          <!-- `loggedIn` computed property set on the ./HeaderMixin -->
          <div v-if="loggedIn" class="relative" v-on-clickaway="away">
            <!--
              Relatively positioned so the absolutely positioned floating menu has something
              (other than the window) to anchor to.
            -->
            <button
              @click="mobileMenuToggle = !mobileMenuToggle"
              class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
            >
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
                SameSite="None"
                Secure
              />
            </button>

            <!-- Dropdown Menu -->
            <div
              :class="{hidden: !mobileMenuToggle}"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10"
            >
              <div class="py-1 rounded-md bg-white shadow-xs">
                <nuxt-link
                  :to="{name: 'user-profile'}"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Your Profile</nuxt-link>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="logout">Sign out</a>
              </div>
            </div>
            <!-- Dropdown Menu End -->
          </div>
        </div>
        <nuxt-link
          v-else=""
          :to="`/login`"
          class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
        >Login</nuxt-link>
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
