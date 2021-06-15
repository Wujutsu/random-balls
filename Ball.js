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
        this.directionX = directionX;
        this.speed = speed;
        this.color = color;
    }

    move(speed = false) {
        if (speed == false) {
            this.directionX == true ? this.posX += this.speed : this.posX -= this.speed;
            this.directionY == true ? this.posY += this.speed : this.posY -= this.speed;
        } else {
            this.directionX == true ? this.posX += speed : this.posX -= speed;
            this.directionY == true ? this.posY += speed : this.posY -= speed;
        }
    }

    reduceMoveSpeed(speedReduce) {
        this.speed <= 0 ? this.speed = 0 : this.speed -= speedReduce;
    }

    collisionBorderGame(canvasWidth, canvasHeight) {
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

    collisionMouse(mouseX, mouseY, speedIncrease) {
        if ((this.posX + this.width >= mouseX && this.posX - this.width <= mouseX) && (this.posY + this.width >= mouseY - 40 && this.posY - this.width <= mouseY - 40)) {
            this.directionX == true ? this.directionX = false : this.directionX = true;
            this.directionY == true ? this.directionY = false : this.directionY = true;
            this.speed += speedIncrease;
            this.move(this.width);
        } 
    }
}