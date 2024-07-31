// Create global variables for ball position, ball properties
let ball = {
    x: 550,
    y: 200,
    size: 50,
    xSpeed: 17,
    ySpeed: 15
};

// set up everything that doesn't change
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(40);

    // create a ball on a screen 
    ellipse(ball.x, ball.y, ball.size);

    // move a ball continuously until it reaches the boundary of a screen
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
  
    // when the ball reaches the boundary, reverse the movement
    // Check for collision with the walls and reverse direction if needed
    if (ball.x > width - ball.size / 2 || ball.x < ball.size / 2) {
        ball.xSpeed *= -1;
    }

    if (ball.y > height - ball.size / 2 || ball.y < ball.size / 2) {
        ball.ySpeed *= -1;
 }
}
