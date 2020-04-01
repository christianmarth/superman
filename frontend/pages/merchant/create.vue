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
                  <BaseInput :label="'Merchant/Service/Restaurant Name'" v-model="merchant.name" />

                  <BaseTextArea v-model="merchant.description" />
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
                  <BaseInput :label="'Email'" v-model="merchant.email" />
                  <BaseInput :label="'Phone Number'" v-model="merchant.phone_number" />
                  <BaseInput :label="'Website'" v-model="merchant.website" />
                </div>
              </div>
              <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                <header class="bg-white shadow-sm">
                  <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <h2 class="text-lg leading-6 font-semibold text-gray-900">Merchant Address</h2>
                  </div>
                </header>

                <div class="mt-6 sm:mt-5">
                  <BaseInput
                    :label="'Unit / Office / House Number'"
                    v-model="merchant.address.data.num"
                  />
                  <BaseInput :label="'Street'" v-model="merchant.address.data.street" />
                  <BaseInput :label="'Street 2'" v-model="merchant.address.data.street_opt" />
                  <BaseInput :label="'City'" v-model="merchant.address.data.city" />
                  <BaseInput :label="'State'" v-model="merchant.address.data.state" />
                  <BaseSelect
                    :options="['Malaysia', 'Singapore']"
                    :label="'Country'"
                    v-model="merchant.address.data.country"
                  />

                  <BaseInput :label="'Postcode'" v-model="merchant.address.data.postcode" />

                  <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                      for="about"
                    >Where is your business located?</label>

                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="max-w-4xl mx-auto">
                        <client-only>
                          <!-- <Map @mapClick="handleMapClick" @searchResult="handleMapSearchResult" /> -->
                        </client-only>
                      </div>
                    </div>
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
import query from "~/services/InsertMerchant/InsertMerchant.graphql";
import BaseTextArea from "~/components/base/BaseTextArea";
import BaseInput from "~/components/base/BaseInput";
import BaseSelect from "~/components/base/BaseSelect";
import FirebaseUploaderMixin from "~/components/FirebaseUploaderMixin";

export default {
  mixins: [FirebaseUploaderMixin],
  components: {
    // Map,
    ImageUploader,
    BaseTextArea,
    BaseInput,
    BaseSelect
  },
  data() {
    return {
      images: [],
      merchant: {
        name: "",
        location: "1,1",
        description: "",
        phone_number: "",
        website: "",
        address: {
          data: {
            num: "",
            street: "",
            street_opt: "",
            city: "",
            state: "",
            country: "",
            postcode: ""
          }
        },
        assets: {
          data: [
            { name: "", bucket_path: "", url: "", entity_type: "merchant" }
          ]
        }
      }
    };
  },
  computed: {
    underscoreDelimitedName() {
      return this.merchant.name
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
        this.merchant.assets.data = await this.uploadImagesToFirebase("merchant");
        const response = await this.$axios.post(process.env.API_PATH, {
          query: query,
          variables: { object: this.merchant }
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
      this.merchant.location = `${event.center[0]},${event.center[1]}`;
    },
    handleMapClick(event) {
      // click event properties documentation:
      // https://docs.mapbox.com/mapbox-gl-js/api/#mapmouseevent
      this.merchant.location = `${event.lngLat.lng}, ${event.lngLat.lat}`;
    },
    handleImageUpload(event) {
      this.images.push(event);
    }
  }
};
</script>

<style>
</style>
