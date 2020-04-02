<template>
  <pre>{{JSON.stringify(products, null, 4)}}</pre>
</template>

<script>
const query = `
  query SelectMerchantProducts($id: Int!) {
    products(where: { merchant_id: { _eq: $id } }) {
      price
      name
      merchant_id
      description
      assets {
        url
        name
      }
    }
  }
`;
export default {
  async asyncData({ app, params }) {
    try {
      const response = await app.$axios.post(process.env.API_PATH, {
        query: query,
        variables: {
          id: params.id
        }
      });
      return { products: response.data.data.products };
    } catch (e) {
      console.log(e)
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
