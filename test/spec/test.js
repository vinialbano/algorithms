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

	describe('Swap', function(){
		describe('As an user', function(){
			describe('I want to swap the order of two elements of a given array', function(){
				it('Returns the array [1] when call the function with the array [1] and indexes 0 and 0', function(){
					expect(swap([1],0,0)).toEqual([1]);
				});

				it('Returns the array [3,2,1] when call the function with the array [1,2,3] and indexes 0 and 2', function(){
					expect(swap([1,2,3],0,2)).toEqual([3,2,1]);
				});
			});

			describe('I want to know if I pass wrong parameters to the function', function(){
				it('Throws an exception if the given array is empty or invalid', function(){
					expect(swap.bind(null,'a',1,2)).toThrow('The given array is empty or invalid');
					expect(swap.bind(null,0,1,2)).toThrow('The given array is empty or invalid');
					expect(swap.bind(null,false,1,2)).toThrow('The given array is empty or invalid');
					expect(swap.bind(null,null,1,2)).toThrow('The given array is empty or invalid');
					expect(swap.bind(null,undefined,1,2)).toThrow('The given array is empty or invalid');
					expect(swap.bind(null,[],1,2)).toThrow('The given array is empty or invalid');
				});

				it('Throws an exception if the first index is invalid', function(){
					expect(swap.bind(null,[1],1,2)).toThrow('The first index is invalid');
				});

				it('Throws an exception if the second index is invalid', function(){
					expect(swap.bind(null,[1],0,2)).toThrow('The second index is invalid');
				});
			});
		});
	});
})();
