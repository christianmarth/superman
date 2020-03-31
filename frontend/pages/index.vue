<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-semibold text-gray-900">Dashboard</h2>
      </div>
    </header>
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

export default {
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
  computed: {
    data() {
      return {
        merchants: []
      };
    }
  }
};
</script>
