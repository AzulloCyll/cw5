const texts = [
  "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
  "Brig belay fire ship doubloon gally black spot grapple spike topgallant dead men tell no tales. Snow brigantine splice the main brace Buccaneer cable quarterdeck scallywag yawl jack lugger. Pinnace prow Jack Tar Davy Jones' Locker lad draught wench spike careen lookout.",
  "Cupcake ipsum dolor sit. Amet topping wafer brownie cotton candy gummies chocolate bar pastry gummi bears. Candy canes cupcake sugar plum candy canes. Liquorice cake danish tiramisu toffee jelly-o gummies chocolate cake wafer.",
  "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
  "Spicy jalapeno bacon ipsum dolor amet reprehenderit ad cupim veniam magna duis t-bone ipsum. Ut est flank mollit, venison drumstick dolore in. Eu capicola ad, exercitation duis jowl rump aute shankle cillum et burgdoggen.",
  "Why don't you ask the smartest people in the universe, Jerry? Oh yeah you can't. They blew up. Okay, take it easy Rick. T-that's dark. I don't get it and I don't need to. Oh my god, how could I not see this coming? My lust, my greed! I deserve thiiiiii- Ladies, let's get out of here. I haven't learned a thiiiiiing!",
  "東京つけ麺小松菜酢ゆずカツオだし刻み玉ねぎバター。 熊本ニンニク小松菜小松菜のり塩コーン鹿児島。 和歌山油そば横浜ごま鶏がらスープラーメンバーガーほうれん草鶏がらスープのりとんこつラード博多カレー。 ごま西洋葱唐辛子御飯和歌山カレー胡椒味噌ほうれん草のり鶏がらスープカレー",
];

///kreacja elementów
let $firstDiv = document.querySelector("div");
var $allParagraphs = document.getElementsByTagName("p");
let $myForm = document.createElement("form");
let $myTextInput = document.createElement("input");
let $mySubmit = document.createElement("button");
let $myText = document.createElement("span"); // z textNodem były problemy
let $myButton = document.createElement("button");

for (let i = 0; i < texts.length; ++i) {
  //tworzy elementy P, uzupełnia je tekstami z macierzy tekstów
  var $paragraph = document.createElement("p");
  $paragraph.textContent = texts[i];
  $firstDiv.appendChild($paragraph);
}

for (let i = 0; i < texts.length; i++) {
  var $heading = document.createElement("h" + (i + 1));
  var textFromArr = texts[i].split(" "); // dzieli tekst na slowa
  var firstWord = textFromArr[0]; // wyodrębnia pierwsze słowo
  $heading.textContent = firstWord;
  $firstDiv.insertBefore($heading, $allParagraphs[i]); //<div>.insertBefore(<h*>,<p[i]>)
}

/// tworzę macierz z kolekcjami H
var $allHeadings = [];
for (let i = 0; i < texts.length; i++) {
  let $heading = document.getElementsByTagName("h" + (i + 1));
  $allHeadings.push(Array.from($heading));
}

//dodaje obsługe eventu onclick do nagłówków H
for (let i = 0; i < texts.length; i++) {
  $allHeadings[i][0].onclick = function (event) {
    if ($allParagraphs[i].style.display === "none") {
      $allParagraphs[i].style.display = "block";
    } else {
      $allParagraphs[i].style.display = "none";
    }
  };
}

// tworz element do wyswietlania ilosci znaków w polu input, oraz samo pole i przycisk
$myTextInput.type = "text";
$mySubmit.type = "submit";
$mySubmit.textContent = "Wyślij";
$firstDiv.insertBefore($myForm, $allHeadings[0][0]);
$myForm.appendChild($myTextInput);
$myForm.appendChild($mySubmit);
$myForm.appendChild($myText);

let typeValue = 0;
$myText.innerHTML = "Ilość znaków: " + typeValue;
$myText.style.visibility = "hidden"; //inicjalizacja (wypelnia miejsce w dokumencie)

//obsluga pola w celu dynamicznego wyswietlania ilosci znakow
$myTextInput.oninput = function (event) {
  typeValue = event.target.value.length;
  $myText.innerHTML = "Ilość znaków: " + typeValue;
  if (typeValue >= 5) {
    $myText.style.color = "green";
    $myText.style.visibility = "visible";
  } else if (typeValue >= 1 && typeValue < 5) {
    $myText.style.color = "red";
    $myText.style.visibility = "visible";
  } else {
    $myText.style.visibility = "hidden";
  }
};

// oblsuga dodawania nowego paragrafu
let $newP = $allParagraphs[0].cloneNode();
let $newH = $allHeadings[0][0].cloneNode();

// w przypadku zbyt malej ilosci znakow
$mySubmit.onclick = function (event) {
  if (typeValue < 5) {
    alert("Pole tekstowe musi być uzupełnione (conajmniej 5 znaków)");
    return false;
  } else {
    //zmiana zachowania przycsików kiedy liczba paragrafów się zwiększy
    for (let i = 0; i < $buttons.length; i++)
      $buttons[i].onclick = function (event) {
        if ($allParagraphs[i + 1].style.display === "none") {
          $allParagraphs[i + 1].style.display = "block";
        } else {
          $allParagraphs[i + 1].style.display = "none";
        }
      };
  }
  console.log("Wysłano");

  //obsluga wyswietlenia paragrafu i naglowka po wcisnieciu przycisku 'Wyslij'
  $newP.textContent = $myTextInput.value;

  let firstWord2 = [];
  firstWord2 = $myTextInput.value.split(" ");
  $newH.textContent = firstWord2[0];
  $firstDiv.insertBefore($newP, $allHeadings[0][0]);
  $firstDiv.insertBefore($newH, $allParagraphs[0]);

  for (let i = 0; i < texts.length; i++) {
    $newH.onclick = function (event) {
      if ($newP.style.display === "none") {
        $newP.style.display = "block";
      } else {
        $newP.style.display = "none";
      }
    };
  }
  return false;
};

for (let i = 0; i < texts.length; ++i) {
  let $myNormalButton = document.createElement("button");
  $myNormalButton.textContent = "Usuń";
  $firstDiv.insertBefore($myNormalButton, $allParagraphs[i].nextSibling); ///wow - uzycie funkcji insertBefore, żeby wstawić coś po elemencie
}

let $buttons = document.getElementsByTagName("button");
$buttons = [...$buttons];
$buttons.shift();
$buttons.pop();

for (let i = 0; i < $buttons.length; i++)
  $buttons[i].onclick = function (event) {
    if ($allParagraphs[i].style.display === "none") {
      $allParagraphs[i].style.display = "block";
    } else {
      $allParagraphs[i].style.display = "none";
    }
  };

let $showHideCol = document.getElementsByTagName("button");
let $showHide = $showHideCol[$showHideCol.length - 1];
$showHide.classList.add("showhide");

$showHide.onclick = function (event) {
  $allParagraphs = document.getElementsByTagName("p");
  if ($showHide.textContent === "Ukryj") {
    $showHide.textContent = "Pokaż";
    for (let i = 0; i < $allParagraphs.length - 1; i++) {
      $allParagraphs[i].style.display = "none";
    }
  } else {
    $showHide.textContent = "Ukryj";
    for (let i = 0; i < $allParagraphs.length - 1; i++) {
      $allParagraphs[i].style.display = "block";
    }
  }
};

$divChildren = document
  .getElementsByTagName("div")[0]
  .getElementsByTagName("*");
console.log("Element DIV ma " + $divChildren.length + " dzieci");

document.body.addEventListener(
  "DOMSubtreeModified",
  function () {
    document.getElementsByTagName("div")[0].getElementsByTagName("*");
    console.log("Element DIV ma " + $divChildren.length + " dzieci");
  },
  false
);
