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

    alert(`El monto de cada cuota para impresiones 3D es: $${cuota.toFixed(2)}`);
}

let impresiones3D = [
    { descripcion: "dragon 3D", valor: 1000 },
    { descripcion: "lampara 3D", valor: 1500 },
    { descripcion: "llavero 3D", valor: 2000 }
];

let deseaCalcular = true;

while (deseaCalcular) {

    console.log("Opciones disponibles:");

    for (let i = 0; i < impresiones3D.length; i++) {
        console.log(`${i + 1}. ${impresiones3D[i].descripcion} - Valor: $${impresiones3D[i].valor}`);
    }

    let opcionSeleccionada = parseInt(prompt("Seleccione una opción (1. dragon 3D, 2. lampara 3D, 3. llavero 3D):")) - 1;

    if (isNaN(opcionSeleccionada) || opcionSeleccionada < 0 || opcionSeleccionada >= impresiones3D.length) {
        alert("Opción no válida. Por favor, elija una opción válida.");
        continue; 
    }

    let cuotasSeleccionadas = parseInt(prompt(`Ingrese la cantidad de cuotas (1, 6, o 12) para ${impresiones3D[opcionSeleccionada].descripcion} - Valor: $${impresiones3D[opcionSeleccionada].valor}:`));

    calcularCuotas(impresiones3D[opcionSeleccionada].valor, cuotasSeleccionadas);

    let respuesta = prompt("¿Desea realizar otro cálculo? (Sí/No)").toLowerCase();
    deseaCalcular = respuesta === "si" || respuesta === "sí";
}
