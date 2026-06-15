document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const track = document.getElementById("carrusel");
    const img = track.children;

    let autoScroll = setInterval(moverSiguiente, 3500);

    function moverSiguiente() {
        index++;
        if (index >= img.length) index = 0;
        track.scrollLeft = img[index].offsetLeft;
    }

    function reiniciarAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(moverSiguiente, 3500);
    }

    document.getElementById("next").addEventListener("click", () => {
        clearInterval(autoScroll);
        moverSiguiente();
        reiniciarAutoScroll();
    });

    document.getElementById("prev").addEventListener("click", () => {
        clearInterval(autoScroll);
        index--;
        if (index < 0) index = img.length - 1;
        track.scrollLeft = img[index].offsetLeft;
        reiniciarAutoScroll();
    });
});