//Init
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var interval = setInterval(play, 10);

var tabBalls = Array();
var tabColor = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
var tabSpeed = [1, 2, 3, 4];

//Add a new ball
$("#btnNewBall").click(function (e) { 
    e.preventDefault();
    widthBall = Math.floor((Math.random() * 25) + 5);
    posXRandom = Math.floor(Math.random() * (canvas.width - (widthBall * 2))) + (widthBall * 2);
    posYRandom = Math.floor(Math.random() * (canvas.height - (widthBall * 2))) + (widthBall * 2);
    directionX = Math.floor(Math.random() * 2);
    directionY = Math.floor(Math.random() * 2);
    color = tabColor[Math.floor(Math.random() * tabColor.length)];
    speed = tabSpeed[Math.floor(Math.random() * tabSpeed.length)];
    tabBalls.push(new Ball(widthBall, posXRandom, posYRandom, directionX, directionY, speed, color));
    $("#nbBallsInGame").html(tabBalls.length + " Balls in game");
});

//Show canvas game
function play() {
    //Refresh the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Show the balls
    tabBalls.forEach(ball => {
        ctx.beginPath();
        ctx.arc(ball.posX, ball.posY, ball.width, 0, 5 * Math.PI);       
        ctx.fillStyle = ball.color;
        ctx.fill();
        /*ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();*/

        ball.move();
        ball.collisionGame(canvas.width, canvas.height);
    });
}