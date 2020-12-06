//error popups
let $errorLoginEl = document.getElementsByClassName("login");
let $errorPassEl = document.getElementsByClassName("pass");
let $errorPass2El = document.getElementsByClassName("pass2");
let $errorNameEl = document.getElementsByClassName("name");
let $errorSurnameEl = document.getElementsByClassName("surname");
let $errorEmailEl = document.getElementsByClassName("email");
let $errorTelEl = document.getElementsByClassName("tel");
let $errorAgreeEl = document.getElementsByClassName("agree");

//elementy formularza
let $loginEl = document.getElementById("login");
let $passEl = document.getElementById("pass");
let $pass2El = document.getElementById("pass2");
let $nameEl = document.getElementById("name");
let $surnameEl = document.getElementById("surname");
let $emailEl = document.getElementById("email");
let $telEl = document.getElementById("tel");
let $agreeEl = document.getElementById("agree");

//button
let $buttonSubmit = document.getElementById("submit");

//element w ktorym wyswietlane bedą wartosci inputów po wyslaniu
let $summaryDiv = document.querySelector(".summary");

//generowanie elementow podsumowania
let $loginSummary = document.createElement("span");
let $nameSummary = document.createElement("span");
let $surnameSummary = document.createElement("span");
let $emailSummary = document.createElement("span");
let $telSummary = document.createElement("span");

//wzorzec do sprawdzenia telefonu (tylko liczby)
var reg = new RegExp(/^\d+$/);

//obsluga nacisniecia przycisku
$buttonSubmit.form.onsubmit = function (event) {
  var reg = new RegExp(/^\d+$/);
  if ($loginEl.value.includes("admin") == true) {
    $errorLoginEl[0].style.display = "block";
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
    $errorAgreeEl[0].style.display = "block";
  } else {
    $loginSummary.innerText = "Login: " + $loginEl.value;
    $summaryDiv.appendChild($loginSummary);

    $nameSummary.innerText = "Imię:" + $nameEl.value;
    $summaryDiv.appendChild($nameSummary);

    $surnameSummary.innerText = "Nazwisko: " + $surnameEl.value;
    $summaryDiv.appendChild($surnameSummary);

    $emailSummary.innerText = "e-mail: " + $emailEl.value;
    $summaryDiv.appendChild($emailSummary);

    $telSummary.innerText = "Telefon: " + $telEl.value;
    $summaryDiv.appendChild($telSummary);

    //czyszczenie wartosci elementow formularza
    $loginEl.value = "";
    $passEl.value = "";
    $pass2El.value = "";
    $nameEl.value = "";
    $surnameEl.value = "";
    $emailEl.value = "";
    $telEl.value = "";
    $agreeEl.checked = false;
    $errorLoginEl[0].style.display = "none";
    $errorPassEl[0].style.display = "none";
    $errorPass2El[0].style.display = "none";
    $errorNameEl[0].style.display = "none";
    $errorSurnameEl[0].style.display = "none";
    $errorNameEl[0].style.display = "none";
    $errorNameEl[0].style.display = "none";
    $errorNameEl[0].style.display = "none";
  }
  event.preventDefault();
};
