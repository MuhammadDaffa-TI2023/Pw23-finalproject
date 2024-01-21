function authenticate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "dffa@gmail.com" & password === "qwe") {
        alert("Login berhasil!");
        window.location.href = "dashboard/index2.html";
    } else {
        alert("Login gagal. Coba lagi.");
    }
}