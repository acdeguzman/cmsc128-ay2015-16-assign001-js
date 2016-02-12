'use strict';

function check() {
	/*The following if else statements just set the present div to be used as visible */

	if(document.getElementById('1').checked) {
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div1').style.display = 'block';
	}

	else if(document.getElementById('2').checked) {
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div2').style.display = 'block';
	}

	else if(document.getElementById('3').checked) {
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div4').style.display = 'block') document.getElementById('div4').style.display = 'none';

		document.getElementById('div3').style.display = 'block';
	}

	else if(document.getElementById('4').checked){
		if(document.getElementById('div1').style.display = 'block') document.getElementById('div1').style.display = 'none';
		if(document.getElementById('div2').style.display = 'block') document.getElementById('div2').style.display = 'none';
		if(document.getElementById('div3').style.display = 'block') document.getElementById('div3').style.display = 'none';

		document.getElementById('div4').style.display = 'block';
	}
}

function toNum(word) {
	switch(word) {
		case "one"		: 	return 1;	break;
		case "two"		: 	return 2;	break;
		case "three"	: 	return 3;	break;
		case "four"		: 	return 4;	break;
		case "five"		: 	return 5;	break;
		case "six"		: 	return 6;	break;
		case "seven"	: 	return 7;	break;
		case "eight"	: 	return 8;	break;
		case "nine"		: 	return 9;	break;
		case "ten"		: 	return 10;	break;
		case "eleven"	: 	return 11;	break;    
		case "twelve"	: 	return 12;	break;
		case "thirteen"	: 	return 13;	break;
		case "fourteen"	: 	return 14;	break;
		case "fifteen"	: 	return 15;	break;
		case "sixteen"	: 	return 16;	break;
		case "seventeen": 	return 17;	break;
		case "eighteen"	: 	return 18;	break;
		case "nineteen"	: 	return 19;	break;
		case "twenty"	: 	return 20;	break;
		case "thirty"	: 	return 30;	break;
		case "forty"	: 	return 40;	break;
		case "fifty"	: 	return 50;	break;
		case "sixty"	: 	return 60;	break;
		case "seventy"	: 	return 70;	break;
		case "eighty"	: 	return 80;	break;
		case "ninety"	: 	return 90;	break;
	}
}

function toWord(num, flag, mod) {	//the mod parameter is only for the cases with ten - nineteen
	var string;

	switch(num){
		case 1: if(flag == 0) string = "one ";
				else{
					switch(mod){
						case 0: string = "ten "
								break
						case 1: string = "eleven "
								break;
						case 2: string = "twelve ";
								break;
						case 3: string = "thirteen ";
								break;
						case 4: string = "fourteen ";
								break;
						case 5: string = "fifteen ";
								break;
						case 6: string = "sixteen ";
								break;
						case 7: string = "seventeen ";
								break;
						case 8: string = "eighteen ";
								break;
						case 9: string = "nineteen ";
								break;
					}
				}
				break;

		case 2: if(flag == 0) string = "two ";
				else string = "twenty ";
				break;

		case 3: if(flag == 0) string = "three ";
				else string = "thirty ";
				break;

		case 4: if(flag == 0) string = "four ";
				else string = "forty ";
				break;

		case 5: if(flag == 0) string = "five ";
				else string = "fifty ";
				break;

		case 6: if(flag == 0) string = "six ";
				else string = "sixty ";
				break;

		case 7: if(flag == 0) string = "seven ";
				else string = "seventy ";
				break;

		case 8: if(flag == 0) string = "eight ";
				else string = "eighty ";
				break;

		case 9: if(flag == 0) string = "nine ";
				else string = "ninety ";
				break;
	}

	return string;
}

function divider(number) {	//this function aims to determine the hundreds, tens, and ones digit of the number passed
	var quot, mod, string = "";	//initializes the string to be passed to numToWords function

	quot = parseInt(number / 100);
	mod = number % 100;

	if(quot != 0){
		string += toWord(quot, 0, mod) + "hundred ";	//the second parameter 0 means that the current number is the ones/hundreds digit
	}

	quot = parseInt(mod / 10);
	mod = number % 10;

	if(quot != 0){
		string += toWord(quot, 1, mod);	//the second parameter 1 means that the current number is the tens digit
	}

	if(quot == 1) return string;	//checks if the tens digit is one (special case)
	
	else{
		if(mod != 0) string += toWord(mod, 0, 0);
		return string;
	}
}

function numToWords() {
	var input = parseInt(document.getElementById('input1').value);
	var output = document.getElementById('output1');
	var number, quot, mod, string = "";

	if(input >= 1000000){
		if(input > 1000000){
			output.value = "Input greater than 1000000";
			return;
		}
		else{
			output.value = "one million";
			return;
		}
	}
	
	number = parseInt(input / 1000);
	mod = input % 1000;
	string += divider(number);
	if(string.length != 0) string += "thousand " + divider(mod);

	output.value = string;
}

function wordsToNum(enter, out) {
	var input = document.getElementById(enter).value.split(" ");
	var output = document.getElementById(out);
	var number = 0, temp = 0, flag = 0, flag2 = 0, temp2 = 0;

	for(var i = 0; i < input.length; i++) {
		if(input[i] == "million") {	//if encountered a string "million", the program multiplies the current value stored in temp to 1000000
			temp *= 1000000;
			number += temp;
			temp = 0;
		}
		
		else if(input[i] == "thousand") {	//if encountered a string "thousand", the program multiplies the current value stored in temp to 1000
			temp *= 1000;
			number += temp;
			temp = 0;

			if(flag != 1) {	// if flag == 1 it means that there is a hundreds digits in thousand place
				flag2 = 1;	//when the flag2 have value 1, it means that there is no hundred digit in thousand place
			}
		}

		else if(input[i] == "hundred"){
			if(flag2 == 1) {
				temp *= 100;
				number += temp;
				temp = 0;
			}

			else{
				temp *= 100;
				flag = 1;
			}
		}

		else{
			temp += toNum(input[i]);
		}
	}

	output.value = number+temp;
	return output.value = number+temp;
}

function wordsToCurr(enter, out) {
	var number = wordsToNum(enter, out);
	var output = document.getElementById(out);
	var currency = document.getElementById('input4').value;

	output.value = currency + number;
}

function numDelimited() {
	var number = document.getElementById('input5').value;
	var delimiter = document.getElementById('input6').value;
	var jumps = parseInt(document.getElementById('input7').value);
	var output = document.getElementById('output4');
	var array = [];

	if(parseInt(number) > 1000000) {
		output.value = "Input greater than 1000000";
		return;
	}

	for(var i = 0; i < number.length; i++){
		if(i == number.length - jumps) {
			array.push(delimiter);	//inserts the delimiter based on the inputted jump
		}

		array.push(number[i]);
	}

	output.value = array.join("");
}