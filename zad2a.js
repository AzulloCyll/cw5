var $trCollection = document.getElementsByTagName("tr");
var $tdCollections = []; //macierz komórek w macierzy rzędów

for (let i = 0; i < $trCollection.length; i++) {
  $tdCollections.push($trCollection[i].children);
}

for (let i = 0; i < $tdCollections.length; i++) {
  for (j = 0; j < $tdCollections[i].length; j++) {
    // kolorowanie komorek za pomocą warunków na rozowo
    if ((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) {
      $tdCollections[i][j].style.backgroundColor = "pink";
      // obsluga klikniecia na elementach rozowych
      $tdCollections[i][j].onclick = function (event) {
        if (this.style.backgroundColor == "pink") {
          this.style.backgroundColor = "red";
        } else {
          this.style.backgroundColor = "pink";
        }
      };
    } else {
      // kolorowanie komorek za pomocą warunków na jasnoniebiesko
      $tdCollections[i][j].style.backgroundColor = "lightblue";
      // obsluga klikniecia na elementach jasnoniebieskich
      $tdCollections[i][j].onclick = function (event) {
        if (this.style.backgroundColor == "lightblue") {
          this.style.backgroundColor = "blue";
        } else {
          this.style.backgroundColor = "lightblue";
        }
      };
    }
  }
}

// analogicznie obsługa znalezienia się kursora myszyy nad elementem + opuszczenie kursora obrębu elementu
for (let i = 0; i < $tdCollections.length; i++) {
  for (j = 0; j < $tdCollections[i].length; j++) {
    if ((i % 2 != 0 && j % 2 != 0) || (i % 2 == 0 && j % 2 == 0)) {
      $tdCollections[i][j].style.backgroundColor = "pink";
      $tdCollections[i][j].onmouseenter = function (event) {
        if (this.style.backgroundColor == "pink") {
          this.style.backgroundColor = "red";
        } else {
          this.style.backgroundColor = "pink";
        }
      };
      $tdCollections[i][j].onmouseleave = function (event) {
        if (this.style.backgroundColor == "pink") {
          this.style.backgroundColor = "red";
        } else {
          this.style.backgroundColor = "pink";
        }
      };
    } else {
      $tdCollections[i][j].style.backgroundColor = "lightblue";
      $tdCollections[i][j].onmouseenter = function (event) {
        if (this.style.backgroundColor == "lightblue") {
          this.style.backgroundColor = "blue";
        } else {
          this.style.backgroundColor = "lightblue";
        }
      };
      $tdCollections[i][j].onmouseleave = function (event) {
        if (this.style.backgroundColor == "lightblue") {
          this.style.backgroundColor = "blue";
        } else {
          this.style.backgroundColor = "lightblue";
        }
      };
    }
  }
}
