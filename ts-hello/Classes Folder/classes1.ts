
class Point {
  x: number;
  y: number;

  draw() {
    // ....
  }

  getDistance(another: Point) {
    // ...
  }
}

let drawPoint = (point: { x: number, y: number }) => {
  // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
  // ...
} 

drawPoint({
  x: 1,
  y: 2 
})