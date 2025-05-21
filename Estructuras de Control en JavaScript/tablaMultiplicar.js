// Función para mostrar la tabla de multiplicar de un número ingresado
function actividadTabla() {
    let numero = parseInt(prompt("Actividad 2 - Ingresa un número para su tabla de multiplicar:"));
    let contenido = "<h2>Actividad 2: Tabla de Multiplicar</h2>";

    console.log("%cActividad 2: Tabla de Multiplicar", "color: green; font-weight: bold;");
    if (isNaN(numero)) {
        contenido += "<p>Por favor, ingresa un número válido.</p>";
        console.log("Número inválido ingresado.");
    } else {
        contenido += `<p><strong>Tabla del ${numero}</strong></p>`;
        for (let i = 1; i <= 12; i++) {
            let linea = `${numero} x ${i} = ${numero * i}`;
            contenido += `<p>${linea}</p>`;
            console.log(linea);
        }
    }

    // Mostrar resultado en el HTML
    document.getElementById("resultadoTabla").innerHTML = contenido;

    // Ejecuta la siguiente actividad
    actividadTablas();
}