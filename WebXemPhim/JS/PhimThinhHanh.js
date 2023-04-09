import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimThinhHanhHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Lẻ"));
document.getElementById("card").innerHTML = phimThinhHanhHTML