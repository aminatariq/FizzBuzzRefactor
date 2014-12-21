var input = prompt("Please enter a number between 1 to 100 to start playing the game:");

var i;
var fizz;
var buzz;

for (i=0;i<=input;i++) {
	
	fizz="";
	buzz="";

	if (i%3==0) {
		fizz="Fizz";
	}
	if (i%5==0) {
		buzz="Buzz";
	}
	if (fizz=="Fizz"||buzz=="Buzz") {
		$("body").append(fizz+buzz+"<br>");
	}
	else {
		$("body").append(i+"<br>");
	}

}