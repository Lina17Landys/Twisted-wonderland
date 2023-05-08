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
      const icono = document.createElement('img');
      icono.src = personaje.icons[0].url;
      personajesDiv.querySelector('.lista-personajes').appendChild(icono);
    });
  })
  .catch(error => console.error(error));

