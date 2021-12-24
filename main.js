canvas = document.getElementById(MyCanavas);
ctx = canvas.getContext("2D");

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "Blue";
ctx.linWidth = 2;
ctx.arc(250,210,40,0,2*Math.PI)
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "Black";
ctx.linWidth = 2;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "Red"
ctx.linWidth = 2;
ctx.arc(450,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginpath();
ctx.strokeStyle = "Yellow";
ctx.linWidth = 2;
ctx.arc(300,250,40,0,2*Math.PI)
ctx.stroke()

ctx.beginpath();
ctx.strokeStyle = "Green";
ctx.linWidth = 2;
ctx.arc(400,250,40,0,2*Math.PI)
ctx.stroke()