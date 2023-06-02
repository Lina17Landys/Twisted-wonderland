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

    const bookmarkEmptyIcon = createIconElement('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmark%20empty%20icon.png');
    bookmarkEmptyIcon.addEventListener('click', () => {
      bookmarkEmptyIcon.src = bookmarkEmptyIcon.src.includes('empty') ?
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmarkfull%20icon.png' :
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/bookmark%20empty%20icon.png';
    });
    characterDetails.appendChild(bookmarkEmptyIcon);

    const heartEmptyIcon = createIconElement('https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20empty.png');
    heartEmptyIcon.addEventListener('click', () => {
      heartEmptyIcon.src = heartEmptyIcon.src.includes('empty') ?
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20full%20icon.png' :
        'https://raw.githubusercontent.com/Lina17Landys/Twisted-wonderland/master/assets/iconos/heart%20empty.png';

      const character = new Personaje(selectedIndex.toString(), heartEmptyIcon.src);
      character.addClickListener();
    });
    characterDetails.appendChild(heartEmptyIcon);
  });
