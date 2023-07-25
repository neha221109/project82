canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(300,200,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(425,200,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(550,200,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(362.5,250,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(487.5,250,50,0,2*Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=5;
ctx.rect(180,60,500,350)
ctx.stroke();

lastmousex=0;
lastmousey=0;
var mousevent=""
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    if(mousevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle="green";
        ctx.lineWidth=5;
        ctx.arc(mousex,mousey,35,0,2*Math.PI)
        
        ctx.stroke();
    }
    
    lastmousex=mousex;
    lastmousey=mousey;
    
}
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousevent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mousevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mousevent="mouseleave"
}