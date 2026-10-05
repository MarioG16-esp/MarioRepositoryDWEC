/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });


function renderCards(jsondata) {

  // Contenedor donde vamos a meter las cards
  const container = document.getElementById("characters");

  // Plantilla de la card
  const plantilla = document.getElementById("plantilla");

  // Recorremos los personajes
  for (let char of jsondata.data.results) {

    // Hacemos una copia de la plantilla
    const card = plantilla.content.cloneNode(true);

    // Buscamos los elementos de la card
    const imagen = card.querySelector(".imagen");
    const nombre = card.querySelector(".nombre");
    const descripcion = card.querySelector(".descripcion");

    // Ponemos los datos del personaje
    imagen.src = `${char.thumbnail.path}.${char.thumbnail.extension}`;
    imagen.alt = char.name;

    nombre.textContent = char.name;

    descripcion.textContent =
      char.description || "No hay descripción disponible.";

    // Añadimos la card al contenedor
    container.appendChild(card);
  }
}