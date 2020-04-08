import Game from "./game.js"
const key = require("./keymaster.js");

function GameView(ctx, imageCtx){
    this.game = new Game();
    this.ctx = ctx;
    this.imageCtx = imageCtx
}


GameView.prototype.start = function(){
    this.imageCtx.globalAlpha = 0.1;

    const img = new Image();
    img.onload = () => {
        this.imageCtx.drawImage(img, 300, 300);
    };
    img.src = "cat.png";
    img.width = 1000;
    img.height = 2000;

    this.bindKeyHandlers();
    window.setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx)
        this.imageCtx.globalAlpha = 0.1;
        this.imageCtx.drawImage(img, 0, 0);


    }, 20)

}

GameView.prototype.bindKeyHandlers = function() {
    key("a", () =>{this.game.ship.power([-3, 0])});
    key("d", () => {this.game.ship.power([3, 0])})
    key("w", () => this.game.ship.power([0, -3]))
    key("s", () => this.game.ship.power([0, 3]))
    key("left", () => { this.game.ship.power([-3, 0]) });
    key("right", () => { this.game.ship.power([3, 0]) })
    key("up", () => this.game.ship.power([0, -3]))
    key("down", () => this.game.ship.power([0, 3]))
    key("space", () => this.game.ship.fireBullet())

}


export default GameView;




