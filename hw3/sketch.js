function setup(){
    let canvas = createCanvas(400,400, WEBGL);
    angleMode(DEGREES);
    ballBlob();
}

function draw(){
    background(150,150,250);
    orbitControl();
    noStroke();
    lights();
    fill(255);
    shininess(40);
    specularMaterial(255);
    ellipsoid(100,50,25);
    pointLight(255,0,0,0,0,0);

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