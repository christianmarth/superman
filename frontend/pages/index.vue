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
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      merchants: {},
    };
  },
  mounted() {
    this.getMerchants();
  },
  methods: {
    async getMerchants() {
      const query = `query MyQuery {
  merchants {
    name
  }
}
`;
      const response = await this.$axios({
        method: "post",
        baseURL: "http://localhost:8080",
        url: "/v1/graphql",
        headers: {
          "x-hasura-role": "anonymous",
          "content-type": "application/json"
        },
        data: {
          query: query
        }
      });
      this.merchants = response.data.data.merchants;
    }
  }
};
</script>