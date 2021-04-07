class  Ball{
constructor(x,y,r){
    var option ={
    'restitution' : 0.3,
    isStatic=false
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("sprites/base.png");
World.add(world, this.body);
}

}