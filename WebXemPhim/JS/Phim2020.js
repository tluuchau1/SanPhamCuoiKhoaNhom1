import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2020HTML = generateHTML(allMovies, (item) => item.year === 2020);
document.getElementById("card").innerHTML = phim2020HTML
