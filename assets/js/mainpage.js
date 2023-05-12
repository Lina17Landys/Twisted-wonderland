  // Función para cargar los datos JSON utilizando fetch
  const loadJSON = () => {
    return fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
      .then(response => response.json())
      .catch(error => {
        console.error('Error loading JSON:', error);
        throw error;
      });
  };

  // Cargar los datos del archivo JSON
  loadJSON('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
    .then(data => {
      // Obtener los eventos del objeto JSON
      const events = data.events;
      const eventsContainer = document.getElementById('eventsContainer');

      // Recorrer los eventos y mostrar las imágenes
      events.forEach(event => {
        const img = document.createElement('img');
        img.src = event.img;
        eventsContainer.appendChild(img);
      });

      // Obtener los personajes del objeto JSON
      const characters = data.characters;
      const charactersContainer = document.getElementById('charactersContainer');

      // Recorrer los personajes y mostrar los iconos
      characters.forEach((character, index) => {
        const icon = document.createElement('img');
        icon.src = character.icon;
        icon.addEventListener('click', () => {
          // Redireccionar al hacer clic en el icono con el índice del personaje seleccionado
          window.location.href = `object.html?index=${index}`;
        });
        charactersContainer.appendChild(icon);
      });
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
    });
