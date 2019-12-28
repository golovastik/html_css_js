//для первого задания
var Button_click = document.getElementById('do_it');
Button_click.onclick = function(){
	var myForm = document.getElementById('calc');
	var first_num = myForm.querySelector('[name = "first_num"]');
	var second_num = myForm.querySelector('[name = "second_num"]');
	var result = myForm.querySelector('[name = "result"]');
	var operator = myForm.querySelector('[name = "operator"]');
	switch(operator.value){
		case '+': result.value = Number(first_num.value) + Number(second_num.value); break;
		case '-': result.value = first_num.value - second_num.value; break;
		case '*': result.value = first_num.value * second_num.value; break;
		case '/': result.value = first_num.value / second_num.value; break;
		default: result.value = "input error"; break;
	}
}



//для второго задания
function menu(){
	var MyMenu = document.getElementById('s_menu');
	MyMenu.classList.toggle('show_menu');
	console.log("select menu");
}



//для третьего задания(и четвертое задание, наверное)
var star = document.getElementById('checkboxMain');
var createTree = document.getElementById('christmas_tree');
var hidenButton = document.getElementById('controls');
var leaveTree = document.getElementById('christmas_tree_leave');
star.style.display = "none";
leaveTree.style.display = "none";

createTree.onclick = function(){
	console.log("was click button christmas_tree");	
	//прячем кнопку
	hidenButton.style.display = "none";
	//создаем - что
	var elemButton = document.createElement("input");
	//что создали - куда
	var elemAdd = document.getElementById('buttons');
	//добавляем больше кнопок
	var row = 1;
	var checker = 1;
	//самвя главная(сразу со стилем)
	star.style.display = "";
	star.style.marginTop = "30px";
	for(var len = 6; len > 0; len--){
		//что 
		var elemDiv = document.createElement("div");
		for(var i = row; i > 0; i--){
			var elemInput = document.createElement("input");
			elemInput.type = "checkbox";
			if(checker === 1){
				elemInput.id = "checkbox1";
				checker++;
			}
			else if(checker == 2){
				elemInput.id = "checkbox2";
				checker--;
			}
			//добавление тега в тег
			elemDiv.appendChild(elemInput);
		}
		//добавление в документ
		elemAdd.appendChild(elemDiv);
		console.log(elemAdd);
		row++;
	}
	christmas_tree_leave.style.display = "";
	//отследим нажатие удаления "дерева"
	//ВОТ ТУТ 4 задание
	leaveTree.onclick = function(){
		console.log();
		var allDiv = document.getElementById('buttons')
		allDiv.querySelectorAll('div').forEach(div => div.remove());
		star.style.display = "none";
		leaveTree.style.display = "none";
		hidenButton.style.display = "";
	}
}
//ho-ho-ho tree джингабелс
function clickFire(obj) {
	//1 - берем все кнопики с ID buttons
	var allButtons = document.getElementById('buttons');
	//2 - из 1-го находим теги input
	var items = allButtons.getElementsByTagName("input");
	var len = items.length;
	console.log(len);
	//за основу цикла взято кол-во кнопок
	for (var i = 0; i < len; i += 1) {
		//3 - если тип нашего input-а checkbox то окей, выполняем 
		if (items.item(i).type === "checkbox") {    
			// если ГЛАВНАЯ кнопка не была отмечена  
			if (obj.checked) {
				items.item(i).checked = true;
				console.log("++");
			} 
			//если отмеччена(или во всех других случаях)
			else {
				console.log("--");
				items.item(i).checked = false;
			}       
		}
	}
}

//пятое задание
//1 - берем все элементы
var slides = document.querySelectorAll('#slides .slide');
//2 - для установки первого индкса коллекции(выше)
var currentSlide = 0;
//3 - ссылка на таймер и функция в качестве параметра
var slideInterval = setInterval(nextSlide,2000);//таймер на 2 секунды

function nextSlide(){
	//переименование класса по индексу
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    //переименование слайда с начальным индексом
    slides[currentSlide].className = 'slide showing';
}

