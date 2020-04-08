import MovingObject from "./moving_object.js"

const Util = require('./util.js');


function Bullet(options) {
    options['color'] = Bullet.COLOR
    options['radius'] = Bullet.RADIUS
    MovingObject.call(this, options)

}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;
Bullet.COLOR = "red"
Bullet.RADIUS = 5





export default Bullet;
