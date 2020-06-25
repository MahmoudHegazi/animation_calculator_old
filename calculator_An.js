var result = this.screen;



const mybject = {
	"numbers" : [],
	"ope" : "",
	"result": 0,
	add : () => {
		//function add
		let inputs = mybject.numbers;
		var result = 0;
        var i;
		for (i = 0; i < inputs.length; i++) {
          result += inputs[i];
        }
		mybject.result = result;
	},
	subs : () => {
		// function substrict
		mybject.result = Number(mybject.numbers[0]) - Number(mybject.numbers[1]);
	},
	divid : () => {
		// function dived
		mybject.result = Number(mybject.numbers[0]) / Number(mybject.numbers[1]);
	},
	multi : () => {
		// function multiplay
		mybject.result = Number(mybject.numbers[0]) * Number(mybject.numbers[1]);
	},
	mod : () => {
		// modulu function
		mybject.result = Number(mybject.numbers[0]) % Number(mybject.numbers[1]);
	},
	ce : () => {
		// clean function empty list list = []
		mybject.numbers = [];
	},
	ae : () => {
		// remove last index of array array.pop();
		mybject.numbers.pop();
	},
	insert : function(x){
		mybject.numbers.push();
	}
	
}

// start

this.num_.addEventListener("click", num0.bind(this));
function num0() {

}

this.num_.addEventListener("click", num1.bind(this));
function num1() {
	if () {

	}
}
this.num_.addEventListener("click", num2.bind(this));
function num2() {
	if () {

	}
}
this.num_.addEventListener("click", num3.bind(this));
function num3() {
	if () {

	}
}
this.num_.addEventListener("click", num4.bind(this));
function num4() {
	if () {

	}
}
this.num_.addEventListener("click", num5.bind(this));
function num5() {
	if () {

	}
}

this.num_.addEventListener("click", num6.bind(this));
function num6() {
	if () {

	}
}
this.num_.addEventListener("click", num7.bind(this));
function num7() {
	if () {

	}
}
this.num_.addEventListener("click", num8.bind(this));
function num8() {
	if () {

	}
}
this.num_.addEventListener("click", num9.bind(this));
function num9() {
	if () {

	}
}
