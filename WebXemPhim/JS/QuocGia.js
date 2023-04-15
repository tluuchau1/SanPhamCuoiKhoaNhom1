import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/FunctoinCard.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");

   if (categoryParam === "PhimVietNam") {
      $("#category-text").text("PHIM VIỆT NAM");
      $(".title-home span").text("Phim Việt Nam");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Việt Nam"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimNhatBan") {
      $("#category-text").text("PHIM NHẬT BẢN");
      $(".title-home span").text("Phim Nhật Bản");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Nhật Bản"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimAuMy") {
      $("#category-text").text("PHIM ÂU MỸ");
      $(".title-home span").text("Phim Âu Mỹ");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Âu Mỹ"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimHanQuoc") {
      $("#category-text").text("PHIM HÀN QUỐC");
      $(".title-home span").text("Phim Hàn Quốc");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Hàn Quốc"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimThaiLan") {
      $("#category-text").text("PHIM THÁI LAN");
      $(".title-home span").text("Phim Thái Lan");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Thái Lan"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimAnDo") {
      $("#category-text").text("PHIM ẤN ĐỘ");
      $(".title-home span").text("Phim Ấn Độ");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Ấn Độ"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimTrungQuoc") {
      $("#category-text").text("PHIM TRUNG QUỐC");
      $(".title-home span").text("Phim Trung Quốc");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Trung Quốc"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimDaiLoan") {
      $("#category-text").text("PHIM ĐÀI LOAN");
      $(".title-home span").text("Phim Đài Loan");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Đài Loan"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else {
      $("#category-text").text("PHIM HỒNG KÔNG");
      $(".title-home span").text("Phim Hồng Kông");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.country.includes("Phim Hồng Kông"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   }
});
