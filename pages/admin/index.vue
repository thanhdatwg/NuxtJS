<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('/admin/new-post')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Post</h1>
      <PostList isAdmin/>
    </section>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";
export default {
  components: {
    PostList,
  }
}
</script>

<style scoped>
.admin-page{
  padding: 20px;
}
.new-post{
  text-align:center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.new-post button{
  border: 3px solid rgb(107, 145, 201);
  border-radius: 5px;
  background-color: rgb(171, 171, 218);
}
.existing-posts h1 {
  text-align:center;
  padding-top: 10px;
}
 
</style>