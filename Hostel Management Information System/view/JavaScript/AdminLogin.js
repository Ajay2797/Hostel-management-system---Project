function onLogin() {
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;
    if (id == "EE111" && password == "1234") {
        alert("Login Successful !!");
    } else {
        console.log(sName);
        console.log(password);
        alert("Login Failed !!");
    }
}