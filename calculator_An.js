var result = this.screen;



const mybject = {
	"numbers" : [],
	"ope" : "",
	"result": 0,
	add : () => {
		//function add
		mybject.result = Number(mybject.numbers[0]) + Number(mybject.numbers[1]);	
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
	
}

