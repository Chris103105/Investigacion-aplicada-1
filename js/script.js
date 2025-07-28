document.addEventListener("DOMContentLoaded", function () {
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach((tarjeta) => {
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-hover");

    // Personaliza el contenido según la categoría
    const tipo = tarjeta.querySelector("h3").textContent.trim().toLowerCase();
    let contenido = "";

    switch (tipo) {
      case "playas":
        contenido = "Disfruta del sol y la arena en nuestras playas tropicales.";
        break;
      case "volcanes":
        contenido = "Explora volcanes activos con vistas impresionantes.";
        break;
      case "pueblos pintorescos":
        contenido = "Conoce pueblos llenos de cultura y color.";
        break;
      case "museos":
        contenido = "Sumérgete en la historia y el arte salvadoreño.";
        break;
      default:
        contenido = "Descubre más sobre este lugar increíble.";
    }

    infoBox.textContent = contenido;
    tarjeta.appendChild(infoBox);
  });
});
