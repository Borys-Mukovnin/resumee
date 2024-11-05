
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

let htmltext = "This is a Snippet-HTML code of this resumee website."
let csstext = `.title {
    display: flex;
    justify-content: center;
}

* {
    font-size: large;
}

.hat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 7vw;
}



div .desc {
    display: flex;
    width: 40vw;
    height: 40vh;
    align-items: center;
}

.navbar {
    display: flex;
    margin-top: 0.2vw;
    justify-content: center;
    gap: 30px;
    align-items: center;
    background-color: rgba(112, 111, 111, 0.377);
    border-radius: 10px;

}

ul {
    display: flex;
    text-align: center;
}

.navbar .icon {
    display: none;
}

.navbar {
    font-size: large;
}

.navbar a {
    position: relative;
}

.navbar a::after {
    content: '';
    width: 0%;
    height: 3px;
    background: #0c090b;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}

.navbar a:hover::after {
    width: 100%;
    color: white;
}

@media screen and (max-width: 600px) {
    .navbar a:not(:first-child) {
        display: none;
    }

    .navbar a.icon {
        float: right;
        display: block;
    }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
    .navbar.responsive {
        position: relative;
    }

    .navbar.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .navbar.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}

a,
a:hover,
a:active,
a:visited,
a:focus {
    color: black;
    text-decoration: none;
}


.plang {
    display: flex;
}

.lang {
    display: flex;
}

.text {
    display: flex;
    flex-direction: column;
    margin-right: -0.5vw;
}

.bars {
    display: flex;
    flex-direction: column;
}

.lang ul {
    display: flex;
    flex-direction: column;
}

.s-lang {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10vw;
}

.s-lang ul li {
    display: flex;
    align-items: center;
}

@keyframes progressgray {
    0% {
        width: 0;
    }

    100% {
        width: 200px;
    }

}

.progress {
    background: #dedee0;
    border-radius: 13px;
    height: 15px;
    width: 200px;
    padding: 2px;
    animation: progressgray 1s forwards;

}

.progress:after {
    content: '';
    display: block;
    background: rgb(15, 158, 51);
    width: 50%;
    height: 100%;
    border-radius: 9px;
}

.textli {
    margin-bottom: 1.2vh;
}

.photolist1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw;
    margin-top: 10vh;
}

.photolist1 img:hover {
    scale: 1.1;
    transition: 0.5s;
}

.img {
    width: 30vw;
    height: 30vw;
}


footer {
    min-height: 7vh;
    gap: 25px;
    margin-bottom: 5px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(112, 111, 111, 0.377);
    border-radius: 10px;
}

footer a:hover {
    scale: 1.1;
    transition: 0.2s;
}

#footmain {
    margin-top: 10vh;
}


/* CONTACT WEBSITE */
#contact {
    display: flex;
    justify-content: center;
    margin-top: 15vh;
}

#contactform {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 30vw;

}

#foot {
    margin-top: 26vh;
}

#contactform input,
textarea,
button {
    border-radius: 8px;
    border: 1px solid black
}

#contactform button {
    background-color: rgba(233, 231, 238, 0.74);
}

#emailerrmsg {
    visibility: hidden;
    position: relative;
    top: -5px;
    font-size: small;
    color: red;
}

.popup {
    width: 400px;
    background: #fff;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.1);
    text-align: center;
    padding: 0 30px 60px;
    color: #333;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
}

.open-popup {
    visibility: visible;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
}

.popup img {
    width: 100px;
    margin-top: -50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.popup h2 {
    font-size: 38px;
    font-weight: 500;
    margin: 30px 0 10px;
}

.popup button {
    width: 50%;
    margin-top: 50px;
    padding: 10px 0;
    background-color: #e02189;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.popup button:hover {
    scale: 1.1;
    transition: 0.2s;
}

/* CAREER WEBSITE */
#footcar {
    margin-top: 2.5vh;
}

.carrerstairs {
    border-radius: 10px;
    width: 95vw;
    height: 85vh;
    background-color: #8e8e9130;
    gap: 30px;
    display: flex;
    justify-content: center;
    align-items: end;
}

.stairname {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.stair {
    background-color: rgba(0, 0, 0, 0.275);
    width: 10vw;
}


.stairtooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.stairtooltip .stairttooltiptext {
    visibility: hidden;
    width: 25vw;
    background-color: rgb(0, 0, 0);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -12.5vw;
}

.stairtooltip:hover,
.stairname:hover .stairttooltiptext {
    visibility: visible;
    transition: 2s;
}

@keyframes firstanim {
    from {
        height: 0;
    }

    to {
        height: 20vh;
    }
}

@keyframes secondanim {
    from {
        height: 0;
    }

    to {
        height: 30vh;
    }
}

@keyframes thirdanim {
    from {
        height: 0;
    }

    to {
        height: 40vh;
    }
}

@keyframes fourthanim {
    from {
        height: 0;
    }

    to {
        height: 50vh;
    }
}

@keyframes fifthanim {
    from {
        height: 0;
    }

    to {
        height: 60vh;
    }
}

#first {
    animation: firstanim 1s;
    height: 20vh;
}

#second {
    animation: secondanim 1s;
    height: 30vh;
}

#third {
    animation: thirdanim 1s;
    height: 40vh;
}

#fourth {
    animation: fourthanim 1s;
    height: 50vh;
}

#fifth {
    animation: fifthanim 1s;
    height: 60vh;
}


/* PROJECTS WEBSITE */
.projectssect {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
}

.menudrop {
    display: flex;
    justify-content: center;
    gap: 10vw;
}

@keyframes animbuttons {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.dropbtn {
    background-color: #163f65;
    color: white;
    width: 7vw;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    animation: animbuttons 1s;
}

.dropdown {
    position: relative;
    display: inline-block;
}


.dropdown-content {
    margin-top: 1px;
    display: none;
    position: absolute;
    background-color: #ffffff00;
    z-index: 1;
}


.dropdown-content button {
    color: black;
    width: 7vw;
    margin-bottom: 2px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}


.dropdown-content button:hover {
    background-color: #f1f1f1;
    scale: 1.1;
    transition: 0.1s;
}


.dropdown:hover .dropdown-content {
    display: block;
}


.dropdown:hover .dropbtn {
    background-color: #163f6552;
}
#generalprojectbox {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.projectbox {
    animation: animbuttons 1s;
    background-color: rgba(211, 211, 211, 0.464);
    width: 75vw;
    height: 75vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.projectbox p {
    color: black;
    opacity: 1;
}

.webbuttons {
    display: flex;
    gap: 8px;
}

.codeboxdiv {
    width: 75vw;
    height: 75vh;
    border-radius: 10px;
    background-color: rgba(211, 211, 211, 0.464);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .textboxdiv {
    display: flex;
    overflow-y: scroll;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
} */

.textbox {
    height: 95%;
    overflow-y: auto;
    width: 70%;
}
`;
let jstext = `
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

let htmltext = "This is a Snippet-HTML code of this resumee website."
let csstext = "css_text"
let jstext = "js_text"

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
`;

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
