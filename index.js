function validateForm() {

    var name_in = document.getElementById('name');
    var password_in = document.getElementById('password');
    var email_in = document.getElementById('email');
    var phone_in = document.getElementById('phone');

    var name = name_in.value.trim();
    var password = password_in.value.trim();
    var email = email_in.value.trim();
    var phone = phone_in.value.trim();

    if (name === '' || name.length < 3) {
        alert('Please enter a valid name (at least 3 characters).');
        name_in.focus();
        return false;
    }

    if (password === '' || password.length < 6) {
        alert('Please enter a valid password (at least 6 characters).');
        password_in.focus();
        return false;
    }

    var reg_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!reg_email.test(email)) {
        alert('Please enter a valid email.');
        email_in.focus();
        return false;
    }

    if (phone.length != 10) {
        alert('Please enter valid phone number (10-digits).')
        phone_in.focus();
        return false;
    }

    return true;
}