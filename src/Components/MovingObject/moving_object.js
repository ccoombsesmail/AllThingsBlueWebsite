function MovingObject(options){
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options["game"];
}


MovingObject.isWrappable = true;

MovingObject.prototype.draw = function(ctx){
    // var grd = ctx.createLinearGradient(this.pos[0] - this.radius, this.pos[1] - this.radius, this.pos[0] - this.radius, this.pos[1] + this.radius);
    // grd.addColorStop(0, " #21d190");
    // grd.addColorStop(1, "#d65bca");
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, true);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.stroke()
}


MovingObject.prototype.move = function() { 
 
    let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(newPos) && this.isWrappable === false) {
        this.game.remove(this)
    }else {
    let wrappedPos = this.game.wrap(newPos);
    this.pos = wrappedPos;
    }
}



MovingObject.prototype.isCollidedWith = function(otherObject) {
    let distance = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1])**2 );
    return distance < this.radius + otherObject.radius
}

MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this)

}




module.exports = MovingObject;