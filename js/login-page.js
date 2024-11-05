// var usernameval = document.querySelector("username").value;
// var emailval = document.querySelector("email").value;
var arrayfill = [];
localStorage.datalist = arrayfill;
var email = document.getElementById("email");

var rpassword = document.getElementById("rpassword");

var username = document.getElementById("username");

var password = document.getElementById("password");

function validateEmailInput() {
  var emailInput = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput)) {
    console.log("Email is correct");
    return true
  } else {
    email.style.borderColor = "red";
    return false;
  }

}

function inputValidation() {
  username.style.borderColor = "gray";
  email.style.borderColor = "gray";
  password.style.borderColor = "gray";
  rpassword.style.borderColor = "gray";
  
  if (document.getElementById("username").value == null || document.getElementById("username").value == "") {
    username.style.borderColor = "red"; return;
  }
  if (document.getElementById("email").value == null || document.getElementById("email").value == "") {
    email.style.borderColor = "red"; return;
  } else { if (!validateEmailInput()) {return;};}
  if (document.getElementById("password").value == null || document.getElementById("password").value == "") {
    password.style.borderColor = "red"; return;
  }
  if (document.getElementById("rpassword").value == null || document.getElementById("rpassword").value == "") {
    rpassword.style.borderColor = "red"; return;
  }

  passwordValidation();
}

function passwordValidation() {
  var passwordval = document.getElementById("password").value;
  var rpasswordval = document.getElementById("rpassword").value;
  if (passwordval == rpasswordval) {
      console.log("Passwords are identical")
      registerForm();
      console.log(passwordval,rpasswordval);
  } else {
    password.style.borderColor = "red";
    rpassword.style.borderColor = "red";
    console.log("Passwords are not same");
    console.log(passwordval,rpasswordval);
  }
}

function registerForm() {
  var datalist = getLocalData();
  
  var usernameval = document.getElementById("username").value;
  var emailval = document.getElementById("email").value; 
  var passwordval = document.getElementById("password").value;
  
  var data = {
    username: usernameval,
    email: emailval,
    password: passwordval
  };
  datalist.push(data)
  localStorage.datalist = JSON.stringify(datalist);

  window.location.href = "login.html";
}

function getLocalData() {
  var datalist = JSON.parse(localStorage.datalist);
  return datalist;
}

function loginCheck() {
  var username = document.getElementById("usernamelogin").value;
  var password = document.getElementById("passwordlogin").value;

  var datalist = getLocalData();

  for (let i = 0; i < datalist.length; i++) {
    if (username == datalist[i].username && password == datalist[i].password) {
      window.location.href = "../index.html";
      return;
    }
  }
  console.log("Account doesn't exist. Please, register yourself");
  
}

function loginPagehref() {
  window.location.href = "login.html";
}
function registerPagehref() {
  window.location.href = "register.html";
}
