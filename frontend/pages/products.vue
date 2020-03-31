<template>
  <pre>{{JSON.stringify(products, null, 4)}}</pre>
</template>

<script>
const query = `
  query SelectAllProducts {
    products(order_by: { id: desc }) {
      price
      name
      merchant_id
      description
      asset {
        url
      }
    }
  }
`;
export default {
  async asyncData({ app, params }) {
    try {
      const response = await app.$axios.post(process.env.API_PATH, {
        query: query
      });
      return { products: response.data.data.products };
    } catch (e) {
      console.log(e);
      return { products: [] };
    }
  },
  data() {
    return {
      products: []
    };
  }
};
</script>

<style>
</style>