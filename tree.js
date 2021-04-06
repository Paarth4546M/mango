class Tree{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options={
        isStatic:true    
        }
         this.body = Bodies.rectangle(x,y,width,height,options)
         this.image = loadImage("Plucking mangoes/tree.png")
         World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,600,600)
    }
}