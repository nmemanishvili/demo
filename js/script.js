// let firstname = "nino";

// function UpperCase(text) {
//     upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// UpperCase(firstname);

// let someText = "h1";

// console.log(someText);

// let myElement = document.getElementById("js").innerHTML;
// let myAddress = document.getElementById("myAd").innerHTML;

// UpperCase(myAddress);
// UpperCase(myElement);

// console.log(myAddress);

// document.write("<h3> let me see </h3>");
// document.write("<input>");

// document.write('<form>');
// var element = document.write('<input type="text" placeholder="first name" class="green">');
// document.write('<input type="text" placeholder="last name" class="red">');
// document.write('<input type="number" placeholder="age" class="green">');
// document.write('<input type="text" placeholder="address" class="red">');
// document.write('<input type="password" placeholder="password" class="green">');
// document.write('<input type="password" placeholder="confirm password" class="red">');
// document.write('<button>click me</button>');
// document.write('<form>');

// element.style.backgroundColor = "red";



// function myFun() {
//    document.getElementById('box').style.backgroundColor = "silver";
//    var firstName = document.getElementById('firstName');
//    firstName.value = 'Nino';
//    var lastName = document.getElementById('lastName');
//    lastName.value = ('Memanishvili');
//    var age = document.getElementById('age');
//    age.value = 34;
//    var address = document.getElementById('address');
//    address.value = 'Tbilisi, Georgia';
//    var password = document.getElementById('password');
//    password.value = '******';
//    var confPass = document.getElementById('confPass');
//    confPass.value = '******';
//    var par = document.getElementById('par');
//    par.innerHTML += 'Stop Putin! ';
//    par.innerHTML += 'Slava Ukraini! ';
//    console.log(par.innerHTML);
// }

// function area() {
//    var num1 = document.getElementById('width').value;
//    var num2 = document.getElementById('heigh').value;
//    var area = document.getElementById('area');
//    area.value = num1*num2;
// }
 
// function perimeter() {
//    var num1 = document.getElementById('width').value;
//    var num2 = document.getElementById('heigh').value;
//    var perimeter = document.getElementById('perimeter');
//    perimeter.value = Number(num1)*2+Number(num2)*2;
// }

var display = document.getElementById('display');

function math(arg) {
   display.value = eval(arg);
}

function nul (arg) {
   display.value = " ";
}

function calc(arg){
   arg == "="? math(display.value): display.value += arg;
}

// var myPressed = document.getElementById('pressed');

// function myKey() {
//    alert("you've pressed a button");
// }



