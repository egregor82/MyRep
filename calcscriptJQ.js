var num1 = 0;
var num2 = 0;
var oper;


$("#equally").click(function (){
	num2 = $("#inp1").val();
	if(oper == "+"){
		$("#inp1").val(+num1 + +num2);
	}
	if(oper == "-"){
		$("#inp1").val(+num1 - +num2);
	}
	if(oper == "*"){
		$("#inp1").val(+num1 * +num2);
	}
	if(oper == "/"){
		if(num2 == 0){
			$("#inp1").val("Деление на ноль не возможно");
		}
		else{
			$("#inp1").val(+num1/+num2);
		}
	}
});

$(".num").click(function(){
	$("#inp1").val($("#inp1").val() + $(this).val());
});

$("#point").click(function(){
	if ($("#inp1").val().indexOf(".") === -1){
		$("#inp1").val($("#inp1").val() + $(this).val());
	}
})

$(".oper").click(function(){
	num1 = $("#inp1").val();
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
	$("#inp1").val(parseFloat($("#inp1").val()) * -1);
})