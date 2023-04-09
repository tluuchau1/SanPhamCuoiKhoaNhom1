import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2023TML = generateHTML(allMovies, (item) => item.year === 2023);
document.getElementById("card").innerHTML = phim2023TML
