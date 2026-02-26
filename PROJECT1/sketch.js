let myShape;
let myOthershape; 
let myOthershape2; 
let modelSwap = false;
let objectSwap = false;
let slider;
let slider2;
let bouncevariable = 0.75;
let bouncespeed = 0.01;
let direction = 1; 

function preload() {

 myOthershape = loadModel('./star.obj', true);
myOthershape2 = loadModel('./guitarmodel.obj', true);
songOne = loadSound('./paperpl.mp3');
    songTwo = loadSound('./heads.mp3');
    songThree = loadSound('./lvls.mp3');
}


function setup(){
    let canvas = createCanvas(800,800, WEBGL);
    canvas.parent('sketch-holder');
    angleMode(DEGREES);
    ballBlob();
        let button1 = createButton("Reset Background");
  button1.parent('secondbutton-holder');
    button1.mousePressed(clearIt);
        let button4 = createButton("Save Canvas as Image");
  button4.parent('secondbutton-holder');
    button4.mousePressed(saveIt);
            let button7 = createButton("Paper Planes - 172BPM");
    button7.parent('songbutton-holder');
        button7.mousePressed(playsong1);
                let button8 = createButton("Heads Will Roll Remix - 132BPM");
    button8.parent('songbutton-holder');
        button8.mousePressed(playsong2);
                let button9 = createButton("Levels - 176BPM");
    button9.parent('songbutton-holder');
        button9.mousePressed(playsong3);
                    let button11 = createButton("COLOR CHANGE");
    button11.parent('colorbutton-holder');
        button11.mousePressed(colorButt);
        background(0,0,0);
lightcolor = random(0,250);
    lightcolorr = random(0,250);
        lightcolorg = random(0,250);
        lightcolorb = random(0,250);
pointLight(lightcolor,0,0,0,0,0);
    ///sliders
slider = createSlider(0, 0.1, 0.02, 0.001);
  slider.position(-350,700); // x and y
  slider.size(800, 40); // width and height
      // rotate slider vertical
  slider.style('transform', 'rotate(-90deg)');
////slider2
          slider2 = createSlider(0, 150, 0); // min, max, start
  slider2.position(575,700); // x and y
  slider2.size(800, 40); // width and height
      // rotate slider vertical
  slider2.style('transform', 'rotate(-90deg)');
}

function draw(){
   ////////// bounce stuff
bouncevariable += slider.value() * direction;
if (bouncevariable > 1) {
  bouncevariable = 1; 
  direction *= -1;
}

if (bouncevariable < 0.5) {
  bouncevariable = 0.5;
  direction *= -1;
}

// Apply bounce to scale
scale(1.25 + bouncevariable);

    ///////////
    orbitControl();
    noStroke();
    lights();
    fill(255);
    shininess(40);
    specularMaterial(255);
    //chelseas model stuff
    push();
    fill(255,0,0);
    shininess(40);
    specularMaterial(255);
    rotateX(180);
    translate(0,0,0);
    if(modelSwap) {
      rotateX(-180);
                    fill(255,200,0);
    shininess(40);
    specularMaterial(255);
      model(myOthershape);
    } else if(!modelSwap) {
              rotateX(-90);
      model(myOthershape2);
    }
    pop();

  //  ellipsoid(100,50,25);
    pointLight(lightcolorr+slider2.value(),lightcolorg+slider2.value(),lightcolorb+slider2.value(),0,0,0);

        model(myShape);
    

    
}


function ballBlob() {
    beginGeometry();
    for (let i = 0; i < 20; i++) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        let x = random(-100, 100);
        let y = random(-100, 100);
        let z = random(-100, 100);
        let size = random(5, 20);
        push();
        translate(x, y, z);
        fill(255,250,250);
        sphere(size);
        translate(0,0,size*0.65);
                fill(r, g, b);
        sphere(size*0.5);
        translate(0,0,size*0.33);
        fill(0);
        sphere(size*0.23);
        fill(0);
        translate(0,size*-0.7,size*-0.33);
        rotateX(-30);
                box(size*0.13,size*0.6,size*0.13);
                translate(size*-0.5,size*0.1,0);
                box(size*0.13,size*0.6,size*0.13);
                translate(size*1,0,0);
                box(size*0.13,size*0.6,size*0.13);
                rotateX(60);
                        translate(size*-0.5,size*1.1,size*-0.9);
                        box(size*0.13,size*0.6,size*0.13);
                translate(size*-0.5,size*0.1,0);
                box(size*0.13,size*0.6,size*0.13);
                translate(size*1,0,0);
                box(size*0.13,size*0.6,size*0.13);
        pop();
        
    }
    myShape = endGeometry();
}


function clearIt(){
    background(0, 0, 0);
}
function saveIt(){
  saveCanvas("myDrawing", "png");
}
function playsong1(){
  if (songOne.isPlaying()) {
    songOne.stop();}
        if (songTwo.isPlaying()) {
    songTwo.stop();}
        if (songThree.isPlaying()) {
    songThree.stop();
  } else {
    songOne.play();
  }
}
function playsong2(){
  if (songOne.isPlaying()) {
    songOne.stop();}
        if (songTwo.isPlaying()) {
    songTwo.stop();}
        if (songThree.isPlaying()) {
    songThree.stop();
  } else {
    songTwo.play();
  }
}
function playsong3(){
  if (songOne.isPlaying()) {
    songOne.stop();}
        if (songTwo.isPlaying()) {
    songTwo.stop();}
        if (songThree.isPlaying()) {
    songThree.stop();
  } else {
    songThree.play();
  }
}
function keyPressed() {
  if (key === "d") {
        background(250,0,0);
  }
  if (key === "s") {
        background(255,200,0);
  }
      if (key === "f") {
  if(modelSwap) {
    modelSwap = false;
  } else if(!modelSwap) {
    modelSwap = true;
  }

  }
      if (key === "/") {
lightcolorr = random(0,250);
          lightcolorg = random(0,250);
          lightcolorb = random(0,250);
  }
}

function colorButt(){
lightcolorr = random(0,100);
          lightcolorg = random(0,100);
          lightcolorb = random(0,100);
}