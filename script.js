const carContainer = document.getElementById("car-container");
const roadContainer = document.getElementById("road-container");
const carImg = document.getElementById("car-img");
const coeficienteFriccion = parseFloat(document.getElementById("input4").value);


let carPos = 0;
let impulso = 0;
let tiempo = 0;
let tiempoTranscurrido = 0;
let interval;


const velocidadInicial = 0; // Velocidad inicial del automóvil
const incrementoVelocidad = 10; // Incremento en la velocidad para simular la fuerza de impulso
let contador = 1;

var botonIniciar = document.getElementById("iniciar");



document.getElementById('iniciar').addEventListener('click', function() {
  var coeficienteDeFriccion = parseFloat(document.getElementById('input4').value);
  var roadContainer = document.getElementById('road-container');
  var carcontaine = document.getElementById('car-container');
  
  // Cambiar la imagen de fondo del cuerpo según el valor del coeficiente de fricción
  if (coeficienteDeFriccion === 0) {
    document.body.style.backgroundImage = 'url(escenario1.png)';
      
  } else if (coeficienteDeFriccion === 0.1) {
    document.body.style.backgroundImage = 'url(escenario.png)';
    
  } else if (coeficienteDeFriccion === 0.2) {
      document.body.style.backgroundImage = 'url(escenario2.png)';
  }

  // Cambiar la imagen dentro del contenedor según el valor del coeficiente de fricción
  if (coeficienteDeFriccion === 0) {
      roadContainer.innerHTML = '<img src="calle.png" alt="Calle">';
      carcontaine.innerHTML = '<img src="coche1.png" alt="Coche">';

  } else if (coeficienteDeFriccion === 0.1) {
      roadContainer.innerHTML = '<img src="call.png" alt="Calle 1">';
  } else if (coeficienteDeFriccion === 0.2) {
      roadContainer.innerHTML = '<img src="call1.png" alt="Calle 2">';
  }
});





function moverCarro() {
 
  
  let validar1 = 0;
  var coeficienteDeFriccion = parseFloat(document.getElementById('input4').value);
  
  validar = 3666.4;
  
  const tiempoInput = document.getElementById("input3").value;
  
  // Resto de tu código aquí
  
  if (carPos < impulso) {
    carPos += incrementoVelocidad;
    carContainer.style.left = carPos + "px";
    
    
      tiempoTranscurrido +=110; 
    const { fuerzaNeta } = calcularFuerzaNeta();
    carImg.src = fuerzaNeta < 0 ? "coche2.png" : "coche111.png";

    validar1 = validar * tiempoInput;
    console.log(validar1);
    console.log(tiempoTranscurrido);
    if (tiempoTranscurrido >= validar1) {
      clearInterval(interval);
      calcularVelocidadRecorrida();
      carImg.src = "coche.png";
    }
  } else {
    clearInterval(interval);
    calcularVelocidadRecorrida();
    carImg.src = "coche.png";
  }
}
var botonReniciar = document.getElementById("reniciar");

// Agrega un evento clic al botón "Resetear" para llamar a la función resetearPosicionCarro()
botonReniciar.addEventListener("click", function() {
  resetearPosicionCarro();
});


function calcularFuerzaNeta() {
  const masa = parseFloat(document.getElementById("input1").value);
  var coeficienteDeFriccion = parseFloat(document.getElementById('input4').value);

  const aceleracionGravedad = 9.81;
  const fuerzaNormal = masa * aceleracionGravedad;
  const fuerzaFriccion = coeficienteDeFriccion * fuerzaNormal;
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
  
  const velocidadFinal = aceleracion * tiempo;

  const nuevoRegistro = {
    masa: parseFloat(document.getElementById("input1").value).toFixed(2),
    fuerzaImpulsora: impulso.toFixed(2),
    tiempo: tiempo.toFixed(2),
    coeficienteFriccion: parseFloat(document.getElementById("input4").value).toFixed(2),
    fuerzaFriccion: (parseFloat(document.getElementById("input4").value) * fuerzaNeta).toFixed(2),
    fuerzaNeta: fuerzaNeta.toFixed(2),
    aceleracion: aceleracion.toFixed(2),
    velocidadFinal: velocidadFinal.toFixed(2),
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
      registro.velocidadFinal === nuevoRegistro.velocidadFinal &&
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
          <td nowrap>${registro.masa} kg</td>
          <td nowrap>${registro.fuerzaImpulsora} N</td>
          <td nowrap>${registro.tiempo} s</td>
          <td nowrap>${registro.coeficienteFriccion}</td>
          <td nowrap>${registro.fuerzaFriccion} N</td>
          <td nowrap>${registro.fuerzaNeta} N</td>
          <td nowrap>${registro.aceleracion} m/s²</td>
          <td nowrap>${registro.velocidadFinal} m/s</td>
          <td nowrap>${registro.distanciaRecorrida} m</td> 
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

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene el elemento del botón por su ID
  var miBoton = document.getElementById("miBoton");

  // Agrega un controlador de eventos al botón para manejar el clic
  miBoton.addEventListener("click", function() {
      // Redirige a index.html
      window.location.href = "simulador.html";
  });
});


//codigo pagina 2
