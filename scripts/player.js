class Player {
  constructor(options) {
    this.x = 240;
    this.y = 360; 
    this.width = 20;
    this.height = 20;
    this.color = "yellow";
    this.canvasWidth = options.canvasWidth;
  }

  goLeft() {
    this.x -= 10;
    if (this.x < 0) {
      this.x += 10;
    }
  };

  goRight() {
    console.log(this.canvasWidth);
    this.x += 10;
    if (this.x > (this.canvasWidth - this.width)) { 
      this.x -= 10;
    }
  };
}


