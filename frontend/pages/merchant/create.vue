<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-semibold text-gray-900">Create Merchant</h2>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-4 sm:px-0">
          <form @submit="handleForm">
            <div>
              <div>
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Merchant Details</h3>
                  <p
                    class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                  >This information will be displayed publicly so be careful what you share.</p>
                </div>
                <div class="mt-6 sm:mt-5">
                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="username"
                    >Merchant/Service/Restaurant Name</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-lg flex rounded-md shadow-sm">
                        <input
                          class="flex-1 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="username"
                          v-model="name"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="about"
                    >Where is your business located?</label>

                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="max-w-4xl mx-auto">
                        <client-only>
                          <!--                          <Map @mapClick="handleMapClick" @searchResult="handleMapSearchResult"/>-->
                        </client-only>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="about"
                    >Upload images of your business</label>
                    <ImageUploader @upload-image-loaded="handleImageUpload" />
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="max-w-4xl mx-auto"></div>
                    </div>
                  </div>
                  <BaseTextArea v-model="description" />
                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm leading-5 font-medium text-gray-700"
                      for="photo"
                    >Photo</label>
                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                      <div class="flex items-center">
                        <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            class="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </span>
                        <span class="ml-5 rounded-md shadow-sm">
                          <button
                            class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                            type="button"
                          >Change</button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                      for="cover_photo"
                    >Cover photo</label>
                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                      <div
                        class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            />
                          </svg>
                          <p class="mt-1 text-sm text-gray-600">
                            <button
                              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                              type="button"
                            >Upload a file</button>
                            or drag and drop
                          </p>
                          <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                  <p
                    class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                  >Use a permanent address where you can receive mail.</p>
                </div>
                <div class="mt-6 sm:mt-5">
                  <div
                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="first_name"
                    >First name</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="first_name"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="last_name"
                    >Last name</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="last_name"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="email"
                    >Email address</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-lg rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="email"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="country"
                    >Country / Region</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <select
                          class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="country"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="street_address"
                    >Street address</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-lg rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="street_address"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="city"
                    >City</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="city"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="state"
                    >State / Province</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="state"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  >
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="zip"
                    >ZIP / Postal</label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <div class="max-w-xs rounded-md shadow-sm">
                        <input
                          class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          id="zip"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                <div>
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                  <p
                    class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                  >We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                </div>
                <div class="mt-6 sm:mt-5">
                  <div class="sm:border-t sm:border-gray-200 sm:pt-5">
                    <fieldset>
                      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                        <div>
                          <legend
                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                          >By Email</legend>
                        </div>
                        <div class="mt-4 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg">
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input
                                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                  id="comments"
                                  type="checkbox"
                                />
                              </div>
                              <div class="pl-7 text-sm leading-5">
                                <label class="font-medium text-gray-700" for="comments">Comments</label>
                                <p
                                  class="text-gray-500"
                                >Get notified when someones posts a comment on a posting.</p>
                              </div>
                            </div>
                            <div class="mt-4">
                              <div class="relative flex items-start">
                                <div class="absolute flex items-center h-5">
                                  <input
                                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    id="candidates"
                                    type="checkbox"
                                  />
                                </div>
                                <div class="pl-7 text-sm leading-5">
                                  <label
                                    class="font-medium text-gray-700"
                                    for="candidates"
                                  >Candidates</label>
                                  <p
                                    class="text-gray-500"
                                  >Get notified when a candidate applies for a job.</p>
                                </div>
                              </div>
                            </div>
                            <div class="mt-4">
                              <div class="relative flex items-start">
                                <div class="absolute flex items-center h-5">
                                  <input
                                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    id="offers"
                                    type="checkbox"
                                  />
                                </div>
                                <div class="pl-7 text-sm leading-5">
                                  <label class="font-medium text-gray-700" for="offers">Offers</label>
                                  <p
                                    class="text-gray-500"
                                  >Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                    <fieldset>
                      <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                        <div>
                          <legend
                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                          >Push Notifications</legend>
                        </div>
                        <div class="sm:col-span-2">
                          <div class="max-w-lg">
                            <p
                              class="text-sm leading-5 text-gray-500"
                            >These are delivered via SMS to your mobile phone.</p>
                            <div class="mt-4">
                              <div class="flex items-center">
                                <input
                                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                  id="push_everything"
                                  name="form-input push_notifications"
                                  type="radio"
                                />
                                <label class="ml-3" for="push_everything">
                                  <span
                                    class="block text-sm leading-5 font-medium text-gray-700"
                                  >Everything</span>
                                </label>
                              </div>
                              <div class="mt-4 flex items-center">
                                <input
                                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                  id="push_email"
                                  name="form-input push_notifications"
                                  type="radio"
                                />
                                <label class="ml-3" for="push_email">
                                  <span
                                    class="block text-sm leading-5 font-medium text-gray-700"
                                  >Same as email</span>
                                </label>
                              </div>
                              <div class="mt-4 flex items-center">
                                <input
                                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                  id="push_nothing"
                                  name="form-input push_notifications"
                                  type="radio"
                                />
                                <label class="ml-3" for="push_nothing">
                                  <span
                                    class="block text-sm leading-5 font-medium text-gray-700"
                                  >No push notifications</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-5">
              <div class="flex justify-end">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    type="button"
                  >Cancel</button>
                </span>
                <span class="ml-3 inline-flex rounded-md shadow-sm">
                  <button
                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    type="submit"
                  >Save</button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
// import Map from "~/components/Map";
import ImageUploader from "~/components/ImageUploader";
import InsertMerchant from "~/services/InsertMerchant";
import query from "~/services/InsertMerchant/InsertMerchant.graphql";
import BaseTextArea from "~/components/base/BaseTextArea";
import FirebaseUploaderMixin from "~/components/FirebaseUploaderMixin";

export default {
  mixins: [FirebaseUploaderMixin],
  components: {
    // Map,
    ImageUploader,
    BaseTextArea
  },
  data() {
    return {
      name: "",
      location: "1,1",
      images: [],
      description: ""
    };
  },
  computed: {
    underscoreDelimitedName() {
      return this.name
        .toLowerCase()
        .replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()]/g, "")
        .replace(" ", "_");
    },
    userId() {
      return this.$storage.getUniversal("user").uid;
    },
    merchantProfileBucketPath() {
      return `${this.userId}/merchants/${this.underscoreDelimitedName}`;
    }
  },
  methods: {
    async handleForm(e) {
      e.preventDefault();
      try {
        const assets = await this.uploadImagesToFirebase();
        const response = await this.$axios.post(process.env.API_PATH, {
          query: query,
          variables: {
            name: this.name,
            description: this.description,
            location: this.location,
            assets: { data: assets }
          }
        });

        const merchant_id = response.data.data.insert_merchants_one.id;
        this.$router.push({ name: "merchant-id", params: { id: merchant_id } });
      } catch (e) {
        console.error("Merchant Creation Failed", this);
        console.log(e);
      }
    },
    handleMapSearchResult(event) {
      // event data properties documentation:
      // https://docs.mapbox.com/api/search/#geocoding-response-object
      this.location = `${event.center[0]},${event.center[1]}`;
    },
    handleMapClick(event) {
      // click event properties documentation:
      // https://docs.mapbox.com/mapbox-gl-js/api/#mapmouseevent
      this.location = `${event.lngLat.lng}, ${event.lngLat.lat}`;
    },
    handleImageUpload(event) {
      this.images.push(event);
    }
  }
};
</script>

<style>
</style>
