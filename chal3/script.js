// ES6 Class
class Car {
  constructor(make, speed) {
    this.make = make;
    this._speed = speed;
  }

  accelerate() {
    this._speed += 10;
    console.log(`${this.make} is going at ${this._speed} km/h`);
  }

  brake() {
    this._speed -= 5;
    console.log(`${this.make} is going at ${this._speed} km/h`);
  }

  get speedUS() {
    return this._speed / 1.6;
  }

  set speedUS(speedInMph) {
    this._speed = speedInMph * 1.6;
  }
}

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this._charge = charge;
  }

  chargeBattery(chargeTo) {
    this._charge = chargeTo;
    console.log(`${this.make}'s battery is now charged to ${this._charge}%`);
  }

  accelerate() {
    if (this._charge > 0) {
      this._speed += 20;
      this._charge -= 1;
      console.log(
        `${this.make} going at ${this._speed} km/h, with a charge of ${this._charge}%`
      );
    } else {
      console.log(`${this.make} cannot accelerate. Battery is empty.`);
    }
  }

  // Getter for battery charge
  get charge() {
    return this._charge;
  }

  set charge(chargeLevel) {
    this._charge = chargeLevel;
  }
}

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
