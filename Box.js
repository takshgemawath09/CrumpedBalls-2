class Box {
    constructor(x, y, width, height) {
      var options = { 
          isStatic: true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }

    display(){
     // imageMode(CENTER);
      fill(255);
      image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
      
     image(this.image,650,625,200,150);
      
    }
  }


