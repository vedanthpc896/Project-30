class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
         
         
        this.pointB = pointB
        this.poly = Constraint.create(options);
        World.add(world, this.poly);
    }

    fly(){
        this.poly.bodyA = null;
    }

    display(){
         
        //image(this.sling1,200,20);
        //image(this.sling2,170,20);
        if(this.poly.bodyA){
            var pointA = this.poly.bodyA.position;
            var pointB = this.pointB;
             
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}