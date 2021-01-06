<template>
  <div class="home-page">
    <section class="intro">
      <div>{{ temp }}&deg;C</div>
    </section>
    <PostList :isAdmin="false" :posts="loadedPosts" />
  </div>
</template>

<script>
import axios from "axios";
import PostList from "~/components/Posts/PostList.vue";

export default {
  components: {
    PostList
  },
  data() {
    return {
      infoWeather: {},
      temp: null
    };
  },
  mounted() {
    this.getInfoWeather();
    setInterval(() => {
      this.getInfoWeather();
    }, 600000);
  },
  methods: {
    getInfoWeather() {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    },

    showPosition(position) {
      let location = position.coords.latitude + "+" + position.coords.longitude;
      console.log(location);
      axios
        .get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/locations/" +
            location +
            "/nearbyCities?radius=100",
          {
            headers: {
              "x-rapidapi-key":
                "a7bd93d8damshc94cebeb5d84caap1521a9jsn2f6dd44d649a",
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
            }
          }
        )
        .then(response => {
          console.log(response.data.data[0].name);
          let city = response.data.data[0].name;
          axios
            .get(
              "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&appid=3265874a2c77ae4a04bb96236a642d2f"
            )
            .then(response => {
              console.log(response.data);
              this.infoWeather = response.data;
              this.temp = Math.floor(response.data.main.temp - 273.15);
            })
            .catch(e => {
              alert("Get location error");
              axios
                .get(
                  "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=3265874a2c77ae4a04bb96236a642d2f"
                )
                .then(response => {
                  console.log(response.data);
                  this.infoWeather = response.data;
                  this.temp = Math.floor(response.data.main.temp - 273.15);
                });
              console.log(e);
            });
        });
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/anhnen2.jpg");
  background-position: center;
  background-size: cover;
}

.intro div {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 80%;
  height: 30%;
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
