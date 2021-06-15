//Init
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var interval = setInterval(play, 1);

var tabBalls = Array();
var tabColor = ['red', 'green', 'yellow', 'orange', 'purple'];
var tabSpeed = [1];
var mouseX = 0;
var mouseY = 0;

//Add a new ball
$("#btnNewBall").click(function (e) { 
    e.preventDefault();
    widthBall = Math.floor((Math.random() * 10) + 5);
    posXRandom = Math.floor(Math.random() * (canvas.width - (widthBall * 2))) + (widthBall * 2);
    posYRandom = Math.floor(Math.random() * (canvas.height - (widthBall * 2))) + (widthBall * 2);
    directionX = Math.floor(Math.random() * 2);
    directionY = Math.floor(Math.random() * 2);
    color = tabColor[Math.floor(Math.random() * tabColor.length)];
    speed = tabSpeed[Math.floor(Math.random() * tabSpeed.length)];
    tabBalls.push(new Ball(widthBall, posXRandom, posYRandom, directionX, directionY, speed, color));
    $("#nbBallsInGame").html(tabBalls.length + " Balls in game");
});

//Reduce width of game
$("#btnReduceGame").click(function (e) { 
    e.preventDefault();
    $("#myCanvas").attr("width", parseInt($("#myCanvas").attr("width")) - 100);
    $("#myCanvas").attr("height", parseInt($("#myCanvas").attr("height")) - 50);
});

//Increase width of game
$("#btnIncreaseGame").click(function (e) { 
    e.preventDefault();
    $("#myCanvas").attr("width", parseInt($("#myCanvas").attr("width")) + 100);
    $("#myCanvas").attr("height", parseInt($("#myCanvas").attr("height")) + 50);
});

//Position of mouse
$("#myCanvas").mousemove(function (e) { 
    mouseX = e.clientX;
    mouseY = e.clientY;
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

        ball.move();
        ball.reduceMoveSpeed(0.0001);
        ball.collisionBorderGame(canvas.width, canvas.height);
        ball.collisionMouse(mouseX, mouseY, 1);
    });
}