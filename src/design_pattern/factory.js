/**
 * Products
 */
// Abstract Product Class
class Vehicle {
  getPrice() {
    return "What type of vehicle do you want to get the price for?";
  }
}

// Subclass A
class Car extends Vehicle {
  getPrice() {
    return "This car costs $2000";
  }
}

// Subclass B
class Truck extends Vehicle {
  getPrice() {
    return "This truck costs $5000";
  }
}

/**
 * Creators
 */
//This is the class that would be using the product
class VehicleFactory {
  // Factory method
  createVehicle(type) {
    switch (type) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
    }
  }
}

const vehicleFactory = new VehicleFactory();

const car = vehicleFactory.createVehicle("car");
console.log(car.getPrice());

const truck = vehicleFactory.createVehicle("truck");
console.log(truck.getPrice());
