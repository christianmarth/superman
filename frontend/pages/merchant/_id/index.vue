<template>
  <div>
    <nuxt-link
      class="button"
      :to="{name: 'merchant-id-products', params: {id: $route.params.id}}"
    >Products</nuxt-link>
    <pre>
      {{ JSON.stringify(this.merchant, null, 4) }}
    </pre>
  </div>
</template>

<script>
import query from "~/services/SelectMerchant/SelectMerchant.graphql";

export default {
  async asyncData({ app, redirect, params }) {
    const id = params.id;
    try {
      const response = await app.$axios.post(process.env.API_PATH, {
        query,
        variables: {
          id
        }
      });
      return { merchant: response.data.data.merchants_by_pk };
    } catch (e) {
      console.log(e);
      console.log("Either not logged in or no merchant found");
      redirect("/");
    }
  },
  data() {
    return {
      merchant: {}
    };
  }
};
</script>

<style>
</style>