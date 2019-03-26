const square = function(x) {
  return x * x;
};

const square_arrow = x => x * x;

console.log("square", square_arrow(9));

const getFirstName = fullName => fullName.split(" ")[0];

console.log("getFirstName", getFirstName("Andrew Mead"));

// this keyword

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Denver"],

  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city + "!");

    // this.cities.forEach(city => {
    //   console.log(this.name + " " + city);
    // });
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 99,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
