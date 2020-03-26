const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let colors = ["Darkred", "Green", "Violet", "Black", "purple", "yellow", "Aqua", "White"];

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}

function spawnCircle(){
  let myCircle = new Point(getRandomNumber(width), getRandomNumber(height), getRandomNumber(50), colors[getRandomNumber(colors.length)]);
  myCircle.draw();
}

function repeat(){
  spawnCircle();
}

setInterval(repeat,10);