//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let sx = 180 //let you adjust the shape of the mouth
  let sy = 0 //let you adjust the shape of the mouth
  let hx = 50
  let hy = 200
  face(sx,sy,hx,hy)

  
}

function face(sx,sy,hx,hy) {

  strokeWeight(1.5);
  stroke(162, 0, 255);
  fill(244, 120, 53);

  ellipse(hx, hy, 60, 90); //head

  line(hx-12, hy-36, hx-7, hy-26); //left brow

  line(hx+12, hy-36, hx+5, hy-26); //right brow

  ellipse(hx-13, hy-25, 5, 5); //left eye

  ellipse(hx+11, hy-25, 5, 5); //right eye

  arc(hx, hy+15, 20, 60, sy, sx); //mouth
}
