<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">loka-frontend</h1>
      <h2 class="subtitle">My badass Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    <login />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Login from "~/components/Login.vue";

export default {
  data() {
    return {
      merchants: {}
    };
  },
  components: {
    Logo,
    Login
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
        baseURL: 'http://localhost:8080',
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
