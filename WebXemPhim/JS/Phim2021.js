import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2021HTML = generateHTML(allMovies, (item) => item.year === 2021);
document.getElementById("card").innerHTML = phim2021HTML
