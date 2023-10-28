const carContainer = document.getElementById("car-container");
const roadContainer = document.getElementById("road-container");
let carPos = 0;
let impulso = 0;
let tiempo = 0;
let tiempoTranscurrido = 0;
let interval; // Agrega esta línea para definir la variable de intervalo

function moverCarro() {
  if (carPos < impulso) {
    carPos += 5; // Ajusta la velocidad del coche según tus necesidades
    carContainer.style.left = carPos + "px";
    tiempoTranscurrido += 50; // Aumenta el tiempo transcurrido en 50 milisegundos
  } else {
    clearInterval(interval); // Detiene el movimiento del coche cuando alcanza el impulso
    calcularVelocidadRecorrida();
  }
}

const miBoton = document.getElementById("miBoton");

    miBoton.addEventListener("click", function() {
        // Redirigir a los usuarios a la página de Google cuando se hace clic en el botón
        window.location.href = "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html";
    });
const startSimulationBtn = document.getElementById("startSimulationBtn");

startSimulationBtn.addEventListener("click", function() {
    impulso = parseFloat(document.getElementById("input2").value);
    tiempo = parseFloat(document.getElementById("input3").value);

    if (isNaN(impulso) || impulso <= 0 || isNaN(tiempo) || tiempo <= 0) {
        alert("Por favor, ingrese valores válidos y positivos para Fuerza de Impulso y Tiempo.");
        return;
    }

    const roadWidth = roadContainer.clientWidth;
    const velocidad = roadWidth / impulso * 5;

    interval = setInterval(moverCarro, velocidad);
});


function calcularVelocidadRecorrida() {
    const masa = parseFloat(document.getElementById("input1").value);
    const coeficienteFriccion = parseFloat(document.getElementById("input4").value);
    const aceleracionGravedad = 9.81; // m/s^2
    
    // Calcula la fuerza de fricción
    const fuerzaNormal = masa * aceleracionGravedad;
    const fuerzaFriccion = coeficienteFriccion * fuerzaNormal;

    // Fuerza impulsora proporcionada por el usuario (ya está en impulso)
    const fuerzaImpulsora = impulso;

    // Calcula la fuerza neta
    const fuerzaNeta = fuerzaImpulsora - fuerzaFriccion;

    // Calcula la aceleración usando la segunda ley de Newton (Fuerza = masa * aceleración)
    const aceleracion = fuerzaNeta / masa;

    // Calcula la distancia recorrida usando la ecuación del MRUA: s = ut + (1/2)at^2
    const distanciaRecorrida = 0.5 * aceleracion * Math.pow(tiempo, 2);



// Actualiza los elementos en la tabla
document.getElementById("tablaCuerpo").innerHTML = `
    <tr>
        <td>${masa.toFixed(2)}</td>
        <td>${fuerzaImpulsora.toFixed(2)}</td> 
        <td>${tiempo.toFixed(2)}</td>
        <td>${coeficienteFriccion.toFixed(2)}</td>
        <td>${fuerzaFriccion.toFixed(2)}</td>
        <td>${fuerzaNeta.toFixed(2)}</td>
        <td>${aceleracion.toFixed(2)}</td>
        <td>${distanciaRecorrida.toFixed(2)}</td>   
    </tr>
`;

}

  

function pedirImpulso() {
  impulso = parseFloat(document.getElementById("input2").value);
  tiempo = parseFloat(document.getElementById("input3").value);

  

  // Calcula el ancho de la carretera
  const roadWidth = roadContainer.clientWidth;

  // Calcula la velocidad proporcional al impulso para que el coche llegue al final de la carretera
  const velocidad = roadWidth / impulso * 10; // Ajusta el factor multiplicador según tus necesidades

  // Mueve el coche cada 50 milisegundos
  interval = setInterval(moverCarro, velocidad);
}

// Llama a la función para pedir el impulso al cargar la página
pedirImpulso();
