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

function generateArray (startNum, endNum){
	let result = [];
	let i = startNum;
	let j = startNum;
	let count = startNum;
	while( count <= endNum){
		while( i <= j ){
		result.push(i + '*' + j + '=' + i * j );
		i++;
		}
		count++;
		i = startNum;
		j++;
	}
	return result;
}

function generateTable (stringArray){
	let count = 1;
	let counter = 1;
	let tempCounter = 0;
	let innerCount = 0;
	let result = '';
	let temp = stringArray.length;
	while (temp-counter != 0 ){
		temp = temp - counter;
		tempCounter = tempCounter + counter;
		counter ++;
	}
	temp = stringArray[temp].length + 1;
	
	for (let i=0; i<stringArray.length; i++){
		innerCount++;
		if (innerCount>count){
			result+='\n';
			innerCount = 1;
			count++;
			counter = temp-stringArray[i].length;
		}
		result += stringArray[i];
		if (innerCount < count)
			for(let j=0;j<counter;j++)
				result +=' ';
	}
	return result;
}

module.exports = getMultiplicationTable;