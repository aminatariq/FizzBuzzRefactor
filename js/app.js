var guess = prompt("Please enter a number between 1 to 100 to start playing the game:"); 

if (guess % 1 != 0) {
			prompt("Please enter a whole number, not a fraction or text");
   		 } else if (guess < 1 || guess > 100) {
    		prompt("Please choose between 1 and 100");
    	} else {
    	}

//Original FizzBuzz code below//

var i;
var fizz;
var buzz;

for (i=0;i<=guess;i++) {
	
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