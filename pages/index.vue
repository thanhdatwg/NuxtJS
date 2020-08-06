<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech new!</h1>
    </section>
    <section class="featured-posts">
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
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import PostPreview from "~/components/Posts/PostPreview.vue";

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/abc.jpeg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
