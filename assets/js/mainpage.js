fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
  .then(response => response.json())
  .then(data => {
    const eventosDiv = document.getElementById('eventos');
    data.events.forEach(evento => {
      const img = document.createElement('img');
      img.src = evento.img;
      eventosDiv.querySelector('.lista-eventos').appendChild(img);
    });

    const personajesDiv = document.getElementById('personajes');
    data.characters.forEach(personaje => {
      const icon = document.createElement('img');
      icon.src = personaje.icon;
      personajesDiv.querySelector('.lista-personajes').appendChild(icon);
      icon.addEventListener('click', () => {
        const personajeInfo = document.getElementById('personajeInfo');
        const personajeNombre = document.getElementById('personajeNombre');
        const personajeImagen = document.getElementById('personajeImagen');

        personajeNombre.textContent = personaje.fullName;
        personajeImagen.src = personaje.NonGroovyPic;

      });
    });

    const characters = data.characters;
    window.twstCharacters = characters; // Almacenar los personajes en la variable global
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
