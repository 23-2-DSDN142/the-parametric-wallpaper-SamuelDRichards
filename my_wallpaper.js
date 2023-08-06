//your parameter variables go here!
let evil = 1 //if you make the number 1 or larger it keeps the fish normal, anything less than 1 makes the fish evil
let x = 10 //adjust the postion of the fish on the x - axis
let y = 10 //adjust the postion of the fish on the y - axis
let face_be_happy = 1 //if you make the number 1 or larger it makes the fish happy, anything less than 1 makes the fish sad, ONLY WORKS ON NORMAL FISH
let fin = 1 //this turns the main body fin on or off, 1 or anything more than 1 is on, anything less is off

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  //angleMode(DEGREES)

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(226, 208, 239); 
}
  
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fish(1,10,50,0,0)
  fish(0,100,180,0)
 
}



function fish(evil,x,y,face_be_happy,fin){ //if statment that decides on what fish to use
  if( evil < 1){
    evilfish(x,y,face_be_happy,fin)
  }
  else{
    fishnotevil(x,y,face_be_happy,fin)
  }
}







function fishnotevil(x,y,face_be_happy,fin) { //the not evil fish
  


  strokeWeight(0)

  fill(54, 79, 110)

  triangle(x-70, y+4, x-90, y-20, x-87, y-6) //top tail fin

  triangle(x-70, y+3, x-87, y-7, x-90, y+8) //bottom tail fin

  arc( x, y, 150, 60, 0, 180, CHORD) //body


  triangle(x-50, y+.5, x-44, y-6, x-42, y+.5) //read top body fin

  fill(0)
  circle(x+60, y+5, 5) //eye

  fill(54, 79, 110)   //reseting the fill

  stroke(229, 216, 189)

  strokeWeight(1.5)

  arc(x, y+13, 98, 10, 0, 180) //body line

  if(face_be_happy >= 1){
    arc(x+60, y+13, 10, 10, 100, 170)  //happy mouth
  }
  else{
    arc(x+63, y+13, 10 ,5 , 180 ,350) //sad mouth
  }

 

 if(fin >= 1){
  strokeWeight(1)

  triangle(x+50, y+10, x+48, y+15, x+30, y+18) //body fin
 }
  


//everything below is the hat

  fill(255,72,165)   //pink color for the hat 

  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 

  arc(x+57, y-7, 15, 15, 35, 140) //brim of the hat

  triangle(x+55, y-.5, x+57, y-8, x+59, y-.5) //tringle of the hat

  fill(226, 208, 239) //background color 
  strokeWeight(0)
  arc(x+57, y-8.1, 15, 15, 35, 140) //arc to help shape the hat

  fill(255,72,165)  //pink color for the hat 
  strokeWeight(.3)
  stroke(255,72,165) //pink color for the hat 
  

  triangle(x+55, y-.5, x+57, y-8, x+59, y-.5) ////tringle of the hat

  
}





function evilfish(x,y,fin) { //evil fish but with a sense of style so he keeps the pink hat
  strokeWeight(0)

  fill(0, 18, 41)

  triangle(x-70, y+4, x-90, y-20, x-87, y-6) //top tail fin

  triangle(x-70, y+3, x-87, y-7, x-90, y+8) //bottom tail fin

  arc( x, y, 150, 60, 0, 180, CHORD) //body


  triangle(x-50, y+.5, x-44, y-6, x-42, y+.5) //read top body fin


  fill(172, 11, 11)

 circle(x+60, y+5, 5) //eye

  triangle(x+62, y+11, x+66, y+13, x+64.5, y+20) //fang 1 
  triangle(x+59, y+11, x+62, y+12, x+59, y+20) //fang 2

 noFill()

  stroke(172, 11, 11)

  strokeWeight(1.5)

  arc(x, y+13, 98, 10, 0, 180) //body line

  arc(x+58, y+16, 17, 10, 260, 345)  //mouth 

  fill(0, 18, 41)   //reseting the fill

  if(fin >= 1){
    strokeWeight(1)
  
    triangle(x+50, y+10, x+48, y+15, x+30, y+18) //body fin
   }
    

  



//everything below is the hat

fill(255,72,165)   //pink color for the hat 

strokeWeight(.3)
stroke(255,72,165) //pink color for the hat 

arc(x+57, y-7, 15, 15, 35, 140) //brim of the hat

triangle(x+55, y-.5, x+57, y-8, x+59, y-.5) //tringle of the hat

fill(226, 208, 239) //background color 
strokeWeight(0)
arc(x+57, y-8.1, 15, 15, 35, 140) //arc to help shape the hat

fill(255,72,165)  //pink color for the hat 
strokeWeight(.3)
stroke(255,72,165) //pink color for the hat 


triangle(x+55, y-.5, x+57, y-8, x+59, y-.5) ////tringle of the hat
}