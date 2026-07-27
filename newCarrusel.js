document.querySelectorAll(".contenedor-carrusel").forEach(contenedor => {

    const filas = contenedor.querySelector(".filas");
    const next = contenedor.querySelector(".next");
    const prev = contenedor.querySelector(".prev");

    const caja = filas.querySelector(".caja");
    const anchoCaja = caja.offsetWidth + 20;

    next.addEventListener("click", () => {
        filas.scrollBy({
            left: anchoCaja,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        filas.scrollBy({
            left: -anchoCaja,
            behavior: "smooth"
        });
    });

});