//Тест по HTML написан на JQuery
var arrTest = [$("input[name=link]"), $("input[name=list]"), $("input[name=ifb]"), $("input[name=table]"), $("input[name=form]")];

var resultBlock = $("<div><\div>");
	resultBlock.attr("id", "res");
	resultBlock.attr("style", "padding: 15px;border: 2px solid #F70505;border-radius: 4px");


function validate(){ //Проверка на полноту заполнения теста.
	for(var a = 0; a < arrTest.length; a++){
		var j = 0;
		for(var i = 0; i < arrTest[a].length; i++){
				if(!arrTest[a].eq(i).prop("checked")){
						j++;
						if (j == arrTest[i].length){
							 return false;
						}			
			 }
		}
	}
	return true;
}

function alertResult(res){ //Функция вывода результата на экран
	$("#test").after(resultBlock);
	if(res == 1){
			resultBlock.html("Вы набрали:" + " " + res + " " + "балл");
		}
		if(res > 1 && res < 5){
			resultBlock.html("Вы набрали:" + " " + res + " " + "балла");	
		}
		if(res == 0 || res >= 5){
			resultBlock.html("Вы набрали:" + " " + res + " " + "баллов");
		}
}

function checkTest(){ //Функция проверки теста
	var res = 0;
		if($("input[name=link]").eq(0).prop("checked")){
			res++;
		}
		if($("input[name=list]").eq(2).prop("checked")){
			res++;
		}
		if($("input[name=ifb]").eq(3).prop("checked")){
			res++;
		}
		var tmpRes = 0;
		for (i = 0; i < $("input[name=table]").length; i++){
			if($("input[name=table]").eq(i).prop("checked")){
				if(i == 1 || i == 2){
					tmpRes += 0.5;
				}else {
					tmpRes -= 0.5;
				}
			}
		}
		for (i = 0; i < $("input[name=form]").length; i++){
			if($("input[name=form]").eq(i).prop("checked")){
				if(i == 0 || i == 1){
					tmpRes += 0.5;
				}else {
					tmpRes -= 0.5;
				}
			}
		}
		if (tmpRes > 0){
			res += tmpRes;
		}
        return res;
}

//Обработчик нажатия клавиши
$("#result").click(function(){
		$("#test").after(resultBlock);
		//$("#res").slideDown(3000);
		if (validate()) {
            alertResult(checkTest());
        } else {
            resultBlock.html("Необходимо ответить на все вопросы");
        }
})