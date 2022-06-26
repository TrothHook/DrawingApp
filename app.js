const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let radius = 30;
let isPressed = false;

canvas.addEventListener("mousedown", ()=>{
   isPressed = true;
});

canvas.addEventListener("mouseup", () =>{
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed){
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
    }
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill();
}


// function draw will be called every frame
// function draw(){

//     // clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawCircle(x++, y);

//     requestAnimationFrame(draw);

// }

// draw();