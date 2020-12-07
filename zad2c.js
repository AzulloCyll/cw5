let $pCollection = document.getElementsByTagName("p"); //kolekcja p
let $pArr = [...$pCollection]; //macierz z kolekcji p

let $pLenghtArr = []; // macierz liczby znakow p
for (i = 0; i < $pArr.length; i++) {
  $pLenghtArr[i] = $pArr[i].innerText.length;
}

let minIndex = $pLenghtArr.indexOf(205); //index najnizszej wartosci p

$pCollection[minIndex].style.color = "red"; // zmiana kolru paragrafu zawierajacego najmniej tekstu

// numer przy kazdym paragrafie
for (let i = 0; i < $pCollection.length; i++) {
  $pCollection[i].prepend(i + 1 + ". ");
}

// co drugi p bold
for (let i = 0; i < $pCollection.length; i += 2) {
  $pCollection[i].style.fontWeight = "bold";
}

//co trzeci p pochyly
for (let i = 0; i < $pCollection.length; i += 3) {
  $pCollection[i].style.fontStyle = "italic";
}

//losowa liczba od 0 do $pCollection.length
function randomize(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
}

// na poczatku czysci tlo na biale w kazdym p, a potem losuje p i zmienia w nim tło
window.onkeypress = function (event) {
  for (let i = 0; i < $pArr.length; i++) {
    $pArr[i].style.backgroundColor = "white";
  }
  $pArr[randomize($pArr)].style.backgroundColor = "lightblue";
};

let wrongWordArr = [
  "ipsum",
  "amet",
  "nemo",
  "dolor",
  "consectetur",
  "sed",
  "natus",
]; //tablica zakazanych slow
let pWordArr = [];

// podzial tekstów kazdego p na pojedyncze slowa
for (let i = 0; i < $pArr.length; i++) {
  pWordArr[i] = $pArr[i].textContent.split(" ");
}

// sprawdzaniie i podmienianie wyrazów
function checkArray(inputArr, wordsArr) {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr[i].length; j++) {
      for (let k = 0; k < wordsArr.length; k++) {
        if (inputArr[i][j] == wordsArr[k]) {
          inputArr[i][j] = "***";
        }
      }
    }
  }
  return inputArr;
}

//wywolanie funkcji powyzej i utworzenie nowej tablicy
let goodArr = checkArray(pWordArr, wrongWordArr);
let newParArr = [];

//łączenie wierszy
for (let i = 0; i < goodArr.length; i++) {
  newParArr.push(goodArr[i].join(" "));
}

//wyswietlenie nowego tekstu w paragrafach
for (let i = 0; i < $pArr.length; i++) {
  $pArr[i].textContent = newParArr[i];
}
