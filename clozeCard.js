
function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	
	// Regex method to remove the cloze from the fullText
	this.partial = function(){
		var regex = /this.cloze/i;
		// Checks if the cloze is contained in the fullText
		if (this.fullText.test(regex) === true) {
			return this.fullText.replace(regex, "___");
		} else {
			console.log("Error: " + this.fullText + " does not contain " + this.cloze);
		}
	}
}

module.exports = ClozeCard;