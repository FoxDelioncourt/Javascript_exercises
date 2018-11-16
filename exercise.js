var house = {
  areas: [
    {
      livingRoom: {
        items: ["tv", "sofa"]
      },
      bedroomOne: {
        items: ["bed", "washing machine"],
        windows: 3
      },
      bedroomTwo: {
        items: ["bed", "bed", "desk"],
        windows: 4
      },
      kitchen: {
        items: ["fridge", "broken chair"]
      }
    }
  ],
  garden: [true, "Red Rose"],
  garage: {
    car: {
      color: "red",
      wheels: 4,
      honk: () => {
        alert("Beep");
      }
    }
  }
};

// Find total number of areas in the house
console.log("-----Find total number of areas in the house");
let howManyAreasInTheHouse = arr => {
  let totalAreas = 0;
  for (prop in arr) {
    totalAreas = totalAreas + 1;
  }
  return totalAreas;
};
console.log(
  "There are " + howManyAreasInTheHouse(house.areas[0]) + " areas in the house."
);
console.log(
  "There are " + Object.keys(house.areas[0]).length + " areas in the house."
);
console.log("-----Find total number of areas in the house");
console.log();

// Add a dining table to the living room
console.log("-----Add a dining table to the living room");
console.log(house.areas[0].livingRoom.items);
console.log("Where are we going to eat in the living room?");
console.log("Why don't we add a dining table?");
house.areas[0].livingRoom.items.push("dining table");
console.log(house.areas[0].livingRoom.items);
console.log("-----Add a dining table to the living room");
console.log();

// Add a stove to the kitchen
console.log("-----Add a stove to the kitchen");
console.log(house.areas[0].kitchen.items);
console.log("Where are we going to cook our food?");
console.log("Why don't we add a stove in the kitchen?");
house.areas[0].kitchen.items.push("stove");
console.log(house.areas[0].kitchen.items);
console.log("-----Add a stove to the kitchen");
console.log();

// Remove the washing machine from bedroomOne
console.log("-----Remove the washing machine from bedroomOne");
console.log(house.areas[0].bedroomOne.items);
console.log("Why the heck is our washing machine in the bedroom?");
console.log("Fine, i'll remove it.");
house.areas[0].bedroomOne.items.pop("washing machine");
console.log(house.areas[0].bedroomOne.items);
console.log("-----Remove the washing machine from bedroomOne");
console.log();

// Find the total number of beds in all rooms
console.log("-----Find the total number of beds in all rooms");
// The wrong way of counting the beds :)
let numOfBeds = 0;
house.areas[0].livingRoom.items.forEach(item => {
  if (item === "bed") {
    numOfBeds++;
  }
});
house.areas[0].bedroomOne.items.forEach(item => {
  if (item === "bed") {
    numOfBeds++;
  }
});
house.areas[0].bedroomTwo.items.forEach(item => {
  if (item === "bed") {
    numOfBeds++;
  }
});
console.log(numOfBeds);
console.log("-----Find the total number of beds in all rooms");
console.log();

// Find the total number of beds in all rooms
console.log("-----Find the total number of beds in all rooms");
let noBeds = 0;
for (i = 0; i < Object.keys(house.areas[0]).length; i++) {
  for (
    c = 0;
    c < Object.values(Object.values(house.areas[0])[0])[0].length;
    c++
  ) {
    if (Object.values(house.areas[0])[i].items[c] === "bed") {
      noBeds++;
    }
  }
}
console.log("There are " + noBeds + " beds in the house.");
console.log("-----Find the total number of beds in all rooms");
console.log();

// Change the color of the car to blue
console.log("-----Change the color of the car to blue");
console.log("Ack! A red card?");
console.log(house.garage.car);
console.log("Abracadabra!");
house.garage.car.color = "blue";
console.log(house.garage.car);
console.log("-----Change the color of the car to blue");
console.log();

// Add another car to the garage with a honk function
console.log("-----Add another car to the garage with a honk function");
house.garage.car2 = {
  honk: () => {
    alert("Beep");
  }
};
console.log(house.garage);
console.log("-----Add another car to the garage with a honk function");
console.log();

// Make the new car honk
house.garage.car2.honk();

// Change the 'broken chair' in the kitchen to 'new chair'
console.log("-----Change the 'broken chair' in the kitchen to 'new chair'");
console.log(house.areas[0].kitchen.items);
house.areas[0].kitchen.items.splice(1, 1, "new chair");
console.log(house.areas[0].kitchen.items);
console.log("-----Change the 'broken chair' in the kitchen to 'new chair'");
console.log();

// If the house has a garden, console.log the name of the flower
console.log(
  "-----If the house has a garden, console.log the name of the flower"
);
if (house.garden[0]) {
  console.log(house.garden);
  console.log(house.garden[1].substr(4));
}
console.log(
  "-----If the house has a garden, console.log the name of the flower"
);
console.log();

// Practice exercise: Create a function that will reorder the numbers from least to greatest
console.log(
  "-----Create a function that will reorder the numbers from least to greatest"
);
let someNumbers = [2, 5, 0, 9, 10, 3, 6, 4, 0, -1];
let counter = someNumbers.length;
let sorted = [];
let minNum = someNumbers[0];
const sortMe = () => {
  for (c = 0; c < counter; c++) {
    for (i = 0; i < someNumbers.length; i++) {
      if (someNumbers[i] <= minNum) {
        minNum = someNumbers[i];
      }
    }
    someNumbers.splice(someNumbers.findIndex(el => el === minNum), 1);
    sorted.push(minNum);
    minNum = someNumbers[0];
  }
  return sorted;
};
console.log(someNumbers);
console.log(sortMe());
console.log(
  "-----Create a function that will reorder the numbers from least to greatest"
);
console.log();
