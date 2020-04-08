const Util = require('./util.js');
const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship');


function Bullet(options) {
    options['color'] = Bullet.COLOR
    options['radius'] = Bullet.RADIUS
    MovingObject.call(this, options)

}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;
Bullet.COLOR = "red"
Bullet.RADIUS = 5


// Bullet.prototype.collideWith = function (otherObject) {
//     if (otherObject instanceof Ship) {
//         return;
//     } else if (otherObject instanceof Bullet){
//         return
//     }else{
//         console.log(otherObject)
//         this.game.remove(otherObject)
//     }
// }




module.exports = Bullet;

