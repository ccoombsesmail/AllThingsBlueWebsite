import Asteroid from "../Asteroid/asteroid.js"
import Ship from "../Ship/ship.js";
import Bullet from '../Bullet/bullet.js';

function Game(width, height){
    this.width = width;
    this.height = height;
    this.asteroids = [];
    this.bullets = [];
    this.boundAddAsteroids = this.addAsteroids.bind(this);
    this.boundAddAsteroids()
    this.ship = new Ship({pos: this.randomPosition(), game: this, radius: this.width*.02});
}

Game.NUM_ASTEROIDS = 10;
Game.prototype.addAsteroids = function(){
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
        let x = Math.random()*this.width;
        let y = Math.random()*this.height;
        let ast = new Asteroid({pos: [x,y], game: this, radius: this.width*.03});
        this.asteroids.push(ast);
    }
}

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, this.width, this.height);
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
        xWrapped = this.width - 30;
    } else if (pos[1] < 0) {
        yWrapped = this.height - 30;
    }else {
        xWrapped = pos[0]%this.width;
        yWrapped = pos[1]%this.height;
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
    let x = Math.random() * this.width;
    let y = Math.random() * this.height;
    return [x,y];
}

Game.prototype.allObjects = function(){
    return [...this.asteroids, this.ship, ...this.bullets]
};


Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] <= 10 || pos[0] >= this.width-50 || pos[1] <= 10 || pos[1] >= this.height  ) {
        return true;
    }
    return false;
}


export default Game;