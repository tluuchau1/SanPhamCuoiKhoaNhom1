// import { users } from "./Users.js";

// console.log(12, users);
const $email = document.getElementById("email");
const $btnLogin = document.getElementById("btn-login");

let email = $email.value;
$btnLogin.onclick = () => {
    if (!isEmailValid(email)) alert("Email không hợp lệ");
    const checkEmail = users.find((x) => x.email != email);
    if (checkEmail) {
        alert("Email không tồn tại");
    }
    // if (!isEmailExisted(email)) alert("Email không tồn tại");
};

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const $register = document.getElementById("register-text");
const $btnRegister = document.getElementById("btn-register");
const $password = document.getElementById("password");
const $retypePassword = document.getElementById("retype-password");

$register.onclick = () => {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("register-modal").style.display = "block";
};

$btnRegister.onclick = () => {
    if ($password.value != $retypePassword.value) alert("Password không hợp lệ");
    if (!isEmailValid(email)) alert("Email không hợp lệ");
    const checkEmail = users.find((x) => x.email == email);
    if (checkEmail) {
        alert("Email đã tồn tại");
    }
    // if (!isEmailExisted(email)) alert("Email không tồn tại");
};

// export function handleDangNhap() {
//   console.log($email);
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
