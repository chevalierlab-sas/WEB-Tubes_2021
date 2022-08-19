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
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  <!-- card -->
  <div>
    <div class="text-4xl font-bold text-primary my-4">Film Terpopuler</div>
        <app-list>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>

            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
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
import ListVue from '../components/List.vue';
import Pagination from '../components/Pagination.vue'

export default{
    name: 'Home',
    components: {
    MovieCard,
    "app-list": ListVue,
    Pagination
},
}
</script>