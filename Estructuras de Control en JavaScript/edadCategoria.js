function actividadEdad() {
    let edad = parseInt(prompt("Actividad 1 - Ingresa tu edad:"));
    let resultado = "";

    if (isNaN(edad)) {
        resultado = "Por favor, ingresa un número válido.";
    } else if (edad < 0) {
        resultado = "Edad no válida";
    } else if (edad <= 12) {
        resultado = "Niño";
    } else if (edad <= 17) {
        resultado = "Adolescente";
    } else if (edad <= 59) {
        resultado = "Adulto";
    } else {
        resultado = "Adulto mayor";
    }

    const mensaje = "Edad ingresada: " + edad + " | Categoría: " + resultado;
    console.log("%cActividad 1: Clasificación de Edad", "color: blue; font-weight: bold;");
    console.log(mensaje);

    document.getElementById("resultadoEdad").innerHTML =
        `<h2>Actividad 1: Clasificación de Edad</h2>
         <p><strong>Edad ingresada:</strong> ${edad}</p>
         <p><strong>Categoría:</strong> ${resultado}</p>`;

    // Ejecuta la siguiente actividad
    actividadTabla();
}