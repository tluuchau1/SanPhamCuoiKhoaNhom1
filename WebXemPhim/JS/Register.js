const $email = document.getElementById("email");
const $login = document.getElementById("btn");

$login.onclick = () => {
    let email = $email.value;
    if (!isEmailValid(email)) alert("Email không hợp lệ");
    // if (!isEmailExisted(email)) alert("Email không tồn tại");
};

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

const $text = document.getElementById("register-text");

$text.onclick = () => {
    document.getElementById("login-modal").style.display = "none";
    document.getElementById("register-modal").style.display = "block";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
