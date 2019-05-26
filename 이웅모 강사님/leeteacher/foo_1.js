class Circle {
  constructor(radius) {
    console.log(this);
    this.radius = radius;
    console.log(this);
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    console.log(this);
    this.height = height;
    console.log(this);
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }
}

const circle = new Cylinder(5, 10);
console.log(circle);
