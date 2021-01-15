class rope
{
	constructor(body1,body2,offsetX,offsetY)
	{

        this.offsetX=offsetX;
this.offsetY=offsetY;

		var options={
            bodyA:body1,
            bodyB:body2,

            pointB:{x:this.offsetX,y:this.offsetY}
			
			}
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

	}
	display()
	{
var part1= this.rope.bodyA.position;
var part2= this.rope.bodyB.position;

var A1=point.x;
var A2=point.y;

var B1 = part1.x + this.offsetX;
var B2= part2.y + this.offsetY;

line(A1,A2,B1,B2)


    }
			
}