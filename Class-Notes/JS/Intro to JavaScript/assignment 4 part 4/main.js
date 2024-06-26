//sets up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const width = canvas.width;
const height = canvas.height;

//generates a random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generates a random colour
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//shape class 
class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

//ball class is created for bouncing balls
class Ball extends Shape {
  constructor(x, y, velX, velY, size, color) {
    super(x, y, velX, velY);
    this.size = size;
    this.color = color;
    this.exists = true;
  }

  //draws the balls onto the canvas
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  //updates the balls position
  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  //collision detection for collisions against other balls
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
//evil circle is a controllable circle
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = "white";
    this.size = 10;
  }
  //draws evil circle to the canvas
  draw() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {//does not allow evil circle to go out of the canvas
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }

  collisionDetect() {//if a ball colides with evil circle, it eliminates it
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
        }
      }
    }
  }
}

//array to store the balls
const balls = [];
//starts evil circle at the center of the canvas
const evilCircle = new EvilCircle(width / 2, height / 2);

while (balls.length < 25) { //ball count cannot go higher than 25 balls, generates all 25
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    size,
    randomRGB()
  );

  balls.push(ball);
}

let ballCount = balls.length;

function updateScore() {//updates the score (ballcount)
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Ball count: ${ballCount}`;
}

//main loop draws everything, including balls and evil circle
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  //updates and draws each ball
  for (const ball of balls) {
    if (ball.exists) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  }

  //draws and updates evil circle
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  //updates the ball count display
  ballCount = balls.filter(ball => ball.exists).length;
  updateScore();

  requestAnimationFrame(loop);
}

//controls for evilcircle
window.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "a":
      evilCircle.x -= evilCircle.velX;
      break;
    case "d":
      evilCircle.x += evilCircle.velX;
      break;
    case "w":
      evilCircle.y -= evilCircle.velY;
      break;
    case "s":
      evilCircle.y += evilCircle.velY;
      break;
  }
});

loop();//loops
