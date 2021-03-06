class Box{
    constructor(x, y, w, h){

        var options = {
            restitution : 0.8,
            density : 1,
            friction : 0.3
        };

        this.body = Bodies.rectangle(x, y, w, h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);

        //hi aishi this is Shweta
    }

    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('white');
        rect(0,0,this.width,this.height);
        pop();
    }

}