function uniteUnique(arr) {

	let arreyString = [];
	let result = [];

	for (let i = 0; i < arguments.length; i++) {
		arreyString.push(...arguments[i]);
	}

	//console.log(arreyString)


	for (let i = 0; i < arreyString.length; i++) {
		
		if (result.indexOf(arreyString[i]) === -1) {
			result.push(arreyString[i])
		}
	}

	console.log(result)

}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // should return [1, 2, 3, 5, 4, 6, 7, 8].