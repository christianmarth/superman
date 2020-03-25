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
          path: "login"
        }
      ],
      mobileMenuToggle: false
    };
  },
  methods: {
    away() {
      this.mobileMenuToggle = false;
    }
  }
};
</script>