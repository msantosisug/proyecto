// Ciclo para solicitar cotizaciones hasta que el usuario ingrese "Salir"
var continuar = true;
while (continuar) {
  //Variables utiles
  //Precio base de la cotización, en quetzales, lo puede cambiar
  var precio_base = 2000;

  //Valores de los recargos
  var edad_18 = 0.1; // 10%
  var edad_25 = 0.2; // 20%
  var edad_50 = 0.3; // 30%

  var casado_18 = 0.1; // 10%
  var casado_25 = 0.2; // 20%
  var casado_50 = 0.3; // 30%

  var hijos_recargo = 0.2; // 20%

  var propiedad_recargo = 0.35; // 35%

  var salario_recargo = 0.05; // 5%

  //Recargo
  var recargo = 0;
  var recargo_total = 0;

  //Precio final
  var precio_final = 0;

  //Mensajes de alerta para ingresar datos
  var nombre = prompt("Ingrese su nombre, por favor");
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números");

  //Comprobamos la edad del asegurado
  var edad_numero = 0;
  // Indicara si el usuario ingreso un valor valido de hijos, osea de tipo numerico, sino
  // nos quedaremos en bucle hasta que ingrese un valor valido
  var edad_valida = false;
  // Mientras edad_valida sea falso, repetiremos el proceso de preguntar por la cantidad de hijos
  while (!edad_valida) {
    // Si la cantidad de hijos es un valor numerico, saldremos del bucle
    if (isNaN(parseInt(edad))) {
      alert("Ingrese un valor valido, ingrese solamente números");
      edad = prompt("¿Cuantos años tiene? Ingrese solamente números");
    } else {
      // Si la cantidad de hijos es un valor valido, saldremos del bucle
      edad_valida = true;
      edad_numero = parseInt(edad);
    }
  }

  var casado = prompt("¿Está casado actualmente?", "si/no");
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge;
  //Comprobamos la edad del conyuge
  var edad_conyuge_numero = 0;
  // Indicara si el usuario ingreso un valor valido de edad conyuge , osea de tipo numerico, sino
  // nos quedaremos en bucle hasta que ingrese un valor valido
  var edad_conyuge_valida = false;
  var esta_casado = false;
  if ("SI" == casado.toUpperCase()) {
    esta_casado = true;
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
  }
  //convirtiendo la edad del cónyuge si se esta casado/a
  if ("SI" == casado.toUpperCase()) {
    // Mientras edad_valida sea falso, repetiremos el proceso de preguntar por la cantidad de hijos
    while (!edad_conyuge_valida) {
      // Si la cantidad de hijos es un valor numerico, saldremos del bucle
      if (isNaN(parseInt(edad_conyuge))) {
        alert("Ingrese un valor valido, ingrese solamente números");
        edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
      } else {
        // Si la cantidad de hijos es un valor valido, saldremos del bucle
        edad_conyuge_valida = true;
        edad_conyuge_numero = parseInt(edad_conyuge);
      }
    }
  }

  var hijos = prompt("¿tiene hijos o hijas?", "si/no");
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos;
  var tiene_hijos = false;
  if ("SI" == hijos.toUpperCase()) {
    cantidad_hijos = prompt("¿cuantos hijos o hijas?");
    tiene_hijos = true;
  }
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  var cantidad_hijos_numero = 0;
  // Indicara si el usuario ingreso un valor valido de hijos, osea de tipo numerico, sino
  // nos quedaremos en bucle hasta que ingrese un valor valido
  var hijos_validos = false;
  // validaremos esto solo si el usuario tiene hijos
  if (tiene_hijos) {
    // Mientras hijos_validos sea falso, repetiremos el proceso de preguntar por la cantidad de hijos
    while (!hijos_validos) {
      // Si la cantidad de hijos es un valor numerico, saldremos del bucle
      if (isNaN(parseInt(cantidad_hijos))) {
        alert("Ingrese un valor valido, ingrese solamente números");
        cantidad_hijos = prompt("Cuantos tiene hijos o hijas?: ");
      } else {
        // Si la cantidad de hijos es un valor valido, saldremos del bucle
        hijos_validos = true;
        cantidad_hijos_numero = parseInt(cantidad_hijos);
      }
    }
  }

  // preguntamos si tiene alguna propiedad
  var propiedad = prompt("¿Tiene alguna propiedad a su nombre?", "si/no");
  var tiene_propiedad = false;
  var cantidad_propiedades;
  if ("SI" == propiedad.toUpperCase()) {
    tiene_propiedad = true;
    cantidad_propiedades = prompt("¿Cuantas propiedades tiene a su nombre?");
  }
  var cantidad_propiedades_numero = 0;
  // Indicara si el usuario ingreso un valor de numero de propiedades, osea de tipo numerico, sino
  // nos quedaremos en bucle hasta que ingrese un valor valido
  var propiedades_validas = false;
  // validaremos esto solo si el usuario tiene propiedades
  if (tiene_propiedad) {
    // Mientras propiedades_validas sea falso, repetiremos el proceso de preguntar por la cantidad de propiedades
    while (!propiedades_validas) {
      // Si la cantidad de propiedades es un valor numerico, saldremos del bucle
      if (isNaN(parseInt(cantidad_propiedades))) {
        alert("Ingrese un valor valido, ingrese solamente números");
        cantidad_propiedades = prompt(
          "Cuantas propiedades tiene a su nombre?: "
        );
      } else {
        // Si la cantidad de propiedades es un valor valido, saldremos del bucle
        propiedades_validas = true;
        cantidad_propiedades_numero = parseInt(cantidad_propiedades);
      }
    }
  }

  // preguntamos si tiene un salario
  var salario = prompt("¿Tiene un salario?", "si/no");
  var tiene_salario = false;
  var cantidad_salario;
  if ("SI" == salario.toUpperCase()) {
    tiene_salario = true;
    cantidad_salario = prompt("¿Cual es su salario?");
  }
  var cantidad_salario_numero = 0;
  // Indicara si el usuario ingreso un valor de salario, osea de tipo numerico, sino
  // nos quedaremos en bucle hasta que ingrese un valor valido
  var salario_valido = false;
  // validaremos esto solo si el usuario tiene salario
  if (tiene_salario) {
    // Mientras salario_valido sea falso, repetiremos el proceso de preguntar por la cantidad de salario
    while (!salario_valido) {
      // Si la cantidad de salario es un valor numerico, saldremos del bucle
      if (isNaN(parseInt(cantidad_salario))) {
        alert("Ingrese un valor valido, ingrese solamente números");
        cantidad_salario = prompt("Cual es su salario?: ");
      } else {
        // Si la cantidad de salario es un valor valido, saldremos del bucle
        salario_valido = true;
        cantidad_salario_numero = parseInt(cantidad_salario);
      }
    }
  }

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  // nos aseguramos que sea mayor o igual a 18 años para aplicar el recargo
  if (edad_numero >= 18) {
    //Aquí es donde debe de calcular los recargos y el valor final
    var detalle_recargos = "";
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
      //Calculamos el recargo en base a la edad
      recargo = precio_base * edad_18;
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos +=
        "\nRecargo por edad del asegurado " +
        edad_numero +
        " años: Q." +
        recargo +
        " (10%)\n";
    } else if (edad_numero >= 25 && edad_numero < 50) {
      //Calculamos el recargo en base a la edad
      recargo = precio_base * edad_25;
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos +=
        "\nRecargo por edad del asegurado " +
        edad_numero +
        " años: Q." +
        recargo +
        " (20%)\n";
    } else if (edad_numero >= 50) {
      //Calculamos el recargo en base a la edad
      recargo = precio_base * edad_50;
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos +=
        "\nRecargo por edad del asegurado " +
        edad_numero +
        " años: Q." +
        recargo +
        " (30%)\n";
    }

    /**
     * 2. Recargo por la edad del conyuge
     */
    // si el usuario esta casado, aplicamos el recargo
    if (esta_casado) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_18;
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo;
        // detalle de recargos
        detalle_recargos +=
          "\nRecargo por edad del conyuge " +
          edad_conyuge_numero +
          " años: Q." +
          recargo +
          " (10%)\n";
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_25;
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo;
        // detalle de recargos
        detalle_recargos +=
          "\nRecargo por edad del conyuge " +
          edad_conyuge_numero +
          " años: Q." +
          recargo +
          " (20%)\n";
      } else if (edad_conyuge_numero >= 50) {
        //Calculamos el recargo en base a la edad
        recargo = precio_base * casado_50;
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo;
        // detalle de recargos
        detalle_recargos +=
          "\nRecargo por edad del conyuge " +
          edad_conyuge_numero +
          " años: Q." +
          recargo +
          " (30%)\n";
      }
    }

    /**
     * 3. Recargo por la cantidad de hijos
     */
    // si el usuario tiene hijos, aplicamos el recargo
    if (tiene_hijos) {
      recargo = precio_base * cantidad_hijos_numero * hijos_recargo;
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos +=
        "\nRecargo por cantidad de hijos: Q." + recargo + " (20%)\n";
    }

    /**
     * 4. Recargo por la cantidad de propiedades
     * */
    // si el usuario tiene propiedades, aplicamos el recargo
    if (tiene_propiedad) {
      // haremos el calculo sobre lo que llevamos de cotizacion hasta le momento con todo y recargos
      var precio_base_con_recargos = precio_base + recargo_total;
      recargo =
        precio_base_con_recargos *
        cantidad_propiedades_numero *
        propiedad_recargo;
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos +=
        "\nRecargo por cantidad de propiedades: Q." + recargo + " (35%)\n";
    }

    /**
     * 5. Recargo por el salario
     * */
    // si el usuario tiene salario, aplicamos el recargo
    if (tiene_salario) {
      // haremos el calculo sobre el salario del asegurado
      recargo = cantidad_salario_numero * salario_recargo;
      recargo_total = recargo_total + recargo;
      // detalle de recargos
      detalle_recargos += "\nRecargo por salario: Q." + recargo + " (5%)\n";
    }

    precio_final = precio_base + recargo_total;
    //Resultado
    // alert("Para el asegurado " + nombre);
    //alert("El recargo total sera de: " + recargo_total);
    //alert("El precio sera de: " + precio_final);
    alert("Para el asegurado " + nombre);
    alert(
      "El recargo total sera de: Q." + recargo_total + "\n" + detalle_recargos
    );
    alert("El precio sera de: Q." + precio_final);
  } else {
    alert("La edad del asegurado no es suficiente para aplicar el recargo");
  }

  // Preguntar al usuario si desea realizar otra cotización
  var respuesta = prompt(
    "¿Desea realizar otra cotización? (Ingrese 'salir' para finalizar): "
  );
  if (respuesta.toUpperCase() === "SALIR") {
    continuar = false;
  }
}
