function desplazarBannerAbajo() {
    let banner = document.getElementById("bannerDiv");
    if (banner.className === "conteiner bannerDiv"){
        banner.className += "Desplazado";
    } else {
        banner.className = "conteiner bannerDiv";
    }
}

function insertarTexto() {
    let span = document.getElementById("cursor");
    if (span.className === "cursor"){
        span.className += "Desplazado";
        span.textContent ="";
    } else {
        span.className = "cursor";
        span.textContent ="│";
        span.contentEditable = "false";
    }
}