let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;

if (edad < 18) {
    let precioFinal = tarifaBase * 0.8; // 20% de descuento
    console.log("Precio final: " + precioFinal.toFixed(2));
}
else if (edad >= 65) {
    let precioFinal = tarifaBase * 0.6; // 40% de descuento
    console.log("Precio final: " + precioFinal.toFixed(2));
}