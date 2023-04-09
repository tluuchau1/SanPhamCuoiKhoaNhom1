import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimSapChieuHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Sắp Chiếu"));
document.getElementById("card").innerHTML = phimSapChieuHTML