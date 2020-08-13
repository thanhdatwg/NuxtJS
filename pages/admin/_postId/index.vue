<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-dafee.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      // sự kiện đc bắn từ component con AdminPostForm
      this.$store
        .dispatch("editPost", editedPost)
        .then((res) => {
          this.$router.push("/admin"); // sau khi save thì quay trở lại admin
        })
        .catch((e) => console.log(e))
        .finally(() => {});
    },
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>