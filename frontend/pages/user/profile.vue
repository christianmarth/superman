<template>
  <div>
    User Profile
    <pre>
          {{JSON.stringify(user, null, 4)}}
      </pre>
  </div>
</template>

<script>
import SelectUser from "~/services/SelectUser";

export default {
  async mounted() {
    const accessToken = this.$storage.getUniversal("accessToken");
    const user = this.$storage.getUniversal("user");
    try {
        const service = new SelectUser(accessToken, user.uid);
        const response = await service.process();
        this.user = response.data.data.users_by_pk;
    } catch(e) {
      console.log(e)
    }
  },
  data() {
    return {
      user: {}
    };
  }
};
</script>

<style>
</style>