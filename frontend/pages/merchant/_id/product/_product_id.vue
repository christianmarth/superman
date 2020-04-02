<template>
    <div>
      <div>
        <nuxt-link
          class="button"
          :to="{name: 'merchant-id-products', params: {id: product.merchant_id}}"
        >All Merchants Products
        </nuxt-link>
      </div>
      <div>
        <nuxt-link
          class="button"
          :to="{name: 'merchant-id', params: {id: product.merchant_id}}"
        >Merchants Profile
        </nuxt-link>
      </div>
      <pre>
      {{ JSON.stringify(this.product, null, 4) }}
    </pre>
    </div>
</template>

<script>
  const query = `query SelectProduct($id: bigint!) {
  products_by_pk(id: $id) {
    assets {
      url
    }
    description
    name
    price
    merchant_id
  }
}
`
  export default {
    async asyncData({ app, redirect, params }) {
      const product_id = params.product_id;
      try {
        const response = await app.$axios.post(process.env.API_PATH, {
          query,
          variables: {
            id: product_id
          }
        });
        return { product: response.data.data.products_by_pk };
      } catch (e) {
        console.log(e);
        console.log("Either not logged in or no product found");
        redirect("/");
      }
    },
    data(){
      return {
        product: {}
      }
    }
  }
</script>
