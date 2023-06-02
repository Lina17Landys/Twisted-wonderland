const searchItem = () => {
    const input = document.getElementById("searchBar").value.toLowerCase();  
    const charactersContainer = document.getElementById("charactersContainer");  

    fetch("https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json")
      .then(response => response.json())
      .then(data => {
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