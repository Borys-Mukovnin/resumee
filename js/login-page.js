const fs = require('fs');
var username = "user";
var password = "1234";
function checkifEligible(dataset) {

  if (username === dataset.username && password === dataset.password) {
    console.log("Logged in successfully");
    return true;
  }
}


fs.readFile('js/data.json', 'utf-8', (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
    try {
      const data = JSON.parse(jsonString);
      for (let index = 0; index < data.length; index++) {

        const element = data[index];
        if (checkifEligible(element)) {
          return true;
        }

      }
    } catch (err) {
      console.log("Error prsing JSON", err);
    }
  }
});


// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");



// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "1234") {
//         alert("You have successfully logged in.");
//         window.location.href = "index.html";
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

