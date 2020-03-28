// We're using the Universal Storage library
// Convenient persistence, but makes it 
// hard to keep track of our state schema
// this module is for that purpose

// Library:
// https://github.com/nuxt-community/universal-storage-module

export const state = _ => {
    return {
        // Firebase access token
        accessToken: "",
        // Firebase user object
        user: {},
        loggedIn: false // convenience flag
    }
}