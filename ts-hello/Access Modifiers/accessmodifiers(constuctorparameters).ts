
class Point {
  constructor(private x?: number, private y?: number) {
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
  getx() {
    return this.x;
  }
}

let point = new Point(1, 2);
point.draw();