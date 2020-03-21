<template>
  <div>
    <h1>Welcome to My Awesome App</h1>
    <button @click="loginWithGoogle">Login!</button>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      const provider = new this.$fireAuthObj.GoogleAuthProvider();
      this.$fireAuth
        .signInWithPopup(provider)
        .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log(user);
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    }
  }
};
</script>

<style>
</style>
