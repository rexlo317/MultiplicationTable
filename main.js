function getMultiplicationTable (startNum, endNum) {
	//if (isInputValid (startNum, endNum))
	//	return null;
	//if (isInputInRange(startNum, endNum))
	//	return "startNum and endNum should be between 1~1000";
    return generateTable(startNum, endNum);
}

function isInputValid (startNum, endNum){
	if (startNum > endNum)
		return false;
	return true;
}

function isInputInRange (startNum, endNum){
	if (startNum < 1 || startNum > 1000 || endNum <1 || startNum > 1000)
		return false;
	return true;
}

function generateTable (startNum, endNum){
	let result = [{}];
	for (let i=startNum; i<=endNum; i++)
		for (let j=i; j<=endNum; j++)
			result += i + '*' + j + '=' + i * j +'\n';
	return result;
}

module.exports = getMultiplicationTable;