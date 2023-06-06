  const loadJSON = () => {
    return fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
      .then(response => response.json())
      .catch(error => {
        console.error('Error', error);
        throw error;
      });
  };


  // clase para cargar los objetos 
  
  class DataLoader {
    constructor(url) {
      this.url = url;
    }
  
    loadJSON() {
      return fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.renderEvents(data.events);
          this.renderCharacters(data.characters);
        });
    }
  
    renderEvents(events) {
      const eventsContainer = document.getElementById('eventsContainer');
      eventsContainer.innerHTML = "";
  
      events.forEach(event => {
        const img = document.createElement('img');
        img.src = event.img;
        eventsContainer.appendChild(img);
      });
    }
  
    renderCharacters(characters) {
      const charactersContainer = document.getElementById('charactersContainer');
      charactersContainer.innerHTML = "";
  
      characters.forEach((character, index) => {
        const icon = document.createElement('img');
        icon.src = character.icon;
        icon.addEventListener('click', () => {
          window.location.href = `object.html?index=${index}`;
        });
        charactersContainer.appendChild(icon);
      });
    }
  }
  
  const dataLoader = new DataLoader('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json');
  dataLoader.loadJSON();
  
   