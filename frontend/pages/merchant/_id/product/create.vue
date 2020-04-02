<template>
  <div>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-semibold text-gray-900">Create Product</h2>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-4 sm:px-0">
          <form @submit="handleForm">
            <div>
              <div>
                <div class="mt-6 sm:mt-5">
                  <BaseInput :label="'Product Name'" v-model="product.name"/>

                  <BaseTextArea :descriptionText="'Describe your product'" v-model="product.description"/>
                  <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >Upload images of your product</label>
                    <ImageUploader @upload-image-loaded="handleImageUpload"/>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="max-w-4xl mx-auto"></div>
                    </div>
                  </div>
                  <BaseInput :label="'Price'" v-model="product.price"/>
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
                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-400 hover:bg-indigo-500 focus:outline-none focus:border-green-500 focus:shadow-outline-indigo active:bg-green-500 transition duration-150 ease-in-out"
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
  import ImageUploader from "~/components/ImageUploader";
  import BaseTextArea from "~/components/base/BaseTextArea";
  import BaseInput from "~/components/base/BaseInput";
  import FirebaseUploaderMixin from "~/components/FirebaseUploaderMixin";

  const query = `mutation InsertProduct($object: products_insert_input!) {
  insert_products_one(object: $object) {
    id
  }
}`;

  export default {
    mixins: [FirebaseUploaderMixin],
    components: {
      ImageUploader,
      BaseTextArea,
      BaseInput,
    },
    data() {
      return {
        images: [],
        product: {
          merchant_id: this.$route.params.id,
          price: "",
          name: "",
          description: "",
          assets: {
            data: [
              {name: "", bucket_path: "", url: "", entity_type: "product"}
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
      productBucketPath() {
        return `${this.userId}/products/${this.underscoreDelimitedName}`;
      }
    },
    methods: {
      async handleForm(e) {
        e.preventDefault();
        try {
          this.product.assets.data = await this.uploadImagesToFirebase("product");
          const response = await this.$axios.post(process.env.API_PATH, {
            query: query,
            variables: {object: this.product}
          });

          const product_id = response.data.data.insert_products_one.id;
          this.$router.push({
              name: "merchant-id-product-product_id",
              params: {
                id: this.product.merchant_id,
                product_id: product_id
              }
            }
          );
        } catch (e) {
          console.error("Product Creation Failed", this);
          console.log(e);
        }
      },
      handleImageUpload(event) {
        this.images.push(event);
      }
    }
  };
</script>

<style>
</style>
