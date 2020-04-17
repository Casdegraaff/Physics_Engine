const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A, B, C, D, l, m, S;

A = new Point(200,200,30,"aqua",true);
B = new Point(700,400,20,"lime",true);
C = new Point(300,400,40,"red",true);
D = new Point(400,300,30,"green",true);
S = new Point(0,0,10,"purple", false);
l = new LinearFunction(1,1);
m = new LinearFunction(2,1);

function animate(){
    context.clearRect(0,0,width,height)

    A.draw(context);
    B.draw(context);
    C.draw(context);
    D.draw(context);
    l.draw(context);
    m.draw(context);

    S.x = l.intersection(m).x;
    S.y = l.intersection(m).y;
    
    S.draw(context);

    l.slope = (A.y - B.y)/(A.x - B.x);
    m.slope = (C.y - D.y)/(C.x - D.x);

    l.intercept = A.y - A.x * l.slope;
    m.intercept = C.y - C.x * m.slope;
}

setInterval(animate,10);