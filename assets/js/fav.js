document.addEventListener('DOMContentLoaded', () => {
    const favCharactersDiv = document.getElementById('favCharacters');
  
    const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
  
    favorites.forEach((iconSrc, index) => {
      const icon = document.createElement('img');
      icon.src = iconSrc;
      icon.classList.add('icon');
      favCharactersDiv.appendChild(icon);
      icon.addEventListener('click', () => {
        window.location.href = `object.html?index=${index}`;
      });
    });
  });
  