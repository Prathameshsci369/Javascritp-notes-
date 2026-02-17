//DOm and js  defines
    //Html elements as objects 
    //properties of full HTML elements
    // Method to access all HTML elemets Events for all html elements.

//Overview of sytax
/*
Every instruction or line od code your write in js is called statements. statements 
when executed are read from top to bottom. Each statement must end with semicolon.
        alert("staement");
When namng somethig in js such as variable we use camel case
    var myVariable

Reserved keywords on js
    abstract, boolean , break, byte, case, catch , char, class continue debugger
    default , delete , do , double, else, enum
    ,extend false

commenting in js
// tow forward slashes represent a single line comment
anything written after the // and the end of the line will not be executed by js
/* a forward slash and a start represent a block comments this needs to be cloased
using 
oneline javascript editors
js fiddle , codepen, jsbin


*/

//javascript demonstration
var btn = document.querySelector("#mybtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.body;

var monday = ["ECO323", "IFS201", "MTH101", "PHY101"];
var tuesday = ["ECO323", "IFS201", "MTH101", "PHY101"];
var wednesday = ["ECO323", "IFS201", "MTH101", "PHY101"];
var thursday = ["ECO323", "IFS201", "MTH101", "PHY101"];
var friday = ["Here are not classes on friday", "Enjoy your day off"];



//WHEN  hover oer button change color
function setHoverColor(){
    btn.style.background = "#f00";

}

function setNormalColor(){
    btn.style.background = "white";
}

btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimeTable);


function printTimeTable(){

    if(userInput.value =="Monday"){
        for (var i=0;i<monday.length;i++){

            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(monday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    if(userInput.value == "Tuesday"){
        for(var i = 0;i<tuesday.length;i++){

            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(tuesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    if(userInput.value == "Wednesday"){
        for(var i = 0;i<wednesday.length;i++){

            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(wednesday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    if(userInput.value == "Thursday"){
        for(var i = 0;i<thursday.length;i++){

            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(thursday[i]);
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
        }
    }

    if(userInput.value == "Friday"){
        for(var i = 0;i<friday.length;i++){

            var paraText = document.createElement("p");
            var paraNode = document.createTextNode(friday[i]);
            var img = document.createElement("img");
            img.src = "meme.png";
            paraText.appendChild(paraNode);
            container.appendChild(paraText);
            paraText.style.cssText="font-size: 24px;"
            body.appendChild(img);
        }
    }
}