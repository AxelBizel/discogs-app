var canvas, c, w, h;
var image;
var record;
var r = 0, g = 0, b = 0;
canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var image_url = "https://s-media-cache-ak0.pinimg.com/736x/4f/5c/df/4f5cdf00a948aa483e63fd8e9d67c138.jpg";

document.addEventListener("mousedown", function () {
  randcolor();
});

document.addEventListener("DOMContentLoaded", function () {
  
  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  c = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;
  document.body.appendChild(canvas);
  
  record = {
    radius: w/13,
    x:  w/2,
    y:  h/2.3,
    rot: 0
  }
  
  randcolor();
  
  setInterval(function () {
    c.clearRect(0,0,w,h);
    //drawStand();
    drawRecord();
  },15);
  
});

var circle = function (x,y,amount, radius) {
  c.arc(x,y,radius, 0, Math.PI * 2 * amount);
}

var drawRecord = function () {
  c.beginPath();
  image = new Image();
  image.src = image_url;
  var min = image.height;
  if (min > image.width)
      min = image.width;
  record.rot += 1.5;
  c.translate(record.x,record.y);
  c.rotate(record.rot * Math.PI/180);
  c.drawImage(image,image.width/2-min/2, image.height/2-min/2, min, min,-record.radius*1.5/2, -record.radius*1.5/2, record.radius * 1.5, record.radius * 1.5);
  
  c.rotate(-record.rot * Math.PI/180);
  c.translate(-record.x,-record.y);
  
  c.beginPath();
  c.shadowBlur = w/50;
  c.shadowColor = "black";
  c.lineWidth = record.radius -record.radius*1.5/15;
  c.strokeStyle = 'rgb(' + Math.round(r) + ', ' + Math.round(g) + ',' + Math.round(b) + ')';
  circle(record.x,record.y,1, record.radius*1.2);
  c.stroke();
  
  c.beginPath();
  c.shadowBlur = 0;
  c.fillStyle = "#222";
  circle(record.x,record.y,1, w/150);
  c.fill();
    
    //c.rotate(90 * Math.PI/180);
  c.translate(record.x,record.y);
  c.rotate(record.rot * Math.PI/180);
  
  c.shadowBlur = w/30;
  
  c.rotate(90 * Math.PI/180);
  
  c.beginPath();
  c.lineWidth = w/1000;
  circle(0,0,.95,record.radius * 1.5);
  c.stroke();
  
  c.rotate(90 * Math.PI/180);
  
  c.beginPath();
  c.lineWidth = w/1000;
  circle(0,0,.95,record.radius * 1.2);
  c.stroke();
  
  c.rotate(90 * Math.PI/180);
  
  c.beginPath();
  c.lineWidth = w/1000;
  circle(0,0,.95,record.radius * 1);
  c.stroke();
  
  c.rotate(90 * Math.PI/180);
  
  c.beginPath();
  c.lineWidth = w/1000;
  circle(0,0,.95,record.radius * .9);
  c.stroke();
  
  c.beginPath();
  c.lineWidth = w/1000;
  circle(0,0,.95,record.radius * 1.4);
  c.stroke();
  
  c.rotate((-record.rot - 360) * Math.PI/180);
  c.translate(-record.x,-record.y);
}


var randcolor = function () {
  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
}