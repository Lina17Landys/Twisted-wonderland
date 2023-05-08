const myImage = document.getElementById('myImage');
const changeImageButton = document.getElementById('changeImageButton');
const image1 = 'https://static.wikia.nocookie.net/twisted-wonderland/images/3/38/Card_Malleus_SSR_Dorm_Uniform.png/revision/latest/scale-to-width-down/1920?cb=20230308094614';
const image2 = 'https://static.miraheze.org/twistedwonderlandwiki/9/9c/Card_Malleus_SSR_Dorm_Uniform_Groovy.png';
let currentImage = image1;

changeImageButton.addEventListener('click', () => {
    if (currentImage === image1) {
        myImage.src = image2;
        myImage.alt = 'Imagen 2';
        currentImage = image2;
    } else {
        myImage.src = image1;
        myImage.alt = 'Imagen 1';
        currentImage = image1;
    }
});


