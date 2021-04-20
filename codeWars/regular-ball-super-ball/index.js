const Ball = function ball(ballType) {
  if (!ballType) {
    this.ballType = 'regular';
  } else this.ballType = ballType;
};

Ball();
