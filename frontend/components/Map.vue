// Mapbox Vue component library docs:
// https://github.com/phegman/vue-mapbox-gl

// Mapbox docs:
// https://docs.mapbox.com/mapbox-gl-js/api/
//   Managing markers: https://docs.mapbox.com/mapbox-gl-js/api/#marker

<template>
  <div>
    <client-only>
      <div id="geocoder" class="geocoder w-full py-8"></div>
      <Mapbox
        :access-token="accessToken"
        :map-options="{
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [101.090103, 4.597479],
        zoom: 10,
      }"
        :geolocate-control="{
        show: true,
        position: 'top-left',
        options: {
            positionOptions: {
                enableHighAccuracy: true
            },
        showUserLocation: true
        }
      }"
        @map-init="mapInitHandler"
        @map-click="mapClickHandler"
      />
    </client-only>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";

export default {
  components: {
    Mapbox
  },
  head() {
    return {
      link: [
        {
          hid: "mapbox-css",
          rel: "stylesheet",
          href:
            "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
        },
        {
          hid: "mapbox-geocoder-css",
          rel: "stylesheet",
          href:
            "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css"
        }
      ],

      script: [
        {
          src:
            "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js",
          async: true,
          defer: true
        }
      ]
    };
  },
  data() {
    return {
      accessToken: process.env.MAPBOX_ACCESS_TOKEN, // your access token. Needed if you are using Mapbox maps
      currentMarker: null
    };
  },
  methods: {
    mapInitHandler(map) {
      const interval = setInterval(_ => {
        if (process.client) {
          const geocoder = new MapboxGeocoder({
            accessToken: this.accessToken,
            mapboxgl: mapboxgl
          });
          geocoder.on("result", this.handleGeocoder);
          document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
          clearInterval(interval);
        }
      }, 500);
    },
    mapClickHandler(map, mapEvent) {
      // click event properties documentation:
      // https://docs.mapbox.com/mapbox-gl-js/api/#mapmouseevent

      if (this.currentMarker) this.currentMarker.remove();
      this.currentMarker = new mapboxgl.Marker().setLngLat(mapEvent.lngLat);
      this.currentMarker.addTo(map);
      this.$emit("mapClick", mapEvent);
    },
    handleGeocoder(event) {
      // event data properties documentation:
      // https://docs.mapbox.com/api/search/#geocoding-response-object
      this.$emit("searchResult", event.result);
    }
  }
};
</script>
<style>
#map {
  width: 100%;
  height: 500px;
}

.mapboxgl-ctrl-geocoder {
  min-width: 100%;
}
</style>