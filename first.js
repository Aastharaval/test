console.log("hello js!");
fullName ="Astha Raval";
console.log(fullName);

//varibles declration

let age = 20;
   age = 45;
   console.log(age);

   const student = {
    name:"astha",
    isPass:true,
    cgpa:8.2,
    age:20,

   };
   student["age"]=student["age"]+1;
   console.log(student["age"]);

   // exmples operators
   let a, b, c;
a = 2;
b = 3;
c = a + b;
console.log("The value of c is " + c + ".");

console.log(10 * 2);

c=a*b;

console.log(c);
c=a/b;
console.log(c);
c=a%b;
console.log(c);
c=a-b;
console.log(c);
c+=a+b;
console.log(c);

// example1
  
a=400;
if
   ( a<=500){
    price=100;
    console.log(price);
   }
   
   else if
   (a>=100) {
   price=300;
}
else {
    price=200;
}
//2
let r=21;
const e=3.1414;
area=(e*r*r);
console.log(area);

//3
let R=5;
let H=2;
Area= (2*e*R*H)+(2*e*R*R);
console.log(Area);

var p = document.getElementById("abc").innerText;
console.log(p);

let str = ` 
	This is a 
	multiline 
	string`; 

console.log(str);

let str1 = 'Java'; 

let str2 = 'Script'; 

let result = str1 + str2; 

console.log("Concatenated String: " + result);

// function that returns product of two numbers 
function product(a, b) {
	return a * b;
}

// Calling product() function
let rest = product.call(this, 2, 5);

console.log(rest);

// convert paisa into rupees

p=1250;
rupees=p/100;
console.log(rupees);

// convert doller to rupees

D=73
rupee=D*83;
console.log(rupee);

let s=20; b=30;c;
c=Math.sqrt((s*s)+(b*b));
console.log(c);

console.log(new Date());

// electricity bill
  
function abc()
{
let current=document.getElementById("num").value;


 let amount=0;
for( let i=0;i<current;i++){
   
   if (i<500){
      amount+=10;
   }
   else if(i<1000){
      amount+=20;
   }
   else if(i>1500){
      amount+=25;
   }
}
document.getElementById("a1").innerHTML=amount;
   
}  
//pattern
let n=5;
let string="";
for(let i=1;i<=n;i++){
   for(let j=0;j<i;j++){
      string+="*";
   }
   string+="<br>";
}
console.log(string);
document.getElementById("a2").innerHTML=string;
//vote eligibility

function vote(){
   
  let ages=document.getElementById("agee").value; 
   
      if(ages<18){
         document.getElementById("a3").innerHTML="not";
         
      
      }
      else {
         document.getElementById("a3").innerHTML="yes";

      }

   }
   //sum of 10 numbers

   const number= 10;
   var sum=0; i=1;
   while(i<=number){
      sum+=i;
      i++;
   }
   document.getElementById("a4").innerHTML=sum;
   //even numbers

    i=0;
   let tt="";
   for(i=55;i<=70;i++){
      if(i%2==0){
      tt += i + " ";
      }
   }
   document.getElementById("a5").innerHTML=tt;
   //odd vaues
  
   p=-17;
  
   let odd="";
   while(p<55){
      if(p%2!=0){
         odd+=p + " ";
         
      }
      p++;
   }
   document.getElementById("a6").innerHTML=odd;
//mximum value


text="";
let A=10,B=20,C=45;
{
    if(A>B)
    {
        if(A>C)
        {
            text+="A is Maximum";
        }
        else
        {
            text+="C is Maximum";
        }
    }
    else
    {
        if(B>C)
        {
            text+="B is Maximum";
        }
        else
        {
            text+="C is Maximum";
        }
    }
}
document.getElementById("a7").innerHTML=text;
text+="<br>";
document.getElementById("a7").innerHTML=text;

//pattern
n=5;string=" ";
for( i=0;i<n;i++){
   for(let k=0;k<n-i;k++){
      string+="#";
   }
   string+="<br>";
}
document.getElementById("a8").innerHTML=string;
//pattern

n=5;string=" ";
for(i=1;i<=n;i++){
   for(j=1;j<=i;j++){
      string+= i;
   }
   string+= "<br>";
}
document.getElementById("a9").innerHTML=string;
//pattern
n=4;string="";
count=1;
for(i=1;i<=n;i++){
for(j=1;j<=i;j++){
   string+=count;
   count++;

}
string+="<br>";
   
}
document.getElementById("a10").innerHTML=string;
//pattern
n=5;string=" ";
for(i=1;i<=n;i++){
   for(j=1;j<=n;j++){
      if(j<=i-1){
         string+=" ";
      }
      else{
         string+="* ";
      }

   }
   string+="<br>";
}
document.getElementById("a11").innerHTML=string;

//avg marks 

const studentmarks=new Array(50,64,40,88,90,75,95);
let avg=0;
let summarks=0;
for(let i=0;i<studentmarks.length;i++)
{
    summarks+=studentmarks[i];
}
avg=summarks/studentmarks.length;
document.getElementById("a12").innerHTML=avg;
// pattern
let txt;
txt=" ";
for(i=0;i<5;i++){
   for(j=0;j<5;j++){
      if(i<=j){
         txt+="*";
      }
      else{
         txt+="&nbsp;&nbsp;";
      }
   }
   txt+="<br>";
}
document.getElementById("a13").innerHTML=txt;
// student info

const student_name=[
   "arati",
   "arav",
   "john",
   "adam"
];
const student_ids=[
   1234,
   4567,
   6789,
   2367
];
const student_pass=[
   "abc@arati",
   "xyz@rav",
   "wyz@john",
   "url@adam"

];
var x;
function verify_stu(){
   var stu_name=document.getElementById("a14").value;
   var stu_password=document.getElementById("a14").value;
   for(x=0;x<=student_name.length;x++){
      if(student_name[x]==stu_name && student_pass[x]==stu_password){
         document.getElementById("a14").innerHTML=student_name[x];
      }
   }
}

let array=[
   {
      "sname": "meet",
      "sid": 1,
      "password": "abc"
   },
   {
      "sname": "meeqt1",
      "sid": 2,
      "password": "abcd"
   }
]
let temp="";
for(let x in array)
{
   temp += array[x].sname+" "+array[x].sid+" "+array[x].password+"<br>";
}

document.getElementById("a15").innerHTML=temp;



   

   
    