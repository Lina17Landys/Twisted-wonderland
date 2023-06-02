const searchItem = () => {
    const input = document.getElementById("searchBar").value.toLowerCase();  // Obtiene el valor del campo de búsqueda en minúsculas
    const charactersContainer = document.getElementById("charactersContainer");  // Obtiene el contenedor de los personajes

    fetch("https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json")
      .then(response => response.json())
      .then(data => {
        // Limpia el contenedor de personajes antes de realizar una nueva búsqueda
        charactersContainer.innerHTML = "";

        const characters = data.characters;
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
      });
  }