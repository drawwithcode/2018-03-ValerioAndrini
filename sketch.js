function preload() {
  // put preload code here
}
var colorList1 = ['#4e0212',
                 '#92011a',
                 '#ce9759',
                 '#f9e0b7'];

var colorList2 = ['#244660',
                 '#55cbdb',
                 '#ddebc9',
                 '#94b99d'];
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  // put drawing code here
  background(70);
  //forma di partenza quad(25,10,25,25,40,30,40,15);
  //prima griglia
  for (var x = 25; x < width; x += 40) {
    for (var y = 30; y < height; y += 35) {
      noStroke();

      //colori
      if (mouseX > windowWidth/2) {
        fill(color(random(colorList1)));
      } else {
        fill(color(random(colorList2)));
      }

      //forma
      quad(x, y, x, y + 15, x + 15, y + 25, x + 15, y + 10);
    }
  }
  //seconda griglia
  for (var x = 45; x < width; x += 40) {
    for (var y = 55; y < height; y += 35) {
      noStroke();

      //colori
      if (mouseX > windowWidth/2) {
        fill(color(random(colorList1)));
      } else {
        fill(color(random(colorList2)));
      }

      //forma
      quad(x, y, x, y + -15, x + 15, y - 25, x + 15, y - 10);
    }
  }
  //   for(var x = 50; x < width; x += 50){
  //     for(var y = 50; y < height; y += 50){
  //       noStroke();
  //       fill(255);
  //       ellipse(x, y, random()*15);
  //     }
  //   }
}
