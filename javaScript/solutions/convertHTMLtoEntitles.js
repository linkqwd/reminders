function convertHTML(str) {
	const objVal = {
		'&': '&amp;',
		'<': '&​lt;',
		'>': '&​gt;',
		'"': '&​quot;',
		'\'': '&​apos;'
	}

	let result = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i] in objVal) {
			result += objVal[str[i]];
		} else {
			result += str[i];
		}
	}

	console.log(result)
	return result
}


convertHTML("Dolce & Gabbana") //should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") //should return Schindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.
convertHTML("abc") //should return abc.