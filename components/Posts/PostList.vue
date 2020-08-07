<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-Admin="isAdmin"
      thumbnail="/post.jpg"
      title="Hello there !"
      previewText="This my first post !"
    />
    <PostPreview
      id="2"
      :is-Admin="isAdmin"
      thumbnail="/post1.jpg"
      title="Hello there !"
      previewText="This my second post !"
    />
    <PostPreview
      id="3"
      :is-Admin="isAdmin"
      thumbnail="/post2.jpg"
      title="Hello there !"
      previewText="This my third post !"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>