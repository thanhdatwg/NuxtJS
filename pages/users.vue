<template>
  <div>
    <v-text-field v-model="userId" label="Input ID" dense solo></v-text-field>
    <v-btn @click="onLoadUser" color="secondary">Load User</v-btn>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    },
  },
  layout: 'users'
};
</script>

<style scoped>

</style>