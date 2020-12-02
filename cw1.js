const divWrapper = document.getElementsByTagName("div")[0];
const spanLast = document.createElement("span");
const spanFirst = document.createElement("span");
const firstParagraph = divWrapper.querySelector("p");

divWrapper.innerHTML += "<span>sadasdsa</span>";

spanLast.textContent = "sadasdsa";
divWrapper.appendChild(spanLast);

spanFirst.textContent = "first span";

const spanFirstCopy = spanFirst.cloneNode(true);

divWrapper.firstElementChild.before(spanFirst);
divWrapper.insertBefore(spanFirstCopy, divWrapper.childNodes[1]);

const textComment = document.createComment("stsjfjdjk") // tworzy komentarz
const nodeTextText = document.createTextNode("po prostu tekst");

divWrapper.appendChild(textComment);
divWrapper.childNodes[2].append("teksttekstyekstktergzx");

console.log("firstParagraph.nodeName", firstParagraph.nodeName)
console.log("firstParagraph.nodeType", firstParagraph.nodeType)
console.log("firstParagraph.nodeValue", firstParagraph.nodeValue)
console.log("textComment.nodeValue", textComment.nodeValue)

// divWrapper.appendChild() 
// divWrapper.append()

//divWrapper.hidden = true;
/// usuwanie
const firstSpan = divWrapper.firstElementChild
divWrapper.removeChild(firstSpan); // odwoluje sie do rodzica i podaje dziecko do usuniecia

const $strong = document.getElementsByTagName("strong")[0];

// $strong.parentElement.style.backgroundColor = "red";
// $strong.parentElement.style["background-color"] = "cyan";

const $ul = document.createElement("ul");

for (let index = 0; index < 6; index++) {
    const $li = document.createElement("li")
    $li.textContent = ("Lorem " + index);
    $ul.appendChild($li)    
}

divWrapper.appendChild($ul)


//nie dziala
// console.log(
//     firstParagraph,
//     firstParagraph.nextElementSibling,
//     firstParagraph.previousElementSibling,
//     firstParagraph.nextSibling,
//     firstParagraph.previousSibling)

//     console.log($ul.childNodes[1],
//         $ul.childNodes[1].nextElementSibling,
//         $ul.childNodes[1].previousElementSibling)



$ul.childNodes[0].onclick = function(event) {//musi byc event !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(event.target)
    alert("ok");
    event.target.remove() //usuwa
}

document.forms.formAddNewText.onsubmit = function (event) {
    console.log(event)
    console.log(event.target)

    console.log(document.forms.formAddNewText.fieldText.value)
    console.log(event.target.fieldText.value)
    return false // blokada domyslnego działania przegladarki
}



