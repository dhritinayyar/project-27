class Rope{
    constructor(body1,body2,offsetX,offsetY){
    offsetX=offsetX;
    offsetY=offsetY;

    var options={
   bodyA:body1,
   bodyB:body2,
  pointB:{x:this.offsetX , y:this.offsetY}
   }
  
   this.body=Matter.Consraint.create(options);
   World.add(world,this.body);
   
   
   
   }
   
   display(){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;

   var Anchor1x = point1.x;
   var Anchor1y = point1.y;

   var Anchor2x= point2.x + this.offsetX;
   var Anchor2y= point2.y + this.offsetY;


   line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
   
   
   
   }
   
   
   }