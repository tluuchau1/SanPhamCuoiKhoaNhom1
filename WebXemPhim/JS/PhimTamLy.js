import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimTamLyHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Tâm Lý"));
document.getElementById("card").innerHTML = phimTamLyHTML