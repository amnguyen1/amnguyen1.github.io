var daysOfWeek = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];

var foodOrder = ["Fish", "Meat", "Beef", "Shrimp", "Vegetable", "Tofu",
    "Desert", "Cake", "Meat", "Meat", "Fish", "Beef", "Beef",
    "Vegetable", "Shrimp", "Shrimp", "Fish", "Meat", "Beef", "Tofu",
    "Beef", "Fish", "Beef", "Meat", "Beef", "Meat", "Fish",
    "Tofu", "Desert", "Fish", "Vegetable"
]
var Option = ["Take-away", "Take-away", "Take-away", "Take-away", "Eat-in", "Eat-in",
    "Eat-in", "Eat-in", "Eat-in", "Eat-in", "Eat-in", "Take-away", "Take-away",
    "Take-away", "Take-away", "Take-away", "Take-away", "Take-away", "Take-away", "Take-away",
    "Take-away", "Take-away", "Eat-in", "Eat-in", "Eat-in", "Eat-in", "Eat-in", 
    "Eat-in", "Eat-in", "Take-away","Eat-in"]

var names = ["(Smith)", "(Jane)", "(Peter)", "(Paul)", "(Jones)", "(Chong)",
    "(Alec)", "(Mike)", "(Jackson)", "(Michael)", "(Kim)", "(Tong)", "(David)",
    "(Joseph)", "(Samuel)", "(Neto)", "(Christopher)", "(Hong)", "(Peace)", "(Daniel)",
    "(Jacob)", "(Christine)", "(Yin)", "(Feng)", "(Julian)", "(Bube)", "(Kate)",
    "(Meghan)", "(Tim)", "(Brown)", "(Fisher)"


]






function addDay() {
    for (var i = 0; i < 7; i++) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];


    }
}


function date() {
    var paragraph = "";
    for (var i = 1; i <= 31; i++) {
        var eachCell = document.getElementById("06-"+i);
        paragraph = eachCell.getElementsByTagName("p");
        paragraph[0].innerHTML = i;
    }
}

function food() {
    var space = "";
    for (var i = 0; i <31; i++) {
        var date = i + 1;
        var eachCell = document.getElementById("06-" + date)
        space = eachCell.getElementsByTagName("p");
        switch (foodOrder[i]) {
            case "Fish":
                space[1].innerHTML = "Take-away -";
                break;
            case "Meat":
                space[1].innerHTML = "Take-away -";
                break;
            case "Beef":
                space[1].innerHTML = "Take-away -";
                break;
            case "Shrimp":
                space[1].innerHTML = "Take-away -";
                break;
            default:
                space[1].innerHTML = "Eat-in ";
                break;
        }

        space[1].innerHTML += foodOrder[i];
        space[2].innerHTML += names[i];
    }
}
function run(){
    date();
    addDay();
    food();
}

if (window.addEventListener) {
    window.addEventListener("load", run(), false);

}
else if (window.atatachEvent) {
    window.attachEvent("onload", run())
}