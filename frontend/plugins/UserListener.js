// This implementation is recommended here:
// https://firebase.google.com/docs/auth/web/manage-users?authuser=1

export default ({ app }, inject) => {
    app.$fireAuth.onAuthStateChanged(function (user) {
        if (user) {
            user = JSON.parse(JSON.stringify(user))
            app.$storage.setState("user", user)
            app.$storage.setLocalStorage("user", user)
            app.$storage.setState("loggedIn", true)

            // Store accessToken seperately for convenience
            // Also synchronises it to Vuex/Local Storage/Cookies
            app.$storage.setUniversal(
                "accessToken",
                user.stsTokenManager.accessToken
            );
        } else {
            // No user is signed in.
            app.$storage.setState("loggedIn", false)
        }
    });

}