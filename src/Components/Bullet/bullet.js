import MovingObject from "../MovingObject/moving_object.js"
const Util = require('../../util.js');


function Bullet(options) {
    options['color'] = Bullet.COLOR
    options['radius'] = Bullet.RADIUS
    MovingObject.call(this, options)

}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;
Bullet.COLOR = "red"
Bullet.RADIUS = 5

Bullet.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.stroke()
}



export default Bullet;
