<script>
export default {
  methods: {
    async uploadImagesToFirebase() {
      const ref = this.$fireStorage.ref();
      // place all uploaded images in a subdirectory with path like this:
      // 2zAOj9zJGZNVD2ykHeQtiJsgzCL2/merchants/my_store/image.jpg
      // this is a reasonable approach since any user could create
      // many merchant profiles
      return Promise.all(
        this.images.map(async image => {
          const namedRef = ref.child(
            `${this.merchantProfileBucketPath}/${image.name}`
          );
          const snapshot = await namedRef.put(image.file);
          const url = await namedRef.getDownloadURL();
          return {
            name: snapshot.metadata.name,
            bucket_path: snapshot.metadata.fullPath,
            url: url,
            entity_type: "merchant"
          };
        })
      );
    }
  }
};
</script>

<style>
</style>