var num1 = 0;
var num2 = 0;
var oper;

$("#equally").click(function (){
	num2 = $("#inp1").get(0).value;
	if(oper == "+"){
		$("#inp1").get(0).value = +num1 + +num2;
	}
	if(oper == "-"){
		$("#inp1").get(0).value = +num1 - +num2;
	}
	if(oper == "*"){
		$("#inp1").get(0).value = +num1 * +num2;
	}
	if(oper == "/"){
		if(num2 == 0){
			$("#inp1").get(0).value = "Деление на ноль не возможно";
		}
		else{
			$("#inp1").get(0).value = +num1/+num2;
		}
	}
});

$(".num").click(function(){
	$("#inp1").get(0).value += $(this).val();
});

$("#point").click(function(){
	if ($("#inp1").get(0).value.indexOf(".") === -1){
		$("#inp1").get(0).value += $(this).val();
	}
})

$(".oper").click(function(){
	num1 = $("#inp1").get(0).value;
	console.log(num1);
	$("#inp1").val("");
	oper = $(this).val();
})

$("#reset").click(function (){
	num1 = 0;
	num2 = 0;
	$("#inp1").val("");
})

$("#plsmns").click(function (){
	$("#inp1").get(0).value = parseFloat($("#inp1").get(0).value) * -1;
})