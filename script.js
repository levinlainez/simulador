const carContainer = document.getElementById("car-container");
const roadContainer = document.getElementById("road-container");

let carPos = 0;
let impulso = 0;
let tiempo = 0;
let tiempoTranscurrido = 0;
let interval; 

function moverCarro() {
  if (carPos < impulso) {
    carPos += 5;
    carContainer.style.left = carPos + "px";
    tiempoTranscurrido += 50;
  } else {
    clearInterval(interval);
    calcularVelocidadRecorrida();
  }
}

const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function() {
  window.location.href = "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_es.html";
});

const startSimulationBtn = document.getElementById("startSimulationBtn");

startSimulationBtn.addEventListener("click", function() {
  carPos = 0; // Restablece la posición del carro a 0 al iniciar la simulación

  impulso = parseFloat(document.getElementById("input2").value);
  tiempo = parseFloat(document.getElementById("input3").value);

  const roadWidth = roadContainer.clientWidth;
  const velocidad = roadWidth / impulso * 10;

  interval = setInterval(moverCarro, velocidad);

  // Guarda los datos en localStorage solo cuando se hace clic en el botón de simulación
  calcularVelocidadRecorrida();
  // Cierra el modal al iniciar la simulación
  // Cierra el modal al hacer clic en el botón "Iniciar Simulación"
  $('#exampleModal11').modal('hide');
  
});

function calcularVelocidadRecorrida() {
  const masa = parseFloat(document.getElementById("input1").value);
  const coeficienteFriccion = parseFloat(document.getElementById("input4").value);
  const aceleracionGravedad = 9.81; 
  const fuerzaNormal = masa * aceleracionGravedad;
  const fuerzaFriccion = coeficienteFriccion * fuerzaNormal;
  const fuerzaImpulsora = impulso;
  const fuerzaNeta = fuerzaImpulsora - fuerzaFriccion;
  const aceleracion = fuerzaNeta / masa;
  const distanciaRecorrida = 0.5 * aceleracion * Math.pow(tiempo, 2);

  const nuevoRegistro = {
    masa: masa.toFixed(2),
    fuerzaImpulsora: fuerzaImpulsora.toFixed(2),
    tiempo: tiempo.toFixed(2),
    coeficienteFriccion: coeficienteFriccion.toFixed(2),
    fuerzaFriccion: fuerzaFriccion.toFixed(2),
    fuerzaNeta: fuerzaNeta.toFixed(2),
    aceleracion: aceleracion.toFixed(2),
    distanciaRecorrida: distanciaRecorrida.toFixed(2)
  };

  // Obtiene el arreglo existente del localStorage o crea uno vacío si no existe
  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  // Verifica si ya existe un registro con los mismos valores
  const indice = registros.findIndex(registro => {
    return (
      registro.masa === nuevoRegistro.masa &&
      registro.fuerzaImpulsora === nuevoRegistro.fuerzaImpulsora &&
      registro.tiempo === nuevoRegistro.tiempo &&
      registro.coeficienteFriccion === nuevoRegistro.coeficienteFriccion &&
      registro.fuerzaFriccion === nuevoRegistro.fuerzaFriccion &&
      registro.fuerzaNeta === nuevoRegistro.fuerzaNeta &&
      registro.aceleracion === nuevoRegistro.aceleracion &&
      registro.distanciaRecorrida === nuevoRegistro.distanciaRecorrida
    );
  });

  // Si se encuentra un registro existente, actualiza ese registro; si no, agrega uno nuevo
  if (indice !== -1) {
    registros[indice] = nuevoRegistro;
  } else {
    registros.push(nuevoRegistro);
  }

  // Guarda el arreglo actualizado en localStorage
  localStorage.setItem('registros', JSON.stringify(registros));

  // Actualiza la tabla en la interfaz de usuario
  actualizarTabla();
  
}

function actualizarTabla() {
  const registrosGuardados = JSON.parse(localStorage.getItem('registros'));
  const tablaCuerpo = document.getElementById("tablaCuerpo");
  tablaCuerpo.innerHTML = '';
  if (registrosGuardados) {
    registrosGuardados.forEach(registro => {
      tablaCuerpo.innerHTML += `
        <tr>
          <td>${registro.masa}</td>
          <td>${registro.fuerzaImpulsora}</td> 
          <td>${registro.tiempo}</td>
          <td>${registro.coeficienteFriccion}</td>
          <td>${registro.fuerzaFriccion}</td>
          <td>${registro.fuerzaNeta}</td>
          <td>${registro.aceleracion}</td>
          <td>${registro.distanciaRecorrida}</td>   
        </tr>
      `;
    });
  }
}


window.onload = function() {
  // Llama a la función para pedir el impulso al cargar la página
  

  // Verifica si hay registros en el localStorage y actualiza la tabla si los hay
  if (localStorage.getItem('registros')) {
    actualizarTabla();
  }
};
