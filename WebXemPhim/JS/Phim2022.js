import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2022HTML = generateHTML(allMovies, (item) => item.year === 2022);
document.getElementById("card").innerHTML = phim2022HTML
