import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimMaKinhDiHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Ma - Kinh Dị"));
document.getElementById("card").innerHTML = phimMaKinhDiHTML