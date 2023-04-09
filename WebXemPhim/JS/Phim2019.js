import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/Functoin.js";

const phim2019HTML = generateHTML(allMovies, (item) => item.year === 2019);
document.getElementById("card").innerHTML = phim2019HTML
