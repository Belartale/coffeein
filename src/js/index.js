@@include("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
@@include("settings.js");
@@include("anim_hide.js");

const search = inputSearch;
const submit = buttonSearch;

const path = "http://localhost:3000/";

//!!!!!!!!!!!!!!!!!!!
localStorage.clear();

submit.addEventListener(
  "click",
  () => {
    searchPage(search.value.toLowerCase());
  },
  false
);

let wordsAllFood = {
  items: {
    coffee: ["кава", "кофе", "jacobs", "nescafe"],
    tea: ["чай", "чаї"],
    syrup: ["сироп", "сиропи"],
    sweet: ["солодке", "печево"],
    tools: ["інструменти бариста", "інструменти", "бариста"],
    cartonCup: [
      "стакани",
      "cклянки пластикові",
      "cклянки",
      "пластикові",
      "бамбукові",
    ],
  },
  itemsPack: {},
};

function searchPage(word) {
  checkWords(word);
}

function checkWords(inputWord) {
  IfWord(
    inputWord,
    wordsAllFood.items.coffee,
    "pages/types_food/type_coffee.html"
  );
  IfWord(inputWord, wordsAllFood.items.tea, "pages/types_food/type_tea.html");
  IfWord(
    inputWord,
    wordsAllFood.items.syrup,
    "pages/types_food/type_syrup.html"
  );
  IfWord(
    inputWord,
    wordsAllFood.items.sweet,
    "pages/types_food/type_sweet.html"
  );
  IfWord(
    inputWord,
    wordsAllFood.items.tools,
    "pages/types_food/type_tools.html"
  );
  IfWord(
    inputWord,
    wordsAllFood.items.cartonCup,
    "pages/types_food/type_carton_cup.html"
  );
}

function IfWord(inputWord, words, pathToPage) {
  words.forEach((element) => {
    let word = inputWord.indexOf(element);
    if (word >= 0) {
      location.href = `${path}${pathToPage}`;
    }
  });
}

let store = {
  typeFood: {
    coffee: [
      {
        name: "Nescafe",
        cost: 22,
        text: "lorem lorem lorem lorem lorem lorem",
        pathImg: "types_food/type_coffee/img_jacobs.jpg",
      },
      {
        name: "Jacobs",
        cost: 33,
        text: "jacobs jacobs jacobs jacobs jacobs",
        pathImg: "types_food/type_coffee/img_nescafe.jpg",
      },
    ],
  },
};

const generateCards = (where, obj) => {
  // console.log("where", where);
  const div = `
		<div class="col col-lg-4">
			<div class="card">
				<div class="d-flex justify-content-center p-3">
					<img class="img img--object_contain" src="../../img/${obj.pathImg}" alt="${obj.name} img" style="height: 12rem; width: 12rem;">
				</div>
				<div class="card-body">
					<h5 class="card-title" id="${obj.name}">${obj.name}</h5>
					<p class="card-text">${obj.text}</p>
					<div class="row">
						<div class="col d-flex justify-items-center">
							<p class="fst-italic">${obj.cost} грн.</p>
						</div>
						<div class="col d-flex justify-content-end col-8">
							<input class="form-control from-control-sm mr-2" id="${obj.name}Inp" type="text" value="1" aria-label=".form-control-sm example">
							<button class="btn btn-primary addLocalStorageBtn" id="${obj.name}Btn">Купити</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
  where.insertAdjacentHTML("afterbegin", div);
};

let everyOneFromTypeFood = store.typeFood;

for (let key in everyOneFromTypeFood) {
  // console.log("key", everyOneFromTypeFood[key]);

  let element = everyOneFromTypeFood[key];

  creatCard(element, key);
}

function creatCard(element, key) {
  element.forEach((element) => {
    let card = document.querySelector(`#cards${key}`);

    if (key === "coffee") {
      generateCards(card, element);
      console.log("created cards of coffee");
    } else {
      console.log("error");
    }

    let IdItemBtn = document.querySelector(`#${element.name}Btn`);
    let IdItemInp = document.querySelector(`#${element.name}Inp`);
    let itemAddBtn = document.querySelector(`.addLocalStorageBtn`);

    IdItemBtn.addEventListener(
      "click",
      () => {
        // localStorage.clear(); //! ! ! ! ! CLEAR LOCAL STORAGE
        // console.log("LS length >>>", localStorage.length);
        addLocalStorage("items", { name: element.name, cost: element.cost });

        // console.log("LS >>>", localStorage.getItem("items"));
      },
      false
    );
  });
}

function getLocalStorage(name) {
  let data = localStorage.getItem(name);
  return JSON.parse(data);
}
function addLocalStorage(name, data) {
  let dataPar = getLocalStorage(name);

  if (dataPar === null) {
    dataPar = new Array();
    dataPar.push(data);
    LocalStorage(dataPar);
  } else {
    dataPar.push(data);
    LocalStorage(dataPar);
  }
  console.log("LS >>>>>", getLocalStorage("items"));

  function LocalStorage(dataPar) {
    let dataStr = JSON.stringify(dataPar);
    localStorage.setItem(name, dataStr);
  }
}

function pushLocalStorage(name, data) {
  localStorage.setItem(name, data);
}
