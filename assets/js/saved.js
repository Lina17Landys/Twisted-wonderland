document.addEventListener('DOMContentLoaded', () => {
    const saveContainer = document.getElementById('saveContainer');
  
    const savedIcons = localStorage.getItem('savedIcons') ? JSON.parse(localStorage.getItem('savedIcons')) : [];
  
    savedIcons.forEach(iconSrc => {
      const icon = document.createElement('img');
      icon.src = iconSrc;
      icon.classList.add('icon');
      saveContainer.appendChild(icon);
    });
  });
  