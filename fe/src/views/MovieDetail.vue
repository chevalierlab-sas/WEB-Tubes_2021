<template>
  <div>
    <div class="hero">
      <div class="hero max-w-full">
        <figure><img v-bind:src="imgPath" /></figure>
      </div>

      <div class="hero-overlay bg-opacity-60">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <div class="card-compact bg-base-100 shadow-xl">
              <img v-bind:src="imgPath" />
            </div>
            <h1 class="mb-5 text-4xl font-bold">{{ movie.title }}</h1>
            <div class="badge-md badge-secondary">
              ⭐{{ movie.vote_average }}/10
              <span class="font-medium">({{ movie.vote_average }} votes)</span>
            </div>
            <p class="my-5">{{ movie.overview }}</p>
            <p class="mb-2 font-bold">Tanggal Rilis {{ movie.release_date }}</p>
            <p class="mb-5 badge badge-primary badge-outline">
              {{ movie.status }}
            </p>
            <div v-if="movie.genres">
              <span class="badge">Genres</span>
              <span class="value">{{
                movie.genres.map((genre) => genre.name).join(", ")
              }}</span>
            </div>
            <div v-if="movie.production_companies">
              <span class="badge">Production</span>
              <span class="value">{{
                movie.production_companies
                  .map((production) => production.name)
                  .join(", ")
              }}
              </span>
            </div>
            <div class="mt-5 badge-secondary font-bold">Tagline</div>
            <div class="mt-5 text-5xl italic font-medium">"{{ movie.tagline }}"</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p>{{movie.name}}</p>
    <img v-bind:src='imgPath' alt="">
    <p>{{movie.title}}</p>
    <p>{{movie.budget}}</p>
    <p>{{movie.overview}}</p>
    <p>{{movie.poster_path}}</p>
    <p>{{movie.release_date}}</p>
    <p>{{movie.runtime}}</p>
    <p>{{movie.tagline}}</p> -->
  </div>
</template>

<script>
import { api_Key } from "../helpers/Variables";
import { BACKDROP_PATH } from "../helpers/Variables";

export default {
  // COMPONENT NAME
  name: "MovieDetail",
  // DATA (ALWAYS A FUNCTION THAT RETURNS AN OBJECT)
  data() {
    return {
      movie: {},
    };
  },
  // METHODS HAVE ACCESS TO DATA THROUGH THIS KEYWORD
  methods: {
    async fetchData() {
      try {
        const routeParam = `${this.$route.params.id}`;
        const url = `https://api.themoviedb.org/3/movie/${routeParam}?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`;
        const res = await fetch(url);
        const movie = await res.json();
        this.movie = { ...movie };
      } catch (error) {
        alert(error);
      }
    },
  },
  // LIFE CYCLE HOOK (CREATED)
  created() {
    this.fetchData();
  },
  // COMPUTED PROPERTIES
  computed: {
    // WILL GENERATE THE IMAGE LINK
    imgPath() {
      const imgLink = `${BACKDROP_PATH}${this.movie.poster_path}`;
      return imgLink;
    },
  },
};
</script>
