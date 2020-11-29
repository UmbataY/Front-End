let errDiv = document.getElementById("errors");

document.getElementsByClassName("auth-button")[0].addEventListener("click", 
function(event){
    event.preventDefault(); 
    errDiv.innerHTML = "";

    let inputs = document.getElementsByClassName("auth-input");
    let usernameValid = false
    if (inputs.length == 3){
        usernameValid = isValidUsername(inputs[inputs.length - 3].value)
    }
    let emailValid = isValidEmail(inputs[inputs.length - 2].value);
    let passValid = isValidPassword(inputs[inputs.length - 1].value);


    if (passValid && emailValid) {
        if (inputs.length == 3 && usernameValid) {
            alert("Регистрацията е успешна");
            try {
                window.auth.register(inputs[0].value, inputs[1].value, 
                                    inputs[2].value, registerCallback);
            }
            catch(err) {
                errDiv.innerHTML += "Registration failed <br>" 
                                 + err.message;
            }
        } else {
            alert("Влизането е успешно");
            try {
                window.auth.login(inputs[0].value, inputs[1].value, 
                                    registerCallback);
            }
            catch(err) {
                errDiv.innerHTML += "Registration failed <br>" 
                                 + err.message;
            }
        }
    }
});

function isValidUsername(username) {
    if (username.length > 1) {
        return true;
    }
    errDiv.innerHTML += "Username is not valid" + "<br>";
    return false;
}
function isValidEmail(email) {
    if (email.length < 5) {
        console.log("EMAIL: too short");
    }
    if (!email.includes("@")) {
        console.log("EMAIL: no @");
    }
    if (!email.substring(email.indexOf("@"), email.length).includes("@")) {
        console.log("EMAIL: no dot");
    }
    


    if (
        email.length >= 5
        && email.includes("@")
        && email.substring(email.indexOf("@"), email.length).includes("@")
    ) {
        return true;
    }
    errDiv.innerHTML += "Email in not valid" + "<br>";
    return false;
}
function isValidPassword(password) {
    if (password.length < 6) {
        console.log("too short");
    }
    if (password == password.toLowerCase()) {
        console.log("no Upper");
    }
    if (!/\d/.test(password)) {
        console.log("no number");
    }
    if(!password.match(/[^A-Za-z0-9]+/)) {
        console.log("no Special");
    }


    if (
        password.length >= 6
        && password != password.toLowerCase()
        && /\d/.test(password)
        && password.match(/[^A-Za-z0-9]+/)
    ) {
        return true;
    }
    errDiv.innerHTML += "Password in not valid" + "<br>";
    return false;
}

function registerCallback(success, code, message) {
    if (success) {
        window.location.href = 'posts.html';
    } else {
        errDiv.innerHTML += message;
    }

}