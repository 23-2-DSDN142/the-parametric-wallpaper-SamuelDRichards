//your parameter variables go here!
let howmanyfish = 2 //adds more or less fish based on the number you put in, goes 1-5
let howmanyevilfish = 3 //adds more or less evil fish based on the number you put in, goes 1-5
let x = 80 //adjust the postion of the fish on the x - axis
let y = 10 //adjust the postion of the fish on the y - axis
let face_be_happy = 1 //if you make the number 1 or larger it makes the fish happy, anything less than 1 makes the fish sad, ONLY WORKS ON NOT EVIL FISH
let fin = 1 //this turns the main body fin on or off, 1 or anything more than 1 is on, anything less is off

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GLIDE_WALLPAPER);

  pWallpaper.resolution( FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  angleMode(DEGREES)

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  background(226, 208, 239);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  HellaEvilFish(howmanyevilfish, x, y, fin)
  hellafish(howmanyfish, x, y, face_be_happy, fin)


}







function hellafish(howmanyfish){
  if(howmanyfish === 1){
       fishnotevil(x, y, face_be_happy, fin)
      }
      if(howmanyfish === 2){
        fishnotevil(x, y, face_be_happy, fin)
        fishnotevil((x+10), y+37, face_be_happy, fin)
       }
       if(howmanyfish === 3){
        fishnotevil(x, y, face_be_happy, fin)
        fishnotevil((x+10), y+37, face_be_happy, fin)
        fishnotevil((x+20), y+72, face_be_happy, fin)
       }
       if(howmanyfish === 4){
        fishnotevil(x, y, face_be_happy, fin)
        fishnotevil((x+10), y+37, face_be_happy, fin)
        fishnotevil((x+20), y+72, face_be_happy, fin)
        fishnotevil((x+30), y+107, face_be_happy, fin)
       }
       if(howmanyfish === 5){
        fishnotevil(x, y, face_be_happy, fin)
        fishnotevil((x+10), y+37, face_be_happy, fin)
        fishnotevil((x+20), y+72, face_be_happy, fin)
        fishnotevil((x+30), y+107, face_be_happy, fin)
        fishnotevil((x+40), y+143, face_be_happy, fin)
       }

    }






  
function HellaEvilFish(howmanyevilfish) {
    if(howmanyevilfish === 1){
      evilfish(x+10, y+37, face_be_happy, fin)
     }
     if(howmanyevilfish === 2){
      evilfish(x+10, y+37, face_be_happy, fin)
      evilfish(x+20, y+72, face_be_happy, fin)
      }
      if(howmanyevilfish === 3){
        evilfish(x+10, y+37, face_be_happy, fin)
        evilfish(x+20, y+72, face_be_happy, fin)
        evilfish(x+30, y+107, face_be_happy, fin)
      }
      if(howmanyevilfish === 4){
        evilfish(x+10, y+37, face_be_happy)
        evilfish(x+20, y+72, face_be_happy)
        evilfish(x+30, y+107, face_be_happy)
        evilfish(x+40, y+143, face_be_happy)
      }
      if(howmanyevilfish === 5){
        evilfish(x+10, y+37, face_be_happy)
        evilfish(x+20, y+72, face_be_happy)
        evilfish(x+30, y+107, face_be_happy)
        evilfish(x+40, y+143, face_be_happy)
      }
  
}







function fishnotevil(x, y, face_be_happy, fin) { //the totally definitely not evil fish



  strokeWeight(0) //I dont want most of the fish to have an outline

  fill(54, 79, 110) // setting the fill to that nice blue

  triangle(x - 70, y + 4, x - 90, y - 20, x - 87, y - 6) //top tail fin

  triangle(x - 70, y + 3, x - 87, y - 7, x - 90, y + 8) //bottom tail fin

  arc(x, y, 150, 60, 0, 180, CHORD) //body


  triangle(x - 50, y + .5, x - 44, y - 6, x - 42, y + .5) //read top body fin

  fill(0) //black fill for the eye
  circle(x + 60, y + 5, 5) //eye

  fill(54, 79, 110) //reseting the fill to the blue

  stroke(229, 216, 189) //setting th stroke color to a off white

  strokeWeight(1.5) //so that you can see the fin, mouth, and body line

  arc(x, y + 13, 98, 10, 0, 180) //body line

  if (face_be_happy >= 1) {
    arc(x + 60, y + 13, 10, 10, 100, 170) //happy mouth
  } else {
    arc(x + 63, y + 13, 10, 5, 180, 350) //sad mouth
  }



  if (fin >= 1) { //if statment to make the fin show up or not 
    strokeWeight(1)

    triangle(x + 50, y + 10, x + 48, y + 15, x + 30, y + 18) //body fin
  }



  //everything below is the hat


  noFill() //no fill for the brim of the hat
  strokeWeight(2) //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165) //pink color for the hat 

  arc(x + 57, y - 7, 15, 15, 35, 140) //brim of the hat

  fill(255, 72, 165) //pink color for the hat 

  triangle(x + 55, y - .5, x + 57, y - 8, x + 59, y - .5) //tringle of the hat

}





function evilfish(x, y, fin) { //evil fish but with a sense of style so he keeps the pink hat
  strokeWeight(0) //didnt want any outlines on the bulk of the fish

  fill(0, 18, 41) //setting the fill to a nice dark blue

  triangle(x - 70, y + 4, x - 90, y - 20, x - 87, y - 6) //top tail fin

  triangle(x - 70, y + 3, x - 87, y - 7, x - 90, y + 8) //bottom tail fin

  arc(x, y, 150, 60, 0, 180, CHORD) //body


  triangle(x - 50, y + .5, x - 44, y - 6, x - 42, y + .5) //read top body fin


  fill(172, 11, 11) //fill to red for all the red accents so he is evil

  circle(x + 60, y + 5, 5) //eye


  stroke(172, 11, 11) //red so he is evil

  strokeWeight(1.5) //to make the fangs a lil thicker so they work better in grid mode

  triangle(x + 62, y + 11, x + 66, y + 13, x + 64.5, y + 20) //fang 1 
  triangle(x + 59, y + 11, x + 62, y + 12, x + 59, y + 20) //fang 2

  noFill() //setting it to no fill so that the arcs dont have a fill

  strokeWeight(3) //making the arcs earier to see in grid mode

  arc(x, y + 13, 98, 10, 0, 180) //body line

  arc(x + 58, y + 16, 17, 10, 260, 345) //mouth 

  fill(0, 18, 41) //reseting the fill

  if (fin >= 1) { //making the fin adjustable 
    strokeWeight(2)

    triangle(x + 50, y + 10, x + 48, y + 15, x + 30, y + 18) //body fin
  }



  //everything below is the hat



  noFill() //no fill for the brim of the hat
  strokeWeight(2) //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165) //pink color for the hat 

  arc(x + 57, y - 7, 15, 15, 35, 140) //brim of the hat

  fill(255, 72, 165) //pink color for the hat 

  triangle(x + 55, y - .5, x + 57, y - 8, x + 59, y - .5) //tringle of the hat
}