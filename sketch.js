var selection = 0;
var canvas;
function setup(){
//Canvas Size for Assignment.
  canvas = createCanvas (594, 841);
  canvas.parent("myBox");

}

function draw(){
//Black background with a tint of transparency.
       if (mouseIsPressed)
            background(235,20);
       else
            background(0,20);
//Initializing functions.
  leaf();
  BackgroundImages();
}


function BackgroundImages(){
    push();
      //random position
          translate(random(100,width-300), random (100,height+300));

      //random rotation
          rotate(random(2*PI));

      //random scale
          scale(random(1.5));

      //Set up variables for the mapped values when mouse is moved
          var ChangeHue = map(mouseX,0,width,0,255);
          var ChangeHue2 = map(mouseY,0,height,0,255);

      //Hopefully the Mouse movement will define the color of the strokes
          stroke(ChangeHue,random(0,255),ChangeHue2);
          strokeWeight(1.7);

      //fill color is dark green with a random transparency range from 0 - 255
          fill(0,random(90,100),0,random(0,255));

      //These selections will enable you to switch between shapes
          if (selection===0) ellipse (300,625,45,45);
          if (selection===1) rect(300,625,40,40);
          if (selection===2) quad(20, 21, 26, 20, 29,23, 20, 26);

          //Pressing these keys will enable you to switch between the shapes stated above.
          if (key === 'd') selection = 0;
          if (key === 'f') selection = 1;
          if (key === 'g') selection = 2;
    pop();
}

function leaf(){
//Leaf 1 ; IMPORTANT: Remember to decrease the scale of every set of leaves
    fill(34,139,34);
 //*ENSURE CAPSLOCK IS OFF*
 //When the key "a" is pressed change color to bright yellow,otherwise, leave it as it is
 if (key === 'a') {
    fill(230,230,81,255);
 } else {
    noStroke();
 }
    push();
    translate(width/2, height*0.5);
    scale(2.8);
    rotate(frameCount);
  //all strokes/outlines should be black
    stroke(0);
  //right curve of leaf
    curve(2, 16, 73, 24, 79, 69, -35, 165);
  //central line
    line(79, 70, 74, 20);
  //left curve of leaf
    curve(40, 65, 73, 24, 79, 69, 245, 175);;
  //vein 1 L
    line(66,45,75,35);
  //vein 2 L
    line(68,57,76,47);
  //vein 3 R
    line(88,45,77,38);
  //vein 4 R
    line(85,55,77,50);
      pop();

//Leaf 2
     fill(84,30,10);
      push();
        translate(width/2, height*0.5);
        scale(2.2);
        rotate(frameCount);
        //all strokes/outlines should be black
        stroke(0);
        //right curve of leaf
        curve(2, 16, 73, 24, 79, 69, -35, 165);
        //central line
        line(79, 70, 74, 20);
        //left curve of leaf
        curve(40, 65, 73, 24, 79, 69, 245, 175);;
        //vein 1 L
          line(66,45,75,35);
        //vein 2 L
          line(68,57,76,47);
        //vein 3 R
          line(88,45,77,38);
        //vein 4 R
          line(85,55,77,50);
      pop();

//Leaf 3
              fill(34,139,34);
           //When the key "a" is pressed change color to bright yellow,otherwise, leave it as it is
          if (key === 'a') {
              fill(243,243,92,255);
          } else {
              noStroke();
          }
          push();
              translate(width/2, height*0.5);
              scale(1.8);
              rotate(frameCount);
              //all strokes/outlines should be blacka
              stroke(0);
              //right curve of leaf
              curve(2, 16, 73, 24, 79, 69, -35, 165);
              //central line
              line(79, 70, 74, 20);
              //left curve of leaf
              curve(40, 65, 73, 24, 79, 69, 245, 175);;
              //vein 1 L
                line(66,45,75,35);
              //vein 2 L
                line(68,57,76,47);
              //vein 3 R
                line(88,45,77,38);
              //vein 4 R
                line(85,55,77,50);
            pop();

//Leaf 4
                  fill(34,139,34);
                    //When the key "s" is pressed change color,otherwise, leave it as it is
                  if (key === 's') {
               fill(137,60,32,255);
                  } else {
               noStroke();
                }
                    push();
                    translate(width/2, height*0.5);
                    scale(1.5);
                    rotate(frameCount);
                    //all strokes/outlines should be black
                    stroke(0);
                    //right curve of leaf
                    curve(2, 16, 73, 24, 79, 69, -35, 165);
                    //central line
                    line(79, 70, 74, 20);
                    //left curve of leaf
                    curve(40, 65, 73, 24, 79, 69, 245, 175);;
                    //vein 1 L
                      line(66,45,75,35);
                    //vein 2 L
                      line(68,57,76,47);
                    //vein 3 R
                      line(88,45,77,38);
                    //vein 4 R
                      line(85,55,77,50);
                        pop();


//Leaf 5
                       fill(84,30,10);
                          push();
                          translate(width/2, height*0.5);
                          scale(1.2);
                          rotate(frameCount);
                          //all strokes/outlines should be black
                          stroke(0);
                          //right curve of leaf
                          curve(2, 16, 73, 24, 79, 69, -35, 165);
                          //central line
                          line(79, 70, 74, 20);
                          //left curve of leaf
                          curve(40, 65, 73, 24, 79, 69, 245, 175);
                          //vein 1 L
                            line(66,45,75,35);
                          //vein 2 L
                            line(68,57,76,47);
                          //vein 3 R
                            line(88,45,77,38);
                          //vein 4 R
                            line(85,55,77,50);
                              pop();

//Leaf 6
                              fill(34,139,34);
                               //When the key "s" is pressed change color,otherwise, leave it as it is
                              if (key === 's') {
                           fill(164,66,30,255);
                              } else {
                           noStroke();}
                                push();
                                translate(width/2, height*0.5);
                                scale(1);
                                rotate(frameCount);
                                //all strokes/outlines should be black
                                stroke(0);
                                //right curve of leaf
                                curve(2, 16, 73, 24, 79, 69, -35, 165);
                                //central line
                                line(79, 70, 74, 20);
                                //left curve of leaf
                                curve(40, 65, 73, 24, 79, 69, 245, 175);;
                                //vein 1 L
                                  line(66,45,75,35);
                                //vein 2 L
                                  line(68,57,76,47);
                                //vein 3 R
                                  line(88,45,77,38);
                                //vein 4 R
                                  line(85,55,77,50);
                                    pop();

//Leaf 7
                      fill(84,30,10);
                    //When the key "a" is pressed change color to bright yellow,otherwise, leave it as it is
                         if (key === 'a') {
                      fill(230,230,81,255);
                         } else {
                      noStroke();
                       }
                    push();
                      translate(width/2, height*0.5);
                      scale(0.6);
                      rotate(frameCount);
                      //all strokes/outlines should be black
                      stroke(0);
                      //Increase the weight of the outline
                      strokeWeight(2);
                      //right curve of leaf
                      curve(2, 16, 73, 24, 79, 69, -35, 165);
                      //central line
                      line(79, 70, 74, 20);
                      //left curve of leaf
                      curve(40, 65, 73, 24, 79, 69, 245, 175);;
                      //vein 1 L
                      line(66,45,75,35);
                      //vein 2 L
                      line(68,57,76,47);
                      //vein 3 R
                      line(88,45,77,38);
                      //vein 4 R
                     line(85,55,77,50);
                   pop();

// Setup for the Two ellipses
        var mouse1 = map(mouseX, 220, 330, 0, 255);
// Color of EL changes based on the X position of the mouse
  //Ellipse Large
            fill(54,20,7,mouse1);
            stroke(0,mouse1);
                  ellipse(297,420,80,80);
                  //Ellipse Small
            noStroke()
            fill(145,75,34,40);
                  ellipse(297,420,60,60);

//Leaf 8
                       fill(50,205,50);
            push();
                translate(width/2, height*0.5);
                scale(0.3);
                strokeWeight(3);
                rotate(frameCount*-1);
                //all strokes/outlines should be black
                 stroke(0);
                //right curve of leaf
                curve(2, 16, 73, 24, 79, 69, -35, 165);
                //central line
                line(79, 70, 74, 20);
                //left curve of leaf
                curve(40, 65, 73, 24, 79, 69, 245, 175);;
                //vein 1 L
                line(66,45,75,35);
                //vein 2 L
                line(68,57,76,47);
                //vein 3 R
                line(88,45,77,38);
                //vein 4 R
               line(85,55,77,50);
            pop();

            }
