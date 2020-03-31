<template>
  <div>
    <pre>
      {{ JSON.stringify(this.merchant, null, 4) }}
    </pre>
  </div>
</template>

<script>
import SelectMerchant from "~/services/SelectMerchant";

export default {
  async asyncData(context) {
    let accessToken;
    const { app, params } = context;
    if (process.server) {
      const { req, res, beforeNuxtRender } = context;
      accessToken = req.cookies["loka-accessToken"];
    } else {
      accessToken = app.$storage.getUniversal("accessToken");
    }

    const id = params.id;
    const service = new SelectMerchant(accessToken, id);
    try {
        const response = await service.process();
        console.log(response.data)
        return {merchant: response.data.data.merchants_by_pk};
    } catch(e){
        console.log(e)
        console.log("Either not logged in or no merchant found")
        context.redirect('/')
    }
    
  },
  data(){
      return {
          merchant: {}
      }
  }
};
</script>

<style>
</style>