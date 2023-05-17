const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('mail');
  const messageInput = document.getElementById('msg');
  
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all the required fields.');
  } else {
    alert('Your message has been sent!');
    form.reset();
  }
});