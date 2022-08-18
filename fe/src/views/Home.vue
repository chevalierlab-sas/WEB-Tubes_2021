<template>
  <div>
    <!-- hero -->
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-4xl font-bold"><span class="text-orange-400">Cari Film Favoritmu </span> di ChevaMovie</h1>
      <p class="py-6"> a short description or comment on a movie that is displayed on movie posters (or direct to video covers, etc.) to capture the essence of the movie, and ultimately make you watch the movie. -IMDB</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

  <!-- Carousel -->
<div class="w-full px-40 bg-base-300">
  <div class="carousel">
  <div id="item1" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
  </div>
</div> 
<div class="flex justify-center py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
</div>
  <!-- card -->
  <div>
    <h1>Film Terpopuler</h1>
        <app-list>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
            <movie-card></movie-card>
        </app-list>
  </div>

  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue"
import ListVue from '../components/List.vue';

export default{
    name: 'Home',
    components: {
      MovieCard,
      'app-list' : ListVue,
    },
}
</script>