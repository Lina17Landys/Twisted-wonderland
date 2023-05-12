const searchInput = document.getElementById('searchInput');
const box = document.querySelectorAll('.box');
const noResultsMessage = document.getElementById('noResultsMessage');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    let hasResults = false;

    box.forEach(box => {
        const name = box.querySelector('fullName').textContent.toLowerCase();

        if (name.includes(searchText)) {
            box.classList.remove('hidden');
            hasResults = true;
        } else {
            box.classList.add('hidden');
        }
    });

    if (hasResults) {
        noResultsMessage.classList.add('hidden');
    } else {
        noResultsMessage.classList.remove('hidden');
    }
});