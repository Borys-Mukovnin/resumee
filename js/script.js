
function Navbar() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function Textedit() {
  document.getElementById('textbox').innerHTML = "This function is currently in development. Come back later!";
}



function openPopup(){
  let popup = document.getElementById('popup');
  popup.classList.add('open-popup');
  
}

function closePopup(){
  let popup = document.getElementById('popup');
  popup.classList.remove('open-popup');
  document.getElementById("contactform").submit();
  
}

function validateEmailInput() {
  const emailInput = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const eF = document.getElementById('email');
  const errMsg = document.getElementById('emailerrmsg');

  if (emailRegex.test(emailInput)) {
    openPopup();
  } else {
    eF.style.borderColor = "red";
    eF.style.borderWidth = "2px";
    eF.style.backgroundColor = "#ff000035";
    errMsg.style.visibility = 'visible';
    return;
  }
  
}

