fetch('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/twstData.json')
  .then(response => response.json())
  .then(data => {
    const characters = data.characters;
    const charactersContainer = document.getElementById('saveContainer');

    characters.forEach((character, index) => {
      if (index % 2 !== 0) {
        const icon = document.createElement('img');
        icon.src = character.icon;
        icon.addEventListener('click', () => {
          window.location.href = `object.html?index=${index}`;
        });
        charactersContainer.appendChild(icon);
      }
    });
  })
  .catch(error => {
    console.error('hay errores', error);
  });
