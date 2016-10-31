var inp = document.getElementById("inp1");
var num = document.getElementsByClassName("num");
var operClass = document.getElementsByClassName("oper");
var num1 = 0;
var num2 = 0;
var oper;

window.onload = function(){
	for (var i = 0; i < num.length; i++){
		num[i].onclick = function (){
			inp.value += this.value;
		}
	}
	for (var j = 0; j < operClass.length; j++){
		operClass[j].onclick = function(){
			num1 = inp.value;
			inp.value = "";
			oper = this.value;
		}
	}
}

document.getElementById("equally").onclick = calc;

function calc (){
	num2 = inp.value;
	if(oper == "+"){
		inp.value = +num1 + +num2;
	}
	if(oper == "-"){
		inp.value = +num1 - +num2;
	}
	if(oper == "*"){
		inp.value = +num1 * +num2;
	}
	if(oper == "/"){
		if(num2 == 0){
			inp.value = "Деление на ноль не возможно";
		}
		else{
			inp.value = +num1/+num2;
		}
	}
}

document.getElementById("reset").onclick = function (){
	num1 = 0;
	num2 = 0;
	inp.value = "";
}

document.getElementById("plsmns").onclick = function (){
	inp.value = parseFloat(inp.value) * -1;
}