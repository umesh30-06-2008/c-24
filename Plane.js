class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rotate(rect);
			strokeWeight(4);
			stroke("green");
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      ellipse(0,0, this.r, this.r);
    }
  };