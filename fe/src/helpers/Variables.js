const api_Key = `8bba250a4ae078f3c27069db5f047c80`;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
export { api_Key, url, POSTER_PATH, BACKDROP_PATH };