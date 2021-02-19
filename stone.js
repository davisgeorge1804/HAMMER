class Stone {
    constructor(x, y) {
      var options = {
        'restitution':0.3,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle+130;
      push();
      translate(pos.x, pos.y+250);
      rotate(angle);
      rectMode(CENTER);
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  


  
  