
// Factory function.
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);


// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circleObj = new Circle(1); // new creates and empty object and makes this keyword point to that object. And created function return this automatically.


const keys = Object.keys(circle);
if ('radius' in circle) console.log(circle.radius);