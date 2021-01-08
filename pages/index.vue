<template>
  <div class="home-page">
    <section class="intro">
      <div class="container" style="max-width: 1000px">
        <v-row>
          <v-col cols="12" class="mx-0">
            <v-card outlined>
              <v-card-title style="font-size: 26px;justify-content: center">
                <h1>Dự báo thời tiết</h1>
              </v-card-title>
              <v-card-text>
                <v-row style="justify-content: center;">
                  <v-spacer></v-spacer>
                  <v-col cols="3">
                    <h2>Hà Nội</h2>
                    <div>Thứ 6</div>
                    <div>Mây rải rác</div>
                    <div style="display: flex">
                      <img
                        src="../static/weather/cloudy.png"
                        alt=""
                        width="50px"
                        style="margin-top:10px"
                      />
                      <h1 style="margin-top:30px;margin-left: 4px">12&deg;C</h1>
                    </div>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4" style="margin-right:12px">
                    <div>Khả năng có mưa: 0%</div>
                    <div>Độ ẩm: 45%</div>
                    <div>Gió: 16km/h</div>
                  </v-col>
                </v-row>
                <v-row style="justify-content: center; text-align: center;">
                  <v-col
                    v-for="(weather, index) in infoWeather"
                    :key="index"
                    cols="1"
                    ><div>{{ weather.day }}</div>
                    <img :src="weather.srcimg" width="30px" />
                    <p>{{ weather.temp }}&deg;C</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
    <PostList :isAdmin="false" :posts="loadedPosts" />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import PostList from "~/components/Posts/PostList.vue";
export default {
  components: {
    PostList
  },
  data() {
    return {
      infoWeather: {},
      temp: null,
      now: moment().format("hh:mm:ss A"),
      infoWeather: [
        { day: "T2", temp: 14, srcimg: "/weather/rainsun.png" },
        { day: "T3", temp: 18, srcimg: "/weather/cloudy.png" },
        { day: "T4", temp: 21, srcimg: "/weather/cloudy.png" },
        { day: "T5", temp: 22, srcimg: "/weather/cloudy.png" },
        { day: "T6", temp: 23, srcimg: "/weather/sun.png" },
        { day: "T7", temp: 9, srcimg: "/weather/rain.png" },
        { day: "CN", temp: 11, srcimg: "/weather/rainbow.png" }
      ]
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
      // navigator.geolocation.getCurrentPosition(this.showPosition);
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/forecast?lat=21.027763&lon=105.834160&appid=d49c0ac2d677fdf96b7b8fe99aadd4bf"
        )
        .then(response => {
          console.log(response);
        });
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
  height: 400px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/hanoi.jpg");
  background-position: center;
  background-size: cover;
  background-image: cover;
  opacity: 0.8;
}
/* 
.intro div {
  display: flex;
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
} */

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
