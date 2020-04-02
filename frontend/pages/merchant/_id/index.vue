<template>
  <div>
    <div>
      <nuxt-link
        class="button"
        :to="{name: 'merchant-id-products', params: {id: $route.params.id}}"
      >All Merchants Products
      </nuxt-link>
    </div>
    <div>
      <nuxt-link
        class="button"
        :to="{name: 'merchant-id-product-create', params: {id: $route.params.id}}"
      >Add Product
      </nuxt-link>
    </div>
    <h3>Products</h3>
    <ol>
      <li v-for="product in merchant.products">
        <nuxt-link
          :to="{name: 'merchant-id-product-product_id', params: {product_id: product.id}}"
        >
          {{product.name}}
        </nuxt-link>
      </li>
    </ol>
    <pre>
      {{ JSON.stringify(merchant, null, 4) }}
    </pre>
    <div>
      <img v-for="(asset, index) in merchant.assets" :key="index" :src="asset.url" alt="">
    </div>
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
