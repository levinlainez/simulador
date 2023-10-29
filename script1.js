$(document).ready(function() {
  var paso = 0.5; // Define un valor bajo para un movimiento lento
  var limite = $(window).width(); // Ancho del área visible
  var intervalId; // Variable para almacenar el ID del intervalo

  function calculos() {
    // Obtener los valores de los campos de entrada
    var masa = parseFloat($("#input1").val()); // Convertir a número flotante
    var fuerzaAplicada = parseFloat($("#input4").val()); // Convertir a número flotante
    var coeficienteFriccion = parseFloat($("#input2").val()); // Convertir a número flotante

    // Calcular fuerza normal
    var fuerzaNormal = masa * 9.8;

    // Calcular aceleración
    var aceleracion = fuerzaAplicada / masa;

    // Calcular fuerza de fricción
    var fuerzaFriccion = coeficienteFriccion * fuerzaNormal;

    // Crear una nueva fila en la tabla con los valores calculados
    var nuevaFila = $("<tr>").append(
        $("<td>").text(masa),
        $("<td>").text(fuerzaAplicada),
        $("<td>").text(coeficienteFriccion),
        $("<td>").text(fuerzaFriccion.toFixed(2)), // Redondear a 2 decimales
        $("<td>").text(fuerzaNormal),
        $("<td>").text(aceleracion.toFixed(2)) // Redondear a 2 decimales
    );

    // Agregar la nueva fila a la tabla
    $("#tablaCuerpo").append(nuevaFila);
}

  // Función para mover el hombre y la caja
  function moverElementos() {
      var carWidth = $("#car-img1").width();
      var cajaWidth = $("#caja").width();

      var leftCarPos = $("#car-img1").position().left;
      var leftRoadPos = $("#caja").position().left;

      var nuevaPosicionCar = leftCarPos + paso;
      var nuevaPosicionCaja = leftRoadPos + paso;

      // Verifica los límites de movimiento para el hombre
      if (nuevaPosicionCar > limite - carWidth) {
          nuevaPosicionCar = limite - carWidth;
      } else if (nuevaPosicionCar < 0) {
          nuevaPosicionCar = 0;
      }

      // Verifica los límites de movimiento para la caja
      if (nuevaPosicionCaja > limite - cajaWidth) {
          nuevaPosicionCaja = limite - cajaWidth;
      } else if (nuevaPosicionCaja < 0) {
          nuevaPosicionCaja = 0;
      }

      // Actualiza las posiciones de los elementos
      $("#car-img1").css("left", nuevaPosicionCar + "px");
      $("#caja").css("left", nuevaPosicionCaja + "px");
  }

  // Escucha el evento de clic en el botón de iniciar
  $("#iniciar").on("click", function() {
      moverElementos();
      calculos();// Realiza los cálculos una vez al iniciar
      intervalId = setInterval(moverElementos, 16); // 60 FPS
  });

  // Escucha el evento de clic en el botón de iniciar
  $("#startSimulationBtn").on("click", function() {
    moverElementos();
    calculos();// Realiza los cálculos una vez al iniciar
    intervalId = setInterval(moverElementos, 16); // 60 FPS
});

  // Escucha el evento de clic en el botón de stop
  $("#detener").on("click", function() {
      clearInterval(intervalId); // Detiene la animación
  });
  // Espera a que el documento esté completamente cargado

   // Escucha el evento de clic en el botón de stop
   $("#miBoton").on("click", function() {
    window.location.href = "index.html";

});

});
