
const render = async () => {
  try {
    const data = await obtenerPersonaje();
    const contenedor = document.querySelector(".seccion");

    for (let personaje of data) {
      let chara = new Personaje(personaje.imagen, personaje.nombre, personaje.id);
      const charas = chara.render();
      contenedor.appendChild(charas);

      chara.addClickListener();
    }
  } catch (error) {
    console.error("Error al renderizar los personajes:", error);
  }
};

render();
