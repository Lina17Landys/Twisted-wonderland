fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
  .then(response => response.json())
  .then(data => {
    const personajesDiv = document.getElementById('personajes');
    const listaPersonajes = personajesDiv.querySelector('.lista-personajes');

    data.characters.forEach(personaje => {
      const li = document.createElement('li');

      const nombre = document.createElement('h3');
      nombre.textContent = personaje.fullName;
      li.appendChild(nombre);

      const imagen = document.createElement('img');
      imagen.src = personaje.NonGroovyPic;
      li.appendChild(imagen);

      const boton = document.createElement('button');
      boton.textContent = 'Cambiar imagen';
      boton.addEventListener('click', () => {
        if (imagen.src === personaje.NonGroovyPic) {
          imagen.src = personaje.GroovyPic;
        } else {
          imagen.src = personaje.NonGroovyPic;
        }
      });
      li.appendChild(boton);

      listaPersonajes.appendChild(li);
    });
  });
