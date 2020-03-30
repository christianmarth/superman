<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  data() {
    return {
      links: [
        {
          name: "Home",
          path: "/"
        },
        {
          name: "Login",
          path: "/login"
        },
        {
          name: "Create Merchant",
          path: "/merchant/create"
        }
      ],
      mobileMenuToggle: false
    };
  },
  computed: {
    loggedIn(){
      return this.$storage.getUniversal("loggedIn")
    }
  },
  methods: {
    away() {
      this.mobileMenuToggle = false;
    },
  }
};
</script>