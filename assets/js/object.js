// Obtener el ID del personaje desde la URL
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('id');

// Obtener los personajes desde la variable global compartida
const characters = window.twstCharacters;

// Buscar el personaje correspondiente al ID proporcionado
const personaje = characters.find(character => character.id === characterId);

if (personaje) {
  // Mostrar la información del personaje en la página
  const personajeNombre = document.getElementById('personajeNombre');
  personajeNombre.textContent = personaje.fullName;

  const personajeImagen = document.getElementById('personajeImagen');
  personajeImagen.src = personaje.NonGroovyPic;
} else {
  console.error('Personaje no encontrado');
}
