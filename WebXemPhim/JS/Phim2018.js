import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2018HTML = generateHTML(allMovies, (item) => item.year === 2018);
document.getElementById("card").innerHTML = phim2018HTML
