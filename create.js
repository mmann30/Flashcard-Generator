// Create flashcards

// require Node packages
var inquirer = require("inquirer");
var jsonfile = require("jsonfile");

// Require local files
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");

function createMenu() {
	inquirer.prompt([
		{
			type: "list",
			name: "createMenu",
			message: "What kind of flashcard would you like to make?",
			choices: ["basic", "cloze"]
		}
	]).then(function(results) {
		if (results.createMenu === "basic") {
			createBasic();
		} else {
			createCloze();
		}
	});
}

function createBasic() {
	// Prompts user for font and back values of the flash card
	inquirer.prompt([
		{
			type: "input",
			name: "front",
			message: "What would you like on the front of the card?",
		},
		{
			type: "input",
			name: "back",
			message: "What would you like on the back of the card?",
		}
	]).then(function(results) {
		// Create new instance of BasicCard
		var basicCard = new BasicCard(results.front, results.back);
		console.log(basicCard);
		
		// Stores newly created card in data.json
		storeCard(basicCard);
	});
}

function createCloze() {
	// Prompts user for full text and cloze values of the flash card
	inquirer.prompt([
		{
			type: "input",
			name: "text",
			message: "What would you like the full text of the card to be?",
		},
		{
			type: "input",
			name: "cloze",
			message: "What would you like redacted from the text?",
		}
	]).then(function(results) {
		// Checks if the cloze is contained in the text
		if (results.text.indexOf(results.cloze) >= 0) {
			// Creates a new instance of ClozeCard
			var clozeCard = new ClozeCard(results.text, results.cloze);
			console.log(clozeCard);
			
			// Stores newly created card in cardStorage.txt
			storeCard(clozeCard);
		} else {
			console.log("Error: " + results.text + " does not contain " + results.cloze);
		}	
	});
}

// Stores the newly created card in data.json
function storeCard(obj) {
	jsonfile.writeFile("data.json", obj, {flag: 'a', spaces: 2}, function(err) {
		if (err) {
			console.log("Error: " + err);
		}
	});
}

module.exports = createMenu;