/*document.getElementById("btn1").addEventListener("click",function text(){
    let display1=document.getElementById("p1").style.display;
    if(display1=='block'){
        document.getElementById("p1").style.display="none";

    }
    else{
        document.getElementById("p1").style.display="block";
    }
});*/

function openCar(evt, carName) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(carName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //<button class="tablinks" onclick="openCar(event, 'audicars')" id="defaultOpen">Audicars</button>

  //document.getElementById("defaultOpen").click();


  // exercise

  function alert(){
    alert("heyy..welcomee");
  }
  window.onload= alert();


  