function calcularCuotas(monto, cuotas) {
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    
    let cuota;

    switch (cuotas) {
        case 1:
            cuota = monto;
            break;
        case 6:
            cuota = monto / 6 * 1.05; 
            break;
        case 12:
            cuota = monto / 12 * 1.1; 
            break;
        default:
            alert("Número de cuotas no válido. Por favor, ingrese 1, 6 o 12.");
            return;
    }

    
    alert("El monto de cada cuota para impresiones 3D es: $" + cuota.toFixed(2));
}
let impresiones3D = [
    { descripcion: "dragon 3D ", valor: 1000, cuotas: 6 },
    { descripcion: "lampara 3D", valor: 1500, cuotas: 12 },
    {descripcion: "llavero 3D", valor: 2000, cuotas : 6}
];


let deseaCalcular = true;

while (deseaCalcular) {

    let opciones = "Seleccione una opción:\n";
    for (let i = 0; i < impresiones3D.length; i++) {
        opciones += (i + 1) + ". " + impresiones3D[i].descripcion + "\n";
    }
    
    let opcionSeleccionada = parseInt(prompt(opciones)) - 1;

    if (isNaN(opcionSeleccionada) || opcionSeleccionada < 0 || opcionSeleccionada >= impresiones3D.length) {
        alert("Opción no válida. Por favor, elija una opción válida.");
        continue; 
    }

    calcularCuotas(impresiones3D[opcionSeleccionada]);
    let respuesta = prompt("¿Desea realizar otro cálculo? (Sí/No)").toLowerCase();
    deseaCalcular = respuesta === "si" || respuesta === "sí";
}