import Asteroid from "../Asteroid/asteroid.js"
import Ship from "../Ship/ship.js";
import Bullet from '../Bullet/bullet.js';

function Game(){
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Ship({pos: this.randomPosition(), game: this});
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;
Game.prototype.addAsteroids = function(){
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
        let x = Math.random()*1000;
        let y = Math.random()*1000;
        let ast = new Asteroid({pos: [x,y], game: this});
        this.asteroids.push(ast);
    }
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((object) => {
        object.draw(ctx);
    } )
}

Game.prototype.move = function(){
    this.allObjects().forEach((object) =>{
        object.move();
    })
}


Game.prototype.wrap = function(pos) {
    let xWrapped = pos[0];
    let yWrapped = pos[1];
    if (pos[0] < 0 ) {
        xWrapped = Game.DIM_X-30;
    } else if (pos[1] < 0) {
        yWrapped = Game.DIM_Y-30;
    }else {
        xWrapped = pos[0]%Game.DIM_X;
        yWrapped = pos[1]%Game.DIM_Y;
    }
  

    return [xWrapped, yWrapped];
}

Game.prototype.checkCollisions = function() {
    let objects = this.allObjects()
    for (let i = 0; i < objects.length-1; i++){
        for (let j = i+1; j < objects.length; j++){
            if (objects[i].isCollidedWith(objects[j])) {
                let removed = objects[i].collideWith(objects[j])
                if (removed){ 
                    return;
                }
            }  
        }
    }

}

Game.prototype.step = function(){
    this.move();
    this.checkCollisions();
    
}

Game.prototype.remove = function(obj) {

    if (obj instanceof Asteroid) {
        this.asteroids.splice(this.asteroids.indexOf(obj), 1)
    }else if (obj instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(obj), 1)
    }
}

Game.prototype.randomPosition = function(){
    let x = Math.random() * Game.DIM_X;
    let y = Math.random() * Game.DIM_Y;
    return [x,y];
}

Game.prototype.allObjects = function(){
    return [...this.asteroids, this.ship, ...this.bullets]
};


Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] <= 10 || pos[0] >= 950 || pos[1] <= 10 || pos[1] >= 600  ) {
        return true;
    }
    return false;
}


export default Game;