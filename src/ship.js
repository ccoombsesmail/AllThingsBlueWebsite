import MovingObject from "./moving_object.js"
import Bullet from './bullet.js';
const Util = require('./util.js');

function Ship(options){
    options['vel'] = [0, 0];
    options['radius'] = Ship.RADIUS;
    options['color'] = Ship.COLOR;
    MovingObject.call(this, options);
}

Ship.RADIUS = 15;
Ship.COLOR = "#08F7FE";

Util.inherits(Ship, MovingObject)


Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]
}


Ship.prototype.fireBullet = function() {
    let b = new Bullet({ pos: this.pos, vel: [this.vel[0]*1.5 + 1 , this.vel[1]*1.5 + 1 ], game: this.game});
    this.game.bullets.push(b);
}

export default Ship;
