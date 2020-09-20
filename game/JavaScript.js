// -- Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
var timer = 0;
var caught = false;
var fps = 10;

document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 544;

// -- Background Image
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "image/ocean.jpg";

// -- Star Image
var starReady = false;
var starImage = new Image();
starImage.onload = function () {
    starReady = true;
};
starImage.src = "image/stars.png";

var star = {};
var starCaught = 0;

// -- When star is caught, reset
var reset = function () {
    star.x = 40 + (Math.random() * (canvas.width - 70));
    do {
        star.y = 40 + (Math.random() * (canvas.height - 70));
    }
    while (star.y < 100)
};

// -- Mousedown event
window.addEventListener("touchstart", onTouchStart,false);
function onTouchStart(e){
    if (e.button != 0) return;

    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (starBody(star, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
        render();
    }

};

window.addEventListener("mousedown", onMouseDown, false);
function onMouseDown(e) {

    if (e.button != 0) return;

    mouseXinCanvas = e.clientX;
    mouseYinCanvas = e.clientY;

    if (starBody(star, mouseXinCanvas, mouseYinCanvas)) {
        caught = true;
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
    }
    if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
        location.reload();
    }
    if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
        render();
    }
};

// -- Star's body define
function starBody(star, x, y) {

    if (x <= (star.x + 80)
        && star.x <= (x + 80)
        && y <= (star.y + 80)
        && star.y <= (y + 80)
    ) {
        fps = fps + 5;
        starCaught++;
        return true;
    }
    return false;
};

// -- Reset Score
function ResetScore(x, y) {

    if (x > (390)
        && x < (545)
        && y > (35)
        && y < (88)
    ) {
        return true;
    }
    return false;
};

// -- Reset Speed
function ResetSpeed(x, y) {
    if (x > (562)
        && x < (713)
        && y > (35)
        && y < (88)
    ) {
        fps = 10;
        return true;
    }
    return false;
};

// -- Draw everything
var render = function () {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (bgReady) {
        ctx.drawImage(bgImage, 0, 100);
    }
    if (starReady) {
        ctx.drawImage(starImage, star.x, star.y);
    }
    if (caught == true) {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 100);
        }
        caught = false;
    }

   
    //      C O L O R -- A N D -- P O S I T I O N		
  

    //      S C O R E -- A N D -- T I T L E
   

    // -- Title and Score
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.font = "bold 35px Ink Free Regular";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Can You Catch Stars?", 5, 15);
    ctx.font = "bold 30px Terminal";
    ctx.fillStyle = "rgb(51, 51, 51)"
    ctx.fillText("Score: " + starCaught, 10, 65);

   
    //      B U T T O N S -- A N D -- T E X T
 

    // -- Reset Score and Speed button
    // Button Collor
    ctx.fillStyle = "rgb(112, 200, 160)";

    // -- Buttons position
    // (greater to right, position y, greater to right, thickness)
    ctx.fillRect(385, 30, 150, 50); // Reset Score Button
    ctx.fillRect(555, 30, 150, 50); // Reset Speed Button

    // -- Buttons Text Collor and Font Style
    ctx.fillStyle = "rgb(51, 51, 51)";
    ctx.font = "bold 25px Terminal";

    // -- Buttons Text Position
    ctx.fillText("Reset Score", 400, 45);
    ctx.fillText("Reset Speed", 565, 45);

 

};

// -- The main game loop
var main = function () {
    render();
    // -- Request to do this again ASAP
    requestAnimationFrame(main);
};

// -- Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
reset();
main();