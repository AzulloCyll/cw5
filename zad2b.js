//popupy
let $errorLoginEl = document.getElementsByClassName("login");
let $errorPassEl = document.getElementsByClassName("pass");
let $errorPass2El = document.getElementsByClassName("pass2");
let $errorNameEl = document.getElementsByClassName("name");
let $errorSurnameEl = document.getElementsByClassName("surname");
let $errorEmailEl = document.getElementsByClassName("email");
let $errorTelEl = document.getElementsByClassName("tel");
let $errorAgree = document.getElementsByClassName("agree");

let $loginEl = document.getElementById("login");
let $passEl = document.getElementById("pass");
let $pass2El = document.getElementById("pass2");
let $nameEl = document.getElementById("name");
let $surnameEl = document.getElementById("surname");
let $emailEl = document.getElementById("email");
let $telEl = document.getElementById("tel");
let $agreeEl = document.getElementById("agree");

let $buttonSubmit = document.getElementById("submit");

var reg = new RegExp(/^\d+$/);

$buttonSubmit.form.onsubmit = function (event) {
  var reg = new RegExp(/^\d+$/);
  if ($loginEl.value.includes("admin") == true) {
    $errorLoginEl[0].style.display = "block";
    console.log($loginEl.value);
  } else if ($passEl.value.length < 8) {
    $errorPassEl[0].style.display = "block";
  } else if ($passEl.value != $pass2El.value) {
    $errorPass2El[0].style.display = "block";
  } else if ($nameEl.value != "" && $surnameEl.value == "") {
    $errorSurnameEl[0].style.display = "block";
  } else if ($surnameEl.value != "" && $nameEl.value == "") {
    $errorNameEl[0].style.display = "block";
  } else if ($emailEl.value.includes("@") == false) {
    $errorEmailEl[0].style.display = "block";
  } else if (reg.test($telEl.value) == false) {
    $errorTelEl[0].style.display = "block";
  } else if ($agreeEl.checked != true) {
    $errorAgree[0].style.display = "block";
  }
};
