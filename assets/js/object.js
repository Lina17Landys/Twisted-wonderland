const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const selectedIndex = parseInt(getParameterByName('index'));

  fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
    .then(response => response.json())
    .then(data => {
      const characters = data.characters;

      if (selectedIndex >= 0 && selectedIndex < characters.length) {
        const selectedCharacter = characters[selectedIndex];

        const characterDetails = document.getElementById('characterDetails');

        const img = document.createElement('img');
        img.src = selectedCharacter.NonGroovyPic;
        characterDetails.appendChild(img);

        const fullName = document.createElement('h1');
        fullName.textContent = "Full Name: " + selectedCharacter.fullName;
        characterDetails.appendChild(fullName);

        const maxPow = document.createElement('p');
        maxPow.textContent = "Max Power: " + selectedCharacter.maxPow;
        characterDetails.appendChild(maxPow);

        const maxHp = document.createElement('p');
        maxHp.textContent = "Max HP: " + selectedCharacter.maxHp;
        characterDetails.appendChild(maxHp);

        const spell1 = document.createElement('p');
        spell1.textContent = "Spell 1: " + selectedCharacter.spell1;
        characterDetails.appendChild(spell1);

        const spell2 = document.createElement('p');
        spell2.textContent = "Spell 2: " + selectedCharacter.spell2;
        characterDetails.appendChild(spell2);
      } 
    })

