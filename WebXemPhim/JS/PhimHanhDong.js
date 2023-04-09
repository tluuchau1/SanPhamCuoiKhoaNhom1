import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimHanhDongHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Hành Động"));
document.getElementById("card").innerHTML = phimHanhDongHTML