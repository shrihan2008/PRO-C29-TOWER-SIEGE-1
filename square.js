class Tower
{
constructor(x,y,width,height){
   var options= {
  isStatic:true,    
  friction:0.5,
   density:1.2
    }
   this.body = Bodies.rectangle(x, y, width, height, options);
 this.width = width;
   this.height = height;
    
    World.add(world, this.body);
    this.visiblity=255
}
display(){
        
  var pos =this.body.position;
  rectMode(CENTER);
  fill(random(100,150))
    rect(pos.x, pos.y, this.width, this.height);
 
}
}