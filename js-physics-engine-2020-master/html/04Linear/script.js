const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myLine = new LinearFunction(-0.5,300);

let A = new Point(100,100,20,"aqua",true);
let B = new Point(500,200,40,"lime",true);


function animate(){
  context.clearRect(0,0,width,height)
  A.draw(context);
  B.draw(context);

  myLine.slope = (B.y - A.y)/(B.x - A.x);
  // y = m*x + b
  // y - m*x = b
  // b = y - m*x

  myLine.intercept = B.y - myLine.slope*B.x;

  myLine.draw(context,"red");
}

setInterval(animate,10)
