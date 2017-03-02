function pow(a, b) {
	var result = a;

		for (var i = 0; i < b; i++) {
		
			result*=a;
		}

	return result;
}

var a = prompt("Вкажіть перше число:", '');
var b = prompt("Вкажіть друге число:", '');

console.log("Результат:", pow(a, b) );

