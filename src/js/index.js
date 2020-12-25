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

let dataItems = {
	store: [],
	coffee: ["Jacobs", "Nescafe"],
};

for (const key in dataItems) {
	if (Object.hasOwnProperty.call(dataItems, key)) {
		const element = dataItems[key];

		dataItems.coffee.forEach((element) => {
			let idName = document.querySelector(`#${element}Name`);
			let idCost = document.querySelector(`#${element}Cost`);
			let idBtn = document.querySelector(`#${element}Btn`);

			idBtn.addEventListener(
				"click",
				() => {
					// console.log(idCost.textContent);
					dataItems.store.push({
						name: idName.textContent,
						cost: idCost.textContent,
					});
					console.log("dataItems.store", dataItems.store);
				},
				false
			);
		});
	}
}

// dataItems.coffee.forEach((element) => {
// 	let idName = document.querySelector(`#${element}Name`);
// 	let idCost = document.querySelector(`#${element}Cost`);
// 	let idBtn = document.querySelector(`#${element}Btn`);

// 	idBtn.addEventListener(
// 		"click",
// 		() => {
// 			console.log(idCost.textContent);
// 			dataItems.store.push({
// 				name: idName.textContent,
// 				cost: idCost.textContent,
// 			});
// 			console.log(dataItems.store);
// 		},
// 		false
// 	);
// });
