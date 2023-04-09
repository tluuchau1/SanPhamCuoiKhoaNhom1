import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phimCoTrangHTML = generateHTML(allMovies, (item) => item.category.includes("Phim Cổ Trang"));
document.getElementById("card").innerHTML = phimCoTrangHTML