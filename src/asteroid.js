const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");
const Bullet = require('./bullet.js');


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


module.exports = Asteroid;



// function Random(a) {
//     this.prop = a;
// }


// let p = new Random("one");
// let p2 = new Random("two");
// let p3 = new Random("three");

// console.log(p instanceof Random)