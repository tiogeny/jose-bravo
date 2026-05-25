let cantidad = 0;
let total = 0;
let modoActual = 0;

function mostrarProductos() {

    const productos = document.getElementById("productos");

    productos.classList.remove("oculto");
    productos.classList.add("mostrar");

    productos.scrollIntoView({
        behavior: "smooth"
    });
}

function agregarCarrito(precio) {

    cantidad++;
    total += precio;

    document.getElementById("cantidad").textContent = cantidad;
    document.getElementById("total").textContent = total;
}

function cambiarEnergia() {

    const hero = document.querySelector(".hero");

    hero.classList.remove("modo1", "modo2", "modo3");

    modoActual++;

    if (modoActual > 3) {
        modoActual = 1;
    }

    hero.classList.add("modo" + modoActual);

    setTimeout(() => {
        hero.classList.remove("modo1", "modo2", "modo3");
    }, 4000);
}