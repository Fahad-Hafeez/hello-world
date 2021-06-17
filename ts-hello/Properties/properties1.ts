
class Point {
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  get X() {
    return this.x;
  }

  set X(value) {
    if (value < 0)
      throw new Error('value cannot be less then 0.');
    
    this.x = value;
  }
}

let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.draw();