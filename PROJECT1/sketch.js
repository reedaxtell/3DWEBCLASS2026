let myShape;
let myOthershape; 
let myOthershape2; 
let modelSwap = false;
let objectSwap = false;

function preload() {
 myOthershape = loadModel('./star.obj', true);
myOthershape2 = loadModel('./guitarmodel.obj', true);
}


function setup(){
    let canvas = createCanvas(800,800, WEBGL);
    angleMode(DEGREES);
    ballBlob();
        let button1 = createButton("Reset Background");
  button1.parent('secondbutton-holder');
    button1.mousePressed(clearIt);
        let button4 = createButton("Save Canvas as Image");
  button4.parent('secondbutton-holder');
    button4.mousePressed(saveIt);
        background(0,0,0);
lightcolor = random(0,250);
    lightcolorr = random(0,250);
        lightcolorg = random(0,250);
        lightcolorb = random(0,250);
pointLight(lightcolor,0,0,0,0,0);
}

function draw(){
    scale(2);
    orbitControl();
    noStroke();
    lights();
    fill(255);
    shininess(40);
    specularMaterial(255);
    //chelseas model stuff
    push();
    rotateX(180);
    translate(0,0,0);
    if(modelSwap) {
      rotateX(-180);
      model(myOthershape);
    } else if(!modelSwap) {
              rotateX(-90);
      model(myOthershape2);
    }
    pop();

  //  ellipsoid(100,50,25);
    pointLight(lightcolorr,lightcolorg,lightcolorb,0,0,0);

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
function keyPressed() {
  if (key === "f") {
        background(250,0,0);
  }
  if (key === "s") {
        background(250,0,0);
  }
      if (key === "q") {
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