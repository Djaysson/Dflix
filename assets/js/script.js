// api key do TMDB
const api = "api_key=f5ca82bccd32a016fca0a84e901ca601";
// base da url site
const base_url = "https://api.themoviedb.org/3";
// url final
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img da url
const img_url = "https://image.tmdb.org/t/p/original";

// solicitação dos dados dos filmes
const requests = {
  fetchBannerImage: `${base_url}/discover/tv?${api}&language=pt-BR&with_networks=213`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=pt-BR`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchSeries: `${base_url}/discover/tv?${api}&language=pt-BR&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=36`,
};

// usando o truncate de string
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner
fetch(requests.fetchBannerImage)
  .then((res) => res.json())
  .then((data) => {
    // a cada atualização o filme será alterado
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("title");
    var banner__desc = document.getElementById("description");
    banner.style.backgroundImage =
      "url(" + img_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });

//Tendência agora
fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const carrousel = document.getElementById("movie");

    data.results.forEach((movie) => {
      const items = document.createElement("div");
      items.className = "item";
      items.classList.add("item");
      carrousel.appendChild(items);
      const poster = document.createElement("img");
      poster.className = "box-filmes";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      items.appendChild(poster);
    });
  });

//Mais votado
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const carrousel = document.getElementById("trending");

    data.results.forEach((movie) => {
      const items = document.createElement("div");
      items.className = "item";
      items.classList.add("item");
      carrousel.appendChild(items);
      const poster = document.createElement("img");
      poster.className = "box-filmes";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      items.appendChild(poster);
    });
  });

//Séries
fetch(requests.fetchSeries)
  .then((res) => res.json())
  .then((data) => {
    const carrousel = document.getElementById("series");

    data.results.forEach((movie) => {
      const items = document.createElement("div");
      items.className = "item";
      items.classList.add("item");
      carrousel.appendChild(items);
      const poster = document.createElement("img");
      poster.className = "box-filmes";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      items.appendChild(poster);
    });
  });

//documentários
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    const carrousel = document.getElementById("documentary");

    data.results.forEach((movie) => {
      const items = document.createElement("div");
      items.className = "item";
      items.classList.add("item");
      carrousel.appendChild(items);
      const poster = document.createElement("img");
      poster.className = "box-filmes";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      items.appendChild(poster);
    });
  });
