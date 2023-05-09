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
        window.location.href = './object.html';
      });
    });
    
  });
