


/* Aviso de cookie*/

const cookieBanner = document.getElementById("cookie-banner")
const cookieAccept = document.getElementById("cookie-accept")

// Verifica se o usuario ja aceitou os cookies
if (localStorage.getItem("cookiesAcepted") === "true") {
    cookieBanner.style.display= "none";
}

// Botao "acriatar"
cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookiesAcepted", "true");
    cookieBanner.style.display= "none";
});