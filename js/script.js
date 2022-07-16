function desplazarBannerAbajo() {
    let banner = document.getElementById("bannerDiv");
    if (banner.className === "conteiner bannerDiv"){
        banner.className += "Desplazado";
    } else {
        banner.className = "conteiner bannerDiv";
    }
}

function insertarTexto(span) {
    span.className += "Desplazado";
    span.desingMode='on';
    span.textContent =" ";
}

function estadoInicial(span) {
    span.className = "cursor";
    span.textContent ="│";
}