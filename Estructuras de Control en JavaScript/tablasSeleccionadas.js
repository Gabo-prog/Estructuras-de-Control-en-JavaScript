function actividadTablas() {
    let tipo = prompt("Actividad 3 - ¿Deseas ver tablas de números 'pares' o 'impares'?").toLowerCase();
    let contenido = "<h2>Actividad 3: Tablas Pares o Impares</h2>";

    console.log("%cActividad 3: Tablas Pares o Impares", "color: purple; font-weight: bold;");
    if (tipo === "pares" || tipo === "impares") {
        let esPar = tipo === "pares";
        contenido += `<p><strong>Mostrando tablas de números ${tipo}</strong></p>`;
        for (let i = 1; i <= 10; i++) {
            if ((esPar && i % 2 === 0) || (!esPar && i % 2 !== 0)) {
                contenido += `<div><strong>Tabla del ${i}</strong><br>`;
                console.log(`Tabla del ${i}`);
                for (let j = 1; j <= 12; j++) {
                    let linea = `${i} x ${j} = ${i * j}`;
                    contenido += `${linea}<br>`;
                    console.log(linea);
                }
                contenido += `</div><br>`;
            }
        }
    } else {
        contenido += "<p>Opción no válida. Escribe 'pares' o 'impares'.</p>";
        console.log("Opción no válida ingresada.");
    }

    document.getElementById("resultadoTablas").innerHTML = contenido;
}