import Game from "../Game/game.js"
const key = require("../../keymaster.js");

function GameView(ctx, imageCtx, width, height){
    this.game = new Game(width, height);
    this.ctx = ctx;
    this.imageCtx = imageCtx
}


GameView.prototype.start = function(){
    this.imageCtx.globalAlpha = 0.1;

    const img = new Image();
    img.onload = () => {
        this.imageCtx.drawImage(img, 0, 0);
    };

    if (window.innerWidth < 1600 ) {
        img.src = "cat768.png"
    }else {

        img.src = window.innerWidth < 1024 ? "cat264.png" : "cat.png"
    }
    img.width = this.game.width;
    img.height = this.game.height;

    this.bindKeyHandlers();
    window.setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx)
        this.imageCtx.globalAlpha = 0.1;

        if (window.innerWidth < 400) {
            this.imageCtx.drawImage(img, -(document.documentElement.clientWidth/2), -80);
        } else if (window.innerWidth < 600) {
            this.imageCtx.drawImage(img, -(document.documentElement.clientWidth / 2.7), -80)
        } else if (window.innerWidth < 1400){
            this.imageCtx.drawImage(img, -20, 0);
        } else if (window.innerWidth < 1600) {
            this.imageCtx.drawImage(img, 20, 0);
        }else {
        this.imageCtx.drawImage(img, 0, 0);
        }

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




