var arr = [];
var btnSend = document.getElementById('btnSend');
btnSend.onclick = function btnSend(obj){
	arr = ["Не верный ввод полей: "];
	checkValid('user_name');
	checkValid('user_surname');
	checkValid('e_addres');
	checkValid('phone');
	checkValid('theme');
	checkValid('mess');
	if(arr.length > 1){
		alert(arr);
	}
	else{
		alert("Ваша форма отправлена");
	}
}

function yes_no(idVal){
	var usingElement = document.getElementById(idVal);
	var regNum;
	var checkReg;
	if(idVal.id === 'phone'){
		regVal = /(\+375|80)(29|33|44)\d{7}/;
		//// /\d{2}\d{3}-\d{2}-\d{2}/;
		checkReg = regVal.test(idVal.value);
		console.log(checkReg, idVal.value);
		if(checkReg){
			return 'valid';
		}
		else{
			arr[arr.length] = "\nтелефон";
			return 'not_valid';

		}
	}
	else if(idVal.id === 'e_addres'){
		regVal = /^([A-Za-z0-9_\-\.]+\@)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		checkReg = regVal.test(idVal.value);
		console.log(checkReg, idVal.value);
		if(checkReg){
			return 'valid';
		}
		else{
			arr[arr.length] = "\nэлектронный адрес";
			return 'not_valid';
		}
	}
	else{
		if(idVal.classList !== 'valid'){
			if(idVal != null && idVal.value.length < 3){
				if(idVal.id === 'user_name'){
					arr[arr.length] = "\nимя";
				}
				if(idVal.id === 'user_surname'){
					arr[arr.length] = "\nфамилия";
				}
				return 'not_valid';
			}
			else{
				return 'valid';
			}
		}
		else{
			return 'valid';
		}	
	}ы
}

function vaal(idVal, action){
	if(action !== 'valid' ){
		idVal.classList.remove('valid');
		idVal.classList.add('not_valid');
	}
	if(action === 'valid'){
		idVal.classList.remove('not_valid');
		idVal.classList.add('valid');
	}
}

function checkTheme(elem){
	if(elem.value !== 'v0'){
		console.log(elem.value);
		elem.classList.remove('not_valid');
		elem.classList.add('valid');
	}
	else{
		arr[arr.length] = "\nне выбрана тема";
		elem.classList.remove('valid');
		elem.classList.add('not_valid');
	}
}
function checkMessage(elem){
	if(elem.value.length <= 0){
		arr[arr.length] = "\nполе сообщения пусто";
		elem.classList.remove('valid');
		elem.classList.add('not_valid');
	}
	else{
		elem.classList.remove('not_valid');
		elem.classList.add('valid');
	}
}

function checkValid(idVal){
	var usingElement = document.getElementById(idVal);
	switch(usingElement.id){
		case 'user_name':
		vaal(usingElement,yes_no(usingElement));
		break;
		case 'user_surname':
		vaal(usingElement,yes_no(usingElement));
		break;
		case 'e_addres':
		vaal(usingElement,yes_no(usingElement));
		break;
		case 'phone':
		vaal(usingElement,yes_no(usingElement));
		break;
		case 'theme':
		checkTheme(usingElement);
		break;
		case 'mess':
		checkMessage(usingElement);
		break;
	}
}