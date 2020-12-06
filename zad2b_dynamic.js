//popupy
let $errorLoginEl = document.getElementsByClassName("login");
let $errorPassEl = document.getElementsByClassName("pass");
let $errorPass2El = document.getElementsByClassName("pass2");
let $errorNameEl = document.getElementsByClassName("name");
let $errorSurnameEl = document.getElementsByClassName("surname");
let $errorEmailEl = document.getElementsByClassName("email");
let $errorTelEl = document.getElementsByClassName("tel");
let $errorAgreeEl = document.getElementsByClassName("agree");

let $loginEl = document.getElementById("login");
let $passEl = document.getElementById("pass");
let $pass2El = document.getElementById("pass2");
let $nameEl = document.getElementById("name");
let $surnameEl = document.getElementById("surname");
let $emailEl = document.getElementById("email");
let $telEl = document.getElementById("tel");
let $agreeEl = document.getElementById("agree");

let $buttonSubmit = document.getElementById("submit");

$loginEl.onkeyup = function (event) {
  if (event.target.value.includes("admin") == true) {
    $errorLoginEl[0].style.display = "block";
  } else if (event.target.value !== "admin") {
    $errorLoginEl[0].style.display = "none";
  }
};

$passEl.onkeyup = function (event) {
  if (event.target.value.length < 8) {
    $errorPassEl[0].style.display = "block";
  } else {
    $errorPassEl[0].style.display = "none";
  }
};

$pass2El.onkeyup = function (event) {
  if (event.target.value == $passEl.value) {
    $errorPass2El[0].style.display = "none";
  } else {
    $errorPass2El[0].style.display = "block";
  }
};

$nameEl.onkeyup = function (event) {
  if (event.target.value != "" && $surnameEl.value == "") {
    $errorSurnameEl[0].style.display = "block";
  } else {
    $errorNameEl[0].style.display = "none";
  }
};

$surnameEl.onkeyup = function (event) {
  if (event.target.value != "" && $nameEl.value == "") {
    $errorNameEl[0].style.display = "block";
  } else {
    $errorSurnameEl[0].style.display = "none";
  }
};

$emailEl.onkeyup = function (event) {
  if (event.target.value.includes("@") == false) {
    $errorEmailEl[0].style.display = "block";
  } else {
    $errorEmailEl[0].style.display = "none";
  }
};

$telEl.onkeyup = function (event) {
  var reg = new RegExp(/^\d+$/); //uzylem regexa
  if (reg.test(event.target.value) == false) {
    $errorTelEl[0].style.display = "block";
  } else {
    $errorTelEl[0].style.display = "none";
  }
};

$agreeEl.onclick = function (event) {
  if (event.target.checked != true) {
    $errorAgreeEl[0].style.display = "block";
  } else {
    $errorAgreeEl[0].style.display = "none";
  }
};
