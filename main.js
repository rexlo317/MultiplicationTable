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


module.exports = getMultiplicationTable;