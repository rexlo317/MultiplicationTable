function getMultiplicationTable (startNum, endNum) {
	if (!isInputValid (startNum, endNum))
		return null;
	if (!isInputInRange(startNum, endNum))
		return null;
	var stringArray = generateArray(startNum, endNum);
    return generateTable(stringArray);
}

function isInputValid (startNum, endNum){
	if (startNum > endNum)
		return false;
	return true;
}

function isInputInRange (startNum, endNum){
	if (startNum < 1 || startNum > 1000 || endNum < 1 || startNum > 1000)
		return false;
	return true;
}

module.exports = getMultiplicationTable;