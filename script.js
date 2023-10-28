const carContainer = document.getElementById("car-container");
const roadContainer = document.getElementById("road-container");
const carImg = document.getElementById("car-img");

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

    const { fuerzaNeta } = calcularFuerzaNeta();
    carImg.src = fuerzaNeta < 0 ? "coche2.png" : "coche1.png";
  } else {
    clearInterval(interval);
    calcularVelocidadRecorrida();
    carImg.src = "coche.png";
  }
}

function calcularFuerzaNeta() {
  const masa = parseFloat(document.getElementById("input1").value);
  const coeficienteFriccion = parseFloat(document.getElementById("input4").value);
  const aceleracionGravedad = 9.81;
  const fuerzaNormal = masa * aceleracionGravedad;
  const fuerzaFriccion = coeficienteFriccion * fuerzaNormal;
  const fuerzaImpulsora = impulso;
  const fuerzaNeta = fuerzaImpulsora - fuerzaFriccion;
  const aceleracion = fuerzaNeta / masa;

  return {
    fuerzaNeta: fuerzaNeta,
    aceleracion: aceleracion
  };
}

function iniciarSimulacion() {
  const impulsoInput = document.getElementById("input2").value;
  const tiempoInput = document.getElementById("input3").value;

  if (impulsoInput && tiempoInput) {
    carPos = 0;
    impulso = parseFloat(impulsoInput);
    tiempo = parseFloat(tiempoInput);

    const roadWidth = roadContainer.clientWidth;
    const velocidad = roadWidth / impulso * 10;

    interval = setInterval(moverCarro, velocidad);
    calcularVelocidadRecorrida();
    $('#exampleModal11').modal('hide');
  } else {
    mostrarError();
  }
}

function mostrarError() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Por favor, ingrese valores para los campos de impulso y tiempo.',
  }).then((result) => {
    if (result.isConfirmed) {
      $('#exampleModal11').modal('show');
    }
  });
}

const startSimulationBtn = document.getElementById("startSimulationBtn");
startSimulationBtn.addEventListener("click", iniciarSimulacion);

// Resto de tu código...
function calcularVelocidadRecorrida() {
  const { fuerzaNeta, aceleracion } = calcularFuerzaNeta();
  const distanciaRecorrida = 0.5 * aceleracion * Math.pow(tiempo, 2);

  const nuevoRegistro = {
    masa: parseFloat(document.getElementById("input1").value).toFixed(2),
    fuerzaImpulsora: impulso.toFixed(2),
    tiempo: tiempo.toFixed(2),
    coeficienteFriccion: parseFloat(document.getElementById("input4").value).toFixed(2),
    fuerzaFriccion: (parseFloat(document.getElementById("input4").value) * fuerzaNeta).toFixed(2),
    fuerzaNeta: fuerzaNeta.toFixed(2),
    aceleracion: aceleracion.toFixed(2),
    distanciaRecorrida: distanciaRecorrida.toFixed(2),
  };

  const registros = JSON.parse(localStorage.getItem('registros')) || [];
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

  if (indice !== -1) {
    registros[indice] = nuevoRegistro;
  } else {
    registros.push(nuevoRegistro);
  }

  localStorage.setItem('registros', JSON.stringify(registros));
  actualizarTabla();
}

// Función para actualizar la tabla en la interfaz de usuario
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
