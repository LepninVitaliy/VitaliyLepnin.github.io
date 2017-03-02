
var names = [];

for (var i = 0; i < 5; i++) {
	var name = prompt("Введіть ім'я:", "");
	names.unshift(name);
}

console.log('names:', names);

var yourName = prompt("Вкажіть своє ім'я:", "");

console.log('yourName:', yourName);

for (var i = 0; i < names.length; i++) {
	var result = yourName == names[i];
}

console.log('result:', result);

if (result) {
    alert( yourName + ", ви вдало ввійшли!");
} 
else {
    alert("Не вірне ім'я");
}