console.log('yar! js working.')

// Your code here!
var op=prompt("Would you like to add, subtract, multiply, or divide?");

var num1=parseInt(prompt("Give me your first number!"));

var num2=parseInt(prompt("May I have your second number please?"));

if(op == "add"){
	var sum = num1+num2;
	alert("The answer is "+sum)
}

if(op == "subtract"){
	var sum = num1-num2;
	alert("The answer is "+sum)
}

if(op == "multiply"){
	
	alert("The answer is "+ (num1*num2))
}

if(op == "divide"){
	var sum = num1/num2;
	alert("The answer is "+sum)
}

