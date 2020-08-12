import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                thumbnail: "/post.jpg",
                title: "Hello there !",
                previewText: "This my first post !"
              },
              {
                id: "2",
                thumbnail: "/post1.jpg",
                title: "Hello there !",
                previewText: "This my second post !"
              },
              {
                id: "3",
                thumbnail: "/post2.jpg",
                title: "Hello there !",
                previewText: "This my third post !"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
