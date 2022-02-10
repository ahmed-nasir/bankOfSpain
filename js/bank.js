document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user pass
    const passFeild = document.getElementById('user-password');
    const userPass = passFeild.value;
    // console.log(userPass);

    // user validation
    if (userEmail == 'nasir' && userPass == '123') {
        window.location.href = 'banking.html'
    }
}) 