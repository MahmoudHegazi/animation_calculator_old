# animation_calculator

main code = calculator_An.js
animation_version_fulll = calculator.fla
you have to download adobe animation to check this code 
sorry it's professional work 
this is the map, I going to build JS calculator using adobe animation

I created this from scratch 

until now i finished adding and multiplay but the syntax of substrict and dividing not working on my mind yet
can't get it with rule like this
found 1 soultion and will test it

``` javascript
numbers = [];
number = 0
for (var i = 0; i < numbers.length; i++) {  
  number -= numbers[i]; // becuase 0 - any thing = -anything  but I'm thinking
}
```


طيب النتيجة 
(Solved)
(0) - (-number) = + 

``` javascript
numbers = [];
number = 0
for (var i = 0; i < numbers.length; i++) {  
  //numbers[0] = numbers[0] * -1;
  str = "-" + numbers[0];
  numbers[0] = Number(str);
  number -= numbers[i]; // becuase 0 - any thing = -anything  but I'm thinking
}
```

## Subtraction problem solved

```javascript

var cars = [5, 3, 1];
var text = "";
var hend = 0;
var i;
for (i = 0; i < cars.length; i++) {
  if (i == 0) {
    cars[i] = -cars[i];
  }
  hend -= cars[i];
}
alert(hend);
```

## last problem Divide (solved)

the problem I didn't try to change the i value 
```javascript
array = [6, 2, 1];
index = array[0];
// for (var i=1) 
```

لو بدانا 
i = 1 وخلينا 
index = array[0];
عشان ميبقاش صفر او اي رقم تاني فيهاخد اول قيمة في القائمة

كدا بقي 6 و مدام بدانا في 1 يبقي قيمة 
array[i] = 2
6 / 2 = 3
واللي بعده 
index = 3 / 1 = 3
```javascript
index = ?
/= 
```

```javascript
var cars = [12, 2, 3];
var index = cars[0];
for (i = 1; i < cars.length; i++) {
  
  index /= cars[i];
  
}


alert(index);
```

