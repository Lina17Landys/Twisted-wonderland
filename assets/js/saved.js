document.addEventListener('DOMContentLoaded', () => {
    const saveContainer = document.getElementById('saveContainer');
    const savedIcons = localStorage.getItem('savedIcons') ? JSON.parse(localStorage.getItem('savedIcons')) : [];
    
    savedIcons.forEach((iconSrc, index) => {
      const icon = document.createElement('img');
      icon.src = iconSrc;
      icon.classList.add('icon');
      saveContainer.appendChild(icon);
      icon.addEventListener('click', () => {
        window.location.href = `object.html?index=${index}`;
      });
    });
  });
  