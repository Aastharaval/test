//length of array
var fruits=["kiwi","Apple","banana","mango"];
let size= fruits.length;
document.getElementById("lengt").innerHTML = size;

//tostring
var fruits=["kiwi","Apple","banana","mango"];
document.getElementById("to").innerHTML = fruits.toString();

//fruits at 
var fruits=["kiwi","Apple","banana","mango"];
var fruit = fruits.at(2);

document.getElementById("at").innerHTML = fruit;
//joints
document.getElementById("joint").innerHTML = fruits.join("+");
//pop
document.getElementById("pop1").innerHTML = fruits;
fruits.pop();
document.getElementById("pop2").innerHTML = fruits;


//push
fruits.push("mango");
document.getElementById("push").innerHTML=fruits;

//shift
fruits.shift();
document.getElementById("shift").innerHTML=fruits;
//order
fruits[0]="pineapple";
document.getElementById("order").innerHTML=fruits;

//String Methods

let txt="abcdefghijklmnopqrstu";
document.getElementById("sleng").innerHTML=txt.length;
//at
document.getElementById("sat").innerHTML = txt.charAt(0);
//slice
let part = txt.slice(7,13);
document.getElementById("sp").innerHTML = part;
//uppercase

document.getElementById("up").innerHTML =
  txt.toUpperCase();

  //lowercase
  document.getElementById("lo").innerHTML =
  txt.toLowerCase();
  //concat
  let txt1='hello';
  let txt2='wrld';
  let txt3 = txt1.concat(" ",txt2);
document.getElementById("con").innerHTML = txt3;
//trim
let text1= '        hello  world  ';

let text2 = text1.trim();
document.getElementById("trim").innerHTML = text2;

