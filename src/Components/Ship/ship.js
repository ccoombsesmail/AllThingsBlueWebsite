import MovingObject from "../MovingObject/moving_object.js"
import Bullet from '../Bullet/bullet.js';
const Util = require('../Util/util.js');

function Ship(options){
    this.angle = 0;
    options['vel'] = [0, 0];
    // options['radius'] = Ship.RADIUS;
    options['color'] = Ship.COLOR;
    MovingObject.call(this, options);
}

// Ship.RADIUS = 15;
Ship.COLOR = "#08F7FE";

Util.inherits(Ship, MovingObject)


Ship.prototype.draw = function (ctx) {
    var grd = ctx.createLinearGradient(this.pos[0] - this.radius, this.pos[1] - this.radius, this.pos[0] - this.radius, this.pos[1] + this.radius);
    grd.addColorStop(0, " #a4508b");
    grd.addColorStop(1, "#5f0a87");
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.stroke()
}

// Ship.prototype.draw = function (ctx) { 

//     // ctx.save()
//     let rad = this.angle * Math.PI / 180;
//     // ctx.translate(this.pos[0], this.pos[1]);
//     // ctx.rotate(rad);
//     let dx1 = ( (3 / 2)  * Ship.RADIUS * Math.sin(rad))
//     let dy1 = (( Ship.RADIUS - (( 3 * Ship.RADIUS / 2) * Math.cos(rad))))
//     let dx2 = (1 / 2)  * Ship.RADIUS * Math.sin(rad)
//     let dy2 = ( Ship.RADIUS - (( Ship.RADIUS / 2) * Math.cos(rad)))
//     ctx.beginPath();
//     ctx.fillStyle = "red"
//     ctx.moveTo(this.pos[0], this.pos[1]);
//     console.log(rad)
//     // ctx.lineTo(this.pos[0] - Ship.RADIUS*2, this.pos[1] + 2*Ship.RADIUS);
//     // ctx.lineTo(this.pos[0] + Ship.RADIUS*2, this.pos[1] + 2*Ship.RADIUS);
//     ctx.lineTo(this.pos[0] - (3 / 2) * Ship.RADIUS * Math.sin(Math.PI / 6) - dx1, this.pos[1] - (Ship.RADIUS - (( 3 * Ship.RADIUS / 2) * Math.cos(Math.PI/6))) - dy1);
//     ctx.lineTo(this.pos[0] + (3 / 2) * Ship.RADIUS * Math.sin(Math.PI / 6) - dx2, this.pos[1] - (Ship.RADIUS - (( 3* Ship.RADIUS / 2) * Math.cos(Math.PI/6))) + dy2);
//     ctx.fill();
//     ctx.lineWidth = 2;
//     ctx.stroke()

//     ctx.restore();


// }



Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]
    this.angle += 5
}


Ship.prototype.fireBullet = function() {
    let b = new Bullet({ pos: this.pos, vel: [this.vel[0]*1.5 + 1 , this.vel[1]*1.5 + 1 ], game: this.game});
    this.game.bullets.push(b);
}

export default Ship;
