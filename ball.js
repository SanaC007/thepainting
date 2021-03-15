var length = data.length;

// My code below. 
var i = 0;
while (i < data.length) {
  var ball = data[i];
  create(ball.x, ball.y, ball.color);
  i = i + 1;
}
