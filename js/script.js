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



function openPopup() {
  let popup = document.getElementById('popup');
  popup.classList.add('open-popup');

}

function closePopup() {
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



function sendEmail() {
  var fname = document.getElementById("name").value;
  var emailform = document.getElementById("email").value;
  var msg = document.getElementById("message").value;
  console.log(fname);
  window.open("mailto:borys.mukovnin1@rh.aok.de?subject=Email%20from%20" + fname + "&body=" + msg + "%20Email%20to%20contact%20back:%20" + emailform);
}

function createWebsiteButtons() {
  var divbuttons = document.createElement("div");
  divbuttons.classList.add('webbuttons');


  var htmlbutton = document.createElement('button');
  var cssbutton = document.createElement('button');
  var jsbutton = document.createElement('button');

  htmlbutton.innerHTML = "HTML";
  cssbutton.innerHTML = "CSS";
  jsbutton.innerHTML = "JS";

  htmlbutton.onclick = function() {
    createCodeSnippet(htmltext);
  };
  cssbutton.onclick = function() {
    createCodeSnippet(csstext);
  };
  jsbutton.onclick = function() {
    createCodeSnippet(jstext);
  };

  divbuttons.appendChild(htmlbutton);
  divbuttons.appendChild(cssbutton);
  divbuttons.appendChild(jsbutton);

  document.querySelector("#generalprojectbox").appendChild(divbuttons);
}

function createCodeBox(text) {
  var codeboxdiv = document.createElement("div");
  codeboxdiv.classList.add('codeboxdiv');
  
  // var textboxdiv = document.createElement("div");
  // textboxdiv.classList.add('textboxdiv');
  
  var textbox = document.createElement('pre');
  textbox.innerHTML = text;
  textbox.classList.add('textbox');

  // textboxdiv.appendChild(textbox);
  codeboxdiv.appendChild(textbox);

  document.querySelector("#generalprojectbox").appendChild(codeboxdiv)
}

function createCodeSnippet(text = "This is default text") {

  document.querySelector("#generalprojectbox").innerHTML = '';

  createWebsiteButtons();
  
  createCodeBox(text);
}
function removePopupClass() {
    if (document.getElementById("popupforum1").classList.value == "popupforum popupforumopen") {
        document.getElementById("popupforum1").classList.remove("popupforumopen");
    }
    if (document.getElementById("popupforum2").classList.value == "popupforum popupforumopen") {
        document.getElementById("popupforum2").classList.remove("popupforumopen");
    }
    if (document.getElementById("popupforum3").classList.value == "popupforum popupforumopen") {
        document.getElementById("popupforum3").classList.remove("popupforumopen");
    }
}
function forumOpenPopup1() {
    removePopupClass();

    document.getElementById("popupforum1").classList.add("popupforumopen");
}
function forumOpenPopup2() {
    removePopupClass();

    document.getElementById("popupforum2").classList.add("popupforumopen");
}
function forumOpenPopup3() {
    removePopupClass();

    document.getElementById("popupforum3").classList.add("popupforumopen");
}

function forumClosePopup1() {
    document.getElementById("popupforum1").classList.remove("popupforumopen");
}
function forumClosePopup2() {
    document.getElementById("popupforum2").classList.remove("popupforumopen");
}
function forumClosePopup3() {
    document.getElementById("popupforum3").classList.remove("popupforumopen");
}
