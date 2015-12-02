(function () {
	'use strict';

	describe('Binary Search', function(){
			describe('As an user', function(){
			describe('I want to know the position of a target element in a given array', function(){
	  			
	  			it('Returns 2 when the target is 3 in the array [1,2,3,4,5,6]', function(){
		  			// Given
		  			var array = [1,2,3,4,5,6];
		  			var target = 3;

		  			// Then
		  			expect(binarySearch(target,array)).toEqual(2);
	  			});

	  			it('Returns 0 when the target is the first element of an array', function(){
		  			// Given
		  			var array = [1,2,3,4,5,6];
		  			var target = array[0];
		  			
		  			// Then
		  			expect(binarySearch(target,array)).toEqual(0);
	  			});

	  			it('Returns N-1 when the target is the last element of an array with size N', function(){
		  			// Given
		  			var array = [1,2,3,4,5,6];
		  			var n = array.length;
		  			var target = array[n-1];

		  			// Then
		  			expect(binarySearch(target,array)).toEqual(n-1);
	  			});
	  		});
			describe('I want to know if a target element is not in a given array', function(){
				it('Returns -1 when looking for an unexisting element', function(){
		  			// Given
		  			var array = [1,2,5,6];
		  			var target = 3;

		  			// Then
		  			expect(binarySearch(target,array)).toEqual(-1);
	  			});
	  		});
		});
	});
})();
