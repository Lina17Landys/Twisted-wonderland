const searchItem = () => {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let x = document.getElementsByClassName('events', 'characters');

    for (let i = 0; i < x.length; i++) {
        if (x[i].classList.contains('events')) {
            x[i].style.display = "charactersContainer";
        } else if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "characters";
        } else {
            x[i].style.display = "eventsContainer";
        }
    }
}
