# animation_calculator
this is the map, I going to build JS calculator using adobe animation

I created this from scratch 

until now i finished adding and multiplay but their syntax of substrict and dividing not working on my mind yet
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

(0) - (-number) = + 

``` javascript
numbers = [];
number = 0
for (var i = 0; i < numbers.length; i++) {  
  numbers[0] = numbers[0] * -1;
  str = "-" + numberber[0];
  numberber[0] = Number(str);
  number -= numbers[i]; // becuase 0 - any thing = -anything  but I'm thinking
}
```
