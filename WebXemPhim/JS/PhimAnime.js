import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimAnimeHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Anime"));
document.getElementById("card").innerHTML = phimAnimeHTML