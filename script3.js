// Obtén los elementos de input

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
    inputdinamica.style.width = "55px";
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
    inputnormal.style.width = "55px";
    inputnormal.style.borderColor = "transparent"; // Cambia el color del borde a transparente
    inputnormal.style.backgroundColor = "#f8f9fa"; // Establece el color de fondo
  }
  calcularYMostrarResultado(inputdinamica, inputnormal, "mS");
});
  
function calcularYMostrarResultado(input1, input2, id) {
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
  if (resultadoID === "mS" && resultado === resultadoS) {
      // Respuesta correcta
      Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Respuesta correcta',
      }).then((result) => {
          if (result.isConfirmed) {
              // Haz algo después de que el usuario confirma la alerta
          }
      });
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
    
  }
});

  // Obtén el botón por su ID
  const miBoton = document.getElementById("miBoton");

  // Agrega un evento de clic al botón
  miBoton.addEventListener("click", function() {
      // Redirige a la URL deseada cuando se hace clic en el botón
      window.location.href = "index.html";
  });
  
  
  
  