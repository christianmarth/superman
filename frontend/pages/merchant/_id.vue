<template>
  <div>{{ JSON.stringify(this.merchant) }}</div>
</template>

<script>
import SelectMerchant from "~/services/SelectMerchant";
export default {
  async middleware(context) {
    let accessToken;
    const { app, params } = context;
    if (process.server) {
      const { req, res, beforeNuxtRender } = context;
      accessToken = req.cookies['loka-accessToken']
    }else{
        accessToken = app.$storage.getUniversal('accessToken');
    }
    
    const id = params.id;
    const service = new SelectMerchant(accessToken, id);
    const response = await service.process();
    app.$storage.setState("merchant", response.data.data.merchants_by_pk);
  },
  computed: {
    merchant() {
      return this.$storage.getState("merchant");
    }
  }
};
</script>

<style>
</style>