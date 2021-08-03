

export default {
  name: "PostDetail",
 
  created() {
    this.getPostDetail();
  },
  methods: {
    getPostDetail() {
      this.$store.dispatch("postModule/getPostByID", this.$route.params.id);
    },
  },

}