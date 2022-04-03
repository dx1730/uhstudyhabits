let image;
let canvas;

// preload image
function preload(){
  image = loadImage('images/dream.jpg');
}


function setup() {
  canvas = createCanvas(image.width, image.height); // set canvas size to image size

  // center the image by deriving x and y coordinates
  let x_coor = (windowWidth - image.width)/2;
  let y_coor = (windowHeight - image.height)/2;
  canvas.position(x_coor, y_coor);

  /* access every 5 pixels in the image to achieve blurring effect*/
  for(let col = 0; col < image.width; col+=5){
    for(let row = 0; row < image.height; row+=5){
      let c = image.get(col,row); //access the color information of the pixel
      stroke(color(c));
      strokeWeight(random(3, 10)); //randomize stroke weight to get different sizes of dots
      point(col,row);
    }
  }
}

