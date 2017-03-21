

var header = document.createElement('div');
header.className = "header";
header.innerHTML = '<h3>Тест по програмированию</h3>';
document.body.appendChild(header);

var issues = document.createElement('ol');
issues.className = "issues";
document.body.appendChild(issues);

	var question1 = document.createElement('li');
	question1.innerHTML = ' Вопрос №1';
	question1.className = 'question1'
	issues.appendChild(question1);

	var question2 = document.createElement('li');
	question2.innerHTML = ' Вопрос №2';
	question2.className = 'question2'
	issues.appendChild(question2);

	var question3 = document.createElement('li');
	question3.innerHTML = ' Вопрос №3';
	question3.className = 'question3'
	issues.appendChild(question3);

		var ques1answers = document.createElement('ul');
		ques1answers.className = 'ques1answers';
		question1.appendChild(ques1answers);

		var ques1answer1 = document.createElement('li');
		ques1answers.appendChild(ques1answer1);
		var checkboxQ1A1 = document.createElement('input');
		checkboxQ1A1.name = 'checkboxQ1A1';
		checkboxQ1A1.className = 'checkboxQ1A1';
		checkboxQ1A1.type = 'checkbox';
		checkboxQ1A1.checked;
		var labelQ1A1 = document.createElement('label');
		labelQ1A1.for = 'checkboxQ1A1';
		labelQ1A1.className = 'labelQ1A1';
		labelQ1A1.innerHTML = 'Вариант ответа №1';
		ques1answer1.appendChild(checkboxQ1A1);
		ques1answer1.appendChild(labelQ1A1);

		var ques1answer2 = document.createElement('li');
		ques1answers.appendChild(ques1answer2);
		var checkboxQ1A2 = document.createElement('input');
		checkboxQ1A2.name = 'checkboxQ1A2';
		checkboxQ1A2.className = 'checkboxQ1A2';
		checkboxQ1A2.type = 'checkbox';
		var labelQ1A2 = document.createElement('label');
		labelQ1A2.for = 'checkboxQ1A2';
		labelQ1A2.className = 'labelQ1A2';
		labelQ1A2.innerHTML = 'Вариант ответа №2';
		ques1answer2.appendChild(checkboxQ1A2);
		ques1answer2.appendChild(labelQ1A2);

		var ques1answer3 = document.createElement('li');
		ques1answers.appendChild(ques1answer3);
		var checkboxQ1A3 = document.createElement('input');
		checkboxQ1A3.name = 'checkboxQ1A3';
		checkboxQ1A3.className = 'checkboxQ1A3';
		checkboxQ1A3.type = 'checkbox';
		var labelQ1A3 = document.createElement('label');
		labelQ1A3.for = 'checkboxQ1A3';
		labelQ1A3.className = 'labelQ1A3';
		labelQ1A3.innerHTML = 'Вариант ответа №3';
		ques1answer3.appendChild(checkboxQ1A3);
		ques1answer3.appendChild(labelQ1A3);

			var ques2answers = document.createElement('ul');
			ques2answers.className = 'ques2answers';
			question2.appendChild(ques2answers);

			var ques2answer1 = document.createElement('li');
			ques2answers.appendChild(ques2answer1);
			var checkboxQ2A1 = document.createElement('input');
			checkboxQ2A1.name = 'checkboxQ2A1';
			checkboxQ2A1.className = 'checkboxQ2A1';
			checkboxQ2A1.type = 'checkbox';
			var labelQ2A1 = document.createElement('label');
			labelQ2A1.for = 'checkboxQ2A1';
			labelQ2A1.className = 'labelQ2A1';
			labelQ2A1.innerHTML = 'Вариант ответа №1';
			ques2answer1.appendChild(checkboxQ2A1);
			ques2answer1.appendChild(labelQ2A1);


			var ques2answer2 = document.createElement('li');
			ques2answers.appendChild(ques2answer2);
			var checkboxQ2A2 = document.createElement('input');
			checkboxQ2A2.name = 'checkboxQ2A2';
			checkboxQ2A2.className = 'checkboxQ2A2';
			checkboxQ2A2.type = 'checkbox';
			var labelQ2A2 = document.createElement('label');
			labelQ2A2.for = 'checkboxQ2A2';
			labelQ2A2.className = 'labelQ2A2';
			labelQ2A2.innerHTML = 'Вариант ответа №2';
			ques2answer2.appendChild(checkboxQ2A2);
			ques2answer2.appendChild(labelQ2A2);

			var ques2answer3 = document.createElement('li');
			ques2answers.appendChild(ques2answer3);
			var checkboxQ2A3 = document.createElement('input');
			checkboxQ2A3.name = 'checkboxQ2A3';
			checkboxQ2A3.className = 'checkboxQ2A3';
			checkboxQ2A3.type = 'checkbox';
			var labelQ2A3 = document.createElement('label');
			labelQ2A3.for = 'checkboxQ2A3';
			labelQ2A3.className = 'labelQ2A3';
			labelQ2A3.innerHTML = 'Вариант ответа №3';
			ques2answer3.appendChild(checkboxQ2A3);
			ques2answer3.appendChild(labelQ2A3);


				var ques3answers = document.createElement('ul');
				ques3answers.className = 'ques2answers';
				question3.appendChild(ques3answers);

				var ques3answer1 = document.createElement('li');
				ques3answers.appendChild(ques3answer1);
				var checkboxQ3A1 = document.createElement('input');
				checkboxQ3A1.name = 'checkboxQ3A1';
				checkboxQ3A1.className = 'checkboxQ3A1';
				checkboxQ3A1.type = 'checkbox';
				var labelQ3A1 = document.createElement('label');
				labelQ3A1.for = 'checkboxQ3A1';
				labelQ3A1.className = 'labelQ3A1';
				labelQ3A1.innerHTML = 'Вариант ответа №1';
				ques3answer1.appendChild(checkboxQ3A1);
				ques3answer1.appendChild(labelQ3A1);
				
				var ques3answer2 = document.createElement('li');
				ques3answers.appendChild(ques3answer2);
				var checkboxQ3A2 = document.createElement('input');
				checkboxQ3A2.name = 'checkboxQ3A2';
				checkboxQ3A2.className = 'checkboxQ3A2';
				checkboxQ3A2.type = 'checkbox';
				var labelQ3A2 = document.createElement('label');
				labelQ3A2.for = 'checkboxQ3A2';
				labelQ3A2.className = 'labelQ3A2';
				labelQ3A2.innerHTML = 'Вариант ответа №2';
				ques3answer2.appendChild(checkboxQ3A2);
				ques3answer2.appendChild(labelQ3A2);

				var ques3answer3 = document.createElement('li');
				ques3answers.appendChild(ques3answer3);
				var checkboxQ3A3 = document.createElement('input');
				checkboxQ3A3.name = 'checkboxQ3A3';
				checkboxQ3A3.className = 'checkboxQ3A3';
				checkboxQ3A3.type = 'checkbox';
				var labelQ3A3 = document.createElement('label');
				labelQ3A3.for = 'checkboxQ3A3';
				labelQ3A3.className = 'labelQ3A3';
				labelQ3A3.innerHTML = 'Вариант ответа №3';
				ques3answer3.appendChild(checkboxQ3A3);
				ques3answer3.appendChild(labelQ3A3);

var submit = document.createElement('input');
submit.className = 'button';
submit.type = 'submit';
submit.value = 'Проверить мои результаты';
document.body.appendChild(submit);

