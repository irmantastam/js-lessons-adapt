function myCar() {
  var name = "Audi";

  // name variable can only be accessed inside myCar() function.
}

/**
 * carName variable is defined outside function, so it becomes global. Attaches to window object.
 */
var carName = "Volvo";
console.log(window.carName); // logs: Volvo
