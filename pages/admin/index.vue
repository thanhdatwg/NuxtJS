<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList :isAdmin="true" :posts="$store.state.loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
import AppButton from "~/components/UI/AppButton.vue";
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    PostList,
    AppButton,
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    },
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.new-post button {
  border-radius: 5px;
}
.existing-posts h1 {
  text-align: center;
  padding-top: 10px;
}
</style>