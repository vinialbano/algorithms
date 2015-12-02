function binarySearch(target, array)
{
	var min = 0;
	var max = array.length - 1;
	var guess;
	var index;

	return doSearch();

	function doSearch()
	{
		while(min <= max) {
			guess = Math.floor((min + max) / 2);
			index = array[guess];

			if(target === index){

				return guess;
			}

			updateMinMax();
		}
		return -1;
	}

	function updateMinMax()
	{
		if (target > index){
			min = guess + 1;
		} else {
			max = guess - 1;
		}
	}
}