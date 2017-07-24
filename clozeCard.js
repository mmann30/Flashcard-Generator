// Constructor function for a cloze card with a cloze statement
// (statement with redacted text) and a full text side.
 function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "___");
}

module.exports = ClozeCard;

