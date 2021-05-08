class Ball {
  constructor(x,y,radius){

  var options={

    isStatic:false,
    density:1,
    restitution:0.8,
    frictionAir:0.05,


  }

  this.body=Bodies.circle(x,y,radius,options);
  this.radius=radius
  World.add(world,this.body);

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS)
    stroke("grey");
    fill("blue");
    ellipse(0, 0, this.radius, this.radiusS);
    pop();
 }
}