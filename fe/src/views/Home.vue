<template>
  <div>
    <!-- hero -->
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-4xl font-bold"><span class="text-orange-400">Cari Film Favoritmu </span> di ChevaMovie</h1>
      <p class="py-6 px-4 text-lg font-medium italic">"a short description or comment on a movie that is displayed on movie posters (or direct to video covers, etc.) to capture the essence of the movie, and ultimately make you watch the movie." -IMDB</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  <!-- Carousel -->
  <carousel></carousel>
  <!-- card -->
  <div>
    <div class="text-4xl font-bold text-primary my-4">Film Populer</div>
        <app-list>
            <movie-card v-for="(item, idx) in movies" :key="idx" v-bind:movieDetails='item' />
        </app-list>
  </div>
<!-- pagination -->
  <div class="my-4">
    <Pagination></Pagination>
  </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue"
import List from '../components/List.vue';
import Pagination from '../components/Pagination.vue'
import { api_Key } from "../helpers/Variables";
import Carousel from "../components/Carousel.vue";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`;
export default{
name: "Home",
data() {
    return { movies: [] };
  },
  // METHODS HAVE ACCESS TO DATA THROUGH THIS KEYWORD
  methods: {
    async fetchData() {
      try {
        if (!this.movies.length > 0) {
          const res = await fetch(url);
          const movies = await res.json();
          this.movies = [...movies.results];
        }
      } catch (error) {
        alert(error);
      }
    }
  },
  // LIFE CYCLE HOOK (CREATED)
  created() {
    this.fetchData();
  },
  // COMPONENTS
  components: {
    MovieCard,
    "app-list": List,
    Carousel
}
}
</script>