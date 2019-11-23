
var loadImage;
let img1, img2, img3, img4, img5, img6, img7, img8, img9;
var capture;

function setup() {
    var canvas = createCanvas(innerWidth, innerHeight);
    canvas.parent('sketch-div');

    img1 = loadImage('new/1.png');
    img2 = loadImage('new/2.png');
    img3 = loadImage('new/3.png');
    img4 = loadImage('new/4.png');
    img5 = loadImage('new/5.png');
    img6 = loadImage('new/6.png');
    img7 = loadImage('new/7.png');
    img8 = loadImage('new/8.png');
    img9 = loadImage('new/9.png');
    
    capture = createCapture(VIDEO);
    capture.size(width, height);
    capture.hide();
    noStroke();
    fill(0);
}


function draw() {
    background(0);
    capture.loadPixels();
    var stepSize = 14;
      for(var y=0; y<capture.height; y+=stepSize){
        for(var x=0; x<capture.width; x+=stepSize){
          var i = y * capture.width + x;
          var darkness = (255 - capture.pixels[i*4])/255;
          var size = stepSize * darkness;
          if(size<=17 && size>=5){
            var ran = random(1,9.9); 
            switch (int(ran)) {
              case 1:
                image(img1, x, y, size, size);
                break;
              case 2:
                image(img2, x, y, size, size);
                break;
              case 3:
                image(img3, x, y, size, size);
                break;
              case 4:
                image(img4, x, y, size, size);
                break;
              case 5:
                image(img5, x, y, size, size);
                break;
              case 6:
                image(img6, x, y, size, size);
                break;
              case 7:
                image(img7, x, y, size, size);
                break;
              case 8:
                image(img8, x, y, size, size);
                break;
              case 9:
                image(img9, x, y, size, size);
                break;
              default:
                break;
            }
          }
        }
      }
      sleep(120);
    }

 function sleep(milliseconds) {
     var start = new Date().getTime();
     for (var i = 0; i < 1e7; i++) {
       if ((new Date().getTime() - start) > milliseconds){
         break;
       }
     }
   }