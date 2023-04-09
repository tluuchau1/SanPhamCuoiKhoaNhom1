import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimTinhCamHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Tình Cảm"));
document.getElementById("card").innerHTML = phimTinhCamHTML