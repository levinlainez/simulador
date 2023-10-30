// Obtén los elementos de input
const muSInput = document.getElementById("muS");
const muKInput = document.getElementById("muK");
const uSInput = document.getElementById("uS");
const uKInput = document.getElementById("uK");
const inputdinamica = document.getElementById("inputd");
const inputnormal = document.getElementById("inputn");
const next = document.getElementById("siguiente");
const verificar = document.getElementById("verificar");
const resultadoS=0.46;
const resultadoK=0.40;

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
    inputdinamica.style.width = "50px";
    inputdinamica.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    inputdinamica.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(inputdinamica, inputnormal, "mS");
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
    inputnormal.style.width = "50px";
    inputnormal.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    inputnormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(inputdinamica, inputnormal, "mS");
});
// Agrega un evento de entrada para el input μs
muSInput.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (muSInput.value.trim() === "") {
    muSInput.style.width = "13px";
    muSInput.style.borderColor = "#2869ff"; // Restablece el color del borde
    muSInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    muSInput.style.width = "100px";
    muSInput.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    muSInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(muSInput, muKInput, "mS");
});


// Agrega un evento de entrada para el input μk
muKInput.addEventListener("input", function() {
  // Si el input está vacío, restablece su ancho, borde y fondo
  if (muKInput.value.trim() === "") {
    muKInput.style.width = "13px";
    muKInput.style.borderColor = "#2869ff"; // Restablece el color del borde
    muKInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  } else {
    // Si hay texto, establece el ancho, borde y fondo
    muKInput.style.width = "100px";
    muKInput.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    muKInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(muSInput, muKInput, "mS");
});

// Agrega un evento de entrada para el input μs
uSInput.addEventListener("input", function() {
    // Si el input está vacío, restablece su ancho, borde y fondo
    if (uSInput.value.trim() === "") {
      uSInput.style.width = "13px";
      uSInput.style.borderColor = "#2869ff"; // Restablece el color del borde
      uSInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
    } else {
      // Si hay texto, establece el ancho, borde y fondo
      uSInput.style.width = "100px";
      uSInput.style.borderColor = "transparent"; // Cambia el color del borde a transparente
      uSInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
    }
    calcularYMostrarResultado(uSInput, uKInput, "mK");
  });
  
  // Agrega un evento de entrada para el input μk
  uKInput.addEventListener("input", function() {
    // Si el input está vacío, restablece su ancho, borde y fondo
    if (uKInput.value.trim() === "") {
      uKInput.style.width = "13px";
      uKInput.style.borderColor = "#2869ff"; // Restablece el color del borde
      uKInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
    } else {
      // Si hay texto, establece el ancho, borde y fondo
      uKInput.style.width = "100px";
      uKInput.style.borderColor = "transparent"; // Cambia el color del borde a transparente
      uKInput.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
    }
    calcularYMostrarResultado(uSInput, uKInput, "mK");
  });
  
  function calcularYMostrarResultado(input1, input2, id) {
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
  verificar.addEventListener("click", function() {
    if (
      (resultadoID === "mS" && resultado === resultadoS) ||
      (resultadoID === "mK" && resultado === resultadoK)
    ) {
      // Respuesta correcta
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Respuesta correcta',
      }).then((result) => {
        if (result.isConfirmed) {
          
        }
      });
      document.getElementById("mensaje").textContent = "Respuesta correcta";
    } else {
      // Respuesta incorrecta
      Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'Respuesta incorrecta',
      }).then((result) => {
        if (result.isConfirmed) {
          
        }
      });
      document.getElementById("mensaje").textContent = "Respuesta incorrecta";
    }
  });