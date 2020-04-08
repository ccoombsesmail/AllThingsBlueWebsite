import MovingObject from "./moving_object.js"
import Ship from "./ship.js";
import Bullet from './bullet.js';
const Util = require("./util.js");


function Asteroid(options) {
    options["vel"] = Util.randomVec((Math.random() * 5)+2)
    options["color"] = Asteroid.COLOR;
    options["radius"] = Asteroid.RADIUS;
    MovingObject.call(this, options)
    
}



Asteroid.COLOR = 'white';
Asteroid.RADIUS = 20;

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject){
    if (otherObject instanceof Ship){
        otherObject.relocate(); 
        return true;
    }else if (otherObject instanceof Bullet){
        this.game.remove(this);
        this.game.remove(otherObject);
        return true;
    }
    return false;
}


export default Asteroid;


