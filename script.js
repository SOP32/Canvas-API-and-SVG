/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Hello INFSCI 2560!');

// Create canvas elements
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

//Put your drawing code here
ctx.fillStyle = "#BF0A30";
//ctx.fillRect(0, 150, 498, 300)
ctx.fillRect(0, 0, 498, 20)
ctx.fillRect(0, 40, 498, 20)
ctx.fillRect(0, 80, 498, 20)
ctx.fillRect(0, 120, 498, 20)
ctx.fillRect(0, 160, 498, 20)
ctx.fillRect(0, 200, 498, 20)
ctx.fillRect(0, 240, 498, 20)

ctx.fillStyle = "#002868";
//ctx.fillRect(0, 0, 150, 300)
ctx.fillRect(0, 0, 180, 140)

ctx.fillStyle = "white";
         
for(var i=0;i<180; i=i+30) {
  for(var j=0;j<140; j= j+30) {
        ctx.beginPath();
         ctx.moveTo(8.0 + i, 9.0 + j);
         ctx.lineTo(9.5 + i, 13.0 + j);
         ctx.lineTo(13.5 + i, 13.0 + j);
         ctx.lineTo(10.0 + i, 15.5 + j);
         ctx.lineTo(11.5 + i, 19.5 + j);
         ctx.lineTo(8.0 + i, 17.0 + j);
         ctx.lineTo(4.5 + i, 19.5 + j);
         ctx.lineTo(6.0 + i, 15.5 + j);
         ctx.lineTo(2.2 + i, 13.0 + j);
         ctx.lineTo(6.5 + i, 13.0 + j);
         ctx.lineTo(8.0 + i, 9.0 + j);
         ctx.closePath();
         ctx.fill();
}
}

for(var i=15;i<150; i=i+30) {
  for(var j=15;j<140; j= j+30) {
         ctx.beginPath();
         ctx.moveTo(8.0 + i, 9.0 + j);
         ctx.lineTo(9.5 + i, 13.0 + j);
         ctx.lineTo(13.5 + i, 13.0 + j);
         ctx.lineTo(10.0 + i, 15.5 + j);
         ctx.lineTo(11.5 + i, 19.5 + j);
         ctx.lineTo(8.0 + i, 17.0 + j);
         ctx.lineTo(4.5 + i, 19.5 + j);
         ctx.lineTo(6.0 + i, 15.5 + j);
         ctx.lineTo(2.2 + i, 13.0 + j);
         ctx.lineTo(6.5 + i, 13.0 + j);
         ctx.lineTo(8.0 + i, 9.0 + j);
         ctx.closePath();
         ctx.fill();
}
}

