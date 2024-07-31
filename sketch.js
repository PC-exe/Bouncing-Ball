let ball = {
    x: 550,
    y: 200,
    size: 50,
    xSpeed: 17,
    ySpeed: 15
};

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(40);

    // Draw the ball
    ellipse(ball.x, ball.y, ball.size);

    // Move the ball
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
  

    // Check for collision with the walls and reverse direction if needed
    if (ball.x > width - ball.size / 2 || ball.x < ball.size / 2) {
        ball.xSpeed *= -1;
    }

    if (ball.y > height - ball.size / 2 || ball.y < ball.size / 2) {
        ball.ySpeed *= -1;
 }
}