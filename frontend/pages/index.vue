<template>
  <div>
    <BaseHero />

    <div class="text-center">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
      >Places To Eat</h2>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
        <div
          v-for="merchant in merchants"
          :key="merchant.id"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="merchant.assets[0].url" alt />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm leading-5 font-medium text-green-400">
                <a href="#" class="hover:underline">Merchant</a>
              </p>
              <a href="#" class="block">
                <h3
                  class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                >{{merchant.name}}</h3>
                <p
                  class="mt-3 text-base leading-6 text-gray-500"
                >{{merchant.description}}</p>
              </a>
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
      </div>
    </div>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-4 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg">
            <div :key="merchant.id" v-for="merchant in merchants">
              <pre> {{ JSON.stringify(merchant, null, 4) }} </pre>
              <nuxt-link :to="{ name: 'merchant-id', params: { id: merchant.id }}">Merchant Profile</nuxt-link>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import query from "~/services/SelectAllMerchants/SelectAllMerchant.graphql";
import BaseHero from "~/components/base/BaseHero";
import BaseCard from "~/components/base/BaseCard";

export default {
  components: {
    BaseHero,
    BaseCard
  },
  async asyncData({ app }) {
    try {
      const response = await app.$axios.post(process.env.API_PATH, {
        query
      });
      return { merchants: response.data.data.merchants };
    } catch (err) {
      console.log(err);
      return { merchants: [] };
    }
  },
  data() {
    return {
      merchants: [],
      urls: []
    };
  },
  methods: {
    async fetchFirebaseAsset(path) {
      if (process.server) return "";
      const ref = this.$fireStorage.ref();
      const namedRef = ref.child(path);
      try {
        const url = await namedRef.getDownloadURL();
        return url;
      } catch (e) {
        console.error(e);
        return "";
      }
    }
  }
};
</script>
