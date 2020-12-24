@@include("../../node_modules/bootstrap/dist/js/bootstrap.js");
@@include("settings.js");
@@include("anim_hide.js");

const search = inputSearch;
const submit = buttonSearch;

const path = "http://localhost:3000/";

submit.addEventListener(
	"click",
	() => {
		searchPage(search.value.toLowerCase());
	},
	false
);

let wordsAllFood = {
	items: {
		coffee: ["кава", "кофе"],
		tea: ["чай", "чаї"],
		syrup: ["сироп", "сиропи"],
		sweet: ["солодке", "печево"],
		tools: ["інструменти бариста", "інструменти", "бариста"],
		cartonCup: ["стакани"],
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
