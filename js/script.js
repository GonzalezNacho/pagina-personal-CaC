function desplazarBannerAbajo() {
    let banner = document.getElementById("bannerDiv");
    if (banner.className === "conteiner bannerDiv"){
        banner.className += "Desplazado";
    } else {
        banner.className = "conteiner bannerDiv";
    }
}