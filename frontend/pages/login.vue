<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-semibold text-gray-900">Login</h2>
      </div>
    </header>
    <main>
      <div class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul>
                <li class="border-t border-gray-200" @click="loginWithGoogle">
                  <a
                    href="#"
                    class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 flex items-center sm:px-6">
                      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">Google</div>
                      <div class="ml-5 flex-shrink-0">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="border-t border-gray-200">
                  <a
                    href="#"
                    class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 flex items-center sm:px-6">
                      <div
                        class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"
                      >Facebook</div>
                      <div class="ml-5 flex-shrink-0">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="border-t border-gray-200">
                  <a
                    href="#"
                    class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 flex items-center sm:px-6">
                      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">Twitter</div>
                      <div class="ml-5 flex-shrink-0">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="border-t border-gray-200">
                  <a
                    href="#"
                    class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <div class="px-4 py-4 flex items-center sm:px-6">
                      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">Apple</div>
                      <div class="ml-5 flex-shrink-0">
                        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import InsertUser from "~/services/InsertUser";
export default {
  methods: {
    loginWithGoogle() {
      const provider = new this.$fireAuthObj.GoogleAuthProvider();
      this.$fireAuth.signInWithRedirect(provider);
    },
    insertUser(idToken, uid, displayName, email, photoURL) {
      const service = new InsertUser(
        idToken,
        uid,
        displayName,
        email,
        photoURL
      );
      service.process();
    }
  }
};
</script>

<style>
</style>
