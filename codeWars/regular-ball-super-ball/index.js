const Ball = function (ballType) {
  if (!ballType) {
    this.ballType = 'regular';
  } else this.ballType = ballType;
};
