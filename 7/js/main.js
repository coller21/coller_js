"use strict";

class Vehicle {
    static TIME_TO_TRIP = 2;
    constructor(vehicleMark, vehicleYearManufacture, vehicleSpeed, vehicleCost) {
        this.vehicleMark = vehicleMark;
        this.vehicleYearManufacture = vehicleYearManufacture;
        this.vehicleSpeed = vehicleSpeed;
        this.vehicleCost = vehicleCost
    }
    getDistance() {
        return Number(this.vehicleSpeed) * Vehicle.TIME_TO_TRIP;
    }

    getTaxRate () {
        return this.vehicleCost * 0.03;
    }
}

class Plane extends Vehicle {

}

class Car extends Vehicle {

}

class Ship extends Vehicle {
    constructor(vehicleMark, vehicleYearManufacture, vehicleSpeed, vehicleCost, addTaxLargeVehicle) {
        super(vehicleMark, vehicleYearManufacture, vehicleSpeed, vehicleCost);
        this.addTaxLargeVehicle = addTaxLargeVehicle;
    }
    getTaxRate () {
        let addTax = super.getTaxRate();
        return addTax + this.addTaxLargeVehicle;
    }
}

let newPlane = new Plane('boing', 2009, 500, 40000);
let newCar = new Car('Mazda', 2017, 150, 3000);
let newShip = new Ship('Ship', 2015, 50, 8000000, 855);

console.log(`Самолет ${newPlane.vehicleMark} со скоростью ${newPlane.vehicleSpeed} км/ч за ${Vehicle.TIME_TO_TRIP} часа пролетит ${newPlane.getDistance()} км`);
console.log(`Машина ${newCar.vehicleMark} со скоростью ${newCar.vehicleSpeed} км/ч за ${Vehicle.TIME_TO_TRIP} часа проедет ${newCar.getDistance()} км`);
console.log(`Корабль ${newShip.vehicleMark} со скоростью ${newShip.vehicleSpeed} км/ч за ${Vehicle.TIME_TO_TRIP} часа проплывет ${newShip.getDistance()} км`);

console.log(`Налоговая ставка ставка на машину составляет ${newCar.getTaxRate()}`);
console.log(`Налоговая ставка ставка на машину составляет ${newPlane.getTaxRate()}`);
console.log(`Налоговая ставка ставка на машину составляет ${newShip.getTaxRate()}`);