// Función para mostrar el nombre del archivo seleccionado en el campo de texto correspondiente
function showFilePath() {
  // Obtener el archivo seleccionado
  var selectedFile = document.getElementById("file_form").files[0];
  // Obtener el nombre del archivo o una cadena vacía si no hay archivo seleccionado
  var path = selectedFile ? selectedFile.name : "";
  // Mostrar el nombre del archivo en el campo de texto
  document.getElementById("file_text").value = path;
}

// Función para poblar dinámicamente la lista de provincias
function populateLocations() {
  // Lista de provincias
  var locations = [
    "Barcelona", 
    "Madrid", 
    "Sevilla", 
    "Valencia"
  ];

  // Ordenar las ubicaciones alfabéticamente sin tener en cuenta los espacios ni las mayúsculas
  locations.sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  var select = document.getElementById("location");

  // Agregar cada provincia como una opción al elemento select
  locations.forEach(function(location) {
    var option = document.createElement("option");
    option.text = location;
    option.value = location;
    select.add(option);
  });
}

// Función para mostrar los datos del formulario en el área de texto y validar que todos los campos estén completos antes de enviar
function showFormData(event) {
  event.preventDefault(); // Detener el envío predeterminado del formulario (Para que no recargue el text_area y la vacíe)

  // Obtener los valores de los elementos del formulario
  var name = document.getElementById("name_form").value;
  var file = document.getElementById("file_text").value;
  var location = document.getElementById("location").value;

  // Verificar si todos los campos están completos
  if (name && file && location) {
    // Construir el mensaje con los datos del formulario
    var output = "Archivo: " + file + "\n";
    output += "Enviado desde " + location + " para " + name + "\n\n";
    output += "Gracias por el envío.";

    // Mostrar el mensaje en el área de texto
    document.getElementById("output_form").value = output;

    return true; // Permitir el envío del formulario
  } else {
    // Mostrar una alerta al usuario si algún campo está vacío
    alert("Por favor, complete todos los campos antes de enviar el formulario.");
    return false; // Evitar el envío del formulario
  }
}
