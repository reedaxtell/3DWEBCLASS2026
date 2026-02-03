function setup(){
    let canvas = createCanvas(400,400, WEBGL);
    angleMode(DEGREES);
}

function draw(){
    background(150,150,250);
    orbitControl();
        fill(0);
        torus(100);
    torus(150);
        torus(200);
        torus(250);
        fill(255,255,0);
    sphere(70);
        fill(250,170,75);
       translate(0,-100,0);
    sphere(20);
       translate(0,250,0);
    fill(115,110,0);
    sphere(30);
    translate(180,-230,0);
        fill(0,0,255);
    sphere(25);
        translate(-370,-80,0);
        fill(255,255,100);
    sphere(25);
}