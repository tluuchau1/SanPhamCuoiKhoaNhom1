export function homeGenerateHTML(allMovies, condition, numberStart, numberEnd) {
   let result = "";
   let arr = allMovies.filter(condition);
   let newArr = [];
   if (numberStart != -1) {
      newArr = arr.reverse().slice(numberStart, numberEnd);
   } else {
      newArr = arr;
   }

   for (let i = 0; i < newArr.length; i++) {
      const Item = newArr[i];

      result += `
            <p class="card-label">${Item.episode} ${Item.nowPlaying}</p>
            <a href="${Item.link1}" title="${Item.name}">
                <img class="card-img" src="${Item.image}" alt="${Item.name}" />
                <p class="card-title">${Item.name}</p>
                <i class="fa-solid fa-circle-play card-icon-play"></i>
            </a>
        `;
   }
   return result;
}
