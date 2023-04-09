import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimBoHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Bộ"));
document.getElementById("card").innerHTML = phimBoHTML