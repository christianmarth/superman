// Component adapted from here:
// https://github.com/viral-vector/vue-upload-image

<template>
  <div
    id="upload_image_form"
    @click="openFileSelectionDialogue"
    class="w-full flex-column justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-solid rounded-md text-gray-400 hover:text-gray-700 cursor-pointer"
    v-bind:class="{ 'dragover': onDragover }"
  >
    <div class="flex flex-wrap">
      <div
        v-for="(value, key) in files"
        :key="key"
        v-on:click="fileClick($event, key)"
        v-bind:class="{ 'uploaded': value.uploaded, 'bad-size': value.bad_size }"
      >
        <span v-on:click="fileDelete($event, key)">&#x2716;</span>
        <img class="max-w-sm max-h-48" v-bind:src="image[key]" v-bind:class="{ 'show': image[key]}" />
      </div>
    </div>
    <div class="text-center">
      <svg
        class="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p class="mt-1 text-sm text-gray-600">
        <button
          type="button"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
        >Upload a file</button>
        or drag and drop
      </p>
      <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    </div>
    <input type="file" id="upload_image_form__input" hidden multiple />
  </div>
</template>

<script>
export default {
  name: "upload-image",
  props: {
    input_id: {
      type: String,
      required: false,
      default: "default"
    },
    url: {
      type: String,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: "images[]"
    },
    disable_upload: {
      type: Boolean,
      required: false,
      default: true
    },
    max_batch: {
      type: Number,
      required: false,
      default: 0
    },
    max_files: {
      type: Number,
      required: false,
      default: 10
    },
    max_filesize: {
      type: Number,
      required: false,
      default: 8000
    },
    resize_enabled: {
      type: Boolean,
      required: false,
      default: false
    },
    resize_max_width: {
      type: Number,
      required: false,
      default: 800
    },
    resize_max_height: {
      type: Number,
      required: false,
      default: 600
    },
    button_html: {
      type: String,
      required: false,
      default: "Upload Images"
    },
    button_class: {
      type: String,
      required: false,
      default:
        "py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
    }
  },
  data: function() {
    return {
      form: null,
      input: null,
      index: 0,
      total: 0,
      files: {},
      image: {},
      batch: {},
      onDragover: false,
      onUploading: false
    };
  },
  mounted: function() {
    this.form = document.getElementById("upload_image_form");
    this.input = document.getElementById("upload_image_form__input");

    [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop"
    ].forEach(event =>
      this.form.addEventListener(event, e => {
        e.preventDefault();
        e.stopPropagation();
      })
    );

    ["dragover", "dragenter"].forEach(event =>
      this.form.addEventListener(event, this.dragEnter)
    );

    ["dragleave", "dragend", "drop"].forEach(event =>
      this.form.addEventListener(event, this.dragLeave)
    );

    ["drop"].forEach(event => this.form.addEventListener(event, this.fileDrop));

    ["change"].forEach(event =>
      this.input.addEventListener(event, this.fileDrop)
    );
  },
  methods: {
    openFileSelectionDialogue() {
      this.input.click();
    },
    _can_xhr() {
      if (this.total >= this.max_files) {
        return false;
      }
      return true;
    },
    _can_upload_file(key) {
      let file = this.files[key];

      if (file.attempted || file.bad_size) {
        return false;
      }
      return true;
    },
    _xhr: function(formData, keys, callback) {
      this.onUploading = true;
      this.$emit("upload-image-attempt", formData);

      keys.forEach(key => {
        this.$set(this.files[key], "attempted", true);
      });

      this.$http
        .post(this.url, formData)
        .then(
          response => {
            keys.forEach(key => {
              this.$set(this.files[key], "uploaded", true);

              this.total++;
            });

            this.$emit("upload-image-success", [formData, response]);
          },
          response => {
            this.$emit("upload-image-failure", [formData, response]);
          }
        )
        .then(response => {
          this.onUploading = false;

          callback();
        });
    },
    upload: function() {
      if (!this._can_xhr()) return false;

      for (let key in this.files) {
        if (!this._can_upload_file(key)) continue;

        let formData = new FormData();
        formData.append(this.name, this.files[key].file, this.files[key].name);

        this._xhr(formData, [key], this.upload);

        return true;
      }
    },
    upload_batch: function() {
      if (!this._can_xhr()) return false;

      for (let key in this.batch) {
        this._xhr(
          this.batch[key].form,
          this.batch[key].keys,
          this.upload_batch
        );

        delete this.batch[key];

        return true;
      }
    },
    create_batch: function() {
      let index = 0;
      let count = 0;

      this.batch = {};

      for (let key in this.files) {
        if (!this._can_upload_file(key)) continue;

        if (this.batch[index] == null || count == this.max_batch) {
          index++;
          count = 0;
          this.batch[index] = { form: new FormData(), keys: [] };
        }

        count++;
        this.batch[index]["keys"].push(key);
        this.batch[index]["form"].append(
          this.name,
          this.files[key].file,
          this.files[key].name
        );
      }
    },
    submit: function(e) {
      e.preventDefault();
      e.stopPropagation();

      this.$emit("upload-image-submit", this.files);

      if (!this.disable_upload && !this.onUploading) {
        if (this.max_batch > 1) {
          this.create_batch();
          return this.upload_batch();
        }
        this.upload();
      }
    },
    dragEnter: function(e) {
      e.preventDefault();
      this.onDragover = true;
    },
    dragLeave: function(e) {
      e.preventDefault();
      this.onDragover = false;
    },
    fileDrop: function(e) {
      e.preventDefault();

      let newFiles = e.target.files || e.dataTransfer.files;

      for (let i = 0; i < newFiles.length; i++) {
        this.$set(this.files, this.index, newFiles[i]);

        if (newFiles[i].type.match(/image.*/)) {
          this.fileInit(this.index);
          this.fileRead(this.index);

          this.index++;
        }
      }
      e.target.value = "";
    },
    fileInit: function(key) {
      let file = this.files[key];

      this.files[key] = {
        name: this.files[key].name,
        file: this.files[key]
      };

      if (file.size * 0.001 > this.max_filesize) {
        this.$set(this.files[key], "bad_size", true);
      }
    },
    fileRead: function(key) {
      let reader = new FileReader();

      reader.addEventListener("load", e => {
        this.$set(this.image, key, reader.result);

        if (this.resize_enabled) {
          let imager = new Image();

          imager.onload = () => {
            let width = imager.width;
            let height = imager.height;

            if (
              width > this.resize_max_width ||
              height > this.resize_max_height
            ) {
              if (
                height / width -
                  this.resize_max_height / this.resize_max_width >
                0
              ) {
                width = (this.resize_max_height / height) * width;
                height = this.resize_max_height;
              } else {
                height = (this.resize_max_width / width) * height;
                width = this.resize_max_width;
              }
            }

            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            let ctx = canvas.getContext("2d");
            ctx.drawImage(imager, 0, 0, width, height);

            let newImageData = canvas.toDataURL("image/png");

            this.$set(this.image, key, newImageData);

            //
            let img = atob(newImageData.split(",")[1]);
            let img_buffer = [];
            let i = 0;
            while (i < img.length) {
              img_buffer.push(img.charCodeAt(i));
              i++;
            }
            let u8Image = new Uint8Array(img_buffer);

            this.$set(this.files, key, {
              name: this.files[key].name,
              file: new Blob([u8Image], { filename: this.files[key].name })
            });
          };
          imager.src = reader.result;
        }
        this.$emit("upload-image-loaded", this.files[key]);
      });

      reader.readAsDataURL(this.files[key].file);
    },
    fileDelete: function(e, key) {
      this.$emit("upload-image-removed", this.files[key]);
      this.$delete(this.files, key);
      this.$delete(this.image, key);
    },
    fileClick: function(e, key) {
      e.preventDefault();
      e.stopPropagation();
      this.$emit("upload-image-clicked", this.files[key]);
    }
  }
};
</script>