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
        },
        {
          name: "Products",
          path: "/products"
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
    logout() {
      this.$fireAuth.signOut().then( _ => {
        this.$router.push("/");
      } )
    }
  }
};
</script>
