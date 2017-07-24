// Create flashcards

// Require files and packages
var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");

function createMain() {
	inquirer.prompt([
		{
			type: "list",
			name: "createMenu",
			message: "What kind of flashcard would you like to make?",
			choice: ["basic", "cloze"]
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
	//inquire user input for font,back
	//create new instace of BasicCard
}

function createCloze() {
	//inquire user input for text, cloze
	//create new instace of ClozeCard
}


module.exports = createMain;