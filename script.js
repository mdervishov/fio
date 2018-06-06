var width=parseInt(prompt("Введите ширину прямоугольника"));
var height=parseInt(prompt("Введите высоту прямоугольника"));

var s=width*height;
alert('площадь состовляет ' + s + ' м2');




var summ = null;
var summerror = null;
alert("Отгадайте загадки.");
  var secret1 = prompt("Какое ключевое слово в JavaScript объявляет переменную?");
  if (secret1 == "var" || secret1 == "Var" || secret1 == "VAR") {
     alert("Верно!");
     summ++
  }
  else {
    alert("Ответ не верен.");
    summerror++
  }
  var secret2 = prompt("Какие существуют формы записи операторов?");
  if (secret2 == "префиксная" || secret2 == "постфиксная" || secret2 == "инфиксная" || secret2 == "Префиксная" || secret2 == "Постфиксная" || secret2 == "Инфиксная") {
     alert("Да, Верно!");
     summ++
  }
  else {
    alert("Не угадали.");
    summerror++
  }
  var secret3 = prompt("Какие бывают операторы?");
  if (secret3 == "декремент" || secret3 == "инкремент" || secret3 == "Декремент" || secret3 == "Инкремент") {
    alert("Правильно!");
    summ++
  }
  else {
    alert("Нет, не правильно.");
    summerror++
  }

  var secret4 = prompt("Какой язык мы учим?");
  if (secret4 == "JavaScript" || secret4 == "javascript") {
    alert("Правильно!");
    summ++
  }
  else {
    alert("Нет, не правильно.");
    summerror++
  }
  var secret4 = prompt("Кто создал JavaScript?");
  if (secret4 == "netscape" || secret4 == "Netscape") {
    alert("Правильно!");
    summ++
  }
  else {
    alert("Нет, не правильно.");
    summerror++
  }
  	  alert("Вы ответили на 5ть вопросов!!!");
      alert("Сделано задач верно: " + summ + ". Неправильных ответов :" + summerror);


var a=parseInt(prompt("Введите цыфру 1"));
var b=parseInt(prompt("Введите цыфру 2"));
var s=a+b;
alert('сумма составляет ' + s +'');

var message="Hello World!!!";
alert(message);
var message="Hello World\nприкол";
alert(message);
var average = 10+12/2;
alert (average);
var str="10";
alert(str+5);
var name="wasja";
alert ("Hello, "+name+"!");
var some_number = 105;
var result = (some_number & 1) == 0;
alert (result);

// var some_number = 105;
// var result = (some_number & 1) == 0;
// alert (result ? "Number even" : "Number is odd");

 
// var number, summ=0;
// do
// {
//     number=parseInt(prompt("Введите число:", 10));
//     summ+=number;
// }
// while(confirm("Продолжим?"))
// alert("Сумма чисел: "+summ);


// var var1=10;
// var var2=5;
// if (var2 != 0) {
//     var result=var1/var2;
//     alert("Результат деления: "+result);
// }
// else {
//     alert("Деление на 0 невозможно!");
// }

// var dohod=parseInt(prompt("Введите ваш доход:", 500));
// var nalog=0;
// if(dohod>180 && dohod<=500) {
//     nalog=dohod*0.01;
// }
// else if(dohod>500 && dohod<=2500) {
//     nalog=dohod*0.02;
// }
// else if(dohod>2500) {
//     nalog=dohod*0.03;
// }
// alert ("Подоходный налог составит "+nalog+" грн");

