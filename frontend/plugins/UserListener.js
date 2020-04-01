// This implementation is recommended here:
// https://firebase.google.com/docs/auth/web/manage-users?authuser=1
import query from "~/services/InsertUser/InsertUser.graphql";

export default ({ app }) => {
    app.$storage.syncUniversal("accessToken")
    app.$axios.setBaseURL(process.server ? process.env.API_URL_SSR : process.env.API_URL)
    app.$axios.setToken(app.$storage.getUniversal('accessToken'), 'Bearer')

    app.$fireAuth.onAuthStateChanged(user => {
        if (user) {
            user.getIdToken(true).then(token => {
                const parsedUser = JSON.parse(JSON.stringify(user))
                app.$storage.setState("user", parsedUser)
                app.$storage.setState("loggedIn", true)

                // Store accessToken seperately for convenience
                // Also synchronises it to Vuex/Local Storage/Cookies
                app.$storage.setUniversal(
                    "accessToken",
                    token
                );
                app.$axios.setToken(token, 'Bearer')
                app.$axios.post(process.env.API_PATH, {
                    query: query,
                    variables: {
                        uid: user.uid,
                        photo_url: user.photoURL,
                        name: user.displayName,
                        email: user.email
                    }
                })
            })
        } else {
            // No user is signed in.
            app.$storage.setState("loggedIn", false)
        }
    });

}