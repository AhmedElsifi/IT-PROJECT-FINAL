document.getElementById('submitPhone').addEventListener('click', function () {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNumber = phoneInput.value.trim();

    if (phoneNumber === '') {
        alert('Please enter your phone number.');
        return;
    }

    // TODO: Implement the logic to send the reset password request
    alert(`An email has been sent to the phone number: ${phoneNumber}`);
    window.close();
});

document.getElementById('closeWindow').addEventListener('click', function () {
    window.close();
});
