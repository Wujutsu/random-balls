class Ball
{
    #width;

    #posX;

    #posY;

    #directionX;

    #directionY;
    
    #speed;

    #color;

    constructor(width, posX, posY, directionX, directionY, speed, color){
        this.width = width;
        this.posX = posX;
        this.posY = posY;
        this.directionX = directionX;
        this.directionY = directionY;
        this.speed = speed;
        this.color = color;
    }

    move() {
        this.directionX == true ? this.posX += this.speed : this.posX -= this.speed;
        this.directionY == true ? this.posY += this.speed : this.posY -= this.speed;
    }

    collisionGame(canvasWidth, canvasHeight) {
        if (this.posX <= this.width) {
            this.directionX = true;
        }
        if (this.posX + this.width >= canvasWidth) {
            this.directionX = false;
        }
        if (this.posY <= this.width) {
            this.directionY = true;
        }
        if (this.posY + this.width >= canvasHeight) {
            this.directionY = false;
        }
    }
}