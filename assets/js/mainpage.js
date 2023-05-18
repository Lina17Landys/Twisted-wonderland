  const loadJSON = () => {
    return fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
      .then(response => response.json())
      .catch(error => {
        console.error('Error', error);
        throw error;
      });
  };

  loadJSON('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
    .then(data => {
      const events = data.events;
      const eventsContainer = document.getElementById('eventsContainer');

      events.forEach(event => {
        const img = document.createElement('img');
        img.src = event.img;
        eventsContainer.appendChild(img);
      });

      const characters = data.characters;
      const charactersContainer = document.getElementById('charactersContainer');

      characters.forEach((character, index) => {
        const icon = document.createElement('img');
        icon.src = character.icon;
        icon.addEventListener('click', () => {
          window.location.href = `object.html?index=${index}`;
        });
        charactersContainer.appendChild(icon);
      });
    })
    .catch(error => {
      console.error('Errores', error);
    });
