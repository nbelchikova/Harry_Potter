//For the DOM
function create_element_message(id, message) {
	const newElement = document.createElement('span'); // создаем новый элемент <span>
	const newContent = document.createTextNode(message);// создаем текстовое содержимое
	newElement.appendChild(newContent); // добавляем текстовое содержимое элементу <span> 
	newElement.classList.add('message');// добавили класс
	const referenceElement = document.getElementById(id); //возвращает объект Element, представляющий из себя элемент, глобальный атрибут id которого соответствует указанной строке
	referenceElement.append(newElement);// вставляет строки с текстом
}

function display_message() {
	const {person, house} = create_message();
	let removeElement = document.querySelectorAll('.message');//Document метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null.
	console.log(removeElement.length);

	if (removeElement.length !== 0) {
		for (let i = 0; i < removeElement.length; i++) {
			removeElement[i].remove();
		}
	}

    create_element_message('person', person);
	create_element_message('house', house);
}

//Generating messages
function createRandomNum(arr) {
	return Math.floor(Math.random() * arr.length);
}

function create_message() {
	const houses = ['Слизерин', 'Гриффиндор', 'Когтевран', 'Пуффендуй'];
    const persons = ['Гарри Поттер', 'Гермиона Грейнджер', 'Рон Уизли', 'Джинни Уизли', 'Драко Малфой', 'Альбус Дамболдор'];
    
	const houseNum = createRandomNum(houses);
	const personNum = createRandomNum(persons);
	

	const house = houses[houseNum];
	const person = persons[personNum];
	
	return {
		person,
        house
	}     
}