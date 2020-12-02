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

const testComment = document.createComment("dsfsfdsf");
const nodeTextTest = document.createTextNode("sfsdfs df sdf sdf sdf");

divWrapper.appendChild(testComment);
divWrapper.childNodes[2].append("lorem isasda...");

const firstSpanFromDivWrapper = divWrapper.firstElementChild;

divWrapper.removeChild(firstSpanFromDivWrapper);

const $strong = document.getElementsByTagName("strong")[0];

$strong.parentElement.style.backgroundColor = "cyan";

const $ul = document.createElement("ul");

for (let index = 0; index < 6; index++) {
  const $li = document.createElement("li");
  $li.textContent = "lorem " + index;
  $ul.appendChild($li);
}

divWrapper.appendChild($ul);

const divWrapperTest1 = $ul.childNodes[0].parentElement.parentElement;
console.log("divWrapperTest 1", divWrapperTest1);

const divWrapperTest2 = $ul.childNodes[0].closest("div");
console.log("divWrapperTest 2", divWrapperTest2);

// coś nie działa
console.log(
  firstParagraph,
  firstParagraph.nextElementSibling,
  firstParagraph.previousElementSibling,
  firstParagraph.nextSibling,
  firstParagraph.previousSibling
);

console.log(
  $ul.childNodes[1],
  $ul.childNodes[1].nextElementSibling,
  $ul.childNodes[1].previousElementSibling
);

// console.log("firstParagraph.nodeName", firstParagraph.nodeName);
// console.log("firstParagraph.nodeType", firstParagraph.nodeType);
// console.log("firstParagraph.nodeValue", firstParagraph.nodeValue);
// console.log("testComment", testComment.nodeValue);

$ul.childNodes[0].onclick = function (event) {
  console.log(event.target);
  event.target.remove();
};

console.log(
  "przed wysłaniem formularza",
  document.forms.formAddNewText.fieldText.value
);

document.forms.formAddNewText.onsubmit = function (event) {
  console.log(event.target);
  console.log("po wysłaniu formularza", event.target.fieldText.value);
  console.log(
    "po wysłaniu formularza",
    document.forms.formAddNewText.fieldText.value
  );

  return false;
};
