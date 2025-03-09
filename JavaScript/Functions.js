add(10, 6);
function add(x, y) {
	console.log(x + y);
}

add(10, 8);
add(10, 7);

function math(a1, a2, num = 1) {
	console.log(a1 * a2 * num);
}

math(10, 20);
math(-10, 10, -1);

function math1(a1, a2, num = 1) {
	return a1 * a2 * num;
}

const result = math1(10, 20);
console.log(result);

function math2(a1, a2, num = 1) {
	return [a1 ** 2, a2 ** 2];
}

const [result1, result2] = math2(10, 20);
console.log(result1, result2);

function removeAllChars(arrayOfStrings, charactersToRemove) {
	const newArray = [];

	if (charactersToRemove.length === 0) {
		return;
	}

	for (const str of arrayOfStrings) {
		let newStr = "";
		for (const char of str) {
			if (charactersToRemove.includes(char)) {
				continue;
			}
			newStr += char;
		}
		newArray.push(newStr);
	}
	return newArray;
}

const result3 = removeAllChars(["hello world", "1234", "i am the best", "yes"], ["e", "2", "t"]);
console.log(result3);