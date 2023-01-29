interface Circle {
  kind: 'circle',
  radius?: number,
}

interface Square {
  kind: 'square',
  size?: number,
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return shape.radius;
    case 'square':
      return shape.size;
  }
};