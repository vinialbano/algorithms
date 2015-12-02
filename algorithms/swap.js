function swap(array, firstIndex, secondIndex)
{
	if (!Array.isArray(array) || array.length == 0){
		throw "The given array is empty or invalid";
	}

	if (firstIndex >= array.length || firstIndex < 0){
		throw "The first index is invalid";
	}

	if (secondIndex >= array.length || secondIndex < 0){
		throw "The second index is invalid";
	}

	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
	
	return array;
}