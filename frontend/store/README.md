# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

## Template

```
export const state = () => ({
  someState: '',
})

export const getters = {
    someOtherState(state){
        return state.someState + "someUpdatedState"
    }
}

export const mutations = {
  someCommit(state, { someParam }) {
    state.someState = someParam
  }
}

export const actions = {
  someAction(context, { someParams }) {
    // do something - usually results in a commit.
  }
}
```