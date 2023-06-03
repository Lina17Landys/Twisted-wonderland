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
    const selectedCharacter = characters[selectedIndex];

    const characterDetails = document.getElementById('characterDetails');

    const createDetailElement = (tagName, textContent) => {
      const element = document.createElement(tagName);
      element.textContent = textContent;
      characterDetails.appendChild(element);
    };

    const createIconElement = (src) => {
      const icon = document.createElement('img');
      icon.src = src;
      icon.classList.add('icon');
      return icon;
    };

    const img = document.createElement('img');
    img.src = selectedCharacter.NonGroovyPic;
    characterDetails.appendChild(img);

    createDetailElement('h1', selectedCharacter.fullName);
    createDetailElement('p', "Max Power: " + selectedCharacter.maxPow);
    createDetailElement('p', "Max HP: " + selectedCharacter.maxHp);
    createDetailElement('p', "Spell 1: " + selectedCharacter.spell1);
    createDetailElement('p', "Spell 2: " + selectedCharacter.spell2);

    const toggleImage = () => {
      if (img.src.includes(selectedCharacter.NonGroovyPic)) {
        img.src = selectedCharacter.GroovyPic;
      } else {
        img.src = selectedCharacter.NonGroovyPic;
      }
    };

    const ImageButton = document.createElement('button');
    ImageButton.textContent = "Groovy!";
    ImageButton.addEventListener('click', toggleImage);
    characterDetails.appendChild(ImageButton);

    class IconElement {
      constructor(src) {
        this.element = document.createElement('img');
        this.element.src = src;
        this.element.classList.add('icon');
      }
    
      appendTo(parentElement) {
        parentElement.appendChild(this.element);
      }
    
      addEventListener(event, callback) {
        this.element.addEventListener(event, callback);
      }
    
      setSource(src) {
        this.element.src = src;
      }
    }
    
    const createDeleteIconElement = () => {
      const deleteIcon = new IconElement('https://github.com/Lina17Landys/Twisted-wonderland/blob/master/assets/iconos/cerrar%20icono.png?raw=true');
      deleteIcon.element.classList.add('delete-icon');
      return deleteIcon;
    };
    
    document.addEventListener('DOMContentLoaded', () => {
      const saveContainer = document.getElementById('saveContainer');
      const favCharacters = document.getElementById('favCharacters');
    
      const savedIcons = localStorage.getItem('savedIcons') ? JSON.parse(localStorage.getItem('savedIcons')) : [];
    
      savedIcons.forEach((iconSrc, index) => {
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');
    
        const icon = new IconElement(iconSrc);
    
        const deleteIcon = createDeleteIconElement();
    
        icon.appendTo(iconContainer);
        deleteIcon.appendTo(iconContainer);
    
        saveContainer.appendChild(iconContainer);
    
        deleteIcon.addEventListener('click', () => {
          savedIcons.splice(index, 1);
          localStorage.setItem('savedIcons', JSON.stringify(savedIcons));
          iconContainer.remove();
        });
    
        icon.addEventListener('click', () => {
          window.location.href = `object.html?index=${index}`;
        });
      });
    
      const favIcons = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
    
      favIcons.forEach((iconSrc, index) => {
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');
    
        const icon = new IconElement(iconSrc);
    
        const deleteIcon = createDeleteIconElement();
    
        icon.appendTo(iconContainer);
        deleteIcon.appendTo(iconContainer);
    
        favCharacters.appendChild(iconContainer);
    
        deleteIcon.addEventListener('click', () => {
          favIcons.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(favIcons));
          iconContainer.remove();
        });
    
        icon.addEventListener('click', () => {
          window.location.href = `object.html?index=${index}`;
        });
      });
    });
    
    const bookmarkEmptyIcon = new IconElement('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmark%20empty%20icon.png');
    bookmarkEmptyIcon.addEventListener('click', () => {
      bookmarkEmptyIcon.setSource(bookmarkEmptyIcon.element.src.includes('empty') ?
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmarkfull%20icon.png' :
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmark%20empty%20icon.png'
      );
    
      const savedIcon = selectedCharacter.icon;
    
      const savedIcons = localStorage.getItem('savedIcons') ? JSON.parse(localStorage.getItem('savedIcons')) : [];
      if (!savedIcons.includes(savedIcon)) {
        savedIcons.push(savedIcon);
      }
      localStorage.setItem('savedIcons', JSON.stringify(savedIcons));
    });
    
    bookmarkEmptyIcon.appendTo(characterDetails);
    
    
    const heartEmptyIcon = new IconElement('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20empty.png');
    heartEmptyIcon.addEventListener('click', () => {
      heartEmptyIcon.setSource(heartEmptyIcon.element.src.includes('empty') ?
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20full%20icon.png' :
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20empty.png'
      );
    
      const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
    
      if (heartEmptyIcon.element.src.includes('full')) {
        if (!favorites.includes(selectedCharacter.icon)) {
          favorites.push(selectedCharacter.icon);
        }
      } else {
        const index = favorites.indexOf(selectedCharacter.icon);
        if (index !== -1) {
          favorites.splice(index, 1);
        }
      }
    
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
    
    heartEmptyIcon.appendTo(characterDetails)})