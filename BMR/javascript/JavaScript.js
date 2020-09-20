var BMR = 0;
var age = 0;
var weight1 = 0;
var height1 = 0;


var gender = document.getElementById("gender");
var energy = 0;

var metric = document.getElementById("metric");

var level1 = document.getElementById("level1");
var level2 = document.getElementById("level2");
var level3 = document.getElementById("level3");
var level4 = document.getElementById("level4");
var level5 = document.getElementById("level5");

function ImperialCal() {
   
    age = document.getElementById("age").value;
    weight1 = document.getElementById("pounds").value;
    height1 = document.getElementById("inches").value;
    
   
    

    (gender.value == 1) ? (BMR = 66 + (6.2 * (weight1)) + (12.7 * height1) - (6.76 * age)) : (BMR = 655 + (4.35 * weight1) + (4.7 * height1) - (4.7 * age));
    document.getElementById("result1").innerHTML = "Your BMR calulated by Imperial is  " + BMR.toFixed(2);


}



function Metric() {
    var weight2 = 0;
    var height2 = 0;
    age = document.getElementById("age").value;
    weight1 = document.getElementById("pounds").value;
    height1 = document.getElementById("inches").value;
    
    totalWeight = weight1 * 2.20462262;
    totalHeight = height1 * 0.393700787;
   

   

    (gender.value == 1) ? (BMR = 66.5 + (13.75 * totalWeight) + (5.003 * totalHeight) - (6.755 * age)) : (BMR = 655 + (9.563 * totalWeight) + (1.850 * totalHeight) - (4.676 * age));
    document.getElementById("result1").innerHTML = "Your BMR calulated by Metric is  " + BMR.toFixed(2);


}




function setUp() {
    (metric.checked) ? Metric() : ImperialCal();
    

    // energy

    if (level1.checked || level2.checked) {
        energy = BMR * 1.53;
    }
    else if (level3.checked || level4.checked) {
        energy = BMR * 1.76;
    }
    else if (level5.checked) {
        energy = BMR * 2.25;
    }


    document.getElementById("energy").innerHTML = "Your daily energy needs is    " + energy.toFixed(2)  + " cal";
  }



var Button = document.getElementById("submit");
if (Button.addEventListener) {
   Button.addEventListener("click",setUp, false);
} else if (submitButton.attachEvent) {
  Button.attachEvent("onclick",setUp);
}
