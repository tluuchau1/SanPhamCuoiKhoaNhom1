import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimHaiHuocHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Hài Hước"));
document.getElementById("card").innerHTML = phimHaiHuocHTML