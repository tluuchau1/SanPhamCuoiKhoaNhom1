export function generateHTML(allMovies, condition) {
    let result = "";

    for (let i = allMovies.length - 1; i >= 0; i--) {
        const Item = allMovies[i];

        if (condition(Item)) {
            // Kiểm tra điều kiện với giá trị condition
            result += `
            <li class="card">
            <p class="card-label">${Item.nowPlaying}</p>
            <a href="${Item.link}" title="${Item.name}">
                <img class="card-img" src="${Item.image}" alt="" />
                <p class="card-title">${Item.name}</p>
                <i class="fa-solid fa-circle-play card-icon-play"></i>
            </a>
        </li>
        `;
        }
    }
    return result;
}
