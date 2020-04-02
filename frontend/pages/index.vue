<template>
  <div>
    <BaseHero />
    <main>
      <BaseSection>
        <BaseCard v-for="merchant in merchants" :key="merchant.id" :img="merchant.assets[0].url" :title="merchant.name" :titleLink="'/merchant/'+merchant.id" :body="merchant.description" />
      </BaseSection>
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
import BaseSection from "../components/base/BaseSection";

export default {
  components: {
    BaseHero,
    BaseCard,
    BaseSection
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
