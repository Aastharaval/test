function alerrt(){
    window.alert("heyyy... welcome");
}


//document.getElementById("screen").innerHTML = window.innerWidth;
    //3 array
const arr = [11,45,67,85,23,54,245];
function sortArray (a,b){
    return a-b;
}

console.log(arr.sort(sortArray));

//short string
var str = "LDHBCGTEUDHAS";
let arrStr = new Array();
for(let i = 0; i<str.length; i++){
    arrStr.push(str[i]);
}

console.log(arrStr.sort());

//frequency count

function freq(){
    let countf = 0;
    let word = document.getElementById("user-inp").value;
    console.log(word);
    console.log(typeof(word));
    for(let i =0; i<word.length; i++)
    {
        if(word[i]==='A'|| word[i]=='a'|| word[i]=='5'|| word[i]=='6'|| word[i]=='k'||word[i]=='J'||word[i]=='Q')
        {
            countf++;
        }
    }
    console.log(countf);
    document.getElementById("countt").innerHTML=countf;
}   

//

function stringCapital()
{
    let str="shinydays";
    let text="";
    for(let i=0;i<str.length;i++)
    {
    if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
    {
        let temp=str.charCodeAt(i)-32;
        text += String.fromCharCode(temp);
    }
    else{
        text += String.fromCharCode(str.charCodeAt(i));
    }
    }
    console.log(text);
}
stringCapital();










