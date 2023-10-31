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


//lcoalstore

// Obtén el botón por su ID
const miBoton = document.getElementById("miBoton");

// Agrega un evento de clic al botón
miBoton.addEventListener("click", function() {
    // Redirige a la URL deseada cuando se hace clic en el botón
    window.location.href = "index.html";
});



