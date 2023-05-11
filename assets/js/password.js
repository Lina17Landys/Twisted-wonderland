const form = document.querySelector('#password-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const currentPassword = document.querySelector('#current-password').value;
    const newPassword = document.querySelector('#new-password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (currentPassword.trim() === '') {
        alert('Please enter your current password.');
        return;
    }
    if (newPassword.trim() === '') {
        alert('Please enter a new password.');
        return;
    }
    if (confirmPassword.trim() === '') {
        alert('Please confirm your new password.');
        return;
    }
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }


    alert('Password changed successfully!');
    form.reset();
});
