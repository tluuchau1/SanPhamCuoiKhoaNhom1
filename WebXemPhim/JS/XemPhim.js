import { allMovies } from "../DATA/DataALLMovies.js";
import { watchMovieHTML } from "../DATA/FunctoionWacth.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");

   if (categoryParam === "tho-san-thanh-pho-can-cu-bi-mat-shinjuku") {
      const phim1 = watchMovieHTML(allMovies, "Thợ Săn Thành Phố: Căn Cứ Bí Mật Shinjuku");
      document.getElementById("watch").innerHTML = phim1;
   } else if (categoryParam === "josee-to-tora-to-sakana-tachi") {
      const phim2 = watchMovieHTML(allMovies, "Josee to Tora to Sakana-tachi");
      document.getElementById("watch").innerHTML = phim2;
   } else if (categoryParam === "hibike-euphonium-movie-3-chikai-no-finale") {
      const phim3 = watchMovieHTML(allMovies, "Hibike! Euphonium Movie 3: Chikai no Finale");
      document.getElementById("watch").innerHTML = phim3;
   } else if (categoryParam === "mahouka-koukou-no-rettousei-tsuioku-hen") {
      const phim4 = watchMovieHTML(allMovies, "Mahouka Koukou no Rettousei: Tsuioku-hen");
      document.getElementById("watch").innerHTML = phim4;
   } else if (categoryParam === "clannad-movie") {
      const phim5 = watchMovieHTML(allMovies, "Clannad Movie");
      document.getElementById("watch").innerHTML = phim5;
   } else if (categoryParam === "dau-pha-thuong-khung-tam-nien-chi-uoc") {
      const phim6 = watchMovieHTML(allMovies, "Đấu Phá Thương Khung: Tam Niên Chi Ước");
      document.getElementById("watch").innerHTML = phim6;
   } else if (categoryParam === "hoc-vien-anh-hung-3-nhiem-vu-giai-cuu-the-gioi") {
      const phim7 = watchMovieHTML(allMovies, "Học Viện Anh Hùng 3: Nhiệm Vụ Giải Cứu Thế Giới");
      document.getElementById("watch").innerHTML = phim7;
   } else if (categoryParam === "toa-nha-troi-dat") {
      const phim8 = watchMovieHTML(allMovies, "Tòa Nhà Trôi Dạt");
      document.getElementById("watch").innerHTML = phim8;
   } else if (categoryParam === "pokemon-bien-nien-su-arceus") {
      const phim9 = watchMovieHTML(allMovies, "Pokemon: Biên Niên Sử Arceus");
      document.getElementById("watch").innerHTML = phim9;
   } else if (categoryParam === "yuru-camp-movie") {
      const phim10 = watchMovieHTML(allMovies, "Yuru Camp Movie");
      document.getElementById("watch").innerHTML = phim10;
   } else if (categoryParam === "that-hinh-dai-toi-moi-thu-edinburgh-phan-1") {
      const phim11 = watchMovieHTML(allMovies, "Thất Hình Đại Tội: Mối Thù Edinburgh Phần 1");
      document.getElementById("watch").innerHTML = phim11;
   } else if (categoryParam === "eiga-daisuki-pompo-san") {
      const phim12 = watchMovieHTML(allMovies, "Eiga Daisuki Pompo-san");
      document.getElementById("watch").innerHTML = phim12;
   } else if (categoryParam === "isekai-ojisan") {
      const phim13 = watchMovieHTML(allMovies, "Isekai Ojisan");
      document.getElementById("watch").innerHTML = phim13;
   } else if (categoryParam === "hoc-vien-anh-hung-6") {
      const phim14 = watchMovieHTML(allMovies, "Học Viện Anh Hùng 6");
      document.getElementById("watch").innerHTML = phim14;
   } else if (categoryParam === "cuoc-song-nong-dan-o-the-gioi-khac") {
      const phim15 = watchMovieHTML(allMovies, "Cuộc sống nông dân ở thế giới khá");
      document.getElementById("watch").innerHTML = phim15;
   } else if (categoryParam === "phu-thuy-bang-kiem-se-thong-tri-the-gioi") {
      const phim16 = watchMovieHTML(allMovies, "Phù Thủy Băng Kiếm Sẽ Thống Trị Thế Giới");
      document.getElementById("watch").innerHTML = phim16;
   } else if (categoryParam === "trieu-hoi-su-cuoi-cung") {
      const phim17 = watchMovieHTML(allMovies, "Triệu Hồi Sư Cuối Cùng");
      document.getElementById("watch").innerHTML = phim17;
   } else if (categoryParam === "nijiyon-animation") {
      const phim18 = watchMovieHTML(allMovies, "Nijiyon Animation");
      document.getElementById("watch").innerHTML = phim18;
   } else if (categoryParam === "malevolent-spirits-mononogatari-2023") {
      const phim19 = watchMovieHTML(allMovies, "Malevolent Spirits: Mononogatari");
      document.getElementById("watch").innerHTML = phim19;
   } else if (categoryParam === "am-duong-su-manh-nhat-chuyen-sinh") {
      const phim20 = watchMovieHTML(allMovies, "Âm dương sư mạnh nhất chuyển sinh");
      document.getElementById("watch").innerHTML = phim20;
   }
});
