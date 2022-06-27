const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const radiusValue = document.querySelector(".radius-value");
const colorEl = document.getElementById("color");
const ctx = canvas.getContext("2d");

let radius = 15;
let isPressed = false;
let color = "grey";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e)=>{
   isPressed = true;

   x = e.offsetX;
   y = e.offsetY;
});

canvas.addEventListener("mouseup", () =>{
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
    }
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.linewidth = radius * 2;
    ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
    radius += 5;

    if(radius > 30){
        radius = 30;
    }
    updateSizeOnScreen();
});
decreaseBtn.addEventListener("click", () => {
    radius -= 5;
    if(radius < 5){
        radius = 5;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) =>{
    color = e.target.value;
});

function updateSizeOnScreen(){
    radiusValue.textContent = radius;
}


// function draw will be called every frame
// function draw(){

//     // clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle(x++, y);

//     requestAnimationFrame(draw);

// }

// draw();