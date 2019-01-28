function whatIsInAName(collection, source) {

	var arr = [];

	// Необходимо проверить каждый объект в массиве collection чтобы найти soruce
	collection.forEach(function (item) {
		console.log(item) // каждый объект массива collection

		// Флаг по которому объект будет добавлен в массив с результатом
		let flag = true;

		// Перебор объекта по которому нужно найти совпадения, может состоять более чем из одной пары ключ+значение
		for (let key in source) {
			console.log(key + ': ' + source[key]) // каждая пара ключ+значение объекта source

			// Флаг тру, поскольку хотя бы раз нужно выполнить проверку, если проверка не проходит - нет ни одного совпадения, флаг = фолс и дальше проверка не будет запускаться
			if (key in item && flag) {

				// Проверить, чтобы значения совпадали
				flag = (source[key] === item[key]) ? true : false

			} else {
				flag = false
			}
		}

		console.log(flag)

		if (flag) arr.push(item)

		console.log('========= new iteration ==========')
	});

	console.log(arr)
	return arr;
}

// whatIsInAName(
// 	[
// 		{ first: "Romeo", last: "Montague" },
// 		{ first: "Mercutio", last: null },
// 		{ first: "Tybalt", last: "Capulet" }
// 	],
// 	{ last: "Capulet" }
// );
// should return 	[{ first: "Tybalt", last: "Capulet" }]

whatIsInAName(
	[
		{ "apple": 1, "bat": 2 },
		{ "apple": 1 },
		{ "apple": 1, "bat": 2, "cookie": 2 },
		{ "bat": 2 }
	],
	{ "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]