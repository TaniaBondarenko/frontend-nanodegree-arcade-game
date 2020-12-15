// Enemies our player must avoid
const Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x >= 500) {
        this.x = -10;
        this.speed = Math.floor(40 + Math.random() * 100);
    } 
};

    this.checkCollisions = function () {
        allEnemies.forEach(function (enemy) {
            let diffX = Math.abs(enemy.x - player.x);
            let diffY = Math.abs(enemy.y - player.y);
            let distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            if (distance <= 5) {
    
        player.x = 202;
        player.y = 400;
             }
               
        });
};
    
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


const Player = function (x,y) {
    this.sprite = "images/char-cat-girl.png";
    this.x = x;
    this.y = y;
};

Player.prototype.update = function () {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
}

Player.prototype.handleInput = function (direction) { 
 switch (direction) {
        case 'left':
            this.x = this.x - 98;
            break;
        case "up":
            this.y = this.y - 85;
            break
        case "right":
            this.x = this.x + 98;
            break;
        case "down":
            this.y = this.y + 85;
            break;
        case "other":
            this.x; this.y;
            break;
    }
    if (this.x >=400) {
        this.x = 398;
    } else if (this.x <= 5) {
        this.x = 6;
    } else if (this.y >= 410) {
        this.y = 400;
    } else if (this.y <= 60) {
        this.y = 60; 
        setTimeout(function () { alert("Congratulations! You won!"); }, 1000);
    }

};


let player = new Player(202,400);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy1 = new Enemy(5, 60, 55);

let enemy2 = new Enemy(50,145,55);

let enemy3 = new Enemy(280, 230, 55);

let enemy4 = new Enemy(25, 230, 55);

const allEnemies = [
    enemy1,
    enemy2,
    enemy3,
    enemy4
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});





