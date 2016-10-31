var link = document.getElementsByName("link");
var list = document.getElementsByName("list");
var ifb = document.getElementsByName("ifb");
var table = document.getElementsByName("table");
var form = document.getElementsByName("form");
//var res = 0;

/*function resreset(){
	var res = 0;
	console.log(res);
}*/

/*function linkcheck(){
	//resreset();
	for(var i = 0; i < link.length; i++){
			if(link[i].checked){
				console.log(i);
				if (link[i].value == "a"){
					console.log(i);
					res += 1;
				}
			}
	}
}*/

/*function testcheck(){
	for(var i = 0; i < link.length; i++){
			if(link[i].checked){
				continue;
			} else{
				alert ("Необходимо ответить на все вопросы")
			}
		}
}*/

document.getElementById("result").onclick = function(){
		var res = 0;
		//linkcheck();
		//testcheck();
		if(link[0].checked){
			res += 1;
		}
		if(list[2].checked){
			res += 1;
		}
		if(ifb[3].checked){
			res += 1;
		}
		if(table[0].checked || table[3].checked){
			res += 0;
		}else if(table[1].checked && table[2].checked){
			res += 1;
		}
		if(form[2].checked || form[3].checked){
			res += 0;
		}else if(form[0].checked && form[1].checked){
			res += 1;
		}
		if(res == 1){
			alert("Вы набрали:" + " " + res + " " + "балл");
		}
		if(res > 1 && res < 5){
			alert("Вы набрали:" + " " + res + " " + "балла");	
		}
		if(res == 0 || res >= 5){
			alert("Вы набрали:" + " " + res + " " + "баллов");
		}
}