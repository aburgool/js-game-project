class Path {
  constructor(ctx, x, y, width) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 5;
    this.color = "gray";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y++
  }

}




