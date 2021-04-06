class Mango{
    constructor(x,y,radius){
        this.radius = radius
        var options={
            isStatic:true,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.image = loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}