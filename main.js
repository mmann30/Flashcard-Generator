// Flashcard Generator Main menu

var inquirer = require("inquirer");
var create = require("./create.js");

// Displays main menu
function mainMenu() {
	inquirer.prompt([
		{
			type: "list",
			name: "mainMenu",
			message: "Main Menu: ",
			choices: ["Play", "Create", "Exit"]
		}
	]).then(function(result) {
		console.log(result.mainMenu);
		if (result.mainMenu === "Play") {
			console.log("Sorry, Play is currently offline");
			mainMenu();
		} else if (result.mainMenu === "Create") {
			//run create()
		} else {
			return;
		}
	});
}

mainMenu();