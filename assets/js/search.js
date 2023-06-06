const searchItem = () => {
    const input = document.getElementById("searchBar").value.toLowerCase();  
    const charactersContainer = document.getElementById("charactersContainer");  


    // clase para los datos json de la search bar
    class TwistedWonderlandAPI {
      constructor(url) {
        this.url = url;
      }
    
      buscarPersonajes(input) {
        fetch(this.url)
          .then(response => response.json())
          .then(data => {
            this.actualizarInterfaz(input, data.characters);
          });
      }
    
      actualizarInterfaz(input, characters) {
        const charactersContainer = document.getElementById("charactersContainer");
        charactersContainer.innerHTML = "";
    
        const filteredCharacters = characters.filter(character => {
          const fullName = character.fullName.toLowerCase();
          return fullName.includes(input);
        });
    
        if (filteredCharacters.length === 0) {
          const notFoundElement = document.createElement("p");
          notFoundElement.textContent = "Not found";
          charactersContainer.appendChild(notFoundElement);
        } else {
          filteredCharacters.forEach(character => {
            const characterElement = document.createElement("div");
            characterElement.classList.add("character");
    
            const iconElement = document.createElement("i");
            iconElement.classList.add("fa", `fa-${character.icon}`);
    
            const imgElement = document.createElement("img");
            imgElement.src = character.icon;
            imgElement.alt = character.fullName;
    
            characterElement.appendChild(iconElement);
            characterElement.appendChild(imgElement);
    
            charactersContainer.appendChild(characterElement);
          });
        }
      }
    }
    
    const api = new TwistedWonderlandAPI("https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json");
    api.buscarPersonajes(input);
    
  }