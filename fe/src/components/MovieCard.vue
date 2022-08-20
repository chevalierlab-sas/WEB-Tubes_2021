<template>
    <div class="cursor-pointer">
        <div class="card w-64 bg-base-100 shadow-xl">
  <router-link v-bind:to="linkParams">
  <figure><img v-bind:src='imgPath'/></figure>
  </router-link>
  <div class="card-body">
    <h2 class="card-title text-xl">
      {{movieDetails.title}}
      <div class="badge badge-secondary"><small>⭐{{ movieDetails.vote_average }}/10</small></div>
    </h2>
    <p class="text-sm">{{movieDetails.overview.substring(0,150) + " ..."}}</p>
    <div class="card-actions justify-end">
      <span class="text-sm text-primary">Tanggal Rilis : </span>
      <div class="badge badge-outline">{{ movieDetails.release_date}}</div> 
    </div>
  </div>
</div>

    </div>
</template>

<script>
import { POSTER_PATH } from "../helpers/Variables";


  export default{
    name: "MovieCard",
    data() {
    return {};
  },
  computed: {
    // WILL GENERATE THE IMAGE LINK
    imgPath() {
      const imgLink = `${POSTER_PATH}${this.movieDetails.poster_path}`;
      return imgLink;
    },
    linkParams() {
      const linkParam = `/movie/${this.movieDetails.id}`;
      return linkParam;
    }
  },
  methods: {},
  created() {
    // this.getImg();
  },
  // PROPS
  props: {
    movieDetails: Object
  }
  
  }
  
</script>
