// Obtén los elementos de input

const inputdinamica = document.getElementById("inputd");
const inputnormal = document.getElementById("inputn");
const aneta = document.getElementById("neta");
const anormal = document.getElementById("normal");
const fmasa = document.getElementById("masa");
const fgravedad = document.getElementById("gravedad");
const ffe = document.getElementById("estatico");
const ffn = document.getElementById("norma");
const dco = document.getElementById("co");
const da = document.getElementById("ace");
const dt = document.getElementById("tiemp");
const va = document.getElementById("aceleracion");
const vt = document.getElementById("tiempo");
const fneta = document.getElementById("fn");
const fnormal = document.getElementById("fno");
const aceleracion = document.getElementById("a");
const vfConFriccion = document.getElementById("vf");
const distancia2s = document.getElementById("d2");
const ffriccion = document.getElementById("ff");
const distancia01 = document.getElementById("d01");
const next = document.getElementById("siguiente");
const verificar = document.getElementById("verificar");
const resultadoS=18.04;



let resultadoID = "";
let resultado = 0;
// Agrega un evento de entrada para el input μs
inputdinamica.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (inputdinamica.value.trim() === "") {
    inputdinamica.style.width = "13px";
    inputdinamica.style.borderColor = "#2869ff"; // Restablece el color del borde
    inputdinamica.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    inputdinamica.style.width = "80px";
    inputdinamica.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    inputdinamica.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(inputdinamica, inputnormal, "fn");
});

// Agrega un evento de entrada para el input μs
inputnormal.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (inputnormal.value.trim() === "") {
    inputnormal.style.width = "13px";
    inputnormal.style.borderColor = "#2869ff"; // Restablece el color del borde
    inputnormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    inputnormal.style.width = "80px";
    inputnormal.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    inputnormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(inputdinamica, inputnormal, "fn");
});
  
function calcularYMostrarResultado(input1, input2, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);

  // Realiza la división y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && valorInput2 !== 0) {
      resultado = valorInput1 - valorInput2;
      console.log(resultado);
      document.getElementById(id).textContent = resultado.toFixed(2);
      resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
      // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
      document.getElementById(id).textContent = "0";
  }
}




// Agrega un evento de entrada para el input μs
aneta.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (aneta.value.trim() === "") {
    aneta.style.width = "13px";
    aneta.style.borderColor = "#2869ff"; // Restablece el color del borde
    aneta.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    aneta.style.width = "90px";
    aneta.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    aneta.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarAceleracion(aneta, anormal, "a");
});

// Agrega un evento de entrada para el input μs
anormal.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (anormal.value.trim() === "") {
    anormal.style.width = "13px";
    anormal.style.borderColor = "#2869ff"; // Restablece el color del borde
    anormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    anormal.style.width = "80px";
    anormal.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    anormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarAceleracion(aneta, anormal, "a");
});
  
function calcularYMostrarAceleracion(input1, input2, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);

  // Realiza la división y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && valorInput2 !== 0) {
      resultado = valorInput1 / valorInput2;
      document.getElementById(id).textContent = resultado.toFixed(2);
      resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
      // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
      document.getElementById(id).textContent = "0";
  }
}



// Agrega un evento de entrada para el input μs
fmasa.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (fmasa.value.trim() === "") {
    fmasa.style.width = "13px";
    fmasa.style.borderColor = "#2869ff"; // Restablece el color del borde
    fmasa.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    fmasa.style.width = "55px";
    fmasa.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    fmasa.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarFnormal(fmasa, fgravedad, "fno");
});

// Agrega un evento de entrada para el input μs
fgravedad.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (fgravedad.value.trim() === "") {
    fgravedad.style.width = "13px";
    fgravedad.style.borderColor = "#2869ff"; // Restablece el color del borde
    fgravedad.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    fgravedad.style.width = "120px";
    fgravedad.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    fgravedad.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarFnormal(fmasa, fgravedad, "fno");
});
  
function calcularYMostrarFnormal(input1, input2, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);

  // Realiza la división y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && valorInput2 !== 0) {
      resultado = valorInput1 * valorInput2;
      document.getElementById(id).textContent = resultado.toFixed(2);
      resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
      // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
      document.getElementById(id).textContent = "0";
  }
}


// Agrega un evento de entrada para el input μs
ffe.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (ffe.value.trim() === "") {
    ffe.style.width = "13px";
    ffe.style.borderColor = "#2869ff"; // Restablece el color del borde
    ffe.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    ffe.style.width = "55px";
    ffe.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    ffe.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarFfriccion(ffe, ffn, "ff");
});

// Agrega un evento de entrada para el input μs
ffn.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (ffn.value.trim() === "") {
    ffn.style.width = "13px";
    ffn.style.borderColor = "#2869ff"; // Restablece el color del borde
    ffn.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    ffn.style.width = "120px";
    ffn.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    ffn.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarFfriccion(ffe, ffn, "ff");
});
  
function calcularYMostrarFfriccion(input1, input2, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);

  // Realiza la división y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && valorInput2 !== 0) {
      resultado = valorInput1 * valorInput2;
      document.getElementById(id).textContent = resultado.toFixed(2);
      resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
      // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
      document.getElementById(id).textContent = "0";
  }
}



// Agrega un evento de entrada para el input μs
dco.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (dco.value.trim() === "") {
    dco.style.width = "13px";
    dco.style.borderColor = "#2869ff"; // Restablece el color del borde
    dco.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    dco.style.width = "50px";
    dco.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    dco.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarDistancia(dco, da, dt, "d2");
});

// Agrega un evento de entrada para el input μs
da.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (da.value.trim() === "") {
    da.style.width = "13px";
    da.style.borderColor = "#2869ff"; // Restablece el color del borde
    da.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    da.style.width = "120px";
    da.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    da.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarDistancia(dco, da, dt, "d2");
});

// Agrega un evento de entrada para el input μs
dt.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (dt.value.trim() === "") {
    dt.style.width = "13px";
    dt.style.borderColor = "#2869ff"; // Restablece el color del borde
    dt.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    dt.style.width = "22px";
    dt.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    dt.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarDistancia(dco, da, dt, "d2");
});
  
function calcularYMostrarDistancia(input1, input2, input3, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);
  const valorInput3 = parseFloat(input3.value);

  // Realiza la operación y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && !isNaN(valorInput3) && valorInput2 !== 0) {
    resultado = valorInput1 * valorInput2 * Math.pow(valorInput3, 2); // Calcula el resultado con valorInput3 al cuadrado
    document.getElementById(id).textContent = resultado.toFixed(2);
    resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
    // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
    document.getElementById(id).textContent = "0";
  }

}




// Agrega un evento de entrada para el input μs
va.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (va.value.trim() === "") {
    va.style.width = "13px";
    va.style.borderColor = "#2869ff"; // Restablece el color del borde
    va.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    va.style.width = "130px";
    va.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    va.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarVelocidad(va, vt, "vf");
});

// Agrega un evento de entrada para el input μs
vt.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (vt.value.trim() === "") {
    vt.style.width = "13px";
    vt.style.borderColor = "#2869ff"; // Restablece el color del borde
    vt.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    vt.style.width = "55px";
    vt.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    vt.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarVelocidad(va, vt, "vf");
});
  
function calcularYMostrarVelocidad(input1, input2, id) {
  // Obtén los valores de los inputs y conviértelos a números
  const valorInput1 = parseFloat(input1.value);
  const valorInput2 = parseFloat(input2.value);

  // Realiza la división y muestra el resultado en el elemento con el ID proporcionado
  if (!isNaN(valorInput1) && !isNaN(valorInput2) && valorInput2 !== 0) {
      resultado = valorInput1 * valorInput2;
      document.getElementById(id).textContent = resultado.toFixed(2);
      resultadoID = id; // Almacena el ID actual en la variable global resultadoID
  } else {
      // Si alguno de los valores no es un número o el divisor es cero, muestra un mensaje de error
      document.getElementById(id).textContent = "0";
  }
}

// Agrega un evento de clic para verificar la respuesta
verificar.addEventListener("click", function() {
  // Obtener los valores de los elementos con los ID correspondientes
  const fnValue = document.getElementById("fn").textContent;
  const aValue = document.getElementById("a").textContent;
  const vfValue = document.getElementById("vf").textContent;
  const d2Value = document.getElementById("d2").textContent;
  const ffValue = document.getElementById("ff").textContent;
  const fnoValue = document.getElementById("fno").textContent;
  const tiempoValue = document.getElementById("tiempo").value;
  const coefivienteValue = document.getElementById("estatico").value;

  // Crear un objeto con la información
  const info = {
      fn: fnValue,
      a: aValue,
      vf: vfValue,
      d2: d2Value,
      ff: ffValue,
      fno: fnoValue,
      tiempo: tiempoValue,
      estico: coefivienteValue
  };

  // Guardar el objeto en el localStorage
  localStorage.setItem('info', JSON.stringify(info));

  Swal.fire({
    icon: 'success',
    title: 'Rigistro',
    text: 'Registro exitoso',
}).then((result) => {
    if (result.isConfirmed) {
        // Haz algo después de que el usuario confirma la alerta
    }
});

  // Obtener la información del localStorage
  const storedInfo = localStorage.getItem('info');

  // Verificar si hay información almacenada en el localStorage
  if (storedInfo) {
      // Convertir la información JSON a un objeto
      const infoObj = JSON.parse(storedInfo);

      // Obtener la tabla y el cuerpo de la tabla
      const tabla = document.getElementById('tablaCuerpo');

      // Crear una nueva fila en la tabla
      const fila = document.createElement('tr');

      // Agregar celdas a la fila con los valores obtenidos del objeto
      fila.innerHTML = `
          <td>${infoObj.fn}</td>
          <td>${infoObj.a}</td>
          <td>${infoObj.vf}</td>
          <td>${infoObj.d2}</td>
          <td>${infoObj.ff}</td>
          <td>${infoObj.fno}</td>
          <td>${infoObj.tiempo}</td>
          <td>${infoObj.estico}</td>
      `;

      // Agregar la fila al cuerpo de la tabla
      tabla.appendChild(fila);
  }
});



//lcoalstore

// Obtén el botón por su ID
const miBoton = document.getElementById("miBoton");

// Agrega un evento de clic al botón
miBoton.addEventListener("click", function() {
    // Redirige a la URL deseada cuando se hace clic en el botón
    window.location.href = "index.html";
});





