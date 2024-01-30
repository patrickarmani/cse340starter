//Code to My Account//
document.getElementById('myAccountBtn').addEventListener('click', toggleLoginForm);

function toggleLoginForm() {
    var accountForm = document.getElementById('accountForm');
    accountForm.classList.toggle('hidden');
}

function submitForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    
    console.log("Email:", email);
    console.log("Password:", password);

    
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

   
    toggleLoginForm();
}
