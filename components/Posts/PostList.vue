<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="/tech-govt-feature.jpg"
      title="Hello there !"
      previewText="This my first post !"
    />
    <PostPreview
      id="2"
      thumbnail="/tech-govt-feature.jpg"
      title="Hello there !"
      previewText="This my second post !"
    />
    <PostPreview
      id="3"
      thumbnail="/tech-govt-feature.jpg"
      title="Hello there !"
      previewText="This my third post !"
    />
    <PostPreview
      id="4"
      thumbnail="/tech-govt-feature.jpg"
      title="hi!!"
      previewText="This my post !"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
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