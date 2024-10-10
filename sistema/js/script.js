const imgBanner = ['../sistema/assets/img/propaganda1.jpg', '../sistema/assets/img/propaganda2.jpg', '../sistema/assets/img/propaganda3.jpg']

// definemos as imagens do banner

let fotoInicial = 0;
// index inicial da foto do banner

function slider(){
    // encontrar i banner na pg
    const banner = document.getElementById('banner');
    banner.style.backgroundImage = `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    // mudar para a proxima foto
    if(fotoInicial >= imgBanner.length) {
        fotoInicial = 0;
    }
}

setInterval(slider, 2500)